import { Link } from "react-router-dom"


const FooterTop = () => {
  return (
<div className="w-full bg-white top-10 relative py-6 flex justify-center">
    <div className="w-full border-t-[1px] border-b-[1px] py-8 ">
        <div className="w-64 mx-auto text-center ">
            <p className="text-sm mb-2">See Personalised recommendations</p>

           <Link to="/signin">
           <button className="w-full  mb-2 bg-yellow-400 rounded-md py-1 font-semibold
            cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 ">Sign In</button>
           </Link>

            <p className="size-xs">New customer? {" "} <span className="text-blue-500 ml-1 cursor-pointer ">Start here.</span></p>
        </div>
    </div>
</div>
  )
}

export default FooterTop