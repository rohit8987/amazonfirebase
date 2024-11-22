import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Signin = () => {
    return (
        <div className="w-full">
            <div className="w-full bg-gray-100 pb-10 ">
                <form className="w-[350px] mx-auto  justify-center flex flex-col items-center" >
                    <img className=" w-40 " src="https://pngimg.com/uploads/amazon/amazon_PNG12.png" alt="" />
                    <div className="w-full -mt-8 border p-6 border-zinc-200 ">
                        <h2 className="font-titleFont text-3xl font-medium mb-4">Signin</h2>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium mb-2">Email or mobile phone number</p>
                                <input className="p-1 w-full lowercase py-1 border focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 outline-none   " type="email" placeholder="Email or mobile phone number" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium mb-2">Password</p>
                                <input className="p-1 py-1 border focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 outline-none w-full  " type="password" placeholder="xxxxxxxx" />
                            </div>
                            <button onClick={(e) => e.preventDefault()} className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5]
                        to-[#f0c14b] hover:bg-gradient-to-b border-zinc-400 active:border-yellow-800
                        active:shadow-amazonInput">Continue</button>
                        </div>
                        <p className="text-xs text-black leading-4 mt-4">By Continuing, you agree to Amazon's <span className="text-blue-400">Conditions of  Use{" "}</span> and <span>Privace Notice.</span></p>
                        <p className='text-xs text-gray-600 mt-4 cursor-pointer'>
                            <ArrowRightIcon /><span className=' text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Need help?</span>
                        </p>
                    </div>
                    
                        <p className='w-full text-xs text-gray-600 mt-4 flex items-center'>
                        <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                        <span className='w-1/3 text-center'> New to Amazon?</span>
                        <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                        </p>

                        <button onClick={(e) => e.preventDefault()} className='w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t
                        from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400
                        active:border-yellow-800 active:shadow-amazonInput '>Create your Amazon account</button>
                </form>
            </div>
            <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200">
                <div className=" flex items-center gap-6 justify-center">
                    <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100' >Conditions of Use</p>
                </div>
            </div>
        </div>
    )
}

export default Signin