import { useSpring, animated } from 'react-spring';
import css from './photo.scss';
import cc from 'classcat';

const Photos = React.memo(({ photo = {}, lightBox, filterImg }) => {
    const { id, workedon } = photo;
    const worked = workedon.toLowerCase();
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
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
        <animated.div
            style={props}
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
        </animated.div>
    );
});

export default Photos;
