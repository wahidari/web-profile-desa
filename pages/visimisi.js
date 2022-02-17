import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import BreadcrumbArea from "../components/BreadcrumbArea";
import imgDesa from "../public/hero.webp";
import Image from "next/image";
import BackToTop from "../components/BackToTop";

const title = "Visi MIsi";

export default function Sejarah({ posts }) {

    let [namaDesa, setNamaDesa] = useState("Alang Alang");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
    });
    
    return (
        <>

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

                <BreadcrumbArea pageName="Visi Misi" currentPage="Visi Misi"/>

                <div className="container my-5">
                    <div className="col-lg-10 mx-auto">
                        <div className="card bg-card-primary border-0 shadow-sm px-3 py-3 mb-4">
                            <h3 className="text-color-primary">Visi Dan Misi</h3>
                            <Image
                                src={imgDesa}
                                alt="Desa"
                                className="img-fluid rounded my-3" />
                            <h5 className="mt-4 text-color-primary">Visi</h5>
                            <p className ="text-color-secondary">“ Terwujudnya Desa {namaDesa} sebagai Desa yang Mandiri melalui Pengembangan Ekonomi Berbasis Potensi Sumber Daya Alam untuk mencapai masyarakat makmur dan agamis ”</p>
                            <h5 className="text-color-primary">Misi</h5>
                            <p className ="text-color-secondary mb-2">1. Mewujudkan dan mengembangkan kegiatan keagamaan untuk menambah keimanan dan ketaqwaan kepada Tuhan Yang Maha Esa.</p>
                            <p className ="text-color-secondary mb-2">2. Mewujudkan dan mendorong terjadinya usaha-usaha kerukunan antar dan intern warga masyarakat yang disebabkan karena adanya perbedaan agama, keyakinan, organisasi, dan lainnya dalam suasana saling menghargai dan menghormati.</p>
                            <p className ="text-color-secondary mb-2">3. Membangun dan meningkatkan hasil perkebunan dengan jalan penataan pengairan dan pemupukan.</p>
                            <p className ="text-color-secondary mb-2">4. Menata Pemerintahan Desa {namaDesa} yang kompak dan bertanggung jawab dalam mengemban amanat masyarakat.</p>
                            <p className ="text-color-secondary mb-2">5. Meningkatkan pelayanan masyarakat secara terpadu dan serius.</p>
                            <p className ="text-color-secondary mb-2">6. Membangun dan mendorong majunya bidang pendidikan baik formal maupun informal yang mudah diakses dan dinikmati seluruh warga masyarakat tanpa terkecuali yang mampu menghasilkan insan intelektual, inovatif dan enterpreneur (wirausahawan).</p>
                            <p className ="text-color-secondary mb-2">7. Meningkatkan SDM masyarakat agat lebih mampu dalam mengakses Computer dan Internet.</p>
                            <p className ="text-color-secondary mb-2">8. Meningkatkan kesehatan masyarakat</p>
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