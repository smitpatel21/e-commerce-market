"use client"
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { useSession } from "next-auth/react";
import React from "react";

export default function HomePageLayout({ children }: {  children: React.ReactNode }) {
    const session = useSession()
    console.log(session)

    // if (!session?.user) {
    //   redirect('/sign-in')
    // }
    return <div>
        <Navbar user={session.data?.user} />
            {children}
        <Footer/>
    </div>
}
