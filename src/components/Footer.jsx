import Image from 'next/image'
import { IoMdHome,IoIosLogIn } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className='flex justify-between items-center border-4 border-green-500 p-4'>
        <div>
          <IoMdHome className='mx-auto'/>
          <p className='text-center text-sm'>Home</p>
        </div>
        <div>
          <IoIosLogIn className='mx-auto'/>
          <p className='text-center text-sm'>Login</p>
        </div>
        <div>
          <SiGnuprivacyguard className='mx-auto'/>
          <p className='text-center text-sm'>Signup</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer