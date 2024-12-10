import React from "react";
import Link from "next/link";

const Header:
    React.FC = () => {
        return (
            <header className="bg-gradient-to-r from purple-400 via-pink-500 p-6 text-white flex items-center justify-between">
                <h1 className="text-8x1 text-navyblue font-bold">MY PORTFOLIO</h1>

                <nav className="flex space-x-4 main-navigation">
                    <Link href='#personl-info' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 bg-blue-500">PERSONAL INFORMATION</Link>
                    <Link href='#education' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 bg-blue-500">EDUCATION</Link>
                    <Link href='#skills' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 bg-blue-500">SKILLS</Link>
                    <Link href='#experience' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 bg-blue-500">EXPERIENCE</Link>
                    <Link href='#contact' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 bg-blue-500">CONTACT</Link>
                </nav>
            </header>
        );
    };
export default Header
