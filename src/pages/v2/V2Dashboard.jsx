import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { CgFolder } from "react-icons/cg"

const V2Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <div className="rounded-xl shadow-lg p-5 flex gap-5 justify-between">
                        <input type="text" placeholder="Enter Company Name here" className="flex-1 outline-none text-[#8E8E8E] text-sm" />
                        <div className="h-6 w-[1px] bg-[#D2D2D2]"></div>
                        <input type="text" placeholder="Enter Subdomain here" className="flex-1 outline-none text-[#8E8E8E] text-sm" />
                    </div>
                    <div className="bg-[#FFFFFF] p-5 rounded-lg mt-5">
                        <h3 className="text-lg font-bold">Contacts Info</h3>
                        <hr className="my-3" />
                        <table className="w-full">
                            <thead>
                                <th className="font-normal text-md text-[#A8A8A8] hover:text-[#055F5B] border-b-[1px] border-b-[#D6D6D6] hover:border-b-[7px] hover:border-b-[#055F5B] py-2">Main</th>
                                <th className="font-normal text-md text-[#A8A8A8] hover:text-[#055F5B] border-b-[1px] border-b-[#D6D6D6] hover:border-b-[7px] hover:border-b-[#055F5B]">Accounts payable</th>
                                <th className="font-normal text-md text-[#A8A8A8] hover:text-[#055F5B] border-b-[1px] border-b-[#D6D6D6] hover:border-b-[7px] hover:border-b-[#055F5B]">Branding team</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center py-3 border-b-[1px] border-b-[#D6D6D6]">Hanzla ahmed</td>
                                    <td className="text-center py-3 border-b-[1px] border-b-[#D6D6D6]">xyz@gmail.com</td>
                                    <td className="text-center py-3 border-b-[1px] border-b-[#D6D6D6]">986757456464748</td>
                                </tr>
                                <tr>
                                    <td className="text-center py-3 border-b-[1px] border-b-[#D6D6D6]">Hanzla ahmed</td>
                                    <td className="text-center py-3 border-b-[1px] border-b-[#D6D6D6]">xyz@gmail.com</td>
                                    <td className="text-center py-3 border-b-[1px] border-b-[#D6D6D6]">986757456464748</td>
                                </tr>
                                <tr>
                                    <td className="text-center py-3 border-b-[1px] border-b-[#D6D6D6]">Add name</td>
                                    <td className="text-center py-3 border-b-[1px] border-b-[#D6D6D6]">Add Email</td>
                                    <td className="text-center py-3 border-b-[1px] border-b-[#D6D6D6]">Add phone number</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="rounded-lg border-[1px] border-dashed flex flex-col items-center gap-4 bg-[#FFF7E6] p-5 border-[#055F5B] justify-center">
                    <CgFolder className="text-[#055F5B] text-8xl font-normal" />
                    <h4 className="text-[#8D8D8D] mb-10">Drang doucment here or</h4>
                    <label htmlFor="browse" className="bg-[#FFD584] rounded-lg py-4 px-20 cursor-pointer">
                        Browse
                    </label>
                    <input type="file" id="browse" hidden />
                </div>
            </div>
            <div className="bg-[#FFFBF3] p-5 rounded-lg mt-5">
                <h3 className="text-lg font-bold">Orders</h3>
                <hr className="my-3 border-[#5A5A5A]" />
                <div className="overflow-y-auto max-h-[195px]">
                    <table className="w-full">
                        <thead>
                            <th className="font-medium text-left text-md py-2">Order Name</th>
                            <th className="font-medium text-center text-md py-2">Quantity</th>
                            <th className="font-medium text-center text-md py-2">Status</th>
                            <th className="font-medium text-center text-md py-2">Address</th>
                            <th className="font-medium text-right text-md py-2">Track order</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-left py-3 border-b-[1px] border-b-[#EBEBEB] text-[#65E062]">Brouchures</td>
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
                                <td className="text-center border-b-[1px] border-b-[#EBEBEB]">
                                    <button className="py-1 px-5 rounded-lg text-sm text-[#00F0FF] bg-[#00F0FF1A]">Shipped</button>
                                </td>
                                <td className="text-center text-[#787878] border-b-[1px] border-b-[#EBEBEB]">Lorem ipsum is placeholder text commonly used in.</td>
                                <td className="text-right text-[#787878] border-b-[1px] border-b-[#EBEBEB]">PX 22497856</td>
                            </tr>
                            <tr>
                                <td className="text-left py-3 border-b-[1px] border-b-[#EBEBEB] text-[#FF8787]">Calender</td>
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
                                <td className="text-center border-b-[1px] border-b-[#EBEBEB]">
                                    <button className="py-1 px-5 rounded-lg text-sm text-[#FF00F5] bg-[#FF00F51A]">Approved</button>
                                </td>
                                <td className="text-center text-[#787878] border-b-[1px] border-b-[#EBEBEB]">Lorem ipsum is placeholder text commonly used in.</td>
                                <td className="text-right text-[#787878] border-b-[1px] border-b-[#EBEBEB]">PX 22497856</td>
                            </tr>
                            <tr>
                                <td className="text-left py-3 border-b-[1px] border-b-[#EBEBEB] text-[#94F7E5]">Business Card</td>
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
                                <td className="text-center border-b-[1px] border-b-[#EBEBEB]">
                                    <button className="py-1 px-5 rounded-lg text-sm text-[#FAFF00] bg-[#FAFF001A]">Pending</button>
                                </td>
                                <td className="text-center text-[#787878] border-b-[1px] border-b-[#EBEBEB]">Lorem ipsum is placeholder text commonly used in.</td>
                                <td className="text-right text-[#787878] border-b-[1px] border-b-[#EBEBEB]">PX 22497856</td>
                            </tr>
                            <tr>
                                <td className="text-left py-3 border-b-[1px] border-b-[#EBEBEB] text-[#65E062]">Tissue Paper</td>
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
                                <td className="text-center border-b-[1px] border-b-[#EBEBEB]">
                                    <button className="py-1 px-5 rounded-lg text-sm text-[#00F0FF] bg-[#00F0FF1A]">Shipped</button>
                                </td>
                                <td className="text-center text-[#787878] border-b-[1px] border-b-[#EBEBEB]">Lorem ipsum is placeholder text commonly used in.</td>
                                <td className="text-right text-[#787878] border-b-[1px] border-b-[#EBEBEB]">PX 22497856</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default V2Dashboard