import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import BackToTop from "../components/BackToTop";

const title = "Bumdes";

export default function Bumdes({products}) {
    return (
        <>
            <style jsx>
                {`
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
                    <Breadcrumb pageName="Bumdes" currentPage="Bumdes" />
                </div>

                <div className="container my-5">
                    <div className="row g-4">
                        {products.map(product =>
                            <div className="col-sm-6 col-md-6 col-lg-3" key={product.id}>
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
export async function getServerSideProps() {
    const getAllProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
    const products = await getAllProducts.json();
    return {
        props: { products }, // will be passed to the page component as props
    };
};