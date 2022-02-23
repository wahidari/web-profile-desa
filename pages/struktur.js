import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import BreadcrumbArea from "../components/BreadcrumbArea";
import avatarImg from "../public/avatar.png";
import Image from "next/image";
import BackToTop from "../components/BackToTop";

const title = "Struktur";

export default function Struktur({ posts }) {
    let [namaDesa, setNamaDesa] = useState("Alang Alang");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
    });

    return (
        <>
            <style jsx>
                {`
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

                <BreadcrumbArea pageName="Struktur Organisasi" currentPage="Struktur"/>

                <div className="container my-5">
                    <div className="row g-4 my-2">
                        <div className="col-sm-3">
                            <div className="card bg-card-primary shadow-sm rounded border-0 px-3 py-3">
                                <Image alt="Foto Perangkat Desa" src={avatarImg} quality={90} className="img-fluid mx-auto rounded"/>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="card bg-card-primary shadow-sm rounded border-0 px-3 py-3">
                                <h4 className="text-color-primary">Kepala Desa</h4>
                                <div className="table-responsive mt-3">
                                    <table className="table text-color-secondary table-bordered table-bordered-primary">
                                        <tbody>
                                            <tr>
                                                <td>Jabatan</td>
                                                <td>Kepala Desa</td>
                                            </tr>
                                            <tr>
                                                <td>Alamat</td>
                                                <td>Desa</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 my-2">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="card bg-card-primary shadow-sm rounded border-0 px-3 py-3">
                                        <Image alt="Foto Perangkat Desa" src={avatarImg} quality={90} className="img-fluid mx-auto rounded" />
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="card bg-card-primary shadow-sm rounded border-0 px-3 py-3">
                                        <h4 className="text-color-primary">Sekretaris Desa</h4>
                                        <div className="table-responsive mt-3">
                                            <table className="table text-color-secondary table-bordered table-bordered-primary">
                                                <tbody>
                                                    <tr>
                                                        <td>Jabatan</td>
                                                        <td>Sekretaris Desa</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Alamat</td>
                                                        <td>Desa</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="card bg-card-primary shadow-sm rounded border-0 px-3 py-3">
                                        <Image alt="Foto Perangkat Desa" src={avatarImg} quality={90} className="img-fluid mx-auto rounded" />
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="card bg-card-primary shadow-sm rounded border-0 px-3 py-3">
                                        <h4 className="text-color-primary">Bendahara Desa</h4>
                                        <div className="table-responsive mt-3">
                                            <table className="table text-color-secondary table-bordered table-bordered-primary">
                                                <tbody>
                                                    <tr>
                                                        <td>Jabatan</td>
                                                        <td>Bendahara Desa</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Alamat</td>
                                                        <td>Desa</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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
// export async function getServerSideProps() {
//     const getAllPosts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`);
//     const posts = await getAllPosts.json();
//     return {
//         props: { posts }, // will be passed to the page component as props
//     };
// };