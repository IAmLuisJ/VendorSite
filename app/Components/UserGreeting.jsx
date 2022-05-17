
const UserGreeting = (props) => {
  return (<div>
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Hello, we recongnized you by </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{props.request_headers_user_agent}</p>
        </div>

      </div>
    </section>
  </div>)
}

export default UserGreeting;