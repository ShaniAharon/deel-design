"use client";

import {useState} from "react";
import Image from "next/image";
import {ArrowRight} from "lucide-react";

// A simple utility for conditional classnames, assuming it exists at this path
// as is standard in shadcn/ui projects.
//
// You can create `src/lib/utils.ts` with:
// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"
//
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }
import {cn} from "@/lib/utils";

const TABS = [
  "Global Hiring",
  "Global Payroll",
  "Compliance",
  "Employee relocation",
  "Mergers/Acquistions",
];

const CustomerStories = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="bg-light-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase text-dark-text tracking-wider text-sm">
            Customer Stories
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-dark-text sm:text-[40px] leading-tight">
            We’ve helped 35,000+ companies grow and manage global teams
          </h2>
        </div>

        <div className="mt-12">
          <div className="sm:hidden">
            <div className="overflow-x-auto whitespace-nowrap pb-2 text-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="inline-flex items-center space-x-2 rounded-full border border-dark-text/20 bg-white/50 p-1">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none",
                      activeTab === tab
                        ? "bg-dark-text text-white"
                        : "text-dark-text"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden justify-center sm:flex">
            <div className="inline-flex items-center space-x-1 rounded-full border border-dark-text/20 bg-white/50 p-1">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-medium transition-colors focus:outline-none",
                    activeTab === tab
                      ? "bg-dark-text text-white"
                      : "text-dark-text hover:bg-gray-100"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="transform rounded-2xl border-8 border-primary-blue bg-primary-blue p-2 shadow-lg lg:-rotate-2">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Turing_min_9a47ee9e29-20.jpg?"
                alt="Turing team members working on laptops in an office."
                width={550}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="relative z-10 lg:-ml-16">
            <div className="rounded-2xl bg-white p-8 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] sm:p-12">
              <h5 className="font-display text-7xl font-semibold text-dark-text lg:text-8xl">
                5,000+
              </h5>
              <h6 className="mt-1 font-display text-lg font-medium text-dark-text">
                contracts created
              </h6>
              <p className="mt-6 text-base leading-relaxed text-medium-gray">
                Turing has around 400 developers working for customers and 150
                developers working to build Turing. They were able to migrate
                everyone to Deel in days. Now they use Deel to manage, pay, and
                onboard every developer, in over 60 different countries.
              </p>
              <a
                href="https://www.deel.com/case-studies/turing"
                className="group mt-6 inline-flex items-center font-semibold text-dark-text hover:text-gray-700"
              >
                Read customer story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
