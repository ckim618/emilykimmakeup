import css from './hero.scss';

const Hero = ({ img, header, subHeader }) => {
    const heroBg = {
        backgroundImage: `url(${img})`,
    }

    return (
        <section className={css.hero} style={heroBg}>
            <div className={css.inner}>
                <h1 className={css.header}>{header}</h1>
                <h5 className={css.subHeader}>{subHeader}</h5>
            </div>
        </section>
    );
}

export default Hero;