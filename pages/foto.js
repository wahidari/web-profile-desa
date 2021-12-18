import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import React, { useState, useCallback } from "react";
import BackToTop from "../components/BackToTop";

const title = "Foto";

export default function Foto({ photos }) {
    // console.log(photos)

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

    const lightboxStyles = {
        header: (base, state) => {
            const opacity = 1;
            const transform = "translateY(10px)";
            const top = "-10";
            return { ...base, opacity, transform, top };
        },
        navigation: (base, state) => {
            const opacity = 1;
            const background = "rgba(0, 0, 0, 0.8)";
            return { ...base, opacity, background };
        },
        navigationPrev: (base, state) => {
            const background = "rgba(0, 0, 0, 0.5) !important";
            return { ...base, background };
        },
        navigationNext: (base, state) => {
            const background = "rgba(0, 0, 0, 0.5) !important";
            return { ...base, background };
        },
        footer: (base, state) => {
            const opacity = 1;
            const transform = "translateY(-10px)";
            const bottom = "-10";
            return { ...base, opacity, transform, bottom };
        }
    }

    return (
        <>
            <style jsx>
                {`
            `}
            </style>

            <Head>
                <title>{title}</title>
                <meta name="description" content="Next Bootstrap" />
                <link rel="icon" href="/favicon.ico" />

            </Head>

            <NavBarTop />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Galeri" currentPage="Foto" />
                </div>

                <div className="container my-5">
                    <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel 
                                    styles={lightboxStyles}
                                    showNavigationOnTouchDevice={true}
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>

            </main>

            <Footer />

            <BackToTop />
        </>
    );
};

// This gets called on every request to this page
export async function getServerSideProps() {
    const getDataPhotos = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/photo`);
    const photos = await getDataPhotos.json();
    // console.log(photos)
    return {
        props: { photos }, // will be passed to the page component as props
    };
};