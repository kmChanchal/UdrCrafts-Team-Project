import React from 'react'
import DashboardBoxes from '../../Components/DashboardBoxes'
import cart from '../../assets/cart.jpg'
import { GoPlus } from "react-icons/go";
import {Button} from '@mui/material';
const Dashboard = () => {
  return (
   <>
   <div className='w-full py-2 px-5 p-5 border bg-white border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md'>
    <div className='info'>
       <h1 className='text-[35px] font-bold leading-10 mb-3'>Good Morning,<br /> Cameron </h1>
       <p>Here's What happening on your store today. See the statistics at once.</p>
       <br />
       <Button className='btn-blue !capitalize'><GoPlus />Add Products</Button>
    </div>
  <img src={cart} alt="Cart" className="w-[250px]" />
   </div>
    <DashboardBoxes/>

    <div className='card my-4'>
      
  <div className='flex items-center justify-between shadow-md  bg-white px-5 py-5 '>
    <h2 className='text-[18px] font-[600]' >Recent Orders</h2>
  </div>

  {/* //Created in MY order section video 21 */}

  
<div class="relative overflow-x-auto  ">
    <table class="w-full text-sm text-left rtl:text-right text-black ">
        <thead class="text-xs text-gray-700 uppercase bg-white ">
            <tr>
                <th scope="col" class="px-6 py-3">
                   ORder Id 
                </th>
                <th scope="col" class="px-6 py-3">
                   Customer
                </th>
                <th scope="col" class="px-6 py-3">
                  Items
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Created
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white even:bg-gray-50  border-b  border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white    border-b  border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white   border-b  border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white  border-b  border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className='bg-white'>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>


    </div>
   </>
  )
}

export default Dashboard
