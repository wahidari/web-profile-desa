import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import BackToTop from "../components/BackToTop";

const title = "Lapak Desa";

export default function Lapak({products}) {
    let [namaDesa, setNamaDesa] = useState("Alang Alang");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
    })

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
                <div className="bg-color-primary">
                    <Breadcrumb pageName="Lapak" currentPage="Lapak" />
                </div>

                <div className="container my-5">
                    <div className="row g-4">
                        {products.map(product =>
                            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                                <ProductCard 
                                    id={product.id} 
                                    slug={product.slug} 
                                    name={product.name} 
                                    category={product.category}
                                    price={product.price} 
                                    image={product.image} 
                                    phone={product.phone}
                                    seller={product.seller} 
                                    description={product.description} />
                            </div>
                        )}
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
    const getAllProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
    const products = await getAllProducts.json();
    return {
        props: { products }, // will be passed to the page component as props
    };
};