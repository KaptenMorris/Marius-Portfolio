"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiVite } from "react-icons/si";

// about data
const about = {
  title: "Om Mig",
  description:
    "Som webbutvecklare brinner jag för att skapa och forma digitala upplevelser som inte bara är funktionella utan också estetiskt tilltalande och användarvänliga. Min passion för webbutveckling sträcker sig bortom enbart kodning – jag ser varje projekt som en möjlighet att skapa något nytt, innovativt och meningsfullt. ",
  description1:
    "Att arbeta som webbutvecklare ger mig möjligheten att uttrycka min kreativitet genom att omsätta idéer och visioner till verklighet. Jag är ständigt på jakt efter nya verktyg, tekniker och trender inom webbutveckling för att förbättra mina färdigheter och leverera högkvalitativa lösningar till mina kunder och användare. ",
  description2:
    " Min passion och engagemang i det jag gör driver mig att sträva efter perfektion och att kontinuerligt utmana mig själv för att växa och utvecklas som webbutvecklare. Jag tror på att skapa meningsfulla och användbara digitala produkter som inte bara löser problem utan också förbättrar människors liv.",
  info: [
    {
      fieldName: "Namn",
      fieldValue: "Marius Christensen",
    },
    {
      fieldName: "Nummer",
      fieldValue: "073 43 63 123",
    },
    {
      fieldName: "E-Post",
      fieldValue: "info@marius-christensen.se",
    },
    {
      fieldName: "Erfarenhet",
      fieldValue: "2+ År",
    },
    {
      fieldName: "Nationalitet",
      fieldValue: "Norsk",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Tillgänglig",
    },
    {
      fieldName: "Språk",
      fieldValue: "Svenska, Norska, Engelska",
    },
  ],
};
// experience data
const experience = {
  icon: "/assets/resume/badeg.svg",
  title: "Min Erfarenhet",
  description:
    "Som ny inom webbutveckling lär jag mig nya saker varje dag. Just nu jobbar jag som vårdbiträde på ett LSS-boende, men jag har valt att vidareutbilda mig till webbutvecklare. Jag har alltid haft ett stort intresse för teknik och kodning, vilket gör den här övergången extra spännande för mig.",
  items: [
    {
      company: "Kils Kommun",
      position: "Vårdbiträde",
      duration: "2019 - närvarande",
    },
    {
      company: " Gärdesskolan",
      position: "Elevassistent fritidsledare",
      duration: "2015 - 2018",
    },
    {
      company: "Rusta AB",
      position: "Säljare lagerarbetare",
      duration: "2009 - 2011",
    },
    {
      company: "MMG Data",
      position: "Datarepratör",
      duration: "2006 - 2007",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Min Utbildningar",
  description: "Alla mina utbildningar har jag tagit via https://www.udemy.com",
  items: [
    {
      institution: "Online Kurs",
      degree: "The Web Developer Bootcamp",
      duration: "2023",
    },
    {
      institution: "Online Kurs",
      degree: "The Complete  Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Online Kurs",
      degree: "The Complete JavaScript Course From Zero to Expert!",
      duration: "2023",
    },
  ],
};

// Skills data
const skills = {
  title: "Mina Färdigheter",
  description:
    "Jag är en passionerad och driven . Genom åren har jag arbetat med en mängd olika projekt som har stärkt mina kunskaper i att bygga responsiva och användarvänliga webbapplikationer. Jag har en djup förståelse för modern webbutveckling och design, från att skapa pixelperfekta användargränssnitt till att utveckla kraftfulla och skalbara backend-lösningar. Nedan är en lista över några av de teknologier och verktyg jag använder regelbundet.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiVite />,
      name: "vite.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.0, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center p-12 xl:py-0"
    >
      <div className="container mx auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Erfarenhet</TabsTrigger>
            <TabsTrigger value="education">Utbildning</TabsTrigger>
            <TabsTrigger value="skills">Färdigheter</TabsTrigger>
            <TabsTrigger value="about">Om Mig</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[204px] py- px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 mb-4"
                      >
                        <span className=" text-accent block font-semibold">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-bold">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[204px] py- px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 mb-4"
                      >
                        <span className=" text-accent block font-semibold">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-bold">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left pb-20"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description1}
                </p>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description2}
                </p>
                <div className="flex flex-col  mr-10 p-10 bg-[#27272c] rounded-xl">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
