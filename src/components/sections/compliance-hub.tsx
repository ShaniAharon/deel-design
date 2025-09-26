import React from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";

const complianceFeatures = [
  {
    title: "Keep track of the latest legal updates",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Legal_Updates_f7153a4d00-16.png?",
    imageAlt: "Mockup of legal updates tracking in Deel Compliance Hub",
    width: 384,
    height: 310,
  },
  {
    title: "Get monthly workforce insights",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Workforce_Insights_ee62bbf42f-17.png?",
    imageAlt: "Mockup of workforce insights report in Deel",
    width: 384,
    height: 310,
  },
  {
    title: "Easily determine worker classification",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Worker_Classification_0d445ad837-18.png?",
    imageAlt: "Mockup of worker classification tool in Deel",
    width: 384,
    height: 310,
  },
];

const ComplianceHub = () => {
  return (
    <div className="bg-[#1a1a1a]">
      <div className="-mb-px">
        <svg
          className="w-full text-[#FDF5E6] fill-current"
          viewBox="0 0 1620 128"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M-2.5 -3.5H1622.5V86C1488.16 110.33 1353.81 122.5 1219.47 122.5C928.391 122.5 694.945 42.5 0 42.5C-2.33333 42.5 -3.16667 42.1667 -2.5 41.5V-3.5Z" />
        </svg>
      </div>

      <section className="text-[#f0f0f0] pt-20 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.05em] text-[#f0f0f0]">
              Global Compliance
            </p>
            <h2 className="mt-2 text-[40px] lg:text-[48px] font-semibold text-white leading-tight">
              Unlock Continuous Compliance{"\u2122"} with the Deel Compliance
              Hub
            </h2>
            <p className="mt-4 text-lg text-[#f0f0f0] max-w-[800px] mx-auto">
              Keep your finger on the pulse of global compliance issues like
              never before. Our Compliance Hub provides access to the latest
              regulatory updates and risk warnings, offering guidance and
              actionable alerts to enhance compliance—all in a single place.
            </p>
            <div className="mt-8">
              <Button
                className="bg-zinc-50 text-[#1a1a1a] font-medium text-base rounded-lg hover:bg-zinc-200 transition-colors"
                style={{padding: "16px 32px", height: "auto"}}
              >
                Get started
              </Button>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-6">
                <div className="rounded-xl overflow-hidden w-full">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.imageAlt}
                    width={feature.width}
                    height={feature.height}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-center text-[#f0f0f0]">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComplianceHub;
