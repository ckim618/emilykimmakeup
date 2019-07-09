import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import NoSSR from 'react-no-ssr';
import css from './photogallery.scss';

const PhotoGallery = ({ photoGallery }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const photoArr = photoGallery.map(photo => {
        const {
            fields: {
                image: {
                    fields: {
                        file: {url},
                    },
                },
                width,
                height,
                workedOn
            }
        } = photo;

        return (
            {
                src: url,
                width: width,
                height: height,
                workedon: workedOn,
                id: photo.sys.id
            }   
        )
    });

    return (
        <section id="work" className={css.container}>
            <NoSSR>
                <Gallery photos={photoArr} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photoArr.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.workedon
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </NoSSR>
        </section>
    );
}

export default PhotoGallery;