import { useState } from "react"
import { BsChevronDown, BsChevronUp, BsChevronLeft } from "react-icons/bs"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { FiTrash } from "react-icons/fi"
import { FcCheckmark } from "react-icons/fc"


import productImg from "../../assets/v1/dashboard/new-order/print-products.png"
import productImg2 from "../../assets/v1/dashboard/new-order/pens.png"
import productImg3 from "../../assets/v1/dashboard/new-order/business-card.png"
import user from "../../assets/v1/dashboard/current-order/user.png"
import parcel from "../../assets/v1/dashboard/current-order/parcel.png"
import track from "../../assets/v1/dashboard/current-order/track.png"

import { toast } from "react-toastify"
import styles from "./V1CurrentOrders.module.css"

import orderDetailsImg01 from "../../assets/v1/dashboard/current-order/order-details-img-01.png"


const V1CurrentOrders = () => {

    const [screen, setScreen] = useState(null)

    const [isHideTable, setIsHideTable] = useState(false)

    return (
        <>
            {
                screen === null && <div>
                    <div className="mt-5 mb-8 grid grid-cols-6 gap-8">
                        <div className="rounded-lg bg-[#F9FAFB] border-2 border-[#EAEAEA] p-4">
                            <select name="" id="" className="bg-transparent w-full focus:outline-none focus:border-none">
                                <option value="" hidden >Select Item</option>
                                <option value="">Item 01</option>
                                <option value="">Item 02</option>
                            </select>
                        </div>
                        <div className="rounded-lg bg-[#F9FAFB] border-2 border-[#EAEAEA] p-4">
                            <select name="" id="" className="bg-transparent w-full focus:outline-none focus:border-none">
                                <option value="" hidden >Quantity</option>
                                <option value="">100</option>
                                <option value="">200</option>
                                <option value="">500</option>
                                <option value="">1000</option>
                            </select>
                        </div>
                        <div className="rounded-lg bg-[#F9FAFB] border-2 border-[#EAEAEA] p-4">
                            <select name="" id="" className="bg-transparent w-full focus:outline-none focus:border-none">
                                <option value="" hidden >Production Status</option>
                                <option value="">Start</option>
                                <option value="">In Progress</option>
                                <option value="">Shipped</option>
                                <option value="">Delivered</option>
                            </select>
                        </div>
                        <div className="rounded-lg bg-[#F9FAFB] border-2 border-[#EAEAEA] p-4">
                            <select name="" id="" className="bg-transparent w-full focus:outline-none focus:border-none">
                                <option value="" hidden >Shipping Info</option>
                                <option value="">By Air</option>
                                <option value="">By Track</option>
                            </select>
                        </div>
                        <div >
                        </div>
                        <div>
                            <button className="w-full flex justify-center items-center rounded-lg bg-[#FFD584] h-full text-black ">New Order</button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-[#FFFBF3] p-5 flex-1 rounded-lg">
                            <h2 className="text-center font-semibold text-2xl mb-0">Current Orders</h2>
                            <div className="overflow-x-auto min-h-[420px] max-h-[450px] h-full pb-3">
                                <table className="table w-full">
                                    <thead>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-end gap-2">
                                                <span className="cursor-pointer">Items</span>
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-center gap-2">
                                                <span className="cursor-pointer">Quantity</span>
                                                <div className="flex flex-col gap-[1px]">
                                                    <BsChevronUp className="cursor-pointer" />
                                                    <BsChevronDown className="cursor-pointer" />
                                                </div>
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-center gap-2">
                                                <span className="cursor-pointer">Production Status</span>
                                                <div className="flex flex-col gap-[1px]">
                                                    <BsChevronUp className="cursor-pointer" />
                                                    <BsChevronDown className="cursor-pointer" />
                                                </div>
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-end justify-center gap-2">
                                                <span className="cursor-pointer">Billing Type</span>
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold ">
                                            <div className="flex items-end gap-2 justify-center">
                                                <span className="cursor-pointer">Shipping Info</span>
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-end gap-2 justify-center">
                                                <span className="cursor-pointer">Actions</span>
                                            </div>
                                        </th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="bg-transparent">
                                                <div className="flex items-center gap-3">
                                                    <img src={productImg} alt="" className="rounded-full w-10 h-10" />
                                                    <p className="text-md text-[#000000] font-medium">Pens <span className="ms-2 text-[#FFD600] text-xs">+2 more</span></p>
                                                </div>
                                            </td>
                                            <td className={`bg-transparent`}>
                                                900
                                            </td>
                                            <td className="bg-transparent ">
                                                <button className="text-[#00F0FF] bg-[#00f0ff1a] text-sm px-8 py-1 rounded">Shipped</button>
                                            </td>
                                            <td className="bg-transparent text-center">
                                                <button className="text-[#65E062] bg-[#65e0621a] text-sm px-8 py-1 rounded">Fully Paid</button>
                                            </td>
                                            <td className="bg-transparent text-center">
                                                <p className="whitespace-normal">Office #5 instant health care Us</p>
                                            </td>
                                            <td className="bg-transparent">
                                                <button className="text-[#000000] bg-[#FFD584] rounded-md py-1 px-5 text-sm" onClick={() => setScreen("details")}>Track</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bg-transparent">
                                                <div className="flex items-center gap-3">
                                                    <img src={productImg} alt="" className="rounded-full w-10 h-10" />
                                                    <p className="text-md text-[#000000] font-medium">Business Card</p>
                                                </div>
                                            </td>
                                            <td className={`bg-transparent`}>
                                                900
                                            </td>
                                            <td className="bg-transparent ">
                                                <button className="text-[#65E062] bg-[#65e0621a] text-sm px-8 py-1 rounded">Approved</button>
                                            </td>
                                            <td className="bg-transparent text-center">
                                                <button className="text-[#FF8787] bg-[#ff87871a] text-sm px-8 py-1 rounded">Pending</button>
                                            </td>
                                            <td className="bg-transparent text-center">
                                                <p className="whitespace-normal">Office #5 instant health care Us</p>
                                            </td>
                                            <td className="bg-transparent">
                                                <button className="text-[#000000] bg-[#FFD584] rounded-md py-1 px-5 text-sm" onClick={() => setScreen("details")}>Track</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bg-transparent">
                                                <div className="flex items-center gap-3">
                                                    <img src={productImg} alt="" className="rounded-full w-10 h-10" />
                                                    <p className="text-md text-[#000000] font-medium">Business Card <span className="ms-2 text-[#FFD600] text-xs">+2 more</span></p>
                                                </div>
                                            </td>
                                            <td className={`bg-transparent`}>
                                                900
                                            </td>
                                            <td className="bg-transparent ">
                                                <button className="text-[#FF8787] bg-[#ff87871a] text-sm px-8 py-1 rounded">Pending</button>
                                            </td>
                                            <td className="bg-transparent text-center">
                                                <button className="text-[#FFD584] bg-[#ffd5841a] text-sm px-8 py-1 rounded">Subscription Payment</button>
                                            </td>
                                            <td className="bg-transparent text-center">
                                                <p className="whitespace-normal">Office #5 instant health care Us</p>
                                            </td>
                                            <td className="bg-transparent">
                                                <button className="text-[#000000] bg-[#FFD584] rounded-md py-1 px-5 text-sm" onClick={() => setScreen("details")}>Track</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bg-transparent">
                                                <div className="flex items-center gap-3">
                                                    <img src={productImg} alt="" className="rounded-full w-10 h-10" />
                                                    <p className="text-md text-[#000000] font-medium">Business Card <span className="ms-2 text-[#FFD600] text-xs">+2 more</span></p>
                                                </div>
                                            </td>
                                            <td className={`bg-transparent`}>
                                                900
                                            </td>
                                            <td className="bg-transparent ">
                                                <button className="text-[#00F0FF] bg-[#00f0ff1a] text-sm px-8 py-1 rounded">Shipped</button>
                                            </td>
                                            <td className="bg-transparent text-center">
                                                <button className="text-[#65E062] bg-[#65e0621a] text-sm px-8 py-1 rounded">Fully Paid</button>
                                            </td>
                                            <td className="bg-transparent text-center">
                                                <p className="whitespace-normal">Office #5 instant health care Us</p>
                                            </td>
                                            <td className="bg-transparent">
                                                <button className="text-[#000000] bg-[#FFD584] rounded-md py-1 px-5 text-sm" onClick={() => setScreen("details")}>Track</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bg-transparent">
                                                <div className="flex items-center gap-3">
                                                    <img src={productImg} alt="" className="rounded-full w-10 h-10" />
                                                    <p className="text-md text-[#000000] font-medium">Business Card <span className="ms-2 text-[#FFD600] text-xs">+2 more</span></p>
                                                </div>
                                            </td>
                                            <td className={`bg-transparent`}>
                                                900
                                            </td>
                                            <td className="bg-transparent ">
                                                <button className="text-[#65E062] bg-[#65e0621a] text-sm px-8 py-1 rounded">Approved</button>
                                            </td>
                                            <td className="bg-transparent text-center">
                                                <button className="text-[#65E062] bg-[#65e0621a] text-sm px-8 py-1 rounded">Fully Paid</button>
                                            </td>
                                            <td className="bg-transparent text-center">
                                                <p className="whitespace-normal">Office #5 instant health care Us</p>
                                            </td>
                                            <td className="bg-transparent">
                                                <button className="text-[#000000] bg-[#FFD584] rounded-md py-1 px-5 text-sm" onClick={() => setScreen("details")}>Track</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <div className="text-[#] flex gap-5 items-center text-sm">
                            <span>Pages 44 / 77</span>
                            <label htmlFor="itemPerPage" className="border-[1px] border-[#858585] py-[2px] px-3 rounded-lg">
                                <select name="" id="itemPerPage" className="bg-transparent w-full outline-none">
                                    <option value="">5</option>
                                    <option value="">10</option>
                                    <option value="">20</option>
                                    <option value="">50</option>
                                    <option value="">100</option>
                                </select>
                            </label>
                            <span>Items Per Pages</span>
                        </div>
                        <div>
                            <span className="text-sm text-[#858585]">5 of 20 items</span>
                        </div>
                    </div>
                </div>
            }
            {
                screen === "details" && <>
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setScreen(null)}>
                                <BsChevronLeft />
                                <span>back</span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold mb-2">Orders Approval</h3>
                                <p className="text-[#797979] text-xs">Order Placed at 2, March , 2022</p>
                            </div>
                            <div>
                                <button className="py-3 px-10 rounded-lg bg-[#FFD584]">Approved All</button>
                            </div>
                        </div>
                        <div className="flex-1 rounded-lg mt-5">
                            <h2 className="font-semibold text-2xl mb-3">Account details</h2>
                            <div className="overflow-x-auto max-h-[250px] h-full bg-[#FFFBF3] p-5 pb-3">
                                <table className="table w-full">
                                    <thead>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">Location</th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold text-center">Contact Email</th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold text-center">Telephone</th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold text-center">Order Placed </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold text-center">Orders Limit</th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold text-center">Status</th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold text-center">Billing Type</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="bg-transparent">San Gioh</td>
                                            <td className="bg-transparent text-center">info@gmail.com</td>
                                            <td className="bg-transparent text-center">999-3234-444</td>
                                            <td className="bg-transparent text-center">1000</td>
                                            <td className="bg-transparent text-center">500</td>
                                            <td className="bg-transparent text-center">
                                                <label htmlFor="approveOrder" className="text-[#65E062] bg-[#65e0621a] text-sm px-8 py-1 rounded cursor-pointer">Approved</label>
                                            </td>
                                            <td className="bg-transparent text-center">
                                                <button className="text-[#65E062] bg-[#65e0621a] text-sm px-8 py-1 rounded">Fully Paid</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex-1 rounded-lg mt-10">
                            <h2 className="font-semibold text-2xl mb-3 cursor-pointer" onClick={() => setScreen("orderDetails")}>Orders details</h2>
                            <div className="overflow-x-auto max-h-[350px] h-full bg-[#FFFBF3] p-5 pb-3">
                                <table className="table w-full">
                                    <thead>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">Item</th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-center gap-2">
                                                <span className="cursor-pointer">Item Name</span>
                                                <div className="flex flex-col gap-[1px]">
                                                    <BsChevronDown className="cursor-pointer" />
                                                </div>
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-center gap-2">
                                                <span className="cursor-pointer">Details</span>
                                                <div className="flex flex-col gap-[1px]">
                                                    <BsChevronUp className="cursor-pointer" />
                                                    <BsChevronDown className="cursor-pointer" />
                                                </div>
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">Quantity</th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold ">Delete</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="bg-transparent">
                                                <img src={productImg} alt="" className="rounded-full w-10 h-10" />
                                            </td>
                                            <td className={`bg-transparent text-[#65E062] font-bold`}>
                                                Pens
                                            </td>
                                            <td className="bg-transparent">
                                                <p className="whitespace-normal text-[#787878] text-sm max-w-xs">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.</p>
                                            </td>
                                            <td className="bg-transparent">
                                                <div className="flex gap-3 items-center">
                                                    <button className="w-7 h-7 rounded bg-[#FFD584] flex items-center justify-center">
                                                        <AiOutlineMinus />
                                                    </button>
                                                    <span>900</span>
                                                    <button className="w-7 h-7 rounded bg-[#FFD584] flex items-center justify-center">
                                                        <AiOutlinePlus />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="bg-transparent">
                                                <label htmlFor="rejectOrder" className="text-2xl cursor-pointer"><FiTrash /></label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bg-transparent">
                                                <img src={productImg2} alt="" className="rounded-full w-10 h-10" />
                                            </td>
                                            <td className={`bg-transparent text-[#FF8787] font-bold`}>
                                                Print Production
                                            </td>
                                            <td className="bg-transparent">
                                                <p className="whitespace-normal text-[#787878] text-sm max-w-xs">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.</p>
                                            </td>
                                            <td className="bg-transparent">
                                                <div className="flex gap-3 items-center">
                                                    <button className="w-7 h-7 rounded bg-[#FFD584] flex items-center justify-center">
                                                        <AiOutlineMinus />
                                                    </button>
                                                    <span>900</span>
                                                    <button className="w-7 h-7 rounded bg-[#FFD584] flex items-center justify-center">
                                                        <AiOutlinePlus />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="bg-transparent">
                                                <label htmlFor="rejectOrder" className="text-2xl cursor-pointer"><FiTrash /></label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bg-transparent">
                                                <img src={productImg3} alt="" className="rounded-full w-10 h-10" />
                                            </td>
                                            <td className={`bg-transparent text-[#94F7E5] font-bold`}>
                                                Business Card
                                            </td>
                                            <td className="bg-transparent">
                                                <p className="whitespace-normal text-[#787878] text-sm max-w-xs">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.</p>
                                            </td>
                                            <td className="bg-transparent">
                                                <div className="flex gap-3 items-center">
                                                    <button className="w-7 h-7 rounded bg-[#FFD584] flex items-center justify-center">
                                                        <AiOutlineMinus />
                                                    </button>
                                                    <span>900</span>
                                                    <button className="w-7 h-7 rounded bg-[#FFD584] flex items-center justify-center">
                                                        <AiOutlinePlus />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="bg-transparent">
                                                <label htmlFor="rejectOrder" className="text-2xl cursor-pointer"><FiTrash /></label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <input type="checkbox" id="approveOrder" className="modal-toggle" />
                    <label htmlFor="approveOrder" className="modal cursor-pointer">
                        <label className="modal-box relative text-center block" htmlFor="">
                            <h3 className="text-3xl font-bold mt-4 mb-7">Do you want to Approve Order?</h3>
                            <p className="py-4 text-sm text-[#5E5E5E] my-10">Are you sure you want to approve order , this will send to admin for further processing</p>
                            <div className="grid grid-cols-2 gap-4">
                                <label htmlFor="approveOrder" className="capitalize bg-[#E3E3E3] hover:bg-[#055F5B] text-[#055F5B] hover:text-[#FFFFFF] w-full cursor-pointer rounded-lg flex items-center justify-center font-semibold">
                                    Cancel
                                </label>
                                <label htmlFor="approveOrder" className="bg-[#055F5B] text-[#FFFFFF] capitalize flex-1 py-3 rounded-lg cursor-pointer hover:bg-[#101a1a] font-semibold">Approve</label>
                            </div>
                        </label>
                    </label>
                    <input type="checkbox" id="rejectOrder" className="modal-toggle" />
                    <label htmlFor="rejectOrder" className="modal cursor-pointer">
                        <label className="modal-box relative text-center block" htmlFor="">
                            <h3 className="text-3xl font-bold mt-4 mb-7">Do you want to Reject Order?</h3>
                            <p className="py-4 text-sm text-[#5E5E5E] my-10">Are you sure you want to reject order , this will stop further processing!</p>
                            <div className="grid grid-cols-2 gap-4">
                                <label htmlFor="rejectOrder" className="capitalize bg-[#E3E3E3] hover:bg-[#055F5B] text-[#055F5B] hover:text-[#FFFFFF] w-full cursor-pointer rounded-lg flex items-center justify-center font-semibold">
                                    Cancel
                                </label>
                                <label htmlFor="rejectOrder" className="bg-[#055F5B] text-[#FFFFFF] capitalize flex-1 py-3 rounded-lg cursor-pointer hover:bg-[#101a1a] font-semibold" onClick={() => toast.success("Order Rejected Your order have been rejected from the list !")}>Reject</label>
                            </div>
                        </label>
                    </label>
                </>
            }
            {
                screen === "orderDetails" && <>
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setScreen("details")}>
                                <BsChevronLeft />
                                <span>back</span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold">Details of your Order</h3>
                            </div>
                            <div></div>
                        </div>
                        <div className="rounded-2xl p-4 bg-[#FFFBF3] flex justify-between items-center">
                            <div>
                                <img src={orderDetailsImg01} className="w-52 h-32 rounded-full" />
                            </div>
                            <div>
                                <div className="flex gap-6 mb-5">
                                    <h4 className="text-xl font-bold">Brochures</h4>
                                    <p className="text-[#787878] max-w-sm">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.</p>
                                </div>
                                <div className="flex gap-10">
                                    <h4 className="text-xl font-bold">Quantity</h4>
                                    <p className="text-[#787878]">500</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <h4 className="text-xl font-bold">Order Number</h4>
                                <p className="text-[#787878] text-sm mt-1">ADJDVJBV845</p>
                                <h4 className="text-xl font-bold">Order Placed</h4>
                                <p className="text-[#787878] text-sm mt-1">12 , jan 2022 ( 10:22 pm )</p>
                                <h4 className="text-xl font-bold">Arrival</h4>
                                <p className="text-[#787878] text-sm mt-1">17 , jan 2022  </p>
                            </div>
                        </div>
                        <div className="my-5 bg-[#FFFBF3] p-4 rounded-lg">
                            <div className={`${styles.orderProgress} ${styles.orderProgress50}`}>
                                <div className={styles.orderProgressActive}>
                                    <div>
                                        <img src={user} alt="" />
                                    </div>
                                    <h4 className="text-lg font-bold">Order Received</h4>
                                    <p className="text-xs text-[#787878] font-lighter">Friday Feb ,21,2022</p>
                                    <span className="text-[8px] text-[#787878]">&nbsp;</span>
                                </div>
                                <div className={styles.orderProgressActive}>
                                    <div>
                                        <img src={parcel} alt="" />
                                    </div>
                                    <h4 className="text-lg font-bold">Preparing to ship</h4>
                                    <p className="text-xs text-[#787878] font-lighter">Friday Feb ,21,2022</p>
                                    <span className="text-[8px] text-[#787878]">We are preparing to ship your order.</span>
                                </div>
                                <div className={styles.orderProgressActive}>
                                    <div>
                                        <img src={track} alt="" />
                                    </div>
                                    <h4 className="text-lg font-bold">Shipped</h4>
                                    <p className="text-xs text-[#787878] font-lighter">Friday Feb ,23,2022</p>
                                    <span className="text-[8px] text-[#787878]">Your order is on its way</span>
                                </div>
                                <div className="">
                                    <div>
                                        <span><FcCheckmark className="text-3xl" /></span>
                                    </div>
                                    <h4 className="text-lg font-bold">Delivered</h4>
                                    <span className="text-[8px] text-[#787878]">Your order has yet to be delivered.</span>
                                    <p className="text-xs text-[#787878] font-lighter">&nbsp;</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 rounded-lg mt-5 bg-[#FFFBF3] p-3">
                            <h2 className="font-semibold text-2xl">Order Tracking</h2>
                            <div className="overflow-x-auto max-h-[180px] h-full pb-3">
                                <table className="table w-full">
                                    <thead>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">Date</th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-center gap-2">
                                                <span className="cursor-pointer">Time</span>
                                                <div className="flex flex-col gap-[1px]">
                                                    <BsChevronDown className="cursor-pointer" />
                                                </div>
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold text-center">Description</th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold text-center">Status</th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold text-center"><span className="underline text-[#48A071] cursor-pointer" onClick={() => setIsHideTable(!isHideTable)}>{isHideTable ? "Show" : "Hide"}</span></th>
                                    </thead>
                                    {
                                        !isHideTable && <tbody>
                                            <tr>
                                                <td className="bg-transparent">02 / 12 /22</td>
                                                <td className="bg-transparent">10:22 PM</td>
                                                <td className="bg-transparent text-center">
                                                    <p className="whitespace-normal max-w-sm m-auto">Lorem ipsum is placeholder text commonly used.</p>
                                                </td>
                                                <td className="bg-transparent text-center">
                                                    <button className="py-1 px-10 rounded bg-[#65e0621a] text-[#65E062]">Fully Paid</button>
                                                </td>
                                                <td className="bg-transparent"></td>
                                            </tr>
                                            <tr>
                                                <td className="bg-transparent">02 / 12 /22</td>
                                                <td className="bg-transparent">10:22 PM</td>
                                                <td className="bg-transparent text-center">
                                                    <p className="whitespace-normal max-w-sm m-auto">Lorem ipsum is placeholder text commonly used.</p>
                                                </td>
                                                <td className="bg-transparent text-center">
                                                    <button className="py-1 px-10 rounded bg-[#FFD5841A] text-[#FFD584]">Subscription Payment</button>
                                                </td>
                                                <td className="bg-transparent"></td>
                                            </tr>
                                            <tr>
                                                <td className="bg-transparent">02 / 12 /22</td>
                                                <td className="bg-transparent">10:22 PM</td>
                                                <td className="bg-transparent text-center">
                                                    <p className="whitespace-normal max-w-sm m-auto">Lorem ipsum is placeholder text commonly used.</p>
                                                </td>
                                                <td className="bg-transparent text-center">
                                                    <button className="py-1 px-10 rounded bg-[#FF87871A] text-[#FF8787]">Pending</button>
                                                </td>
                                                <td className="bg-transparent"></td>
                                            </tr>
                                        </tbody>
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default V1CurrentOrders