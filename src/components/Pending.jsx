import { HiCurrencyRupee } from "react-icons/hi";

const Pending = () => {
  return (
    <section className='w-full flex p-0 gap-1 mt-3'>
      <div className="w-1/2 flex">
        <div className='rounded-lg bg-yellow-500 p-2 w-full flex justify-between'>
          <div className="flex-col w-2/3">
            <p className="text-xs">Pending</p>
            <p className='text-lg'><span>$</span>0.0</p>
          </div>
          <HiCurrencyRupee className="w-1/3 h-fit"/>
        </div>
      </div>
      <div className="w-1/2 flex">
        <div className='rounded-lg bg-red-500 p-2 w-full flex justify-between'>
          <div className="flex-col w-2/3">
            <p className="text-xs">Paid</p>
            <p className='text-lg'><span>$</span>0.0</p>
          </div>
          <HiCurrencyRupee className="w-1/3 h-fit"/>
        </div>
      </div>
    </section>
  )
}

export default Pending