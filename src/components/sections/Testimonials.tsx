import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { TestimonialCarousel } from "./TestimonialCarousel";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="Join Our Happy Customers"
          subtitle="Real stories from satisfied users who love our IPTV service."
        />
        <TestimonialCarousel />
      </Container>
    </section>
  );
}
