import { useState } from "react"

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
import { BiShareAlt } from "react-icons/bi"
import { FaRegComments, FaSearchPlus, FaTimes } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from "react-icons/ai"

import { BsFillCheckCircleFill } from "react-icons/bs"
import { RxPencil2 } from "react-icons/rx"
import { RiErrorWarningLine } from "react-icons/ri"


const V3Projects = () => {

    const [screen, setScreen] = useState(null)
    const [commentName, setCommentName] = useState("")
    const [searchText, setSearchText] = useState("")
    const [selectPriceRange, setSelectPriceRange] = useState(500)

    return (
        <>
            {
                screen === null && <>
                    <div className="my-4">
                        <div className="mb-5 flex gap-10">
                            <div className="flex-1">
                                <h2 className="text-xl font-bold mt-8 mb-4">Enter project name here</h2>
                                <input type="text" className="w-full rounded-xl shadow-xl p-4 outline-none border-[1px] border-[#F1F1F1]" placeholder="Enter Project Name here" />
                            </div>
                            <div className="flex-1 text-right">
                                {
                                    searchText < 1 && <button className="bg-[#055F5B] text-white py-3 px-12 rounded-lg" onClick={() => setScreen("create project")}>Create New Project</button>
                                }
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-5 items-center">
                            <div>
                                <h2 className="text-xl font-bold">Add products</h2>
                            </div>
                            <div className="flex items-center gap-4 bg-[#0000000A] p-4 rounded-full col-span-2">
                                <FiSearch className="text-xl" />
                                <input type="text" className="text-sm h-full w-full outline-none bg-transparent" placeholder="Pen" onChange={(e) => setSearchText(e.target.value)} />
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
                    <div className={`min-h-[400px] ${searchText < 1 ? "h-full" : "h-[400px]"} max-h-[485px] overflow-y-scroll pb-4`}>
                        {
                            searchText < 1 ? <div className="grid grid-cols-4 gap-7">
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
                            </div> : <div className="flex justify-center items-center flex-col gap-16 h-full">
                                <p className="text-sm">Sorry there is not an item in the catalog through the Promo Standards API</p>
                                <button className="bg-[#055F5B] text-white py-3 px-12 rounded-lg">Add Product</button>
                            </div>
                        }
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
            {
                screen === "create project" && <div>
                    <div className="mb-5 flex gap-10 mt-8">
                        <div className="flex-1">
                            <h2 className="text-xl font-bold mb-4">Enter project name here</h2>
                            <input type="text" className="w-full rounded-xl shadow-xl p-4 outline-none border-[1px] border-[#F1F1F1]" placeholder="Enter Project Name here" />
                        </div>
                        <div className="flex-1 flex gap-6 justify-end">
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
                                    <h3 className="text-2xl font-semibold">Enter project title</h3>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-md font-normal text-[#787878]">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishingrfcddo ell industries for previewing layouts.</p>
                                </div>
                            </div>
                            <div className="bg-[#FFFBF3] p-6 my-6">
                                <h3 className="text-2xl font-semibold mb-4">Description</h3>
                                <p className="text-md">
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries. We have change the description, kindly update it into the system.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries. We have change the description, kindly update it into the system.
                                </p>
                            </div>
                            <div className="my-3 flex items-center gap-10">
                                <h3 className="text-lg font-semibold mb-2">Price</h3>
                                <div className="bg-[#FFD584] rounded-lg p-3">
                                    <div className="flex gap-3 items-end">
                                        <h4 className="text-sm text-white">Enter price</h4>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between text-white text-sm">
                                                <span>Min-10$</span>
                                                <span>Max-10k$</span>
                                            </div>
                                            <input type="range" min="10" max="10000" value={selectPriceRange} className="range range-xs range-[#055F5B] w-[250px]" onChange={(e) => setSelectPriceRange(e.target.value)} />
                                        </div>
                                    </div>
                                    <h4 className="mt-2 text-md font-semibold text-[#055F5B]">{selectPriceRange}$</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-center mt-16">
                        <button className="bg-[#055F5B] py-3 px-12 rounded-lg text-white">Save</button>
                    </div>
                </div>
            }
        </>
    )
}

export default V3Projects