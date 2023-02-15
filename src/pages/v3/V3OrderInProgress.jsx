import React from 'react'

import { FiMoreVertical, FiSearch } from "react-icons/fi"

import profile1 from "../../assets/v3/orderinprogress/profile1.png"
import profile2 from "../../assets/v3/orderinprogress/profile2.png"
import profile3 from "../../assets/v3/orderinprogress/profile3.png"
import profile4 from "../../assets/v3/orderinprogress/profile4.png"
import profile5 from "../../assets/v3/orderinprogress/profile5.png"


const V3OrderInProgress = () => {
    return (
        <>
            <div className='flex items-center gap-10'>
                <h2 className='text-2xl font-bold'>Orders in progress</h2>
                <div className='p-4 rounded-full flex items-center gap-5 bg-[#055F5B0A] flex-1 shadow-lg'>
                    <FiSearch />
                    <input className='text-sm text-[#989898] w-full outline-none bg-transparent' placeholder='Search any order here' />
                </div>
            </div>
            <div className='w-full min-h-[400px] h-full max-h-[500px] overflow-y-auto bg-[#FFFBF3] p-4 rounded-lg mt-8'>
                <table className="w-full">
                    <thead>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Customer name</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Status</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Order number</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Order item</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>product</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Quantity</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'> price</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-3 border-b-[1px] border-b-[#BABABA]'>
                                <div className='flex items-center gap-2 justify-center'>
                                    <img src={profile1} alt="" className='w-12' />
                                    <div>
                                        <h4 className='text-sm mb-0 pb-0'>Tony Nory</h4>
                                        <span className='text-xs'>Placed 12h ago</span>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <button className='text-[#65E062] bg-[#65E06245] rounded-md py-1 px-8'>Active</button>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>cksfi495</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>April 5 , 2022</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>Mens Wallet</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>900</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span> 23$</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <FiMoreVertical className='text-2xl' />
                            </td>
                        </tr>
                        <tr>
                            <td className='py-3 border-b-[1px] border-b-[#BABABA]'>
                                <div className='flex items-center gap-2 justify-center'>
                                    <img src={profile2} alt="" className='w-12' />
                                    <div>
                                        <h4 className='text-sm mb-0 pb-0'>Tony Nory</h4>
                                        <span className='text-xs'>Placed 12h ago</span>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <button className='text-[#65E062] bg-[#65E06245] rounded-md py-1 px-8'>Active</button>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>cksfi495</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>April 5 , 2022</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>Mens Wallet</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>900</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span> 23$</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <FiMoreVertical className='text-2xl' />
                            </td>
                        </tr>
                        <tr>
                            <td className='py-3 border-b-[1px] border-b-[#BABABA]'>
                                <div className='flex items-center gap-2 justify-center'>
                                    <img src={profile3} alt="" className='w-12' />
                                    <div>
                                        <h4 className='text-sm mb-0 pb-0'>Tony Nory</h4>
                                        <span className='text-xs'>Placed 12h ago</span>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <button className='text-[#65E062] bg-[#65E06245] rounded-md py-1 px-8'>Active</button>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>cksfi495</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>April 5 , 2022</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>Mens Wallet</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>900</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span> 23$</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <FiMoreVertical className='text-2xl' />
                            </td>
                        </tr>
                        <tr>
                            <td className='py-3 border-b-[1px] border-b-[#BABABA]'>
                                <div className='flex items-center gap-2 justify-center'>
                                    <img src={profile4} alt="" className='w-12' />
                                    <div>
                                        <h4 className='text-sm mb-0 pb-0'>Tony Nory</h4>
                                        <span className='text-xs'>Placed 12h ago</span>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <button className='text-[#65E062] bg-[#65E06245] rounded-md py-1 px-8'>Active</button>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>cksfi495</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>April 5 , 2022</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>Mens Wallet</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>900</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span> 23$</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <FiMoreVertical className='text-2xl' />
                            </td>
                        </tr>
                        <tr>
                            <td className='py-3 border-b-[1px] border-b-[#BABABA]'>
                                <div className='flex items-center gap-2 justify-center'>
                                    <img src={profile5} alt="" className='w-12' />
                                    <div>
                                        <h4 className='text-sm mb-0 pb-0'>Tony Nory</h4>
                                        <span className='text-xs'>Placed 12h ago</span>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <button className='text-[#65E062] bg-[#65E06245] rounded-md py-1 px-8'>Active</button>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>cksfi495</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>April 5 , 2022</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>Mens Wallet</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>900</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span> 23$</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <FiMoreVertical className='text-2xl' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default V3OrderInProgress