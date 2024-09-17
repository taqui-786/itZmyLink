import React from "react";
import NotFound from "../Not-found";
import { decodeData } from "@/lib/utils";
import ComputerMockup from "@/components/mockup/ComputerMockup";
import { BACKGROUND_OPTIONS } from "@/components/Background/BgSnippets";
import PreviewPage from "@/components/PreviewPage";
import PreviewFooter from "@/components/ActionButtons/PreviewFooter";

function page({ searchParams }: any) {
  if (!searchParams.data) NotFound();

  const data = decodeData(searchParams.data);
  const selectedBgOption = data
    ? BACKGROUND_OPTIONS.find((option) => option.code === data.bg)
    : null;

  const selectedBgComponent = selectedBgOption
    ? selectedBgOption.component
    : null;
  return (
    <>
    <ComputerMockup>
        <div className="absolute left-0 top-0  h-full w-full">
          {selectedBgComponent}
        </div>
        <PreviewPage data={data} />

    </ComputerMockup>
    <PreviewFooter MyLink={data} inputLink={searchParams.data}/>
    
    </>
  );
}

export default page;
