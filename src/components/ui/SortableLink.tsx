"use client";
import React, { FC } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useData } from "@/lib/Context";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


interface SortableLinksProps {
  id: AdditionalLinkProps;
  index: number;
}

export const SortableLinks: FC<SortableLinksProps> = ({ id, index }) => {
  let uniqueID = id.id;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: uniqueID });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const { MyLink, updateAdditionalInfo } = useData();

//   ICONS LISTS 
const iconsLists = [ 
    {name:'My Portfolio',code:'ph:laptop-duotone'},
    {name:'Chatbot project',code:'ant-design:robot-outlined'},
    {name:'Ai project',code:'fluent:brain-circuit-20-regular'},
    {name:'Web Project',code:'icon-park-outline:blockchain'},
    {name:'My Blogs',code:'ph:pencil-duotone'},
]


  const showWhatvalue = (e:any) =>{
    const newLinks = [...MyLink.ls];
    newLinks[index].i = e
    updateAdditionalInfo(newLinks);
console.log(e);

  }

  return (
    <div ref={setNodeRef} style={style} key={uniqueID}>
      <Card className="p-4 relative">
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-2">
            <div className="grid gap-2">
              <Label htmlFor={`link-icon-${uniqueID}`}>Icon Key</Label>
              <Select onValueChange={showWhatvalue} name="i" value={id.i}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Icons" />
                </SelectTrigger>
                <SelectContent >
                  <SelectGroup >
                    <SelectLabel>none</SelectLabel>
                    {iconsLists.map((val,i)=>{
                         return <SelectItem key={i} value={`${val.code}`}>{val.name}</SelectItem>
                    })}
                    
                  </SelectGroup>
                </SelectContent>
              </Select>
             
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`link-name-${uniqueID}`}>Label</Label>
              <Input
                id={`link-name-${uniqueID}`}
                name="l"
                type="text"
                placeholder="Amazon"
                value={id.l}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const newLinks = [...MyLink.ls];
                  newLinks[index].l = e.target.value;
                  updateAdditionalInfo(newLinks);
                }}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`link-name-${uniqueID}`}>Destination URL</Label>
            <Input
              id={`link-url-${uniqueID}`}
              name="u"
              type="url"
              placeholder="https://example.com"
              value={id.u}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const newLinks = [...MyLink.ls];
                newLinks[index].u = e.target.value;
                updateAdditionalInfo(newLinks);
              }}
            />
          </div>
        </div>
        <button
          className="DragHandle absolute -top-2 right-5 bg-white"
          {...attributes}
          {...listeners}
        >
          <svg viewBox="0 0 20 20" width="15">
            <path
              d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"
              transform="rotate(-90,10,10)"
              fill={"currentcolor"}
            ></path>
          </svg>
        </button>
      </Card>
    </div>
  );
};
