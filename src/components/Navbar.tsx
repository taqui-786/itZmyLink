
import Link from "next/link";
import React from "react";
import { auth, signOut } from "./auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { supabaseServer } from "@/lib/supabase/supabaseServer";

async function Navbar() {
  const session = await auth();
  let linkCount = 0
const supabase = await supabaseServer().from('links').select('*').eq('email',session?.user?.email)
if(supabase.data?.length){
  linkCount = supabase.data.length
}
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
          href="https://flowbite.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            itZmyLink
          </span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          {/* <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a> */}
          {session?.user ? (
            <div className="flex gap-3 h-full w-fit">
              <Link href={'/links'} className={cn(buttonVariants({variant:"outline"}),"flex gap-1")}>My Links <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">{linkCount}</span></Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={session?.user.image as string}/>
                  <AvatarFallback>Ti</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel><div className="flex flex-col">
                    <h1 className="text-sm font-semibold">{session?.user.name}</h1>
                    <p className="text-xs font-semibold">{session?.user.email}</p>
                    </div></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem  ><Link href={'/api/auth/signout'}>Logout</Link></DropdownMenuItem>
             
              </DropdownMenuContent>
            </DropdownMenu></div>
          ) : (
            <Link href={"/auth/signin"} className={cn(buttonVariants({variant:'default'}))}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
