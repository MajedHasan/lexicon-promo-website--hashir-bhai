import styles from "./V1NewOrders.module.css"
import printProducts from "../../assets/v1/dashboard/new-order/print-products.png"
import paper from "../../assets/v1/dashboard/new-order/paper.png"
import apparel from "../../assets/v1/dashboard/new-order/apparel.png"
import businessCard from "../../assets/v1/dashboard/new-order/business-card.png"
import pens from "../../assets/v1/dashboard/new-order/pens.png"
import drinkware from "../../assets/v1/dashboard/new-order/drinkware.png"
import happyShop from "../../assets/v1/dashboard/ecommerce-project-screen/happy-shop.png"
import ecomPen from "../../assets/v1/dashboard/ecommerce-project-screen/pen.png"
import ecomPen2 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-2.png"
import ecomPen3 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-3.png"
import ecomPen4 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-4.png"
import ecomPen5 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-5.png"
import ecomPen6 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-6.png"
import ecomPen7 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-7.png"
import ecomPen8 from "../../assets/v1/dashboard/ecommerce-project-screen/pen-8.png"
import catalog from "../../assets/v1/dashboard/catalog.png"
import uploadLogo from "../../assets/v1/dashboard/new-order/upload-logo.png"

import { IoMdCheckmarkCircle } from "react-icons/io"
import { BsChevronDown, BsPlusLg, BsPencil, BsShare, BsChevronLeft } from "react-icons/bs"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineEdit, AiOutlineWarning, AiFillStar, AiOutlineStar, AiOutlineCamera } from "react-icons/ai"
import { MdOutlineSimCardDownload, MdOutlineArrowBackIosNew } from "react-icons/md"
import { FiTrash } from "react-icons/fi"
import { FaTimes, FaRegEdit, FaSearchPlus } from "react-icons/fa"
import { CgFolder } from "react-icons/cg"
import { FcCheckmark } from "react-icons/fc"
import { RxPencil2 } from "react-icons/rx"
import { useState } from "react"
import { toast } from "react-toastify"


