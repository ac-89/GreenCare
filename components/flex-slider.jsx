'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useRef } from 'react';

const images = ['/images/hero1.jpg', '/images/hero4.jpg', '/images/hero6.jpg'];
const Logo = '/images/greencare-logo-trans.png';

export default function FlexSlider() {
    const sliderRef = useRef(null);

    const [sliderInstanceRef, slider] = useKeenSlider({
        loop: true,
        duration: 1000,
        slides: {
            origin: 'center',
            perView: 1
        },
        drag: true,
        created() {
            console.log('Slider created');
        },
        slideChanged(s) {
            console.log('Slide changed to:', s.track.details.rel);
        }
    });

    // Autoplay effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (slider) {
                slider.current?.next();
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [slider]);

    return (
        <div ref={sliderInstanceRef} className="keen-slider h-screen w-full overflow-hidden">
            {images.map((src, index) => (
                <div
                    key={index}
                    className="keen-slider__slide flex items-center justify-center bg-cover bg-center text-white"
                    style={{
                        backgroundImage: `url(${src})`,
                        height: '70vh'
                    }}
                >
                    <div className="rounded-xl bg-black/60 p-6 text-center">
                        <img
                            src={Logo}
                            alt="Green Care Landscaping and Paving Logo"
                            className="mx-auto mb-4 h-24 w-auto"
                        />
                        <h1 className="slider-heading mb-4 text-3xl font-bold text-white sm:text-5xl">
                            For all your landscaping needs
                        </h1>
                        <p className="slider-paragraph mb-4 text-lg text-white sm:text-xl">
                            Friendly and reliable service with over 20 years experience
                        </p>
                        <a
                            href="#"
                            className="slider-btn inline-block rounded-md bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                        >
                            Get A Quote Now
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
