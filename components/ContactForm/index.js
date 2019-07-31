import NetlifyForm from 'react-netlify-form';
import css from './contactform.scss';
import cc from 'classcat';

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

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
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact-form', ...this.state }),
        })
            .then(() => {
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
            })
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, phone, message } = this.state;
        const formBtnClasses = cc([
            css.success,
            {
                [css.active]: this.state.formSuccess,
            },
        ]);

        return (
            <NetlifyForm name="contact-form">
                {({ loading, error, success }) => (
                    <div>
                        {loading && <div>Loading...</div>}
                        {error && (
                            <div>
                                Your information was not sent. Please try again
                                later.
                            </div>
                        )}
                        {success && <div>Thank you for contacting us!</div>}
                        {!loading && !success && (
                            <div className={css.form}>
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact-form"
                                />
                                <input
                                    className={css.input}
                                    placeholder="Name"
                                    onChange={this.handleChange}
                                    value={name}
                                    type="text"
                                    name="name"
                                    required
                                />
                                <textarea name="Message" required />
                                <button>Submit</button>
                            </div>
                        )}
                    </div>
                )}
            </NetlifyForm>
            // <form
            //     name="contact-form"
            //     action="post"
            //     method="POST"
            //     data-netlify-="true"
            //     netlify-honeypot="bot-field"
            //     data-netlify-honeypot="bot-field"
            //     onSubmit={this.handleSubmit}
            //     className={css.form}
            // >
            //     <input type="hidden" name="form-name" value="contact-form" />{' '}
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
