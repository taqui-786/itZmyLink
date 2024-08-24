import React from 'react'
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LoginGoogleBtn from '@/components/forms/LoginGoogleBtn';
type Props = {
  searchParams:{
    callbackUrl?:string
  }
};
const page: React.FC<Props> = async({searchParams}) => {
  return (
   
      <div className="grid place-content-center min-h-screen w-full">
        <Card className="mx-auto max-w-sm">
      <CardHeader>
      <CardTitle className="text-2xl">Welcome Back</CardTitle>
        <CardDescription>
          Select your registered email to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
      <div className="grid gap-4">
     
         <LoginGoogleBtn callbackUrl={searchParams.callbackUrl as string}/>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
      </div>
      )
    }

    export default page