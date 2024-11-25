
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { useState } from 'react';
import { Link } from 'react-router-dom';



const Registration = () => {
  const [clientName, setClientName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")


  const [errClientName, setErrClientName] = useState("")
  const [errEmail, setErrEmail] = useState("")
  const [errPassword, setErrPassword] = useState("")
  const [errCPassword, setErrCPassword] = useState("")

  const handleName=(e)=>{
    setClientName(e.target.value)
    setErrClientName("")
    
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
    setErrEmail("")
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
    setErrPassword("")
  }
  const handleCPassword=(e)=>{
    setCPassword(e.target.value)
    setErrCPassword("")
  }

  const emailValidation = (email)=>{
   return String(email)
   .toLowerCase()
   .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
  }


const handleRegistration =(e)=>{
  e.preventDefault()
  if(!clientName){
    setErrClientName("Enter your name")
  }
  if(!email){
    setErrEmail("Enter your email")
  }
  else{
    if(!emailValidation (email)){
      setErrEmail("Enter a valid email")
    }
  }
  if(!password){
    setErrPassword("Enter your password")
  }
  else{
    if(password.length < 6){
      setErrPassword("Passwords must be at least 6 characters")
    }
  }
  if(!cPassword){
    setErrCPassword("Confirm your password")
  } else{
    if(password !== cPassword){
      setErrCPassword("Password not matched")
    }
  }
    if(clientName && email && emailValidation(email) && password && password.length >=6 && cPassword === password){
      console.log(clientName, email,password,cPassword)
      setClientName("")
      setEmail("")
      setPassword("")
      setCPassword("")

    }
  }



  return (
    <div className='w-full'>
      <div className="w-full bg-gray-100 pb-5 ">
        <form className='w-[350px] mx-auto  justify-center flex flex-col items-center' >
          <img className=" w-40" src="https://pngimg.com/uploads/amazon/amazon_PNG12.png" alt="" />
          <div className="w-full -mt-8 border border-zinc-200 p-6 rounded-md">
            <h2 className="font-titleFont text-2xl font-medium mb-4">Create Account</h2>
            <div className="flex flex-col gap-3 ">
              <div className="flex flex-col gap-2 ">
                <p className='text-sm font-medium '>Your name</p>
                <input onChange ={handleName} value={clientName} className='p-1 py-1 border focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 outline-none w-full ' type="text" placeholder='' />
                {
                  errClientName && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                     <span className='italic font-titleFont  '>!</span> {errClientName}
                    </p>
                  )
                }
              </div>
              <div className="flex flex-col gap-2">
                <p className='text-sm font-medium '>Email </p>
                <input  onChange={handleEmail} value={email} className='p-1 py-1 border focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 outline-none w-full ' type="email" placeholder='' />
                {
                  errEmail && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                     <span className='italic font-titleFont  '>!</span> {errEmail}
                    </p>
                  )
                }
              </div>
              <div className="flex flex-col gap-2">
                <p className='text-sm font-medium '>Password</p>
                <input onChange={handlePassword} value={password} className='p-1 py-1 border focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 outline-none w-full ' type="password" placeholder='' />
                {
                  errPassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                     <span className='italic font-titleFont  '>!</span> {errPassword}
                    </p>
                  )
                }
              </div>
              <div className="flex flex-col gap-2">
                <p className='text-sm font-medium '>Re-enter Password</p>
                <input onChange={handleCPassword} value={cPassword} className='p-1 py-1 border focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 outline-none w-full ' type="password" placeholder='' />
                {
                  errCPassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                     <span className='italic font-titleFont  '>!</span> {errCPassword}
                    </p>
                  )
                }
              </div>
              <p className='text-xs text-gray-800 p-2'>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply. </p>
              <button onClick={handleRegistration} className="w-full py-1.5 text-sm font-normal bg-gradient-to-t from-[#f7dfa5]
                        to-[#f0c14b] hover:bg-gradient-to-b border-zinc-400 active:border-yellow-800
                        active:shadow-amazonInput rounded-md ">Verify Email number</button>

              <hr className='mt-2'/>
              <p className='text-sm text-black leading-4 mt-2 flex-col flex gap-2'>Buying for work?
                <span className=' text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Create a free business account</span>
                 </p>
                 <hr className='bg-gradient-to-t from-white via-white to-zinc-200 flex justify-center items-center gap-4 flex-col'/>
                 <div className=" gap-5 flex flex-col">
                  <p className='text-xs'> Already have an account?
                   <Link to="/signin">  <span className=' text-blue-500 cursor-pointer'>Sign in <ArrowRightIcon className=' text-blue-500'/></span></Link>
                     </p>
                  <p className='text-xs'>By creating an account or logging in, you agree to Amazon`s <span className='underline  text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Conditions of Use</span>and <span className='underline  text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Privacy Policy</span></p>
                 </div>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex justify-center items-center gap-4 flex-col mb-20">
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
export default Registration