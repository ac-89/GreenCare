'use client';
import FacebookSDKLoader from './fbSDKLoader';
import { useEffect } from 'react';

export default function FbWidget() {
    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }, []);
    return (
        <>
            <FacebookSDKLoader />
            <div
                className="fb-page large-4 fb_iframe_widget"
                data-href="https://www.facebook.com/profile.php?id=61576777852955"
                data-tabs="timeline"
                data-width="500"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
            >
                <blockquote
                    cite="https://www.facebook.com/profile.php?id=61576777852955"
                    className="fb-xfbml-parse-ignore"
                >
                    <a href="https://www.facebook.com/profile.php?id=61576777852955">
                        GreenCare Landscaping and Paving
                    </a>
                </blockquote>
            </div>
        </>
    );
}
