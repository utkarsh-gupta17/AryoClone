import CardProject from './CardProject'
import CardTestimonial from './CardTestimonial'

const Testimonial = () => {
  return (
    <section className='overflow-x-auto scrollbar-hide'>
      <div className='flex w-[60rem] py-2 gap-2'>
        <CardTestimonial/>
        <CardTestimonial/>
        <CardTestimonial/>
        <CardTestimonial/>
      </div>
    </section>
  )
}

export default Testimonial