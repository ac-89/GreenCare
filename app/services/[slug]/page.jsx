import React from 'react';
import servicesData from '/data/services.json';

export default async function Services({ params }) {
    const { slug } = await params;
    console.log('Slug:', slug);
    // Filter services based on the slug. If there is no slug, return all services.
    let services;
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
                            <h5>
                                Neque porro quisquam est qui dolorem ipsum quia lorem ipsum dolor sit amet dolor sit
                                amet, consectetur, adipisci velit
                            </h5>
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
                                                src={service.image}
                                                className="attachment-flooring_portfolio size-flooring_portfolio wp-post-image"
                                                alt=""
                                            />
                                            <a href={`/services/${service.slug}`}>
                                                <h4>{service.name}</h4>
                                            </a>
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
