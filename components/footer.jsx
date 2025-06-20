import Link from 'next/link';

export function Footer() {
    return (
        <section className="wd-footer">
            <div className="row animation-parent" data-animation-delay="180">
                <ul className="large-4 medium-4 columns animated fadeInRight block" data-animated="fadeInRight">
                    <li>
                        <div className="textwidget">
                            <div className="widget-logo">
                                <img alt="logo" src="/images/greencare-logo-trans.png" />
                                <p>
                                    Green Care Landscaping and Paving is a family-run business with over 20 years of
                                    experience in the industry. We pride ourselves on providing friendly and reliable
                                    service to all our customers.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="large-4 medium-4 columns animated fadeInRight block" data-animated="fadeInRight">
                    <li>
                        <h2 className="block-title">Get in Touch</h2>
                        <div className="textwidget">
                            <div className="widget-info">
                                <ul>
                                    <li>
                                        <span>
                                            <a href="tel:+0852439522">
                                                <span>Phone:</span> 085 243 9522
                                            </a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <span>Email:</span>
                                            <a href="mailto:email@website.com">
                                                greencarelandscapingandpaving@gmail.com
                                            </a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <span>Address:</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <footer className="wd-copyright">
                <div className="row">
                    <div className="small-12 large-12 columns">
                        <div className="copyright-menu">
                            <ul id="menu-footer-menu" className="menu">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="about-us.html">About Us</a>
                                </li>
                                <li>
                                    <a href="blog.html">Services</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright small-12 large-12 columns">
                        <p>© 2025 All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
