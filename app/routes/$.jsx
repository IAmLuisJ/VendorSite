import { useParams } from "@remix-run/react";
import Header from "~/Components/Header";

export function loader({ params }) {

    return null;
}

export default function Splat() {
    const params = useParams();
    const leftover = params["*"];
    return (<div>
        <Header />
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Sorry We could not find a provider under {leftover}
                    <br class="hidden sm:block" />Please double check the link or use our <a className="text-blue-600 hover:text-blue-900 hover:underline" href="./">Vendor list</a>
                </h1>
            </div>
        </section>
    </div>);
}