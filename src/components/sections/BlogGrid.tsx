import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { posts } from "@/lib/site";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Reveal } from "../shared/Reveal";

export function BlogGrid() {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="From Our Blog"
          subtitle="Get the latest tips, tricks, and updates from our team of experts."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => {
            const postImage = PlaceHolderImages.find((img) => img.id === post.image);
            return (
              <Reveal key={post.id} delay={i * 0.1}>
                <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl">
                  {postImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        data-ai-hint={postImage.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                    <CardTitle className="mt-2 font-headline">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href={post.href} className="flex items-center font-semibold text-primary">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
