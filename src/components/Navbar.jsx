import { FaUser,FaTelegramPlane } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi";


const Navbar = () => {
  return (
    <div className='flex justify-between p-4'>
      <div>
          <FaUser/>
          <p className='text-center text-xs'>Hello Utkarsh!</p>
      </div>
      <div className="flex justify-between gap-4">
        <div>
          <FaTelegramPlane className='mx-auto'/>
          <p className='text-center text-xs'>Telegram</p>
        </div>
        <div>
          <HiCurrencyRupee className='mx-auto'/>
          <p className='text-center text-xs'>Earnings</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar