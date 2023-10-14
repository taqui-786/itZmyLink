
interface DataProps {
    n?: string;
    a?: string;
    i?: string;
    bg?: string;
    fb?: string;
    tg?: string;
    ig?: string;
    gt?: string;
    tw?: string;
    lk?: string;
    em?: string;
    wh?: string;
    yt?: string;
    ls?: AdditionalLinkProps[];
};

const socialLinksData = {
    fb: 'facebook',
    tw: 'twitter',
    ig: 'instagram',
    gt: 'github',
    tg: 'telegram',
    lk: 'linkedin',
    em: 'email',
    wh: 'whatsapp',
    yt: 'youtube',
};

interface SocialLinkProviderProps {
    name: string;
    icon: string;
    id: keyof typeof socialLinksData;
}
interface DisplayDataProps {
myData: DataProps
}
interface AdditionalLinkProps {
    id: number
    i: string;
    l: string;
    u: string;
}
