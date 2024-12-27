import { FC } from "react";

interface NavbarProps {
    user?: {};
}
const Navbar: FC<NavbarProps> = ({ user }) => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background py-3">
            <nav className="container px-2 sm:px-4 lg:px-6 flex items-center justify-between"></nav>
        </header>
    );
};

export default Navbar;
