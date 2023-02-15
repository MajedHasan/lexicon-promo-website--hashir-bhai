import React from 'react'

import StorageImg from "../../assets/v3/storage/storage.png"
import userNoteImg from "../../assets/v3/storage/userNote.png"

import profile1 from "../../assets/v3/orderinprogress/profile1.png"
import profile2 from "../../assets/v3/orderinprogress/profile2.png"

import { TbBrandTelegram } from "react-icons/tb"

const V3Storage = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-12 mt-4 mb-10">
                <div className="p-4 rounded-lg bg-[#FFFBF3] flex items-center justify-between shadow-lg">
                    <div>
                        <h4 className="text-xl font-normal mb-3">Total Storage</h4>
                        <h4 className="text-xl font-bold">$1,2000</h4>
                    </div>
                    <div className='w-20 h-20 bg-[#055F5B] text-white rounded-xl flex justify-center items-center'>
                        <img src={StorageImg} className='text-3xl' />
                    </div>
                </div>
                <div className="p-4 rounded-lg bg-[#FFFBF3] flex items-center justify-between shadow-lg">
                    <div>
                        <h4 className="text-xl font-normal mb-3">Ordered Prodcuts Stoarge</h4>
                        <h4 className="text-xl font-bold">$1,2000</h4>
                    </div>
                    <div className='w-20 h-20 bg-[#055F5B] text-white rounded-xl flex justify-center items-center'>
                        <img src={userNoteImg} className='text-4xl' />
                    </div>
                </div>
                <div className="p-4 rounded-lg bg-[#FFFBF3] flex items-center justify-between shadow-lg">
                    <div>
                        <h4 className="text-xl font-normal mb-3">Shipped Products</h4>
                        <h4 className="text-xl font-bold">$1,2000</h4>
                    </div>
                    <div className='w-20 h-20 bg-[#055F5B] text-white rounded-xl flex justify-center items-center'>
                        <TbBrandTelegram className='text-4xl' />
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-bold">Customer Storage</h2>
            <div className='w-full min-h-[200px] h-full max-h-[300px] overflow-y-auto bg-[#FFFBF3] p-4 rounded-lg mt-4'>
                <table className="w-full">
                    <thead>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Customer</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Order</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Status</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Storage</th>
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
                                <span>000000</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <button className='text-[#65E062] bg-[#65E06245] rounded-md py-1 px-8'>Active</button>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>12,0000</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <div className="flex items-center gap-1 justify-center">
                                    <div className="radial-progress before:bg-[#D9D9D9] text-[#FF0000]" style={{ "--value": 90 }}>90%</div>
                                </div>
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
                                <span>000000</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <button className='text-[#65E062] bg-[#65E06245] rounded-md py-1 px-8'>Active</button>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>12,0000</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <div className="flex items-center gap-1 justify-center">
                                    <div className="radial-progress before:bg-[#D9D9D9] text-[#FF0000]" style={{ "--value": 60 }}>60%</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default V3Storage