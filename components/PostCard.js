import Image from "next/image"
import Link from "next/link"
import { FaUser, FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";

export default function PostCard({ id, image, title, slug, author, date, excerpt }) {

    return (
        <>
            <style jsx>{`
                .card-link:hover {
                    transition: box-shadow 0.5s ease; /* Animation */
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px !important;
                    transition: all 0.7s ease-out;
                }
                .card-link:hover .card-title {
                    color: #0d6efd;
                    transition: color 0.7s ease-out;
                }
                .stretched-link {
                    color: #212529;
                    text-decoration: none;
                    font-weight: 500;
                }
                .shadow-card {
                    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
                }
                .blog-meta {
                    font-size: 14px;
                    color: #495057;
                }
                .card-text {
                    color: #495057;
                    font-size: 15px;
                }
                .mt-n1 {
                    margin-top: -2px;
                }
            `}</style>

            <article className="card card-link shadow-card border-0 h-100">
                <Image
                    alt="Post Image"
                    src={image}
                    width="350"
                    height="200"
                    quality={90}
                    className="img-fluid rounded"
                />
                <div className="card-body">
                    
                    <Link href={`/berita/${slug}`}>
                        <a className="stretched-link"><h5 className="card-title">{title}</h5></a>
                    </Link>
                    <div className="d-flex blog-meta py-2">
                        <div className="me-3 d-flex">
                            <i className="me-2 mt-n1"><FaUser /></i>
                            {author}
                        </div>
                        <div className="d-flex">
                            <i className="me-2 mt-n1"><FaRegCalendarAlt /></i>
                            {date}
                        </div>
                    </div>
                    <p className="card-text mt-2">{excerpt}</p>
                </div>
            </article>
        </>
    );
}