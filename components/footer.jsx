import Link from 'next/link';

export function Footer() {
    return (
        <section className="wd-footer">
            <div className="row animation-parent" data-animation-delay="180">
                <ul className="large-4 medium-4 columns animated fadeInRight block" data-animated="fadeInRight">
                    <li>
                        <div className="textwidget">
                            <div className="widget-logo">
                                <img alt="logo" src="images/greencare-logo-trans.png" />
                                <p>
                                    The Flooring inc. is the leader of floor installation and repair in the country sed
                                    diam nonumy eirmod tempor invidunt ut labore and efficient strategy.
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
                                            <span>Adress:</span> 121 King Street, Melbourne 3000 Australia
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
                {/* <ul className="large-4 medium-4 columns animated fadeInRight block" data-animated="fadeInRight">
                    <li>
                        <h2 className="block-title">Newsletter</h2>
                        <div className="textwidget">
                            <div className="wd-newsletter">
                                Sign up your newsletter
                                <div>
                                    <input
                                        type="text"
                                        className="email-adress"
                                        placeholder="EMAIL ADRESS"
                                        size="20"
                                        value=""
                                        name="email-adress"
                                    />
                                    <input type="submit" className="newslettersubmit" value="GO" />
                                    <ul className="inline-list">
                                        <li className="flickr">
                                            <a href="http://www.flickr.com/#">
                                                <i className="fa fa-flickr"></i>
                                            </a>
                                        </li>
                                        <li className="facebook">
                                            <a href="https://www.facebook.com/#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="twitter">
                                            <a href="https://twitter.com/#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="vimeo">
                                            <a href="https://vimeo.com/#">
                                                <i className="fa fa-vimeo-square"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul> */}
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
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright small-12 large-12 columns">
                        <p>© 2017 Flooring All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
