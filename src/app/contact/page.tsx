
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Container } from '@/components/shared/Container';
import { ContactForm } from '@/components/shared/ContactForm';
import SemanticContent from '@/components/shared/SemanticContent';
import { generateSemanticContent, type SemanticContent as SemanticContentType } from '@/lib/vector-seo';
import { Schema } from '@/components/shared/Schema';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { generateMetadata } from '@/lib/site-config';

export function generateMetadata(): Metadata {
    return generateMetadata({
        title: "Contact Us | IPTV Provider",
        description: "Get in touch with our team. Whether you have a question about our IPTV Provider or need support, we're here to help.",
        canonical: "/contact",
    });
}

export default async function ContactPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: "https://www.iptvprovider.me/" },
        { name: "Contact Us", item: "https://www.iptvprovider.me/contact" }
    ]);
    
    let semanticContent: SemanticContentType;
    try {
        semanticContent = await generateSemanticContent("Contact IPTV Provider Support");
    } catch (error) {
        console.error("Failed to generate semantic content:", error);
        semanticContent = {
            primaryEntity: "Contact IPTV Provider Support",
            relatedEntities: [],
            semanticClusters: [],
            contextualKeywords: []
        };
    }

    return (
        <>
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
            <SemanticContent 
                primaryEntity={semanticContent.primaryEntity}
                relatedEntities={semanticContent.relatedEntities}
                semanticClusters={semanticContent.semanticClusters}
                contextualKeywords={semanticContent.contextualKeywords}
            />
            <main className="py-16 sm:py-24">
                <Container>
                    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                      <ol className="flex items-center gap-2">
                        <li>
                          <Link href="/" className="hover:text-primary">
                            Home
                          </Link>
                        </li>
                        <li>/</li>
                        <li>
                            Contact Us
                        </li>
                      </ol>
                    </nav>
                    <div className="mx-auto max-w-lg">
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Us</CardTitle>
                                <CardDescription>
                                    Have a question or need support? Fill out the form below and we'll get back to you shortly.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ContactForm />
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </main>
        </>
    );
}
