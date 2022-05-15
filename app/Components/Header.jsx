
export default function Header() {
    return (
        <header className="text-white body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-700">
                <img src="/images/bestbuyheader.PNG" alt="bannerImage" />
                <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
                    <a className="mt-5 mr-5 hover:text-gray-900" href="./">Home</a>
                    <a className="mt-5 mr-5 hover:text-gray-900" href="./">Vendor List</a>
                    <a className="mt-5 mr-5 hover:text-gray-900" href="./VendorDetail">Vendor Detail</a>
                </nav>
            </div>
        </header>
    );
}
