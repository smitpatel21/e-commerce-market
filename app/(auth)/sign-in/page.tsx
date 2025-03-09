"use client";
import { buttonVariants } from "@/components/ui/Button";
import { signIn } from "@/lib/auth";
// import { FormEvent, useState } from "react";

export default function Signin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("email"));
    const res = await signIn("Credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: true,
      callbackUrl: "https://youtube.com/",
    });
    console.log(res);
  };
  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label>
          Email
          <input
            type="email"
            name="email"
            // onChange={(e) => setEmail(e.target.value)}
            className="focus:outline-none box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
          />
        </label>
        <label>
          Password
          <input
            // onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className="focus:outline-none box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
          />
        </label>

        <button className={buttonVariants({ variant: "default" })} type="submit">
          {" "}
          Sign in{" "}
        </button>
      </form>
    </div>
  );
}
