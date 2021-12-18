import Image from "next/image"
import Link from "next/link"
import { FaRegCalendarAlt } from "react-icons/fa";

export default function AgendaList({ id, image, title, slug, date }) {

    return (
        <>
            <style jsx>{`
                .random-post a {
                    font-weight: 500;
                    text-decoration: none;
                    color: #212529;
                }
                .random-post a:hover {
                    color: #0d6efd;
                }
                .font-13 {
                    font-size: 13px;
                }
            `}</style>

            <div className="card border-0 my-2">
                <div className="row random-post">
                    <div className="col-4">
                        <Image
                            alt="Image post"
                            src={image}
                            width="200"
                            height="160"
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-8 px-0">
                        <Link href={`/agenda/${slug}`}>
                            <a className="stretched-link">{title}</a>
                        </Link>
                        <div className="d-flex align-items-center mt-1">
                            <i className="me-2 font-13"><FaRegCalendarAlt /></i>
                            <p className="text-muted small mb-0">{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}