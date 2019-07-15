import css from './photo.scss';

const Photos = ({ photo, caption, lightBox }) => {
    console.log(caption);
    return (
        <div className={css.photo} {...photo} onClick={lightBox}>
            <img {...photo} />
            <div className={css.caption}>
                <h3 className={css.title}>{caption}</h3>
            </div>
        </div>
    );
};

export default Photos;
