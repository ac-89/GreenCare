import Image from 'next/image';
import Link from 'next/link';
import greenCareLogo from 'public/images/greencare-logo-trans.png';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'classNameics', href: '/classNameics' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pb-12 pt-6 sm:pt-12 md:pb-24">
            <header className="l-header creative-layout">
                <div className="top-bar-container contain-to-grid sticky">
                    <nav className="top-bar" data-topbar="">
                        {' '}
                        <Link href="/">
                            <Image src={greenCareLogo} alt="GreenCare" className="logo" />
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
                                <a href="#">
                                    <span>Menu</span>
                                </a>
                            </li>
                        </ul>
                        <section className="creative top-bar-section right">
                            <div className="menu-main-menu-container">
                                <ul id="menu-main-menu" className="menu">
                                    <li id="menu-item-1324" className="active_menu">
                                        <a href="index.html" className="has-icon">
                                            Home
                                        </a>
                                    </li>
                                    <li id="menu-item-1295" className="has-dropdown not-click">
                                        <a href="#" className="has-icon">
                                            pages
                                        </a>
                                        <ul className="sub-menu dropdown">
                                            <li className="title back js-generated">
                                                <h5>
                                                    <a href="javascript:void(0)">Back</a>
                                                </h5>
                                            </li>
                                            <li className="parent-link hide-for-medium-up">
                                                <a className="parent-link js-generated" href="#">
                                                    pages
                                                </a>
                                            </li>
                                            <li id="menu-item-1309">
                                                <a href="about-us.html" className="has-icon">
                                                    About Us
                                                </a>
                                            </li>
                                            <li id="menu-item-1313">
                                                <a href="services.html" className="has-icon">
                                                    Services
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-1299" className="has-dropdown not-click">
                                        <a href="#" className="has-icon">
                                            Portfolio
                                        </a>
                                        <ul className="sub-menu dropdown">
                                            <li className="title back js-generated">
                                                <h5>
                                                    <a href="javascript:void(0)">Back</a>
                                                </h5>
                                            </li>
                                            <li className="parent-link hide-for-medium-up">
                                                <a className="parent-link js-generated" href="#">
                                                    Portfolio
                                                </a>
                                            </li>
                                            <li id="menu-item-1300" className="has-dropdown not-click">
                                                <a href="#" className="has-icon">
                                                    Style I
                                                </a>
                                                <ul className="sub-menu dropdown">
                                                    <li className="title back js-generated">
                                                        <h5>
                                                            <a href="javascript:void(0)">Back</a>
                                                        </h5>
                                                    </li>
                                                    <li className="parent-link hide-for-medium-up">
                                                        <a className="parent-link js-generated" href="#">
                                                            Style I
                                                        </a>
                                                    </li>
                                                    <li id="menu-item-1317">
                                                        <a href="portfolio-columns.html" className="has-icon">
                                                            Portfolio columns
                                                        </a>
                                                    </li>
                                                    <li id="menu-item-1316">
                                                        <a href="portfolio-three-columns.html" className="has-icon">
                                                            Portfolio three columns
                                                        </a>
                                                    </li>
                                                    <li id="menu-item-1315">
                                                        <a href="portfolio-two.html" className="has-icon">
                                                            Portfolio Two Columns
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-1301" className="has-dropdown not-click">
                                                <a href="#" className="has-icon">
                                                    Style II
                                                </a>
                                                <ul className="sub-menu dropdown">
                                                    <li className="title back js-generated">
                                                        <h5>
                                                            <a href="javascript:void(0)">Back</a>
                                                        </h5>
                                                    </li>
                                                    <li className="parent-link hide-for-medium-up">
                                                        <a className="parent-link js-generated" href="#">
                                                            Style II
                                                        </a>
                                                    </li>
                                                    <li id="menu-item-1319">
                                                        <a
                                                            href="portfolio-style-ii-two-columns.html"
                                                            className="has-icon"
                                                        >
                                                            Portfolio Style II Two Columns
                                                        </a>
                                                    </li>
                                                    <li id="menu-item-1320">
                                                        <a
                                                            href="portfolio-style-ii-three-columns.html"
                                                            className="has-icon"
                                                        >
                                                            Portfolio Style II Theree Columns
                                                        </a>
                                                    </li>
                                                    <li id="menu-item-1321">
                                                        <a
                                                            href="portfolio-style-2-four-columns.html"
                                                            className="has-icon"
                                                        >
                                                            Portfolio Style II Four Columns
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-1302" className="has-dropdown not-click">
                                                <a href="#" className="has-icon">
                                                    Single portfolio
                                                </a>
                                                <ul className="sub-menu dropdown">
                                                    <li className="title back js-generated">
                                                        <h5>
                                                            <a href="javascript:void(0)">Back</a>
                                                        </h5>
                                                    </li>
                                                    <li className="parent-link hide-for-medium-up">
                                                        <a className="parent-link js-generated" href="#">
                                                            Single portfolio
                                                        </a>
                                                    </li>
                                                    <li id="menu-item-1303">
                                                        <a href="single-portfolio.html" className="has-icon">
                                                            Single Portfolio
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-1298" className="has-dropdown not-click">
                                        <a href="#" className="has-icon">
                                            Blog
                                        </a>
                                        <ul className="sub-menu dropdown">
                                            <li className="title back js-generated">
                                                <h5>
                                                    <a href="javascript:void(0)">Back</a>
                                                </h5>
                                            </li>
                                            <li className="parent-link hide-for-medium-up">
                                                <a className="parent-link js-generated" href="#">
                                                    Blog
                                                </a>
                                            </li>
                                            <li id="menu-item-1307">
                                                <a href="blog.html" className="has-icon">
                                                    classNameical Blog
                                                </a>
                                            </li>
                                            <li id="menu-item-1314">
                                                <a href="blog-columns.html" className="has-icon">
                                                    Blog Columns
                                                </a>
                                            </li>
                                            <li id="menu-item-1297">
                                                <a href="single-blog.html" className="has-icon">
                                                    Single Post
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-1296" className="has-dropdown not-click">
                                        <a href="#" className="has-icon">
                                            Element
                                        </a>
                                        <ul className="sub-menu dropdown">
                                            <li className="title back js-generated">
                                                <h5>
                                                    <a href="javascript:void(0)">Back</a>
                                                </h5>
                                            </li>
                                            <li className="parent-link hide-for-medium-up">
                                                <a className="parent-link js-generated" href="#">
                                                    Element
                                                </a>
                                            </li>
                                            <li id="menu-item-1312">
                                                <a href="call-to-action.html" className="has-icon">
                                                    Call To Action
                                                </a>
                                            </li>
                                            <li id="menu-item-1311">
                                                <a href="pricing-tables.html" className="has-icon">
                                                    Pricing Tables
                                                </a>
                                            </li>
                                            <li id="menu-item-1310">
                                                <a href="faq.html" className="has-icon">
                                                    FAQ
                                                </a>
                                            </li>
                                            <li id="menu-item-1318">
                                                <a href="columns.html" className="has-icon">
                                                    Columns
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-1308">
                                        <a href="contact.html" className="has-icon">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </nav>
                </div>
            </header>

            <Link
                href="https://github.com/netlify-templates/next-platform-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:ml-auto lg:inline-flex"
            >
                <Image src={githubLogo} alt="GitHub logo" className="w-7" />
            </Link>
        </nav>
    );
}
