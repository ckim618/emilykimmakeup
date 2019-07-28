import css from './footer.scss';

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.inner}>
                <div className={css.row}>
                    <ul className={css.socialInner}>
                        <li className={css.social}>
                            <a
                                href="https://www.instagram.com/emilykimmakeup/"
                                target="_blank"
                            >
                                instagram
                            </a>
                        </li>
                        <li className={css.social}>
                            <a
                                href="https://www.facebook.com/Emily-Kim-Makeup-1888076824544832/"
                                target="_blank"
                            >
                                facebook
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={css.row}>
                    <p className={css.copyright}>
                        &copy; 2019 Emily Kim Makeup
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
