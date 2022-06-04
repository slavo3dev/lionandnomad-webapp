import React, { useState } from "react";
import Link from "next/link";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

interface Props {
    href: string;
    title: string;
}

const BsNavLink = (props: Props) => {
    const { href, title } = props;
    return (
        <Link href={href}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    );
};

const BsNavBrand = () => (
    <Link href="/">
        <a className="navbar-brand port-navbar-brand">Slavo_3</a>
    </Link>
);

// const LoginLink = () => <a className="nav-link port-navbar-link" href="/api/v1/login">Login</a>

const LoginLink = () => (
    <a className="nav-link port-navbar-link" href="/api/auth/login">
        Login
    </a>
);

const LogoutLink = () => (
    <span className="nav-link port-navbar-link clickable">Logout</span>
);

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar
                className="port-navbar port-default absolute"
                color="transparent"
                dark
                expand="md"
            >
                <BsNavBrand />
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/" title="Home" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/about" title="About" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/portfolios" title="Portfolios" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/blogs" title="Blogs" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/cv" title="Cv" />
                        </NavItem>
                    </Nav>
                </Collapse>
                <Nav navbar>
                    <NavItem className="port-navbar-item">
                        <p style={{ color: "white" }}>
                            <LoginLink />
                        </p>
                    </NavItem>
                    <NavItem className="port-navbar-item">
                        <LogoutLink />
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};
