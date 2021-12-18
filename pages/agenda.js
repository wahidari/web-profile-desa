import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import AgendaCard from "../components/AgendaCard";
import BackToTop from "../components/BackToTop";

const title = "Agenda";

export default function Agenda({agendas}) {
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
export async function getServerSideProps() {
    const getAllAgenda = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/agenda`);
    const agendas = await getAllAgenda.json();
    return {
        props: { agendas }, // will be passed to the page component as props
    };
};