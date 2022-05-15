
const Map = () => {
    return (
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Best%20Buy%20Appliances&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                    <p className="mt-1">12161 Folsom Blvd, Suite D, Rancho Cordova, CA 95741</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a className="text-blue-500 leading-relaxed" href='mailto:example@email.com'>example@email.com</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <p className="leading-relaxed">123-456-7890</p>
                </div>
            </div>
        </div>
    )
}

export default Map;