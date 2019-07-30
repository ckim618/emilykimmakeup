import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import css from './photogallery.scss';
import uniqid from 'uniqid';

import Photos from '../Photos';

const PhotoGallery = ({ photoGallery }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = id => {
        setCurrentImage(id);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const photoArr = photoGallery.map((photo, i) => {
        const {
            fields: {
                image: {
                    fields: {
                        file: { url = '' },
                    },
                },
                imageSize = '',
                workedOn = '',
            },
        } = photo;

        return {
            src: url,
            width: imageSize === 'Tall' ? 3 : imageSize === 'Wide' ? 4 : 1,
            height: imageSize === 'Tall' ? 4 : imageSize === 'Wide' ? 3 : 1,
            workedon: workedOn,
            key: uniqid(),
            id: i,
        };
    });

    const photoRenderer = useCallback(({ photo }) => {
        return <Photos key={uniqid()} photo={photo} lightBox={openLightbox} />;
    }, []);

    return (
        <section id="work" className={css.container}>
            <Gallery photos={photoArr} renderImage={photoRenderer} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photoArr.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </section>
    );
};

export default PhotoGallery;
