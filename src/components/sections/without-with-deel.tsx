import Image from "next/image";

const withoutDeelDiagramUrl =
  "https://d1mgcpums0qvsa.cloudfront.net/DEE/4.6/list_1.png";
const withDeelDiagramUrl =
  "https://d1mgcpums0qvsa.cloudfront.net/DEE/4.6/list_2.png";
const crossIconUrl =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/cross-3.webp?";
const tickIconUrl =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/tick-5.webp?";

const WithoutDeelLabelSVG = ({className}: {className?: string}) => (
  <svg
    viewBox="0 0 171 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M164.849 29.3901C172.951 22.8427 167.241 8.52734 157.052 4.2382C130.852 -6.41995 31.9517 2.14732 6.15195 12.3392C-5.74805 17.8392 2.65178 32.8392 12.152 36.8392C44.752 49.3392 135.252 43.8392 158.348 31.8901L164.849 29.3901Z"
      fill="#2D3748"
    />
  </svg>
);

const WithDeelLabelSVG = ({className}: {className?: string}) => (
  <svg
    viewBox="0 0 137 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M131.291 29.3901C139.393 22.8427 133.683 8.52734 123.494 4.2382C97.2938 -6.41995 24.894 2.14732 5.09421 12.3392C-6.70579 17.8392 1.69404 32.8392 11.1943 36.8392C43.7943 49.3392 108.094 43.8392 131.291 31.8901Z"
      fill="#2D3748"
    />
  </svg>
);

const WithoutDeelLabel = () => (
  <div className="relative flex justify-center items-center h-[36px]">
    <WithoutDeelLabelSVG className="absolute w-[143px] h-[27px] md:w-[187px] md:h-[36px]" />
    <p className="relative text-white font-semibold font-body text-xl md:text-2xl z-10">
      Without Deel
    </p>
  </div>
);

const WithDeelLabel = () => (
  <div className="relative flex justify-center items-center h-[36px]">
    <WithDeelLabelSVG className="absolute w-[115px] h-[27px] md:w-[147px] md:h-[36px]" />
    <p className="relative text-white font-semibold font-body text-xl md:text-2xl z-10">
      With Deel
    </p>
  </div>
);

const ComparisonCard = ({
  title,
  imageUrl,
  items,
  labelComponent: Label,
}: {
  title: string;
  imageUrl: string;
  items: any;
  labelComponent: React.ComponentType;
}) => (
  <div className="bg-[rgba(255,255,255,0.3)] rounded-2xl p-6 md:p-10 flex flex-col h-full">
    <div className="mb-6 md:mb-8">
      <Label />
    </div>
    <div className="mb-6 md:mb-8">
      <Image
        src={imageUrl}
        alt={`${title} diagram`}
        width={508}
        height={286}
        className="w-full h-auto"
      />
    </div>
    <ul className="space-y-4">
      {items.map((item: any, index: any) => (
        <li key={index} className="flex items-start gap-4">
          <Image
            src={item.iconUrl}
            alt=""
            width={24}
            height={24}
            className="mt-0.5 flex-shrink-0"
          />
          <p className="text-base text-muted-foreground font-body">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const WithoutWithDeelSection = () => {
  const withoutDeelItems: any = [
    {
      text: "Missing out on top talent because global hiring is too complex alone.",
      iconUrl: crossIconUrl,
    },
    {
      text: "Less productivity and more frustration with slow onboarding and inaccurate payroll.",
      iconUrl: crossIconUrl,
    },
    {
      text: "Paying expensive fines and combating legal headaches from compliance risks.",
      iconUrl: crossIconUrl,
    },
  ];

  const withDeelItems = [
    {
      text: "Instant hiring in 150+ countries—no local entity needed.",
      iconUrl: tickIconUrl,
    },
    {
      text: "Effortless onboarding with localized contracts, payroll, and benefits handled for you.",
      iconUrl: tickIconUrl,
    },
    {
      text: "100% compliance with built-in tax and legal protection.",
      iconUrl: tickIconUrl,
    },
  ];

  return (
    <section className="bg-accent py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-[40px] font-semibold text-primary mb-4">
            One platform. Zero headaches.
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Deel eliminates the chaos with a single, seamless solution so you
            can focus
            <br className="hidden sm:block" /> on growing and supporting your
            team.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ComparisonCard
            title="Without Deel"
            imageUrl={withoutDeelDiagramUrl}
            items={withoutDeelItems}
            labelComponent={WithoutDeelLabel}
          />
          <ComparisonCard
            title="With Deel"
            imageUrl={withDeelDiagramUrl}
            items={withDeelItems}
            labelComponent={WithDeelLabel}
          />
        </div>
      </div>
    </section>
  );
};

export default WithoutWithDeelSection;
