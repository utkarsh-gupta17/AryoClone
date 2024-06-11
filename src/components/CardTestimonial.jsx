"use client"
import { FaUser } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const firstExample = {
  size: 20,
  value: 5,
  edit: false
};

const CardTestimonial = () => {
  return (
    <div className='w-2/3 flex-col p-4 bg-blue-400 rounded-3xl py-6'>
      <FaUser className="mx-auto" size='30'/>
      <p className='text-sm text-center p-1'>Customer Name</p>
      <p className='text-xs text-center p-1'>Business Owner</p>
      <ReactStars {...firstExample} classNames='mx-auto'/>
      <p className='text-xs text-center'>Best app to sell financial products & earn referral income. If someone is really looking forward to earn money, I would definitely recommend this app.</p>
    </div>
  )
}

export default CardTestimonial