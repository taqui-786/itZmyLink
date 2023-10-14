import { Button } from "@/components/ui/button";
import Link from "next/link";



export const siteConfig = {
  name: "itZmyLink - one page, many links.",
  description: "itZmyLink help you to Create a personalized page to showcase all your social media profiles in one place.",
  ogImage: "https://itzmylink.vercel.app/og-image.png",
  url: "https://itzmylink.vercel.app",
}
export default function Home() {
  return (
    <div className=" relative h-screen w-full flex justify-center items-center">
      <div className="h-fit w-1/2 p-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-medium">Welcome to itZmyLink</h1>
        <h3 className="mt-2 mb-2 text-lg text-center ">
        Simplify your online presence with itZmyLink! Create a personalized page to showcase all your social media profiles in one place.
        </h3>
        <Button variant={"custom"}>
          <Link
            href={"/createLink"}
            className="h-fit w-fit decoration-transparent"
          >
            Create your itZmyLink 
          </Link>
        </Button>
      </div>
    </div>
  );
}
