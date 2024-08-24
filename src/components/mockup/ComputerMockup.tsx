import React from 'react'

function ComputerMockup({
    children,
  }: {
    children: React.ReactNode;
  })  {
  return (
    <div className="min-h-screen w-full flex  items-center justify-center relative">
      <div className="flex flex-col w-auto h-fit ">
        <figure className="ms-auto me-20 relative z-[1] max-w-full w-[68rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
          <div className="relative flex items-center max-w-full bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-neutral-700">
            <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
              <span className="h-4 w-4  bg-red-600 rounded-full dark:bg-neutral-600"></span>
              <span className="h-4 w-4 bg-green-600 rounded-full dark:bg-neutral-600"></span>
              <span className="h-4 w-4 bg-yellow-600 rounded-full dark:bg-neutral-600"></span>
            </div>
            <div className="flex justify-center items-center w-full bg-gray-700 text-[.5rem] text-gray-400 rounded-sm sm:text-[1rem] dark:bg-neutral-600 dark:text-neutral-400">
              https.itzmylink.vercel.app/...
            </div>
          </div>

          <div className="bg-zinc-100 rounded-b-lg h-[38rem] border relative overflow-hidden">
           {children}
          </div>
        </figure>
      </div>
    </div>
  )
}

export default ComputerMockup