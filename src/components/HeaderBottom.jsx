import { useEffect, useRef, useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SideNavContent from './header/SideNavContent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {motion} from 'framer-motion'


const HeaderBottom = () => {
    const [hoverAll, setHoverAll] = useState(false);
    const [sidebar, setSidebar] = useState(false)
    const ref=useRef();
    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
           if(e.target.contains(ref.current)){
            setSidebar(false)
           }
        })
    },[ref,sidebar])
    return (
        <div className=" w-full bg-gray-800 text-white px-4 py-3 flex  items-center gap-5 h-8">
            <div className="flex ml-5 justify-center mt-1 ">
                <div onClick={() => setSidebar(true)} className="flex headerHover">
                    <MenuOutlinedIcon className='' />
                    <p className='text-[13px] font-semibold items-center flex '>All</p>
                </div>

                <div className=" flex headerHover text-[13px] text-lightText font-semibold">Fresh</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold  ">MX Player</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold ">Sell</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold  ">Best Sellers</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold  ">Today's Deals</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold  ">Mobiles</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold  ">Electronics</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold ">Home & Kitchen</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold  ">Customer Service</div>
                <div className="flex  justify-center items-center mb-[5px] ml-1 overflow-hidden">
                    <div className="flex  text-[13px] text-lightText font-semibold cursor-pointer hover:border   "> Prime</div>
                    <div onClick={() => setHoverAll(!hoverAll)} >
                        <span className='text-gray-400 flex '>
                            <ArrowDropDownOutlinedIcon />
                        </span>
                        {
                            hoverAll && (
                                <div className="mt-[365px] ">
                                    {
                                        <img src="https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB612889281_.jpg" alt="" />
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold  ">Amazon Pay</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold  ">New Releases</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold  ">Fashion</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold ">Car & Motorbike</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold ">Computers</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold  ">Sports, Fitness & Outdoors</div>
                <div className="flex headerHover text-[13px] text-lightText font-semibold  ">Books</div>

            </div>

            {sidebar && (
                <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
                    <div className="w-full h-full relative">
                        <motion.div ref={ref} initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5}} className=" w-[350px] h-full bg-white border border-gray-500">
                            <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                                <AccountCircleIcon />
                                <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, Sign In</h3>
                            </div>
                            <SideNavContent/>
                        </motion.div>
                        <span onClick={()=>setSidebar(false)} className='cursur-pointer absolute top-0 left-[350px] w-8 h-10 text-white flex items-center justify-center border-none
                        hover:text-white duration-300 '><CloseOutlinedIcon/></span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HeaderBottom
