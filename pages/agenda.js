import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import AgendaCard from "../components/AgendaCard";
import BackToTop from "../components/BackToTop";

const title = "Agenda";

export default function Agenda({agendas}) {
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
                    <Breadcrumb pageName="Agenda" currentPage="Agenda" />
                </div>

                <div className="container my-5">
                    <div className="row g-4">
                        {agendas.map(agenda =>
                            <div className="col-lg-6" key={agenda.id}>
                                <AgendaCard 
                                    id={agenda.id} 
                                    slug={agenda.slug}
                                    image={agenda.image} 
                                    title={agenda.title} 
                                    location={agenda.location}
                                    date={agenda.date} 
                                    time={agenda.time}  />
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
    const getAllAgenda = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/agenda`);
    const agendas = await getAllAgenda.json();
    return {
        props: { agendas }, // will be passed to the page component as props
    };
};