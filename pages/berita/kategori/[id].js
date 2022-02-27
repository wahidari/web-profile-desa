import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../../../components/NavBarTop";
import Breadcrumb from "../../../components/Breadcrumb";
import PostCard from "../../../components/PostCard";
import Footer from "../../../components/Footer";

export default function Kategori({ posts }) {
    let [namaDesa, setNamaDesa] = useState("Alang Alang");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
    });

    const categoryName = capitalizeString(posts[0].category);
    
    return (
        <>
            <style jsx>
                {`
                main {
                    
                }
            `}
            </style>

            <Head>
                <title>{`Kategori ${categoryName} - ${namaDesa}`}</title>
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
                    <Breadcrumb pageName={categoryName} currentPage={categoryName} />
                </div>

                <div className="container my-5">
                    <div className="row g-4">
                        {posts.map(post =>
                            <div className="col-sm-6 col-md-6 col-lg-4" key={post.id}>
                                <PostCard
                                    id={post.id}
                                    image={post.image}
                                    title={post.title}
                                    slug={post.slug}
                                    author={post.author}
                                    date={post.date}
                                    excerpt={post.excerpt} />
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

// This gets called on every request to this page
export async function getServerSideProps({ params, res }){
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    // For get post by category 
    const getPostByCategory = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/category/${params.id}`);
    const posts = await getPostByCategory.json();
    // will be passed to the page component as props
    return {
         props: { posts }
    };
};

function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};