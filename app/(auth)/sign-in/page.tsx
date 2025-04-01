"use client";
import { buttonVariants } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { signIn, signOut } from "next-auth/react";

export default function Signin() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: true,
            callbackUrl: "https://youtube.com/",
        });
    };

    const credentialsAction = async (formData: FormData) => {
        // const res = signIn("credentials", formData);
        const email = formData.get("email");
        const password = formData.get("password");
        const res = await signIn("credentials", {
            email,
            password,
            // redirect:false
        });
    };
    return (
        <div className="mx-auto">
            <form
                action={credentialsAction}
                // action={async (formData) => {
                //     "use server";
                //     await signIn("credentials", formData);
                // }}
                className="flex flex-col gap-4"
            >
                <label>
                    Email
                    <Input type="email" name="email" />
                </label>
                <label>
                    Password
                    <Input type="password" name="password" />
                </label>

                <button
                    className={buttonVariants({ variant: "default" })}
                    type="submit"
                >
                    {" "}
                    Sign in{" "}
                </button>
            </form>
        </div>
    );
}
