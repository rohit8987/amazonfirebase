
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errEmail, setErrEmail] = useState("")
    const [errPassword, setErrPassword] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setErrEmail("")
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setErrPassword("")
    }

   

    const handleLogin = (e) => {
        e.preventDefault()
        if (!email) {
            setErrEmail("Enter your email")
        }

        if (!password) {
            setErrPassword("Enter your password")
        }
        if(email && password){
            console.log(email,password)
            setEmail("")
            setPassword("")
        }
        
    }
    return (
        <div className="w-full">
            <div className="w-full bg-gray-100 pb-10 ">
                <form className="w-[350px] mx-auto  justify-center flex flex-col items-center" >
                    <img className=" w-40 " src="https://pngimg.com/uploads/amazon/amazon_PNG12.png" alt="" />
                    <div className="w-full -mt-8 border p-6 border-zinc-200 rounded-md ">
                        <h2 className="font-titleFont text-3xl font-medium mb-4">Signin</h2>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium mb-2">Email or mobile phone number</p>
                                <input onChange={handleEmail} value={email} className="p-1 w-full  py-1 border focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 outline-none   " type="email" placeholder="" />
                                {
                                    errEmail && (
                                        <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                                            <span className='italic font-titleFont  '>!</span> {errEmail}
                                        </p>
                                    )
                                }
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium mb-2">Password</p>
                                <input onChange={handlePassword} value={password} className="p-1 py-1 border focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 outline-none w-full  " type="password" placeholder="" />
                                {
                                    errPassword && (
                                        <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                                            <span className='italic font-titleFont  '>!</span> {errPassword}
                                        </p>
                                    )
                                }
                            </div>
                            <button onClick={handleLogin} className="w-full py-1.5 text-sm font-normal bg-gradient-to-t from-[#f7dfa5]
                        to-[#f0c14b] hover:bg-gradient-to-b border-zinc-400 active:border-yellow-800
                        active:shadow-amazonInput rounded-md">Continue</button>
                        </div>
                        <p className="text-xs text-black leading-4 mt-4">By Continuing, you agree to Amazon's <span className="text-blue-400">Conditions of  Use{" "}</span> and <span>Privace Notice.</span></p>
                        <p className='text-xs text-gray-600 mt-4 cursor-pointer'>
                            <ArrowRightIcon /><span className=' text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Need help?</span>
                        </p>
                        <hr />
                        <p className='text-sm text-black leading-4 mt-4 flex-col flex gap-2'>Buying for work? <span className=' text-blue-500 hover:text-orange-600 
                        hover:underline underline-offset-1 cursor-pointer duration-100'>shop on Amazon Business</span> </p>
                    </div>

                    <p className='w-full text-xs text-gray-600 mt-4 flex items-center'>
                        <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                        <span className='w-1/3 text-center'> New to Amazon?</span>
                        <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                    </p>

                    <Link className='w-full' to="/registration">
                        <button className='w-full py-1.5 p-12 mt-4 text-sm font-normal rounded-md bg-gradient-to-t
                        from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400
                        active:border-yellow-800 active:shadow-amazonInput '>Create your Amazon account
                        </button>
                    </Link>
                </form>
            </div>
            <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex justify-center items-center gap-4 flex-col">
                <div className=" flex items-center gap-6 justify-center mt-10">
                    <p className='text-xs text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100' >Conditions of Use</p>
                    <p className='text-xs text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100' >Privacy Notice</p>
                    <p className='text-xs text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100' >Privacy Notice</p>
                </div>
                <p className='text-xs text-gray-600'>© 1996-2024, Amazon.com, Inc. or its affiliates </p>
            </div>
        </div>
    )
}

export default Signin