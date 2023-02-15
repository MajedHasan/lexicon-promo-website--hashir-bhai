import { useState } from "react"
import { AiFillStar, AiOutlineEdit, AiOutlineMinus, AiOutlinePlus, AiOutlineStar, AiOutlineWarning } from "react-icons/ai"
import order1Img from "../../assets/v1/dashboard/order-1.png"
import printProducts from "../../assets/v1/dashboard/new-order/print-products.png"
import catalog from "../../assets/v1/dashboard/catalog.png"
import file1 from "../../assets/v2/new-orders/file-1.png"
import file2 from "../../assets/v2/new-orders/file-2.png"
import file3 from "../../assets/v2/new-orders/file-3.png"
import happyShop from "../../assets/v1/dashboard/ecommerce-project-screen/happy-shop.png"
import ecomPen from "../../assets/v1/dashboard/ecommerce-project-screen/pen.png"
import ecomPen2 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-2.png"
import ecomPen3 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-3.png"
import ecomPen4 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-4.png"
import ecomPen5 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-5.png"
import ecomPen6 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-6.png"
import ecomPen7 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-7.png"
import ecomPen8 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-8.png"

import styles from "./V2NewOrders.module.css"

import { BiSearch, BiShareAlt } from "react-icons/bi"
import { IoMdCheckmark } from "react-icons/io"
import { MdOutlineArrowBackIosNew, MdOutlineMoreVert, MdOutlineSimCardDownload } from "react-icons/md"
import { FiSearch, FiTrash } from "react-icons/fi"
import { BsChevronDown, BsChevronLeft, BsFillCheckCircleFill } from "react-icons/bs"
import { FaRegComments, FaSearchPlus, FaTimes } from "react-icons/fa"
import { RxPencil2 } from "react-icons/rx"
import { RiErrorWarningLine } from "react-icons/ri"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"


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
    const [shipType, setShipType] = useState("storage")
    const [shippingAddressExcel, setShippingAddressExcel] = useState(null)
    const [commentName, setCommentName] = useState("")


    return (
        <>
            {
                screen === null && <div className="bg-[#FFFBF3] p-5 rounded-lg mt-5">
                    <Link to="/v1/dashboard/neworders" className="text-lg font-bold">Orders</Link>
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
                                    <td className="text-center py-3 border-b-[1px] border-b-[#EBEBEB] text-[#65E062] cursor-pointer" onClick={() => setScreen("full view")}>Brouchures</td>
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
            {
                screen === "full view" && <>
                    <div>
                        <div className="py-3 px-4 bg-[#055F5B1A] grid grid-cols-2">
                            <div className="">
                                <button className="flex items-center gap-2 cursor-pointer" onClick={() => setScreen(null)}>
                                    <BsChevronLeft />
                                    <span>Back</span>
                                </button>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Product Full View</h3>
                            </div>
                        </div>
                        <div className="flex gap-8 mt-3 items-start">
                            <div className="w-5/12 shadow-lg rounded-lg p-6">
                                <h2 className="text-xl font-semibold mb-4">Print Products</h2>
                                <div className="rounded-lg">
                                    <img src={catalog} alt="" className="rounded-t-xl" />
                                    <div className="grid grid-cols-2">
                                        <img src={catalog} alt="" className="w-auto rounded-bl-xl" />
                                        <img src={catalog} alt="" className="w-auto rounded-br-xl" />
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button className="flex gap-3 text-md mt-4 items-center bg-[#FFD584] py-2 px-8 rounded">
                                        <FaSearchPlus />
                                        <span>Enlarge Image</span>
                                    </button>
                                </div>
                            </div>
                            <div className="w-7/12">
                                <div className="bg-[#FFFBF3] p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-md font-semibold">Product Details</h3>
                                        <h3 className="text-md font-semibold">
                                            <RxPencil2 className="text-2xl text-[#055F5B]" />
                                        </h3>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-normal text-[#787878]">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishingrfcddo ell industries for previewing layouts.</p>
                                    </div>
                                </div>
                                <div className="bg-[#FFFBF3] p-6 my-6">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-md font-semibold">Select Quantity </h3>
                                        <div className="flex gap-4 items-center">
                                            <button className="bg-[#FFD584] py-1 px-7">
                                                <AiOutlineMinus className="text-lg" />
                                            </button>
                                            <span>900</span>
                                            <button className="bg-[#FFD584] py-1 px-7">
                                                <AiOutlinePlus className="text-lg" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#FFFBF3] p-6 my-6">
                                    <h3 className="text-md font-semibold mb-3">Choose colors </h3>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#0019FF] rounded-full cursor-pointer"></div>
                                        <div className="w-10 h-10 bg-[#17A700] rounded-full cursor-pointer"></div>
                                        <div className="w-10 h-10 bg-[#FFC700] rounded-full cursor-pointer"></div>
                                        <div className="w-10 h-10 bg-[#FF6B00] rounded-full cursor-pointer"></div>
                                        <div className="w-10 h-10 bg-[#FA00FF] rounded-full cursor-pointer"></div>
                                        <div className="w-10 h-10 bg-[#FF9900] rounded-full cursor-pointer"></div>
                                    </div>
                                </div>
                                <div className="bg-[#FFFBF3] p-6">
                                    <h2 className="text-md font-semibold mb-2">Upload your design</h2>
                                    <p className="text-sm text-[#787878]">Maximum file size 10Mb. For best results please upload an EPS file. This product allows only 1 color to print</p>
                                    <div className="my-3">
                                        <label htmlFor="frontdesign" className="w-full p-4 rounded-lg border-dashed border-[1px] border-[#055F5B] flex justify-center items-center bg-white">
                                            <span>Front design</span>
                                        </label>
                                        <input type="file" id="frontdesign" hidden />
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="leftdesign" className="w-full p-4 rounded-lg border-dashed border-[1px] border-[#055F5B] flex justify-center items-center bg-white">
                                            <span>Left design</span>
                                        </label>
                                        <input type="file" id="leftdesign" hidden />
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="rightdesign" className="w-full p-4 rounded-lg border-dashed border-[1px] border-[#055F5B] flex justify-center items-center bg-white">
                                            <span>Right design</span>
                                        </label>
                                        <input type="file" id="rightdesign" hidden />
                                    </div>
                                    <div className="mt-5">
                                        <h4 className="text-lg font-semibold mb-4">Choose your decorating method</h4>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded-lg text-center cursor-pointer">
                                                <span className="text-sm">Decoration style 1</span>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg text-center cursor-pointer">
                                                <span className="text-sm">Decoration style 2</span>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg text-center cursor-pointer">
                                                <span className="text-sm">Decoration style 3</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mt-4">
                                        <span className="">
                                            <RiErrorWarningLine className="text-3xl text-[#B1B1B1]" />
                                        </span>
                                        <span className="text-[#787878] text-sm">Your design is applied directly onto the products’ surface by pushing ink through a fine mesh screen. This is one of our most popular decoration methods.</span>
                                    </div>
                                    <div className="mt-5 flex gap-10 justify-between items-center">
                                        <div>
                                            <h2 className="font-bold">Prices from:</h2>
                                            <p className="font-bold">$24.25 to $35.66</p>
                                        </div>
                                        <button className="text-[#FFFFFF] py-3 px-14 rounded-lg bg-[#055F5B] text-md font-semibold" onClick={() => setScreen("review details")}> Include in kitted boxes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            {
                screen === "review details" && <>
                    <div>
                        <div className="flex items-center gap-10 my-4">
                            <div className="w-7/12">
                                <div className={styles.orderProgress}>
                                    <div >
                                        <div>
                                            <span>1</span>
                                        </div>
                                        <p>Product Selection</p>
                                    </div>
                                    <div className={styles.orderProgressActive}>
                                        <div>
                                            <span>2</span>
                                        </div>
                                        <p>Proof</p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>3</span>
                                        </div>
                                        <p>Order Place</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-5/12"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-20 mt-8">
                            <div>
                                <h2 className="font-bold text-2xl mb-2">Review Details</h2>
                                <p className="text-sm">Estimated Delivery: Monday 13 June , 2022</p>
                                <div className="mt-12 rounded-xl shadow p-6 border-2 border-gray-300">
                                    <h3 className="text-lg font-semibold mb-4">Product Details:</h3>
                                    <div className="grid grid-cols-4 mb-3">
                                        <span className="col-span-3 text-sm">Nike Special Stride Shoes (2) </span>
                                        <span className="col-span-1 font-bold text-sm">P 199.99</span>
                                    </div>
                                    <div className="grid grid-cols-4 mb-3">
                                        <span className="col-span-3 text-sm">Nike Special Stride Shoes-black (1) </span>
                                        <span className="col-span-1 font-bold text-sm">P 199.99</span>
                                    </div>
                                    <div className="grid grid-cols-4 mb-3">
                                        <span className="col-span-3 text-sm">Hawaie Y 22 Prime 2022 (1) </span>
                                        <span className="col-span-1 font-bold text-sm">P 117.99</span>
                                    </div>
                                    <hr className="mb-5 mt-5" />
                                    <div className="grid grid-cols-4 mb-3">
                                        <span className="col-span-3 text-sm">Total Price ( ex.tax )</span>
                                        <span className="col-span-1 font-bold text-sm">P 550</span>
                                    </div>
                                    <div className="grid grid-cols-4 mb-3">
                                        <span className="col-span-3 text-sm">Tax-Shipping Price</span>
                                        <span className="col-span-1 font-bold text-sm">Free</span>
                                    </div>
                                    <hr className="mb-5 mt-5" />
                                    <div className="">
                                        <h2 className="text-xl font-bold text-[#055F5B]">Order Total: P 550</h2>
                                    </div>
                                </div>
                                {
                                    shipType !== "storage" && <div className="mt-6 rounded-xl border-2 border-gray-300 p-6">
                                        <h2 className="text-2xl font-bold mb-4">Billing Information:</h2>
                                        <p className="mb-3 text-sm">Billing will be conducted with your Credit Card</p>
                                        <p className="mb-3 text-sm">Name on Card: &nbsp; &nbsp; &nbsp; &nbsp; Mr Macheto Theo</p>
                                        <p className="mb-3 text-sm">Credit Card Number: &nbsp; &nbsp; &nbsp; &nbsp; xxxx xxxx 3245 &nbsp; &nbsp; &nbsp; <Link to="" className="underline">Change</Link></p>
                                    </div>
                                }
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-8">Shipping Details</h2>
                                <div className="flex gap-4 items-center mb-3">
                                    <input type="radio" name="radio-5" className="radio radio-success" checked={shipType === "storage" ? true : false} onClick={(e) => setShipType("storage")} />
                                    <span className="text-sm">Would you like to send this item to storage? </span>
                                </div>
                                <div className="flex gap-4 items-center mb-3">
                                    <input type="radio" name="radio-5" className="radio radio-success" checked={shipType === "bulk" ? true : false} onClick={(e) => setShipType("bulk")} />
                                    <span className="text-sm">Would you like to ship this item bulk to one address?</span>
                                </div>
                                <div className="flex gap-4 items-center mb-3">
                                    <input type="radio" name="radio-5" className="radio radio-success" checked={shipType === "multiple" ? true : false} onClick={(e) => setShipType("multiple")} />
                                    <span className="text-sm">Will this be split into multiple addresses?</span>
                                </div>

                                <div className="mt-6">
                                    {
                                        shipType === "storage" && <div className="px-16 pt-24 pb-24 w-full rounded-xl bg-[#FFF7E6] border-[1px] border-[#9D9D9D4F] flex flex-col items-center justify-between gap-8">
                                            <button className="bg-[#055F5B] py-3 px-16 rounded-full text-white">Click here to view</button>
                                            <p className="text-center">Your product is shipped to the appropriate storage facility based on the flow space API .</p>
                                        </div>
                                    }
                                    {
                                        shipType === "bulk" && <div className="border-2 border-gray-300 p-5 rounded-xl">
                                            <h3 className="text-center text-2xl font-bold mb-5">Shipping Address:</h3>
                                            <div className="grid grid-cols-3 mb-4 gap-3">
                                                <span className="col-span-1">Enter Name:</span>
                                                <span className="col-span-2">John khan</span>

                                                <span className="col-span-1">Enter Lane Detail:</span>
                                                <span className="col-span-2">street 2/ 345C house</span>

                                                <span className="col-span-1">Enter District:</span>
                                                <span className="col-span-2"> Jhang Sadar</span>

                                                <span className="col-span-1">EnterArea:</span>
                                                <span className="col-span-2">Engineer Society</span>

                                                <span className="col-span-1">Enter Zip/Post Code:</span>
                                                <span className="col-span-2">32500</span>

                                                <span className="col-span-1">Enter City:</span>
                                                <span className="col-span-2">New York</span>

                                                <span className="col-span-1">Enter Phone Number:</span>
                                                <span className="col-span-1">+12 668786979</span>
                                                <span className="col-span-1 underline text-[#055F5B]">Change</span>
                                            </div>
                                        </div>
                                    }
                                    {
                                        shipType === "multiple" && <div className={`border-2 border-gray-300 p-5 rounded-xl bg-[#FFD5841A] ${shippingAddressExcel === null ? "pt-28 pb-28" : "pt-12 pb-12"}`}>
                                            <h3 className="text-center text-2xl font-bold mb-5">Shipping Address:</h3>
                                            {shippingAddressExcel === null && <>
                                                <label htmlFor="shippingAddressExcel" className="underline text-center max-w-[300px] m-auto block cursor-pointer">Upload here Excel CSV file that includes multiple address for shipment</label>
                                                <input type="file" id="shippingAddressExcel" hidden onChange={(e) => setShippingAddressExcel(e.target.files[0])} />
                                            </>}
                                            {shippingAddressExcel !== null && <>
                                                <div>
                                                    <div className="flex items-center justify-between gap-5 p-4 border-b-[1px] border-b-black">
                                                        <img src={file1} alt="" className="w-10 h-10 rounded-full" />
                                                        <div>
                                                            <h5 className="text-sm font-semibold">file name</h5>
                                                            <div className="flex justify-between items-center gap-4">
                                                                <span className="text-xs text-[#646464]">Details cdcn eoeidfkdcmx0em mx</span>
                                                                <span className="text-xs text-[#646464]">12/8/2022</span>
                                                            </div>
                                                        </div>
                                                        <MdOutlineMoreVert className="cursor-pointer" onClick={() => setScreen("file list")} />
                                                    </div>
                                                    <div className="flex items-center justify-between gap-5 p-4 border-b-[1px] border-b-black">
                                                        <img src={file2} alt="" className="w-10 h-10 rounded-full" />
                                                        <div>
                                                            <h5 className="text-sm font-semibold">file name</h5>
                                                            <div className="flex justify-between items-center gap-4">
                                                                <span className="text-xs text-[#646464]">Details cdcn eoeidfkdcmx0em mx</span>
                                                                <span className="text-xs text-[#646464]">12/8/2022</span>
                                                            </div>
                                                        </div>
                                                        <MdOutlineMoreVert />
                                                    </div>
                                                    <div className="flex items-center justify-between gap-5 p-4">
                                                        <img src={file3} alt="" className="w-10 h-10 rounded-full" />
                                                        <div>
                                                            <h5 className="text-sm font-semibold">file name</h5>
                                                            <div className="flex justify-between items-center gap-4">
                                                                <span className="text-xs text-[#646464]">Details cdcn eoeidfkdcmx0em mx</span>
                                                                <span className="text-xs text-[#646464]">12/8/2022</span>
                                                            </div>
                                                        </div>
                                                        <MdOutlineMoreVert />
                                                    </div>
                                                </div>
                                            </>}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            {
                screen === "file list" && <>
                    <div>
                        <div className="grid grid-cols-3 gap-10">
                            <div>
                                <button className="" onClick={() => setScreen("review details")}>back</button>
                            </div>
                            <div className="text-center">
                                <h2 className="text-2xl font-bold">File Name</h2>
                            </div>
                            <div></div>
                        </div>
                        <div className="mt-8 rounded-xl bg-[#FFFBF3] p-4 h-full min-h-[500px] max-h-[510px]">
                            <table className="w-full">
                                <thead>
                                    <th className="border-b-2 border-[#000000] pb-3 text-center">First name</th>
                                    <th className="border-b-2 border-[#000000] pb-3 text-center">Last name</th>
                                    <th className="border-b-2 border-[#000000] pb-3 text-center">Address line 1</th>
                                    <th className="border-b-2 border-[#000000] pb-3 text-center">Address line 2</th>
                                    <th className="border-b-2 border-[#000000] pb-3 text-center">City</th>
                                    <th className="border-b-2 border-[#000000] pb-3 text-center">State</th>
                                    <th className="border-b-2 border-[#000000] pb-3 text-center">Zip code</th>
                                    <th className="border-b-2 border-[#000000] pb-3 text-center">Country</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Kevin</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Kevin</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Lorem ipsum dolor sit </td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Lorem ipsum dolor sit </td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">New York</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">England</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">324689</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">England</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Zoltan</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Zoltan</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Lorem ipsum dolor sit </td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Lorem ipsum dolor sit </td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">New York</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">England</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">324689</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">England</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Upma</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Upma</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Lorem ipsum dolor sit </td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Lorem ipsum dolor sit </td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">New York</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">England</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">324689</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">England</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Kamala</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Kamala</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Lorem ipsum dolor sit </td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Lorem ipsum dolor sit </td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">New York</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">England</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">324689</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">England</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Ren</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Ren</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Lorem ipsum dolor sit </td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">Lorem ipsum dolor sit </td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">New York</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">England</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">324689</td>
                                        <td className="py-4 border-b-[1.5px] border-b-[#BABABA]">England</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-center items-center gap-10 mt-10">
                            <button className="btn capitalize py-2 px-12">cancel</button>
                            <button className="btn capitalize py-2 px-12 bg-[#055F5B] text-[#FFFFFF]" onClick={() => setScreen("ecomProjectScreen")}>Save</button>
                        </div>
                    </div>
                </>
            }
            {
                screen === "ecomProjectScreen" && <>
                    <div className="my-4">
                        <div className="mb-5">
                            <input type="text" className="w-1/2 rounded-xl shadow-xl p-4 outline-none border-[1px] border-[#F1F1F1]" placeholder="Enter Company Name here" />
                            <h2 className="text-xl font-bold mt-8 mb-4">Enter project Description</h2>
                            <textarea name="" id="" className="w-full h-40 rounded-xl p-4 shadow-xl outline-none resize-none border-[1px] border-[#F1F1F1]"></textarea>
                        </div>
                        <div className="grid grid-cols-6 gap-5 items-center">
                            <div>
                                <h2 className="text-xl font-bold">Add products</h2>
                            </div>
                            <div className="flex items-center gap-4 bg-[#0000000A] p-4 rounded-full col-span-2">
                                <FiSearch className="text-xl" />
                                <input type="text" className="text-sm h-full w-full outline-none bg-transparent" placeholder="Pen" />
                            </div>
                            <div></div>
                            <div>
                                <button className="btn flex items-center gap-2 bg-[#FFD584] border-0 text-black hover:text-white w-full capitalize">
                                    <BiShareAlt classNamet="text-2xl" />
                                    <span className="text-xs">Share Link</span>
                                </button>
                            </div>
                            <div>
                                <label htmlFor="comment" className="btn flex items-center gap-2 bg-[#FFD584] border-0 text-black hover:text-white w-full capitalize">
                                    <FaRegComments classNamet="text-2xl" />
                                    <span className="text-xs">Comment</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center my-5">
                            <button className="text-[#055F5B] text-sm border-b-2 border-[#055F5B] px-3 font-semibold">All</button>
                            <button className="text-[#878787] text-sm px-3 font-semibold">favourite items</button>
                        </div>
                    </div>
                    <div className="min-h-[400px] h-full max-h-[485px] overflow-y-scroll pb-4">
                        <div className="grid grid-cols-4 gap-7">
                            <div className="shadow-lg rounded-xl bg-[#FFFBF3]">
                                <img src={ecomPen} alt="" className="rounded-lg w-full" />
                                <div className="pt-4 px-2 pb-1">
                                    <h2 className="font-extrabold">Nike Stride Pen - Dark Blue</h2>
                                    <div className="flex items-center gap-3 mt-2 mb-3">
                                        <div className="flex items-center">
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiOutlineStar className="text-[#FFD600] text-xl" />
                                        </div>
                                        <span className="text-xs text-[#A8A8A8]">4 star Rating</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-md font-bold">$ 12.99</span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm text-[#A8A8A8]">Sold by</span>
                                            <div className="rounded-full w-[35px] h-[35px] border-[1px] border-[#A8A8A8] bg-white shadow-xl p-1">
                                                <img src={happyShop} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg rounded-xl bg-[#FFFBF3]">
                                <img src={ecomPen2} alt="" className="rounded-lg w-full" />
                                <div className="pt-4 px-2 pb-1">
                                    <h2 className="font-extrabold">Nike Stride Pen - Dark Blue</h2>
                                    <div className="flex items-center gap-3 mt-2 mb-3">
                                        <div className="flex items-center">
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiOutlineStar className="text-[#FFD600] text-xl" />
                                        </div>
                                        <span className="text-xs text-[#A8A8A8]">4 star Rating</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-md font-bold">$ 12.99</span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm text-[#A8A8A8]">Sold by</span>
                                            <div className="rounded-full w-[35px] h-[35px] border-[1px] border-[#A8A8A8] bg-white shadow-xl p-1">
                                                <img src={happyShop} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg rounded-xl bg-[#FFFBF3]">
                                <img src={ecomPen3} alt="" className="rounded-lg w-full" />
                                <div className="pt-4 px-2 pb-1">
                                    <h2 className="font-extrabold">Nike Stride Pen - Dark Blue</h2>
                                    <div className="flex items-center gap-3 mt-2 mb-3">
                                        <div className="flex items-center">
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiOutlineStar className="text-[#FFD600] text-xl" />
                                        </div>
                                        <span className="text-xs text-[#A8A8A8]">4 star Rating</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-md font-bold">$ 12.99</span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm text-[#A8A8A8]">Sold by</span>
                                            <div className="rounded-full w-[35px] h-[35px] border-[1px] border-[#A8A8A8] bg-white shadow-xl p-1">
                                                <img src={happyShop} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg rounded-xl bg-[#FFFBF3]">
                                <img src={ecomPen4} alt="" className="rounded-lg w-full" />
                                <div className="pt-4 px-2 pb-1">
                                    <h2 className="font-extrabold">Nike Stride Pen - Dark Blue</h2>
                                    <div className="flex items-center gap-3 mt-2 mb-3">
                                        <div className="flex items-center">
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiOutlineStar className="text-[#FFD600] text-xl" />
                                        </div>
                                        <span className="text-xs text-[#A8A8A8]">4 star Rating</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-md font-bold">$ 12.99</span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm text-[#A8A8A8]">Sold by</span>
                                            <div className="rounded-full w-[35px] h-[35px] border-[1px] border-[#A8A8A8] bg-white shadow-xl p-1">
                                                <img src={happyShop} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg rounded-xl bg-[#FFFBF3]">
                                <img src={ecomPen5} alt="" className="rounded-lg w-full" />
                                <div className="pt-4 px-2 pb-1">
                                    <h2 className="font-extrabold">Nike Stride Pen - Dark Blue</h2>
                                    <div className="flex items-center gap-3 mt-2 mb-3">
                                        <div className="flex items-center">
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiOutlineStar className="text-[#FFD600] text-xl" />
                                        </div>
                                        <span className="text-xs text-[#A8A8A8]">4 star Rating</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-md font-bold">$ 12.99</span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm text-[#A8A8A8]">Sold by</span>
                                            <div className="rounded-full w-[35px] h-[35px] border-[1px] border-[#A8A8A8] bg-white shadow-xl p-1">
                                                <img src={happyShop} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg rounded-xl bg-[#FFFBF3]">
                                <img src={ecomPen6} alt="" className="rounded-lg w-full" />
                                <div className="pt-4 px-2 pb-1">
                                    <h2 className="font-extrabold">Nike Stride Pen - Dark Blue</h2>
                                    <div className="flex items-center gap-3 mt-2 mb-3">
                                        <div className="flex items-center">
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiOutlineStar className="text-[#FFD600] text-xl" />
                                        </div>
                                        <span className="text-xs text-[#A8A8A8]">4 star Rating</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-md font-bold">$ 12.99</span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm text-[#A8A8A8]">Sold by</span>
                                            <div className="rounded-full w-[35px] h-[35px] border-[1px] border-[#A8A8A8] bg-white shadow-xl p-1">
                                                <img src={happyShop} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg rounded-xl bg-[#FFFBF3]">
                                <img src={ecomPen7} alt="" className="rounded-lg w-full" />
                                <div className="pt-4 px-2 pb-1">
                                    <h2 className="font-extrabold">Nike Stride Pen - Dark Blue</h2>
                                    <div className="flex items-center gap-3 mt-2 mb-3">
                                        <div className="flex items-center">
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiOutlineStar className="text-[#FFD600] text-xl" />
                                        </div>
                                        <span className="text-xs text-[#A8A8A8]">4 star Rating</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-md font-bold">$ 12.99</span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm text-[#A8A8A8]">Sold by</span>
                                            <div className="rounded-full w-[35px] h-[35px] border-[1px] border-[#A8A8A8] bg-white shadow-xl p-1">
                                                <img src={happyShop} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg rounded-xl bg-[#FFFBF3]">
                                <img src={ecomPen8} alt="" className="rounded-lg w-full" />
                                <div className="pt-4 px-2 pb-1">
                                    <h2 className="font-extrabold">Nike Stride Pen - Dark Blue</h2>
                                    <div className="flex items-center gap-3 mt-2 mb-3">
                                        <div className="flex items-center">
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiFillStar className="text-[#FFD600] text-xl" />
                                            <AiOutlineStar className="text-[#FFD600] text-xl" />
                                        </div>
                                        <span className="text-xs text-[#A8A8A8]">4 star Rating</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-md font-bold">$ 12.99</span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm text-[#A8A8A8]">Sold by</span>
                                            <div className="rounded-full w-[35px] h-[35px] border-[1px] border-[#A8A8A8] bg-white shadow-xl p-1">
                                                <img src={happyShop} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <div className="text-[#] flex gap-5 items-center text-sm">
                            <span>Pages 44 / 77</span>
                            <label htmlFor="itemPerPage" className="border-[1px] border-[#858585] py-[2px] px-3 rounded-lg">
                                <select name="" id="itemPerPage" className="bg-transparent w-full outline-none">
                                    <option value="">8</option>
                                </select>
                            </label>
                            <span>Items Per Pages</span>
                        </div>
                        <div>
                            <span className="text-sm text-[#858585]">8 of 35 items</span>
                        </div>
                    </div>
                    <input type="checkbox" id="comment" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-lg relative">
                            <label htmlFor="comment"><FaTimes className="text-2xl cursor-pointer absolute top-2 right-2" /></label>
                            <h3 className="font-bold text-2xl text-center mb-12">Enter your name to comment</h3>
                            <div>
                                <label htmlFor="" className="text-sm">Name here</label>
                                <div className="p-4 rounded-xl shadow-xl flex items-center gap-2 justify-between">
                                    <input type="text" placeholder="John preshay" className="w-full outline-none text-sm" onChange={(e) => setCommentName(e.target.value)} />
                                    {
                                        commentName.length > 0 && <BsFillCheckCircleFill className="text-2xl text-[#65E062]" />
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 my-12">
                                <label htmlFor="" className="flex items-center gap-3">
                                    <input type="radio" name="radio-5" className="radio radio-success" />
                                    <span className="text-xs">Submit to eveyone</span>
                                </label>
                                <label htmlFor="" className="flex items-center gap-3">
                                    <input type="radio" name="radio-5" className="radio radio-success" />
                                    <span className="text-xs">Submit to a specific person</span>
                                </label>
                            </div>
                            <div className="flex gap-5 items-center justify-center">
                                <button className="bg-[#055F5B1F] text-[#055F5B] py-2 px-12 rounded-lg">cancel</button>
                                <button className="bg-[#055F5B] text-white py-2 px-12 rounded-lg">Comment</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default V2NewOrders