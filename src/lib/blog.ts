import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  authorSlug: string;
  date: string;
  minRead: number;
  image: string;
  imageAlt: string;
  content: string;
}

export interface Author {
  name: string;
  slug: string;
  bio: string;
  image: string;
}

const AUTHORS: Author[] = [
  {
    name: "Superior Pest Solutions Team",
    slug: "superior-pest-solutions-team",
    bio: "Dalton and Brandon are cousins who grew up next door to each other in rural Oklahoma. Their families taught them to work hard, look out for their neighbors, and leave things better than they found them. That's why they started Superior Pest Solutions NWA. They wanted to help Arkansas families the right way. No pressure, no sales tricks. Just real people who know what they're doing and will be straight with you about what your home actually needs.",
    image: "/authorlogo.png",
  },
];

function authorNameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getAuthors(): Author[] {
  return AUTHORS;
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}

export function getPostsByAuthor(authorSlug: string): BlogPost[] {
  return getBlogPosts().filter((post) => post.authorSlug === authorSlug);
}

export function getBlogPosts(): BlogPost[] {
  const blogsDirectory = path.join(process.cwd(), "src", "content", "blog");
  
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
      const match = fileContents.match(matterRegex);

      let content = fileContents;
      const data: Record<string, string> = {};

      if (match) {
        const frontmatter = match[1];
        content = match[2];

        frontmatter.split("\n").forEach((line) => {
          const colonIndex = line.indexOf(":");
          if (colonIndex !== -1) {
            const key = line.slice(0, colonIndex).trim();
            let value = line.slice(colonIndex + 1).trim();
            if (value.startsWith('"') && value.endsWith('"')) {
              value = value.slice(1, -1);
            } else if (value.startsWith("'") && value.endsWith("'")) {
              value = value.slice(1, -1);
            }
            data[key] = value;
          }
        });
      }

      const authorName = data.author || "Superior Pest Solutions Team";

      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        author: authorName,
        authorSlug: authorNameToSlug(authorName),
        date: data.date || "",
        minRead: parseInt(data.minRead || "5", 10),
        image: data.image || "",
        imageAlt: data.imageAlt || "",
        content: content.trim(),
      };
    });

  return allPostsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((post) => post.slug === slug);
}
