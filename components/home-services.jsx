import Link from 'next/link';

export default function HomeServices() {
    return (
        <section className="our-services">
            <div className="row">
                <div className="small-12 large-6 large-offset-3 columns">
                    <div className="wd-title-section_c">
                        <h2>We Provide Landscaping Services</h2>
                        <h5>To many clients in Dublin and surrounding areas</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="small-12 large-4 columns">
                    <div className="wd-section-text-icon">
                        <Link href="/services/patios-paths-and-decking">
                            <div className="wd-text-icon-style5 animated fadeInUp text-center" data-animated="fadeInUp">
                                <div className="box-icon">
                                    <img src="images/patio-home.jpg" alt="icon" />
                                </div>
                                <div className="box-description">
                                    <h3>Patios, paths and Decking</h3>
                                    <p>
                                        Enhance your outdoor space with beautifully designed patios, walkways, and
                                        decking built to enjoy.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="small-12 large-4 columns">
                    <div className="wd-section-text-icon">
                        <Link href="/services/fencing-and-structures">
                            <div className="wd-text-icon-style5 animated fadeInUp text-center" data-animated="fadeInUp">
                                <div className="box-icon">
                                    <img src="images/fencing-home.jpg" alt="icon" />
                                </div>
                                <div className="box-description">
                                    <h3>Fencing and Structures</h3>
                                    <p>
                                        Add privacy, security, and charm with quality fencing and custom outdoor
                                        structures.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="small-12 large-4 columns">
                    <div className="wd-section-text-icon">
                        <Link href="/services/lawns-and-turfing">
                            <div className="wd-text-icon-style5 animated fadeInUp text-center" data-animated="fadeInUp">
                                <div className="box-icon">
                                    <img src="images/lawns-home.jpg" alt="icon" />
                                </div>
                                <div className="box-description">
                                    <h3>Lawns and Turfing</h3>
                                    <p>
                                        Achieve a lush, green lawn with professional turfing, artificial grass, and lawn
                                        care services.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="small-12 large-4 columns">
                    <div className="wd-section-text-icon">
                        <Link href="/services/garden-design-and-landscaping">
                            <div className="wd-text-icon-style5 animated fadeInUp text-center" data-animated="fadeInUp">
                                <div className="box-icon">
                                    <img src="images/design-home.jpg" alt="icon" />
                                </div>
                                <div className="box-description">
                                    <h3>Garden Design and Landscaping</h3>
                                    <p>
                                        Transform your garden with creative landscaping and tailored design to suit your
                                        style and needs.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="small-12 large-4 columns">
                    <div className="wd-section-text-icon">
                        <Link href="/services/tree-and-hedge-services">
                            <div className="wd-text-icon-style5 animated fadeInUp text-center" data-animated="fadeInUp">
                                <div className="box-icon">
                                    <img src="images/tree-home.jpg" alt="icon" />
                                </div>
                                <div className="box-description">
                                    <h3>Tree and Hedge Services</h3>
                                    <p>
                                        Maintain a tidy and safe garden with expert tree care, hedge trimming, and
                                        overgrowth control.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="small-12 large-4 columns">
                    <div className="wd-section-text-icon">
                        <Link href="/services/driveways-and-surfacing">
                            <div className="wd-text-icon-style5 animated fadeInUp text-center" data-animated="fadeInUp">
                                <div className="box-icon">
                                    <img src="images/driveways-home.jpg" alt="icon" />
                                </div>
                                <div className="box-description">
                                    <h3>Driveways and Surfacing</h3>
                                    <p>
                                        Create a lasting first impression with expertly installed driveways and durable
                                        surface solutions.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
// Add more services as needed
// You can also add images or icons for each service if desired
