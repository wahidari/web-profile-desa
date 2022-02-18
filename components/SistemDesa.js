import Link from "next/link";

export default function SistemDesa() {

    return (
        <>
            <style jsx>{`
                .icon-shape {
                    width: 4rem;
                    height: 4rem;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .icon-shape .icon-sm {
                    width: 3.275rem;
                    height: 3.275rem;
                }

                .icon-shape-danger {
                    color: #e11d48;
                    background-color: rgba(225, 29, 72, 0.3);
                }

                .icon-shape-purple {
                    color: #7c3aed;
                    background-color: rgba(124, 58, 237, 0.3);
                }

                .icon-shape-success {
                    color: #10b981;
                    background-color: rgba(16, 185, 129, 0.3);
                }

                .icon-shape-warning {
                    color: #fba918;
                    background-color: rgba(251, 169, 24, 0.3);
                }
                .card-link:hover {
                    transition: all 1s ease;
                }
                .card-link:hover {
                    transition: box-shadow 0.5s ease; /* Animation */
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
                }

                .card-link:hover .card-title {
                    color: #0d6efd;
                    transition: color 0.7s ease-out;
                }
            `}</style>

            <section>
                <div className="container-fluid py-5 my-5">
                    <h2 className="text-center text-color-primary">Aplikasi Desa</h2>
                    <p className="text-center text-color-secondary text-subtitle">Berikut Adalah Beberapa Aplikasi di Desa Kami</p>
                    <div className="container mt-5">
                        <div className="row gx-3 gy-3">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card bg-card-primary border-0 shadow-sm card-link h-100" data-aos="fade-up" data-aos-duration="500">
                                    <Link href="/lapak">
                                        <a className="stretched-link" aria-label="Bumdes"></a>
                                    </Link>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-shape icon-sm icon-shape-purple rounded me-3"><svg
                                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z">
                                                </path>
                                            </svg></div>
                                            <div className="d-block">
                                                <h4 className="mb-0 text-color-primary">BUMDES</h4>
                                                <label className="mb-0 text-color-tertiary">Usaha Desa</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card bg-card-primary border-0 shadow-sm card-link h-100" data-aos="fade-up" data-aos-duration="1000">
                                    <a href="https://web-anjungan-desa.vercel.app" className="stretched-link" aria-label="Pengaduan" rel="noreferrer" target="_blank"></a>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-shape icon-sm icon-shape-danger rounded me-3"><svg
                                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
                                                    clipRule="evenodd"></path>
                                            </svg></div>
                                            <div className="d-block">
                                                <h4 className="mb-0 text-color-primary">E-ADUAN</h4>
                                                <label className="mb-0 text-color-tertiary">Pengaduan Online</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card bg-card-primary border-0 shadow-sm card-link h-100" data-aos="fade-up" data-aos-duration="1500">
                                    <a href="https://web-anjungan-desa.vercel.app" className="stretched-link" aria-label="Surat" rel="noreferrer" target="_blank"></a>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center align-center">
                                            <div className="icon-shape icon-sm icon-shape-success rounded me-3">
                                                <svg className="icon icon-sm text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                                    <path fillRule="evenodd"
                                                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                                        clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <div className="d-block">
                                                <h4 className="mb-0 text-color-primary">E-LETTER</h4>
                                                <label className="mb-0 text-color-tertiary">Pengajuan Surat</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card bg-card-primary border-0 shadow-sm card-link h-100" data-aos="fade-up" data-aos-duration="2000">
                                    <a href="https://web-anjungan-desa.vercel.app" className="stretched-link" aria-label="Kesehatan" rel="noreferrer" target="_blank"></a>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-shape icon-sm icon-shape-warning rounded me-3">
                                                <svg className="dropdown-icon text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                        clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <div className="d-block">
                                                <h4 className="mb-0 text-color-primary">E-HEALTH</h4>
                                                <label className="mb-0 text-color-tertiary">Info Kesehatan</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    );
}