import { useState } from 'react';
import logo from '../../assets/logo1.png';
import flag from '../../assets/india.webp';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { allItems } from '../../constants/Index';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector, } from 'react-redux';
import HeaderBottom from '../HeaderBottom';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';



const Header = () => {
// const cartItems = useSelector ((state)=> state.cart.items)

    const [showAll, setShowAll] = useState(false);

    const navigate = useNavigate(); 
    const handleNavigation = (path) => {
      navigate(path);}

    return (
        <div className="w-full">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full bg-amazon_blue text-white z-50">
                {/* Top Header Section */}
                <div className="px-4 py-3 flex items-center gap-4 h-16 shadow-md">
                    {/* Logo Section */}
                    <div  onClick={() => handleNavigation('/')} className="ml-5 headerHover justify-center items-center flex h-[40px]">
                        <img className="max-w-[80px] mt-3 justify-center items-center flex" src={logo} alt="logo" />
                        <span className="flex">.in</span>
                    </div>
                    {/* Location Section */}
                    <div onClick={()=> handleNavigation("/https://www.google.com/maps")} className="headerHover h-[40px] lgl:inline-flex">
                        <LocationOnOutlinedIcon />
                        <p className="text-sm text-lightText font-light flex flex-col">
                            Deliver to Visakhapatnam 530016
                            <span className="text-sm font-semibold -mt-1 text-whiteText">Update location</span>
                        </p>
                    </div>
                    {/* Search Section */}
                    <div className="h-10 rounded-md flex flex-grow relative cursor-pointer w-[50%]">
                        <span
                            onClick={() => setShowAll(!showAll)}
                            className="bg-gray-300 text-gray-500 flex p-2 hover:text-amazon_blue hover:bg-gray-300 rounded-tl-md rounded-bl-md"
                        >
                            All
                            <ArrowDropDownOutlinedIcon />
                        </span>
                        {showAll && (
                            <div>
                                <ul
                                    className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white
                                     border-[1px] text-gray-700 p-2 flex-col gap-1 z-50"
                                >
                                    {allItems.map((item) => (
                                        <li
                                            className="p-1 text-sm tracking-wide font-titleFont duration-200 hover:bg-gray-300"
                                            key={item._id}
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <input
                            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
                            type="text"
                            placeholder="Search Amazon.in"
                        />
                        <span
                            className="w-12 h-full flex items-center justify-center bg-amazon_yellow
                hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md"
                        >
                            <SearchOutlinedIcon />
                        </span>
                    </div>
                    {/* Language Section */}
                    <div className="h-10 flex justify-center items-center gap-1 headerHover">
                        <img src={flag} alt="" className="size-3 w-4 mb-1 flex" />
                        <div className="flex">
                            EN <ArrowDropDownOutlinedIcon className='text-lightText mt-1' />
                        </div>
                    </div>
                    {/* Account Section */}
                    <Link to="/signin">
                    <div className="flex flex-col items-start justify-center headerHover h-[40px]">
                        <p className="text-xs text-lightText font-light flex">Hello, sign in</p>
                        <p className="font-bold text-sm -mt-1 text-whiteText  hidden mdl:inline-flex">
                            Accounts & Lists <ArrowDropDownOutlinedIcon className='text-lightText'/>
                        </p>
                    </div>
                    </Link>
                    {/* Returns & Orders Section */}
                    <div className="h-10 hidden lgl:inline-flex  flex-col items-start justify-center headerHover">
                        <p className="text-xs text-gray-300 font-light flex">Returns</p>
                        <p className="font-bold text-sm -mt-1 text-whiteText flex">
                            & <span>Orders</span>
                        </p>
                    </div>
                    {/* Cart Section */}
                    <div onClick={()=> handleNavigation('./cart')} className="h-10 flex items-center justify-center headerHover relative">
                        <ShoppingCartOutlinedIcon />
                        <p className="font-bold text-xs mt-3 text-whiteText">
                            Cart
                            <span className="absolute text-sm -top-1 left-8 p-2 font-bold text-[#f3a847]">0</span>
                        </p>
                    </div>
                </div>
                {/* Header Bottom */}
                <div className="bg-amazon_blue-light">
                    <HeaderBottom />
                </div>
            </div>
            {/* Content with margin */}
            <div className="mt-24"> {/* Adjust this margin based on the height of the fixed headers */}
                {/* Main content goes here */}
            </div>
        </div>
    );
};

export default Header;
