import { decodeData } from "@/lib/utils";
import { BACKGROUND_OPTIONS } from "@/components/Background/BgSnippets";
import DisplayScreen from "@/components/screen/DisplayScreen";
import { supabaseServer } from "@/lib/supabase/supabaseServer";
import NotFound from "@/app/Not-found";
import DataLoading from "../loading";
type Props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({ params }: Props) {
    const path = await supabaseServer()
    .from("links")
    .select("*")
    .eq("path", params.slug);
  if (path.data?.length === 0) return NotFound();

  const data = decodeData(path?.data?.[0].link);
  if (!data) {
    return {};
  }

  return {
    title: `${data.n}'s`,
    description: `Find all of ${data.n}'s links in one place.`,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://itZmyLink.vercel.app",
      title: `${data.n}'s - itZmyLink`,
      description: `Find all of ${data.n}'s links in one place.`,
      images: `https://itZmyLink.vercel.app/api/og?data=${encodeURI(data.n)}`,
      siteName: `${data.n}'s - itZmyLink`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.n} - itZmyLink`,
      description: `Find all of ${data.n}'s links in one place.`,
      images: `https://itZmyLink.vercel.app/api/og?data=${encodeURI(data.n)}`,
      creator: "@Taquiimam14",
    },
  };
}

const linkLandingPage: React.FC<Props> = async ({ params }) => {
  const path = await supabaseServer()
    .from("links")
    .select("*")
    .eq("path", params.slug);
  if (path.data?.length === 0) return NotFound();

  const data = decodeData(path?.data?.[0].link);
  const selectedBgOption = data
    ? BACKGROUND_OPTIONS.find((option) => option.code === data.bg)
    : null;

  const selectedBgComponent = selectedBgOption
    ? selectedBgOption.component
    : null;

  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        {selectedBgComponent}
      </div>
      <div className="p-2 pt-10 hide_scrollbar">
        {data ? <DisplayScreen myData={data} /> : <DataLoading />}
      </div>
    </>
  );
};

export default linkLandingPage;
