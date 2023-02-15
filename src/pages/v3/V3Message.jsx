import React, { useState } from 'react'
import { BiUserPlus } from 'react-icons/bi'
import { CgMoreVertical } from 'react-icons/cg'
import { FaTimes } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'

import Profile1Img from "../../assets/v3/messaging/profile-1.png"
import Profile2Img from "../../assets/v3/messaging/profile-2.png"
import Profile3Img from "../../assets/v3/messaging/profile-3.png"
import happy from "../../assets/v3/messaging/happy.png"
import enter from "../../assets/v3/messaging/enter.png"
import upload from "../../assets/v3/messaging/upload.png"
import { BsCheck2All } from 'react-icons/bs'
import { AiOutlineCamera, AiOutlineFolderAdd } from 'react-icons/ai'
import { GrGallery } from 'react-icons/gr'

const V3Messaging = () => {

    const [searchActive, setSearchActive] = useState(false)
    const [openUpload, setOpenUpload] = useState(false)
    const [showMore, setShowMore] = useState(true)

    return (
        <div className="flex h-[675px]">
            <div className="w-[280px] border-r-[1px] border-r-[#DDDDDD]">
                <header className='relative p-4 mb-2'>
                    <div className="flex justify-between items-center">
                        <h2 className='text-md font-bold'>Messages</h2>
                        <FiSearch className='cursor-pointer text-xl' onClick={() => setSearchActive(true)} />
                    </div>
                    {
                        searchActive && <div className="absolute top-0 left-0 w-full h-full bg-[#F1F1F1] shadow-lg rounded-full flex items-center justify-between px-4">
                            <input type="text" className='bg-transparent flex-1 outline-none' placeholder='search' />
                            <FaTimes className="cursor-pointer" onClick={() => setSearchActive(false)} />
                        </div>
                    }
                </header>
                <div>
                    <div className="flex justify-between items-center gap-5 bg-[#055F5B] p-3 cursor-pointer">
                        <div className="flex gap-2 items-center">
                            <div className="avatar online">
                                <div className="w-12 rounded-full">
                                    <img src={Profile1Img} />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-white text-sm'>Barina Joza kom </h4>
                                <p className='text-[#BABABA] text-xs'>Hello , nice to hear back...</p>
                            </div>
                        </div>
                        <div className='text-white text-center'>
                            <h4 className='text-sm'>2m</h4>
                            <div className="badge badge-sm bg-white text-[#055F5B] h-[21px]">1</div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-5 p-3 border-b-[1px] border-b-[#DDDDDD] cursor-pointer">
                        <div className="flex items-center gap-2">
                            <div className="avatar offline placeholder">
                                <div className="w-12 rounded-full bg-[#DFDFDF]">
                                    <span className='text-sm'>AA</span>
                                </div>
                            </div>
                            <div>
                                <h4 className='text-[#000000] text-sm'>Alexender Ann</h4>
                                <p className='text-[#5E5E5E] text-xs'>You: feedback is accepted </p>
                            </div>
                        </div>
                        <div className='text-black text-center'>
                            <h4 className='text-sm'>9h</h4>
                            <div className="badge badge-sm bg-white text-[#055F5B] h-[21px]">1</div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-5 border-b-[1px] border-b-[#DDDDDD] p-3 cursor-pointer">
                        <div className="flex gap-2 items-center">
                            <div className="avatar offline">
                                <div className="w-12 rounded-full">
                                    <img src={Profile2Img} />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-black text-sm'>Jons yieezay</h4>
                                <p className='text-[#5E5E5E] text-xs'>You: Okay</p>
                            </div>
                        </div>
                        <div className='text-white text-center'>
                            <h4 className='text-sm'>18h</h4>
                            <div className="badge badge-sm bg-white text-[#055F5B] h-[21px]">1</div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-5 p-3 cursor-pointer">
                        <div className="flex gap-2 items-center">
                            <div className="avatar online">
                                <div className="w-12 rounded-full">
                                    <img src={Profile3Img} />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-black text-sm'>Abdulla haider</h4>
                                <p className='text-[#5E5E5E] text-xs'>Thank you</p>
                            </div>
                        </div>
                        <div className='text-black text-center'>
                            <h4 className='text-sm'>2d</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-between gap-2">
                <header className='py-1 px-5 flex justify-between items-center border-b-[1px] border-b-[#DDDDDD]'>
                    <div className='flex gap-6 items-center'>
                        <div className="avatar online">
                            <div className="w-14 rounded-full">
                                <img src={Profile1Img} />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-lg'>Barina Joza kom ( Car Dealer )</h2>
                            <span className="text-sm text-[#65E062]">Online</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 relative'>
                        <button className='rounded-full bg-[#FFD584] w-12 h-12 flex justify-center items-center'>
                            <BiUserPlus className='text-2xl text-[#055F5B]' />
                        </button>
                        <button className='' onClick={() => setShowMore(!showMore)}>
                            <CgMoreVertical className='text-2xl' />
                        </button>
                        {
                            showMore && <div className='absolute top-14 right-0 rounded-lg p-4 shadow-lg bg-white w-[250px]'>
                                <h4 className="text-center text-xs">Selecet manager to align <strong>Barina</strong> task</h4>
                                <div className='flex flex-col gap-4 mt-4'>
                                    <div className="flex items-center gap-4">
                                        <img src={Profile1Img} alt="" className='w-10' />
                                        <span className='text-sm'>Ali shah Haider</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img src={Profile2Img} alt="" className='w-10' />
                                        <span className='text-sm'>Mr. Kevin</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img src={Profile3Img} alt="" className='w-10' />
                                        <span className='text-sm'> Ali shah Haider</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img src={Profile3Img} alt="" className='w-10' />
                                        <span className='text-sm'>Mr. Filipp</span>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </header>
                <div className='flex-1 p-4 overflow-y-scroll'>
                    <div className="w-[80%] p-4 rounded-md shadow-md bg-[#FFFFFF] my-2">
                        <p className='text-sm'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been is the industry's standard dummy text ever since the 1500s.</p>
                        <div className="flex gap-2 justify-end items-center">
                            <BsCheck2All className='text-xl' />
                            <span className='text-xs text-[#8F8F8F]'>09:20 am</span>
                        </div>
                    </div>
                    <div className="w-[80%] p-4 rounded-md shadow-md bg-[#055F5B] my-2 ml-auto">
                        <p className='text-sm text-white'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been is the industry's standard dummy text ever since the 1500s.</p>
                        <div className="flex gap-2 justify-end items-center">
                            <BsCheck2All className='text-xl text-white' />
                            <span className='text-xs text-[#EFEFEF]'>09:20 am</span>
                        </div>
                    </div>
                    <div className="w-[80%] p-4 rounded-md shadow-md bg-[#FFFFFF] my-2">
                        <p className='text-sm'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been is the industry's standard dummy text ever since the 1500s.</p>
                        <div className="flex gap-2 justify-end items-center">
                            <BsCheck2All className='text-xl' />
                            <span className='text-xs text-[#8F8F8F]'>09:20 am</span>
                        </div>
                    </div>
                    <div className="w-[80%] p-4 rounded-md shadow-md bg-[#055F5B] my-2 ml-auto">
                        <p className='text-sm text-white'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been is the industry's standard dummy text ever since the 1500s.</p>
                        <div className="flex gap-2 justify-end items-center">
                            <BsCheck2All className='text-xl text-white' />
                            <span className='text-xs text-[#EFEFEF]'>09:20 am</span>
                        </div>
                    </div>
                    <div className="w-[80%] p-4 rounded-md shadow-md bg-[#FFFFFF] my-2">
                        <p className='text-sm'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been is the industry's standard dummy text ever since the 1500s.</p>
                        <div className="flex gap-2 justify-end items-center">
                            <BsCheck2All className='text-xl' />
                            <span className='text-xs text-[#8F8F8F]'>09:20 am</span>
                        </div>
                    </div>
                    <div className="w-[80%] p-4 rounded-md shadow-md bg-[#055F5B] my-2 ml-auto">
                        <p className='text-sm text-white'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been is the industry's standard dummy text ever since the 1500s.</p>
                        <div className="flex gap-2 justify-end items-center">
                            <BsCheck2All className='text-xl text-white' />
                            <span className='text-xs text-[#EFEFEF]'>09:20 am</span>
                        </div>
                    </div>
                </div>
                <div className='border-t-[1px] border-[#DDDDDD] py-4 px-5 flex items-center gap-2 justify-between relative'>
                    <div className="flex-1 flex gap-3 items-center rounded-full py-2 px-4 bg-[#F5F5F5]">
                        <img src={happy} alt="" className='w-8 cursor-pointer' />
                        <input type="text" className='text-sm text-[#B4B4B4] flex-1 outline-none bg-transparent' placeholder='Type message here...' />
                        <img src={enter} className="w-8 cursor-pointer" />
                    </div>
                    <div>
                        <button className='bg-[#F5F5F5] flex justify-center items-center w-14 h-14 rounded-full' onClick={() => setOpenUpload(!openUpload)}>
                            <img src={upload} className="w-8" />
                        </button>
                        {
                            openUpload && <div className="flex gap-6 items-center absolute -top-20 right-0">
                                <label htmlFor="camera" className='rounded-full shadow-lg flex justify-center items-center w-14 h-14 bg-white cursor-pointer'>
                                    <AiOutlineCamera className="text-2xl" />
                                    <input type="file" name="" id="camera" hidden />
                                </label>
                                <label htmlFor="gallery" className='rounded-full shadow-lg flex justify-center items-center w-14 h-14 bg-white cursor-pointer'>
                                    <GrGallery className="text-2xl" />
                                    <input type="file" name="" id="gallery" hidden />
                                </label>
                                <label htmlFor="folder" className='rounded-full shadow-lg flex justify-center items-center w-14 h-14 bg-white cursor-pointer'>
                                    <AiOutlineFolderAdd className="text-2xl" />
                                    <input type="file" name="" id="folder" hidden />
                                </label>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default V3Messaging