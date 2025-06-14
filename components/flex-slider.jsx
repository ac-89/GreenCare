'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useRef } from 'react';

const images = ['/images/20230804.jpg', '/images/20230813.jpg', '/images/20230818.jpg'];

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
                        <h1 className="mb-4 text-3xl font-bold text-white sm:text-5xl ">
                            We provide Ultimate Flooring and Paving Services.
                        </h1>
                        <p className="mb-4 text-lg text-white sm:text-xl">
                            We make it a priority to offer flexible services to accommodate your needs.
                        </p>
                        <a
                            href="#"
                            className="inline-block rounded-md bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                        >
                            Get A Quote Now
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
