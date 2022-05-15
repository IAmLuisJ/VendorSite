import { Link } from "@remix-run/react";

export default function Header() {
    return (
        <header className="text-white body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-700">
                <img src="/images/bestbuyheader.PNG" alt="bannerImage" />
                <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
                    <Link className="mt-5 mr-5 hover:text-gray-900" to="/">Home</Link>
                    <Link className="mt-5 mr-5 hover:text-gray-900" to="/vendors/vendorlist">Vendor List</Link>
                    <Link className="mt-5 mr-5 hover:text-gray-900" to="/VendorDetail">Vendor Detail</Link>
                </nav>
            </div>
        </header>
    );
}
