import { useLoaderData } from "@remix-run/react";
import CompanyContactForm from "~/Components/CompanyContactForm";
import Header from "~/Components/Header";
import MapWithContact from "~/Components/MapWithContact";
import Testimonials from "~/Components/Testimonials";
import VendorHero from "~/Components/VendorHero";
import { db } from "~/utils/db.server";


export const LoaderFunction = async ({ params }) => {
    //const vendorCode = params.Vendor;
    //search for vendor in database
    const allVendors = await db.company.findMany();
    console.log(allVendors);
    //vendorCompanyObject =  findVendor(vendorCode)
    //return vendor object in database
    return allVendors;
}

export default function Vendor() {
    //Vendor object will contain vendor info
    const vendor = useLoaderData();
    console.log(vendor);
    //const companyName = vendor.companyName;

    return (<div>
        <Header />
        <VendorHero />
        <CompanyContactForm />
        <MapWithContact />
        <Testimonials />
    </div>
    );
}