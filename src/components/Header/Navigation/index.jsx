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
          <ul className="flex items-center gap-3 ">
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                Home
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                Fashion
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                Electronics
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                Bags
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                Footwear
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                Groceries
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                Beauty
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                Wellness
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[16px] font-[500] !font-bold !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] cursor-pointer">
                Jewelry
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
