import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { VscDashboard } from "react-icons/vsc";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaJediOrder } from "react-icons/fa6";
import { CgLogOut } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar fixed top-0 left-0 bg-[#f1f1f1] w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4">
        <div className="py-2 w-full">
          <Link to="/">
            <img
              src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"
              alt=""
              className="w-[120px]  "
            />
          </Link>
        </div>
      </div>

      <ul className="mt-4">
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] ">
            <VscDashboard className="text-[18px]" />
            <span> Dashboard</span>
          </Button>
        </li>
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] ">
            <RiHomeOfficeFill className="text-[18px]" />
            <span>Home Slides</span>
            <span className="ml-auto  w-[30px] h-[30px] flex items-center justify-center ">
              <FaAngleDown />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] ">
            <FaUserSecret className="text-[18px]" />
            <span> Users</span>
          </Button>
        </li>
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] ">
            <MdProductionQuantityLimits className="text-[18px]" />
            <span>Products</span>
            <span className="ml-auto  w-[30px] h-[30px] flex items-center justify-center ">
              <FaAngleDown />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] ">
            <BiCategoryAlt className="text-[18px]" />
            <span>Category</span>
            <span className="ml-auto  w-[30px] h-[30px] flex items-center justify-center ">
              <FaAngleDown />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] ">
            <FaJediOrder className="text-[18px]" />
            <span> Orders</span>
            
          </Button>
        </li>
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] ">
            <CgLogOut className="text-[18px]" />
            <span>LogOut</span>
          </Button>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
