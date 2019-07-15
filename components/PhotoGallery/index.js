import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import NoSSR from 'react-no-ssr';
import css from './photogallery.scss';

import Photos from '../Photos';

const PhotoGallery = ({ photoGallery }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback(event => {
        console.log(event.target);
        setCurrentImage(event.target.id);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const photoArr = photoGallery.map((photo, i) => {
        const {
            fields: {
                image: {
                    fields: {
                        file: { url },
                    },
                },
                imageSize,
                workedOn,
            },
        } = photo;

        return {
            src: url,
            width: imageSize === 'Tall' ? 3 : imageSize === 'Wide' ? 4 : 1,
            height: imageSize === 'Tall' ? 4 : imageSize === 'Wide' ? 3 : 1,
            workedon: workedOn,
            key: photo.sys.id,
            id: i,
        };
    });

    const photoRenderer = useCallback(({ photo }) => {
        const { workedon } = photo;
        return (
            <Photos photo={photo} caption={workedon} lightBox={openLightbox} />
        );
    });

    console.log(photoArr);
    return (
        <section id="work" className={css.container}>
            <NoSSR>
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
            </NoSSR>
        </section>
    );
};

export default PhotoGallery;
