import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBarTop from "../../components/NavBarTop";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";
import AgendaList from "../../components/AgendaList";
import BackToTop from "../../components/BackToTop";
import { FaUser, FaRegCalendarAlt } from "react-icons/fa";

export default function BlogDetail({ post, randomPosts, randomAgendas }) {
    // console.log(post.author)
    // console.log(randomPosts)
    // Get 3 post
    const someRandomPosts = randomPosts.slice(0, 3);
    // Get 3 agenda
    const someRandomAgendas = randomAgendas.slice(0, 2);

    return (
        <>
            <style jsx>
                {`
                main {
                    
                }
                .card-title {
                    font-weight: 500;
                }
                .shadow-blog {
                    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
                }
                .blog-meta .icon {
                    font-size: 15px;
                    color: #495057;
                }
                .blog-meta {
                    font-size: 14px;
                    text-decoration: none;
                    color: #495057;
                }
                .card-text {
                    color: #495057;
                    font-size: 16px;
                }
            `}
            </style>

            <Head>
                <title>{`${post.title} - Next Bootstrap`}</title>
                <meta name="description" content="Next Bootstrap" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBarTop />

            <main>
                <div className="container py-5">
                    <div className="row g-5">

                        {/* Start Main Content */}
                        <div className="col-lg-8">
                            <div className="card shadow-blog border-0">
                                <Image
                                    alt="Image"
                                    src={post.image}
                                    width="450"
                                    height="400"
                                    className="card-img-top img-fluid"
                                />
                                <div className="card-body">
                                    <h3 className="card-title">{post.title}</h3>
                                    <div className="d-flex blog-meta py-2">
                                        <div className="me-3">
                                            <i className="me-2 icon"><FaUser /></i>
                                            {post.author}
                                        </div>
                                        <div>
                                            <i className="me-2 icon"><FaRegCalendarAlt /></i>
                                            {post.date}
                                        </div>
                                    </div>
                                    <p className="card-text mt-2">{post.body}</p>
                                </div>
                            </div>
                        </div>
                        {/* End Main Content */}

                        {/* Start Right Content */}
                        <div className="col-lg-4">
                            <div className="card shadow-blog border-0 px-3 py-2">
                                <h5 className="mb-3">Random Posts</h5>
                                {someRandomPosts.map(item =>
                                    <div key={item.id}>
                                        <PostList
                                            id={item.id}
                                            image={item.image}
                                            title={item.title}
                                            slug={item.slug}
                                            date={item.date}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="card shadow-blog border-0 px-3 py-2 mt-4">
                                <h5 className="mb-3">Categories</h5>
                                <ul className="list-group border-0">
                                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                                        <Link href="/berita/kategori/berita">
                                            <a className="text-decoration-none">Berita</a>
                                        </Link>
                                        <span className="badge bg-primary rounded-pill">7</span>
                                    </li>
                                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                                        <Link href="/berita/kategori/kesehatan">
                                            <a className="text-decoration-none">Kesehatan</a>
                                        </Link>
                                        <span className="badge bg-primary rounded-pill">5</span>
                                    </li>
                                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                                        <Link href="/berita/kategori/acak">
                                            <a className="text-decoration-none">Acak</a>
                                        </Link>
                                        <span className="badge bg-primary rounded-pill">3</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="card shadow-blog border-0 px-3 py-2 mt-4">
                                <h5 className="mb-3">Latest Agenda</h5>
                                {someRandomAgendas.map(item =>
                                    <div key={item.id}>
                                        <AgendaList
                                            id={item.id}
                                            image={item.image}
                                            title={item.title}
                                            slug={item.slug}
                                            date={item.date}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* End Right Content */}
                    </div>
                </div>
            </main>

            <Footer />

            <BackToTop />
        </>
    );
};

// This gets called on every request to this page
export async function getServerSideProps({ params }) {
    // console.log(params.slug)
    // Call external API from here directly using slug params in route url
    // For single detail post 
    const getSinglePost = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/${params.slug}`);
    const post = await getSinglePost.json();
    // For random post
    const getRandomPost = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`);
    const randomPosts = await getRandomPost.json();
    // For random agenda
    const getRandomAgenda = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/agenda`);
    const randomAgendas = await getRandomAgenda.json();
    // console.log(getSinglePost.status)
    // handle detail not found to 404 page
    if (getSinglePost.status == 404) {
        return {
            notFound: true,
        };
    }
    return {
        props: { post, randomPosts, randomAgendas },
    };
};