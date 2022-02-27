import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";

const title = "Covid-19";

export default function Covid({ covid }) {
    let [namaDesa, setNamaDesa] = useState("Alang Alang");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
    })
    
    // const dataGender = populateData(gender);
    const [totalKonfirmasi, totalAktif, totalSembuh, totalMeninggal] = getTotalData(covid);
    // console.log(covid.dataKecamatan);
    
    return (
        <>
            <style jsx>
                {`
                .shadow-custom {
                    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
                }
                .text-14 {
                    font-size: 14px;
                }
                @media (max-width: 767.98px) {
                    .border-start-primary {
                        border-left-color: #ffffff00 !important;
                    }
                }
                h6 {
                    font-size: 18px;
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
                    <Breadcrumb pageName="Covid-19" currentPage="Covid-19" />
                </div>

                <div className="container my-5">
                    <h5 className="text-color-primary">Statistik Covid-19</h5>
                    <p className="text-color-secondary">Update {covid.lastUpdate}</p>
                    <div className="row g-4 my-1">
                        <div className="col-sm-6 col-md-3">
                            <div className="card bg-card-primary shadow-custom rounded px-3 py-3 border-primary">
                                <h5 className="mb-4 text-color-primary">Konfirmasi</h5>
                                <h6 className="text-color-secondary">Bangkalan</h6>
                                <div className="d-flex align-content-center">
                                    <h5 id="stat-konfirmasi" className="text-primary fw-bold mb-0">{covid.konfirmasi}</h5>
                                    <span className="badge rounded-pill bg-primary text-14 fw-light ms-2">+ {covid.konfirmasiHarian}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="card bg-card-primary shadow-custom rounded px-3 py-3 border-warning">
                                <h5 className="mb-4 text-color-primary">Aktif</h5>
                                <h6 className="text-color-secondary">Bangkalan</h6>
                                <div className="d-flex align-content-center">
                                    <h5 id="stat-aktif" className="text-warning fw-bold mb-0">{covid.aktif}</h5>
                                    <span className="badge rounded-pill bg-warning text-14 fw-light ms-2">+ {covid.aktifHarian}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="card bg-card-primary shadow-custom rounded px-3 py-3 border-success">
                                <h5 className="mb-4 text-color-primary">Sembuh</h5>
                                <h6 className="text-color-secondary">Bangkalan</h6>
                                <div className="d-flex align-content-center">
                                    <h5 id="stat-sembuh" className="text-success fw-bold mb-0">{covid.sembuh}</h5>
                                    <span className="badge rounded-pill bg-success text-14 fw-light ms-2">+ {covid.sembuhHarian}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="card bg-card-primary shadow-custom rounded px-3 py-3 border-danger">
                                <h5 className="mb-4 text-color-primary">Meninggal</h5>
                                <h6 className="text-color-secondary">Bangkalan</h6>
                                <div className="d-flex align-content-center">
                                    <h5 id="stat-meninggal" className="text-danger fw-bold mb-0">{covid.meninggal}</h5>
                                    <span className="badge rounded-pill bg-danger text-14 fw-light ms-2">+ {covid.meninggalHarian}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <h5 className="mt-5 mb-4 text-color-primary">Tabel Sebaran Covid-19</h5>
                    <div className="table-responsive mt-3">
                        <table id="tabel-sebaran" className="table table-bordered table-bordered-primary text-color-secondary text-center">
                            <thead>
                                <tr>
                                    <th>Kecamatan</th>
                                    <th>Konfirmasi</th>
                                    <th>Aktif</th>
                                    <th>Sembuh</th>
                                    <th>Meninggal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {covid.dataKecamatan.map(item => 
                                    <tr key={item.id}>
                                        <td>{item.kecamatan}</td>
                                        <td>{item.konfirmasi}</td>
                                        <td>{item.aktif}</td>
                                        <td>{item.sembuh}</td>
                                        <td>{item.meninggal}</td>
                                    </tr>
                                )}
                                <tr>
                                    <td className="text-center fw-bold">Jumlah</td>
                                    <td className="text-center fw-bold">{totalKonfirmasi}</td>
                                    <td className="text-center fw-bold">{totalAktif}</td>
                                    <td className="text-center fw-bold">{totalSembuh}</td>
                                    <td className="text-center fw-bold">{totalMeninggal}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="container my-5">
                    <h5 className="mt-5 mb-4 text-color-primary">Tentang Covid-19</h5>
                    <div className="card bg-card-primary border-color-primary rounded-3 shadow-sm my-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="py-0 py-md-4 px-0 px-md-4">
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                        aria-orientation="vertical">
                                        <button className="nav-link active text-start" id="v-pills-apa-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-apa" type="button" role="tab" aria-controls="v-pills-apa"
                                            aria-selected="true">Apa itu Covid-19 ?</button>
                                        <button className="nav-link text-start" id="v-pills-bagaimana-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-bagaimana" type="button" role="tab"
                                            aria-controls="v-pills-bagaimana" aria-selected="true">Bagaimana Covid-19 Menular
                                            ?</button>
                                        <button className="nav-link text-start" id="v-pills-gejala-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-gejala" type="button" role="tab"
                                            aria-controls="v-pills-gejala" aria-selected="true">Apa Saja Gejala Covid-19
                                            ?</button>
                                        <button className="nav-link text-start" id="v-pills-mencegah-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-mencegah" type="button" role="tab"
                                            aria-controls="v-pills-mencegah" aria-selected="true">Bagaimana Mencegah Penyebaran
                                            Covid-19 ?</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 pt-4 px-4 border-start-primary">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-apa" role="tabpanel"
                                        aria-labelledby="v-pills-apa-tab">
                                        <h6 className="mb-3 text-color-primary">Pengertian Covid-19</h6>
                                        <p className="text-color-secondary">Coronavirus Disease 2019 atau COVID-19 adalah
                                            penyakit baru yang dapat menyebabkan gangguan
                                            pernapasan dan radang paru.
                                            Penyakit ini disebabkan oleh infeksi Severe Acute Respiratory Syndrome
                                            Coronavirus 2 (SARS-CoV-2). Gejala
                                            klinis yang
                                            muncul beragam, mulai dari seperti gejala flu biasa (batuk, pilek, nyeri
                                            tenggorok, nyeri otot, nyeri
                                            kepala) sampai
                                            yang berkomplikasi berat (pneumonia atau sepsis).</p>
                                    </div>
                                    <div className="tab-pane fade show" id="v-pills-bagaimana" role="tabpanel"
                                        aria-labelledby="v-pills-bagaimana-tab">
                                        <h6 className="mb-3 text-color-primary">Covid-19 Menular Dengan Cara</h6>
                                        <p className="text-color-secondary">COVID-19 adalah penyakit baru dan para peneliti masih
                                            mempelajari bagaimana cara penularannya. Dari berbagai penelitian,
                                            metode penyebaran utama penyakit ini diduga adalah melalui droplet saluran
                                            pernapasan dan kontak dekat dengan penderita.
                                            Droplet merupakan partikel kecil dari mulut penderita yang dapat mengandung
                                            virus penyakit, yang dihasilkan pada saat
                                            batuk, bersin, atau berbicara. Droplet dapat melewati sampai jarak tertentu
                                            (biasanya 1 meter).</p>
                                        <p className="text-color-secondary">Droplet bisa menempel di pakaian atau benda di
                                            sekitar penderita pada saat batuk atau bersin. Namun, partikel droplet
                                            cukup besar sehingga tidak akan bertahan atau mengendap di udara dalam waktu
                                            yang lama. Oleh karena itu, orang yang
                                            sedang sakit, diwajibkan untuk menggunakan masker untuk mencegah penyebaran
                                            droplet. Untuk penularan melalui makanan,
                                            sampai saat ini belum ada bukti ilmiahnya.</p>
                                    </div>
                                    <div className="tab-pane fade show" id="v-pills-gejala" role="tabpanel"
                                        aria-labelledby="v-pills-gejala-tab">
                                        <h6 className="mb-3 text-color-primary">Gejala Covid-19</h6>
                                        <p className="text-color-secondary">Gejala umum berupa demam ≥380C, batuk kering, dan
                                            sesak napas. Jika ada orang yang dalam 14 hari sebelum muncul gejala
                                            tersebut pernah melakukan perjalanan ke negara terjangkit, atau pernah
                                            merawat/kontak erat dengan penderita COVID-19,
                                            maka terhadap orang tersebut akan dilakukan pemeriksaan laboratorium lebih
                                            lanjut untuk memastikan diagnosisnya.</p>
                                    </div>
                                    <div className="tab-pane fade show" id="v-pills-mencegah" role="tabpanel"
                                        aria-labelledby="v-pills-mencegah-tab">
                                        <h5 className="mb-3 text-color-primary">Pencegahan Penyebaran Covid-19</h5>
                                        <ul className="list-unstyled text-color-secondary">
                                            <li className="mb-2">1. Cuci Tangan Sesering Mungkin</li>
                                            <li className="mb-2">2. Jaga Jarak</li>
                                            <li className="mb-2">3. Hindari menyentuh mata, hidung, dan mulut</li>
                                            <li className="mb-2">4. Lakukan Kebersihan Pernapasan</li>
                                            <li className="mb-2">5. Jika Mengalami Demam, Batuk, dan Kesulitan
                                                Bernapas, Cari Perawatan Medis Sejak Dini</li>
                                            <li className="mb-2">6. Update Informasi dan Ikuti Saran Tenaga Medis</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
export async function getServerSideProps({ res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const getDataCovid = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/covid`);
    const covid = await getDataCovid.json();
    return {
        props: { covid }, // will be passed to the page component as props
    };
};

// Count each row value for total row
function getTotalData(param) {
    const konfirmasi = [], aktif = [], sembuh = [], meninggal = [];
    let totalKonfirmasi = 0, totalAktif = 0, totalSembuh = 0, totalMeninggal = 0;
    param.dataKecamatan.map(item =>
        konfirmasi.push(item.konfirmasi)
    );
    param.dataKecamatan.map(item =>
        aktif.push(item.aktif)
    );
    param.dataKecamatan.map(item =>
        sembuh.push(item.sembuh)
    );
    param.dataKecamatan.map(item =>
        meninggal.push(item.meninggal)
    );

    for (let index = 0; index < konfirmasi.length; index++) {
        totalKonfirmasi += parseInt(konfirmasi[index]);
        totalAktif += parseInt(aktif[index]);
        totalSembuh += parseInt(sembuh[index]);
        totalMeninggal += parseInt(meninggal[index]);
    }

    return [totalKonfirmasi, totalAktif, totalSembuh, totalMeninggal];
}