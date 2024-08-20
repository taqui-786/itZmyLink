"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import AdditionalLinkCard from "../AdditionalLinkCards";
import { motion, AnimatePresence } from "framer-motion";
import SlightFlip from "../Animation/FlipText";
import BlurIn from "../Animation/BlurText";
import FramerWrapper from "../Animation/FramerWrapper";
import { TextEffect } from "../Animation/TextEffect";
function DisplayScreen() {
  const iconMap: Array<string> = [
    "ph:facebook-logo-duotone",
    "ph:twitter-logo-duotone",
    "ph:instagram-logo-duotone",
    "ph:telegram-logo-duotone",
    "ph:whatsapp-logo-duotone",
    "ph:youtube-logo-duotone",
    "ph:envelope-duotone",
    "ph:github-logo-duotone",
    "ph:linkedin-logo-duotone",
  ];
  const iconMapLinks: Array<string> = [
    "ph:laptop-duotone",
    "ant-design:robot-outlined",
    "fluent:brain-circuit-20-regular",
    "icon-park-outline:blockchain",
    "ph:pencil-duotone",
  ];

  return (
    <AnimatePresence>
      <div className=" relative flex-grow flex-1 grid place-content-center">
        <div className="flex flex-col items-center justify-center min-h-[100px] mx-auto w-[32rem] ">
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
              <img
                src="https://firebasestorage.googleapis.com/v0/b/projectfriendz-45b49.appspot.com/o/images%2FLogo%20img%20me.png?alt=media&token=3ba1093d-12ad-437a-b196-66301654a41a"
                alt="img"
                className=" w-auto object-fill"
              />
            </motion.div>
          </div>
          {/* Name & About------- */}
          <div className="w-full flex my-2 flex-col items-center justify-center ">
            {/* <h1 className="text-2xl font-bold  text-slate-800 text-center">
           Md Taqui Imam
            
          </h1> */}
            {/* <SlightFlip
              className="text-lg font-bold  text-slate-800 dark:text-white md:text-xl "
              word="Md Taqui Imam"
            /> */}
            <TextEffect per="char" preset="fade" className="text-lg font-bold  text-slate-800 dark:text-white md:text-xl">
              Md Taqui Imam
            </TextEffect>
            {/* <p className="text-sm mt-2 text-slate-600 text-center"> */}
            <BlurIn
              word="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            porro adipisci, perferendis tempore ea sit voluptas. Ab dolorem
            sequi quas?"
              className="text-sm mt-2 text-slate-600 text-center"
            />

            {/* </p> */}
          </div>
          {/* Social Icons------- */}
          <div className="w-full flex mt-5 mb-9 items-center justify-center flex-wrap ">
            {iconMap.map((itm, indx) => {
              const timing = 0.55 + indx * 0.125;
              return (
                <FramerWrapper
                  key={indx}
                  className="p-1"
                  scale={0.8}
                  y={50}
                  delay={timing}
                >
                  <span>
                    <a href={"/"} target="_blank" rel="noopener noreferrer">
                      <Icon icon={itm} className="h-6 w-6" />
                    </a>
                  </span>
                </FramerWrapper>
              );
            })}
          </div>
          {/* Links------- */}
          <div className="w-full   min-h-[300px]">
            <ul className="space-y-2">
              {iconMapLinks.map((itm, indx) => {
                // Define the alternating values for x and y
                const positions = [
                  { x: -200, y: 0 },
                  { x: 200, y: 0 },
                ];
                const timing = 0.55 + indx * 0.125;
                // Use modulus operator to cycle through the positions array
                const { x, y } = positions[indx % positions.length];

                return (
                  <FramerWrapper y={y} x={x} delay={timing} key={indx}>
                    <AdditionalLinkCard
                      label={"Hashnode"}
                      icon={itm}
                      url={"h"}
                    />
                  </FramerWrapper>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default DisplayScreen;
