import React from "react";
import Link from 'next/link'

const Navbar = () => {
    return (
        
        <aside>
            <nav className="navbar justify-center flex mt-5 font-[family-name:var(--font-geist-sans)]"> 
                <Link 
                    href="/" 
                    className="inline-flex items-center  gap-2 text-inherit no-underline mr-4">
                        Home
                </Link>

                <Link 
                    href="/posts" 
                    className="inline-flex items-center  gap-2 text-inherit no-underline mr-4">
                        Posts
                </Link>
            </nav>
        </aside>

        );
};

export default Navbar;