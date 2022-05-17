import Review from "./Review";

const Testimonials = (props) => {
  return (<div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
        <div className="flex flex-wrap -m-4">
          {props.reviews.map(v => { return <Review key={v.id} data={v} /> })}
        </div>
      </div>
    </section>
  </div>)
}

export default Testimonials;