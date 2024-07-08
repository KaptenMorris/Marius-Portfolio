"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none mt-10">
            <span className="text-xl">Webbutvecklare</span>
            <h1 className="h1 mb-6">
              Hej jag heter <br />
              <span className="text-accent">Marius</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Jag utmärker mig på att skapa eleganta digitala upplevelser,
              <br />
              jag behärskar olika programmeringsspråk och teknologier.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl-flex-row items-center gap-8">
              <Link href="/cv.pdf" legacyBehavior>
                <a
                  className="uppercase flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Button variant="outline" size="lg">
                    <span>Ladda Ner CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hpver:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
