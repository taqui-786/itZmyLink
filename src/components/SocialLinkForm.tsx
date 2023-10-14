"use client"

import React, { FC } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { SocialInput } from './ui/SocialInput';
import { useData } from '@/lib/Context';

const socialLinksProvider: SocialLinkProviderProps[] = [
    { name: 'facebook', icon: "ph:facebook-logo-duotone", id: "fb" },
    { name: 'twitter', icon: "ph:twitter-logo-duotone", id: "tw" },
    { name: 'instagram', icon: "ph:instagram-logo-duotone", id: "ig" },
    { name: 'telegram', icon: "ph:telegram-logo-duotone", id: "tg" },
    { name: 'youtube', icon: "ph:youtube-logo-duotone", id: "yt" },
    { name: 'email', icon: "ph:envelope-duotone", id: "em" },
    { name: 'github', icon: "ph:github-logo-duotone", id: "gt" },
    { name: 'linkedin', icon: "ph:linkedin-logo-duotone", id: "lk" },
    { name: 'whatsapp', icon: "ph:whatsapp-logo-duotone", id: "wh" },
]

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface SocialLinksFormProps { }

const SocialLinksForm: FC<SocialLinksFormProps> = () => {

    const { MyLink, updateProfileInfo } = useData();
  const handleInfoChange = (event: InputChangeEvent) => {
    const { name, value } = event.target;
    updateProfileInfo(name, value);
  };


    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Social Links</CardTitle>
                <CardDescription>
                    Enter your social media links here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
                {socialLinksProvider.map((link) => {
                    return (
                        <SocialInput
                            key={link.name}
                            id={link.name}
                            name={link.id}
                            icon={link.icon}
                            placeholder={`${link.name}.com/johndoe`}
                            value={MyLink[link.id]}
                            onChange={handleInfoChange}
                        />
                    );
                })}
            </CardContent>
        </Card>
    )
}

export default SocialLinksForm