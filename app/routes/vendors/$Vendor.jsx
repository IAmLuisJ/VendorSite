import { useLoaderData } from "@remix-run/react";
import superjson from 'superjson';
import CompanyContactForm from "~/Components/CompanyContactForm";
import Header from "~/Components/Header";
import MapWithContact from "~/Components/MapWithContact";
import Testimonials from "~/Components/Testimonials";
import VendorHero from "~/Components/VendorHero";
import { db } from "~/utils/db.server";


export const loader = async ({ params }) => {
    const vendorCode = params.Vendor;
    console.log("vCode is ", vendorCode);
    //search for vendor in database
    //const allVendors = await db.company.findMany();
    const thisVendor = await db.company.findUnique({ where: { companyCode: vendorCode } });
    console.log(thisVendor);
    //vendorCompanyObject =  findVendor(vendorCode)
    //return vendor object in database
    return superjson.stringify(thisVendor);
}

export default function Vendor() {
    //Vendor object will contain vendor info
    const data = useLoaderData();
    const vendor = superjson.parse(data);
    console.log(vendor.companyCode);
    //const companyName = vendor.companyName;

    return (<div>
        <Header />
        <VendorHero vendorName={vendor.name} vendorInfo={vendor.content} />
        <CompanyContactForm />
        <MapWithContact />
        <Testimonials />
    </div>
    );
}