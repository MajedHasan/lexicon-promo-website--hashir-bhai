import { Link } from "react-router-dom"

import { RiSearchLine } from "react-icons/ri"
import { AiOutlineExport, AiOutlinePrinter, AiOutlineClose, AiOutlinePlus } from "react-icons/ai"
import { AiOutlineEye } from "react-icons/ai"
import { HiOutlinePencilSquare } from "react-icons/hi2"
import { CiLocationOn } from "react-icons/ci"
import { IoCheckmark } from "react-icons/io5"
import { useState } from "react"
import { toast } from "react-toastify"


const V1Accounts = () => {

    const [showMore, setShowMore] = useState(null)
    const [activateLocation, setActivateLocation] = useState(null)
    const [deactivateLocation, setDeactivateLocation] = useState(null)

    const handleActivate = () => {
        setAccounts([...accounts.filter(account => account._id == activateLocation ? account.status = "Active" : account)])
        setAccounts([...accounts.filter(account => account._id == activateLocation ? account.isActive = "true" : account)])
        setShowMore(null)
        toast.success("You have been Successfully activate location!")
    }
    const handleDeactivate = () => {
        setAccounts([...accounts.filter(account => account._id == deactivateLocation ? account.status = "Deactive" : account)])
        setAccounts([...accounts.filter(account => account._id == deactivateLocation ? account.isActive = "false" : account)])
        setShowMore(null)
        toast.success("You have been Successfully deactivate location!")
    }

    const [accounts, setAccounts] = useState([
        {
            _id: 114,
            location: [
                "San Gioh"
            ],
            pointOfContact: "Jim Jozzaf Roe",
            email: "info@gmail.com",
            telephone: "999-3234-444",
            start: 500,
            end: 1000,
            status: "Active",
            spend: 665,
            billingType: "Fully Paid",
            isActive: "true"
        },
        {
            _id: 104,
            location: [
                "San Gioh"
            ],
            pointOfContact: "Aleeyan Zufari",
            email: "info@gmail.com",
            telephone: "999-3234-444",
            start: 500,
            end: 1000,
            status: "Deactive",
            spend: 665,
            billingType: "Fully Paid",
            isActive: "false"
        },
        {
            _id: 112,
            location: [
                "San Gioh"
            ],
            pointOfContact: "Sultan Ayyub ch",
            email: "info@gmail.com",
            telephone: "999-3234-444",
            start: 500,
            end: 1000,
            status: "Active",
            spend: 665,
            billingType: "Fully Paid",
            isActive: "true"
        }
    ])


    const [singleLocation, setSingleLocation] = useState(null)

    const singleLocationAction = () => {
        if (singleLocation.status === "add") {
            // if (!singleLocation.account) {
            //     toast.error("Please fill up all field")
            // } else {
            setSingleLocation(null)
            setShowMore(null)
            const id = (Math.random(10) * 1000).toFixed(0)
            setAccounts([...accounts, {
                _id: id, location: ["San Gioh"], pointOfContact: singleLocation?.account?.pointOfContact, email: singleLocation?.account?.email, telephone: singleLocation?.account?.telephone, start: singleLocation?.account?.start, end: singleLocation?.account?.end, status: "Active", spend: singleLocation?.account?.spend, billingType: "Fully Paid", isActive: ""
            }])
            toast.success("You have been Successfully add new location into the list!");
            // }
        }
        else if (singleLocation.status === "edit") {
            setSingleLocation(null)
            toast.success("You have been Successfully updated location!")
        }
    }


    return (
        <>
            {
                singleLocation === null && <div>
                    <div className="mt-5 mb-8 grid grid-cols-6 gap-8">
                        <div className="rounded-lg bg-[#F9FAFB] border-2 border-[#EAEAEA] p-4">
                            <select name="" id="" className="bg-transparent w-full focus:outline-none focus:border-none">
                                <option value="" hidden selected >Location</option>
                                <option value="">Afganistan</option>
                                <option value="">Bangladesh</option>
                                <option value="">Pakistan</option>
                                <option value="">Saudi Arabia</option>
                                <option value="">United States</option>
                                <option value="">United Kingdom</option>
                            </select>
                        </div>
                        <div className="rounded-lg bg-[#F9FAFB] border-2 border-[#EAEAEA] p-4">
                            <select name="" id="" className="bg-transparent w-full focus:outline-none focus:border-none">
                                <option value="" hidden selected >Point of Select</option>
                                <option value="">Point no 1</option>
                                <option value="">Point no 2</option>
                            </select>
                        </div>
                        <div className="rounded-lg bg-[#F9FAFB] border-2 border-[#EAEAEA] p-4">
                            <select name="" id="" className="bg-transparent w-full focus:outline-none focus:border-none">
                                <option value="" hidden selected >Start Date</option>
                                <option value="">11-02-23</option>
                                <option value="">12-02-23</option>
                            </select>
                        </div>
                        <div className="rounded-lg bg-[#F9FAFB] border-2 border-[#EAEAEA] p-4">
                            <select name="" id="" className="bg-transparent w-full focus:outline-none focus:border-none">
                                <option value="" hidden selected >Spend</option>
                                <option value="">$1000</option>
                                <option value="">$2000</option>
                            </select>
                        </div>
                        <div >
                        </div>
                        <div>
                            <Link to="" className="w-full flex justify-center items-center rounded-lg bg-[#FFD584] h-full text-black font-semibold">Add New Location</Link>
                        </div>
                    </div>
                    <div className="bg-[#FFFBF3] h-full max-h-[570px] rounded-lg">
                        <div className="py-6">
                            <h2 className="text-xl font-semibold text-center">Group Account Healthy Living Network </h2>
                        </div>
                        <div className="bg-[#055F5B] text-white py-2 px-3 flex justify-between items-center gap-6">
                            <div className="flex items-center gap-4">
                                <span className="text-sm">Show</span>
                                <select name="" id="" className="bg-transparent rounded-lg border-2 border-white py-1 px-2 outline-none">
                                    <option value="">5</option>
                                    <option value="">10</option>
                                    <option value="">20</option>
                                    <option value="">50</option>
                                    <option value="">100</option>
                                    <option value="">200</option>
                                    <option value="">500</option>
                                </select>
                                <span className="text-sm">Entities</span>
                            </div>
                            <div>
                                <div className="rounded-full bg-white flex items-center px-4 w-72">
                                    <RiSearchLine className="text-xl text-black" />
                                    <input type="text" className="input focus:outline-none text-sm text-black pl-2 flex-1" placeholder="Search..." />
                                </div>
                            </div>
                            <div className="flex gap-4 items-center text-white">
                                <button className="flex gap-3 items-center">
                                    <span className="text-sm">Export</span>
                                    <AiOutlineExport className="text-3xl" />
                                </button>
                                <div className="h-[40px] w-[1px] bg-white p-[1px]"></div>
                                <button className="flex gap-3 items-center">
                                    <span className="text-sm">Print</span>
                                    <AiOutlinePrinter className="text-3xl" />
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto min-h-[380px] max-h-[385px] pb-3">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className="bg-transparent">
                                            <div className="flex gap-2 items-center text-[#A8A8A8]">
                                                <input type="checkbox" className="w-5 h-5 rounded-lg" />
                                                <span className="text-sm font-normal">ID</span>
                                            </div>
                                        </th>
                                        <th className="text-[#A8A8A8] font-normal bg-transparent text-xs">Location</th>
                                        <th className="text-[#A8A8A8] font-normal bg-transparent text-center text-xs">Point of Contact</th>
                                        <th className="text-[#A8A8A8] font-normal bg-transparent text-center text-xs">Contact Email</th>
                                        <th className="text-[#A8A8A8] font-normal bg-transparent text-center text-xs">Telephone</th>
                                        <th className="text-[#A8A8A8] font-normal bg-transparent text-center text-xs">Start</th>
                                        <th className="text-[#A8A8A8] font-normal bg-transparent text-center text-xs">End</th>
                                        <th className="text-[#A8A8A8] font-normal bg-transparent text-center text-xs">Status</th>
                                        <th className="text-[#A8A8A8] font-normal bg-transparent text-center text-xs">Spend</th>
                                        <th className="text-[#A8A8A8] font-normal bg-transparent text-center text-xs">Billing Type</th>
                                        <th className="text-[#A8A8A8] font-normal bg-transparent text-center text-xs">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        accounts?.map(account => (
                                            <tr key={account?._id}>
                                                <td className="bg-transparent">
                                                    <div className="flex gap-2 items-center">
                                                        <input type="checkbox" className="w-5 h-5 rounded-lg" />
                                                        <span className="text-black text-xs">{account?._id}</span>
                                                    </div>
                                                </td>
                                                <td className="bg-transparent text-xs text-black">{account?.location[0]}</td>
                                                <td className="bg-transparent text-xs text-black text-center">{account?.pointOfContact}</td>
                                                <td className="bg-transparent text-xs text-black text-center">{account?.email}</td>
                                                <td className="bg-transparent text-xs text-black text-center">{account?.telephone}</td>
                                                <td className="bg-transparent text-xs text-black text-center">{account?.start}</td>
                                                <td className="bg-transparent text-xs text-black text-center">{account?.end}</td>
                                                <td className="bg-transparent text-xs text-black text-center">
                                                    <span className={`py-1 px-3 ${account?.status === "Active" && "text-[#65E062] bg-[#65e0621a]"} ${account?.status === "Deactive" && "text-[#E06262] bg-[#ff00001a]"}`}>{account?.status}</span>
                                                </td>
                                                <td className="bg-transparent text-xs text-black text-center">{account?.spend}</td>
                                                <td className="bg-transparent text-xs text-black text-center">
                                                    <span className={`py-1 px-3 ${account?.billingType === "Fully Paid" && "text-[#65E062] bg-[#65e0621a]"} ${account?.billingType === "Not Paid" && "text-[#E06262] bg-[#ff00001a]"}`}>{account?.billingType}</span>
                                                </td>
                                                <td className="bg-transparent text-xs text-black text-center ">
                                                    <div className="relative">
                                                        <button className="bg-transparent text-green text-sm" onClick={() => showMore !== null && showMore == account._id ? setShowMore(null) : setShowMore(account?._id)}>
                                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.9991 12.4267C17.5858 12.4267 18.8791 11.1334 18.8791 9.54675C18.8791 7.96008 17.5858 6.66675 15.9991 6.66675C14.4125 6.66675 13.1191 7.96008 13.1191 9.54675C13.1191 11.1334 14.4125 12.4267 15.9991 12.4267Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M9.05383 25.3335C10.6405 25.3335 11.9338 24.0402 11.9338 22.4535C11.9338 20.8668 10.6405 19.5735 9.05383 19.5735C7.46716 19.5735 6.17383 20.8668 6.17383 22.4535C6.17383 24.0402 7.45383 25.3335 9.05383 25.3335Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M22.9464 25.3335C24.5331 25.3335 25.8264 24.0402 25.8264 22.4535C25.8264 20.8668 24.5331 19.5735 22.9464 19.5735C21.3597 19.5735 20.0664 20.8668 20.0664 22.4535C20.0664 24.0402 21.3597 25.3335 22.9464 25.3335Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                        {
                                                            account?._id === showMore && <div className={`absolute top-8 right-0 rounded-lg bg-white p-4 z-10 shadow-lg w-48 mb-3`}>
                                                                <button className="flex items-center gap-3 cursor-pointer" onClick={() => setSingleLocation({ account, status: "view" })}>
                                                                    <span className="flex justify-center items-center rounded-full p-3 bg-[#FFF7E6]">
                                                                        <AiOutlineEye className="text-xl" />
                                                                    </span>
                                                                    <span className="text-sm">View</span>
                                                                </button>
                                                                <hr className="my-2 w-[70%] mx-auto" />
                                                                <button className="flex items-center gap-3 cursor-pointer" onClick={() => setSingleLocation({ account, status: "edit" })}>
                                                                    <span className="flex justify-center items-center rounded-full p-3 bg-[#FFF7E6]">
                                                                        <HiOutlinePencilSquare className="text-xl" />
                                                                    </span>
                                                                    <span className="text-sm">Edit</span>
                                                                </button>
                                                                <hr className="my-2 w-[70%] mx-auto" />
                                                                <button className="flex items-center gap-3 cursor-pointer" onClick={() => setSingleLocation({ status: "add" })}>
                                                                    <span className="flex justify-center items-center rounded-full p-3 bg-[#FFF7E6]">
                                                                        <CiLocationOn className="text-xl" />
                                                                    </span>
                                                                    <span className="text-sm">Add Location</span>
                                                                </button>
                                                                <hr className="my-2 w-[70%] mx-auto" />
                                                                <label htmlFor={`${account?.isActive === "false" && "activateLocationModal"}`} onClick={() => account?.isActive === "false" && setActivateLocation(account?._id)}
                                                                >
                                                                    <div className={`flex items-center gap-3 cursor-pointer ${account?.isActive === "true" && "opacity-[0.5] cursor-auto brightness-50"}`}>
                                                                        <span className="flex justify-center items-center rounded-full p-3 bg-[#FFF7E6]">
                                                                            <IoCheckmark className="text-xl" />
                                                                        </span>
                                                                        <span className="text-sm">Activate</span>
                                                                    </div>
                                                                </label>
                                                                <hr className="my-2 w-[70%] mx-auto" />
                                                                <label htmlFor={`${account?.isActive === "true" && "deactivateLocationModal"}`} onClick={() => account?.isActive === "true" && setDeactivateLocation(account?._id)}
                                                                >
                                                                    <div className={`flex items-center gap-3 cursor-pointer ${account?.isActive === "false" && "opacity-[0.5] cursor-auto brightness-50"}`}>
                                                                        <span className="flex justify-center items-center rounded-full p-3 bg-[#FFF7E6]">
                                                                            <AiOutlineClose className="text-xl" />
                                                                        </span>
                                                                        <span className="text-sm">Deactivate</span>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-center mb-3">
                            <button className="rounded-lg bg-[#FFD584] py-2 px-5 text-md" onClick={() => setSingleLocation({ status: "add" })}>Add New Location</button>
                        </div>
                    </div>

                    <input type="checkbox" id="activateLocationModal" className="modal-toggle" />
                    <label htmlFor="activateLocationModal" className="modal cursor-pointer">
                        <label className="modal-box relative text-center block" htmlFor="">
                            <h3 className="text-3xl font-bold mt-5 mb-8">Activate Location</h3>
                            <p className="py-4 text-sm text-[#5E5E5E] my-5">Are you sure you want to activate location?</p>
                            <div className="grid grid-cols-2 gap-4 mb-5">
                                <label htmlFor="activateLocationModal" className="capitalize bg-[#E3E3E3] hover:bg-[#055F5B] text-[#055F5B] hover:text-[#FFFFFF] w-full cursor-pointer rounded-lg flex items-center justify-center font-semibold" onClick={() => setActivateLocation(null)}>
                                    Cancel
                                </label>
                                <label htmlFor="activateLocationModal" className="bg-[#055F5B] text-[#FFFFFF] capitalize flex-1 py-3 rounded-lg cursor-pointer hover:bg-[#101a1a] font-semibold" onClick={handleActivate}>Activate</label>
                            </div>
                        </label>
                    </label>

                    <input type="checkbox" id="deactivateLocationModal" className="modal-toggle" />
                    <label htmlFor="deactivateLocationModal" className="modal cursor-pointer">
                        <label className="modal-box relative text-center block" htmlFor="">
                            <h3 className="text-3xl font-bold mt-5 mb-8">Deactivate Location</h3>
                            <p className="py-4 text-sm text-[#5E5E5E] my-5">Are you sure you want to deactivate location?</p>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <label htmlFor="deactivateLocationModal" className="capitalize bg-[#E3E3E3] hover:bg-[#055F5B] text-[#055F5B] hover:text-[#FFFFFF] w-full cursor-pointer rounded-lg flex items-center justify-center font-semibold" onClick={() => setDeactivateLocation(null)}>
                                    Cancel
                                </label>
                                <label htmlFor="deactivateLocationModal" className="bg-[#055F5B] text-[#FFFFFF] capitalize flex-1 py-3 rounded-lg cursor-pointer hover:bg-[#101a1a] font-semibold" onClick={handleDeactivate}>Deactivate</label>
                            </div>
                        </label>
                    </label>
                </div>
            }
            {
                singleLocation !== null && <div>
                    <header className="my-5">
                        <div className="flex gap-2 items-center">
                            <Link to="/v1/dashboard" className="text-[#055F5B] text-lg">Dashboard</Link>
                            <span className="text-[#055F5B] text-lg font-semibold" >/</span>
                            <span className="text-[#055F5B] text-lg cursor-pointer" onClick={() => setSingleLocation(null)}>Accounts</span>
                            <span className="text-[#055F5B] text-lg font-semibold" >/</span>
                            <span className="text-[#979797] text-lg">
                                {singleLocation?.status === "add" && "Add "}
                                {singleLocation?.status === "edit" && "Edit "}
                                {singleLocation?.status === "view" && "View "}
                                Location
                            </span>
                        </div>
                    </header>
                    <div className="bg-[#FFFBF3] p-5 rounded-lg">
                        <h2 className="text-center mb-5 font-semibold text-2xl">{singleLocation?.status === "add" && "Add"} {singleLocation?.status === "edit" && "Update"} Location</h2>
                        <div className="flex gap-10 overflow-x-auto h-full max-h-[530px]">
                            <div className="w-2/5">
                                <div className="mb-5">
                                    <h4 className="text-xl font-semibold">Detals</h4>
                                    <div className="mt-1 border-2 border-[#C8C8C8] rounded-lg p-4">
                                        <div className="mb-4">
                                            <label htmlFor="" className="font-semibold mb-1 block">Account</label>
                                            <select name="" id="" className="bg-[#F9FAFB] border-2 border-[#EAEAEA] py-3 px-4 rounded-lg w-full outline-none" >
                                                <option value="">Healthy Living Network</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="font-semibold mb-1 block">Address</label>
                                            <textarea name="" id="" className="bg-[#F9FAFB] border-2 border-[#EAEAEA] py-3 px-4 rounded-lg w-full outline-none" placeholder="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.">
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className={`mt-10 mb-16 flex items-center gap-6 ${singleLocation.status === "add" || singleLocation.status === "edit" ? "" : "hidden"}`}>
                                    <button className="flex items-center justify-center rounded-full bg-white shadow-xl w-16 h-16">
                                        <AiOutlinePlus className="text-2xl" />
                                    </button>
                                    <span className="text-2xl font-semibold">Add More</span>
                                </div>
                                <div className={`flex items-center gap-10 ${singleLocation.status === "add" || singleLocation.status === "edit" ? "" : "hidden"}`}>
                                    <label htmlFor="" className="flex justify-center items-center w-48 h-12 rounded-xl cursor-pointer text-[#055F5B] font-semibold bg-[#055f5b1f]">Reset</label>
                                    <label htmlFor="singleLocationModal" className="flex justify-center items-center w-48 h-12 rounded-xl cursor-pointer text-white font-semibold bg-[#055F5B]">
                                        {singleLocation?.status === "add" && "Add"} {singleLocation?.status === "edit" && "Update"}
                                    </label>
                                </div>
                            </div>
                            <div className="w-3/5">
                                <div className="mb-5">
                                    <h4 className="text-xl font-semibold">Point of Contact</h4>
                                    <div className="mt-1 border-2 border-[#C8C8C8] rounded-lg p-4 grid grid-cols-2 gap-8">
                                        <div >
                                            <label htmlFor="" className="font-semibold mb-1 block">First Name</label>
                                            <input name="" id="" className="bg-[#F9FAFB] border-2 border-[#EAEAEA] py-3 px-4 rounded-lg w-full outline-none" placeholder="Shahzaib" />
                                        </div>
                                        <div>
                                            <label htmlFor="" className="font-semibold mb-1 block">Last Name</label>
                                            <input name="" id="" className="bg-[#F9FAFB] border-2 border-[#EAEAEA] py-3 px-4 rounded-lg w-full outline-none" placeholder="Akhtar" />
                                        </div>
                                        <div >
                                            <label htmlFor="" className="font-semibold mb-1 block">Email</label>
                                            <input name="" id="" className="bg-[#F9FAFB] border-2 border-[#EAEAEA] py-3 px-4 rounded-lg w-full outline-none" placeholder="info@gmail.com" />
                                        </div>
                                        <div>
                                            <label htmlFor="" className="font-semibold mb-1 block">Telephone</label>
                                            <input name="" id="" className="bg-[#F9FAFB] border-2 border-[#EAEAEA] py-3 px-4 rounded-lg w-full outline-none" placeholder="455 854 5656" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h4 className="text-xl font-semibold">Subscription details</h4>
                                    <div className="mt-1 border-2 border-[#C8C8C8] rounded-lg p-4 grid grid-cols-2 gap-5">
                                        <div >
                                            <label htmlFor="" className="font-semibold mb-1 block">Subscription</label>
                                            <select name="" id="" className="bg-[#F9FAFB] border-2 border-[#EAEAEA] py-3 px-4 rounded-lg w-full outline-none">
                                                <option value="">Subscription payment</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="" className="font-semibold mb-1 block">Order limit</label>
                                            <select name="" id="" className="bg-[#F9FAFB] border-2 border-[#EAEAEA] py-3 px-4 rounded-lg w-full outline-none">
                                                <option value="">1000</option>
                                            </select>
                                        </div>
                                        <div >
                                            <label htmlFor="" className="font-semibold mb-1 block">Start date</label>
                                            <input type="date" name="" id="" className="bg-[#F9FAFB] border-2 border-[#EAEAEA] py-3 px-4 rounded-lg w-full outline-none" placeholder="04/12/2022" />
                                        </div>
                                        <div>
                                            <label htmlFor="" className="font-semibold mb-1 block">End date</label>
                                            <input type="date" name="" id="" className="bg-[#F9FAFB] border-2 border-[#EAEAEA] py-3 px-4 rounded-lg w-full outline-none" placeholder="07/12/2022" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="checkbox" id="singleLocationModal" className="modal-toggle" />
                    <label htmlFor="singleLocationModal" className="modal cursor-pointer">
                        <label className="modal-box relative text-center block" htmlFor="">
                            <h3 className="text-3xl font-bold mt-5 mb-8">{singleLocation?.status === "add" && "Add"} {singleLocation?.status === "edit" && "Update"}</h3>
                            <p className="py-4 text-sm text-[#5E5E5E] my-5">
                                Are you sure you want to {singleLocation?.status === "add" && "Add"} {singleLocation?.status === "edit" && "Update"} location?
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <label htmlFor="singleLocationModal" className="capitalize bg-[#E3E3E3] hover:bg-[#055F5B] text-[#055F5B] hover:text-[#FFFFFF] w-full cursor-pointer rounded-lg flex items-center justify-center font-semibold">
                                    Cancel
                                </label>
                                <label htmlFor="singleLocationModal" className="bg-[#055F5B] text-[#FFFFFF] capitalize flex-1 py-3 rounded-lg cursor-pointer hover:bg-[#101a1a] font-semibold" onClick={singleLocationAction}>{singleLocation?.status === "add" && "Add"} {singleLocation?.status === "edit" && "Update"}</label>
                            </div>
                        </label>
                    </label>
                </div>
            }
        </>
    )
}

export default V1Accounts