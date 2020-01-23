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
        <div
            className={classes}
            {...photo}
            onClick={() => {
                lightBox(id);
            }}
        >
            <img {...photo} />
            <div className={css.caption}>
                <h3 className={css.title}>{worked}</h3>
            </div>
        </div>
    );
});

export default Photos;
