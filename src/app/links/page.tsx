import { Card, CardContent } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { Construction } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <Card className="w-full max-w-3xl">
        <CardContent className="flex flex-col items-center space-y-6 p-6 text-center">
          <Construction className="w-24 h-24 text-primary" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
            Under Construction
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground">
            This page will be available soon.
          </p>
            <Link href="/" className={cn(buttonVariants({size:'lg'}))}>Go Home</Link>
        </CardContent>
      </Card>
    </div>
  )
}