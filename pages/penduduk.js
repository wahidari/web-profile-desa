import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import BackToTop from "../components/BackToTop";

ChartJS.register( ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement );

const title = "Demografis Penduduk";
const colors = ["#36b9cc", "#1cc88a", "#6f42c1", "#e74a3b", "#fd7e14", "#f6c23e"];

export default function Penduduk({ gender, education, religion }) {

    const dataGender = populateData(gender);
    const totalDataGender = getTotalData(gender);

    const dataEducation = populateData(education);
    const totalDataEducation = getTotalData(education);

    const dataReligion = populateData(religion);
    const totalDataReligion = getTotalData(religion);
    
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
                <meta name="description" content="Next Bootstrap" />
                <link rel="icon" href="/favicon.ico" />
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
    return {
        props: { gender, education, religion }, // will be passed to the page component as props
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