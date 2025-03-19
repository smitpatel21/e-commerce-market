import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "../ui/Button";
import CartButton from "../cart/CartButton";
import UserAccountNav from "../auth/UserAccountNav";

interface NavbarProps {
    user?: {};
}

const Navbar: FC<NavbarProps> = ({ user }) => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background py-3">
            <nav className="container px-2 sm:px-4 lg:px-6 flex items-center justify-between">
                NavBar
                <div className="flex items-center gap-x-2">
                    <CartButton />
                    {user ? (
                        <UserAccountNav user={user} />
                    ) : (
                        <Link
                            href="/sign-in"
                            className={buttonVariants({
                                size: "sm",
                            })}
                        >
                            Sign In
                            <span className="sr-only">Sign In</span>
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
