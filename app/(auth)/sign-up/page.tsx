"use client";
import { signup } from "@/actions/signup-signout";
import { buttonVariants } from "@/components/ui/Button";
import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select";

export default function SignupPage() {
    // const [state, action] = useFormState(signup, { name: "", email: "", password: "", confirmPassword: "" });
    return (
        <div className="mx-auto">
            <form className="flex flex-col gap-4" action={signup}>
                <label>
                    Name
                    <Input type="text" name="name" />
                </label>
                <label>
                    Email
                    <Input type="email" name="email" />
                </label>
                <label>
                    Password
                    <Input type="password" name="password" />
                </label>
                <label>
                    Confirm Password
                    <Input type="password" name="confirmPassword" />
                </label>
                <label>
                    Role
                    <Select
                    //   value={field.value}
                    //   onValueChange={(value: typeof field.value) =>
                    //     field.onChange(value)
                    //   }
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="skateboards">Seller</SelectItem>
                            <SelectItem value="clothing">Buyer</SelectItem>
                        </SelectContent>
                    </Select>
                </label>

                <button
                    className={buttonVariants({ variant: "default" })}
                    type="submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    );
}
