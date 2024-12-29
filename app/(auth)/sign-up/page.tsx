import { signup } from "@/actions/signup-signout";
import { buttonVariants } from "@/components/ui/Button";

export default function SignupPage() {
    // const [state, action] = useFormState(signup, { name: "", email: "", password: "", confirmPassword: "" });
    return (
        <div className="mx-auto">
            <form className="flex flex-col gap-4" action={signup}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        className="focus:outline-none box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                    />
                </label>
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
                <label>
                    Confirm Password
                    <input
                        type="password"
                        name="confirmPassword"
                        className="focus:outline-none box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                    />
                </label>
                <button className={buttonVariants({ variant: "default" })} type="submit">
                    {" "}
                    Sign up{" "}
                </button>
            </form>
        </div>
    );
}
