import React from 'react';
import servicesData from '/data/services.json';
import Link from 'next/link';
export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service['category-slug'] || service.slug // Use category-slug or slug as needed
    }));
}

export default function Services({ params }) {
    const { slug } = params;
    console.log('Slug:', slug);
    // Filter services based on the slug. If there is no slug, return all services.
    let services = servicesData;
    !slug ? (services = servicesData) : (services = servicesData.filter((s) => s['category-slug'] === slug));
    console.log('Service:', services);

    return (
        <>
            {' '}
            <section className="portfolio-wrapper bg">
                <div className="row">
                    <div className="small-12 large-8 large-offset-2 columns">
                        <div className="wd-title-section_c">
                            <h2> {services[0].category}</h2>
                            {/* <h5>
                                Neque porro quisquam est qui dolorem ipsum quia lorem ipsum dolor sit amet dolor sit
                                amet, consectetur, adipisci velit
                            </h5> */}
                        </div>
                    </div>
                </div>
                {/* back button */}
                <div className="row">
                    <div className="small-12 large-12 columns">
                        <div className="wd-back-button">
                            <Link href="/services" className="button small radius">
                                Back to Services
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="small-12 large-12 columns">
                        <div className="wd-section-project">
                            <ul className="masque portfolio-grid small-block-grid-1	medium-block-grid-2 large-block-grid-2">
                                {services.map((service) => (
                                    <li key={service.id} className="wd-project hvr-underline-from-center">
                                        <div className="wd-project hvr-underline-from-center">
                                            <img
                                                width="380"
                                                height="254"
                                                src={service.image_urls[0]}
                                                className="attachment-flooring_portfolio size-flooring_portfolio wp-post-image"
                                                alt=""
                                            />
                                            <Link href={`/contact`}>
                                                <h4>{service.name}</h4>
                                            </Link>
                                            <p> {service.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
