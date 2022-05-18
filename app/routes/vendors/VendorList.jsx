import FeedBackForm from "~/Components/FeedbackForm";
import Header from "~/Components/Header";
import VendorCard from "~/Components/VendorCard";
import superjson from 'superjson';
import { db } from "~/utils/db.server";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => {
    //search for vendor in database
    const allVendors = await db.company.findMany();
    //return vendor object in database
    return superjson.stringify(allVendors);
}

const VendorList = () => {
    const data = useLoaderData();
    const vendorList = superjson.parse(data);
    // console.log(vendorList);
    return (<div>
        <Header />
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {vendorList.map((com) => { return (<VendorCard key={com.id} vendorName={com.name} vData={com} />) })}
                </div>
            </div>
        </section>

        <FeedBackForm />

    </div>);
}

export default VendorList;