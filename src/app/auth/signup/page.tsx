import Link from "next/link"


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import SignupForm from "@/components/forms/SignupForm"


function page() {
  return (
    <div className="grid place-content-center min-h-screen w-full">
    <Card className="  max-w-sm">
    <CardHeader>
      <CardTitle className="text-xl">Sign Up</CardTitle>
      <CardDescription>
        Enter your information to create an account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <SignupForm/>
      <div className="mt-4 text-center text-sm">
        Already have an account?
        <Link href="/auth/signin" className="underline">
          Sign in
        </Link>
      </div>
    </CardContent>
  </Card>
  </div>
  )
}

export default page
