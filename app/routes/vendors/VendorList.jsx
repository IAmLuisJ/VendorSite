import FeedBackForm from "~/Components/FeedbackForm";
import Header from "~/Components/Header";
import VendorCard from "~/Components/VendorCard";

const VendorList = () => {
    return (<div>
        <Header />
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <VendorCard vendorName="Company1" />
                    <VendorCard vendorName="Company2" />
                    <VendorCard vendorName="Company3" />
                    <VendorCard vendorName="Company4" />
                </div>
            </div>
        </section>

        <FeedBackForm />

    </div>);
}

export default VendorList;