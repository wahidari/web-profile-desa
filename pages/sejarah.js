import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import BreadcrumbArea from "../components/BreadcrumbArea";
import imgDesa from "../public/desa.png";
import imgLogo from "../public/logo.png";
import Image from "next/image";
import BackToTop from "../components/BackToTop";
import { namaDesa, namaKecamatan, petaLokasi, petaGeospatial } from "../siteIdentity";

const title = "Sejarah";

export default function Sejarah({ posts }) {
    return (
        <>
            <style jsx>
                {`
                .maps {
                    height: 450px;
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

                <BreadcrumbArea pageName="Sejarah Singkat" currentPage="Sejarah"/>

                <div className="container my-5">
                    <div className="col-lg-10 mx-auto">
                        <div className="card border-0 shadow-sm px-3 py-3 bg-white mb-4">
                            <h3>Sejarah Singkat</h3>
                            <Image 
                            src={imgDesa} 
                            alt="Desa" 
                            className="img-fluid rounded my-3"/>
                            <h5 className="mt-3">Uraian Singkat Profil Desa</h5>
                            <p className="text-dark-secondary">Desa {namaDesa} merupakan Desa yang terletak di dataran rendah
                                yang sebelah selatannya terdapat Selat Madura, tinggi dari permukaan Pantai yaitu 2 M.
                                Selain
                                itu Desa {namaDesa} memiliki Luas 113,48 Ha. Jarak tempuh dari Desa menuju Kantor Kecamatan
                                yaitu 2 KM.
                                Desa {namaDesa} terdiri dari 7 dusun, 7 RW dan 32 Rt dengan jumlah penduduk sebanyak 6.506
                                Jiwa,
                                dengan rincian Laki-laki 3.178 jiwa dan perempuan 3.328 jiwa.</p>
                            <p className="text-dark-secondary">{namaDesa} adalah salah satu Desa yang terletak di wilayah
                                Kecamatan {namaKecamatan}, Kabupaten Bangkalan, Provinsi Jawa
                                Timur, Indonesia. Desa alang-alang adalah Desa pintar pertama yang ada di Kabupaten
                                Bangkalan Dengan nama Smart
                                Village.</p>
                        </div>
                        <div className="card border-0 shadow-sm px-3 py-3 bg-white mb-4">
                            <h3>Peta Desa</h3>
                            <iframe
                                src={petaLokasi}
                                className="rounded mt-3 maps" allowFullScreen=""
                                loading="lazy"></iframe>
                        </div>
                        <div className="card border-0 shadow-sm px-3 py-3 bg-white mb-4">
                            <h3>Peta Geospatial</h3>
                            <iframe src={petaGeospatial}
                                className="rounded mt-3 maps" allowFullScreen=""
                                loading="lazy"></iframe>
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