"use server";

import { signIn } from "@/lib/auth";
import { signInSchema } from "@/lib/validators/signup-signout-schema";

const signup = (formData: FormData) => {
    const validatedFields = signInSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    });
    // console.log(validatedFields?.error);

    signIn("Credentials",validatedFields)
};

export { signup };
