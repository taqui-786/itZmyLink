import PersonalInfo from "./PersonalInfo";
import SocialLinksForm from "./SocialLinkForm";
import Background from "./Background/BackgroundForm";
import AdditionalLinkForm from "./AdditionalLinkForm";
import Publish from "./ActionButtons/PublishBtn";
import DemoBtn from "./ActionButtons/DemoBtn";
import Link from "next/link";
import { ShoppingCart ,Link2} from "lucide-react";
import { buttonVariants } from "./ui/button";
import Navbar from "./Navbar";
import { auth } from "./auth";
import MobileMockup from "./mockup/MobileMockup";
const HomeEditor = async() => {
  const session = await auth()
  return (
    <>

    <div className="h-screen min-h-screen  w-full overflow-y-auto gap-4 flex flex-col bg-gray-100 py-1 px-1 sm:py-8 sm:px-16">
    <Navbar/>
    <PersonalInfo/>
    <SocialLinksForm/>
    <AdditionalLinkForm/>
    <Background/>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 justify-center items-center w-full mb-20'>
    <Publish loggedIn={session?.user || null} />
    <DemoBtn/>
    <Link
              target='_blank'
              href="https://mdtaquijhar.gumroad.com/l/mernproject"
              className={buttonVariants()}>
              <ShoppingCart className='mr-2 h-4 w-4' />
              Get Project
            </Link>
            <Link
              target='_blank'
              href="https://bitly.com"
              className={buttonVariants()}>
              <Link2 className='mr-2 h-4 w-4' />
              Shortner
            </Link>
    </div>
      </div>
      <div className="h-auto w-[35%]   hidden bg-gray-100 lg:flex items-center justify-center">
        {/* MOBILE MOCKUP  */}
        <MobileMockup />
      </div>
    </>
  );
};
export default HomeEditor;









