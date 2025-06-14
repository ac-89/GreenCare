'use client';

import dynamic from 'next/dynamic';

const FlexSlider = dynamic(() => import('./flex-slider'), {
    ssr: false // ⛔ prevent SSR to fix hydration issues
});

export default function FlexSliderWrapper() {
    return <FlexSlider />;
}
