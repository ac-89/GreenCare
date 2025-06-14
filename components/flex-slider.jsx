import React from 'react';

export default function FlexSlider() {
    return (
        <section className="slider">
            <div className="flexslider">
                <ul className="slides">
                    <li style="background-image: url('./images/20230804.jpg')">
                        <div className="row">
                            <div className="slider-caption">
                                <h1>We provide Ultimate Flooring and Paving Services.</h1>
                                <p>We make it a priority to offer flexible services to accommodate your needs</p>
                                <a href="#">Get A Quote Now</a>
                            </div>
                        </div>
                    </li>
                    <li style="background-image: url('./images/20230813.jpg')">
                        <div className="row">
                            <div className="slider-caption">
                                <h1>We provide Ultimate Flooring and Paving Services.</h1>
                                <p>We make it a priority to offer flexible services to accommodate your needs</p>
                                <a href="#">Get A Quote Now</a>
                            </div>
                        </div>
                    </li>
                    <li style="background-image: url('./images/20230818.jpg')">
                        <div className="row">
                            <div className="slider-caption">
                                <h1>We provide Ultimate Flooring and Paving Services.</h1>
                                <p>We make it a priority to offer flexible services to accommodate your needs</p>
                                <a href="#">Get A Quote Now</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
