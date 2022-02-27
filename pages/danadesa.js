import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import BackToTop from "../components/BackToTop";

ChartJS.register( ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement );

const title = "Dana Desa";
const colors = ["#36b9cc", "#e74a3b", "#fd7e14", "#f6c23e"];
const options = {
    plugins: {
        legend: {
            labels: {
                font: {
                    // size: 13
                },
                color: "#888"
            }
        }
    }
};

export default function DanaDesa({ danadesa }) {

    let [namaDesa, setNamaDesa] = useState("Alang Alang");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
    })
    
    const [totalPendapatanAnggaran, totalPendapatanRealisasi, totalPendapatanSelisih, totalPendapatanPresentase] = getTotalData(danadesa.pendapatan);
    const [totalBelanjaAnggaran, totalBelanjaRealisasi, totalBelanjaSelisih, totalBelanjaPresentase] = getTotalData(danadesa.belanja);
    const [totalPembiayaanAnggaran, totalPembiayaanRealisasi, totalPembiayaanSelisih, totalPembiayaanPresentase] = getTotalData(danadesa.pembiayaan);
    // console.log(danadesa);
    // console.log(totalPendapatanSelisih);

    const dataDanaDesa = {
        labels: ["Pendapatan", "Belanja", "Pembiayaan"],
        datasets: [{
            data: [totalPendapatanRealisasi, totalBelanjaRealisasi, totalPembiayaanRealisasi],
            backgroundColor: colors
        }]
    };
    
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
                    <Breadcrumb pageName="Dana Desa" currentPage="Dana Desa" />
                </div>

                <div className="container my-5">
                    <div className="card bg-card-primary rounded shadow-card border-0 my-5">
                        <div className="card-header bg-color-secondary py-3">
                            <h5 className="m-0 font-weight-bold text-color-primary">Dana Desa</h5>
                        </div>
                        <div className="card-body">
                            <h5 className="text-color-primary">Grafik</h5>
                            <div className="col-md-8 col-lg-5 mx-auto">
                                <Doughnut
                                    options={options}
                                    data={dataDanaDesa}
                                    width={400}
                                    height={250}
                                />
                                {/* <Bar
                                    data={dataDanaDesa}
                                    width={400}
                                    height={250}
                                /> */}
                            </div>
                            <h5 className="mt-5 text-color-primary">Tabel Data</h5>
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered table-bordered-primary text-color-secondary">
                                    <thead>
                                        <tr>
                                            <th>Uraian</th>
                                            <th>Anggaran (Rp.)</th>
                                            <th>Realisasi (Rp.)</th>
                                            <th>Lebih/Kurang (Rp.)</th>
                                            <th>Persentase (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold">PENDAPATAN</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        {danadesa.pendapatan.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.nama}</td>
                                                <td>{item.anggaran}</td>
                                                <td>{item.realisasi}</td>
                                                <td>{item.selisih}</td>
                                                <td>{item.presentase}</td>
                                            </tr>
                                        )}
                                        <tr>
                                            <td className="fw-bold">Jumlah</td>
                                            <td className="fw-bold">{totalPendapatanAnggaran}</td>
                                            <td className="fw-bold">{totalPendapatanRealisasi}</td>
                                            <td className="fw-bold">{totalPendapatanSelisih}</td>
                                            <td className="fw-bold">{totalPendapatanPresentase}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="5"></td>
                                        </tr>

                                        <tr>
                                            <td className="fw-bold">BELANJA</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        {danadesa.belanja.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.nama}</td>
                                                <td>{item.anggaran}</td>
                                                <td>{item.realisasi}</td>
                                                <td>{item.selisih}</td>
                                                <td>{item.presentase}</td>
                                            </tr>
                                        )}
                                        <tr>
                                            <td className="fw-bold">Jumlah</td>
                                            <td className="fw-bold">{totalBelanjaAnggaran}</td>
                                            <td className="fw-bold">{totalBelanjaRealisasi}</td>
                                            <td className="fw-bold">{totalBelanjaSelisih}</td>
                                            <td className="fw-bold">{totalBelanjaPresentase}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="5"></td>
                                        </tr>

                                        <tr>
                                            <td className="fw-bold">PEMBIAYAAN</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        {danadesa.pembiayaan.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.nama}</td>
                                                <td>{item.anggaran}</td>
                                                <td>{item.realisasi}</td>
                                                <td>{item.selisih}</td>
                                                <td>{item.presentase}</td>
                                            </tr>
                                        )}
                                        <tr>
                                            <td className="fw-bold">Jumlah</td>
                                            <td className="fw-bold">{totalPembiayaanAnggaran}</td>
                                            <td className="fw-bold">{totalPembiayaanRealisasi}</td>
                                            <td className="fw-bold">{totalPembiayaanSelisih}</td>
                                            <td className="fw-bold">{totalPembiayaanPresentase}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="5"></td>
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
    const getDataDanaDesa = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/danadesa`);
    const danadesa = await getDataDanaDesa.json();
    return {
        props: { danadesa }, // will be passed to the page component as props
    };
};

// Populate Data for ChartJS 
function populateData(param) {
    console.log(param)
    const labels = [];
    const totals = [];
    // param.map(item =>
    //     labels.push(item.name)
    // );
    // param.map(item =>
    //     totals.push(item.total)
    // );
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
    const anggaran = [], realisasi = [], selisih = [], presentase = [];
    let totalAnggaran = 0, totalRealisasi = 0, totalSelisih = 0, totalPresentase = 0;
    param.map(item =>
        anggaran.push(item.anggaran)
    );
    param.map(item =>
        realisasi.push(item.realisasi)
    );
    param.map(item =>
        selisih.push(item.selisih)
    );
    param.map(item =>
        presentase.push(item.presentase)
    );

    for (let index = 0; index < anggaran.length; index++) {
        totalAnggaran += parseInt(anggaran[index]);
        totalRealisasi += parseInt(realisasi[index]);
        totalSelisih += parseInt(selisih[index]);
        totalPresentase += parseInt(presentase[index]);
    }

    totalPresentase = totalPresentase / anggaran.length;

    return [totalAnggaran, totalRealisasi, totalSelisih, totalPresentase];
}