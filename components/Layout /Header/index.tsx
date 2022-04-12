import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
    return (
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/portfolios">
                <a>Portfolios</a>
            </Link>
            <Link href="/blogs">
                <a>Blogs</a>
            </Link>
            <Link href="/cv">
                <a>Cv</a>
            </Link>
        </>
    );
};
