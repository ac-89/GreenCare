import Link from 'next/link';
import { Card } from 'components/card';
import { getNetlifyContext } from 'utils';
import FlexSlider from 'components/flex-slider';
import HomeServices from 'components/home-services';
import CallToAction from 'components/call-to-action';
import ContactForm from 'components/contact-form';

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <FlexSlider />
                <HomeServices />
                <CallToAction />
                <ContactForm />
            </section>
        </div>
    );
}
