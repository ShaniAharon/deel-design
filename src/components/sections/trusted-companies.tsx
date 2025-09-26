import Image from "next/image";

const logos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/logo_scroller_shopify_31f4749d8c-2.svg?",
    alt: "Shopify logo",
    width: 193,
    height: 56,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/logo_scroller_klarna_e34cc41c5c-3.svg?",
    alt: "Klarna logo",
    width: 187,
    height: 56,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/reddit_93629e804a-4.svg?",
    alt: "Reddit logo",
    width: 167,
    height: 56,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/logo_scroller_jellybelly_425a624ffc-5.svg?",
    alt: "Jelly Belly logo",
    width: 120,
    height: 56,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/logo_scroller_instacart_cfbc68d690-6.svg?",
    alt: "Instacart logo",
    width: 231,
    height: 56,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/svgs/logo_scroller_on_running_cff30fcd5e-7.svg?",
    alt: "On Running logo",
    width: 118,
    height: 56,
  },
];

const TrustedCompanies = () => {
  return (
    <div className="py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-[rgb(71,85,124)] mb-12 font-sans">
          DEEL IS TRUSTED BY 35,000+ COMPANIES FROM STARTUPS TO ENTERPRISE
          BUSINESSES
        </p>
        <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex animate-[scroll_40s_linear_infinite]">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-12 flex items-center justify-center h-14"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
