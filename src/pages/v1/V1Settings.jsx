
import { RxPencil2 } from "react-icons/rx"
import { Link } from "react-router-dom"

const V1Settings = () => {
    return (
        <div>
            <h2 className="text-3xl text-center font-bold mt-8 mb-6">My Profile</h2>
            <div className="flex gap-20 px-8">
                <div className="flex-1">
                    <div className="form-group mb-8 flex flex-col">
                        <label htmlFor="" className="text-lg font-semibold mb-1">Account</label>
                        <div className="bg-[#F9FAFB] border-[#EAEAEA] border-2 focus:outline-none focus:border-[#9f9f9f] flex items-center justify-between rounded-lg py-1 px-5">
                            <input type="text" className="input placeholder:text-[#9E9E9E] bg-transparent focus:outline-none flex-1 pl-0" placeholder="Ali Haider Murtaza" />
                            <RxPencil2 className="text-2xl" />
                        </div>
                        <Link to="" className="text-right underline text-xs mt-1">Not You?</Link>
                    </div>
                    <div className="form-group mb-8 flex flex-col">
                        <label htmlFor="" className="text-lg font-semibold mb-1">Country</label>
                        <div className="bg-[#F9FAFB] border-[#EAEAEA] border-2 focus:outline-none focus:border-[#9f9f9f] flex items-center justify-between rounded-lg py-1 px-5">
                            <select name="" id="" className="bg-transparent outline-none py-3 w-full">
                                <option value="">United States</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group mb-8 flex flex-col">
                        <label htmlFor="" className="text-lg font-semibold mb-1">State</label>
                        <div className="bg-[#F9FAFB] border-[#EAEAEA] border-2 focus:outline-none focus:border-[#9f9f9f] flex items-center justify-between rounded-lg py-1 px-5">
                            <select name="" id="" className="bg-transparent outline-none py-3 w-full">
                                <option value="">Alabamma</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group mb-8 flex flex-col">
                        <label htmlFor="" className="text-lg font-semibold mb-1">Postal Code</label>
                        <div className="bg-[#F9FAFB] border-[#EAEAEA] border-2 focus:outline-none focus:border-[#9f9f9f] flex items-center justify-between rounded-lg py-1 px-5">
                            <input type="text" className="input placeholder:text-[#9E9E9E] bg-transparent focus:outline-none flex-1 pl-0" placeholder="2233555" />
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="form-group mb-8 flex flex-col">
                        <label htmlFor="" className="text-lg font-semibold mb-1">Street Address</label>
                        <div className="bg-[#F9FAFB] border-[#EAEAEA] border-2 focus:outline-none focus:border-[#9f9f9f] flex items-center justify-between rounded-lg py-1 px-5">
                            <input type="text" className="input placeholder:text-[#9E9E9E] bg-transparent focus:outline-none flex-1 pl-0" placeholder="Bhakar Road Insar Colony  , street 2 " />
                        </div>
                    </div>
                    <div className="form-group mb-8 mt-[52px] flex flex-col">
                        <label htmlFor="" className="text-lg font-semibold mb-1">City</label>
                        <div className="bg-[#F9FAFB] border-[#EAEAEA] border-2 focus:outline-none focus:border-[#9f9f9f] flex items-center justify-between rounded-lg py-1 px-5">
                            <input type="text" className="input placeholder:text-[#9E9E9E] bg-transparent focus:outline-none flex-1 pl-0" placeholder="New York" />
                        </div>
                    </div>
                    <div className="form-group mb-8 mt-8 flex flex-col">
                        <label htmlFor="" className="text-lg font-semibold mb-1">Delivery Address</label>
                        <div className="bg-[#F9FAFB] border-[#EAEAEA] border-2 focus:outline-none focus:border-[#9f9f9f] flex items-center justify-between rounded-lg h-44">
                            <textarea className="textarea input placeholder:text-[#9E9E9E] bg-transparent focus:outline-none flex-1 p-4 h-full" placeholder="Write Address here..."></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 items-center justify-center mt-6">
                <button className="btn capitalize w-52 font-bold text-[#055F5B] hover:text-white bg-[#E3E3E3] border-[#E3E3E3] text-lg">Cancel</button>
                <button className="btn capitalize w-52 font-bold bg-[#055F5B] text-white text-lg border-[#055F5B]">Update</button>
            </div>
        </div>
    )
}

export default V1Settings