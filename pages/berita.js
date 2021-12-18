import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import PostCard from "../components/PostCard";
import BackToTop from "../components/BackToTop";

const title = "Berita";

export default function Berita({posts}) {
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
                    <Breadcrumb pageName="Berita" currentPage="Berita" />
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

            <BackToTop />
        </>
    );
};

// This gets called on every request to this page
export async function getServerSideProps() {
    const getAllPosts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`);
    const posts = await getAllPosts.json();
    return {
        props: { posts }, // will be passed to the page component as props
    };
};