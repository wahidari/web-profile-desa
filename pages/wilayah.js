import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import BackToTop from "../components/BackToTop";

ChartJS.register( ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement );
const optionsBarChart = {
    plugins: {
        legend: {
            labels: {
                color: "#888"
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: "#888"
            }
        },
        y: {
            ticks: {
                color: "#888"
            }
        }
    }
};

const title = "Demografis Wilayah";

export default function Wilayah({ area }) {

    let [namaDesa, setNamaDesa] = useState("Alang Alang");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
    });

    const dataArea = populateData(area);
    const [totalRT, totalKK, totalMale, totalFemale, totalCount] = getTotalData(area);
    
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
                <div className="bg-color-primary">
                    <Breadcrumb pageName="Wilayah" currentPage="Wilayah" />
                </div>

                <div className="container my-5">
                    <div className="card bg-card-primary rounded shadow-card border-0 my-5">
                        <div className="card-header bg-color-secondary py-3">
                            <h5 className="m-0 font-weight-bold text-color-primary">Demografi Berdasarkan Wilayah</h5>
                        </div>
                        <div className="card-body">
                            <h5 className="text-color-primary">Grafik</h5>
                            <div className="col-md-8 col-lg-6 mx-auto">
                                <Bar
                                    options={optionsBarChart}
                                    data={dataArea}
                                    width={400}
                                    height={250}
                                />
                            </div>
                            <h5 className="mt-5 text-color-primary">Tabel Data</h5>
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered table-bordered-primary text-color-secondary">
                                    <thead>
                                        <tr>
                                            <th className="fw-600">No</th>
                                            <th className="fw-600">Nama Dusun</th>
                                            <th className="fw-600">Jumlah RT</th>
                                            <th className="fw-600">Jumlah KK</th>
                                            <th className="fw-600">Laki Laki</th>
                                            <th className="fw-600">Perempuan</th>
                                            <th className="fw-600">Jumlah Jiwa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {area.map(item => 
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.rt}</td>
                                                <td>{item.kk}</td>
                                                <td>{item.male}</td>
                                                <td>{item.female}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        )} 
                                        <tr>
                                            <td colSpan="2" className="text-center fw-600">Jumlah Total</td>
                                            <td className="fw-600">{totalRT}</td>
                                            <td className="fw-600">{totalKK}</td>
                                            <td className="fw-600">{totalMale}</td>
                                            <td className="fw-600">{totalFemale}</td>
                                            <td className="fw-600">{totalCount}</td>
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
export async function getServerSideProps({ res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const getDataArea = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wilayah`);
    const area = await getDataArea.json();
    return {
        props: { area }, // will be passed to the page component as props
    };
};

// Populate Data for ChartJS 
function populateData(param) {
    const labels = [], male = [], female = [], total = [];
    param.map(item =>
        labels.push(item.name)
    );
    param.map(item =>
        male.push(item.male)
    );
    param.map(item =>
        female.push(item.female)
    );
    param.map(item =>
        total.push(item.total)
    );
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Laki-Laki",
                backgroundColor: "#1cc88a",
                data: male,
            },
            {
                label: "Perempuan",
                backgroundColor: "#fd7e14",
                data: female,
            },
            {
                label: "Total Jiwa",
                backgroundColor: "#36b9cc",
                data: total,
            },
        ],
        options: {
            legend: {
                labels: {
                    fontColor: 'white' //set your desired color
                }
            }
        }
    };
    return (data);
}

// Count each row value for total row
function getTotalData(param) {
    const rt = [], kk = [], male = [], female = [], total = [];
    let totalRT = 0, totalKK = 0, totalMale = 0, totalFemale = 0, totalCount = 0;

    param.map(item =>
        rt.push(item.rt)
    );
    param.map(item =>
        kk.push(item.kk)
    );
    param.map(item =>
        male.push(item.male)
    );
    param.map(item =>
        female.push(item.female)
    );
    param.map(item =>
        total.push(item.total)
    );

    for (let i = 0; i < rt.length; i++) {
        totalRT += parseInt(rt[i]);
        totalKK += parseInt(kk[i]);
        totalMale += parseInt(male[i]);
        totalFemale += parseInt(female[i]);
        totalCount += parseInt(total[i]);
    }

    return [totalRT, totalKK, totalMale, totalFemale, totalCount];
}