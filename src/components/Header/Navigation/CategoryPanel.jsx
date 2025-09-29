import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { IoMdClose } from "react-icons/io";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };
 const openSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
  };
    const openInnerSubmenu = (index) => {
    setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
  };
 const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className='categoryPanel'>
      <h3 className='p-3 text-[20px] font-[500] flex items-center justify-between'>
        Shop By Categories 
        <IoMdClose 
          onClick={() => props.openCategoryPanel(false)} 
          className='cursor-pointer text-[20px]' 
        />
      </h3>
      <div className='scroll'>
        <ul className='w-full'>
          <li className='list-none relative flex-col'>
            <Link to='/' className='w-full '>
              <Button className='w-full !text-left !justify-start !px-3 !text-black'>Fashion</Button>
              {submenuIndex === 0 ? (
             <FaRegSquareMinus
             className=" cursor-pointer justify-end"
            onClick={() => openSubmenu(0)}
           />
            ) : (
          <FaRegPlusSquare
          className=" cursor-pointer justify-end"
         onClick={() => openSubmenu(0)}
         />
           )}
            </Link>
            
            {submenuIndex === 0 && (
              <li className='list-none relative mb-1'>
                <ul className='submenu  pl-3'>
                  <li className='list-none relative mb-1'>
                    <Link to='/'>
                      <Button className='w-full !text-left !justify-start !px-3 !text-black'>Apparel</Button>
                    </Link>
                    {innerSubmenuIndex === 0 ? (
                    <FaRegSquareMinus
                     className=" cursor-pointer" onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
              <FaRegPlusSquare
              className=" cursor-pointer"
              onClick={() => openInnerSubmenu(0)}
           />
           )}
           {
            innerSubmenuIndex === 0 && (
                      <ul className='inner_submenu  w-full !pl-3 !px-3'>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[13px]'>
                            Smart Tablet
                          </Link>
                        </li>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[13px]'>
                            Crepe T-shirt
                          </Link>
                        </li>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[14px]'>
                            Leather Watch
                          </Link>
                        </li>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[14px]'>
                            Rolling Diamond
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </li>
            )}
          </li>
        </ul>
        <ul className='w-full'>
          <li className='list-none relative flex-col'>
            <Link to='/' className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-black'>Fashion</Button>
            </Link>
            {submenuIndex === 1 ? (
             <FaRegSquareMinus
             className=" cursor-pointer flex-col"
            onClick={() => openSubmenu(1)}
           />
            ) : (
          <FaRegPlusSquare
          className=" cursor-pointer"
         onClick={() => openSubmenu(1)}
         />
           )}
            {submenuIndex === 1 && (
              <li className='list-none relative mb-1'>
                <ul className='submenu w-full pl-3'>
                  <li className='list-none relative mb-1'>
                    <Link to='/'>
                      <Button className='w-full !text-left !justify-start !px-3 !text-black'>Apparel</Button>
                    </Link>
                    {innerSubmenuIndex === 1 ? (
                    <FaRegSquareMinus
                     className="cursor-pointer" onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
              <FaRegPlusSquare
              className=" cursor-pointer"
              onClick={() => openInnerSubmenu(1)}
           />
           )}
           {
            innerSubmenuIndex === 1 && (
                      <ul className='inner_submenu  w-full !pl-3 !px-3'>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[13px]'>
                            Smart Tablet
                          </Link>
                        </li>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[13px]'>
                            Crepe T-shirt
                          </Link>
                        </li>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[14px]'>
                            Leather Watch
                          </Link>
                        </li>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[14px]'>
                            Rolling Diamond
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </li>
            )}
          </li>
          <li className='list-none relative flex-col'>
            <Link to='/' className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-black'>Bags</Button>
            </Link>
            {submenuIndex === 2 ? (
             <FaRegSquareMinus
             className=" cursor-pointer flex-col"
            onClick={() => openSubmenu(2)}
           />
            ) : (
          <FaRegPlusSquare
          className=" cursor-pointer"
         onClick={() => openSubmenu(2)}
         />
           )}
            {submenuIndex === 2 && (
              <li className='list-none relative mb-1'>
                <ul className='submenu w-full pl-3'>
                  <li className='list-none relative mb-1'>
                    <Link to='/'>
                      <Button className='w-full !text-left !justify-start !px-3 !text-black'>Apparel</Button>
                    </Link>
                    {innerSubmenuIndex === 2 ? (
                    <FaRegSquareMinus
                     className="cursor-pointer" onClick={() => openInnerSubmenu(2)}
                    />
                  ) : (
              <FaRegPlusSquare
              className=" cursor-pointer"
              onClick={() => openInnerSubmenu(2)}
           />
           )}
           {
            innerSubmenuIndex === 2 && (
                      <ul className='inner_submenu  w-full !pl-3 !px-3'>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[13px]'>
                            Smart Tablet
                          </Link>
                        </li>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[13px]'>
                            Crepe T-shirt
                          </Link>
                        </li>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[14px]'>
                            Leather Watch
                          </Link>
                        </li>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[14px]'>
                            Rolling Diamond
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </li>
            )}
          </li>
          <li className='list-none relative flex-col'>
            <Link to='/' className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-black'>Footwear</Button>
            </Link>
            {submenuIndex === 3 ? (
             <FaRegSquareMinus
             className=" absolute top=[100%] left=[0%] cursor-pointer flex-col"
            onClick={() => openSubmenu(3)}
           />
            ) : (
          <FaRegPlusSquare
          className="absolute top=[100%] left=[0%] cursor-pointer"
         onClick={() => openSubmenu(3)}
         />
           )}
            {submenuIndex === 3 && (
              <li className='list-none relative mb-1'>
                <ul className='submenu w-full pl-3'>
                  <li className='list-none relative mb-1'>
                    <Link to='/'>
                      <Button className='w-full !text-left !justify-start !px-3 !text-black'>Apparel</Button>
                    </Link>
                    {innerSubmenuIndex === 3 ? (
                    <FaRegSquareMinus
                     className="cursor-pointer justify-end" onClick={() => openInnerSubmenu(3)}
                    />
                  ) : (
              <FaRegPlusSquare
              className=" cursor-pointer justify-end"
              onClick={() => openInnerSubmenu(3)}
           />
           )}
           {
            innerSubmenuIndex === 3 && (
                      <ul className='inner_submenu  w-full !pl-3 !px-3'>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[13px]'>
                            Smart Tablet
                          </Link>
                        </li>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[13px]'>
                            Crepe T-shirt
                          </Link>
                        </li>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[14px]'>
                            Leather Watch
                          </Link>
                        </li>
                        <li className='list-none relative mb-1'>
                          <Link to='/' className='link w-full !text-left !justify-start transition text-[14px]'>
                            Rolling Diamond
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </li>
            )}
          </li>
        </ul>
      </div>
      <Divider />
    </Box>
  );
  return (
    <Drawer open={props.isOpenCatPanel} onClose={() => props.openCategoryPanel(false)}>
      {DrawerList}
    </Drawer>
  );
};
export default CategoryPanel;
