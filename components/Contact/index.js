import css from './contact.scss';

const Contact = ({ phone, email }) => {
    const telRef = `tel:${phone}`;
    const emailRef = `mailto:${email}`;
    return (
        <section id="contact" className={css.container}>
            <h2 className={css.header}>For Prices and Inquiries</h2>
            <div className={css.infoContainer}>
                Phone:
                <a href={telRef} className={css.info}>
                    {phone}
                </a>
            </div>
            <div className={css.infoContainer}>
                Email:
                <a href={emailRef} className={css.info}>
                    {email}
                </a>
            </div>
        </section>
    );
};

export default Contact;
