import { redirect } from "@remix-run/node";
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
    const thisVendor = await db.company.findUnique({ where: { companyCode: vendorCode }, include: { reviews: { where: { published: true }, } } });
    if (!thisVendor) {
        return redirect("../" + vendorCode);
    }
    //console.log(thisVendor);
    return superjson.stringify(thisVendor);
}

export default function Vendor() {
    //Vendor object will contain vendor info
    const data = useLoaderData();
    const vendor = superjson.parse(data);
    console.log(vendor);

    //TODO: pass Testimonial info down


    return (<div>
        <Header />
        <VendorHero
            vendorName={vendor.name ? vendor.name : "Company name"}
            vendorInfo={vendor.companyInfo ? vendor.companyInfo : "Company Info"}
            vendorContent={vendor.content ? vendor.content : "Additional Information about the provider and background, experience, installation services offered, or any other relevant info can go here.Additional Information about the provider and background, experience, installation services offered, or any other relevant info can go here.Additional Information about the provider and background, experience, installation services offered, or any other relevant info can go here."}
            vendorURL={vendor.companyURL ? vendor.companyURL : `/vendors/${vendor.companyCode}`}
            vendorLogo={vendor.logoPath ? vendor.logoPath : "https://dummyimage.com/1200x500"}
        />
        <CompanyContactForm
            vendorEmail={vendor.email}
            companyStreet={vendor.streetAddress}
            companyState={vendor.stateAddress}
            companyCity={vendor.cityAddress}
            companyZip={vendor.zipAddress}
        />
        <MapWithContact
            vendorEmail={vendor.email}
            companyStreet={vendor.streetAddress}
            companyState={vendor.stateAddress}
            companyCity={vendor.cityAddress}
            companyZip={vendor.zipAddress}
            companyPhone={vendor.phoneNumber}
        />
        <Testimonials />
    </div>
    );
}