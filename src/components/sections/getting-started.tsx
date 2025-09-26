import Image from "next/image";

const stepsData = [
  {
    number: "1",
    title: "Book a call",
    description:
      "Book a call with our global workforce consultants. We’ll set you up with a free account ready to suit your team’s needs.",
  },
  {
    number: "2",
    title: "Add your people",
    description:
      "From new hires to your existing workforce, onboard effortlessly with our self-serve platform.",
  },
  {
    number: "3",
    title: "Dedicated onboarding",
    description:
      "From navigating local laws to support for your team members, our dedicated team will help you get set up seamlessly.",
  },
];

const GettingStarted = () => {
  return (
    <section className="bg-muted py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-[40px] font-semibold text-dark-text max-w-xl mx-auto text-center leading-tight mb-16 lg:mb-20">
          Get started with Deel in three easy steps
        </h2>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col">
            <div className="space-y-10">
              {stepsData.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-row items-start gap-x-6"
                >
                  <p className="font-display text-[40px] font-medium text-dark-text leading-none pt-1">
                    {step.number}
                  </p>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-medium text-dark-text mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-lg text-medium-gray">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a
                href="#"
                className="inline-block bg-dark-text text-primary-foreground font-medium py-4 px-8 rounded-md text-base hover:bg-gray-800 transition-colors"
              >
                Get started
              </a>
            </div>
          </div>
          <div className="flex justify-center -order-1 lg:order-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Bar_Graph_Window_9c570c3eda-21.png?"
              alt="Illustration of Deel's onboarding process with diverse team member profiles"
              width={553}
              height={491}
              className="w-full max-w-[553px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
