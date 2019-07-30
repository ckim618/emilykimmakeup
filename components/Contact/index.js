import css from './contact.scss';

const Contact = ({ phone, email }) => {
    const telRef = `tel:${phone}`;
    return (
        <section id="contact" className={css.container}>
            <h2 className={css.header}>For Prices and Inquiries</h2>
            <div className={css.infoContainer}>
                Phone:
                <a href={telRef} className={css.info}>
                    {phone}
                </a>
            </div>
        </section>
    );
};

export default Contact;
