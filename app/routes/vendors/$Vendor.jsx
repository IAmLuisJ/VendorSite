import { useParams } from "@remix-run/react";
import CompanyContactForm from "~/Components/CompanyContactForm";
import Header from "~/Components/Header";
import MapWithContact from "~/Components/MapWithContact";
import Testimonials from "~/Components/Testimonials";
import VendorHero from "~/Components/VendorHero";

export const LoaderFunction = async ({params}) => {
    const vendor = params.Vendor;
    return "no data".json();
}

export default function Vendor() {
    const params = useParams();
    const vendorName = params.Vendor;
    return(<div>
            <Header />
           
            <VendorHero />
            <CompanyContactForm />
            <MapWithContact />
            <Testimonials />
        </div>
          );
}