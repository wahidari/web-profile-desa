import { useEffect } from "react";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import imgHero from "../public/hero.webp";
import imgHeroA from "../public/hero1.jpg";
import imgHeroB from "../public/hero2.jpg";

export default function CarouselHome() {
    let [namaDesa, setNamaDesa] = useState("Alang Alang");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
    });

    return (
        <>
            <style jsx>{`
                .carousel-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 98%;
                    background-color: rgba(0, 0, 0, 0.4);
                }
                .carousel-caption {
                    bottom: 17em;
                }
                .carousel-text {
                    font-weight: 400;
                    font-size: 20px;
                }
                @media (max-width: 575.98px) {
                    .carousel-caption h1 {
                        font-size: 24px !important;
                    }
                    .carousel-caption {
                        bottom: 5.5em !important;
                    }
                    .carousel-text {
                        font-size: 16px !important;
                    }
                }
                @media (min-width: 576px) and (max-width: 767.98px) {
                    .carousel-caption h1 {
                        font-size: 32px !important;
                    }
                    .carousel-caption {
                        bottom: 8em !important;
                    }
                }
                @media (min-width: 768px) and (max-width: 991.98px) {
                    .carousel-caption {
                        bottom: 11em !important;
                    }
                }
                @media (min-width: 992px) and (max-width: 1199.98px) {
                    .carousel-caption {
                        bottom: 12em !important;
                    }
                }
                @media (min-width: 1600px) {
                    .carousel-caption {
                        bottom: 24em !important;
                    }
                }
            `}</style>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                {/* <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image
                            alt="Carousel"
                            src={imgHero}
                            width="1920"
                            height="960"
                            className="d-block w-100 carousel-zoom"
                        />
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption">
                            <h1>Selamat Datang di Web Desa {namaDesa}</h1>
                            <p className="carousel-text">Pusat Layanan Informasi Resmi Desa</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image
                            alt="Carousel"
                            src={imgHeroA}
                            width="1920"
                            height="960"
                            className="d-block w-100 carousel-zoom"
                        />
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption">
                            <h1>Desa Rukun & Gotong Royong</h1>
                            <p className="carousel-text">Website Desa Kreatif dan Inovatif</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image
                            alt="Carousel"
                            src={imgHeroB}
                            width="1920"
                            height="960"
                            className="d-block w-100 carousel-zoom"
                        />
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption">
                            <h1>Desa Asri & Bahagia</h1>
                            <p className="carousel-text">Desa Asri, Damai dan Bahagia</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}