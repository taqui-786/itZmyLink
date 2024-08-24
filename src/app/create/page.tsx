import PreviewButton from "@/components/ActionButtons/ResponsivePreviewBtn";
import HomeEditor from "@/components/HomeEditor";


const CreateLink = async() => {
  


  
  return (
    <div className="h-screen w-full ">
     
      {/* EDITING PART  */}
      <div className="w-full flex ">
        <HomeEditor />
      </div>
      <div className='lg:hidden'>
        <PreviewButton />
      </div>
    </div>
  );
};

export default CreateLink;
