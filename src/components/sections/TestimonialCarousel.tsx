
"use client";

import Swiper from 'react-id-swiper';
import 'swiper/css';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function TestimonialCarousel() {
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  };

  const testimonialImages = PlaceHolderImages.filter(img => img.id.startsWith('testimonial-'));

  return (
    <Swiper {...params}>
      {testimonialImages.map((image) => (
        <div key={image.id}>
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={image.width || 280}
            height={image.height || 280}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="rounded-lg object-cover"
            data-ai-hint={image.imageHint}
          />
        </div>
      ))}
    </Swiper>
  );
}
