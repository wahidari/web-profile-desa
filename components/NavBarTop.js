import Image from "next/image"
import Link from "next/link"
import imgLogo from "../public/logo.png"
import ActiveLink from './ActiveLink'
import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaRegEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaBars } from "react-icons/fa";
import dynamic from "next/dynamic";
const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
    ssr: false,
});

export default function NavBarTop() {
    let [namaDesa, setNamaDesa] = useState("Alang Alang");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
    });

    const [isFixedNavbar, setFixedNavbar] = useState("false");

    useEffect(() => {
        setFixedNavbar(false);
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 35) {
                setFixedNavbar(true);
            } else {
                setFixedNavbar(false);
            }
        });
    }, []);

    return (
        <>
            <style jsx>
                {`
                    .nav-item a.active {
                        color: #0d6efd !important;
                    }
                    .nav-item a:hover {
                        color: var(--text-color-secondary) !important;
                    }
                    .text-14 {
                        font-size: 14px !important;
                    }
                    .text-15 {
                        font-size: 15px !important;
                    }
                    .dropdown-menu {
                        min-width: 13rem; 
                    }
                    .top-of-navbar a:hover {
                        color: #0d6efd !important;
                        transition: all 1s ease;
                    }
                    .navbar {
                        padding: 2.5px 0px;
                    }
                    .fw-600 {
                        font-weight: 600;
                    }
                    .icon-toggle {
                        color: var(--text-color-tertiary) !important;
                    }
                    .navbar-toggler {
                        border-color: #ddddddbd;
                    }
                    .nav-link-focus:focus {
                        border-radius: 8px;
                        background-color: var(--focus-color-primary) !important;
                    }
                `}
            </style>
            <div className="d-none d-md-block bg-color-secondary py-2 top-of-navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-8">
                            <div className="">
                                <a href="https://wa.me/68123456789" rel="noreferrer" target="_blank" className="text-decoration-none text-14 text-color-tertiary">
                                    <i className="me-2"><FaPhoneAlt /></i>
                                    68123456789
                                </a>
                                <span className="mx-2 text-black-50">|</span>
                                <a href="mailto:admin@gmail.com" rel="noreferrer" target="_blank" className="text-decoration-none text-14 text-color-tertiary">
                                    <i className="me-2"><FaRegEnvelope /></i>
                                    admin@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-4">
                            <div className="float-end">
                                <a href="https://web.facebook.com/" className="mx-2 text-color-tertiary" aria-label="Facebook" rel="noreferrer" target="_blank">
                                    <i className=""><FaFacebook /></i>
                                </a>
                                <a href="https://twitter.com/" className="mx-2 text-color-tertiary" aria-label="Twitter" rel="noreferrer" target="_blank">
                                    <i className=""><FaTwitter /></i>
                                </a>
                                <a href="https://www.youtube.com/" className="mx-2 text-color-tertiary" aria-label="Youtube" rel="noreferrer" target="_blank">
                                    <i className=""><FaYoutube /></i>
                                </a>
                                <a href="https://www.instagram.com/" className="mx-2 text-color-tertiary" aria-label="Instagram" rel="noreferrer" target="_blank">
                                    <i className=""><FaInstagram /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={`navbar navbar-expand-xl navbar-light bg-color-primary border-bottom-primary shadow-sm ${isFixedNavbar ? "fixed-top" : ""}`}>
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand d-flex align-items-center">
                            <Image
                                alt="logo desa"
                                src={imgLogo}
                                height="50"
                                width="50"
                                className="img-fluid"
                            />{" "}
                            <div>
                                <h5 className="ms-1 my-0 fw-600 text-color-primary">Desa {namaDesa}</h5>
                                <p className="ms-1 mb-0 text-15 text-color-tertiary">Kabupaten Bangkalan</p>
                            </div>
                        </a>
                    </Link>

                    <div className="nav-link ms-auto order-0 order-xl-1" aria-current="page"><ThemeToggle /></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="icon-toggle"><FaBars /></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarToggler">
                        {/* <hr className="d-lg-none mt-2 mb-0"></hr> */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mt-2 mt-xl-0 ms-lg-1">
                                <ActiveLink activeClassName="active" href="/">
                                    <a className="nav-link text-color-tertiary">Home</a>
                                </ActiveLink>
                            </li>
                            {/* <hr className="d-lg-none my-1"></hr> */}
                            <li className="nav-item dropdown ms-lg-1">
                                <a className="nav-link dropdown-toggle text-color-tertiary" href="#" id="profilDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profil
                                </a>
                                <ul className="dropdown-menu bg-color-primary" aria-labelledby="profilDropdown">
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/sejarah">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Sejarah</a>
                                        </ActiveLink>
                                    </li>
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/visimisi">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Visi Misi</a>
                                        </ActiveLink>
                                    </li>
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/struktur">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Struktur Organisasi</a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown ms-lg-1">
                                <a className="nav-link dropdown-toggle text-color-tertiary" href="#" id="informasiDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Informasi
                                </a>
                                <ul className="dropdown-menu bg-color-primary" aria-labelledby="informasiDropdown">
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/berita">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Berita</a>
                                        </ActiveLink>
                                    </li>
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/agenda">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Agenda</a>
                                        </ActiveLink>
                                    </li>
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/produkhukum">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Produk Hukum</a>
                                        </ActiveLink>
                                    </li>
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/informasipublik">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Informasi Publik</a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown ms-lg-1">
                                <a className="nav-link dropdown-toggle text-color-tertiary" href="#" id="chartDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Demografis
                                </a>
                                <ul className="dropdown-menu bg-color-primary" aria-labelledby="chartDropdown">
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/administrasi">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Administrasi</a>
                                        </ActiveLink>
                                    </li>
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/penduduk">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Penduduk</a>
                                        </ActiveLink>
                                    </li>
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/wilayah">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Wilayah</a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown ms-lg-1">
                                <a className="nav-link dropdown-toggle text-color-tertiary" href="#" id="galeriDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Media
                                </a>
                                <ul className="dropdown-menu bg-color-primary" aria-labelledby="galeriDropdown">
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/foto">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Galeri Foto</a>
                                        </ActiveLink>
                                    </li>
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/video">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Galeri Video</a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown ms-lg-1">
                                <a className="nav-link dropdown-toggle text-color-tertiary" href="#" id="publikasiDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Publikasi
                                </a>
                                <ul className="dropdown-menu bg-color-primary" aria-labelledby="publikasiDropdown">
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/pembangunan">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Pembangunan Desa</a>
                                        </ActiveLink>
                                    </li>
                                    <li className="me-2">
                                        <ActiveLink activeClassName="active" href="/danadesa">
                                            <a className="nav-link nav-link-focus text-color-tertiary ms-2 ps-2 ms-md-2">Dana Desa</a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item ms-lg-1">
                                <ActiveLink activeClassName="active" href="/lapak">
                                    <a className="nav-link text-color-tertiary">Lapak</a>
                                </ActiveLink>
                            </li>
                            <li className="nav-item ms-lg-1">
                                <ActiveLink activeClassName="active" href="/covid">
                                    <a className="nav-link text-color-tertiary">Covid</a>
                                </ActiveLink>
                            </li>
                            {/* <li className="nav-item ms-lg-1">
                                <a className="nav-link" aria-current="page"><ThemeToggle /></a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}