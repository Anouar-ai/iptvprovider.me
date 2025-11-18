
import Link from 'next/link'
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface RelatedLink {
  href: string;
  title: string;
  keyword: string;
}

export default function InternalLinks({ 
  relatedLinks 
}: { 
  relatedLinks: RelatedLink[]
}) {
  if (!relatedLinks || relatedLinks.length === 0) {
    return null;
  }
  
  return (
    <Card className="mt-12 not-prose">
        <CardHeader>
            <CardTitle>Related Articles</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-3">
                {relatedLinks.map((link) => (
                <li key={link.href}>
                    <Link 
                    href={link.href}
                    title={link.title}
                    className="flex items-center justify-between text-primary hover:underline group"
                    >
                    <span>{link.keyword}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                </li>
                ))}
            </ul>
        </CardContent>
    </Card>
  )
}
