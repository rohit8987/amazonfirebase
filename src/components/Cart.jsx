
import { useNavigate } from 'react-router';
const Cart = () => {
   
  const navigate = useNavigate(); // Create a navigate function

    const handleNavigation = (path) => {
      navigate(path);}


  return (
    <>
    <div className="bg-gray-300  w-full h-[90%] p-2 gap-5">
        <div className="flex gap-5 py-8 px-40">
    <div className="w-[98%] bg-whiteText">
       <div className=" w-full flex p-[100px]"> 
        <div className="flex  size-60 ">
            <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" />
        </div>
        <div className="flex flex-col gap-2 px-20 py-10 ">
            <p className="text-2xl font-titleFont font-bold">
              Your Amazon Cart is empty  
            </p>
            <span className="text-green-800"> shop today`s deals</span>
            <div className="font-semibold mt-5 gap-5  flex">
                <button  onClick={() => handleNavigation('/signin')} className="border rounded-[20px] p-2 ml-auto px-3 py-2 -mb-1 bg-yellow-400 text-sm font-medium 
                        cursor-pointer hover:bg-yellow-500 active:bg-yellow-600">Sign in to your account</button>
                <button  onClick={() => handleNavigation('/registration')}  className="border rounded-[20px] p-2 ml-auto px-3 py-2 -mb-1text-sm font-medium 
                        cursor-pointer hover:bg-yellow-400 active:bg-yellow-600">Sign up now</button>
            </div>
        </div>
       </div>
    </div>
    
    </div>
    <div className="w-full h-[10%] bg-gray-300 border-gray-50 ">
        <div className="p-6 w-[89%] ml-20 bg-white mb-[10px]">
           
        </div>
    </div>
    </div>
    </>
  )
}

export default Cart
