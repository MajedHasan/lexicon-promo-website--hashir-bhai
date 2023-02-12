import { useState } from "react"
import { AiOutlineEdit, AiOutlineMinus, AiOutlinePlus, AiOutlineWarning } from "react-icons/ai"
import order1Img from "../../assets/v1/dashboard/order-1.png"
import printProducts from "../../assets/v1/dashboard/new-order/print-products.png"

import styles from "./V2NewOrders.module.css"

import { BiSearch } from "react-icons/bi"
import { IoMdCheckmark } from "react-icons/io"
import { MdOutlineSimCardDownload } from "react-icons/md"
import { FiTrash } from "react-icons/fi"
import { BsChevronDown } from "react-icons/bs"


const V2NewOrders = () => {

    const [screen, setScreen] = useState(null)
    const [selectPriceRange, setSelectPriceRange] = useState(500)
    const [selectedProducts, setSelectedProducts] = useState([
        { _id: 1, name: "Brouchures", details: "Lorem ipsum dolor sit amet, cons ectet.", qty: 1, nameColor: "#65e062", img: printProducts },
        { _id: 2, name: "Business Card", details: "Lorem ipsum dolor sit amet, cons ectet.", qty: 1, nameColor: "#94F7E5", img: printProducts },
        { _id: 3, name: "Promo", details: "Lorem ipsum dolor sit amet, cons ectet.", qty: 1, nameColor: "#F794C4", img: printProducts },
        { _id: 4, name: "Calender", details: "Lorem ipsum dolor sit amet, cons ectet.", qty: 1, nameColor: "#FF8B7B", img: printProducts },
    ])
    const handleQty = (id, e) => {
        if (e === "plus") {
            setSelectedProducts(selectedProducts.filter(product => product._id === id ? product.qty += 1 : product))
        } else if (e === "minus") {
            const p = selectedProducts.find(product => product._id === id)
            if (p.qty > 1) {
                setSelectedProducts(selectedProducts.filter(product => product._id === id ? product.qty -= 1 : product))
            }
        }
    }
    const [showAction, setShowAction] = useState(null)


    return (
        <>
            {
                screen === null && <div className="bg-[#FFFBF3] p-5 rounded-lg mt-5">
                    <h3 className="text-lg font-bold">Orders</h3>
                    <hr className="my-3 border-[#5A5A5A]" />
                    <div className="overflow-y-auto max-h-[570px]">
                        <table className="w-full">
                            <thead>
                                <th className="font-medium text-left text-md py-2">Image</th>
                                <th className="font-medium text-center text-md py-2">Title</th>
                                <th className="font-medium text-center text-md py-2">Quantity</th>
                                <th className="font-medium text-center text-md py-2">Additional Information</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={order1Img} alt="" className="rounded-full w-10 h-10 cursor-pointer" onClick={() => setScreen("selectCategory")} />
                                    </td>
                                    <td className="text-center py-3 border-b-[1px] border-b-[#EBEBEB] text-[#65E062]">Brouchures</td>
                                    <td className="border-b-[1px] border-b-[#EBEBEB]">
                                        <div className="flex items-center gap-3 justify-center">
                                            <button className="p-1 bg-[#FFD584] text-[#055F5B] rounded-md" >
                                                <AiOutlineMinus />
                                            </button>
                                            <span>9</span>
                                            <button className="p-1 bg-[#FFD584] text-[#055F5B] rounded-md" >
                                                <AiOutlinePlus />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="text-center text-[#787878] border-b-[1px] border-b-[#EBEBEB]">Lorem ipsum is placeholder text commonly used in.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={order1Img} alt="" className="rounded-full w-10 h-10" />
                                    </td>
                                    <td className="text-center py-3 border-b-[1px] border-b-[#EBEBEB] text-[#FF8787]">Calender</td>
                                    <td className="border-b-[1px] border-b-[#EBEBEB]">
                                        <div className="flex items-center gap-3 justify-center">
                                            <button className="p-1 bg-[#FFD584] text-[#055F5B] rounded-md" >
                                                <AiOutlineMinus />
                                            </button>
                                            <span>9</span>
                                            <button className="p-1 bg-[#FFD584] text-[#055F5B] rounded-md" >
                                                <AiOutlinePlus />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="text-center text-[#787878] border-b-[1px] border-b-[#EBEBEB]">Lorem ipsum is placeholder text commonly used in.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={order1Img} alt="" className="rounded-full w-10 h-10" />
                                    </td>
                                    <td className="text-center py-3 border-b-[1px] border-b-[#EBEBEB] text-[#94F7E5]">Business Card</td>
                                    <td className="border-b-[1px] border-b-[#EBEBEB]">
                                        <div className="flex items-center gap-3 justify-center">
                                            <button className="p-1 bg-[#FFD584] text-[#055F5B] rounded-md" >
                                                <AiOutlineMinus />
                                            </button>
                                            <span>9</span>
                                            <button className="p-1 bg-[#FFD584] text-[#055F5B] rounded-md" >
                                                <AiOutlinePlus />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="text-center text-[#787878] border-b-[1px] border-b-[#EBEBEB]">Lorem ipsum is placeholder text commonly used in.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={order1Img} alt="" className="rounded-full w-10 h-10" />
                                    </td>
                                    <td className="text-center py-3 border-b-[1px] border-b-[#EBEBEB] text-[#65E062]">Tissue Paper</td>
                                    <td className="border-b-[1px] border-b-[#EBEBEB]">
                                        <div className="flex items-center gap-3 justify-center">
                                            <button className="p-1 bg-[#FFD584] text-[#055F5B] rounded-md" >
                                                <AiOutlineMinus />
                                            </button>
                                            <span>9</span>
                                            <button className="p-1 bg-[#FFD584] text-[#055F5B] rounded-md" >
                                                <AiOutlinePlus />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="text-center text-[#787878] border-b-[1px] border-b-[#EBEBEB]">Lorem ipsum is placeholder text commonly used in.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }
            {
                screen === "selectCategory" && <>
                    <div className="flex gap-10">
                        <div className="w-3/12">
                            <h2 className="text-xl font-semibold mt-7">Select category</h2>
                            <div className={`flex flex-col gap-5 mt-5 ${styles.categoryWrapper}`}>
                                <div>
                                    <input type="checkbox" id="category1" hidden />
                                    <label htmlFor="category1" className="">
                                        <span>Lorem ipsum dolor </span>
                                        <span><IoMdCheckmark /></span>
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="category2" hidden />
                                    <label htmlFor="category2" className="">
                                        <span>Lorem ipsum dolor </span>
                                        <span><IoMdCheckmark /></span>
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="category3" hidden />
                                    <label htmlFor="category3" className="">
                                        <span>Lorem ipsum dolor </span>
                                        <span><IoMdCheckmark /></span>
                                    </label>
                                </div>
                                <div className="my-3">
                                    <h3 className="text-lg font-semibold mb-2">Price</h3>
                                    <div className="bg-[#FFD584] rounded-lg p-3">
                                        <div className="flex gap-3 items-end">
                                            <h4 className="text-sm text-white">Enter price</h4>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between text-white text-sm">
                                                    <span>Min-10$</span>
                                                    <span>Max-10k$</span>
                                                </div>
                                                <input type="range" min="10" max="10000" value={selectPriceRange} className="range range-xs range-[#055F5B]" onChange={(e) => setSelectPriceRange(e.target.value)} />
                                            </div>
                                        </div>
                                        <h4 className="mt-2 text-md font-semibold text-[#055F5B]">{selectPriceRange}$</h4>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <h3 className="text-lg font-semibold mb-2">Quantity </h3>
                                    <div className="rounded-lg shadow-lg p-4 w-full">
                                        <select name="" id="" className="w-full outline-none">
                                            <option value="">10,000</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <input type="checkbox" id="category4" hidden />
                                    <label htmlFor="category4" className="">
                                        <span>Lorem ipsum dolor </span>
                                        <span><IoMdCheckmark /></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="w-9/12">
                            <div className="flex gap-6 rounded-xl shadow-xl p-4 items-center">
                                <BiSearch className="text-2xl" />
                                <input type="text" className="w-full text-sm outline-none" placeholder="Search iteam here" />
                            </div>
                            <p className="my-8">There is no item in storage but these are available in product category. </p>
                            <div className="overflow-x-auto min-h-[380px] max-h-[505px] pb-3 p-4 bg-[#FFFBF3]">
                                <table className="table w-full">
                                    <thead>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-end gap-2">
                                                <span className="cursor-pointer">Item</span> <BsChevronDown className="cursor-pointer" />
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-end gap-2">
                                                <span className="cursor-pointer">Details</span> <BsChevronDown className="cursor-pointer" />
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-end gap-2">
                                                <span className="cursor-pointer">Quantity</span> <BsChevronDown className="cursor-pointer" />
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-end gap-2">
                                                <span className="cursor-pointer">Actions</span> <BsChevronDown className="cursor-pointer" />
                                            </div>
                                        </th>
                                    </thead>
                                    <tbody>
                                        {
                                            selectedProducts?.map(product => (
                                                <tr key={product?._id}>
                                                    <td className="bg-transparent" style={{ color: product?.nameColor }}>{product?.name}</td>
                                                    <td className="bg-transparent ">
                                                        <p className="whitespace-normal">{product?.details}</p>
                                                    </td>
                                                    <td className="bg-transparent">
                                                        <div className="flex items-center gap-2 justify-center">
                                                            <button className="p-1 bg-[#FFD584] text-[#055F5B] rounded-md" onClick={() => handleQty(product?._id, "minus")}>
                                                                <AiOutlineMinus />
                                                            </button>
                                                            <span>{product?.qty}</span>
                                                            <button className="p-1 bg-[#FFD584] text-[#055F5B] rounded-md" onClick={() => handleQty(product?._id, "plus")}>
                                                                <AiOutlinePlus />
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="bg-transparent">
                                                        <div className="relative">
                                                            <button onClick={() => setShowAction(showAction === product?._id ? null : product?._id)}>
                                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M15.9991 12.4267C17.5858 12.4267 18.8791 11.1334 18.8791 9.54675C18.8791 7.96008 17.5858 6.66675 15.9991 6.66675C14.4125 6.66675 13.1191 7.96008 13.1191 9.54675C13.1191 11.1334 14.4125 12.4267 15.9991 12.4267Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M9.05383 25.3335C10.6405 25.3335 11.9338 24.0402 11.9338 22.4535C11.9338 20.8668 10.6405 19.5735 9.05383 19.5735C7.46716 19.5735 6.17383 20.8668 6.17383 22.4535C6.17383 24.0402 7.45383 25.3335 9.05383 25.3335Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M22.9464 25.3335C24.5331 25.3335 25.8264 24.0402 25.8264 22.4535C25.8264 20.8668 24.5331 19.5735 22.9464 19.5735C21.3597 19.5735 20.0664 20.8668 20.0664 22.4535C20.0664 24.0402 21.3597 25.3335 22.9464 25.3335Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            {
                                                                showAction === product?._id &&
                                                                <div className="absolute top-10 right-0 p-4 w-[175px] rounded-lg shadow-lg bg-white z-10">
                                                                    <div className="flex gap-3 items-center cursor-pointer" onClick={() => setScreen("itemsDetails")}>
                                                                        <span className="flex justify-center items-center bg-[#FFF7E6] w-10 h-10 rounded-full">
                                                                            <AiOutlineEdit className="text-xl" />
                                                                        </span>
                                                                        <span>Edit</span>
                                                                    </div>
                                                                    <hr className="my-4 border-black" />
                                                                    <div className="flex gap-3 items-center cursor-pointer">
                                                                        <span className="flex justify-center items-center bg-[#FFF7E6] w-10 h-10 rounded-full">
                                                                            <MdOutlineSimCardDownload className="text-xl" />
                                                                        </span>
                                                                        <span>Download</span>
                                                                    </div>
                                                                    <hr className="my-4 border-black" />
                                                                    <label htmlFor="removeProduct" className="flex gap-3 items-center cursor-pointer">
                                                                        <span className="flex justify-center items-center bg-[#FFF7E6] w-10 h-10 rounded-full">
                                                                            <FiTrash className="text-xl" />
                                                                        </span>
                                                                        <span>Remove</span>
                                                                    </label>
                                                                </div>
                                                            }
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                        {
                                            selectedProducts.length < 1 && <tr>
                                                <td colSpan={4} className="text-center bg-transparent">
                                                    <div className="flex gap-2">
                                                        <AiOutlineWarning className="text-3xl text-[#FF0000]" />
                                                        <p className="whitespace-normal text-left">No item has been selected yet please select from the list displayed on the left.</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default V2NewOrders