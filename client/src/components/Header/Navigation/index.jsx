import Button from "@mui/material/Button";
import React from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";
import CategoryPanel from "./CategoryPanel";
import './style.css';

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = React.useState(false);
  const openCategoryPanel = (value) => {
    setIsOpenCatPanel(value !== undefined ? value : !isOpenCatPanel);
  };
  return (
    <>
    <nav className="py-2">
      <div className="container flex items-center justify-end gap-9">
        <div className="col_1 w-[20%]">
          <Button className="!text-black !font-bold gap-2 w-full" onClick={openCategoryPanel}>
            <BsMenuButtonWideFill className="text-[15px]" /> Shop By Categories
            <FaAngleDown className="text-[18px] font-bold  " />
          </Button>
        </div>
        <div className="col_2 w-[60%] ">
          <ul className="flex items-center gap-3 nav ">
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
               <Button className="link transition !font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
          Home
          </Button>
              </Link>
            </li>
            <li className="list-none relative">
        <Link to="/" className="link transition text-[16px] !font-[500]">
        <Button className="link transition !font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
          Fashion
          </Button>
              </Link>
              <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
              <ul>
                
              <li className='list-none w-full relative'>
                <Link to='/' className="w-full">
              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Men</Button>
              </Link>
              <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
              <ul>
                
              <li className='list-none w-full'>
                <Link to='/' className="w-full">
              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Pents</Button>
              </Link>
              </li>
              
              <li className='list-none w-full'>
                <Link to='/' className="w-full">
              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">T-shirt</Button>
              </Link>
              </li>
              <li className='list-none w-full'>
                <Link to='/' className="w-full">
              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Jeans</Button>
              </Link>
              </li>
              <li className='list-none w-full'>
                <Link to='/' className="w-full">
              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Footwear</Button>
              </Link>
              </li>
              <li className='list-none w-full'>
                <Link to='/' className="w-full">
              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Watch</Button>
              </Link>
              </li>
              </ul>

              </div>
              </li>
              
              <li className='list-none w-full'>
                <Link to='/' className="w-full">
              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Women</Button>
              </Link>
              </li>
              <li className='list-none w-full'>
                <Link to='/' className="w-full">
              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Kids</Button>
              </Link>
              </li>
              <li className='list-none w-full'>
                <Link to='/' className="w-full">
              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Girls</Button>
              </Link>
              </li>
              <li className='list-none w-full'>
                <Link to='/' className="w-full">
              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Boys</Button>
              </Link>
              </li>
              </ul>

              </div>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                <Button className="link transition !font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
          Electronics
          </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
               <Button className="link transition !font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
          Bags
          </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                <Button className="link transition !font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
          Shoes
          </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                <Button className="link transition !font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
          Groceries
          </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                <Button className="link transition !font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
          Beuty
          </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                <Button className="link transition !font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
          Wellness
          </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                
                <Button className="link transition !font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
          Jewelry
          </Button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col_3 w-[20%]">
            <p className="text-[14px] font-bold flex items-center gap-3 mb-0 mt-0"><MdOutlineRocketLaunch  className="text-[18px]"/>Free International Delivery</p>
        </div>
      </div>
    </nav>
    <CategoryPanel openCategoryPanel={openCategoryPanel} isOpenCatPanel={isOpenCatPanel}/>
    </>
  );
};

export default Navigation
