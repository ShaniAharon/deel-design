import {Button} from "@/components/ui/button";
import Image from "next/image";

const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="128"
    height="128"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="64" cy="64" r="64" fill="rgba(45, 55, 72, 0.4)" />
    <path d="M53 44L83 64L53 84V44Z" fill="white" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="w-full bg-[#B8D4F8] overflow-hidden">
      <div className="container mx-auto px-6 pt-16 pb-12 sm:px-10 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 lg:h-[700px]">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[540px] text-center lg:text-left space-y-6 z-10 w-full">
            <h1 className="font-bold text-primary text-[38px] leading-tight sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Managing a global workforce shouldn&apos;t be this hard.
            </h1>
            <div className="hidden md:block space-y-4">
              <p className="text-lg text-muted-foreground">
                Your team is probably juggling up to 16 disconnected tools—maybe
                more—wasting time, money, and energy just to keep up with the
                shifting global landscape.
              </p>
              <p className="text-lg text-muted-foreground">
                Hiring, payroll, and compliance feel like roadblocks instead of
                fuel pushing your company’s growth.
              </p>
              <p className="text-lg text-muted-foreground">
                We can change that.
              </p>
            </div>
            <div className="md:hidden space-y-4">
              <p className="text-lg text-muted-foreground">
                The more tools you&apos;re using for global hiring, payroll, and
                compliance, the more time, money, and energy is being wasted to
                keep up.
              </p>
              <p className="text-lg text-muted-foreground">
                Our single platform can change that.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 w-full sm:w-auto">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 h-auto py-4 text-base font-semibold w-full sm:w-auto">
                Get a free 30 minute demo
              </Button>
              <Button
                variant="ghost"
                className="text-primary hover:bg-primary/10 rounded-lg px-8 h-auto py-4 text-base font-semibold w-full sm:w-auto"
              >
                Speak to sales
              </Button>
            </div>
          </div>

          <div className="relative flex-1 w-full flex items-center justify-center lg:pb-0">
            <div className="relative max-w-3xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/ui_img_2ee04b5a03-1.png?"
                alt="Deel Payroll & HR Platform User Interface"
                width={1442}
                height={974}
                className="w-full h-auto"
                priority
              />
              <button
                className="absolute inset-0 m-auto w-24 h-24 lg:w-32 lg:h-32 group"
                aria-label="Play video"
              >
                <PlayIcon className="w-full h-full transform transition-transform duration-300 group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
