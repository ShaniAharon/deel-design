import React from "react";
import Image from "next/image";

const advantages = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/Chart_392ccb9004-12.svg?",
    title: "Powerful reporting",
    description:
      "Unlock unrivalled insights into spending and performance with compensation, OKRs, equity and more for your team in one system.",
    width: 55,
    height: 42,
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/Asterisk_413ad7289b-13.svg?",
    title: "Scalability",
    description:
      "From contractors and EOR to payroll and PEO, Deel’s the only platform that can evolve with every stage of your company’s growth.",
    width: 48,
    height: 48,
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/Messages_ffbdc2b1cd-14.svg?",
    title: "Dedicated support",
    description:
      "We don’t rely on third parties, which means you’ll get a single dedicated POC to work alongside with and guaranteed 1.25 min FRT.",
    width: 55,
    height: 44,
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/Avatars_fb897d467b-15.svg?",
    title: "Trusted partner",
    description:
      "Engage with one partner for your global \u2028growth. From M&As to entity set up, partner with our in-house team for all your expansion needs.",
    width: 55,
    height: 44,
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/Integration_81276006e7-16.svg?",
    title: "Seamless integration",
    description:
      "Eliminate data silos and reduce manual work with 100+ integrations across your entire tech stack, from accounting to expenses.",
    width: 48,
    height: 48,
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/Lock_00a2c2eb46-17.svg?",
    title: "Unrivalled security",
    description:
      "Connect your company in a single secure platform. Our platform is GDPR, SOC2, and ISO 27001 compliant.",
    width: 41,
    height: 52,
  },
];

const DeelAdvantage = () => {
  return (
    <section className="bg-[#1a1a1a] text-[#f0f0f0]">
      <div className="mx-auto max-w-[1150px] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.1em]">
            The Deel Advantage
          </p>
          <h2 className="mt-4 text-[40px] font-semibold leading-tight text-white md:text-[56px] md:leading-[1.1]">
            Move faster with HR and payroll for your team in one place
          </h2>
          <p className="mt-6 text-lg">
            Deel’s the only platform that allows you to combine{" "}
            <a
              href="https://www.deel.com/payroll/"
              className="text-white underline hover:no-underline"
            >
              payroll
            </a>
            ,{" "}
            <a
              href="https://www.deel.com/hr/"
              className="text-white underline hover:no-underline"
            >
              HR
            </a>
            , performance, and compliance for any type of worker in 150
            countries into a single{" "}
            <a
              href="https://www.deel.com/hr-platform/"
              className="text-white underline hover:no-underline"
            >
              HR platform
            </a>
            . Consolidate your tools, reduce overhead, and unlock unrivalled
            insights into your workforce data.
          </p>
          <div className="mt-8">
            <button className="rounded-sm bg-white px-6 py-3 font-semibold text-[#0a0a0a] transition-colors hover:bg-gray-200">
              Get started
            </button>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage) => (
            <div key={advantage.title}>
              <Image
                src={advantage.icon}
                alt=""
                width={advantage.width}
                height={advantage.height}
              />
              <h3 className="mb-2 mt-6 text-[20px] font-medium leading-tight text-white">
                {advantage.title}
              </h3>
              <p className="text-base leading-relaxed text-white">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeelAdvantage;
