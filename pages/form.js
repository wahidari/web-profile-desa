import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import { useRouter } from 'next/router'

const title = "Form Ganti Desa";

export default function Form({identity}) {
    const router = useRouter();

    const submitForm = async (event) => {
        event.preventDefault();
        let namaDesa = event.target.namaDesa.value;
        let namaKecamatan = event.target.namaKecamatan.value;
        localStorage.setItem("namaDesa", namaDesa);
        localStorage.setItem("namaKecamatan", namaKecamatan);
        router.push("/");
    };

    return (
        <>
            <style jsx>
                {`
            `}
            </style>

            <Head>
                <title>{title}</title>
                <meta name="description" content="Website Desa" />
                <link rel="icon" href="/favicon.ico" />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_API_URL} />
                <meta property="og:title" content={`Situs Resmi Desa`} />
                <meta property="og:description" content={`Website Resmi Desa. Media komunikasi dan transparansi Pemerintah Desa`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/metalogo.jpg`}></meta>
            </Head>

            <NavBarTop />

            <main>
                <div className="bg-color-primary">
                    <Breadcrumb pageName="Form" currentPage="Form" />
                </div>

                <div className="container my-5">
                    <form className="mx-auto col-7" onSubmit={submitForm}>
                        <div className="mb-3">
                            <label htmlFor="namaDesa" className="form-label text-color-secondary">Nama Desa</label>
                            <input type="text" className="form-control" id="namaDesa" aria-describedby="namaDesa" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="namaKecamatan" className="form-label text-color-secondary">Nama Kecamatan</label>
                            <input type="text" className="form-control" id="namaKecamatan" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </main>

            <Footer />

            <BackToTop />
        </>
    );
};