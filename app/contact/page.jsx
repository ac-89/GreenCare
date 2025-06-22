import ContactForm from 'components/contact-form';
import CallToAction from 'components/call-to-action';
import ContactPageHeader from 'components/contact-page-header';
export default function Contact() {
    return (
        <>
            <ContactPageHeader />
            <ContactForm />
            <CallToAction />
        </>
    );
}
