"use client";

import {useState} from "react";
import Image from "next/image";

const tabsData = [
  {
    id: "Deel Payroll",
    label: "Deel Payroll",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/Globe_74bc129904-8.svg?",
  },
  {
    id: "Deel HR",
    label: "Deel HR",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/Profile_f77379e60b-9.svg?",
  },
  {
    id: "Deel IT",
    label: "Deel IT",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/Videochat_180711eda8-10.svg?",
  },
  {
    id: "Deel Services",
    label: "Deel Services",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/Apps_4040dcc11a-11.svg?",
  },
];

const payrollCardsData = [
  {
    title: "Special offer: Up to 3 free months* of Deel PEO",
    description:
      "Get Deel PEO for free for up to 3 months*. We take on your compliance burdens and HR admin. You attract top US talent with competitive benefits and automated payroll.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Flex_Grid_Payroll_PEO_6c5eb817a4-6.png?",
    link: "https://www.deel.com/payroll/peo/",
    imageWidth: 1310,
    imageHeight: 542,
    span: "lg:col-span-2",
  },
  {
    title: "Deel US Payroll",
    description:
      "Pay US employees through a self-serve platform with automated local payroll tax calculations, built-in compliance, and seamless integrations.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Flex_Grid_Payroll_US_Payroll_f3288b5ca9-7.png?",
    link: "https://www.deel.com/payroll/us/",
    imageWidth: 865,
    imageHeight: 600,
    span: "lg:col-span-1",
  },
  {
    title: "Deel EOR (Employer of Record)",
    description:
      "Hire and onboard employees in 130+ countries compliantly and quickly without opening an entity, minimizing risks related to taxes, benefits, or labor laws.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Flex_Grid_Payroll_EOR_0aadbd148d-8.png?",
    link: "https://www.deel.com/payroll/hire-employees/",
    imageWidth: 1311,
    imageHeight: 600,
    span: "lg:col-span-2",
  },
  {
    title: "Deel Contractor Management",
    description:
      "Onboard, manage, and pay global contractors with a user-friendly, self-serve platform that drastically reduces HR and payroll admin time.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Flex_Grid_Payroll_Contractor_f056c83ee8-9.png?",
    link: "https://www.deel.com/payroll/hire-contractors/",
    imageWidth: 865,
    imageHeight: 600,
    span: "lg:col-span-1",
  },
  {
    title: "Deel Contractor of Record",
    description:
      "Reduce misclassification risk—let us classify and manage your global contractors.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Flex_Grid_Payroll_Contractor_of_Record_985dff8f8d-10.png?",
    link: "https://www.deel.com/payroll/contractor-of-record/",
    imageWidth: 865,
    imageHeight: 600,
    span: "lg:col-span-1",
  },
  {
    title: "Deel Global Payroll",
    description:
      "Streamline international payroll, compliance, tax deductions, filings, and more in 130+ countries, backed by our team of in-house payroll experts.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Flex_Grid_Payroll_Global_Payroll_1d42dfd7b2-11.png?",
    link: "https://www.deel.com/payroll/global/",
    imageWidth: 865,
    imageHeight: 600,
    span: "lg:col-span-2",
  },
];

type CardProps = {
  card: (typeof payrollCardsData)[0];
};

const Card = ({card}: CardProps) => (
  <div
    className={`bg-accent rounded-xl p-8 sm:p-10 flex flex-col shadow-lg ${card.span}`}
  >
    <div className="mb-6 overflow-hidden rounded-md">
      <Image
        src={card.image}
        alt={card.title}
        width={card.imageWidth}
        height={card.imageHeight}
        className="w-full h-auto object-cover"
      />
    </div>
    <h4 className="text-2xl font-medium text-foreground mb-4 text-left">
      {card.title}
    </h4>
    <p className="text-lg text-muted-foreground mb-8 flex-grow text-left">
      {card.description}
    </p>
    <div className="mt-auto text-left">
      <a
        href={card.link}
        className="inline-block bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg text-base hover:opacity-90 transition-opacity"
      >
        Learn more
      </a>
    </div>
  </div>
);

export default function GlobalPeoplePlatform() {
  const [activeTab, setActiveTab] = useState("Deel Payroll");

  return (
    <section className="bg-muted">
      <div>
        <svg
          viewBox="0 0 1620 128"
          preserveAspectRatio="none"
          className="w-full h-auto block"
          fill="hsl(var(--muted))"
        >
          <path d="M-53.763,128 C530.561,128 535.811,28.853 1056.23,28.853 C1576.65,28.853 1587.45,128 2174.5,128 L2174.5,0 L-53.763,0 L-53.763,128 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-20">
        <h2 className="text-[40px] leading-tight font-semibold text-foreground text-center mb-12 lg:mb-20">
          Deel is your all-in-one <br />
          Global People Platform
        </h2>

        <div className="mb-12 lg:mb-20">
          <div className="flex justify-center -mx-2">
            <div className="flex space-x-2 sm:space-x-4 overflow-x-auto pb-2 -mb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center justify-center p-6 rounded-xl transition-colors w-40 sm:w-52 h-36 flex-shrink-0 ${
                    activeTab === tab.id
                      ? "bg-accent"
                      : "bg-[#FAF8F1] hover:bg-opacity-80"
                  }`}
                >
                  <div className="w-12 h-12 mb-2 relative">
                    <Image
                      src={tab.icon}
                      alt={`${tab.label} icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-medium text-foreground text-center text-lg">
                    {tab.label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          {activeTab === "Deel Payroll" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {payrollCardsData.map((card, index) => (
                <Card key={index} card={card} />
              ))}
            </div>
          )}
          {/* Content for other tabs can be added here */}
        </div>
      </div>
    </section>
  );
}
