import { useState } from "react";

const CompanyContactForm = (props) => {
  const [message, setMessage] = useState();

function submitMessage() {
  setMessage(true);
  
}

  return (<div>
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Company</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please use the form below to contact our Service Partner Directly</p>
        </div>
        
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
        {message ? <div class="alert bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-black-700 inline-flex items-center w-full alert-dismissible fade show" role="alert">
            <strong class="mr-1">Message Sent! </strong> You should receive a response within 24 hours.
          <button type="button" class="btn-close box-content w-4 h-4 p-1 ml-auto text-black-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black-900 hover:opacity-75 hover:no-underline" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> : null}
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={()=>submitMessage()}>Submit</button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-blue-500" href="mailto:example@memail.com">{props.vendorEmail ? props.vendorEmail : "example2@email.com"}</a>
              <p className="leading-normal my-5">{props.companyStreet ? props.companyStreet : "49 Smith St."}
                <br />{props.companyCity ? props.companyCity : "Saint Cloud"}, {props.companyState ? props.companyState : "MN"} {props.companyZip ? props.companyZip : "56301"}
              </p>
              <span className="inline-flex">
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>)
}

export default CompanyContactForm;