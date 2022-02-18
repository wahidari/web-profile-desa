import Link from "next/link"
import Image from "next/image"
import imgLogo from "../public/logo.png"

export default function Breadcrumb({pageName, currentPage}) {

    return (
        <> 
            <style jsx>{`
                .breadcrumb {
                    margin-bottom: 0;
                }
                .breadcrumb a {
                    font-size: 15px;
                    text-decoration: none;
                }
            `}</style>

            <div className="container py-3 d-flex justify-content-between align-items-center">
                {/* <h5 className="my-0">{pageName}</h5> */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb me-2">
                        <li className="breadcrumb-item">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active text-color-tertiary" aria-current="page">{currentPage}</li>
                    </ol>
                </nav>
            </div>
        </>
    );
}