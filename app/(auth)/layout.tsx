"use client"
import AspectRatio from "@/components/ui/AspectRatio";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function layout({ children }: React.PropsWithChildren) {
    const session = useSession();
    console.log(session,'$$$$$$$$$$$$$$$')
    return (
        <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
            <AspectRatio ratio={16 / 9}>
                <Image
                    src="/images/auth-layout.webp"
                    alt="A skateboarder doing a high drop"
                    priority
                    fill
                    className="absolute object-cover inset-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />
                <Link
                    href="/"
                    className="absolute left-4 top-4 sm:left-8 sm:top-6 z-20 flex items-center text-lg font-bold tracking-tight"
                >
                    <svg
                        className="mr-2 h-6 w-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="7" cy="15" r="2" />
                        <circle cx="17" cy="15" r="2" />
                        <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
                    </svg>
                    <span>Skaters</span>
                </Link>
            </AspectRatio>
            <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
                {children}
            </main>
        </div>
    );
}
