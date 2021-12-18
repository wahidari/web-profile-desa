import Head from "next/head";
import NavBarTop from "../../../components/NavBarTop";
import Breadcrumb from "../../../components/Breadcrumb";
import PostCard from "../../../components/PostCard";
import Footer from "../../../components/Footer";

export default function Kategori({ posts }) {
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
                <title>{categoryName}</title>
                <meta name="description" content="Next Bootstrap" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBarTop />

            <main>
                <div className="bg-light">
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
export async function getServerSideProps({ params }){
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