import { Link } from "@remix-run/react";

const searchTemplateURL = "https://www.bestbuy.com/site/searchpage.jsp?st=XXXXXX&_dyncharset=UTF-8&_dynSessConf=&id=pcat17071&type=page&sc=Global&cp=1&nrp=&sp=&qp=&list=n&af=true&iht=y&usc=All+Categories&ks=960&keys=keys"

const redirectToSearch = () => {
    let newURL = searchTemplateURL
    const textBox = document.getElementById("searchBox")
    if (textBox) {
        const encodedSearchTerm = window.encodeURIComponent(textBox.value)
        newURL = newURL.replace('XXXXXX', encodedSearchTerm)
        window.location = newURL
    }
}
export default function Header() {
    return (
        <header className="text-white body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-700">
                <a href="https://www.bestbuy.com/" style={{margin: "0 20px 0 20px"}}>
                <img class="block" src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/BestBuy_Logo_2020-190616.png;maxHeight=80;maxWidth=136" alt="BestBuy.com" height="40" width="68"/>
                </a>
                <nav className="flex flex-wrap items-center text-lg justify-center">
                    <Link className="text-center mr-5 hover:text-gray-900" to="/">Home</Link>
                    <Link className="text-center mr-5 hover:text-gray-900" to="/vendors/vendorlist">Vendor List</Link>
                    <Link className="mr-5 hover:text-gray-900" to="/VendorDetail">Vendor Detail</Link>
                </nav>
                
                <div class="search" style={{color: "#333333", overflow:"auto", marginLeft:"75px"}}>
                    <input type="text" id="searchBox" class="searchTerm" placeholder="Search Best Buy" style={{width:"600px", height:"35px", paddingLeft:"10px" ,borderRadius: "4px"}}/>
                    <button type="submit" class="searchButton" style={{display:"inline-block", top:"5px", left: "-30px", position:"relative", padding:"3px"}} onClick={redirectToSearch}>
                        <span class="fa fa-search">
                            <svg aria-hidden="true" role="img" viewBox="0 0 100 100" width="22" height="22" fill="#0046be"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve"><path d="m28.15 26.7-7.03-7.02a9.93 9.93 0 1 0-17.6-6.29 9.93 9.93 0 0 0 16.22 7.67l7.03 7.03a.97.97 0 0 0 1.38 0c.38-.38.38-1 0-1.38zM5.48 13.4a7.98 7.98 0 1 1 15.95.02 7.98 7.98 0 0 1-15.95-.02z"></path></svg></svg>
                        </span>
                    </button>
                </div>

            </div>
        </header>
    );
}