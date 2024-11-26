import { useState, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector,useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { removeFromcart } from './cartfunction/Action';
import 'react-toastify/ReactToastify.css'

const AddCart = () => {
 const [cartItem , setCartItem ] = useState([])

 const dispatch = useDispatch();
 const cartItems = useSelector((state) => state.cart.items)

 let a =0;
 let cost = cartItems.map ((item)=>{return a = a + item.price})

 useEffect(()=>{
    setCartItem(cartItems)
 },[cartItems])

 const handleRemoveFromCart=(id)=>{
        
    toast.error("item Removed From cart",{
        position:'bottom-right'
    })
    dispatch(removeFromcart(id))
}

    return (
        <>
            <div className="bg-gray-300  w-full h-[90%] p-2 gap-5">
                <div className="flex gap-5 py-8 ml-[6rem]">
                    <div className="w-[80%] bg-whiteText">
                        <div className="flex flex-col p-5 gap-1 ">
                            <h2 className="text-3xl font-semibold">Shopping Cart</h2>
                            <p className="text-[18px] text-green-600 mb-3 flex justify-between">Deselect All items <span className="text-gray-600 mr-5 flex  ">Price</span></p>
                            <hr />
                        </div>
                      {
                        cartItems.map((item,id)=>{
                            return(
                                <>
                                  <div className="flex items-center  p-4 border-b-gray-500 w-full -mt-3">
                            <div className="w-[14rem] h-[13rem] p-4 items-center flex font-titleFont">
                                <img src={item.imageUrl} alt="" className='p-2' />
                            </div>
                            <div className="flex flex-col w-full p-4 h-[184px] gap-3 justify-center ">
                                <div className="flex gap-[10rem] justify-between">
                                    <h1 className="flex font-titleFont  ">{item.name}</h1>
                                    <p className='font-semibold'> ₹ {item.price}</p>
                                </div>
                                <span className='text-xs text-green-600 mt-4'>In stock</span>
                                <p className='text-sm -mt-3 text-gray-600'>Eligible for FREE Shipping</p>
                                <img className='size-16 -mt-3' src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" />
                                <div className="flex -mt-3 gap-2 font-titleFont">
                                    <input type="checkbox" />
                                    <p>This will be a gift <span className='text-blue-500'>Learn More</span></p>
                                </div>
                                <div className="flex gap-1 cursor-pointer">
                                    <button className='justify-center w-24 bg-gray-200 flex p-2 rounded-xl h-10 '>Qty: 1<KeyboardArrowDownIcon className='ml-2' /></button>
                                    <ul className='flex items-center gap-5'>
                                        <li  className='ml-2 text-xm text-gray-400'>| <span onClick={()=>{handleRemoveFromCart (item.id)}} className=' text-blue-400 text-sm ml-2' >Delete</span> </li>
                                        <li className='ml-2 text-xm text-gray-400'>| <span className=' text-blue-400 text-sm ml-2' >Save for later</span> </li>
                                        <li className='ml-2 text-xm text-gray-400'>| <span className=' text-blue-400 text-sm ml-2' >Share</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className='flex justify-center border-gray-300 w-[96%] ml-[2%]' />
                                </>
                            )
                        })
                      }
                    </div>
                    <div className="w-[20%] py-2 px-2 bg-whiteText gap-3 h-[20%] mr-5 ">
                        <div className=" p-3 mb-2">
                            <div className="mb-2 ">SubTotal ({cartItems.length} items): <span className='font-semibold'> ₹ {a}</span>
                                <div className="flex gap-2 mb-2 mt-5">
                                    <input type="checkbox" />
                                    <p>This will be a gift</p>
                                </div>
                            </div>

                            <button className=" mt-40 w-full border rounded-[20px] p-2 ml-auto px-3 py-2 -mb-1 bg-yellow-400 text-sm font-medium 
                        cursor-pointer hover:bg-yellow-500 active:bg-yellow-600">Proceed to Buy</button>
                            <div className="mt-8 text-xl border">
                                <p className=' w-full p-3 flex justify-between text-[1rem] ml-2'>EMI Available <KeyboardArrowDownIcon /> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[10%] bg-gray-300 ">
                    <div className="p-6 w-[94%] ml-[95px] bg-white mb-[10px]">
                        <div className=" ">

                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        </>
    )
}

export default AddCart
