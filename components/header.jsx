import Image from 'next/image';
import Link from 'next/link';

// const navItems = [
//     { linkText: 'Home', href: '/' },
//     { linkText: 'Revalidation', href: '/revalidation' },
//     { linkText: 'Image CDN', href: '/image-cdn' },
//     { linkText: 'Edge Function', href: '/edge' },
//     { linkText: 'Blobs', href: '/blobs' },
//     { linkText: 'classNameics', href: '/classNameics' }
// ];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pb-12 pt-6 sm:pt-12 md:pb-24">
            <header className="l-header creative-layout">
                <div className="top-bar-container contain-to-grid sticky">
                    <nav className="top-bar" data-topbar="">
                        {' '}
                        <Link href="/">
                            <img src="/images/greencare-logo-trans.png" alt="GreenCare Logo" className="logo" />
                        </Link>
                        <ul className="title-area">
                            <li className="name">
                                <h1>
                                    {/* <a title="Flooring Company WordPress Theme" rel="home" href="index.html">
                                            <img alt="logo" src="images/logo-white.png" />
                                        </a> */}
                                </h1>
                            </li>
                            <li className="toggle-topbar menu-icon">
                                <Link href="#" className="has-icon">
                                    <span>Menu</span>
                                </Link>
                            </li>
                        </ul>
                        <section className="creative top-bar-section right">
                            <div className="menu-main-menu-container">
                                <ul id="menu-main-menu" className="menu">
                                    <li id="menu-item-1324" className="active_menu">
                                        <Link href="index.html" className="has-icon">
                                            Home
                                        </Link>
                                    </li>

                                    <li id="menu-item-1309">
                                        <Link href="about-us.html" className="has-icon">
                                            About Us
                                        </Link>
                                    </li>
                                    <li id="menu-item-1299" className="has-dropdown not-click">
                                        <Link href="/services" className="has-icon">
                                            Services
                                        </Link>
                                        <ul className="sub-menu dropdown">
                                            <li className="title back js-generated">
                                                <h5>
                                                    <Link href="javascript:void(0)">Back</Link>
                                                </h5>
                                            </li>

                                            <li id="menu-item-1300" className="has-dropdown not-click">
                                                <ul>
                                                    <li className="parent-link hide-for-medium-up">
                                                        <Link
                                                            className="parent-link js-generated"
                                                            href="/driveways-and-surfacing"
                                                        >
                                                            Driveways and Surfacing
                                                        </Link>
                                                    </li>
                                                    <li id="menu-item-1317">
                                                        <Link
                                                            href="/services/patios-paths-and-decking"
                                                            className="has-icon"
                                                        >
                                                            Patios, Paths and Decking
                                                        </Link>
                                                    </li>
                                                    <li id="menu-item-1316">
                                                        <Link
                                                            href="/services/fencing-and-structures"
                                                            className="has-icon"
                                                        >
                                                            Fencing and Structures
                                                        </Link>
                                                    </li>
                                                    <li id="menu-item-1315">
                                                        <Link href="/services/lawns-and-turfing" className="has-icon">
                                                            Lawns and Turfing
                                                        </Link>
                                                    </li>
                                                    <li id="menu-item-1314">
                                                        <Link
                                                            href="/services/garden-design-and-landscaping"
                                                            className="has-icon"
                                                        >
                                                            Garden Design and Landscaping
                                                        </Link>
                                                    </li>
                                                    <li id="menu-item-1315">
                                                        <Link
                                                            href="/services/tree-and-hedge-services"
                                                            className="has-icon"
                                                        >
                                                            Tree and Hedge Services
                                                        </Link>
                                                    </li>
                                                    <li id="menu-item-1315">
                                                        <Link
                                                            href="/services/clearance-and-waste-removal"
                                                            className="has-icon"
                                                        >
                                                            Clearance and Waste Removal
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-1308">
                                        <Link href="contact.html" className="has-icon">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </nav>
                </div>
            </header>
        </nav>
    );
}
