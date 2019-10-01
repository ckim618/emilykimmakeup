import Fade from 'react-reveal/Fade';
import css from './photo.scss';
import cc from 'classcat';

const Photos = React.memo(({ photo = {}, lightBox, filterImg }) => {
    const { id, workedon } = photo;
    const worked = workedon.toLowerCase();
    const classes = cc([
        css.photo,
        {
            [css.show]:
                worked == filterImg ||
                worked == 'makeup & hair' ||
                filterImg == '' ||
                filterImg == 'all',
        },
    ]);

    return (
        <Fade delay={parseInt(`${id}9`)}>
            <div
                className={classes}
                {...photo}
                onClick={() => {
                    lightBox(id);
                }}
            >
                <img loading="lazy" {...photo} />
                <div className={css.caption}>
                    <h3 className={css.title}>{worked}</h3>
                </div>
            </div>
        </Fade>
    );
});

export default Photos;
