import css from './photo.scss';

const Photos = React.memo(({ photo = {}, lightBox }) => {
    const { id, workedon } = photo;
    return (
        <div
            className={css.photo}
            {...photo}
            onClick={() => {
                lightBox(id);
            }}
        >
            <img loading="lazy" {...photo} />
            <div className={css.caption}>
                <h3 className={css.title}>{workedon}</h3>
            </div>
        </div>
    );
});

export default Photos;
