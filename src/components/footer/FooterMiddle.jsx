import amazon from "../../assets/amazon.in.png"
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';


const FooterMiddle = () => {
    return (
        <div className="w-full bg-amazon_light text-white">
            <div className="w-full border-b-[1px] border-gray-500 py-10 mt-5">
                <div className="max-w-5xl  mx-auto text-gray-300 flex justify-between">
                    <div className="">
                        <h3 className="text-white font-titleFont text-base font-semibold mb-2 ">Get to Know Us</h3>
                        <ul className="flex flex-col gap-1 font-bodyFont  ">
                            <li className="footerLink">About Amazon</li>
                            <li className="footerLink">Careers</li>
                            <li className="footerLink">Press Releases</li>
                            <li className="footerLink">Amazon Science</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-white font-titleFont text-base font-semibold  mb-2 ">
                            Connect with Us</h3>

                        <ul className="flex flex-col gap-1 font-bodyFont ">
                            <li className="footerLink">Facebook</li>
                            <li className="footerLink">Twitter</li>
                            <li className="footerLink">Instagram</li>


                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-white font-titleFont text-base font-semibold mb-2 ">Make Money with Us</h3>
                        <ul className="flex flex-col gap-1 font-bodyFont">
                            <li className="footerLink">Sell on Amazon</li>
                            <li className="footerLink">Sell under Amazon Accelerator</li>
                            <li className="footerLink">Protect and Build Your Brand</li>
                            <li className="footerLink">Amazon Global Selling</li>
                            <li className="footerLink">Supply to Amazon</li>
                            <li className="footerLink">Become an Affiliate</li>
                            <li className="footerLink">Fulfilment by Amazon</li>
                            <li className="footerLink">Advertise Your Products</li>
                            <li className="footerLink">Amazon Pay on Merchants</li>

                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-white font-titleFont text-base font-semibold mb-2 ">let Us Help You</h3>
                        <ul className="flex flex-col gap-1  font-bodyFont">
                            <li className="footerLink">Your Account</li>
                            <li className="footerLink">Returns Centre</li>
                            <li className="footerLink">Recalls and Product Safety Alerts</li>
                            <li className="footerLink">100% Purchase Protection</li>
                            <li className="footerLink">Amazon App Download</li>
                            <li className="footerLink">Help</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-6 items-center justify-center py-6">
                <div className="">
                    <img src={amazon} alt="" />
                </div>
                <div className=" border-[1px]  text-gray-300 border-gray-500 w-[150px] h-8 flex items-center gap-1">
                    <LanguageOutlinedIcon className="ml-1  text-gray-300" />
                    <p className="w-[90px]">English</p>
                    <div className="flex flex-col items-center text-gray-400 mb-3">
                        <p className="size-3"><ArrowDropUpOutlinedIcon className="" /></p>
                        <p className="size-3"> <ArrowDropDownOutlinedIcon className="" /></p>

                    </div>
                </div>
                <div className=" border-[1px] border-gray-500 w-[80px] h-8 flex items-center gap-1 justify-center ">
                    <img src="https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg" alt=""className="ml-2 size-3 w-[20px]" />
                    <p className="w-[90px] text-gray-300">India</p>
                    
                </div>
            </div>
        </div>
       
    )
}

export default FooterMiddle