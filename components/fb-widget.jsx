'use client';
import { useEffect } from 'react';

export default function FbWidget() {
    useEffect(() => {
        // Load Facebook SDK if not already loaded
        if (!window.FB) {
            const script = document.createElement('script');
            script.async = true;
            script.defer = true;
            script.crossOrigin = 'anonymous';
            script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
            script.onload = () => {
                if (window.FB) window.FB.XFBML.parse();
            };
            document.body.appendChild(script);
        } else {
            // Parse again if FB already loaded
            window.FB.XFBML.parse();
        }
    }, []);

    return (
        <div
            className="fb-page"
            data-href="https://www.facebook.com/profile.php?id=61576777852955"
            data-tabs="timeline"
            data-width="370"
            data-height="500"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
        >
            <blockquote cite="https://www.facebook.com/profile.php?id=61576777852955" className="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/profile.php?id=61576777852955">Facebook Page</a>
            </blockquote>
        </div>
    );
}
// This component renders a Facebook Page Plugin widget.
// It uses the Facebook SDK to load the widget and parse it.
