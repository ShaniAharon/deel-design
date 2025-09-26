"use client";

import React, {useRef} from "react";
import {Star, ArrowLeft, ArrowRight} from "lucide-react";

const reviewsData = [
  {
    author: "Verified User in Telecommunications",
    text: "Deel has revolutionized the way I manage payroll. It's reliable, user-friendly, and cost-effective, making it an indispensable too...",
  },
  {
    author: "Verified User in Translation and Localization",
    text: "Deel has been an absolute game-changer for me! Their platform is incredibly user-friendly. From streamlining my payroll process to...",
  },
  {
    author: "Viviana Hernandez",
    text: "The platform is incredibly intuitive, making it a breeze for me to navigate and get things done efficiently. On top of that, their...",
  },
  {
    author: "Joaquin Ancona",
    text: "Deel so far has been very easy to navigate through and evrything is elegantly designed so it is easy to follow.",
  },
  {
    author: "Angelie Martinez",
    text: "User friendly and very easy to use and the security is fabulous.",
  },
  {
    author: "ignacio S",
    text: "I was impressed with Deel's quick services and exceptional support.",
  },
  {
    author: "Sunny Yu",
    text: "I like that it's easy to use and the customer support was awesome. They were prompt and helped me out.",
  },
  {
    author: "Brunno Mark",
    text: "Deel has so many options to control everything related to financial management: contracts, invoices, transactions, multiple withdr...",
  },
];

const G2Icon = () => (
  <div className="w-10 h-10 bg-[#2D3748] rounded-full flex items-center justify-center font-bold text-white text-lg flex-shrink-0">
    G
  </div>
);

const ReviewCard = ({review}: {review: (typeof reviewsData)[0]}) => (
  <div className="flex-shrink-0 w-[300px] md:w-[340px] space-y-4">
    <p className="text-sm text-[#A0AEC0] font-body">{review.author}</p>
    <div className="flex items-center">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Star key={i} size={20} className="text-[#FFD700] fill-[#FFD700]" />
        ))}
    </div>
    <p className="text-lg text-[#E2E8F0] font-body">{review.text}</p>
  </div>
);

const ClientReviews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340 + 24; // Card width (340px) + gap-6 (24px)
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#1A1A1A]">
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-semibold font-display text-[#F0F0F0] mb-4">
              See what our clients are saying
            </h2>
            <a
              href="https://www.g2.com/products/deel/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <G2Icon />
              <p className="text-lg text-[#F0F0F0] font-body group-hover:underline">
                4.8/5 based on 9,930+ reviews
              </p>
            </a>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2D3748] text-[#F0F0F0] hover:bg-[#4A5568] transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2D3748] text-[#F0F0F0] hover:bg-[#4A5568] transition-colors"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 -mb-4 scrollbar-hide"
        >
          {reviewsData.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
