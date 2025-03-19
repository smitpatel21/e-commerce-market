
"use client"
import { buttonVariants } from "@/components/ui/Button";
import { signIn, signOut } from "next-auth/react";

export default function Signin() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData.get("email"));
        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: true,
            callbackUrl: "https://youtube.com/",
        });
        console.log(res);
    };

    const credentialsAction = async (formData: FormData) => {
        
        // const res = signIn("credentials", formData);
        const email = formData.get("email");
        const password = formData.get("password")
        const res = await signIn('credentials', {
            email,
            password,
            // redirect:false
          });
      }
    return (
        <div className="mx-auto">
            <form
                action={credentialsAction}
                // action={async (formData) => {
                //     "use server";
                //     console.log(formData)
                //     await signIn("credentials", formData);
                // }}
                     className="flex flex-col gap-4"
            >
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        className="focus:outline-none box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        className="focus:outline-none box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                    />
                </label>

                <button
                    className={buttonVariants({ variant: "default" })}
                    type="submit"
                >
                    {" "}
                    Sign in{" "}
                </button>
                {/* <button onClick={()=>signOut()} >Sign out</button> */}
            </form>
        </div>
    );
}
