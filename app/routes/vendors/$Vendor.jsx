import { useLoaderData, useParams } from "@remix-run/react";
import CompanyContactForm from "~/Components/CompanyContactForm";
import Header from "~/Components/Header";
import MapWithContact from "~/Components/MapWithContact";
import Testimonials from "~/Components/Testimonials";
import VendorHero from "~/Components/VendorHero";

export const LoaderFunction = async ({params}) => {
    const vendor = params.Vendor;
    //search for vendor in database
    //vendorCompanyObject =  findVendor(vendorCode)
    //return vendor object in database
    return "no data".json();
}

export default function Vendor() {
    //Vendor object will contain vendor info
   const vendor = useLoaderData();
   const companyName = vendor.companyName;
   
    return(<div>
            <Header />
            <VendorHero />
            <CompanyContactForm />
            <MapWithContact />
            <Testimonials />
        </div>
          );
}