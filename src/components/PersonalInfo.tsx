"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useData } from "@/lib/Context";
import PhotoUpload from "./PhotoUpload";

type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

const PersonalInfo = () => {
  const { MyLink, updateProfileInfo } = useData();
  const handleInfoChange = (event: InputChangeEvent) => {
    const { name, value } = event.target;
    updateProfileInfo(name, value);
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Profile Information</CardTitle>
          <CardDescription>
            Enter your profile or title information here.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="n"
                type="text"
                placeholder="John Doe"
                value={MyLink.n}
                onChange={handleInfoChange}
              />
            </div>
            <div className="relative">
           <PhotoUpload  />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">About yourself</Label>
            <Textarea
              id="description"
              name="a"
              placeholder="type something here..."
              value={MyLink.a}
              onChange={handleInfoChange}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PersonalInfo;
