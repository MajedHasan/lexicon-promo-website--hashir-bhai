import { FaTimes, FaSearchPlus } from "react-icons/fa"
import { BsFolder, BsChevronDown, BsChevronLeft } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import { AiOutlineStar } from "react-icons/ai"
import { RiFileDownloadLine } from "react-icons/ri"

import catalog from "../../assets/v1/dashboard/catalog.png"

import styles from "./V1Collaterals.module.css"
import { useState } from "react"


const V1Collaterals = () => {

    const [showMoreDetails, setShowMoreDetails] = useState(null)
    const [files, setFiles] = useState([
        {
            _id: 1,
            name: "Pens",
            date: "12 jan , 2022",
            modifiedDate: "02 / 2 / 2022 , 12:40",
            modifiedBy: "alam shahid"
        },
        {
            _id: 2,
            name: "Pens",
            date: "12 jan , 2022",
            modifiedDate: "02 / 2 / 2022 , 12:40",
            modifiedBy: "alam shahid"
        },
        {
            _id: 3,
            name: "Pens",
            date: "12 jan , 2022",
            modifiedDate: "02 / 2 / 2022 , 12:40",
            modifiedBy: "alam shahid"
        },
        {
            _id: 4,
            name: "Pens",
            date: "12 jan , 2022",
            modifiedDate: "02 / 2 / 2022 , 12:40",
            modifiedBy: "alam shahid"
        }
    ])

    const [screen, setScreen] = useState(null)

    return (
        <>
            {
                screen === null && <div className="flex gap-8 mt-4">
                    <div className="w-5/12 shadow-lg rounded-lg p-4">
                        <h2 className="text-center font-bold text-2xl mb-4">Suggested from your activity</h2>
                        <div className="grid grid-cols-2 gap-8 max-h-[580px] overflow-y-auto pb-3">
                            <div className="hover:shadow-lg transition-all rounded-lg p-3 relative flex flex-col items-center bg-[#FFFBF3] gap-3">
                                <button className="p-2 rounded-full bg-white absolute top-2 right-2">
                                    <FaTimes className="text-xl text-[#055F5B]" />
                                </button>
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mt-2">
                                    <BsFolder className="text-4xl text-[#055F5B]" />
                                </div>
                                <h3 className="text-md">Business Cards</h3>
                            </div>
                            <div className="hover:shadow-lg transition-all rounded-lg p-3 relative flex flex-col items-center bg-[#FFFBF3] gap-3">
                                <button className="p-2 rounded-full bg-white absolute top-2 right-2">
                                    <FaTimes className="text-xl text-[#055F5B]" />
                                </button>
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mt-2">
                                    <BsFolder className="text-4xl text-[#055F5B]" />
                                </div>
                                <h3 className="text-md">Print Products</h3>
                            </div>
                            <div className="hover:shadow-lg transition-all rounded-lg p-3 relative flex flex-col items-center bg-[#FFFBF3] gap-3">
                                <button className="p-2 rounded-full bg-white absolute top-2 right-2">
                                    <FaTimes className="text-xl text-[#055F5B]" />
                                </button>
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mt-2">
                                    <BsFolder className="text-4xl text-[#055F5B]" />
                                </div>
                                <h3 className="text-md">Pens</h3>
                            </div>
                            <div className="hover:shadow-lg transition-all rounded-lg p-3 relative flex flex-col items-center bg-[#FFFBF3] gap-3">
                                <button className="p-2 rounded-full bg-white absolute top-2 right-2">
                                    <FaTimes className="text-xl text-[#055F5B]" />
                                </button>
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mt-2">
                                    <BsFolder className="text-4xl text-[#055F5B]" />
                                </div>
                                <h3 className="text-md">Name Badges</h3>
                            </div>
                            <div className="hover:shadow-lg transition-all rounded-lg p-3 relative flex flex-col items-center bg-[#FFFBF3] gap-3">
                                <button className="p-2 rounded-full bg-white absolute top-2 right-2">
                                    <FaTimes className="text-xl text-[#055F5B]" />
                                </button>
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mt-2">
                                    <BsFolder className="text-4xl text-[#055F5B]" />
                                </div>
                                <h3 className="text-md">Bags</h3>
                            </div>
                            <div className="hover:shadow-lg transition-all rounded-lg p-3 relative flex flex-col items-center bg-[#FFFBF3] gap-3">
                                <button className="p-2 rounded-full bg-white absolute top-2 right-2">
                                    <FaTimes className="text-xl text-[#055F5B]" />
                                </button>
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mt-2">
                                    <BsFolder className="text-4xl text-[#055F5B]" />
                                </div>
                                <h3 className="text-md">Posts it</h3>
                            </div>
                            <div className="hover:shadow-lg transition-all rounded-lg p-3 relative flex flex-col items-center bg-[#FFFBF3] gap-3">
                                <button className="p-2 rounded-full bg-white absolute top-2 right-2">
                                    <FaTimes className="text-xl text-[#055F5B]" />
                                </button>
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mt-2">
                                    <BsFolder className="text-4xl text-[#055F5B]" />
                                </div>
                                <h3 className="text-md">Printed Papers</h3>
                            </div>
                            <div className="hover:shadow-lg transition-all rounded-lg p-3 relative flex flex-col items-center bg-[#FFFBF3] gap-3">
                                <button className="p-2 rounded-full bg-white absolute top-2 right-2">
                                    <FaTimes className="text-xl text-[#055F5B]" />
                                </button>
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mt-2">
                                    <BsFolder className="text-4xl text-[#055F5B]" />
                                </div>
                                <h3 className="text-md">Brouchers</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-7/12">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold">All Files</h2>
                            <div className="rounded-full w-64 py-3 px-5 flex gap-2 bg-[#055f5b0a]">
                                <FiSearch className="text-xl" />
                                <input type="text" className="bg-transparent outline-none text-sm" placeholder="Search..." />
                            </div>
                        </div>
                        <div className="bg-[#FFFBF3] p-3 rounded-lg">
                            <table className="w-full">
                                <thead>
                                    <th className="text-[#A8A8A8] text-md font-normal border-b-[#5A5A5A] border-b-[1px] pb-2 text-left">Name</th>
                                    <th className="text-[#A8A8A8] text-md font-normal border-b-[#5A5A5A] border-b-[1px] pb-2">
                                        <div className="flex items-end gap-1">
                                            <span>Modified</span>
                                            <BsChevronDown />
                                        </div>
                                    </th>
                                    <th className="text-[#A8A8A8] text-md font-normal border-b-[#5A5A5A] border-b-[1px] pb-2 text-left">Actions</th>
                                </thead>
                                <tbody>
                                    {
                                        files?.map(file => (
                                            <tr className="relative" key={file._id}>
                                                <td className={`pt-5 pb-5 border-b-[1px] border-[#E0E0E0]`} style={{ paddingBottom: showMoreDetails === file._id ? "130px" : "" }}>
                                                    <div className="flex gap-4">
                                                        <div className="p-3 bg-white rounded-full shadow-lg">
                                                            <BsFolder className="text-[#055F5B] text-lg" />
                                                        </div>
                                                        <div className={styles.moreDetails}>
                                                            <h4 className="text-sm font-semibold flex items-center gap-2">{file.name} <AiOutlineStar className="text-lg text-[#FFD37E]" /></h4>
                                                            <div className="flex items-center gap-3">
                                                                <p className="text-xs text-[#7B7B7B]">Added on {file.date}</p>
                                                                <button className="underline text-[#7B7B7B] flex items-end gap-2 text-sm" onClick={() => setShowMoreDetails(showMoreDetails === file._id ? null : file._id)}>Details <BsChevronDown /></button>
                                                                {
                                                                    showMoreDetails === file._id && <div>
                                                                        <div className="flex flex-col gap-2">
                                                                            <h3 className="text-sm font-semibold">Title of change</h3>
                                                                            <p className="text-sm text-[#7B7B7B]">02 / 12 / 2022 , 12:30 PM</p>
                                                                        </div>
                                                                        <div className="flex flex-col gap-2">
                                                                            <h3 className="text-sm font-semibold">Description</h3>
                                                                            <p className="text-sm text-[#7B7B7B]">Lorem ipsum is placeholder text.</p>
                                                                        </div>
                                                                        <div className="flex flex-col gap-2">
                                                                            <h3 className="text-sm font-semibold">Attachments</h3>
                                                                            <p className="text-sm text-[#7B7B7B]">Image.jpg 450KB</p>
                                                                        </div>
                                                                        <div className="flex flex-col gap-2">
                                                                            <button className="py-2 px-8 rounded-lg bg-[#FFD584] text-sm">Download</button>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="pt-5 pb-5 border-b-[1px] border-[#E0E0E0" style={{ paddingBottom: showMoreDetails === file._id ? "130px" : "" }}>
                                                    <div className="flex flex-col gap-1 justify-center">
                                                        <h3 className="text-sm font-normal text-[#7B7B7B]">{file.modifiedDate}</h3>
                                                        <h4 className="text-sm font-normal text-[#787878]">by {file.modifiedBy}</h4>
                                                    </div>
                                                </td>
                                                <td className="pt-5 pb-5  border-b-[1px] border-[#E0E0E0" style={{ paddingBottom: showMoreDetails === file._id ? "130px" : "" }}>
                                                    <div className={styles.moreItem}>
                                                        <button className="">
                                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.9991 12.4267C17.5858 12.4267 18.8791 11.1334 18.8791 9.54675C18.8791 7.96008 17.5858 6.66675 15.9991 6.66675C14.4125 6.66675 13.1191 7.96008 13.1191 9.54675C13.1191 11.1334 14.4125 12.4267 15.9991 12.4267Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M9.05383 25.3335C10.6405 25.3335 11.9338 24.0402 11.9338 22.4535C11.9338 20.8668 10.6405 19.5735 9.05383 19.5735C7.46716 19.5735 6.17383 20.8668 6.17383 22.4535C6.17383 24.0402 7.45383 25.3335 9.05383 25.3335Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M22.9464 25.3335C24.5331 25.3335 25.8264 24.0402 25.8264 22.4535C25.8264 20.8668 24.5331 19.5735 22.9464 19.5735C21.3597 19.5735 20.0664 20.8668 20.0664 22.4535C20.0664 24.0402 21.3597 25.3335 22.9464 25.3335Z" stroke="#055F5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                        <div>
                                                            <div className="flex items-center gap-3 cursor-pointer">
                                                                <span className="bg-[#FFF7E6] p-3 rounded-full">
                                                                    <RiFileDownloadLine className="text-xl" />
                                                                </span>
                                                                <span>Download</span>
                                                            </div>
                                                            <hr className="w-[70%] mx-auto my-3" />
                                                            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setScreen("full view")}>
                                                                <span className="bg-[#FFF7E6] p-3 rounded-full">
                                                                    <BsFolder className="text-xl" />
                                                                </span>
                                                                <span>View in Folder</span>
                                                            </div>
                                                        </div>
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
            }
            {
                screen === "full view" && <div>
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
                                    <h3 className="text-md font-semibold">Presentation Folder</h3>
                                    <h3 className="text-md font-semibold">Size</h3>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-normal text-[#787878] max-w-[450px]">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishingrfcddo ell industries for previewing layouts.</p>
                                    <p className="text-sm font-normal text-[#787878]">02.25 MB</p>
                                </div>
                            </div>
                            <div className="bg-[#FFFBF3] p-6 my-6">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-md font-semibold">Last Modified</h3>
                                    <p className="text-sm text-[#787878]">02 / 12 / 2022 , 12:30 PM by Alam Anwar</p>
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
                                    <button className="text-[#FFFFFF] py-3 px-14 rounded-lg bg-[#055F5B] text-sm">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default V1Collaterals