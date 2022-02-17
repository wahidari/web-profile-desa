import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";

const title = "Wilayah Administrasi";

export default function InformasiPublik({ covid }) {
    let [namaDesa, setNamaDesa] = useState("Alang Alang");
    let [namaKecamatan, setNamaKecamatan] = useState("Tragah");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
        namaKecamatan = localStorage.getItem("namaKecamatan");
        setNamaKecamatan(namaKecamatan);
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
                <div className="bg-color-primary">
                    <Breadcrumb pageName="Administrasi" currentPage="Administrasi" />
                </div>

                <div className="container my-5">
                    <div className="card bg-card-primary border-0 shadow-custom px-3 pt-3">
                        <h4 className="text-color-primary">Wilayah Administrasi</h4>
                        <hr className="mb-4" />
                        <h5 className="text-color-primary">Topografi Desa</h5>
                        <p className="text-color-secondary">
                            Luas wilayah di Desa {namaDesa} ± 965 Ha, dengan topografi
                            bergelombang, peruntukan lahan sebagian besar untuk lahan perkebunan
                            Masyarakat, kemudian untuk pemukiman, sarana umum, pemerintahan dan
                            lainnya. Iklim Desa {namaDesa} sebagai mana desa-desa lainnya di wilayah
                            Indonesia yaitu iklim tropis (musim penghujan dan musim kemarau), hal
                            tersebut mempunyai pengaruh langsung terhadap pala tanam terhadap lahan
                            pertanian yang ada di Desa {namaDesa} Kecamatan {namaKecamatan}.
                        </p>
                        <h5 className="mt-3 text-color-primary">Detail Wilayah</h5>
                        <div className="table-responsive col-lg-5">
                            <table className="table text-color-secondary table-borderless">
                                <tbody>
                                    <tr>
                                        <td>Luas Wilayah</td>
                                        <td>: 1.056 ha</td>
                                    </tr>
                                    <tr>
                                        <td>Batas Wilayah</td>
                                    </tr>
                                    <tr>
                                        <td>Utara</td>
                                        <td>: Desa Banjarsari</td>
                                    </tr>
                                    <tr>
                                        <td>Selatan</td>
                                        <td>: Desa gajah Mati</td>
                                    </tr>
                                    <tr>
                                        <td>Barat</td>
                                        <td>: Desa Mekarsari</td>
                                    </tr>
                                    <tr>
                                        <td>Timur</td>
                                        <td>: Desa Retak Mudik</td>
                                    </tr>
                                    <tr>
                                        <td>Klimatologi</td>
                                    </tr>
                                    <tr>
                                        <td>Suhu</td>
                                        <td>: 30ºC</td>
                                    </tr>
                                    <tr>
                                        <td>Curah Hujan</td>
                                        <td>: 43 %</td>
                                    </tr>
                                    <tr>
                                        <td>Kelembaban Udara</td>
                                        <td>: 83 %</td>
                                    </tr>
                                    <tr>
                                        <td>Kecepatan Angin</td>
                                        <td>: 20 km/h</td>
                                    </tr>
                                    <tr>
                                        <td>Luas Lahan Pertanian</td>
                                    </tr>
                                    <tr>
                                        <td>Ladang Sawit</td>
                                        <td>: 2 Ha</td>
                                    </tr>

                                    <tr>
                                        <td>Luas Lahan Perkebunan</td>
                                    </tr>
                                    <tr>
                                        <td>Perkebunan Rakyat </td>
                                        <td>: 5 Ha</td>
                                    </tr>
                                    <tr>
                                        <td>Perkebunan Swasta</td>
                                        <td>: 4 Ha</td>
                                    </tr>
                                    <tr>
                                        <td>Perkebunan Perorangan</td>
                                        <td>: 3 Ha</td>
                                    </tr>
                                    <tr>
                                        <td>Luas Lahan Pemukiman</td>
                                        <td>: 2 Ha/m2</td>
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