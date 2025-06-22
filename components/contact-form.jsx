import FbWidget from './fb-widget';

export default function ContactForm() {
    return (
        <section className="our-clients-free-quotes">
            <div className="row">
                <div className="small-12 large-8 columns">
                    <div className="wd-title-section_l">
                        <h2>Get a Free Quote</h2>
                        <h5>
                            <span className="wd-title-section_s">Fill out the form below to get started.</span>
                        </h5>
                    </div>
                    <form className="row full-width" netlify>
                        <div className="small-12 large-6 columns">
                            <span className="wpcf7-form-control-wrap your-name">
                                <input
                                    type="text"
                                    name="your-name"
                                    defaultValue=""
                                    size="40"
                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Your Name"
                                />
                            </span>
                        </div>
                        <div className="small-12 large-6 columns">
                            <span className="wpcf7-form-control-wrap your-email">
                                <input
                                    type="tel"
                                    name="your-phone"
                                    defaultValue=""
                                    size="40"
                                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Your Phone Number"
                                />
                            </span>
                        </div>
                        <div className="small-12 large-12 columns">
                            <span className="wpcf7-form-control-wrap message">
                                <textarea
                                    name="message"
                                    cols="10"
                                    rows="8"
                                    className="wpcf7-form-control wpcf7-textarea"
                                    aria-invalid="false"
                                    placeholder="Your message"
                                ></textarea>
                            </span>
                        </div>
                        <div className="small-12 large-12 columns">
                            <input
                                type="submit"
                                value="Submit"
                                className="wpcf7-form-control wpcf7-submit button alert small radius"
                            />
                            <span className="ajax-loader"></span>
                        </div>
                    </form>
                </div>
                <FbWidget />
            </div>
        </section>
    );
}
