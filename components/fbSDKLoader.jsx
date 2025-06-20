'use client';

import { useEffect } from 'react';

export default function FacebookSDKLoader() {
    useEffect(() => {
        // Avoid loading multiple times
        if (document.getElementById('facebook-jssdk')) return;

        const script = document.createElement('script');
        script.id = 'facebook-jssdk';
        script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0';
        script.async = true;
        document.body.appendChild(script);

        const fbRoot = document.createElement('div');
        fbRoot.id = 'fb-root';
        document.body.prepend(fbRoot);
    }, []);

    return null;
}
