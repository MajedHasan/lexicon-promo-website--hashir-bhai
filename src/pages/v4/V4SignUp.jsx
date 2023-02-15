import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from "react-router-dom"
import bgImg from "../../assets/v4/bgImg.png"


const V4SignUp = () => {

    const [showPassword, setShowPassword] = useState(true)

    return (
        <div style={{ background: `url("${bgImg}")`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div style={{ background: "rgba(0, 0, 0, 0.4)", minHeight: "100vh" }} className="flex justify-center items-center py-8">
                <form action="" className="w-[500px] rounded-xl bg-[#F6F6F6] h-full p-4">
                    <div className="mb-5">
                        <h2 className="text-center font-bold text-3xl text-[#013264]">Corporate Registration</h2>
                        <p className="text-center max-w-[330px] mx-auto mt-3">Create Corporate profiles and generate business with suppliers.</p>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block text-sm">Industory</label>
                        <div className="border-b-[#013264] border-b-[1.5px] px-3 py-2 rounded-t-xl bg-white">
                            <select name="" id="" className="w-full outline-none py-2 text-sm text-[#B5B5B5]">
                                <option value="">Enter Industory</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="" className="block text-sm">NAICS Code</label>
                        <div className="border-b-[#013264] border-b-[1.5px] px-3 py-2 rounded-t-xl bg-white">
                            <input type="text" className="w-full outline-none py-1 text-[#B5B5B5]" placeholder="Enter NAICS Code " />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="" className="block text-sm">Interest Rate</label>
                        <div className="border-b-[#013264] border-b-[1.5px] px-3 py-2 rounded-t-xl bg-white">
                            <input type="text" className="w-full outline-none py-1 text-[#B5B5B5]" placeholder="i-e 04$ - 9999999$" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block text-sm">Region Served</label>
                        <div className="border-b-[#013264] border-b-[1.5px] px-3 py-2 rounded-t-xl bg-white">
                            <select name="" id="" className="w-full outline-none py-2 text-sm text-[#B5B5B5]">
                                <option value="">Enter City / State / Nation wide or Global</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="" className="block text-sm">Email</label>
                        <div className="border-b-[#013264] border-b-[1.5px] px-3 py-2 rounded-t-xl bg-white">
                            <input type="text" className="w-full outline-none py-1 text-[#B5B5B5]" placeholder="i.e info@gmail.com" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="" className="block text-sm">Password *</label>
                        <div className="border-b-[#013264] border-b-[1.5px] px-3 py-2 rounded-t-xl bg-white flex items-center gap-2">
                            <input type={showPassword ? "password" : "text"} className="w-full outline-none py-1 text-[#B5B5B5] flex-1" placeholder="&#x2022; &#x2022; &#x2022; &#x2022; &#x2022; &#x2022; &#x2022;" />
                            {
                                showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(false)} className="text-2xl cursor-pointer" /> : <AiOutlineEye onClick={() => setShowPassword(true)} className="text-2xl cursor-pointer" />
                            }
                        </div>
                    </div>
                    <div className="mb-5">
                        <button className="w-full py-3 px-4 bg-[#013264] text-white rounded-lg font-semibold text-lg">Submit registration</button>
                    </div>
                    <div className="mb-5 flex justify-center items-center">
                        <p>Already have an account? <Link to="/v4/login" className="text-[#013264] underline">login here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default V4SignUp