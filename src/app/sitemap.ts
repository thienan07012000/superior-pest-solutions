import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { services } from '@/constants/services'
import { getBlogPosts } from '@/lib/blog'

const BASE_URL = 'https://superiorpestsolutionsnwa.com'

/**
 * Recursively scans the app directory for page.tsx/page.js files
 * and returns an array of route paths (e.g. "/services", "/areas-we-serve/fayetteville").
 * 
 * Dynamic routes (directories starting with "[") are skipped here
 * and resolved separately using their data sources.
 */
function discoverStaticRoutes(dir: string, basePath: string = ''): string[] {
  const routes: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    // Skip internal Next.js directories, route groups, and dynamic segments
    if (
      entry.name.startsWith('_') ||
      entry.name.startsWith('(') ||
      entry.name.startsWith('[')
    ) {
      continue
    }

    const fullPath = path.join(dir, entry.name)
    const routePath = `${basePath}/${entry.name}`

    // Check if this directory contains a page file
    const hasPage =
      fs.existsSync(path.join(fullPath, 'page.tsx')) ||
      fs.existsSync(path.join(fullPath, 'page.js')) ||
      fs.existsSync(path.join(fullPath, 'page.jsx'))

    if (hasPage) {
      routes.push(routePath)
    }

    // Continue scanning nested directories
    routes.push(...discoverStaticRoutes(fullPath, routePath))
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'src', 'app')

  // 1. Discover all static routes from the filesystem
  const staticRoutes = discoverStaticRoutes(appDir)

  // 2. Resolve dynamic [slug] routes from their data sources
  const dynamicServiceRoutes = services.map(
    (service) => `/services/${service.slug}`
  )

  // 3. Resolve dynamic blog routes
  const posts = getBlogPosts();
  const dynamicBlogRoutes = posts.map(
    (post) => `/blog/${post.slug}`
  )

  // 4. Combine homepage + static + dynamic, deduplicated
  const allRoutes = [...new Set(['/', ...staticRoutes, ...dynamicServiceRoutes, ...dynamicBlogRoutes])]

  // 4. Map each route to a sitemap entry with appropriate SEO metadata
  return allRoutes.map((route) => {
    let priority = 0.5
    let changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'

    if (route === '/') {
      priority = 1.0
      changeFrequency = 'weekly'
    } else if (route === '/services') {
      priority = 0.9
      changeFrequency = 'weekly'
    } else if (route === '/areas-we-serve') {
      priority = 0.9
      changeFrequency = 'monthly'
    } else if (route.startsWith('/services/')) {
      priority = 0.8
      changeFrequency = 'weekly'
    } else if (route.startsWith('/areas-we-serve/')) {
      priority = 0.7
      changeFrequency = 'monthly'
    } else if (route === '/blog') {
      priority = 0.7
      changeFrequency = 'weekly'
    } else if (route.startsWith('/blog/')) {
      priority = 0.6
      changeFrequency = 'monthly'
    } else if (route === '/privacy-policy') {
      priority = 0.3
      changeFrequency = 'yearly'
    }

    return {
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }
  })
}
