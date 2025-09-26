"use client";

import * as React from "react";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "“We built ElevenLabs to break down language and communication barriers. With Deel enabling us to hire and support exceptional talent anywhere, we can accelerate our innovation and bring more voices, stories, and ideas to every corner of the world.”",
    author: "Mati Staniszewski",
    title: "CEO, ElevenLabs",
    color: "bg-[#fbf1d1]",
  },
  {
    quote:
      "“Deel lets us hire and support top talent anywhere without slowing down. That’s a game-changer when you're building global financial infrastructure at startup speed.”",
    author: "Jack Zhang",
    title: "CEO, Airwallex",
    color: "bg-primary-blue",
  },
  {
    quote:
      "“Deel helps us hire incredible people all over the world— fast. That means we can keep helping businesses connect with their customers, without letting geography get in the way.”",
    author: "Des Taylor",
    title: "Co-Founder and Chief Strategy Officer, Intercom",
    color: "bg-[#ded6fc]",
  },
  {
    quote:
      "“Deel's infrastructure handles 90% of the heavy lifting for us. Whether we’re hiring contractors, expanding with EOR, or paying employees, Deel saves us time, money, and resources.”",
    author: "Stephen Epling",
    title: "Vice President of Global Rewards and Workplace, Outreach",
    color: "bg-primary-blue",
  },
];

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [progress, setProgress] = React.useState(0);

  const onScroll = React.useCallback(() => {
    if (api) {
      const scrollProgress = api.scrollProgress();
      setProgress(scrollProgress * 100);
    }
  }, [api]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onScroll();
    api.on("scroll", onScroll);
    return () => {
      api.off("scroll", onScroll);
    };
  }, [api, onScroll]);

  return (
    <section className="bg-muted py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">
        <Carousel setApi={setApi} opts={{align: "start", loop: false}}>
          <div className="mb-10 flex flex-col items-start justify-between gap-y-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-[40px] leading-[1.2] font-semibold text-dark-text font-display">
              Why companies around the world prefer Deel for expanding their
              team globally.
            </h2>
            <div className="hidden md:flex flex-shrink-0 items-center gap-x-3">
              <CarouselPrevious className="relative w-12 h-12 bg-white text-dark-text rounded-full shadow-sm border-none !opacity-100 disabled:bg-secondary disabled:text-medium-gray/50 hover:bg-gray-100" />
              <CarouselNext className="relative w-12 h-12 bg-dark-text text-white rounded-full shadow-sm border-none !opacity-100 disabled:bg-secondary disabled:text-medium-gray/50 hover:bg-gray-800" />
            </div>
          </div>

          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-6 basis-full md:basis-1/2 lg:basis-[calc(1/2.2)]"
              >
                <div
                  className={`p-8 lg:p-10 rounded-2xl h-full flex flex-col justify-between ${testimonial.color}`}
                >
                  <p className="font-display text-[22px] leading-[1.5] font-medium text-dark-text">
                    {testimonial.quote}
                  </p>
                  <div className="mt-8">
                    <p className="text-[18px] font-semibold text-dark-text font-body">
                      {testimonial.author}
                    </p>
                    <p className="text-[16px] text-medium-gray font-body">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex items-center justify-between gap-x-4">
            <div className="w-full h-[2px] bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-dark-text"
                style={{width: `${progress}%`}}
              />
            </div>
            <div className="flex md:hidden flex-shrink-0 items-center gap-x-3">
              <CarouselPrevious className="relative w-12 h-12 bg-white text-dark-text rounded-full shadow-sm border-none !opacity-100 disabled:bg-secondary disabled:text-medium-gray/50 hover:bg-gray-100" />
              <CarouselNext className="relative w-12 h-12 bg-dark-text text-white rounded-full shadow-sm border-none !opacity-100 disabled:bg-secondary disabled:text-medium-gray/50 hover:bg-gray-800" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
