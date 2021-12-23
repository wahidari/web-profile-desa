import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import PembangunanCard from "../components/PembangunanCard";

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