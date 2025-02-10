"use client";

import { signIn } from "@/lib/auth";
import { FormEvent, useState } from "react";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const res = await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/",
        });
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
        >
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}
