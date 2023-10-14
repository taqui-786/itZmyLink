"use client"
import { storage } from "@/lib/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useData } from "@/lib/Context";
import { useState } from "react";
import { Loader2 } from "lucide-react";


const PhotoUpload = () =>{
    const { updateProfileInfo } = useData();



    const [loading ,setLoading] = useState<boolean>(false)

    async function handleImageUpload (file:File) {

        const storageRef = ref(storage, `images/${file.name}`);
            await uploadBytes(storageRef, file);
        const res =  await getDownloadURL(storageRef);
        return  res
          
      };
   //  FUNCTION IMAGE UPLOAD 
   const onImageChange = async (e:React.ChangeEvent<HTMLInputElement>) => {
     setLoading(true)
       try {
       const [file]:any = e.target.files;
       if(!file) return
       
       const uploading = await handleImageUpload(file)
       updateProfileInfo('i', uploading);
       
       
     } catch (error) { 
       console.log(error);
       
     } finally{
       setLoading(false)
     }
     };

  

    return(<>
       <Label htmlFor="Profile-url">Profile Url</Label>
       {loading ? <Loader2 className='absolute top-0 bottom-0 left-0 right-0 m-auto h-4 w-4 animate-spin' /> : 
              <Input
              id="Profile-url"
              name="i"
              type="file"
              onChange={onImageChange}
              />
            }
    </>)
}

export default PhotoUpload