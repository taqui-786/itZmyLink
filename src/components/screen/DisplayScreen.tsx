"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import AdditionalLinkCard from "../AdditionalLinkCards";
import { motion, AnimatePresence } from "framer-motion";
import SlightFlip from "../Animation/FlipText";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurIn from "../Animation/BlurText";
import FramerWrapper from "../Animation/FramerWrapper";
import { TextEffect } from "../Animation/TextEffect";
import { ImageIcon } from "lucide-react";

const DisplayScreen: React.FC<DisplayDataProps> = ({ myData }) => {
  const EmptySocialLiks =
    !myData.fb &&
    !myData.ig &&
    !myData.tg &&
    !myData.em &&
    !myData.tw &&
    !myData.lk &&
    !myData.yt &&
    !myData.gt &&
    !myData.wh;

  const iconMap: Record<string, string> = {
    fb: "ph:facebook-logo-duotone",
    tw: "ph:twitter-logo-duotone",
    ig: "ph:instagram-logo-duotone",
    tg: "ph:telegram-logo-duotone",
    wh: "ph:whatsapp-logo-duotone",
    yt: "ph:youtube-logo-duotone",
    em: "ph:envelope-duotone",
    gt: "ph:github-logo-duotone",
    lk: "ph:linkedin-logo-duotone",
  };
  
 
  return (
    <AnimatePresence>
      <motion.div className=" relative flex-grow flex-1 grid place-content-center">
        <div className="flex flex-col items-center justify-center min-h-[100px] mx-auto w-full ">
          {/* Avatar------- */}
          <div className="w-full flex items-center justify-center  h-fit px-2 py-4   ">
            <motion.div
              className="aspect-square relative h-[5.5rem] w-auto bg-gray-100 rounded-full overflow-hidden ring ring-slate-200"
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Avatar className="h-full w-auto object-fill">
            <AvatarImage
              src={myData.i}
              alt={`PIC`}
              className="h-full w-full object-cover"
            />
            <AvatarFallback>
              <ImageIcon className="h-8 w-8 text-gray-300" />
            </AvatarFallback>
          </Avatar>
            </motion.div>
          </div>
          {/* Name & About------- */}
          <div className="w-full flex my-2 flex-col items-center justify-center ">
            <TextEffect
              per="char"
              preset="fade"
              className="text-lg font-bold  text-slate-800 dark:text-white md:text-xl"
            >
              {myData.n as string}
            </TextEffect>
            <BlurIn
              word={myData.a as string}
              className=" text-xs md:text-sm mt-2 text-slate-600 text-center max-w-[581px]"
            />
          </div>
          {/* Social Icons------- */}
          {!EmptySocialLiks && (
            <div className="w-full flex mt-5 mb-9 items-center justify-center flex-wrap ">
              {Object.entries(myData).map(([key, value], indx) => {
                const timing = 0.55 + indx * 0.125;
                const excludedKeys = ["i", "n", "a", "bg"];
                if (key !== "ls" && value && !excludedKeys.includes(key)) {
                  const propIcon = iconMap[key as keyof typeof iconMap];
                  if (key === "em") {
                    // Handle email link generation
                    return (
                      <FramerWrapper
                        key={indx}
                        className="p-1"
                        scale={0.8}
                        y={50}
                        delay={timing}
                      >
                        <span key={key}>
                          <a href={`mailto:${value}`}>
                            {/* <Icon icon={propIcon as any} className="h-6 w-6" /> */}
                          </a>
                        </span>
                      </FramerWrapper>
                    );
                  } else if (key === "wh") {
                    // Handle WhatsApp link generation
                    const whatsappValue = value.startsWith("https://wa.me/")
                      ? value // If it already starts with the correct prefix
                      : `https://wa.me/${value}`;

                    return (
                      <FramerWrapper
                        key={indx}
                        className="p-1"
                        scale={0.8}
                        y={50}
                        delay={timing}
                      >
                        <span key={key}>
                          <a
                            href={whatsappValue}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon
                              icon={propIcon as string}
                              className="h-6 w-6"
                            />
                          </a>
                        </span>
                      </FramerWrapper>
                    );
                  } else {
                    return (
                      <FramerWrapper
                        key={indx}
                        className="p-1"
                        scale={0.8}
                        y={50}
                        delay={timing}
                      >
                        <span key={key}>
                          <a
                            href={value}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon
                              icon={propIcon as string}
                              className="h-6 w-6"
                            />
                          </a>
                        </span>
                      </FramerWrapper>
                    );
                  }
                }
                return null;
              })}
            </div>
          )}
          {/* Links------- */}
          <div className="w-full   min-h-[300px]">
            <ul className="space-y-2">
              {myData.ls &&
                myData.ls.map((link, id) => {
                  // Define the alternating values for x and y
                  const positions = [
                    { x: -200, y: 0 },
                    { x: 200, y: 0 },
                  ];
                  const timing = 0.55 + id * 0.125;
                  // Use modulus operator to cycle through the positions array
                  const { x, y } = positions[id % positions.length];

                  return (
                    <FramerWrapper y={y} x={x} delay={timing} key={id}>
                    <AdditionalLinkCard
                        label={link.l}
                        icon={link.i}
                        url={link.u}
                        key={id}
                    />
                    </FramerWrapper>
                  );
                })}
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DisplayScreen;
