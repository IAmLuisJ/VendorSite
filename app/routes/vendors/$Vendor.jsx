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
    //search for vendor in database
    //const allVendors = await db.company.findMany();
    const thisVendor = await db.company.findUnique({ where: { companyCode: vendorCode } });
    //console.log(thisVendor);
    return superjson.stringify(thisVendor);
}

export default function Vendor() {
    //Vendor object will contain vendor info
    const data = useLoaderData();
    const vendor = superjson.parse(data);
    //TODO: Pass in image or path to vendorHero
    //TODO: pass in company email to contact form
    //TODO: pass additional info to mapWithContact
    //TODO: pass Testimonial info down


    return (<div>
        <Header />
        <VendorHero vendorName={vendor.name} vendorInfo={vendor.content} />
        <CompanyContactForm />
        <MapWithContact />
        <Testimonials />
    </div>
    );
}