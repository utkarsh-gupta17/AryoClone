import Image from 'next/image'
import Link from 'next/link';
import { IoMdHome,IoIosLogIn } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className='flex justify-between items-center border-4 border-green-500 p-4'>
        <Link href='/'>
          <IoMdHome className='mx-auto'/>
          <p className='text-center text-sm'>Home</p>
        </Link>
        <Link href='/login'>
          <IoIosLogIn className='mx-auto'/>
          <p className='text-center text-sm'>Login</p>
        </Link>
        <Link href='/signup'>
          <SiGnuprivacyguard className='mx-auto'/>
          <p className='text-center text-sm'>Signup</p>
        </Link>
      </div>
    </footer>
  )
}

export default Footer