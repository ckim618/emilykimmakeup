import css from './contact.scss';

const Contact = ({ phone, email }) => {
    const emailRef = `mailTo:${email}`;
    const telRef = `tel:${phone}`;
    return (
        <section id="contact" className={css.container}>
            <h2 className={css.header}>For Prices and Inquiries</h2>
            <span>
                Email:{' '}
                <a href={emailRef} className={css.info}>
                    {email}
                </a>
            </span>
            <span>
                Phone:{' '}
                <a href={telRef} className={css.info}>
                    {phone}
                </a>
            </span>
        </section>
    );
};

export default Contact;
