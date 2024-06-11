import { HiCurrencyRupee } from "react-icons/hi";

const CardProject = () => {
  return (
    <div className='flex-col w-2/3'>
      <div className='rounded-lg bg-violet-400 p-2 w-full flex justify-between items-center'>
        <div className="flex-col w-2/3">
          <p className="text-xs">Tide</p>
          <p className='text-xs'>Savings Account</p>
        </div>
        <HiCurrencyRupee className="w-1/3 h-fit"/>
      </div>
      <div className='bg-violet-400 mt-1 rounded p-2'>
        <div className="flex items-baseline w-2/3 justify-between">
          <p>Earn</p>
          <HiCurrencyRupee className="h-fit"/>
          <p>750</p>
        </div>
      </div>
    </div>
  )
}

export default CardProject