import NetlifyForm from 'react-netlify-form';
import css from './contactform.scss';
import cc from 'classcat';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            formSuccess: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        this.setState({
            name: '',
            email: '',
            phone: '',
            message: '',
            formSuccess: true,
        });
        setTimeout(() => {
            this.setState({
                formSuccess: false,
            });
        }, 8000);
    };

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { name, email, phone, message } = this.state;
        const formBtnClasses = cc([
            css.message,
            {
                [css.active]: this.state.formSuccess,
            },
        ]);

        return (
            <NetlifyForm name="contact-form" onSubmit={this.handleSubmit}>
                {({ loading, error, success }) => (
                    <div>
                        {!loading && (
                            <div className={css.form}>
                                <div className={css.inner}>
                                    <input
                                        type="hidden"
                                        name="form-name"
                                        value="contact-form"
                                    />
                                    <p className={css.inputContainer}>
                                        <input
                                            className={css.input}
                                            type="text"
                                            name="name"
                                            value={name}
                                            placeholder="Name"
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </p>
                                    <p className={css.inputContainer}>
                                        <input
                                            className={css.input}
                                            type="email"
                                            name="email"
                                            value={email}
                                            required
                                            onChange={this.handleChange}
                                            placeholder="Email"
                                        />
                                    </p>
                                    <p className={css.inputContainer}>
                                        <input
                                            className={css.input}
                                            type="tel"
                                            name="phone"
                                            required
                                            value={phone}
                                            onChange={this.handleChange}
                                            placeholder="Phone Number"
                                        />
                                    </p>
                                    <p className={css.inputContainer}>
                                        <textarea
                                            className={css.input}
                                            rows="5"
                                            name="message"
                                            value={message}
                                            onChange={this.handleChange}
                                            placeholder="Message"
                                        />
                                    </p>
                                    <button
                                        on
                                        className={css.btn}
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                    {loading && (
                                        <div className={formBtnClasses}>
                                            Loading...
                                        </div>
                                    )}
                                    {error && (
                                        <div className={formBtnClasses}>
                                            Your information was not sent.
                                            Please try again later.
                                        </div>
                                    )}
                                    {success && (
                                        <div className={formBtnClasses}>
                                            Thank you for contacting us!
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </NetlifyForm>
            // <form
            //     name="contact-form,"
            //     method="post"
            //     data-netlify-="true"
            //     netlify-honeypot="bot-field"
            //     data-netlify-honeypot="bot-field"
            //     onSubmit={this.handleSubmit}
            //     className={css.form}
            // >
            //     <input type="hidden" name="form-name" value="contact" />
            //     <div className={css.inner}>
            //         <p className={css.inputContainer}>
            //             <input
            //                 className={css.input}
            //                 type="text"
            //                 name="name"
            //                 value={name}
            //                 required
            //                 onChange={this.handleChange}
            //                 placeholder="Name"
            //             />
            //         </p>
            //         <p className={css.inputContainer}>
            //             <input
            //                 className={css.input}
            //                 type="email"
            //                 name="email"
            //                 value={email}
            //                 required
            //                 onChange={this.handleChange}
            //                 placeholder="Email"
            //             />
            //         </p>
            //         <p className={css.inputContainer}>
            //             <input
            //                 className={css.input}
            //                 type="tel"
            //                 name="phone"
            //                 required
            //                 value={phone}
            //                 onChange={this.handleChange}
            //                 placeholder="Phone Number"
            //             />
            //         </p>
            //         <p className={css.inputContainer}>
            //             <textarea
            //                 className={css.input}
            //                 rows="5"
            //                 name="message"
            //                 value={message}
            //                 onChange={this.handleChange}
            //                 placeholder="Message"
            //             />
            //         </p>
            //         <button className={css.btn} type="submit">
            //             Send
            //         </button>
            //         <div className={formBtnClasses}>
            //             Thank you! I'll contact you as soon as possible!
            //         </div>
            //     </div>
            // </form>
        );
    }
}

export default ContactForm;
