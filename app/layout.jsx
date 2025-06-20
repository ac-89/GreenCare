import '../styles/custom-style.css';
import '../styles/app.css';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />

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
