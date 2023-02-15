import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from "../assets/v4/Logo.png"
import Profile1Img from "../assets/v3/messaging/profile-1.png"
import Profile2Img from "../assets/v3/messaging/profile-2.png"
import Profile3Img from "../assets/v3/messaging/profile-3.png"

import BoardViewImg1 from "../assets/v4/board-view-img-1.png"
import BoardViewImg2 from "../assets/v4/board-view-img-2.png"
import BoardViewImg3 from "../assets/v4/board-view-img-3.png"

import ModalHeaderImg from "../assets/v4/popup-bg-img.png"
import AttachmentImg from "../assets/v4/attachment.png"

import { FiChevronDown, FiChevronLeft, FiHelpCircle, FiTrash } from "react-icons/fi"
import { BiLink, BiSearch, BiUserPlus } from 'react-icons/bi'
import { IoIosNotificationsOutline, IoMdCheckmark } from 'react-icons/io'
import { BsCalendarCheck, BsEmojiSmile, BsGrid1X2, BsPencilFill, BsShare } from 'react-icons/bs'
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineComment, AiOutlineEye, AiOutlineLink, AiOutlinePlus, AiOutlinePlusCircle, AiOutlineUnorderedList, AiOutlineUserAdd } from 'react-icons/ai'
import { FaAward, FaRandom, FaRegTimesCircle, FaTimes } from 'react-icons/fa'
import { MdLabelOutline, MdOutlineFilterList } from 'react-icons/md'
import { TfiMore } from "react-icons/tfi"
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { TbNotes } from 'react-icons/tb'
import { RiGalleryLine } from 'react-icons/ri'
import { RxCopy } from 'react-icons/rx'
import { HiOutlineBookOpen, HiPrinter } from 'react-icons/hi2'


