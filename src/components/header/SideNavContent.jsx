import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useNavigate } from 'react-router';

const SideNavContent = () => {

    const navigate = useNavigate(); 

    const handleNavigation = (path) => {
      navigate(path);}

    return (
        <div className="h-full overflow-hidden">
            {/* Scrollable container */}
            <div className="h-[calc(100vh-50px)] overflow-y-auto">
                <h3 className="flex text-black font-bodyFont font-bold ml-5 p-5">Trending</h3>
                <ul onClick={() => handleNavigation('/productItems')}
                 className="text-[12px] -mt-5 text-gray-900 font-light flex flex-col gap-2 p-4">
                    <li className="hover:bg-zinc-200 px-6 py-2 cursor-pointer">Best Sellers</li>
                    <li className="hover:bg-zinc-200 px-6 py-2 cursor-pointer">New Releases</li>
                    <li className="hover:bg-zinc-200 px-6 py-2 cursor-pointer">Move And Shakers</li>
                </ul>
                <hr />
                <h3 className="flex text-black font-bodyFont font-bold ml-5 p-5">Digital Content and Devices</h3>
                <ul  onClick={() => handleNavigation('/productItems')}
                 className="text-[12px] -mt-[20px] text-gray-900 font-light flex flex-col gap-2 p-4">
                    <li className="px-6 hover:bg-zinc-200 py-2 -mt-[5px] cursor-pointer">Amazon miniTV-Free entertainment</li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        Echo & Alexa <span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        Fire TV <span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        Kindle E-Readers & eBooks <span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        Audible Audiobooks <span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        Amazon Prime Video <span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        Amazon Prime Music <span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                </ul>
                <hr />
                <h3 className="flex text-black font-bodyFont font-bold ml-5 p-5">Shop by Category</h3>
                <ul
                     onClick={() => handleNavigation('/productItems')}                
                 className="text-[12px] -mt-[20px] text-gray-900 font-light flex flex-col gap-2 p-4">
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        Mobile, Computer <span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        TV, Appliances, Electronics <span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        Men's Fashion <span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        Women's Fashion <span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <li className="flex items-center hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        See all <span className="text-gray-500"><KeyboardArrowDownOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <hr />
                </ul>
                <hr />
                <h3 className="flex text-black font-bodyFont font-bold ml-5 p-5">Programs & Features</h3>
                
                <ul
                 onClick={() => handleNavigation('/productItems')}
                className="text-[12px] -mt-[20px] text-gray-900 font-light flex flex-col gap-2 p-4">
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                       Amazon Pay <span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        Gift Cards & Mobile Recharges<span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        Amazon Launchpad <span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        Amazon Business  <span className="text-gray-500"><ChevronRightOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <li className="flex items-center hover:bg-zinc-200 py-2 px-6 cursor-pointer">
                        See all <span className="text-gray-500"><KeyboardArrowDownOutlinedIcon className="hover:text-amazon_blue" /></span>
                    </li>
                    <hr />
                </ul>
                <hr />
            </div>
        </div>
    );
};

export default SideNavContent;
