import { Link, Outlet, useLocation } from "react-router-dom"


import { RiMenu2Line } from "react-icons/ri"
import { RxDashboard } from "react-icons/rx"
import { AiOutlineStar } from "react-icons/ai"
import { MdOutlineTimer } from "react-icons/md"
import { HiOutlineUsers } from "react-icons/hi2"
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5"
import { FiSearch } from "react-icons/fi"
import { GrNotification } from "react-icons/gr"
import { IoMdCheckmark } from "react-icons/io"
import { RiErrorWarningLine } from "react-icons/ri"
import { useEffect, useState } from "react"

import profileImg from "../assets/v1/profile-img.png"

import './V1DashboardLayout.css'



const V1DahsboardLayout = () => {

    const [isMenuExpand, setIsMenuExpand] = useState(false)
    const [page, setPage] = useState("Dashboard")
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [showNotification, setShowNotification] = useState(false)

    const location = useLocation()
    const pathname = location.pathname

    useEffect(() => {
        if (pathname.includes("neworders")) {
            setPage("New Orders")
        } else if (pathname.includes("currentorders")) {
            setPage("Current Orders")
        } else if (pathname.includes("collaterals")) {
            setPage("Collaterals")
        } else if (pathname.includes("accounts")) {
            setPage("Accounts")
        } else if (pathname.includes("settings")) {
            setPage("Settings")
        } else if (pathname.includes("dashboard")) {
            setPage("Dashboard")
        }
    }, [pathname])


    return (
        <>
            <main className="w-full flex bg-[#055F5B] p-4 min-h-screen">
                <nav className={`${isMenuExpand ? "min-w-[160px]" : "w-[70px]"} transition-all flex flex-col justify-between`}>
                    <div>
                        <div className="text-center text-white mb-8"> <Link to="" className={isMenuExpand ? "text-lg font-semibold" : "text-sm"}>Lexicon Promo</Link> </div>
                        <Link to="/v1/dashboard">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "Dashboard" && "active"}`}>
                                <div className="top-border"></div>
                                <RxDashboard className="text-xl" />
                                {
                                    isMenuExpand && <span className="text-sm">Dashboard</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                        <Link to="/v1/dashboard/neworders">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "New Orders" && "active"}`}>
                                <div className="top-border"></div>
                                <AiOutlineStar className="text-xl" />
                                {
                                    isMenuExpand && <span className="text-sm">New Orders</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                        <Link to="/v1/dashboard/currentorders">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "Current Orders" && "active"}`}>
                                <div className="top-border"></div>
                                <MdOutlineTimer className="text-xl" />
                                {
                                    isMenuExpand && <span className="text-sm">Current Orders</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                        <Link to="/v1/dashboard/collaterals">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "Collaterals" && "active"}`}>
                                <div className="top-border"></div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" >
                                    <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke={page === "Collaterals" ? "#045e5c" : "white"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7 13H12" stroke={page === "Collaterals" ? "#045e5c" : "white"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7 17H16" stroke={page === "Collaterals" ? "#045e5c" : "white"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke={page === "Collaterals" ? "#045e5c" : "white"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                {
                                    isMenuExpand && <span className="text-sm">Collaterals</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                        <Link to="/v1/dashboard/accounts">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "Accounts" && "active"}`}>
                                <div className="top-border"></div>
                                <HiOutlineUsers className="text-xl" />
                                {
                                    isMenuExpand && <span className="text-sm">Accounts</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/v1/dashboard/settings">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "Settings" && "active"}`} style={{ marginBottom: "5px" }}>
                                <div className="top-border"></div>
                                <IoSettingsOutline className="text-xl" />
                                {
                                    isMenuExpand && <span className="text-sm">Settings</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                        <div className="pl-3">
                            <button className="outline-none border-none bg-transparent" onClick={() => setIsMenuExpand(!isMenuExpand)}>
                                <RiMenu2Line className="text-3xl text-white" />
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="flex-1 bg-[#FFFFFF] p-5 rounded-3xl">
                    <header className="flex justify-between items-center">
                        <div className="flex gap-4">
                            <button className="outline-none border-none bg-transparent" onClick={() => setIsMenuExpand(!isMenuExpand)}>
                                <RiMenu2Line className="text-3xl" />
                            </button>
                            <h2 className="text-xl font-bold">{page}</h2>
                        </div>
                        <div className="flex items-center gap-7">
                            <div className="relative">
                                <div className="rounded-3xl px-5 py-3 flex gap-2 items-center bg-[#055f5b0a]">
                                    <FiSearch className="text-2xl" />
                                    <input type="text" placeholder="Search..." className="text-sm outline-none border-none bg-transparent w-56" />
                                </div>
                                {
                                    false && <div className="absolute top-12 left-0 bg-white p-3 w-full rounded-lg shadow-lg"></div>
                                }
                            </div>
                            <div className="relative">
                                <div className="relative cursor-pointer" onClick={() => setShowNotification(!showNotification
                                )}>
                                    <GrNotification className="text-2xl cursor-pointer" />
                                    <span className="absolute top-0 right-0 rounded-full w-3 h-3 bg-[#38FF51] border-2 border-white"></span>
                                </div>
                                {
                                    showNotification && <div className="absolute top-16 -left-[160px] bg-white p-4 w-[320px] rounded-lg shadow-2xl z-[999]">
                                        <div>
                                            <Link to="" className="flex gap-4 items-center">
                                                <span className="bg-[#FFF7E6] p-3 rounded-full text-black">
                                                    <IoMdCheckmark className="text-xl" />
                                                </span>
                                                <span className="text-sm">Request for changing the location have been approved by the admin.</span>
                                            </Link>
                                        </div>
                                        <hr className="my-3 w-[80%] mx-auto" />
                                        <div>
                                            <Link to="" className="flex gap-4 items-center">
                                                <span className="bg-[#FFF7E6] p-3 rounded-full text-black">
                                                    <RiErrorWarningLine className="text-xl" />
                                                </span>
                                                <span className="text-sm">Shipment have been deloyed due to the issues in delivery services.</span>
                                            </Link>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="relative">
                                <div className="flex gap-4 items-center justify-between">
                                    <img src={profileImg} className="w-12 h-12 rounded-full object-fill cursor-pointer" onClick={() => setShowProfileDropdown(!showProfileDropdown)} />
                                    <span className="text-md">aqsa.design@gmail.com
                                    </span>
                                </div>
                                {
                                    showProfileDropdown && <div className="absolute top-16 left-0 bg-white p-4 w-[230px] rounded-lg shadow-lg z-[999]">
                                        <div>
                                            <Link to="" className="flex gap-4 items-center">
                                                <span className="bg-[#FFF7E6] p-3 rounded-full text-black">
                                                    <IoSettingsOutline className="text-xl" />
                                                </span>
                                                <span className="text-sm">Account Setting</span>
                                            </Link>
                                        </div>
                                        <hr className="my-3 w-[80%] mx-auto" />
                                        <div>
                                            <label
                                                htmlFor="logoutModal" className="flex gap-4 items-center cursor-pointer"
                                            >
                                                <span className="bg-[#FFF7E6] p-3 rounded-full text-black">
                                                    <IoLogOutOutline className="text-xl" />
                                                </span>
                                                <span className="text-sm">LogOut</span>
                                            </label>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </header>
                    <hr className="my-3 w-[95%] mx-auto" />
                    <Outlet />
                </div>
            </main>
            <input type="checkbox" id="logoutModal" className="modal-toggle" />
            <label htmlFor="logoutModal" className="modal cursor-pointer">
                <label className="modal-box relative text-center block" htmlFor="">
                    <h3 className="text-3xl font-bold mt-4 mb-7">LogOut</h3>
                    <p className="py-4 text-sm text-[#5E5E5E]">Are you sure you want to logout from the system?</p>
                    <div className="grid grid-cols-2 gap-4">
                        <label htmlFor="logoutModal" className="capitalize bg-[#E3E3E3] hover:bg-[#055F5B] text-[#055F5B] hover:text-[#FFFFFF] w-full cursor-pointer rounded-lg flex items-center justify-center font-semibold">
                            Cancel
                        </label>
                        <label htmlFor="logoutModal" className="bg-[#055F5B] text-[#FFFFFF] capitalize flex-1 py-3 rounded-lg cursor-pointer hover:bg-[#101a1a] font-semibold">LogOut</label>
                    </div>
                </label>
            </label>
        </>
    )
}

export default V1DahsboardLayout