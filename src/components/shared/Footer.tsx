import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { footerLinks } from "@/lib/site-data/footer";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Your premier IPTV Provider for unlocking a world of entertainment. The most reliable choice for all your streaming needs.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">Supported Apps</h2>
            <ul className="mt-4 space-y-2">
              {footerLinks.supportedLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div itemScope itemType="https://schema.org/Organization">
            <h2 className="text-sm font-semibold uppercase tracking-wider">Contact</h2>
            <address className="mt-4 space-y-2 text-sm not-italic text-muted-foreground">
              <p itemProp="address">{footerLinks.contact.address}</p>
              <a href={`tel:${footerLinks.contact.phone}`} className="block hover:text-primary" itemProp="telephone">
                {footerLinks.contact.phone}
              </a>
              <a href={`https://wa.me/${footerLinks.contact.whatsapp?.replace(/[^0-9]/g, "")}`} className="block hover:text-primary" itemProp="telephone">
                WhatsApp: {footerLinks.contact.whatsapp}
              </a>
              <a href={`mailto:${footerLinks.contact.email}`} className="hover:text-primary" itemProp="email">
                {footerLinks.contact.email}
              </a>
            </address>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t py-6 sm:flex-row">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} IPTV Provider. All rights reserved.
            </p>
            <div className="hidden sm:block text-muted-foreground">|</div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link href="/legal" className="hover:text-primary">Legal Disclaimer</Link>
              <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
              <Link href="/refund-policy" className="hover:text-primary">Refund Policy</Link>
              <Link href="/dmca-policy" className="hover:text-primary">DMCA</Link>
              <Link href="/licensing-disclaimer" className="hover:text-primary">Licensing</Link>
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-4 sm:mt-0">
            <Link href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
            <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
