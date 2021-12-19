import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import BackToTop from "../components/BackToTop";
import { namaDesa } from "../siteIdentity";

ChartJS.register( ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement );
const colors = ["#36b9cc", "#1cc88a", "#6f42c1", "#e74a3b", "#fd7e14", "#f6c23e"];
const options = {
    plugins: {
        legend: {
            display: false
        }
    }
};

const title = "Demografis Penduduk";

export default function Penduduk({ gender, education, religion, pekerjaan, status, usia }) {

    const dataGender = populateData(gender);
    const totalDataGender = getTotalData(gender);

    const dataEducation = populateData(education);
    const totalDataEducation = getTotalData(education);

    const dataReligion = populateData(religion);
    const totalDataReligion = getTotalData(religion);

    const dataPekerjaan = populateData(pekerjaan);
    const totalDataPekerjaan = getTotalData(pekerjaan);

    const dataStatus = populateData(status);
    const totalDataStatus = getTotalData(status);

    const dataUsia = populateData(usia);
    const totalDataUsia = getTotalData(usia);
    
    return (
        <>
            <style jsx>
                {`
                .shadow-card {
                    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
                }
                .fw-600 {
                    font-weight: 600;
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
                    <Breadcrumb pageName="Penduduk" currentPage="Penduduk" />
                </div>

                <div className="container my-5" id="jenis-kelamin">
                    <div className="card rounded shadow-card border-0 my-5">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi Berdasarkan Jenis Kelamin</h5>
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

                    <div className="card rounded shadow-card border-0 my-5" id="pendidikan">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi Berdasarkan Pendidikan</h5>
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

                    <div className="card rounded shadow-card border-0 my-5" id="agama">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi Berdasarkan Agama</h5>
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

                    <div className="card rounded shadow-card border-0 my-5" id="pekerjaan">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi Berdasarkan Pekerjaan</h5>
                        </div>
                        <div className="card-body">
                            <h5>Grafik</h5>
                            <div className="col-md-8 col-lg-5 mx-auto">
                                <Pie
                                    data={dataPekerjaan}
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
                                        {pekerjaan.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        )}

                                        <tr>
                                            <td colSpan="2" className="text-center fw-600">Jumlah</td>
                                            <td className="fw-600">{totalDataPekerjaan}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded shadow-card border-0 my-5" id="usia">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi Berdasarkan Usia</h5>
                        </div>
                        <div className="card-body">
                            <h5>Grafik</h5>
                            <div className="col-md-8 col-lg-6 mx-auto">
                                <Bar
                                    options={options}
                                    data={dataUsia}
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
                                        {usia.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        )}

                                        <tr>
                                            <td colSpan="2" className="text-center fw-600">Jumlah</td>
                                            <td className="fw-600">{totalDataUsia}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded shadow-card border-0 my-5" id="status">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold">Demografi Berdasarkan Status</h5>
                        </div>
                        <div className="card-body">
                            <h5>Grafik</h5>
                            <div className="col-md-8 col-lg-5 mx-auto">
                                <Pie
                                    data={dataStatus}
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
                                        {status.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        )}

                                        <tr>
                                            <td colSpan="2" className="text-center fw-600">Jumlah</td>
                                            <td className="fw-600">{totalDataStatus}</td>
                                        </tr>
                                    </tbody>
                                </table>
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
export async function getServerSideProps() {
    const getDataGender = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gender`);
    const gender = await getDataGender.json();
    const getDataEducation = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/education`);
    const education = await getDataEducation.json();
    const getDataReligion = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/religion`);
    const religion = await getDataReligion.json();
    const getDataPekerjaan = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pekerjaan`);
    const pekerjaan = await getDataPekerjaan.json();
    const getDataStatus = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/status`);
    const status = await getDataStatus.json();
    const getDataUsia = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/usia`);
    const usia = await getDataUsia.json();
    return {
        props: { gender, education, religion, pekerjaan, status, usia }, // will be passed to the page component as props
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
        }],
    };
    return (data);
}

// Count each row value for total row
function getTotalData(param) {
    const totals = [];
    param.map(item =>
        totals.push(item.total)
    );

    let total = 0;
    for (let index = 0; index < totals.length; index++) {
        total += parseInt(totals[index])
    }

    return (total);
}