
import { RxPencil2 } from "react-icons/rx"
import { Link } from "react-router-dom"

const V2Settings = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-20 px-8 mt-8">
                <div className="">
                    <h2 className="text-xl font-semibold mb-10">Comapnay name here</h2>
                    <div className="form-group mb-14 flex flex-col">
                        <div className="bg-[#F9FAFB] border-[#EAEAEA] border-2 focus:outline-none focus:border-[#9f9f9f] flex items-center justify-between rounded-lg py-1 px-5">
                            <input type="text" className="input placeholder:text-[#9E9E9E] bg-transparent focus:outline-none flex-1 pl-0" placeholder="Enter brand’s font" />
                            <RxPencil2 className="text-2xl" />
                        </div>
                    </div>
                    <div className="form-group mb-5 flex flex-col">
                        <div className="bg-[#F9FAFB] border-[#EAEAEA] border-2 focus:outline-none focus:border-[#9f9f9f] flex items-center justify-between rounded-lg py-4 px-5">
                            <span>Choose colors</span>
                        </div>
                    </div>
                    <div className="form-group mb-12 flex gap-5">
                        <div className="w-12 h-12 rounded-full bg-[#0019FF]"></div>
                        <div className="w-12 h-12 rounded-full bg-[#17A700]"></div>
                        <div className="w-12 h-12 rounded-full bg-[#FFC700]"></div>
                        <div className="w-12 h-12 rounded-full bg-[#FF6B00]"></div>
                    </div>
                    <div className="form-group mb-20 flex flex-col">
                        <label htmlFor="color" className="bg-[#F9FAFB] border-[#000000] border-2 border-dashed focus:outline-none focus:border-[#9f9f9f] flex items-center justify-between rounded-lg py-4 px-5">
                            <span>+ Add colors for other elements</span>
                            <input type="color" name="" id="color" />
                        </label>
                    </div>
                    <div className="form-group mb-16 flex items-center justify-center">
                        <button className="btn bg-[#055F5B] text-white px-16 capitalize">Update</button>
                    </div>
                    <div className="form-group flex items-center justify-center">
                        <p className="text-sm">Note: Your selected theme and colors will be use for both supplier and corporate portal.</p>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-xl font-semibold mb-10">Switch Account</h2>
                    <div className="form-group p-10 bg-[#F6F6F6] rounded-xl">
                        <Link to="" className="block underline mb-6">Switch Account to Supplier User</Link>
                        <Link to="" className="block underline">Switch Account to Promo site</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default V2Settings