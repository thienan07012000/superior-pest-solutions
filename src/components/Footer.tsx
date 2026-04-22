import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Roach Control", href: "/services/roach-control" },
        { name: "Ant Control", href: "/services/ant-control" },
        { name: "Mosquito Control", href: "/services/mosquito-control" },
        { name: "Rodent Control", href: "/services/rodent-control" },
        { name: "Explore All →", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Areas We Serve", href: "/areas-we-serve" },
        { name: "Blog", href: "/blog" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/p/Superior-Pest-Solutions-Northwest-AR-61567145803932/",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/superiorpestsolutionsnwa/",
    },
    {
      name: "LinkedIn",
      icon: <LinkedinIcon />,
      href: "https://www.linkedin.com/company/superiorpestsolutionsnwa/",
    },
  ];

  return (
    <footer className="bg-white border-t border-black/5 pt-20 pb-[calc(6rem+env(safe-area-inset-bottom))] md:pb-10 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--brand-red)]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--brand-red)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block relative w-80 h-20 mb-6">
              <Image
                src="/superiorpestsolutions-logo-navbar.png"
                alt="Superior Pest Solutions"
                fill
                sizes="(max-width: 768px) 320px, 320px"
                className="object-contain object-left"
              />
            </Link>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8 max-w-sm">
              Providing premium, eco-friendly pest control solutions to Northwest Arkansas. Veteran owned and committed to keeping your home or business pest-free.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-foreground/60 transition-all duration-300 hover:bg-[var(--brand-red)] hover:text-white hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <div className="text-[var(--brand-red)] font-normal text-lg mb-6 uppercase tracking-wider">
                {column.title}
              </div>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/60 hover:text-[var(--brand-red)] transition-colors duration-200 text-base flex items-center"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <div className="text-[var(--brand-red)] font-normal text-lg mb-6 uppercase tracking-wider">
              Contact Info
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--brand-red)]/10 flex items-center justify-center text-[var(--brand-red)] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-foreground/70 text-base leading-relaxed font-semibold">
                  160 E Poplar St C, Fayetteville,<br />
                  AR 72703, United States
                </span>
              </li>
              <li>
                <a
                  href="tel:+14793644588"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--brand-red)]/10 flex items-center justify-center text-[var(--brand-red)] shrink-0 transition-colors duration-300 group-hover:bg-[var(--brand-red)] group-hover:text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-foreground/70 group-hover:text-[var(--brand-red)] transition-colors duration-200 font-semibold">
                    +1 479-364-4588
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Information@superiorpestsolutionsllc.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--brand-red)]/10 flex items-center justify-center text-[var(--brand-red)] shrink-0 transition-colors duration-300 group-hover:bg-[var(--brand-red)] group-hover:text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-foreground/70 group-hover:text-[var(--brand-red)] transition-colors duration-200 font-semibold text-xs sm:text-sm md:text-base break-all">
                    Information@superiorpestsolutionsllc.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/60 text-xs md:text-sm text-center order-2 md:order-1">
            © {currentYear} Superior Pest Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-8 order-1 md:order-2">
            <Link href="/privacy-policy" className="text-foreground/80 hover:text-[var(--brand-red)] transition-colors text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
