import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import PembangunanCard from "../components/PembangunanCard";
import { HiOutlineLocationMarker, HiOutlineCreditCard } from "react-icons/hi";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

const title = "Pembangunan Desa";

export default function Pembangunan({ covid }) {
    let [namaDesa, setNamaDesa] = useState("Alang Alang");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
    })

    // const dataGender = populateData(gender);
    // const [totalKonfirmasi, totalAktif, totalSembuh, totalMeninggal] = getTotalData(covid);
    // console.log(covid.dataKecamatan);

    return (
        <>
            <style jsx>
                {`
                .shadow-custom {
                    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
                }
                /* Very Small devices (Max width 575.98px) */
                @media (max-width: 575.98px) {
                    .image-container {
                        width: 100% !important;
                        height: 250px !important;
                    }
                }
                /* Small devices (landscape phones, 576px and up) */
                @media (min-width: 576px) and (max-width: 767.98px) {
                    .image-container {
                        width: 100% !important;
                        height: 300px !important;
                    }
                }
                /* Medium devices (tablets, 768px and up) */
                @media (min-width: 768px) and (max-width: 991.98px) {
                    .image-container {
                        width: 270px !important;
                        height: 230px !important;
                    }
                }
                /* Large devices (desktops, 992px and up) */
                @media (min-width: 992px) and (max-width: 1199.98px) {
                    .image-container {
                        width: 300px !important;
                        height: 230px !important;
                    }
                }
                .image-container {
                    width: 350px;
                    height: 250px;
                    position: relative;
                }
                .image-container .image {
                    width: 100%;
                    height: 100%;
                }
                i {
                    font-size: 20px;
                }
                .td-fixed {
                    width: 60px;
                }
                .td-fixed-10 {
                    width: 10px;
                }
            `}
            </style>

            <Head>
                <title>{title}</title>
                <meta name="description" content={`Website Desa ${namaDesa}`} />
                <link rel="icon" href="/favicon.ico" />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_API_URL} />
                <meta property="og:title" content={`Situs Resmi Desa ${namaDesa}`} />
                <meta property="og:description" content={`Website Resmi Desa ${namaDesa}. Media komunikasi dan transparansi Pemerintah Desa`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/metalogo.jpg`}></meta>
            </Head>

            <NavBarTop />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Pembangunan" currentPage="Pembangunan" />
                </div>

                <div className="container my-5">
                    <div className="row g-4">
                        <PembangunanCard />
                    </div>
                </div>

                <div className="container my-5">
                    <div className="card px-md-3 py-md-3">
                        <div className="row">
                            <div className="col-md-5 col-lg-4 m-auto">
                                <div className="image-container">
                                    <Image
                                        src="https://images.unsplash.com/photo-1638091986258-0c285a62defd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                                        alt=""
                                        layout="fill"
                                        className="img-fluid rounded image">
                                    </Image>
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-8">
                                <div className="card-body">
                                    <h5 className="card-title">Pembangunan Jembatan Penghubung Persawahan</h5>
                                    <p className="card-text text-dark-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex">
                                        <p className="text-dark-secondary fw-600 me-4">
                                            <i className="me-2"><HiOutlineLocationMarker /></i>
                                            RT 01
                                        </p>
                                        <p className="text-dark-secondary fw-600">
                                            <i className="me-2"><HiOutlineCreditCard /></i>
                                            Rp. 119.655
                                        </p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar w-25 bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                    <p className="card-text mt-4"><small className="text-muted">Update tanggal 10 Jan 2022</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="card px-md-3 py-md-3">
                        <div className="row">
                            <div className="col-md-5 col-lg-4 m-auto">
                                <Swiper className="swiper-pembangunan"
                                    spaceBetween={24}
                                    autoplay={{
                                        "delay": 4000,
                                        "disableOnInteraction": false
                                    }}
                                    navigation={true}
                                    loop={true}
                                >
                                    <SwiperSlide >
                                        <div className="image-container">
                                            <Image
                                                src="https://images.unsplash.com/photo-1638091986258-0c285a62defd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                                                alt=""
                                                layout="fill"
                                                className="img-fluid rounded image">
                                            </Image>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <div className="image-container">
                                            <Image
                                                src="https://images.unsplash.com/photo-1638201977889-7cf4026c7960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                                                alt=""
                                                layout="fill"
                                                className="img-fluid rounded image">
                                            </Image>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                            <div className="col-md-7 col-lg-8">
                                <div className="card-body">
                                    <h5 className="card-title">Pembangunan Jembatan Penghubung Persawahan</h5>
                                    <p className="card-text text-dark-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex">
                                        <p className="text-dark-secondary fw-600 me-4">
                                            <i className="me-2"><HiOutlineLocationMarker /></i>
                                            RT 01
                                        </p>
                                        <p className="text-dark-secondary fw-600">
                                            <i className="me-2"><HiOutlineCreditCard /></i>
                                            Rp. 119.655
                                        </p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar w-25 bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                    <p className="card-text mt-4"><small className="text-muted">Update tanggal 10 Jan 2022</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="card px-md-3 py-md-3">
                        <div className="row">
                            <div className="col-md-5 col-lg-4 m-auto">
                                <div className="image-container">
                                    <Image
                                        src="https://images.unsplash.com/photo-1638091986258-0c285a62defd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                                        alt=""
                                        layout="fill"
                                        className="img-fluid rounded image">
                                    </Image>
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-8">
                                <div className="card-body">
                                    <h5 className="card-title">Pembangunan MCK dan Tempat Wudhu Masjid</h5>
                                    <p className="card-text text-dark-secondary  fs-15">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <table className="table table-borderless fs-15 fw-500">
                                        <tbody>
                                            <tr>
                                                <td className="ps-0 py-1 td-fixed">Lokasi</td>
                                                <td className="py-1 td-fixed-10">:</td>
                                                <td className="py-1">RT 01</td>
                                            </tr>
                                            <tr>
                                                <td className="ps-0 py-1 td-fixed">Dana</td>
                                                <td className="py-1 td-fixed-10">:</td>
                                                <td className="py-1">RT 01</td>
                                            </tr>
                                            <tr>
                                                <td className="ps-0 py-1 td-fixed">Progress</td>
                                                <td className="py-1 td-fixed-10">:</td>
                                                <td className="py-1">
                                                    <div className="progress mt-1">
                                                        <div className="progress-bar w-50 bg-warning" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="card-text mt-1 mb-0"><small className="text-muted">Update tanggal 10 Jan 2022</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="card border-0 shadow-custom px-3 pt-3">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Program</th>
                                        <th>Lokasi</th>
                                        <th>Anggaran</th>
                                        <th>Sumber Dana</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Pembangunan Jembatan Penghubung Persawahan</td>
                                        <td>RT 01</td>
                                        <td>Rp. 119.655,-</td>
                                        <td>Dana Desa</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Pembangunan MCK dan Tempat Wudhu Masjid</td>
                                        <td>RT 02</td>
                                        <td>Rp. 219.655,-</td>
                                        <td>Dana Desa</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Peningkatan Jalan Usaha Tani</td>
                                        <td>RT 03</td>
                                        <td>Rp. 319.655,-</td>
                                        <td>Dana Desa</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Pembangunan Gorong-Gorong</td>
                                        <td>RT 04</td>
                                        <td>Rp. 419.655,-</td>
                                        <td>Dana Desa</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />

            <BackToTop />
        </>
    );
};

// This gets called on every request to this page
// export async function getServerSideProps() {
//     const getDataCovid = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/covid`);
//     const covid = await getDataCovid.json();
//     return {
//         props: { covid }, // will be passed to the page component as props
//     };
// };

// Count each row value for total row
// function getTotalData(param) {
//     const konfirmasi = [], aktif = [], sembuh = [], meninggal = [];
//     let totalKonfirmasi = 0, totalAktif = 0, totalSembuh = 0, totalMeninggal = 0;
//     param.dataKecamatan.map(item =>
//         konfirmasi.push(item.konfirmasi)
//     );
//     param.dataKecamatan.map(item =>
//         aktif.push(item.aktif)
//     );
//     param.dataKecamatan.map(item =>
//         sembuh.push(item.sembuh)
//     );
//     param.dataKecamatan.map(item =>
//         meninggal.push(item.meninggal)
//     );

//     for (let index = 0; index < konfirmasi.length; index++) {
//         totalKonfirmasi += parseInt(konfirmasi[index]);
//         totalAktif += parseInt(aktif[index]);
//         totalSembuh += parseInt(sembuh[index]);
//         totalMeninggal += parseInt(meninggal[index]);
//     }

//     return [totalKonfirmasi, totalAktif, totalSembuh, totalMeninggal];
// }