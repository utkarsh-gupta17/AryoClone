import { FaTelegramPlane,FaInstagramSquare,FaFacebookF,FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='w-full bg-blue-400 flex-col items-center py-3 rounded-lg'>
      <h1 className='text-center font-bold'>FOLLOW US:</h1>
      <div className="flex justify-between w-2/3 mx-auto gap-4 items-center">
        <div className="bg-white rounded-lg overflow-visible p-1">
          <FaTelegramPlane color="blue" size='30'/>
        </div>
        <div className="bg-white rounded-lg overflow-visible p-1">
          <FaInstagramSquare color="blue" size='30'/>
        </div>
        <div className="bg-white rounded-lg overflow-visible p-1">
          <FaFacebookF color="blue" size='30'/>
        </div>
        <div className="bg-white rounded-lg overflow-visible p-1">
          <FaLinkedinIn color="blue" size='30'/>
        </div>
      </div>
    </div>
  )
}




export default SocialMedia