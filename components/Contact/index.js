import css from './contact.scss';

const Contact = ({ phone, email }) => {
    const emailRef = `mailTo:${email}`;
    const telRef = `tel:${phone}`;
    return (
        <section id="contact" className={css.container}>
            <h2 className={css.header}>For Prices and Inquiries</h2>
            <a href={emailRef} className={css.info}>Email: {email}</a>
            <a href={telRef} className={css.info}>Phone: {phone}</a>
        </section>
    );
}

export default Contact;