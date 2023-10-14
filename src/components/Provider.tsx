'use client';

import { DataProvider } from "@/lib/Context";
import React from "react";

// import { Toaster } from "@/components/ui/toaster";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <DataProvider>
            {children}
            {/* <Toaster /> */}
        </DataProvider>
    );
}