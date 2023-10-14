"use client"
import DisplayData from "./DisplayData"
import { cn } from "@/lib/utils"
import { BACKGROUND_OPTIONS } from "./Background/BgSnippets"
import { useData } from "@/lib/Context"
import React from "react"

const MobileScreen = () =>{
const {MyLink} = useData()

const [isEmpty, setIsEmpty] = React.useState<boolean>(false)

    React.useEffect(() => {
        function isEmptyValues(obj: any) {
            for (let key in obj) {
                if (obj[key] !== "" && obj[key].length !== 0) {
                    return false;
                }
            }
            return true;
        }
        setIsEmpty(isEmptyValues(MyLink))
    }, [MyLink])



const selectedBgOption = MyLink
? BACKGROUND_OPTIONS.find((option) => option.code === MyLink.bg)
: null;

const selectedBgComponent = selectedBgOption ? selectedBgOption.component : null;


    return(
        <div className={cn("screen break-words",{"bg-white": !MyLink.bg} )}>
            {
                isEmpty
                ? <div className='bg-white w-full  text-sm text-muted-foreground h-full flex justify-center items-center z-20'>Nothing to show...</div>
                : (
                    <>
                        {!isEmpty && selectedBgComponent}
                        
                        <div className='h-full pt-10 px-2'>
                                <DisplayData myData={MyLink}/>
                        </div>
                    </>
                )
            }
        </div>
    )
} 

export default MobileScreen