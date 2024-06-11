import { FaUser,FaTelegramPlane } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi";


const Navbar = () => {
  return (
    <div className='border-4 border-pink-500 flex justify-between p-4'>
      <div>
          <FaUser/>
          <p className='text-center text-sm'>Hello Utkarsh!</p>
      </div>
      <div className="flex justify-between gap-4">
        <div>
          <FaTelegramPlane className='mx-auto'/>
          <p className='text-center text-sm'>Home</p>
        </div>
        <div>
          <HiCurrencyRupee className='mx-auto'/>
          <p className='text-center text-sm'>Home</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar