import PreviewButton from "@/components/ActionButtons/ResponsivePreviewBtn";
import HomeEditor from "@/components/HomeEditor";

const CreateLink = () => {
  
  return (
    <div className="h-screen w-full ">
      <nav className="h-fit p-3 hidden w-full bg-gray-100  items-center justify-between px-5">
        <span className="font-medium">AboutMeLink</span>
        <div className="h-full w-fit flex gap-4">
          
        </div>
      </nav>
      {/* EDITING PART  */}
      <div className="w-full min-h-[80vh] flex ">
        <HomeEditor/>
      </div>
      <div className='lg:hidden'>
        <PreviewButton />
      </div>
    </div>
  );
};

export default CreateLink;
