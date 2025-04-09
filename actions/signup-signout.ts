"use server";

import { signUpSchema } from "@/lib/validators/signup-signout-schema";

const signup = (formData: any) => {
    fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
    });
};

export { signup };
