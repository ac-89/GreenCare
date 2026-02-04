import '../styles/custom-style.css';
import '../styles/app.css';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Landscaping, Driveways & Garden Services in Dublin | Expert Outdoor Solutions'
    },
    verification: {
        google: '27nSiITNyT23p8flnhHX-JGgI7KOOknexF2yWW0qXoQ'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />

                <meta
                    name="description"
                    content="Professional garden design, landscaping, driveways, and outdoor maintenance services in Dublin. From patios to tree surgery, we transform outdoor spaces with expert care and quality materials. Get in touch for a free quote today."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <script
                    async
                    defer
                    crossorigin="anonymous"
                    src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v23.0"
                ></script>
            </head>
            <body className="bg-blue-900 text-white antialiased">
                <div className="flex min-h-screen flex-col px-6 sm:px-12">
                    <div className="mx-auto flex w-full max-w-5xl grow flex-col">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
