"use client";
import { signup } from "@/actions/signup-signout";
import { Button, buttonVariants } from "@/components/ui/Button";
import {
    Form,
    FormControl,
    FormField,
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
import { Textarea } from "@/components/ui/Textarea";
import { signUpSchema } from "@/lib/validators/signup-signout-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignupPage() {
    // const [state, action] = useFormState(signup, { name: "", email: "", password: "", confirmPassword: "" });
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm({ resolver: zodResolver(signUpSchema) });
    return (
        <div className="mx-auto">
            <Form {...form}>
                <form
                    className="grid w-full max-w-xl gap-5"
                    onSubmit={form.handleSubmit(signup)}
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Type your name here."
                                        disabled={isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Type email address here."
                                        disabled={isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="flex-1 w-full">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            type="password"
                                            placeholder="Enter your password"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col items-start gap-6 sm:flex-row">
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem className="flex-1 w-full">
                                    <FormLabel>Role</FormLabel>
                                    <Select
                                        value={field.value}
                                        onValueChange={(
                                            value: typeof field.value
                                        ) => field.onChange(value)}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value={"seller"}>
                                                Seller
                                            </SelectItem>
                                            <SelectItem value={"buyer"}>
                                                Buyer
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button isLoading={isLoading}>Sign up</Button>
                </form>
            </Form>
        </div>
    );
}
