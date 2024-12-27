import Navbar from "@/components/layouts/Navbar";
import React from "react";

export default function HomePageLayout({ children }: {  children: React.ReactNode }) {
    return <div>
        <Navbar/>
        {children}
    </div>
}
