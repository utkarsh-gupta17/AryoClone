import Image from "next/image"

const page = () => {
  return (
    <div className="px-1 overflow-auto h-[46rem] flex justify-center items-center">
      <div className="py-8 flex-col justify-center items-center px-2">
        <Image src='/aryo.png' width='200' height='50' className="mx-auto mb-8" />
        <p className="text-center p-3">Log in <span className="text-slate-500">or</span> Sign up</p>
        <div className="flex w-2/3">
          <form action="" className="p-4" width='14rem'>
            <label htmlFor="" className="border-4 bg-blue-600">
              <input type="text" width='5px' placeholder="Enter Username" size='18' className="mb-4 rounded-lg"/>
            </label>
            <label htmlFor="" className="border-4 bg-blue-600 mt-4">
              <input type="password" width='5px' placeholder="Enter Password" size='18' className="mb-4 rounded-lg"/>
            </label>
          </form>
        </div>
        <button className="w-full mx-auto rounded-md bg-blue-500 text-white mt-8 py-2">LOGIN</button>
      </div>
    </div>
  )
}

export default page