import { Link } from "react-router-dom"

import { AiOutlineStar } from "react-icons/ai"
import { MdOutlineTimer } from "react-icons/md"
import { HiOutlineUsers } from "react-icons/hi2"
import { TbNotes } from "react-icons/tb"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"
import { RxCalendar } from "react-icons/rx"
import { IoIosArrowDown, IoIosArrowForward, IoMdCheckmark } from "react-icons/io"

import styles from "./V1Dashboard.module.css"


const V1Dashboard = () => {

    const orders = [
        {
            _id: 1,
            name: "Print Products",
            img: require("../../assets/v1/dashboard/order-1.png"),
            quantity: 1000,
            status: "Shipped",
            shippingInfo: "Office #5 instant health care Us"
        },
        {
            _id: 2,
            name: "Pen",
            img: require("../../assets/v1/dashboard/order-2.png"),
            quantity: 1000,
            status: "Approved",
            shippingInfo: "Office #5 instant health care Us"
        },
        {
            _id: 3,
            name: "Business Card",
            img: require("../../assets/v1/dashboard/order-3.png"),
            quantity: 1000,
            status: "Pending",
            shippingInfo: "Office #5 instant health care Us"
        },
        {
            _id: 4,
            name: "Begs",
            img: require("../../assets/v1/dashboard/order-4.png"),
            quantity: 1000,
            status: "Shipped",
            shippingInfo: "Office #5 instant health care Us"
        },
        {
            _id: 5,
            name: "Homes",
            img: require("../../assets/v1/dashboard/order-5.png"),
            quantity: 1000,
            status: "Approved",
            shippingInfo: "Office #5 instant health care Us"
        },
        {
            _id: 6,
            name: "Business Card",
            img: require("../../assets/v1/dashboard/order-6.png"),
            quantity: 1000,
            status: "Shipped",
            shippingInfo: "Office #5 instant health care Us"
        },
        {
            _id: 7,
            name: "Paper",
            img: require("../../assets/v1/dashboard/order-7.png"),
            quantity: 1000,
            status: "Shipped",
            shippingInfo: "Office #5 instant health care Us"
        },
    ]

    return (
        <>
            <div className="flex gap-6">
                <div className="flex-1">
                    <div className="grid grid-cols-4 gap-5">
                        <Link to="/v1/dashboard/neworders" className="bg-[#ffd58433] px-10 py-4 rounded-lg flex flex-col gap-5 items-center">
                            <span className="bg-white p-3 rounded-full shadow-lg">
                                <AiOutlineStar className="text-3xl" />
                            </span>
                            <span className="text-md">New Order</span>
                        </Link>
                        <Link to="/v1/dashboard/currentorders" className="bg-[#ffd58433] px-10 py-4 rounded-lg flex flex-col gap-5 items-center relative">
                            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#055F5B] text-xs flex items-center justify-center text-white">8</span>
                            <span className="bg-white p-3 rounded-full shadow-lg">
                                <MdOutlineTimer className="text-3xl" />
                            </span>
                            <span className="text-md">Current Order</span>
                        </Link>
                        <Link to="/v1/dashboard/collaterals" className="bg-[#ffd58433] px-10 py-4 rounded-lg flex flex-col gap-5 items-center relative">
                            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#055F5B] text-xs flex items-center justify-center text-white">4</span>
                            <span className="bg-white p-3 rounded-full shadow-lg">
                                <TbNotes className="text-3xl" />
                            </span>
                            <span className="text-md">Collaterals</span>
                        </Link>
                        <Link to="/v1/dashboard/accounts" className="bg-[#ffd58433] px-10 py-4 rounded-lg flex flex-col gap-5 items-center">
                            <span className="bg-white p-3 rounded-full shadow-lg">
                                <HiOutlineUsers className="text-3xl" />
                            </span>
                            <span className="text-md">Accounts</span>
                        </Link>
                    </div>
                    <div className="mt-5 shadow-lg rounded-2xl p-4">
                        <div>
                            <h2 className="text-xl font-semibold">Recent Orders</h2>
                            <hr className="mt-3 mb-5" />
                        </div>
                        <div className="overflow-x-auto w-full max-h-[430px] h-full">
                            <table className="table w-full">
                                <thead className="">
                                    <tr>
                                        <th className="bg-white capitalize text-[#A8A8A8] font-normal">
                                            <div className="flex items-center bg-white">
                                                Item
                                                <span className="flex flex-col">
                                                    <MdOutlineKeyboardArrowUp className="invisible" />
                                                    <MdOutlineKeyboardArrowDown />
                                                </span>
                                            </div>
                                        </th>
                                        <th className="bg-white capitalize text-[#A8A8A8] font-normal">
                                            <div className="flex items-center gap-1">
                                                Quantity
                                                <span className="flex flex-col">
                                                    <MdOutlineKeyboardArrowUp />
                                                    <MdOutlineKeyboardArrowDown />
                                                </span>
                                            </div>
                                        </th>
                                        <th className="bg-white capitalize text-[#A8A8A8] font-normal">
                                            <div className="flex items-center gap-1">
                                                Status
                                                <span className="flex flex-col">
                                                    <MdOutlineKeyboardArrowUp />
                                                    <MdOutlineKeyboardArrowDown />
                                                </span>
                                            </div>
                                        </th>
                                        <th className="bg-white capitalize text-[#A8A8A8] font-normal">Shipping Information</th>
                                        <th className="bg-white capitalize">
                                            <button className="bg-[#FFD584] py-2 px-5 rounded font-normal">
                                                View Details
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders?.map(order => (
                                            <tr key={order?._id}>
                                                <th >
                                                    <div className="flex items-center gap-2">
                                                        <img src={order?.img} alt="" />
                                                        <span className="text-sm font-normal">{order?.name}</span>
                                                    </div>
                                                </th>
                                                <td>{order?.quantity}</td>
                                                <td>
                                                    {order?.status === "Shipped" && <span className="text-[#00F0FF] text-sm font-normal bg-[#00F0FF1A] py-1 px-2 rounded-sm">{order?.status}</span>}
                                                    {order?.status === "Approved" && <span className="text-[#FF00F5] text-sm font-normal bg-[#FF00F51A] py-1 px-2 rounded-sm">{order?.status}</span>}
                                                    {order?.status === "Pending" && <span className="text-[#FAFF00] text-sm font-normal bg-[#FAFF001A] py-1 px-2 rounded-sm">{order?.status}</span>}
                                                </td>
                                                <td>{order?.shippingInfo}</td>
                                                <th className="text-right">
                                                    <button className="bg-[#FFD584] py-2 px-5 rounded font-normal text-xs">
                                                        Track
                                                    </button>
                                                </th>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-[420px] bg-[#FFFBF3] rounded-lg p-4  overflow-x-auto max-h-[675px]">
                    <div className="sticky top-0 bg-[#FFFBF3] z-[99]">
                        <header className="flex items-center justify-between mb-4">
                            <h2 className="font-bold">Recent Activities</h2>
                            <label htmlFor="week" className="bg-[#FFD584] py-2 px-5 rounded flex items-center gap-2 cursor-pointer">
                                <RxCalendar />
                                <span className="text-xs">This Week</span>
                                <IoIosArrowDown />
                            </label>
                            <input type="date" name="" id="week" hidden />
                        </header>
                        <hr className="border-1 border-black" />
                    </div>
                    <div className="flex flex-col gap-6 mt-5 overflow-x-auto h-full">
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-md font-normal">Today</h3>
                                <Link to="" className="text-lg text-[#055F5B]">View All</Link>
                            </div>
                            <div className="shadow-md rounded-lg p-4">
                                <div className="flex gap-3 justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className={styles.orderListItem}>
                                            <IoIosArrowForward />
                                        </span>
                                        <span className="text-[#838383] text-sm">Receiving the order of <span className="text-[#FFD584]">Pen</span></span>
                                    </div>
                                    <span className="text-xs text-[#000000]">12:30pm</span>
                                </div>
                                <hr className="border-1 border-[#EFEFEF] my-4 w-[90%] ml-auto" />
                                <div className="flex gap-3 justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className={`${styles.orderListItem} ${styles.orderListItemFullfilled}`}>
                                            <IoMdCheckmark className="text-white" />
                                        </span>
                                        <span className="text-[#838383] text-sm">Sent to the pricing</span>
                                    </div>
                                    <span className="text-xs text-[#000000]">10:30pm</span>
                                </div>
                                <hr className="border-1 border-[#EFEFEF] my-4 w-[90%] ml-auto" />
                                <div className="flex gap-3 justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className="w-[33px] min-h-6 rounded-full flex justify-center items-center text-white bg-[#055F5B]">
                                            <IoMdCheckmark className="text-white" />
                                        </span>
                                        <span className="text-[#838383] text-sm">Suppose to the adress address #106</span>
                                    </div>
                                    <Link to="" className="bg-[#FFD584] py-2 px-5 rounded-lg text-xs">Track</Link>
                                    <span className="text-xs text-[#000000]">10:30pm</span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-md font-normal">Yesterday</h3>
                            </div>
                            <div className="shadow-md rounded-lg p-4">
                                <div className="flex gap-3 justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className={styles.orderListItem}>
                                            <IoIosArrowForward />
                                        </span>
                                        <span className="text-[#838383] text-sm">Receiving the order of <span className="text-[#FFD584]">Pen</span></span>
                                    </div>
                                    <span className="text-xs text-[#000000]">12:30pm</span>
                                </div>
                                <hr className="border-1 border-[#EFEFEF] my-4 w-[90%] ml-auto" />
                                <div className="flex gap-3 justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className={`${styles.orderListItem} ${styles.orderListItemFullfilled}`}>
                                            <IoMdCheckmark className="text-white" />
                                        </span>
                                        <span className="text-[#838383] text-sm">Sent to the pricing</span>
                                    </div>
                                    <span className="text-xs text-[#000000]">10:30pm</span>
                                </div>
                                <hr className="border-1 border-[#EFEFEF] my-4 w-[90%] ml-auto" />
                                <div className="flex gap-3 justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className="w-[33px] min-h-6 rounded-full flex justify-center items-center text-white bg-[#055F5B]">
                                            <IoMdCheckmark className="text-white" />
                                        </span>
                                        <span className="text-[#838383] text-sm">Suppose to the adress address #106</span>
                                    </div>
                                    <Link to="" className="bg-[#FFD584] py-2 px-5 rounded-lg text-xs">Track</Link>
                                    <span className="text-xs text-[#000000]">10:30pm</span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-md font-normal">May 12, 2022</h3>
                            </div>
                            <div className="shadow-md rounded-lg p-4">
                                <div className="flex gap-3 justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className={styles.orderListItem}>
                                            <IoIosArrowForward />
                                        </span>
                                        <span className="text-[#838383] text-sm">Receiving the order of <span className="text-[#FFD584]">Pen</span></span>
                                    </div>
                                    <span className="text-xs text-[#000000]">12:30pm</span>
                                </div>
                                <hr className="border-1 border-[#EFEFEF] my-4 w-[90%] ml-auto" />
                                <div className="flex gap-3 justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className={`${styles.orderListItem} ${styles.orderListItemFullfilled}`}>
                                            <IoMdCheckmark className="text-white" />
                                        </span>
                                        <span className="text-[#838383] text-sm">Sent to the pricing</span>
                                    </div>
                                    <span className="text-xs text-[#000000]">10:30pm</span>
                                </div>
                                <hr className="border-1 border-[#EFEFEF] my-4 w-[90%] ml-auto" />
                                <div className="flex gap-3 justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className="w-[33px] min-h-6 rounded-full flex justify-center items-center text-white bg-[#055F5B]">
                                            <IoMdCheckmark className="text-white" />
                                        </span>
                                        <span className="text-[#838383] text-sm">Suppose to the adress address #106</span>
                                    </div>
                                    <Link to="" className="bg-[#FFD584] py-2 px-5 rounded-lg text-xs">Track</Link>
                                    <span className="text-xs text-[#000000]">10:30pm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default V1Dashboard