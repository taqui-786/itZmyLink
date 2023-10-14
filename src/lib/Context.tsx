import React, { createContext, useContext, useState } from "react";

interface LinkProps {
  n: string; //Name
  i: string; // image
  a: string; //About
  bg: string; //Background
  fb: string; //facebook
  ig: string; //instagram
  tg: string; //telegram
  em: string; //email
  tw: string; //twitter
  lk: string; //linkedin
  yt: string; //youtube
  gt: string; //github
  wh: string; //whatsup
  ls: AdditionalLinkProps[]; // Additional Forms
}
const initialData: LinkProps = {
  n: "", //Name
  i: "", // image
  a: "", //About
  bg: "", //Background
  fb: "", //facebook
  ig: "", //instagram
  tg: "", //telegram
  em: "", //email
  tw: "", //twitter
  lk: "", //linkedin
  yt: "", //youtube
  gt: "", //github
  wh: "", //whatsup
  ls: [], //Additional Forms
};
interface DataContextType {
  // Todo: fix type props
  data: string;
  MyLink: LinkProps;
  addNewData: (linkData: AdditionalLinkProps) => void;
  setData: (val: string) => void;
  updateProfileInfo: (name: any, value: any) => void;
  selectBackground: (bgcode: string) => void;
  updateIndex: (updatedIndex: AdditionalLinkProps[]) => void;
  updateAdditionalInfo: (updatedIndex: any) => void;
  showDemo: () => void;
}

const demoData: LinkProps = {
  n: "Md Taqui Imam",
  i: "https://firebasestorage.googleapis.com/v0/b/projectfriendz-45b49.appspot.com/o/images%2FSocialLogo.png?alt=media&token=551c9a3c-07e4-486d-9d26-96c619d817a9&_gl=1*uluah4*_ga*NDUyNjQ5MjYxLjE2OTcyMjI3MDU.*_ga_CW55HF8NVT*MTY5NzIyMjcwNS4xLjEuMTY5NzIyMjg0Ni4xMy4wLjA.",
  a: "I'm a self-taught Web developer who is always learning and creating cool Project stuffs.",
  fb: "https://www.facebook.com/shahina.khatun.1044",
  tw: "https://twitter.com/Taquiimam14",
  ig: "https://www.instagram.com/taqui_imam_786/",
  tg: "https://t.me/@Taqui_devloper",
  gt: "https://github.com/taqui-786",
  lk: "https://linkedin.com/in/taqui-imam",
  em: "mdtaqui.jhar@gmail.com",
  wh: "+916666666666",
  yt: "https://youtube.com/@james_smith",
  bg: "#4F4F4F",
  ls: [
    {
      id: 1,
      i: "ph:laptop-duotone",
      l: "My Portfolio Website",
      u: "https://example.com",
    },
    {
      id: 2,
      i: "ant-design:robot-outlined",
      l: "My Chatbot Project",
      u: "https://example.com/chatbot",
    },
    {
      id: 3,
      i: "fluent:brain-circuit-20-regular",
      l: "My Machine Learning Project",
      u: "https://example.com/ml",
    },
    {
      id: 4,
      i: "icon-park-outline:blockchain",
      l: "My Blockchain Project",
      u: "https://example.com/blockchain",
    },
    {
      id: 5,
      i: "ph:pencil-duotone",
      l: "My Blog Posts",
      u: "https://taquideveloper.hashnode.dev/",
    },
  ],
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<string>("");
  const [MyLink, setMyLink] = useState<LinkProps>(initialData);

  // UPDATE PERSONAL INFORMATION
  const updateProfileInfo = (name: any, value: any) => {
    setMyLink((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // SELECT BACKGROUND FUNCTION
  const selectBackground = (bgcode: string) => {
    setMyLink((prevState) => ({
      ...prevState,
      bg: bgcode,
    }));
  };
  // ADDITIONAL INFO FUNCTIONS
  const updateIndex = (updatedIndex: AdditionalLinkProps[]) => {
    setMyLink((prevState) => ({
      ...prevState,
      ls: updatedIndex,
    }));
  };
  const updateAdditionalInfo = (updatedIndex: any) => {
    setMyLink((prevState) => ({
      ...prevState,
      ls: updatedIndex,
    }));
  };
  const addNewData = (linkData: AdditionalLinkProps) => {
    setMyLink((prevData) => ({
      ...prevData,
      ls: [...prevData.ls, linkData],
    }));
  };
  // SHOW DEMO FUNCTION
  const showDemo = () => {
  
    setMyLink(demoData);
  };
  return (
    <DataContext.Provider
      value={{
        data,
        addNewData,
        setData,
        showDemo,
        MyLink,
        updateProfileInfo,
        updateIndex,
        selectBackground,
        updateAdditionalInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