const V1NewOrders = () => {

    const [selectedProducts, setSelectedProducts] = useState([])
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
    const handleSelectedProduct = (product) => {
        const isSelected = selectedProducts.find(p => p._id === product._id)
        if (isSelected) {
            setSelectedProducts(selectedProducts.filter(p => p._id !== product._id))
        }
        else {
            setSelectedProducts([...selectedProducts, product])
        }
        console.log(selectedProducts, isSelected)
    }

    const [screen, setScreen] = useState(null)
    const handleUploadDoc = (e, type) => {
        console.log(e.target.files[0], type)
        setScreen("document")
    }
    const [uploadedDoc, setUploadedDoc] = useState([
        {
            _id: 1,
            doc: "Marketing.PDF",
            specification: "Lorem ipsum dolor sit amet, cons ectet ur ist iiadipisci elit, sed eiusmod.",
            category: "Lorem ipsum"
        }
    ])
    const handleSelectDesign = () => {
        toast.success("Product Name have been updated successfully!")
    }


    return (
        <>
            {
                screen === null && <>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className={styles.orderProgress}>
                                <div className={styles.orderProgressActive}>
                                    <div>
                                        <span>1</span>
                                    </div>
                                    <p>Product Selection</p>
                                </div>
                                <div>
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
                            <div className="mt-8 shadow-xl rounded-md p-4">
                                <h2 className="text-center font-bold text-2xl mb-5">Product Selection</h2>
                                <div className="grid grid-cols-2 gap-x-5 gap-y-8 p-5">
                                    <div className={styles.product}>
                                        <input type="checkbox" name="" id="printProducts" hidden />
                                        <label htmlFor="printProducts" className="flex justify-start items-center gap-4 rounded-lg p-3 bg-[#65E062]" onClick={() => handleSelectedProduct({ _id: 1, name: "Print Products", details: "Lorem ipsum dolor sit amet, cons ectet.", qty: 1, nameColor: "#65e062", img: printProducts })}>
                                            <img src={printProducts} className="h-[50px] w-[50px]" alt="" />
                                            <span className="text-white font-semibold">Print Products</span>
                                            <IoMdCheckmarkCircle />
                                        </label>
                                    </div>
                                    <div className={styles.product}>
                                        <input type="checkbox" name="" id="paper" hidden />
                                        <label htmlFor="paper" className="flex justify-start items-center gap-4 rounded-lg p-3 bg-[#6abd7480]" onClick={() => handleSelectedProduct({ _id: 2, name: "Paper", details: "Lorem ipsum dolor sit amet, cons ectet.", qty: 1, nameColor: "#6abd7480", img: paper })}>
                                            <img src={paper} className="h-[50px] w-[50px]" alt="" />
                                            <span className="text-white font-semibold">Paper</span>
                                            <IoMdCheckmarkCircle />
                                        </label>
                                    </div>
                                    <div className={styles.product}>
                                        <input type="checkbox" name="" id="apparel" hidden />
                                        <label htmlFor="apparel" className="flex justify-start items-center gap-4 rounded-lg p-3 bg-[#6a72bd80]" onClick={() => handleSelectedProduct({ _id: 3, name: "Apparel", details: "Lorem ipsum dolor sit amet, cons ectet.", qty: 1, nameColor: "#6a72bd80", img: apparel })}>
                                            <img src={apparel} className="h-[50px] w-[50px]" alt="" />
                                            <span className="text-white font-semibold">Apparel</span>
                                            <IoMdCheckmarkCircle />
                                        </label>
                                    </div>
                                    <div className={styles.product}>
                                        <input type="checkbox" name="" id="business-cards" hidden />
                                        <label htmlFor="business-cards" className="flex justify-start items-center gap-4 rounded-lg p-3 bg-[#94f7e5]" onClick={() => handleSelectedProduct({ _id: 4, name: "Business cards", details: "Lorem ipsum dolor sit amet, cons ectet.", qty: 1, nameColor: "#94f7e5", img: businessCard })}>
                                            <img src={businessCard} className="h-[50px] w-[50px]" alt="" />
                                            <span className="text-white font-semibold">Business cards</span>
                                            <IoMdCheckmarkCircle />
                                        </label>
                                    </div>
                                    <div className={styles.product}>
                                        <input type="checkbox" name="" id="pens" hidden />
                                        <label htmlFor="pens" className="flex justify-start items-center gap-4 rounded-lg p-3 bg-[#FF8787]" onClick={() => handleSelectedProduct({ _id: 5, name: "Pens", details: "Lorem ipsum dolor sit amet, cons ectet.", qty: 1, nameColor: "#FF8787", img: pens })}>
                                            <img src={pens} className="h-[50px] w-[50px]" alt="" />
                                            <span className="text-white font-semibold">Pens</span>
                                            <IoMdCheckmarkCircle />
                                        </label>
                                    </div>
                                    <div className={styles.product}>
                                        <input type="checkbox" name="" id="drinkware" hidden />
                                        <label htmlFor="drinkware" className="flex justify-start items-center gap-4 rounded-lg p-3 bg-[#F794C4]" onClick={() => handleSelectedProduct({ _id: 6, name: "Drinkware", details: "Lorem ipsum dolor sit amet, cons ectet.", qty: 1, nameColor: "#F794C4", img: drinkware })}>
                                            <img src={drinkware} className="h-[50px] w-[50px]" alt="" />
                                            <span className="text-white font-semibold">Drinkware</span>
                                            <IoMdCheckmarkCircle />
                                        </label>
                                    </div>
                                    <label htmlFor="selectDocument" className="flex justify-center items-center bg-[#FFD584] rounded-lg py-6 gap-4 cursor-pointer">
                                        <span className="font-semibold">Select Document</span>
                                    </label>
                                    <button type="button" className="flex justify-center items-center bg-[#FFD584] rounded-lg py-6 gap-4">
                                        <BsPlusLg />
                                        <span className="font-semibold">Add New</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="bg-[#FFFBF3] p-5 flex-1 rounded-lg">
                                <h2 className="text-center font-semibold text-2xl mb-0">Selected Products</h2>
                                <div className="overflow-x-auto min-h-[380px] max-h-[505px] pb-3">
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
                            <div className="mt-6 flex items-center justify-center gap-5">
                                <label htmlFor="resetProduct" className="btn rounded-lg bg-[#055f5b1f] border-0 text-[#055F5B] capitalize w-[200px] h-[40px] text-lg hover:text-white">Reset</label>
                                <button className="btn rounded-lg bg-[#055F5B] border-0 text-[#FFFFFF] capitalize w-[200px] h-[40px] text-lg hover:text-white">Next</button>
                            </div>
                        </div>
                    </div>
                    <input type="checkbox" id="selectDocument" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl relative">
                            <h3 className="font-bold text-2xl text-center mb-12">Select Document</h3>
                            <div className="grid grid-cols-4 gap-6">
                                <label htmlFor="marketing" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                                    <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                        <CgFolder className="text-2xl" />
                                    </div>
                                    <h4 className="text-lg font-semibold">Marketing.pdf</h4>
                                    <hr className="border-[0.5px] border-[#055F5B] w-full" />
                                    <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                                    <input type="file" name="" id="marketing" onChange={(e) => handleUploadDoc(e, "marketing")} hidden />
                                </label>
                                <label htmlFor="document" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                                    <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                        <CgFolder className="text-2xl" />
                                    </div>
                                    <h4 className="text-lg font-semibold">Doucment.pdf</h4>
                                    <hr className="border-[0.5px] border-[#055F5B] w-full" />
                                    <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                                    <input type="file" name="" id="document" hidden />
                                </label>
                                <label htmlFor="mystuff" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                                    <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                        <CgFolder className="text-2xl" />
                                    </div>
                                    <h4 className="text-lg font-semibold">Mystuff.pdf</h4>
                                    <hr className="border-[0.5px] border-[#055F5B] w-full" />
                                    <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                                    <input type="file" name="" id="mystuff" hidden />
                                </label>
                                <label htmlFor="marketing2" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                                    <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                        <CgFolder className="text-2xl" />
                                    </div>
                                    <h4 className="text-lg font-semibold">Marketing.pdf</h4>
                                    <hr className="border-[0.5px] border-[#055F5B] w-full" />
                                    <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                                    <input type="file" name="" id="marketing2" hidden />
                                </label>
                                <label htmlFor="marketing3" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                                    <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                        <CgFolder className="text-2xl" />
                                    </div>
                                    <h4 className="text-lg font-semibold">Marketing.pdf</h4>
                                    <hr className="border-[0.5px] border-[#055F5B] w-full" />
                                    <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                                    <input type="file" name="" id="marketing3" hidden />
                                </label>
                                <label htmlFor="marketing4" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                                    <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                        <CgFolder className="text-2xl" />
                                    </div>
                                    <h4 className="text-lg font-semibold">Marketing.pdf</h4>
                                    <hr className="border-[0.5px] border-[#055F5B] w-full" />
                                    <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                                    <input type="file" name="" id="marketing4" hidden />
                                </label>
                                <label htmlFor="marketing5" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                                    <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                        <CgFolder className="text-2xl" />
                                    </div>
                                    <h4 className="text-lg font-semibold">Marketing.pdf</h4>
                                    <hr className="border-[0.5px] border-[#055F5B] w-full" />
                                    <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                                    <input type="file" name="" id="marketing5" hidden />
                                </label>
                                <label htmlFor="marketing6" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                                    <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                        <CgFolder className="text-2xl" />
                                    </div>
                                    <h4 className="text-lg font-semibold">Marketing.pdf</h4>
                                    <hr className="border-[0.5px] border-[#055F5B] w-full" />
                                    <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                                    <input type="file" name="" id="marketing6" hidden />
                                </label>
                            </div>
                            <div className="modal-action absolute -top-3 right-3">
                                <label htmlFor="selectDocument" className="btn rounded-full w-12 h-12">
                                    <FaTimes className="text-3xl text-white" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <input type="checkbox" id="removeProduct" className="modal-toggle" />
                    <label htmlFor="removeProduct" className="modal cursor-pointer">
                        <label className="modal-box relative text-center block" htmlFor="">
                            <h3 className="text-3xl font-bold mt-4 mb-7">Remove Product</h3>
                            <p className="py-4 text-sm text-[#5E5E5E] mt-12 mb-6">Are you sure you want to remove product Name from the list of Selected items?</p>
                            <div className="grid grid-cols-2 gap-4">
                                <label htmlFor="removeProduct" className="capitalize bg-[#E3E3E3] hover:bg-[#055F5B] text-[#055F5B] hover:text-[#FFFFFF] w-full cursor-pointer rounded-lg flex items-center justify-center font-semibold">
                                    Cancel
                                </label>
                                <label htmlFor="removeProduct" className="bg-[#055F5B] text-[#FFFFFF] capitalize flex-1 py-3 rounded-lg cursor-pointer hover:bg-[#101a1a] font-semibold" onClick={() => toast.success("Product Name have been successfully removed from the list !")}>Remove</label>
                            </div>
                        </label>
                    </label>
                    <input type="checkbox" id="resetProduct" className="modal-toggle" />
                    <label htmlFor="resetProduct" className="modal cursor-pointer">
                        <label className="modal-box relative text-center block" htmlFor="">
                            <h3 className="text-3xl font-bold mt-4 mb-7">Reset Selection</h3>
                            <p className="py-4 text-sm text-[#5E5E5E] mt-12 mb-6">Are you sure you want to reset all the selection you have made?</p>
                            <div className="grid grid-cols-2 gap-4">
                                <label htmlFor="resetProduct" className="capitalize bg-[#E3E3E3] hover:bg-[#055F5B] text-[#055F5B] hover:text-[#FFFFFF] w-full cursor-pointer rounded-lg flex items-center justify-center font-semibold">
                                    Cancel
                                </label>
                                <label htmlFor="resetProduct" className="bg-[#055F5B] text-[#FFFFFF] capitalize flex-1 py-3 rounded-lg cursor-pointer hover:bg-[#101a1a] font-semibold" onClick={() => toast.success("Products Reset successfully")}>Reset</label>
                            </div>
                        </label>
                    </label>
                </>
            }
            {
                screen === "document" && <>
                    <div className="py-3 px-5 bg-[#055f5b1a]">
                        <h2 className="text-center text-xl font-semibold">Upload Document</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-8">
                        <div className="shadow-lg rounded-lg p-5">
                            <div className="rounded-lg border-[1px] border-[#EAEAEA] bg-[#F9FAFB] py-1 px-2 mb-8">
                                <select name="" id="" className="w-full h-full py-4 px-4 outline-none bg-transparent" required>
                                    <option value="">Select Category</option>
                                </select>
                            </div>
                            <div className="rounded-lg border-[1px] border-[#EAEAEA] bg-[#F9FAFB] py-1 px-2 mb-8">
                                <select name="" id="" className="w-full h-full py-4 px-4 outline-none bg-transparent" required>
                                    <option value="">Select Specifications</option>
                                </select>
                            </div>
                            <div className="rounded-lg border-[1px] border-dashed flex flex-col items-center gap-4 bg-[#FFF7E6] p-5 border-[#055F5B]">
                                <CgFolder className="text-[#055F5B] text-8xl font-normal" />
                                <h4 className="text-[#8D8D8D] mb-10">Drang doucment here or</h4>
                                <label htmlFor="browse" className="bg-[#FFD584] rounded-lg py-4 px-20 cursor-pointer">
                                    Browse
                                </label>
                                <input type="file" id="browse" hidden />
                            </div>
                            <div className="mt-4 flex justify-center items-center gap-5">
                                <button className="btn text-[#055F5B] bg-[#055f5b1f] border-0 capitalize w-48 hover:text-white">Cancel</button>
                                <label htmlFor="selectDesign" className="btn text-white bg-[#055F5B] border-0 capitalize w-48">
                                    Upload & Share
                                </label>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-[#FFFBF3] p-5 flex-1 rounded-lg">
                                <h2 className="text-center font-semibold text-2xl mb-0">Uploaded Documents</h2>
                                <div className="overflow-x-auto min-h-[380px] max-h-[505px] pb-3">
                                    <table className="table w-full">
                                        <thead>
                                            <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                                <div className="flex items-end gap-2">
                                                    <span className="cursor-pointer">Documents</span> <BsChevronDown className="cursor-pointer" />
                                                </div>
                                            </th>
                                            <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                                <div className="flex items-end gap-2">
                                                    <span className="cursor-pointer">Specifications</span>
                                                </div>
                                            </th>
                                            <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                                <div className="flex items-end gap-2">
                                                    <span className="cursor-pointer">Category</span> <BsChevronDown className="cursor-pointer" />
                                                </div>
                                            </th>
                                            <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                                <div className="flex items-end gap-2">
                                                    <span className="cursor-pointer">Actions</span>
                                                </div>
                                            </th>
                                        </thead>
                                        <tbody>
                                            {
                                                uploadedDoc?.map(doc => (
                                                    <tr key={doc?._id}>
                                                        <td className="bg-transparent">{doc?.doc}</td>
                                                        <td className="bg-transparent">
                                                            <p className="whitespace-normal text-sm">{doc?.specification}</p>
                                                        </td>
                                                        <td className="bg-transparent">{doc?.category}</td>
                                                        <td className="bg-transparent">
                                                            <div className="relative">
                                                                <button onClick={() => setShowAction(showAction === doc?._id ? null : doc?._id)}>
                                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M15.9991 12.4267C17.5858 12.4267 18.8791 11.1334 18.8791 9.54675C18.8791 7.96008 17.5858 6.66675 15.9991 6.66675C14.4125 6.66675 13.1191 7.96008 13.1191 9.54675C13.1191 11.1334 14.4125 12.4267 15.9991 12.4267Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M9.05383 25.3335C10.6405 25.3335 11.9338 24.0402 11.9338 22.4535C11.9338 20.8668 10.6405 19.5735 9.05383 19.5735C7.46716 19.5735 6.17383 20.8668 6.17383 22.4535C6.17383 24.0402 7.45383 25.3335 9.05383 25.3335Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M22.9464 25.3335C24.5331 25.3335 25.8264 24.0402 25.8264 22.4535C25.8264 20.8668 24.5331 19.5735 22.9464 19.5735C21.3597 19.5735 20.0664 20.8668 20.0664 22.4535C20.0664 24.0402 21.3597 25.3335 22.9464 25.3335Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                </button>
                                                                {
                                                                    showAction === doc?._id &&
                                                                    <div className="absolute top-10 right-0 p-4 w-[175px] rounded-lg shadow-lg bg-white z-10">
                                                                        <div className="flex gap-3 items-center cursor-pointer">
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
                                                                        <div className="flex gap-3 items-center cursor-pointer">
                                                                            <span className="flex justify-center items-center bg-[#FFF7E6] w-10 h-10 rounded-full">
                                                                                <FiTrash className="text-xl" />
                                                                            </span>
                                                                            <span>Remove</span>
                                                                        </div>
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
                            </div>
                        </div>
                    </div>
                </>
            }
            <input type="checkbox" id="selectDesign" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl relative">
                    <h3 className="font-bold text-2xl text-center mb-12">Select Design</h3>
                    <div className="grid grid-cols-4 gap-6">
                        <label htmlFor="selectDesign" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3" onClick={handleSelectDesign}>
                            <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                <BsPencil className="text-2xl" />
                            </div>
                            <h4 className="text-lg font-semibold">Design 1</h4>
                            <hr className="border-[0.5px] border-[#055F5B] w-full" />
                            <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                            <input type="file" name="" id="marketing" hidden />
                        </label>
                        <label htmlFor="document" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                            <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                <BsPencil className="text-2xl" />
                            </div>
                            <h4 className="text-lg font-semibold">Design 2</h4>
                            <hr className="border-[0.5px] border-[#055F5B] w-full" />
                            <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                            <input type="file" name="" id="document" hidden />
                        </label>
                        <label htmlFor="mystuff" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                            <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                <BsPencil className="text-2xl" />
                            </div>
                            <h4 className="text-lg font-semibold">Design 3</h4>
                            <hr className="border-[0.5px] border-[#055F5B] w-full" />
                            <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                            <input type="file" name="" id="mystuff" hidden />
                        </label>
                        <label htmlFor="marketing2" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                            <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                <BsPencil className="text-2xl" />
                            </div>
                            <h4 className="text-lg font-semibold">Design 4</h4>
                            <hr className="border-[0.5px] border-[#055F5B] w-full" />
                            <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                            <input type="file" name="" id="marketing2" hidden />
                        </label>
                        <label htmlFor="marketing3" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                            <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                <BsPencil className="text-2xl" />
                            </div>
                            <h4 className="text-lg font-semibold">Design 5</h4>
                            <hr className="border-[0.5px] border-[#055F5B] w-full" />
                            <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                            <input type="file" name="" id="marketing3" hidden />
                        </label>
                        <label htmlFor="marketing4" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                            <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                <BsPencil className="text-2xl" />
                            </div>
                            <h4 className="text-lg font-semibold">Design 6</h4>
                            <hr className="border-[0.5px] border-[#055F5B] w-full" />
                            <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                            <input type="file" name="" id="marketing4" hidden />
                        </label>
                        <label htmlFor="marketing5" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                            <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                <BsPencil className="text-2xl" />
                            </div>
                            <h4 className="text-lg font-semibold">Design 7</h4>
                            <hr className="border-[0.5px] border-[#055F5B] w-full" />
                            <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                            <input type="file" name="" id="marketing5" hidden />
                        </label>
                        <label htmlFor="marketing6" className="cursor-pointer py-5 px-3 rounded-xl shadow-xl bg-[#FFF7E6] flex flex-col items-center justify-center gap-3">
                            <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-xl bg-white">
                                <BsPencil className="text-2xl" />
                            </div>
                            <h4 className="text-lg font-semibold">Design 8</h4>
                            <hr className="border-[0.5px] border-[#055F5B] w-full" />
                            <p className="text-left text-[#737373] text-sm">Lorem ipsum dolor sit amet, consectetur ist ii ii adipisci elit, sed eiusmod.</p>
                            <input type="file" name="" id="marketing6" hidden />
                        </label>
                    </div>
                    <div className="modal-action absolute -top-3 right-3">
                        <label htmlFor="selectDesign" className="btn rounded-full w-12 h-12">
                            <FaTimes className="text-3xl text-white" />
                        </label>
                    </div>
                </div>
            </div>

            {
                screen === "itemsDetails" && <>
                    <div className="grid grid-cols-2 gap-8 mt-4 mb-8">
                        <div>
                            <div className={`${styles.orderProgress} ${styles.orderProgress25}`}>
                                <div className={styles.orderProgressActive}>
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
                        <div className="py-4 px-5 bg-[#FFFBF3] rounded-lg">
                            <h2 className="text-xl font-bold">Preferred Shipping</h2>
                            <div className="flex gap-4 items-center mt-4">
                                <span className="flex justify-center items-center w-14 h-10 rounded-lg border-[1px] border-[#48A071]">
                                    <FcCheckmark className="text-xl" />
                                </span>
                                <p className="text-[#787878]">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-[#FFFBF3] p-5 flex-1 rounded-lg">
                            <h2 className="text-center font-semibold text-2xl mb-0">Items Details</h2>
                            <div className="overflow-x-auto min-h-[370px] max-h-[500px] h-full pb-3">
                                <table className="table w-full">
                                    <thead>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-end gap-2">
                                                <span className="cursor-pointer">Item</span> <BsChevronDown className="cursor-pointer" />
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-end gap-2">
                                                <span className="cursor-pointer">Item Name</span> <BsChevronDown className="cursor-pointer" />
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-end gap-2">
                                                <span className="cursor-pointer">Details</span> <BsChevronDown className="cursor-pointer" />
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold ">
                                            <div className="flex items-end gap-2 justify-center">
                                                <span className="cursor-pointer">Quantity</span> <BsChevronDown className="cursor-pointer" />
                                            </div>
                                        </th>
                                        <th className="border-b-[1px] border-[#5A5A5A] bg-transparent text-[#A8A8A8] capitalize font-semibold">
                                            <div className="flex items-end gap-2 justify-center">
                                                <span className="cursor-pointer">Actions</span> <BsChevronDown className="cursor-pointer" />
                                            </div>
                                        </th>
                                    </thead>
                                    <tbody>
                                        {
                                            selectedProducts?.map(product => (
                                                <tr key={product?._id}>
                                                    <td className="bg-transparent">
                                                        <div className="flex items-start gap-3">
                                                            <img src={product?.img} alt="" className="rounded-full w-[50px] h-[50px] cursor-pointer" onClick={() => setScreen("ecomProjectScreen")} />
                                                            <FaSearchPlus style={{ color: product?.nameColor }} className="cursor-pointer" onClick={() => setScreen("full view")} />
                                                        </div>
                                                    </td>
                                                    <td className={`bg-transparent font-bold relative ${styles.showMeta}`} style={{ color: product?.nameColor }}>
                                                        <div className="flex gap-4 items-center cursor-pointer">
                                                            <span className="flex items-end gap-1">{product?.name} <BsChevronDown /></span>
                                                            <FaRegEdit onClick={() => setScreen("editing")} />
                                                        </div>
                                                        <div className="absolute p-5 rounded-lg shadow-lg bg- top-14 left-0 grid grid-cols-2 gap-x-7 gap-y-3 bg-white text-black text-sm">
                                                            <span className="font-semibold">Processing: </span>
                                                            <span className="text-[#656565]">1 - 2 days</span>
                                                            <span className="font-semibold">Production: </span>
                                                            <span className="text-[#656565]">2 - 4 days</span>
                                                            <span className="font-semibold">Delivery Day: </span>
                                                            <span className="text-[#656565]">12/2/2022</span>
                                                        </div>
                                                    </td>
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
                                                        <div className={`relative ${styles.showShare}`}>
                                                            <button onClick={() => setShowAction(showAction === product?._id ? null : product?._id)}>
                                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M15.9991 12.4267C17.5858 12.4267 18.8791 11.1334 18.8791 9.54675C18.8791 7.96008 17.5858 6.66675 15.9991 6.66675C14.4125 6.66675 13.1191 7.96008 13.1191 9.54675C13.1191 11.1334 14.4125 12.4267 15.9991 12.4267Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M9.05383 25.3335C10.6405 25.3335 11.9338 24.0402 11.9338 22.4535C11.9338 20.8668 10.6405 19.5735 9.05383 19.5735C7.46716 19.5735 6.17383 20.8668 6.17383 22.4535C6.17383 24.0402 7.45383 25.3335 9.05383 25.3335Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M22.9464 25.3335C24.5331 25.3335 25.8264 24.0402 25.8264 22.4535C25.8264 20.8668 24.5331 19.5735 22.9464 19.5735C21.3597 19.5735 20.0664 20.8668 20.0664 22.4535C20.0664 24.0402 21.3597 25.3335 22.9464 25.3335Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <div className="absolute top-10 right-0 p-4 w-[175px] rounded-lg shadow-lg bg-white z-10">
                                                                <label htmlFor="share" className="flex gap-3 items-center cursor-pointer">
                                                                    <span className="flex justify-center items-center bg-[#FFF7E6] w-10 h-10 rounded-full">
                                                                        <BsShare className="text-xl" />
                                                                    </span>
                                                                    <span>Share</span>
                                                                </label>
                                                            </div>
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
                    <input type="checkbox" id="share" className="modal-toggle" />
                    <label htmlFor="share" className="modal cursor-pointer">
                        <label className="modal-box relative block" htmlFor="">
                            <h3 className="text-3xl font-bold mt-4 mb-7 text-center">Request For Change</h3>
                            <div className="mb-5">
                                <label htmlFor="title" className="font-semibold text-md mb-1 block">Title</label>
                                <label htmlFor="title" className="w-full rounded-lg border-[1px] border-[#EAEAEA] bg-[#F9FAFB] block">
                                    <input type="text" className="w-full bg-transparent outline-none py-4 px-6" placeholder="Explain your request" id="title" />
                                </label>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="description" className="font-semibold text-md mb-1 block">Description</label>
                                <label htmlFor="description" className="w-full rounded-lg border-[1px] border-[#EAEAEA] bg-[#F9FAFB] block">
                                    <textarea className="w-full bg-transparent outline-none py-4 px-6 resize-none h-32" id="description"></textarea>
                                </label>
                            </div>
                            <div className="mb-12">
                                <label htmlFor="file" className="font-semibold text-md mb-1 block">Attach File <span className="text-[#A8A8A8]">( Optional )</span></label>
                                <label htmlFor="file" className="w-full rounded-lg border-[1px] border-[#EAEAEA] bg-[#F9FAFB] flex justify-between items-center py-4 px-6 cursor-pointer">
                                    <span className="text-[#ABABAB]">Browse and upload the file</span>
                                    <input type="file" id="file" hidden />
                                </label>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <label htmlFor="share" className="capitalize bg-[#E3E3E3] hover:bg-[#055F5B] text-[#055F5B] hover:text-[#FFFFFF] w-full cursor-pointer rounded-lg flex items-center justify-center font-semibold">
                                    Cancel
                                </label>
                                <label htmlFor="share" className="bg-[#055F5B] text-[#FFFFFF] capitalize flex-1 py-3 rounded-lg cursor-pointer hover:bg-[#101a1a] font-semibold text-center" onClick={() => toast.success("Your request for the change have been submit to the admin. Thank You!")}>Submit</label>
                            </div>
                        </label>
                    </label>
                </>
            }
            {
                screen === "ecomProjectScreen" && <>
                    <div className="py-3 px-5 bg-[#055f5b1a] flex items-center justify-between">
                        <div>
                            <button className="flex gap-2 items-center" onClick={() => setScreen("itemsDetails")}>
                                <MdOutlineArrowBackIosNew />
                                <span >Back</span>
                            </button>
                        </div>
                        <h2 className="text-md font-bold">Related Project</h2>
                        <div className="flex gap-2 items-center">
                            <BsShare className="font-semibold text-xl" />
                            <span className="text-[#868686]">Share with your friends</span>
                        </div>
                    </div>
                    <div className="my-5 grid grid-cols-6 gap-7">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold">“Pens”</span>
                            <span className="text-[#7C7C7C] text-sm">35 results</span>
                        </div>
                        <div></div>
                        <label htmlFor="categories" className="rounded-lg border-[1px] border-[#EAEAEA] bg-[#F9FAFB] py-3 px-5">
                            <select name="" id="categories" className="outline-none bg-transparent w-full">
                                <option value="">Categories</option>
                            </select>
                        </label>
                        <label htmlFor="quantity" className="rounded-lg border-[1px] border-[#EAEAEA] bg-[#F9FAFB] py-3 px-5">
                            <select name="" id="quantity" className="outline-none bg-transparent w-full">
                                <option value="">Quantity</option>
                            </select>
                        </label>
                        <label htmlFor="sort-by" className="rounded-lg border-[1px] border-[#EAEAEA] bg-[#F9FAFB] py-3 px-5">
                            <select name="" id="sort-by" className="outline-none bg-transparent w-full">
                                <option value="">Sort by</option>
                            </select>
                        </label>
                        <label htmlFor="pricing" className="rounded-lg border-[1px] border-[#EAEAEA] bg-[#F9FAFB] py-3 px-5">
                            <select name="" id="pricing" className="outline-none bg-transparent w-full">
                                <option value="">Pricing</option>
                            </select>
                        </label>
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
                </>
            }
            {
                screen === "full view" && <>
                    <div>
                        <div className="py-3 px-4 bg-[#055F5B1A] grid grid-cols-2">
                            <div className="">
                                <button className="flex items-center gap-2 cursor-pointer" onClick={() => setScreen("itemsDetails")}>
                                    <BsChevronLeft />
                                    <span>Back</span>
                                </button>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Product Full View</h3>
                            </div>
                        </div>
                        <div className="flex gap-8 mt-3">
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
                                <div className="bg-[#FFFBF3] p-6">
                                    <h2 className="text-md font-semibold">Changes Requested</h2>
                                    <hr className="border-b-[1px] border-b-[#D9D9D9] my-5" />
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm font-medium mb-3">Change of description</p>
                                            <span className="text-sm text-[#7C7C7C]">2/12/23 , 04:67 PM</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium mb-3">Attachments</p>
                                            <div className="flex gap-2 items-center mb-3">
                                                <span className="text-sm text-[#7C7C7C]">Image.jpg</span>
                                            </div>
                                            <span className="text-sm text-[#7C7C7C]">450 KB</span>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h4 className="text-sm font-medium mb-4">Description</h4>
                                        <p className="text-[#787878] text-sm">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries. We have change the description, kindly update it into the system.</p>
                                    </div>
                                    <div className="flex items-center gap-3 mt-4">
                                        <span className="">
                                            <input type="checkbox" className="checkbox" />
                                        </span>
                                        <span className="text-[#787878] text-sm">Lorem ipsum is placeholder text commonly used in the graphic, print.</span>
                                    </div>
                                    <div className="mt-5 flex gap-10 justify-center items-center">
                                        <button className="text-[#055F5B] py-3 px-14 rounded-lg bg-[#055F5B1F] text-sm">Back</button>
                                        <button className="text-[#FFFFFF] py-3 px-14 rounded-lg bg-[#055F5B] text-sm" onClick={() => {
                                            setScreen("itemsDetails")
                                            toast.success("Your request for the change have been submit to the admin. Thank You!")
                                        }}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            {
                screen === "editing" && <>
                    <div>
                        <div className="py-3 px-4 bg-[#055F5B1A] grid grid-cols-2">
                            <div className="">
                                <button className="flex items-center gap-2 cursor-pointer" onClick={() => setScreen("itemsDetails")}>
                                    <BsChevronLeft />
                                    <span>Back</span>
                                </button>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Editing</h3>
                            </div>
                        </div>
                        <div className="flex gap-8 mt-4 mb-2">
                            <div className="w-8/12">
                                <div className={`${styles.orderProgress} ${styles.orderProgress20}`} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
                                    <div className={styles.orderProgressActive}>
                                        <div>
                                            <span>1</span>
                                        </div>
                                        <p>Product Selection</p>
                                    </div>
                                    <div className={styles.orderProgressActive}>
                                        <div>
                                            <span>2</span>
                                        </div>
                                        <p>Editing</p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>3</span>
                                        </div>
                                        <p>Proof</p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>4</span>
                                        </div>
                                        <p>Order Place</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-4/12 py-4 px-5 bg-[#FFFBF3] rounded-lg flex justify-between items-center gap-5">
                                <div>
                                    <h2 className="text-xl font-semibold mb-5">Upload logo</h2>
                                    <p className="text-md text-[#8A8A8A]">Upload your logo here!</p>
                                </div>
                                <div className="relative">
                                    <img src={uploadLogo} alt="" className="rounded-full" />
                                    <label htmlFor="" className="rounded-full w-8 h-8 flex justify-center items-center bg-white shadow-lg bottom-1 right-1 absolute">
                                        <AiOutlineCamera />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-8">
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
                                <div className="bg-[#FFFBF3] px-5 py-14 rounded-lg">
                                    <h2 className="text-lg font-semibold">Product Details</h2>
                                    <hr className="my-4 border-[0.5px] border-[#D9D9D9]" />
                                    <p className="text-sm font-medium text-[#595959]">Silver Matellic Name Badge</p>
                                    <div className="mt-8">
                                        <label htmlFor="" className="font-medium mb-1 block">Name</label>
                                        <input type="text" className="w-full outline-none py-3 px-4 border-[1px] border-[#EAEAEA] bg-[#F9FAFB] rounded-lg" />
                                    </div>
                                    <div className="mt-5 pb-7">
                                        <label htmlFor="" className="font-medium mb-1 block">Job Title</label>
                                        <input type="text" className="w-full outline-none py-3 px-4 border-[1px] border-[#EAEAEA] bg-[#F9FAFB] rounded-lg" />
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
                                <div className="mt-5 flex gap-10 justify-end items-center">
                                    <button className="text-[#055F5B] py-3 px-14 rounded-lg bg-[#055F5B1F] text-sm">Back</button>
                                    <button className="text-[#FFFFFF] py-3 px-14 rounded-lg bg-[#055F5B] text-sm" onClick={() => {
                                        setScreen("itemsDetails")
                                        toast.success("Your request for the change have been submit to the admin. Thank You!")
                                    }}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default V1NewOrders