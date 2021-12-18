import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export default function ProductCard({ id, slug, name, category, price, image, phone, seller, description }) {

    return (
        <>
            <style jsx>
                {`
                h6 {
                    font-weight: 600;
                }
                h5 {
                    font-weight: 500;
                }
            `}
            </style>

            <div className="card card-img-hover-zoom h-100 shadow-sm border-0 rounded-3">
                <Image alt={name} src={image} width={270} height={200} className="img-fluid rounded-top" />
                <div className="card-body">
                    <h6>{name}</h6>
                    <h5 className="mb-3">Rp. {price}</h5>
                    <p className="mb-0 text-14 text-secondary small">{description}</p>
                </div>
                <div className="card-footer">
                    <a href={`https://wa.me/${phone}?text=Saya%20ingin%20memesan%20${name}`} className="text-decoration-none" rel="noreferrer" target="_blank"><i className="me-2"><FaWhatsapp /></i>Pesan via Whatsapp</a>
                </div>
            </div>
        </>
    );
}