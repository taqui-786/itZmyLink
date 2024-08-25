"use client";
import React from "react";
import { Button } from "../ui/button";
import { Clipboard, Link } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CustomLinkDialog from "./CustomLinkDialog";


function PreviewFooter({
  MyLink,
  inputLink,
}: {
  MyLink: any;
  inputLink: string;
}) {
  const [hasCopied, setHasCopied] = React.useState<boolean>(false);
  const copyToClipboard = React.useCallback(() => {
    const url = `${window.location.origin}/1?data=${inputLink}`;
    navigator.clipboard.writeText(url);
    return url;
  }, [MyLink]);
  return (
    <div className=" absolute z-50 bottom-0 left-0 right-0 m-auto w-fit flex flex-row gap-2 items-center justify-center mb-4 py-2 px-8 bg-white border border-gray-300 rounded-full animate-bounce">
      <Button
        size={"xs"}
        variant={"subtle"}
        className="bg-gray-200"
        onClick={() => {
          navigator.share({
            title: `${MyLink.n} - itZmyLink`,
            text: `Find all of ${MyLink.n}'s links in one place.`,
            url: `${inputLink}`,
          });
        }}
      >
        Share <Link className="h-4 w-4 ml-1" />
      </Button>
      <Button
        size={"xs"}
        variant={"subtle"}
        className="bg-gray-200"
        onClick={() => {
          copyToClipboard();
          setHasCopied(true);
        }}
      >
        {hasCopied ? (
          "Copied"
        ) : (
          <>
            Local URL <Clipboard className="h-4 w-4 ml-1" />
          </>
        )}
      </Button>
<CustomLinkDialog localLink={inputLink}/>



    </div>
  );
}

export default PreviewFooter;
