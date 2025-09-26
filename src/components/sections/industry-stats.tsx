import Image from "next/image";

const statsData = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/User_Group_e1f4da88d2-13.png?",
    value: "500K",
    label: "workers onboarded globally",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Globe_2118ad8b7b-14.png?",
    value: "35K",
    label: "global businesses supported",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Bills_Coins_ff5c0d19fc-15.png?",
    value: "$11.2B",
    label: "compliantly processed Global Payroll",
  },
];

const IndustryStats = () => {
  return (
    <section className="bg-muted py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <h5 className="font-display font-medium text-dark-text text-center text-2xl lg:text-3xl mb-16">
          Choose Deel for an industry-leading experience
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-8 max-w-6xl mx-auto">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src={stat.icon}
                  alt="Image"
                  width={128}
                  height={128}
                  className="w-32 h-32"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-display font-bold text-dark-text text-[56px] leading-none tracking-tight mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-medium-gray text-lg leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryStats;
