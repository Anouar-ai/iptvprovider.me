'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWhatsAppLink, trackWhatsAppClick } from '@/lib/whatsapp-utm';
import { siteConfig } from '@/lib/site-config';

interface WhatsAppButtonProps {
  /**
   * Pre-filled message for WhatsApp
   */
  message?: string;
  
  /**
   * UTM tracking parameters
   */
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    term?: string;
  };

  /**
   * Button variant
   */
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';

  /**
   * Button size
   */
  size?: 'default' | 'sm' | 'lg' | 'icon';

  /**
   * Custom class name
   */
  className?: string;

  /**
   * Button text
   */
  children?: React.ReactNode;

  /**
   * Show icon
   */
  showIcon?: boolean;
}

/**
 * WhatsApp CTA Button with UTM Tracking
 * Automatically tracks clicks in Google Analytics
 */
export function WhatsAppButton({
  message = "Hi! I'm interested in your IPTV service.",
  utm = {},
  variant = 'default',
  size = 'default',
  className = '',
  children = 'Chat on WhatsApp',
  showIcon = true,
}: WhatsAppButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // Track the click
    trackWhatsAppClick({
      source: utm.source,
      medium: utm.medium,
      campaign: utm.campaign,
      content: utm.content,
    });

    // Visual feedback
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);

    // Generate WhatsApp link
    const whatsappUrl = generateWhatsAppLink({
      phone: siteConfig.telephone,
      message,
      ...utm,
    });

    // Open WhatsApp in new window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={`${className} ${isClicked ? 'scale-95' : ''} transition-transform`}
    >
      {showIcon && <MessageCircle className="mr-2 h-4 w-4" />}
      {children}
    </Button>
  );
}

/**
 * Floating WhatsApp Button (sticky bottom-right)
 * Appears on all pages for easy customer contact
 */
export function FloatingWhatsAppButton({
  message = "Hi! I have a question about your IPTV service.",
  utm = { source: 'website', medium: 'floating_button', campaign: 'engagement' },
}: Pick<WhatsAppButtonProps, 'message' | 'utm'>) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="text-muted-foreground hover:text-foreground text-xs"
        aria-label="Hide WhatsApp button"
      >
        ✕
      </button>
      
      {/* WhatsApp floating button */}
      <WhatsAppButton
        message={message}
        utm={utm}
        variant="default"
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl bg-green-500 hover:bg-green-600 text-white"
        showIcon={true}
      >
        <MessageCircle className="h-6 w-6" />
      </WhatsAppButton>
    </div>
  );
}
