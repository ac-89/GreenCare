'use client';

import { slide as Menu } from 'react-burger-menu';

import Link from 'next/link';

export default function BurgerMenu() {
    return (
        <Menu right width={280} className="burger-menu">
            <Link id="home" className="menu-item" href="/">
                Home
            </Link>
            <Link id="services" className="menu-item" href="/services">
                Services
            </Link>
            <Link id="contact" className="menu-item" href="/contact">
                Contact
            </Link>
        </Menu>
    );
}
