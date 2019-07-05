import css from './footer.scss';

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.inner}>
                <div className={css.row}>
                    <ul className={css.socialInner}>
                        <li className={css.social}>instagram</li>
                        <li className={css.social}>facebook</li>
                    </ul>
                </div>
                <div className={css.row}>
                    <p className={css.copyright}>&copy; 2019 Emily Kim Makeup</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;