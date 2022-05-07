
export default function Header() {
    return(
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <img src="/images/bestbuyheader.png" alt="bannerImage"/>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900" href="./">Home</a>
                        <a className="mr-5 hover:text-gray-900" href="./">Vendor List</a>
                        <a className="mr-5 hover:text-gray-900" href="./VendorDetail">Vendor Detail</a>
                    </nav>
                </div>
            </header>
        </div>
    );
}