const V4DashboardLayout = () => {

    const [view, setView] = useState("board")
    const [showAddCheckList, setShowAddCheckList] = useState(false)
    const [showAddMember, setShowAddMember] = useState(false)
    const [showAddLabel, seShowAddLabel] = useState(false)

    return (
        <>
            <div className="flex min-h-screen">
                <div className='w-[230px] flex flex-col justify-between gap-10'>
                    <header className='flex justify-between items-center gap-5 p-4 border-b-[1.5px] border-b-[#BCBCBC]'>
                        <div></div>
                        <Link to="">
                            <img src={Logo} className="w-[70px]" />
                        </Link>
                        <FiChevronLeft className='text-2xl' />
                    </header>
                    <div className='py-1 px-2 overflow-y-scroll max-h-[630px]'>
                        <div className='flex gap-2 items-center bg-[#F6F6F6] py-2 px-4 rounded-full'>
                            <BiSearch className='text-xl' />
                            <input type="text" className='text-xs flex-1 text-[#B3B3B3] bg-transparent outline-none' placeholder='Search here...' />
                        </div>
                        <div className='shadow-lg rounded-lg p-3 flex items-center justify-between'>
                            <img src={Profile1Img} alt="" className='w-6 h-6 rounded-full' />
                            <div>
                                <h4 className="text-xs mb-0 pb-0">Kevin Alaxander</h4>
                                <span className='text-xs text-[#777777]'>Kevin@gmail.com</span>
                            </div>
                            <button className='border-[1px] border-[#ECF026] bg-[#ECF02666] py-[1px] px-2 rounded-full text-xs'>Free</button>
                        </div>

                        <div className='flex gap-5 items-center mt-4 cursor-pointer'>
                            <span className='w-10 h-10 rounded-full flex justify-center items-center shadow-lg'>
                                <BiUserPlus className='text-xl' />
                            </span>
                            <span className='text-sm'>Add Members</span>
                        </div>
                        <div className='flex gap-5 items-center mt-2 cursor-pointer'>
                            <span className='w-10 h-10 rounded-full flex justify-center items-center shadow-lg'>
                                <IoIosNotificationsOutline className='text-xl' />
                            </span>
                            <span className='text-sm'>Notifications</span>
                        </div>

                        <div className='mt-5'>
                            <h4 className="text-sm font-bold">Workspace Views</h4>
                            <div className={`flex gap-5 items-center mt-2 cursor-pointer ${view === "board" ? "bg-[#013264] text-white p-1" : "py-1"}`} onClick={() => setView("board")}>
                                <span className='w-10 h-10 rounded-full flex justify-center items-center shadow-lg bg-white'>
                                    <BsGrid1X2 className='text-md text-black' />
                                </span>
                                <span className='text-sm'>Board view</span>
                            </div>
                            <div className={`flex gap-5 items-center mt-2 cursor-pointer ${view === "list" ? "bg-[#013264] text-white p-1" : "py-1"}`} onClick={() => setView("list")}>
                                <span className='w-10 h-10 rounded-full flex justify-center items-center shadow-lg bg-white'>
                                    <AiOutlineUnorderedList className='text-md text-black' />
                                </span>
                                <span className='text-sm'>Lists view</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <h2 className="text-sm font-bold">Spaces</h2>
                            <BiSearch />
                        </div>
                        <div className="shadow-lg p-4 rounded-full flex justify-center items-center text-xs cursor-pointer">+ New Space</div>
                        <div className='flex gap-2 items-center my-2 mt-4'>
                            <img src={Profile1Img} alt="" className='w-8' />
                            <span className='text-xs'>LS team phase 2</span>
                        </div>
                        <div className='flex gap-2 items-center my-2'>
                            <img src={Profile1Img} alt="" className='w-8' />
                            <span className='text-xs'>Design test</span>
                        </div>
                        <div className='flex gap-2 items-center my-2'>
                            <img src={Profile1Img} alt="" className='w-8' />
                            <span className='text-xs'>Suplier portal design project</span>
                        </div>
                        <div className='flex gap-2 items-center my-2'>
                            <img src={Profile1Img} alt="" className='w-8' />
                            <span className='text-xs'>Development Space</span>
                        </div>
                        <div className='flex gap-2 items-center my-2'>
                            <img src={Profile1Img} alt="" className='w-8' />
                            <span className='text-xs'>User experience tesing space</span>
                        </div>

                        <div className="mt-3 p-2">
                            <div className="bg-[#013264] text-white rounded-full flex items-center gap-2 py-2 px-4 cursor-pointer">
                                <FaAward className='text-xl' />
                                <span className="text-xs">Try Premium Now</span>
                            </div>
                        </div>
                    </div>
                    <footer className='px-5'>
                        <div className="w-full py-4 px-2 border-t-[1.5px] border-t-[#BCBCBC] flex items-center justify-between gap-5">
                            <div className='flex'>
                                <div className='relative'>
                                    <img src={Profile1Img} alt="" className='rounded-full w-6 border-[1px] border-white' />
                                </div>
                                <div className='relative -ml-2'>
                                    <img src={Profile2Img} alt="" className='rounded-full w-6 border-[1px] border-white' />
                                    <span className="absolute right-[4px] bottom-0 w-[5px] h-[5px] rounded-full bg-[#14FF00]"></span>
                                </div>
                                <div className='relative -ml-2'>
                                    <img src={Profile3Img} alt="" className='rounded-full w-6 border-[1px] border-white' />
                                    <span className="absolute right-[4px] bottom-0 w-[5px] h-[5px] rounded-full bg-[#14FF00]"></span>
                                </div>
                                <div className='relative flex justify-center items-center'>
                                    <FiChevronDown />
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <button className='flex gap-1 rounded-full py-[1px] px-2 items-center bg-[#9A2FFF33] border-[1.5px] border-[#9A2FFF] text-[#9A2FFF] text-xs'>
                                    <BiUserPlus />
                                    <span>Invite</span>
                                </button>
                                <FiHelpCircle />
                            </div>
                        </div>
                    </footer>
                </div>
                <div className="flex-1 flex flex-col">
                    <header className='py-2 bg-white flex items-center justify-between px-3'>
                        <div className='flex gap-3'>
                            <div className="flex items-center flex-col gap-1">
                                <span className='shadow-lg w-10 h-10 rounded-full flex justify-center items-center'>
                                    <AiOutlineUnorderedList />
                                </span>
                                <span className='text-xs'>List</span>
                            </div>
                            <div className="flex items-center flex-col gap-1">
                                <span className='shadow-lg w-10 h-10 rounded-full flex justify-center items-center'>
                                    <BsGrid1X2 />
                                </span>
                                <span className='text-xs'>Board</span>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <div className="bg-[#F6F6F6] flex gap-3 pl-3 rounded-full w-[300px] items-center">
                                <BiSearch className='text-xl' />
                                <input type="text" className='text-sm flex-1 outline-none bg-transparent' placeholder='Search here...' />
                                <span style={{
                                    background: "#0156AD",
                                    borderRadius: "0px 99px 99px 0px"
                                }} className="py-2 px-4">
                                    <MdOutlineFilterList className='text-2xl text-white' />
                                </span>
                            </div>
                            <div>
                                <span className='shadow-lg rounded-full w-10 h-10 flex justify-center items-center relative'>
                                    <IoIosNotificationsOutline className='text-2xl' />
                                    <span className='w-[12px] h-[12px] rounded-full bg-[#F08C26] absolute top-0 right-0 text-xs text-white flex justify-center items-center'>1</span>
                                </span>
                            </div>
                            <div>
                                <span className='shadow-lg rounded-full w-10 h-10 flex justify-center items-center'>
                                    <FiHelpCircle className='text-xl' />
                                </span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <img src={Profile1Img} alt="" className='w-10 h-10 rounded-full' />
                                <div>
                                    <h4 className="text-sm font-bold">Kevin Alaxander</h4>
                                    <div className="flex gap-3 items-center">
                                        <span className='text-[#777777]'>Kevin@gmail.com</span>
                                        <FiChevronDown className='text-lg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className='flex-1 bg-[#F6F6F6] p-4'>
                        <div className="my-3 border-dashed border-[1px] border-[#013264] rounded-xl p-5 flex justify-between items-center gap-4">
                            <div className='flex gap-5 items-center'>
                                <label htmlFor=""><span className='underline'>Start from scratch</span> or inherit:</label>
                                <select name="" id="" className='bg-white py-2 px-5 rounded-lg w-52 outline-none'>
                                    <option value="">Statuses</option>
                                </select>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <label htmlFor="">From</label>
                                <select name="" id="" className='bg-white py-2 px-5 rounded-lg w-52 outline-none'>
                                    <option value="">LS Team Phase 1</option>
                                </select>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <label htmlFor='my-modal-5' className='bg-[#013264] text-white py-2 px-6 rounded-lg cursor-pointer'>Apply</label>
                                <div className='w-[1.5px] h-[35px] bg-[#ACACAC]'></div>
                                <FaRegTimesCircle className='text-2xl' />
                            </div>
                        </div>
                        {
                            view === "board" && <div className="mt-5 grid grid-cols-6 gap-10 max-h-[600px] overflow-y-scroll">
                                <div className='flex flex-col gap-8'>
                                    <div>
                                        <div className='flex items-center justify-between'>
                                            <h4 className="text-sm font-bold">Backlog</h4>
                                            <div className="flex items-center gap-3">
                                                <span className='text-[#817E7E]'>0</span>
                                                <TfiMore />
                                            </div>
                                        </div>
                                        <div className="w-full bg-[#CFCFCF] h-1">
                                            <div className="w-20 bg-[#00FFF0] h-1"></div>
                                        </div>
                                        <div className="cursor-pointer rounded-xl p-2 bg-white flex gap-4 items-center mt-2">
                                            <button className='bg text-black w-10 h-10 rounded-xl bg-[#F2F2F6] flex items-center justify-center'>
                                                <AiOutlinePlus />
                                            </button>
                                            <span className='text-xs text-[#979797]'>Add another card</span>
                                        </div>
                                    </div>
                                    <div className="shadow-lg rounded-lg p-3 bg-white">
                                        <div className="flex items-center justify-between">
                                            <div className='flex gap-2'>
                                                <button className='bg-[#F08C261A] rounded text-xs py-[1px] px-[4px] text-[#F08C26]'>Industory</button>
                                                <span className='bg-[#F2F2F6] rounded p-1 text-black flex justify-center items-center'>
                                                    <AiOutlinePlus className='text-xs' />
                                                </span>
                                            </div>
                                            <div className='text-right text-[8px]'>
                                                <span className='text-[#646464]'>Ending at</span>
                                                <p>12/12/2022</p>
                                            </div>
                                        </div>
                                        <img src={BoardViewImg1} alt="" className='rounded-lg my-2' />
                                        <h3 className="text-sm font-semibold">BUSINESS NAME</h3>
                                        <p className='text-xs text-[#979797]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                                        <div className='flex items-center justify-between mt-2'>
                                            <div className='flex'>
                                                <img src={Profile1Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white' />
                                                <img src={Profile2Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white -ml-2' />
                                                <img src={Profile3Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white -ml-2' />
                                            </div>
                                            <div className="flex gap-1">
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <IoCheckmarkCircleOutline />
                                                    <span>16</span>
                                                </div>
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <AiOutlineLink />
                                                    <span>32</span>
                                                </div>
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <BsCalendarCheck />
                                                    <span>44</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shadow-lg rounded-lg p-3 bg-white">
                                        <div className="flex items-center justify-between">
                                            <div className='flex gap-2'>
                                                <button className='bg-[#F08C261A] rounded text-xs py-[1px] px-[4px] text-[#F08C26]'>Marketing</button>
                                                <span className='bg-[#F2F2F6] rounded p-1 text-black flex justify-center items-center'>
                                                    <AiOutlinePlus className='text-xs' />
                                                </span>
                                            </div>
                                            <div className='text-right text-[8px]'>
                                                <span className='text-[#646464]'>Ending at</span>
                                                <p>12/12/2022</p>
                                            </div>
                                        </div>
                                        <img src={BoardViewImg2} alt="" className='rounded-lg my-2' />
                                        <h3 className="text-sm font-semibold">SEA COLLABS</h3>
                                        <p className='text-xs text-[#979797]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                                        <div className='flex items-center justify-between mt-2'>
                                            <div className='flex'>
                                                <img src={Profile1Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white' />
                                                <img src={Profile2Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white -ml-2' />
                                                <img src={Profile3Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white -ml-2' />
                                            </div>
                                            <div className="flex gap-1">
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <IoCheckmarkCircleOutline />
                                                    <span>16</span>
                                                </div>
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <AiOutlineLink />
                                                    <span>32</span>
                                                </div>
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <BsCalendarCheck />
                                                    <span>44</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-8'>
                                    <div>
                                        <div className='flex items-center justify-between'>
                                            <h4 className="text-sm font-bold">In progress</h4>
                                            <div className="flex items-center gap-3">
                                                <span className='text-[#817E7E]'>0</span>
                                                <TfiMore />
                                            </div>
                                        </div>
                                        <div className="w-full bg-[#CFCFCF] h-1">
                                            <div className="w-20 bg-[#0030D9] h-1"></div>
                                        </div>
                                        <div className="cursor-pointer rounded-xl p-2 bg-white flex gap-4 items-center mt-2">
                                            <button className='bg text-black w-10 h-10 rounded-xl bg-[#F2F2F6] flex items-center justify-center'>
                                                <AiOutlinePlus />
                                            </button>
                                            <span className='text-xs text-[#979797]'>Add another card</span>
                                        </div>
                                    </div>
                                    <div className="shadow-lg rounded-lg p-3 bg-white">
                                        <div className="flex items-center justify-between">
                                            <div className='flex gap-2'>
                                                <button className='bg-[#9A2FFF14] rounded text-xs py-[1px] px-[4px] text-[#9A2FFF]'>Industory</button>
                                                <span className='bg-[#F2F2F6] rounded p-1 text-black flex justify-center items-center'>
                                                    <AiOutlinePlus className='text-xs' />
                                                </span>
                                            </div>
                                            <div className='text-right text-[8px]'>
                                                <span className='text-[#646464]'>Ending at</span>
                                                <p>12/12/2022</p>
                                            </div>
                                        </div>
                                        <h3 className="text-sm font-semibold mt-4">BUSINESS NAME</h3>
                                        <p className='text-xs text-[#979797]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                                        <div className='flex items-center justify-between mt-2'>
                                            <div className='flex'>
                                                <img src={Profile1Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white' />
                                                <img src={Profile2Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white -ml-2' />
                                                <img src={Profile3Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white -ml-2' />
                                            </div>
                                            <div className="flex gap-1">
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <IoCheckmarkCircleOutline />
                                                    <span>16</span>
                                                </div>
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <AiOutlineLink />
                                                    <span>32</span>
                                                </div>
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <BsCalendarCheck />
                                                    <span>44</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-8'>
                                    <div>
                                        <div className='flex items-center justify-between'>
                                            <h4 className="text-sm font-bold">In Review</h4>
                                            <div className="flex items-center gap-3">
                                                <span className='text-[#817E7E]'>0</span>
                                                <TfiMore />
                                            </div>
                                        </div>
                                        <div className="w-full bg-[#CFCFCF] h-1">
                                            <div className="w-20 bg-[#FF00DB] h-1"></div>
                                        </div>
                                        <div className="cursor-pointer rounded-xl p-2 bg-white flex gap-4 items-center mt-2">
                                            <button className='bg text-black w-10 h-10 rounded-xl bg-[#F2F2F6] flex items-center justify-center'>
                                                <AiOutlinePlus />
                                            </button>
                                            <span className='text-xs text-[#979797]'>Add another card</span>
                                        </div>
                                    </div>
                                    <div className="shadow-lg rounded-lg p-3 bg-white">
                                        <div className="flex items-center justify-between">
                                            <div className='flex gap-2'>
                                                <button className='bg-[#F08C261A] rounded text-xs py-[1px] px-[4px] text-[#F08C26]'>Industory</button>
                                                <span className='bg-[#F2F2F6] rounded p-1 text-black flex justify-center items-center'>
                                                    <AiOutlinePlus className='text-xs' />
                                                </span>
                                            </div>
                                            <div className='text-right text-[8px]'>
                                                <span className='text-[#646464]'>Ending at</span>
                                                <p>12/12/2022</p>
                                            </div>
                                        </div>
                                        <img src={BoardViewImg3} alt="" className='rounded-lg my-2' />
                                        <h3 className="text-sm font-semibold">BUSINESS NAME</h3>
                                        <p className='text-xs text-[#979797]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                                        <div className='flex items-center justify-between mt-2'>
                                            <div className='flex'>
                                                <img src={Profile1Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white' />
                                                <img src={Profile2Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white -ml-2' />
                                                <img src={Profile3Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white -ml-2' />
                                            </div>
                                            <div className="flex gap-1">
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <IoCheckmarkCircleOutline />
                                                    <span>16</span>
                                                </div>
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <AiOutlineLink />
                                                    <span>32</span>
                                                </div>
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <BsCalendarCheck />
                                                    <span>44</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shadow-lg rounded-lg p-3 bg-white">
                                        <div className="flex items-center justify-between">
                                            <div className='flex gap-2'>
                                                <button className='bg-[#F08C261A] rounded text-xs py-[1px] px-[4px] text-[#F08C26]'>Marketing</button>
                                                <span className='bg-[#F2F2F6] rounded p-1 text-black flex justify-center items-center'>
                                                    <AiOutlinePlus className='text-xs' />
                                                </span>
                                            </div>
                                            <div className='text-right text-[8px]'>
                                                <span className='text-[#646464]'>Ending at</span>
                                                <p>12/12/2022</p>
                                            </div>
                                        </div>
                                        <h3 className="text-sm font-semibold mt-4">SEA COLLABS</h3>
                                        <p className='text-xs text-[#979797]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                                        <div className='flex items-center justify-between mt-2'>
                                            <div className='flex'>
                                                <img src={Profile1Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white' />
                                                <img src={Profile2Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white -ml-2' />
                                                <img src={Profile3Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white -ml-2' />
                                            </div>
                                            <div className="flex gap-1">
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <IoCheckmarkCircleOutline />
                                                    <span>16</span>
                                                </div>
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <AiOutlineLink />
                                                    <span>32</span>
                                                </div>
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <BsCalendarCheck />
                                                    <span>44</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-8'>
                                    <div>
                                        <div className='flex items-center justify-between'>
                                            <h4 className="text-sm font-bold">Done</h4>
                                            <div className="flex items-center gap-3">
                                                <span className='text-[#817E7E]'>0</span>
                                                <TfiMore />
                                            </div>
                                        </div>
                                        <div className="w-full bg-[#CFCFCF] h-1">
                                            <div className="w-20 bg-[#0FBE00] h-1"></div>
                                        </div>
                                        <div className="cursor-pointer rounded-xl p-2 bg-white flex gap-4 items-center mt-2">
                                            <button className='bg text-black w-10 h-10 rounded-xl bg-[#F2F2F6] flex items-center justify-center'>
                                                <AiOutlinePlus />
                                            </button>
                                            <span className='text-xs text-[#979797]'>Add another card</span>
                                        </div>
                                    </div>
                                    <div className="shadow-lg rounded-lg p-3 bg-white">
                                        <div className="flex items-center justify-between">
                                            <div className='flex gap-2'>
                                                <button className='bg-[#9A2FFF14] rounded text-xs py-[1px] px-[4px] text-[#9A2FFF]'>Design</button>
                                                <span className='bg-[#F2F2F6] rounded p-1 text-black flex justify-center items-center'>
                                                    <AiOutlinePlus className='text-xs' />
                                                </span>
                                            </div>
                                            <div className='text-right text-[8px]'>
                                                <span className='text-[#646464]'>Ending at</span>
                                                <p>12/12/2022</p>
                                            </div>
                                        </div>
                                        <h3 className="text-sm font-semibold mt-4">BUSINESS NAME</h3>
                                        <p className='text-xs text-[#979797]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                                        <div className='flex items-center justify-between mt-2'>
                                            <div className='flex'>
                                                <img src={Profile1Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white' />
                                                <img src={Profile2Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white -ml-2' />
                                                <img src={Profile3Img} alt="" className='rounded-full w-5 h-5 border-[1px] border-white -ml-2' />
                                            </div>
                                            <div className="flex gap-1">
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <IoCheckmarkCircleOutline />
                                                    <span>16</span>
                                                </div>
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <AiOutlineLink />
                                                    <span>32</span>
                                                </div>
                                                <div className='text-xs text-[#9D9D9D] text-center'>
                                                    <BsCalendarCheck />
                                                    <span>44</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-8'>
                                    <div>
                                        <div className='mt-3 text-xs text-[#979797]'>+ ADD STATUS</div>
                                        <div className="cursor-pointer rounded-xl p-2 bg-white flex gap-4 items-center mt-2">
                                            <button className='bg text-black w-10 h-10 rounded-xl bg-[#F2F2F6] flex items-center justify-center'>
                                                <AiOutlinePlus />
                                            </button>
                                            <span className='text-xs text-[#979797]'>Add another card</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            view === "list" && <div className='mt-5 max-h-[630px] overflow-y-scroll'>
                                <table className="w-full">
                                    <thead>
                                        <th></th>
                                        <th>Company name</th>
                                        <th>Business Category</th>
                                        <th>Internal Contact</th>
                                        <th>
                                            <div className="flex justify-between items-center">
                                                <span>Reported revenue</span>
                                                <AiOutlinePlusCircle className='text-2xl' />
                                            </div>
                                        </th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='bg-white p-2 rounded-l-xl mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="flex items-center gap-2">
                                                    <span className='p-1 bg-[#F2F2F6] rounded-lg'><IoMdCheckmark className='text-[#817E7E]' /></span>
                                                    <span className='text-sm'>Project "Teamwork Dream Work" Launch Timeline</span>
                                                </div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">Lexicon promo</div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">Design</div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">084764344</div>
                                            </td>
                                            <td className='bg-white p-2 rounded-r-xl mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm flex gap-1 items-center justify-center">89% <AiOutlineArrowUp className="text-[#14FF00]" /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='bg-white p-2 rounded-l-xl mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="flex items-center gap-2">
                                                    <span className='p-1 bg-[#F2F2F6] rounded-lg'><IoMdCheckmark className='text-[#817E7E]' /></span>
                                                    <span className='text-sm'>Project "Teamwork Dream Work" Launch Timeline</span>
                                                </div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">Lexicon promo</div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">Design</div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">084764344</div>
                                            </td>
                                            <td className='bg-white p-2 rounded-r-xl mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm flex gap-1 items-center justify-center">89% <AiOutlineArrowDown className="text-[#FF0000]" /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='bg-white p-2 rounded-l-xl mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="flex items-center gap-2">
                                                    <span className='p-1 bg-[#F2F2F6] rounded-lg'><IoMdCheckmark className='text-[#817E7E]' /></span>
                                                    <span className='text-sm'>Project "Teamwork Dream Work" Launch Timeline</span>
                                                </div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">Lexicon promo</div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">Design</div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">084764344</div>
                                            </td>
                                            <td className='bg-white p-2 rounded-r-xl mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm flex gap-1 items-center justify-center">89% <AiOutlineArrowUp className="text-[#14FF00]" /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='bg-white p-2 rounded-l-xl mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="flex items-center gap-2">
                                                    <span className='p-1 bg-[#F2F2F6] rounded-lg'><IoMdCheckmark className='text-[#817E7E]' /></span>
                                                    <span className='text-sm'>Project "Teamwork Dream Work" Launch Timeline</span>
                                                </div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">Lexicon promo</div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">Design</div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">084764344</div>
                                            </td>
                                            <td className='bg-white p-2 rounded-r-xl mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm flex gap-1 items-center justify-center">89% <AiOutlineArrowUp className="text-[#14FF00]" /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='bg-white p-2 rounded-l-xl mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="flex items-center gap-2">
                                                    <span className='p-1 bg-[#F2F2F6] rounded-lg'><IoMdCheckmark className='text-[#817E7E]' /></span>
                                                    <span className='text-sm'>Project "Teamwork Dream Work" Launch Timeline</span>
                                                </div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">Lexicon promo</div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">Design</div>
                                            </td>
                                            <td className='bg-white p-2 mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm">084764344</div>
                                            </td>
                                            <td className='bg-white p-2 rounded-r-xl mb-3 border-b-[1px] border-b-[#F6F6F6]'>
                                                <div className="text-center border-l-[1px] border-l-[#013264] text-sm flex gap-1 items-center justify-center">89% <AiOutlineArrowUp className="text-[#14FF00]" /></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <label htmlFor='my-modal-5' className="modal">
                <label htmlFor='' className="modal-box w-11/12 max-w-5xl rounded-2xl p-0">
                    <img src={ModalHeaderImg} alt="" className='w-full' />
                    <div className="flex">
                        <div className="w-[230px] bg-[#EEEEEE] p-3">
                            <h2 className="text-xl font-bold mb-4">Add to card</h2>
                            <div className="flex flex-col gap-3">
                                <div className='flex gap-3 items-center px-3 py-2 rounded-lg border-[1px] border-[#013264] cursor-pointer relative'>
                                    <span className='bg-[#013264] p-2 text-white rounded-full' onClick={() => setShowAddMember(true)}><AiOutlineUserAdd className='text-xl' /></span>
                                    <span className='text-sm' onClick={() => setShowAddMember(true)}>Add members</span>
                                    {
                                        showAddMember && <div className="absolute top-10 left-16 rounded-lg p-4 bg-white shadow-lg z-[9999] w-80">
                                            <button className="text-right w-full" onClick={() => setShowAddMember(false)}><FaTimes /></button>
                                            <h3 className="text-center text-lg font-bold mb-3">Add Members</h3>
                                            <div className="flex items-center gap-3 bg-[#EEEEEE] py-2 px-4 rounded-full">
                                                <BiSearch />
                                                <input type="text" className='flex-1 bg-transparent outline-none' placeholder='Search members' />
                                            </div>
                                            <h4 className="text-sm font-semibold mt-5 mb-2">Onboard members</h4>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex bg-[#EEEEEE] justify-between px-2 py-1 rounded items-center">
                                                    <div className="flex gap-2 items-center">
                                                        <img src={Profile1Img} alt="" className='rounded-full w-12 h-12' />
                                                        <span>Aqsa nawaz</span>
                                                    </div>
                                                    <IoMdCheckmark />
                                                </div>
                                                <div className="flex bg-[#EEEEEE] justify-between px-2 py-1 rounded items-center">
                                                    <div className="flex gap-2 items-center">
                                                        <img src={Profile2Img} alt="" className='rounded-full w-12 h-12' />
                                                        <span>Kevin Alexander</span>
                                                    </div>
                                                    <IoMdCheckmark />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className='flex gap-3 items-center px-3 py-2 rounded-lg border-[1px] border-[#013264] cursor-pointer relative'>
                                    <span className='bg-[#013264] p-2 text-white rounded-full' onClick={() => seShowAddLabel(true)}><MdLabelOutline className='text-xl' /></span>
                                    <span className='text-sm' onClick={() => seShowAddLabel(true)}>Add Labels</span>
                                    {
                                        showAddLabel && <div className="absolute top-10 left-16 rounded-lg p-4 bg-white shadow-lg z-[9999] w-80">
                                            <button className="text-right w-full" onClick={() => seShowAddLabel(false)}><FaTimes /></button>
                                            <h3 className="text-center text-lg font-bold mb-3">Add Labels</h3>
                                            <div className="flex items-center gap-3 bg-[#EEEEEE] py-2 px-4 rounded-full">
                                                <BiSearch />
                                                <input type="text" className='flex-1 bg-transparent outline-none' placeholder='Search Labels' />
                                            </div>
                                            <h4 className="text-sm font-semibold mt-5 mb-2">Onboard members</h4>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex bg-[#D6ECD2] justify-between px-2 py-1 rounded items-center">
                                                    <div className="flex gap-2 items-center">
                                                        <span alt="" className='rounded-full w-12 h-12 bg-[#7BC86C]' />
                                                        <span>Design in progress</span>
                                                    </div>
                                                    <IoMdCheckmark />
                                                </div>
                                                <div className="flex bg-[#FAF3C0] justify-between px-2 py-1 rounded items-center">
                                                    <div className="flex gap-2 items-center">
                                                        <span alt="" className='rounded-full w-12 h-12 bg-[#F5DD29]' />
                                                    </div>
                                                    <IoMdCheckmark />
                                                </div>
                                                <div className="flex bg-[#FCE6C6] justify-between px-2 py-1 rounded items-center">
                                                    <div className="flex gap-2 items-center">
                                                        <span alt="" className='rounded-full w-12 h-12 bg-[#FFAF3F]' />
                                                    </div>
                                                    <IoMdCheckmark />
                                                </div>
                                                <div className="flex bg-[#EDDBF4] justify-between px-2 py-1 rounded items-center">
                                                    <div className="flex gap-2 items-center">
                                                        <span alt="" className='rounded-full w-12 h-12 bg-[#CD8DE5]' />
                                                    </div>
                                                    <IoMdCheckmark />
                                                </div>
                                                <div className="flex bg-[#BDECF3] justify-between px-2 py-1 rounded items-center">
                                                    <div className="flex gap-2 items-center">
                                                        <span alt="" className='rounded-full w-12 h-12 bg-[#29CCE5]' />
                                                    </div>
                                                    <IoMdCheckmark />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className='flex gap-3 items-center px-3 py-2 rounded-lg border-[1px] border-[#013264] cursor-pointer relative'>
                                    <span className='bg-[#013264] p-2 text-white rounded-full' onClick={() => setShowAddCheckList(true)}><IoMdCheckmark className='text-xl' /></span>
                                    <span className='text-sm' onClick={() => setShowAddCheckList(true)}>Add Checklist</span>
                                    {
                                        showAddCheckList && <div className="absolute top-10 left-16 rounded-lg p-4 bg-white shadow-lg z-[9999] w-80">
                                            <button className="text-right w-full" onClick={() => setShowAddCheckList(false)}><FaTimes /></button>
                                            <h3 className="text-center text-lg font-bold">Add Checklist</h3>
                                            <label htmlFor="" className='text-sm block'> Title</label>
                                            <input type="text" placeholder='Checklist' className='bg-[#EEEEEE] py-2 px-4 rounded-full text-sm outline-none w-full' />
                                            <div className="text-center">
                                                <button className='py-1 px-5 rounded text-white bg-[#013264] text-xs mt-5'>Add</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className='flex gap-3 items-center px-3 py-2 rounded-lg border-[1px] border-[#013264] cursor-pointer relative'>
                                    <span className='bg-[#013264] p-2 text-white rounded-full'><TbNotes className='text-xl' /></span>
                                    <span className='text-sm'>Add Dates</span>
                                </div>
                                <div className='flex gap-3 items-center px-3 py-2 rounded-lg border-[1px] border-[#013264] cursor-pointer relative'>
                                    <span className='bg-[#013264] p-2 text-white rounded-full'><BiLink className='text-xl' /></span>
                                    <span className='text-sm'>Add Attachment</span>
                                </div>
                                <div className='flex gap-3 items-center px-3 py-2 rounded-lg border-[1px] border-[#013264] cursor-pointer relative'>
                                    <span className='bg-[#013264] p-2 text-white rounded-full'><RiGalleryLine className='text-xl' /></span>
                                    <span className='text-sm'>Add Cover</span>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold mb-4 mt-6">Action</h2>
                            <div className="flex flex-col gap-3">
                                <div className='flex gap-3 items-center px-3 py-2 rounded-lg border-[1px] border-[#013264] cursor-pointer relative'>
                                    <span className='bg-[#013264] p-2 text-white rounded-full'><FaRandom className='text-xl' /></span>
                                    <span className='text-sm'>Move</span>
                                </div>
                                <div className='flex gap-3 items-center px-3 py-2 rounded-lg border-[1px] border-[#013264] cursor-pointer relative'>
                                    <span className='bg-[#013264] p-2 text-white rounded-full'><RxCopy className='text-xl' /></span>
                                    <span className='text-sm'>Copy</span>
                                </div>
                                <div className='flex gap-3 items-center px-3 py-2 rounded-lg border-[1px] border-[#013264] cursor-pointer relative'>
                                    <span className='bg-[#013264] p-2 text-white rounded-full'><HiPrinter className='text-xl' /></span>
                                    <span className='text-sm'>Make Template</span>
                                </div>
                                <div className='flex gap-3 items-center px-3 py-2 rounded-lg border-[1px] border-[#013264] cursor-pointer relative'>
                                    <span className='bg-[#013264] p-2 text-white rounded-full'><AiOutlineEye className='text-xl' /></span>
                                    <span className='text-sm'>Watch</span>
                                </div>
                                <div className='flex gap-3 items-center px-3 py-2 rounded-lg border-[1px] border-[#013264] cursor-pointer relative'>
                                    <span className='bg-[#013264] p-2 text-white rounded-full'><HiOutlineBookOpen className='text-xl' /></span>
                                    <span className='text-sm'>Archieve</span>
                                </div>
                                <div className='flex gap-3 items-center px-3 py-2 rounded-lg border-[1px] border-[#013264] cursor-pointer relative'>
                                    <span className='bg-[#013264] p-2 text-white rounded-full'><BsShare className='text-xl' /></span>
                                    <span className='text-sm'>Share</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 p-4">
                            <div className="grid grid-cols-2 gap-y-5 gap-x-24">
                                <div className='rounded-xl border-[1.5px] border-[#CACACA] p-4'>
                                    <h3 className="text-xl font-bold">Title</h3>
                                    <p className='text-[#6B6B6B] text-sm'>Design project ux and ui</p>
                                </div>
                                <div className='rounded-xl border-[1.5px] border-[#CACACA] p-4'>
                                    <h3 className="text-lg font-medium">Date</h3>
                                    <p className='text-[#6B6B6B] text-sm'>12/12/22 - 25/12/22</p>
                                </div>
                                <div className='rounded-xl border-[1.5px] border-[#CACACA] p-4'>
                                    <h3 className="text-xl font-medium">Members</h3>
                                    <div className="flex">
                                        <div className='rounded-full border-[1px] border-white'>
                                            <img src={Profile1Img} alt="" className='w-8 h-8' />
                                        </div>
                                        <div className='rounded-full border-[1px] border-white -ml-2'>
                                            <img src={Profile2Img} alt="" className='w-8 h-8' />
                                        </div>
                                        <div className='rounded-full border-[1px] border-white -ml-2'>
                                            <img src={Profile3Img} alt="" className='w-8 h-8' />
                                        </div>
                                        <div className='rounded-full border-[1px] border-white -ml-2'>
                                            <img src={Profile2Img} alt="" className='w-8 h-8' />
                                        </div>
                                        <div className='rounded-full border-[1px] border-white -ml-2 relative cursor-pointer'>
                                            <img src={Profile1Img} alt="" className='w-8 h-8 opacity-80 speia' />
                                            <AiOutlinePlus className='absolute top-3 left-3 text-xs ' />
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-xl border-[1.5px] border-[#CACACA] p-4'>
                                    <h3 className="text-lg font-medium">Labels</h3>
                                    <div className="flex gap-5 items-center mt-3">
                                        <button className='text-xs py-1 px-4 rounded bg-[#F08C261A] text-[#F08C26]'>Marketing</button>
                                        <button className='text-xs py-1 px-4 rounded bg-[#14FF001A] text-[#14FF00]'>Design</button>
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-xl border-[1.5px] border-[#CACACA] p-4 my-4'>
                                <h3 className="text-lg font-medium flex items-center gap-3">Description <BsPencilFill className='text-sm' /></h3>
                                <p className='text-sm text-[#6B6B6B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                            <div className='rounded-xl border-[1.5px] border-[#CACACA] p-4 my-4'>
                                <h3 className="text-lg font-medium mb-2">Attachment</h3>
                                <div className="flex gap-3 bg-[#EEEEEE] items-center rounded-lg justify-between">
                                    <img src={AttachmentImg} alt="" className='rounded-l-lg' />
                                    <div>
                                        <h3 className="text-md font-medium">Tesla .png</h3>
                                        <p className="text-sm text-[#777777]">Added Aug 20 at 12:30pm </p>
                                    </div>
                                    <div className="flex gap-2 items-center px-5">
                                        <AiOutlineComment />
                                        <div className='border-l-[1px] border-r-[1px] border-l-[#013264] border-r-[#013264] px-4'>
                                            <FiTrash />
                                        </div>
                                        <BsPencilFill />
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-xl border-[1.5px] border-[#CACACA] p-4 my-4'>
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-2 items-center'>
                                        <h3 className="text-lg font-medium mb-2">Attachment</h3>
                                        <div className='flex items-center gap-3'>
                                            <div className='bg-[#BCBCBC] w-40 h-1'>
                                                <div className="bg-[#14FF00] w-20 h-1"></div>
                                            </div>
                                            <span className='text-xs text-[#6B6B6B]'>32%</span>
                                        </div>
                                    </div>
                                    <FiTrash />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex gap-3 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='text-xs text-[#6B6B6B]'>Ut labore et dolore magna aliqua. </label>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='text-xs text-[#6B6B6B]'>Exercitation ullamco laboris nisi ut aliquip ex ea comm.</label>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='text-xs text-[#6B6B6B]'>Sed do eiusmod tempor incididunt ut.</label>
                                    </div>
                                    <div>
                                        <button className='bg-[#013264] py-2 px-6 rounded-lg text-xs text-white'>Add new item</button>
                                    </div>
                                </div>
                            </div>
                            <hr className='my-6 border-[#013264] border-[1px] w-[80%] mx-auto' />
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-xl">Activity</h3>
                                <button className='text-xs bg-[#013264] text-white py-1 px-5 rounded-lg'>Show details</button>
                            </div>
                            <div className='flex gap-3 items-center rounded-lg py-1 px-4 bg-[#EEEEEE] border-[1px] border-[#CACACA] my-3'>
                                <img src={Profile1Img} alt="" className='w-14 h-14 rounded-full' />
                                <input type="text" className='text-sm flex-1 bg-transparent outline-none' placeholder='Write something here...' />
                            </div>
                            <div className='mb-2 mt-4 flex items-center gap-3'>
                                <h3 className="font-medium text-sm">Aqsa Nawaz</h3>
                                <p className="text-xs underline">Nov 25 at 1:17 PM</p>
                            </div>
                            <div className='flex gap-3 items-center rounded-lg py-1 px-4 bg-[#EEEEEE] border-[1px] border-[#CACACA] my-3 justify-between'>
                                <img src={Profile1Img} alt="" className='w-14 h-14 rounded-full' />
                                <input type="text" className='text-sm flex-1 bg-transparent outline-none' placeholder='New changes are already updated , need for refining...' />
                                <div className='flex gap-2 items-center'>
                                    <BsEmojiSmile />
                                    <div className="px-3 border-l-[1px] border-r-[1px] border-l-[#013264] border-r-[#013264]">
                                        <FiTrash />
                                    </div>
                                    <BsPencilFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
            </label>
        </>
    )
}

export default V4DashboardLayout