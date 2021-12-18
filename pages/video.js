import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import VideoCard from "../components/VideoCard";
import BackToTop from "../components/BackToTop";

const title = "Video";

export default function Video({ videos }) {

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
                    <Breadcrumb pageName="Galeri" currentPage="Video" />
                </div>

                <div className="container my-5">
                    <div className="row g-4">
                        {videos.map(video =>     
                            <div className="col-md-6" key={video.title}>
                                <VideoCard title={video.title} src={video.src} />
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
    const getDataVideos = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/video`);
    const videos = await getDataVideos.json();
    // console.log(photos)
    return {
        props: { videos }, // will be passed to the page component as props
    };
};