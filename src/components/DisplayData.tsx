"use client";
import { ImageIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Icon } from "@iconify/react/dist/iconify.js";
import AdditionalLinkCard from "./AdditionalLinkCards";

const DisplayData:React.FC<DisplayDataProps> = ({ myData }) => {
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
    <>
      <div className="p-[.5rem] h-full relative w-full space-y-8 max-w-lg mx-auto overflow-y-scroll hide_scrollbar">
        <div className="text-center z-50">
          {/* USER IMAGE  */}
          <Avatar className="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto">
            <AvatarImage
              src={myData.i}
              alt={`PIC`}
              className="h-full w-full object-cover"
            />
            <AvatarFallback>
              <ImageIcon className="h-8 w-8 text-gray-300" />
            </AvatarFallback>
          </Avatar>
          {/* USER NAME AND BIO */}
          <h1 className="text-2xl font-bold mt-4 text-slate-800">{myData.n}</h1>
          <p className="text-sm mt-2 text-slate-600">{myData.a}</p>
        </div>
        {!EmptySocialLiks && (
          <div className="flex items-center justify-center flex-wrap">
            { Object.entries(myData).map(([key, value]) => {
                const excludedKeys = ["i", "n", "a", "bg"];
                if (key !== "ls" && value && !excludedKeys.includes(key)) {
                    const propIcon = iconMap[key as keyof typeof iconMap];
                    if (key === "em") {
                        // Handle email link generation
                        return (
                            <span className="p-1" key={key}>
                                <a href={`mailto:${value}`}>
                                    <Icon icon={propIcon} className="h-6 w-6" />
                                </a>
                            </span>
                        );
                    } else if (key === "wh") {
                        // Handle WhatsApp link generation
                        const whatsappValue = value.startsWith("https://wa.me/")
                            ? value // If it already starts with the correct prefix
                            : `https://wa.me/${value}`;

                        return (
                            <span className="p-1" key={key}>
                                <a href={whatsappValue} target="_blank" rel="noopener noreferrer">
                                    <Icon icon={propIcon} className="h-6 w-6" />
                                </a>
                            </span>
                        );
                    } else {
                        return (
                            <span className="p-1" key={key}>
                                <a href={value} target="_blank" rel="noopener noreferrer">
                                    <Icon icon={propIcon} className="h-6 w-6" />
                                </a>
                            </span>
                        );
                    }
                }
                return null;
            })}
          </div>

        )}
         <ul className="space-y-2">
                {myData.ls && myData.ls.map((link, id) => (
                    <AdditionalLinkCard
                        label={link.l}
                        icon={link.i}
                        url={link.u}
                        key={id}
                    />
                ))}
            </ul>
      </div>
    </>
  );
};

export default DisplayData;
