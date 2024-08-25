"use client";

import { useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ClipboardCopy, Check, PenSquare } from "lucide-react";
import { createCustomPath } from "@/lib/supabase/actions";

// Mock function to simulate checking if a path exists in the database
const checkPathExists = async (path: string): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return path.toLowerCase().includes("taken");
};

export default function Component({localLink}:{localLink:string}) {
  const [customPath, setCustomPath] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const baseUrl = "itzmylink.vercel.app/1";

  const fullUrl = `${baseUrl}/${customPath}`;

  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        setIsCopied(true);
        // toast({
        //   title: "Copied!",
        //   description: "Link copied to clipboard",
        // })
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        // toast({
        //   title: "Error",
        //   description: "Failed to copy link",
        //   variant: "destructive",
        // })
      });
  }, [fullUrl]);

  const handleCreate = useCallback(async () => {
    if (!customPath) {
      setError("Please enter a custom path");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const exists = await checkPathExists(customPath);
      if (exists) {
        setError("This custom path is already taken. Please try another.");
      } else {
        const res = await createCustomPath(customPath,localLink);
        if (res.status !== "notAuthenticated") {
            res.status === 'created'?
          setSuccess(res.message):
          setError(res.message)
        }
      }
    } catch (err) {
      console.error("Error creating custom path:", err);
      setError("An error occurred while creating the custom path");
    } finally {
      setIsLoading(false);
    }
  }, [customPath]);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
        <Button variant="ghost" className="rounded-full hover:bg-gray-100 transition-colors duration-200">
            <PenSquare className="w-4 h-4 mr-2" />
            Create Custom URL
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Custom Link</DialogTitle>
            <DialogDescription>
              Enter your custom path to create a unique link.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-2">
              <span className="col-span-1 font-medium text-right">
                {baseUrl}/
              </span>
              <Input
                id="custom-path"
                value={customPath}
                onChange={(e) => setCustomPath(e.target.value)}
                className="col-span-3"
                placeholder="your-custom-path"
              />
            </div>
            <div className="flex items-center gap-2">
              <Input value={fullUrl} readOnly className="flex-grow" />
              <Button onClick={copyToClipboard} size="icon" variant="outline">
                {isCopied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <ClipboardCopy className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {isCopied ? "Copied" : "Copy to clipboard"}
                </span>
              </Button>
            </div>
            <Button onClick={handleCreate} disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Link"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!error || !!success}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{error ? "Already Exists 😅" : "Congratulation🎉"}</AlertDialogTitle>
            <AlertDialogDescription>
              {error || success}
              {success && (
                <div className="mt-4">
                  <p className="font-semibold">Your custom link:</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Input value={fullUrl} readOnly className="flex-grow" />
                    <Button
                      onClick={copyToClipboard}
                      size="icon"
                      variant="outline"
                    >
                      {isCopied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <ClipboardCopy className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {isCopied ? "Copied" : "Copy to clipboard"}
                      </span>
                    </Button>
                  </div>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setError(null);
                setSuccess(null);
              }}
            >
              Close
            </AlertDialogCancel>
            {success && (
              <AlertDialogAction onClick={copyToClipboard}>
                Copy URL
              </AlertDialogAction>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
