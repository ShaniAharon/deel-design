import Image from "next/image";
import Link from "next/link";

const ScaleGlobally = () => {
  return (
    <section className="bg-muted py-[120px]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col items-start text-left md:pr-8">
            <p className="text-base font-medium text-dark-text">
              Global People Platform
            </p>
            <h2 className="mt-10 text-[40px] font-semibold leading-tight text-dark-text">
              Scale globally with velocity and ease
            </h2>
            <p className="mt-6 text-lg text-medium-gray">
              Deel is built to scale with organizations of all sizes, from small
              teams to enterprises of thousands. Whether you want to hire
              worldwide without opening legal entities, streamline HR for your
              global team, or pay all types of workers anywhere with
              consolidated payroll—Deel does it all with full compliance.
            </p>
            <Link
              href="#"
              className="mt-10 inline-block bg-primary text-primary-foreground font-medium py-4 px-8 rounded-sm hover:bg-primary/90 transition-colors"
            >
              Get started
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e662fbd8-6112-4991-8d2b-6d5f93dab5eb-deel-com/assets/images/For_Global_Teams_min_7f70a3d29a-12.jpg?"
              alt="Global team collaboration with people working remotely"
              width={550}
              height={580}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleGlobally;
