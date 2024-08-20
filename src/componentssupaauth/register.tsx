"use client";
import React from "react";
import SignUp from "./signup";
import Social from "./social";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Register() {
	const queryString =
		typeof window !== "undefined" ? window?.location.search : "";
	const urlParams = new URLSearchParams(queryString);

	// Get the value of the 'next' parameter
	const next = urlParams.get("next");
	const verify = urlParams.get("verify");

	return (
		<div className="w-full sm:w-[26rem] shadow sm:p-5  border dark:border-zinc-800 rounded-md">
			<div className="p-5 space-y-5">
				<div className="text-center space-y-3">
					<Image
						src={"/supabase.png"}
						alt="supabase logo"
						width={50}
						height={50}
						className=" rounded-full mx-auto"
					/>
					<h1 className="font-bold">Create Account</h1>
					<p className="text-sm">
						Welcome! Please fill in the details to get started.
					</p>
				</div>
				<Social redirectTo={next || "/"} />
				<div className="flex items-center gap-5">
					<div className="flex-1 h-[0.5px] w-full bg-zinc-400 dark:bg-zinc-800"></div>
					<div className="text-sm">or</div>
					<div className="flex-1 h-[0.5px] w-full bg-zinc-400 dark:bg-zinc-800"></div>
				</div>
			</div>
			<SignUp redirectTo={next || "/"} />
		</div>
	);
}
