export default function CallToAction() {
    return (
        <section className="call-to-action-wrapper">
            <div className="row">
                <div className="small-12 large-12 columns cta-container text-center">
                    <div className="cta">
                        <h4 className="call-to-action-heading">Call us.</h4>
                        <a href="tel:0852439522" className="call-to-action-phone">
                            {' '}
                            085 243 9522
                        </a>
                    </div>
                    <div className="cta">
                        <h4 className="call-to-action-heading">Email us.</h4>
                        <a href="mailto:greencarelandscapingandpaving@gmail.com" className="call-to-action-email">
                            {' '}
                            greencarelandscapingand
                            <br />
                            paving@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
// This component renders a call to action section with a phone number and a message.
// It is styled to be centered and uses inline styles for text color and padding.
