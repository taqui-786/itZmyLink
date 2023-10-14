import React from 'react';
import { Button } from '@/components/ui/button';
// import { useData } from '@/lib/context/LinkContext';
// import { BACKGROUND_OPTIONS } from '@/components/background/BgSnippets';
import { cn } from '@/lib/utils';
import { BACKGROUND_OPTIONS } from './BgSnippets';
import { useData } from '@/lib/Context';

type BackgroundCardProps = {};

const BackgroundCard: React.FC<BackgroundCardProps> = () => {
    const { MyLink,selectBackground} = useData()
    return (
        
            <div className="flex h-fit w-full flex-wrap justify-center items-center gap-4 space-x-4 pb-4">
                {BACKGROUND_OPTIONS.map((background, index) => {
                    return (
                        <Button
                            key={index}
                            variant={"outline"}
                            className={cn("relative min-h-[60px] min-w-[150px] overflow-hidden text-muted-foreground", {
                                'bg-accent text-accent-foreground': MyLink.bg === background.code
                            })}
                            onClick={() => {
                                selectBackground(background.code)
                            }}
                        >
                            {background.name}
                        </Button>
                    );
                })}
            </div>
           
    );
};

export default BackgroundCard