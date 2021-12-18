import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import BackToTop from "../components/BackToTop";

ChartJS.register( ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement );

const title = "Covid-19";
const colors = ["#36b9cc", "#1cc88a", "#6f42c1", "#e74a3b", "#fd7e14", "#f6c23e"];

export default function Covid({ covid }) {

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
                    .border-start {
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
                <meta name="description" content="Next Bootstrap" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBarTop />

            <main>
                <div className="bg-light">
                    <Breadcrumb pageName="Covid-19" currentPage="Covid-19" />
                </div>

                <div className="container my-5">
                    <h5>Statistik Covid-19</h5>
                    <p className="text-dark-secondary">Update {covid.lastUpdate}</p>
                    <div className="row g-4 my-1">
                        <div className="col-sm-6 col-md-3">
                            <div className="card shadow-custom rounded px-3 py-3 border-primary">
                                <h5 className="mb-4">Konfirmasi</h5>
                                <h6 className="text-dark-secondary">Bangkalan</h6>
                                <div className="d-flex align-content-center">
                                    <h5 id="stat-konfirmasi" className="text-primary fw-bold mb-0">{covid.konfirmasi}</h5>
                                    <span className="badge rounded-pill bg-primary text-14 fw-light ms-2">+ {covid.konfirmasiHarian}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="card shadow-custom rounded px-3 py-3 border-warning">
                                <h5 className="mb-4">Aktif</h5>
                                <h6 className="text-dark-secondary">Bangkalan</h6>
                                <div className="d-flex align-content-center">
                                    <h5 id="stat-aktif" className="text-warning fw-bold mb-0">{covid.aktif}</h5>
                                    <span className="badge rounded-pill bg-warning text-14 fw-light ms-2">+ {covid.aktifHarian}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="card shadow-custom rounded px-3 py-3 border-success">
                                <h5 className="mb-4">Sembuh</h5>
                                <h6 className="text-dark-secondary">Bangkalan</h6>
                                <div className="d-flex align-content-center">
                                    <h5 id="stat-sembuh" className="text-success fw-bold mb-0">{covid.sembuh}</h5>
                                    <span className="badge rounded-pill bg-success text-14 fw-light ms-2">+ {covid.sembuhHarian}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="card shadow-custom rounded px-3 py-3 border-danger">
                                <h5 className="mb-4">Meninggal</h5>
                                <h6 className="text-dark-secondary">Bangkalan</h6>
                                <div className="d-flex align-content-center">
                                    <h5 id="stat-meninggal" className="text-danger fw-bold mb-0">{covid.meninggal}</h5>
                                    <span className="badge rounded-pill bg-danger text-14 fw-light ms-2">+ {covid.meninggalHarian}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <h5 className="mt-5 mb-4">Tabel Sebaran Covid-19</h5>
                    <div className="table-responsive mt-3">
                        <table id="tabel-sebaran" className="table table-bordered table-hover text-center">
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
                    <h5 className="mt-5 mb-4">Tentang Covid-19</h5>
                    <div className="card rounded-3 shadow-sm my-3">
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
                            <div className="col-md-8 pt-4 px-4 border-start">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-apa" role="tabpanel"
                                        aria-labelledby="v-pills-apa-tab">
                                        <h6 className="mb-3">Pengertian Covid-19</h6>
                                        <p className="text-dark-secondary">Coronavirus Disease 2019 atau COVID-19 adalah
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
                                        <h6 className="mb-3">Covid-19 Menular Dengan Cara</h6>
                                        <p className="text-dark-secondary">COVID-19 adalah penyakit baru dan para peneliti masih
                                            mempelajari bagaimana cara penularannya. Dari berbagai penelitian,
                                            metode penyebaran utama penyakit ini diduga adalah melalui droplet saluran
                                            pernapasan dan kontak dekat dengan penderita.
                                            Droplet merupakan partikel kecil dari mulut penderita yang dapat mengandung
                                            virus penyakit, yang dihasilkan pada saat
                                            batuk, bersin, atau berbicara. Droplet dapat melewati sampai jarak tertentu
                                            (biasanya 1 meter).</p>
                                        <p className="text-dark-secondary">Droplet bisa menempel di pakaian atau benda di
                                            sekitar penderita pada saat batuk atau bersin. Namun, partikel droplet
                                            cukup besar sehingga tidak akan bertahan atau mengendap di udara dalam waktu
                                            yang lama. Oleh karena itu, orang yang
                                            sedang sakit, diwajibkan untuk menggunakan masker untuk mencegah penyebaran
                                            droplet. Untuk penularan melalui makanan,
                                            sampai saat ini belum ada bukti ilmiahnya.</p>
                                    </div>
                                    <div className="tab-pane fade show" id="v-pills-gejala" role="tabpanel"
                                        aria-labelledby="v-pills-gejala-tab">
                                        <h6 className="mb-3">Gejala Covid-19</h6>
                                        <p className="text-dark-secondary">Gejala umum berupa demam ≥380C, batuk kering, dan
                                            sesak napas. Jika ada orang yang dalam 14 hari sebelum muncul gejala
                                            tersebut pernah melakukan perjalanan ke negara terjangkit, atau pernah
                                            merawat/kontak erat dengan penderita COVID-19,
                                            maka terhadap orang tersebut akan dilakukan pemeriksaan laboratorium lebih
                                            lanjut untuk memastikan diagnosisnya.</p>
                                    </div>
                                    <div className="tab-pane fade show" id="v-pills-mencegah" role="tabpanel"
                                        aria-labelledby="v-pills-mencegah-tab">
                                        <h5 className="mb-3">Pencegahan Penyebaran Covid-19</h5>
                                        <ul className="list-unstyled">
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

                {/* <div className="container my-5">
                    <div className="card rounded shadow-card border-0 my-5">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi</h5>
                        </div>
                        <div className="card-body">
                            <h5>Grafik</h5>
                            <div className="col-md-8 col-lg-5 mx-auto">
                                <Doughnut
                                    data={dataGender}
                                    width={400}
                                    height={250}
                                />
                            </div>
                            <h5 className="mt-5">Tabel Data</h5>
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="fw-600">No</th>
                                            <th className="fw-600">Kelompok</th>
                                            <th className="fw-600">Jumlah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {gender.map(item => 
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        )} 
                                        
                                        <tr>
                                            <td colSpan="2" className="text-center fw-600">Jumlah</td>
                                            <td className="fw-600">{totalDataGender}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded shadow-card border-0 my-5">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi</h5>
                        </div>
                        <div className="card-body">
                            <h5>Grafik</h5>
                            <div className="col-md-8 col-lg-5 mx-auto">
                                <Doughnut
                                    data={dataEducation}
                                    width={400}
                                    height={250}
                                />
                            </div>
                            <h5 className="mt-5">Tabel Data</h5>
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="fw-600">No</th>
                                            <th className="fw-600">Kelompok</th>
                                            <th className="fw-600">Jumlah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {education.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        )}

                                        <tr>
                                            <td colSpan="2" className="text-center fw-600">Jumlah</td>
                                            <td className="fw-600">{totalDataEducation}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded shadow-card border-0 my-5">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi</h5>
                        </div>
                        <div className="card-body">
                            <h5>Grafik</h5>
                            <div className="col-md-8 col-lg-5 mx-auto">
                                <Pie
                                    data={dataReligion}
                                    width={400}
                                    height={250}
                                />
                            </div>
                            <h5 className="mt-5">Tabel Data</h5>
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="fw-600">No</th>
                                            <th className="fw-600">Kelompok</th>
                                            <th className="fw-600">Jumlah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {religion.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        )}

                                        <tr>
                                            <td colSpan="2" className="text-center fw-600">Jumlah</td>
                                            <td className="fw-600">{totalDataReligion}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div> */}
            </main>

            <Footer />
            
            <BackToTop />
        </>
    );
};

// This gets called on every request to this page
export async function getServerSideProps() {
    const getDataCovid = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/covid`);
    const covid = await getDataCovid.json();
    return {
        props: { covid }, // will be passed to the page component as props
    };
};

// Populate Data for ChartJS 
function populateData(param) {
    const labels = [];
    const totals = [];
    param.map(item =>
        labels.push(item.name)
    );
    param.map(item =>
        totals.push(item.total)
    );
    const data = {
        labels: labels,
        datasets: [{
            data: totals,
            backgroundColor: colors
        }]
    };
    return (data);
}

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