import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import productDetail from "../home/ProductDetail"


const ProductItems = () => {
    return (
        <div className="w-full bg-white h-full">
            <div className="w-full fixed bg-white h-[40px] border-b-[1px] items-center flex ">
                <div className=" flex w-full px-6  gap-5 items-center cursor-pointer  ">
                    <p className="text-black font-semibold ">Electroincs</p>
                    <ul className="flex w-full justify-between text-gray-700 ml-10   ">
                        <li className="relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-yellow-400 hover:after:absolute hover:after:bottom-0">
                            Mobiles & Accessories
                        </li>
                        <li className="relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-yellow-400 hover:after:absolute hover:after:bottom-0">
                            Laptops & Accessories
                        </li>
                        <li className="relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-yellow-400 hover:after:absolute hover:after:bottom-0">
                            TV & Home Entertainment
                        </li>
                        <li className="relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-yellow-400 hover:after:absolute hover:after:bottom-0">
                            Audio
                        </li>
                        <li className="relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-yellow-400 hover:after:absolute hover:after:bottom-0">
                            Cameras
                        </li>
                        <li className="relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-yellow-400 hover:after:absolute hover:after:bottom-0">
                            Computer Peripherals
                        </li>
                        <li className="relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-yellow-400 hover:after:absolute hover:after:bottom-0">
                            Smart Technology
                        </li>
                        <li className="relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-yellow-400 hover:after:absolute hover:after:bottom-0">
                            Office & Stationary
                        </li>

                    </ul>
                </div>
            </div>
            <div className="w-full h-full flex">
    {/* Left Sidebar - 15% */}
    <div className="w-[15%] h-full py-10 border-r border-gray-300 ">
        <div className="flex flex-col p-5 gap-5 font-titleFont ">
            <div className="text-xl font-bold">Category</div>
            <div>Computer & Accessories</div>
            <div className="flex flex-col gap-2 font-semibold">
                <div>Macbooks</div>
                <div>Amazon Prime</div>
                <div>Average Customer Review</div>
                <div className="flex items-center gap-1">
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarHalfIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <div>& Up</div>
                </div>
                <div className="flex items-center gap-1">
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <div>& Up</div>
                </div>
                <div className="flex items-center gap-1">
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarHalfIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <div>& Up</div>
                </div>
                <div className="flex items-center gap-1">
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                    <div>& Up</div>
                </div>
                <div>Amazon Prime</div>
                <div>Average Customer Review</div>
                <div>Electronic Equipment</div>
                <div>Power Accessories</div>
                <div>Warranties</div>
                <div>Tablets</div>
                <div>Home Audio</div>
                <div>eBook Readers & Accessories</div>
                <div>GPS & Accessories</div>
                <div>Computers & Accessories</div>
            </div>
        </div>
    </div>

    {/* Right Content Area - 85% */}
    <div className="w-[85%] h-full">
        <div className="py-[60px] w-[99%]">
            <div className="border px-5 py-2 ml-2 rounded-[5px] ">
                <p>1-5 of 5 for <span className='text-red-700 font-bold w-[100px]'>Macbooks</span></p>
            </div>

            <div className="flex w-[95%] flex-wrap mt-5 gap-6 p-5">
    {productDetail.map((item) => {
        return (
            <div 
                className="flex flex-col w-[30%] border p-4 shadow-lg" 
                key={item.id}
            >
                <div className="flex justify-center mb-4">
                    <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="h-[150px] w-[150px] object-contain"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="p-2 font-semibold text-sm h-[84px]">{item.name}</div>
                    <div className="flex">
                        <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                        <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                        <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                        <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                        <StarOutlineIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                      
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="text-lg font-bold text-red-600">₹{item.price}</div>
                        
                    </div>
                    <div className="text-sm text-gray-500">Flat INR 500 Off on SBI Cards</div>
                    <div className="text-sm text-green-600">Free Delivery By Amazon</div>
                    <button className=" ml-auto px-3 py-2 -mb-1 bg-yellow-500 text-white text-sm font-medium rounded 
                        cursor-pointer hover:bg-yellow-600 active:bg-yellow-700 ">
                            Add To Cart
                        </button>
                </div>
            </div>
        );
    })}
</div>


        </div>
    </div>
</div>

        </div>
    )
}

export default ProductItems