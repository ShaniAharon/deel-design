import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const GlobalCoverage = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFEFB4]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:flex lg:h-[620px] lg:items-center lg:px-8 lg:py-0">
        <div className="text-center lg:max-w-xl lg:text-left">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-medium-gray">
            Global Coverage
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-dark-text md:text-5xl">
            There’s a whole world out there. Why not hire anywhere?
          </h2>
          <p className="mt-6 text-lg text-medium-gray">
            150+ entities. 200+ local legal experts. Global from day one. Tap
            into the most extensive coverage on the market, and start hiring,
            onboarding, and paying anywhere.
          </p>
          <Button
            asChild
            className="mt-8 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Link href="https://www.deel.com/global-hiring-guide">
              Get started
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative mt-[-4rem] lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[60%]">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/Coverage_Illustration_min_0a71b2d215-19.png?"
          alt="Illustration of global landmarks for Deel's global coverage"
          width={1007}
          height={619}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default GlobalCoverage;
