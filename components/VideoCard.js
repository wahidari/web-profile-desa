import Image from "next/image"
import Link from "next/link"
import { FaUser, FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";

export default function VideoCard({ title, src }) {

    return (
        <>
            <style jsx>{`
                .embed-responsive {
                    position: relative;
                    display: block;
                    width: 100%;
                    padding: 0;
                    overflow: hidden;
                }

                .embed-responsive-item,
                .embed-responsive iframe {
                    top: 0;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 290px;
                    border: 0;
                }
            `}</style>

            <div className="embed-responsive">
                <iframe src={src} className="rounded"
                    title={title} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </>
    );
}