
import logo from "../../assets/v1/login-logo.png"
import loginImg from "../../assets/v1/login-img.png"
import background from "../../assets/v1/login-background.png"

import { AiOutlineUser } from "react-icons/ai"
import { IoCheckmarkCircle } from "react-icons/io5"
import { GrLocation } from "react-icons/gr"
import { CiLock } from "react-icons/ci"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { HiOutlineEnvelope } from "react-icons/hi2"
import { BsTelephone } from "react-icons/bs"


const V2Login = () => {

    const [formData, setFormData] = useState({ username: "", location: "", password: "", domainName: "", email: "", phoneNumber: "", department: "" })
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const [screen, setScreen] = useState(null)


    return (
        <>
            {
                screen === null && <>
                    <section className="login-section">
                        <div className="wrapper flex w-full h-screen">
                            <div className="w-2/5 flex flex-col justify-between items-center p-7" style={{ background: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                <div></div>
                                <div className="flex flex-col items-center">
                                    <img src={logo} className="max-w-[150px] w-full" alt="" />
                                    <h3 className="text-white text-xl mt-5 mb-10">Get Started With Sondar</h3>
                                    <img src={loginImg} className="max-w-xs" alt="" />
                                </div>
                                <div className="flex gap-3 items-start w-full text-white">
                                    <Link to="/">Contact us</Link>
                                    <span className="mx-2">|</span>
                                    <Link to="/">Support</Link>
                                </div>
                            </div>
                            <div className="w-3/5 flex flex-col justify-center items-center p-7">
                                <h1 className="text-5xl text-center font-bold">Sign In</h1>
                                <form onSubmit={handleSubmit} className="w-full max-w-lg">
                                    <div className="form-group mt-12 mb-10 w-full">
                                        <div className="flex gap-3 items-center mb-2">
                                            <AiOutlineUser /> <label htmlFor="" className="font-semibold">Username</label>
                                        </div>
                                        <div className="flex gap-3 justify-between items-center bg-[#F9FAFB] border-[#EAEAEA] border-2 rounded-md pr-3">
                                            <input type="text" placeholder="Ali Haider Murtaza" className="input input-ghost w-full max-w-xl bg-transparent outline-none border-none focus:outline-none focus:border-none" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                                            {
                                                formData?.username !== "" && <IoCheckmarkCircle className="text-3xl text-[#20C904]" />
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group my-10 w-full">
                                        <div className="flex gap-3 items-center mb-2">
                                            <GrLocation /> <label htmlFor="" className="font-semibold">Location</label>
                                        </div>
                                        <div className="flex gap-3 justify-between items-center bg-[#F9FAFB] border-[#EAEAEA] border-2 rounded-md pr-3">
                                            <input type="text" placeholder="13th Street. 47 W 13th St, New York, NY 10011, USA." className="input input-ghost w-full max-w-xl bg-transparent outline-none border-none focus:outline-none focus:border-none" onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
                                            {
                                                formData?.location !== "" && <IoCheckmarkCircle className="text-3xl text-[#20C904]" />
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group my-10 w-full">
                                        <div className="flex gap-3 items-center mb-2">
                                            <CiLock /> <label htmlFor="" className="font-semibold">Password</label>
                                        </div>
                                        <div className="flex gap-3 justify-between items-center bg-[#F9FAFB] border-[#EAEAEA] border-2 rounded-md pr-3">
                                            <input type={showPassword ? "text" : "password"} placeholder="&#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;" className="input input-ghost w-full max-w-xl bg-transparent outline-none border-none focus:outline-none focus:border-none" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                            {showPassword ? <AiOutlineEye className="text-3xl text-[#292D32] cursor-pointer" onClick={() => setShowPassword(false)} /> : <AiOutlineEyeInvisible className="text-3xl text-[#292D32] cursor-pointer" onClick={() => setShowPassword(true)} />}
                                        </div>
                                        <div className="mt-4 text-right">
                                            <Link to="">Forget Password?</Link>
                                        </div>
                                    </div>
                                    <div className="form-group mt-12 mb-5 w-full text-center">
                                        <label htmlFor="companyDomain" className="btn btn-lg bg-[#055F5B] text-white px-36">Sign In</label>
                                    </div>
                                    <div className="form-group w-full text-center">
                                        <p>Don’t have an account? <Link to="" className="text-[#055F5B] underline">Sign Up</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    <input type="checkbox" id="companyDomain" className="modal-toggle" />
                    <label htmlFor="companyDomain" className="modal cursor-pointer">
                        <label className="modal-box relative block" htmlFor="">
                            <label htmlFor="companyDomain" className="absolute top-2 right-2 rounded-full flex justify-center items-center w-10 h-10 shadow cursor-pointer">
                                <FaTimes />
                            </label>
                            <h3 className="text-xl font-bold mt-4 mb-7 text-center">Enter your company  Domain</h3>
                            <div className="flex flex-col justify-start w-full my-16">
                                <label htmlFor="" className="text-[#055F5B] text-medium text-md ">Enter domain here</label>
                                <div className="flex gap-3 justify-between items-center bg-[#F9FAFB] border-[#EAEAEA] border-2 rounded-md pr-3">
                                    <input type="text" placeholder="tmobile.trylexicon.com" className="input input-ghost w-full max-w-xl bg-transparent outline-none border-none focus:outline-none focus:border-none" onChange={(e) => setFormData({ ...formData, domainName: e.target.value })} />
                                    {
                                        formData?.domainName !== "" && <IoCheckmarkCircle className="text-3xl text-[#20C904]" />
                                    }
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-4">
                                <button className="bg-[#055F5B] text-[#FFFFFF] capitalize py-3 px-6 rounded-lg cursor-pointer hover:bg-[#101a1a] font-semibold text-sm" onClick={() => setScreen("welcome")}>Welcome to lexicon Promo</button>
                            </div>
                        </label>
                    </label>
                </>
            }
            {
                screen === "welcome" && <>
                    <div className="wrapper flex w-full h-screen">
                        <div className="w-2/5 flex flex-col justify-between items-center p-7" style={{ background: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div></div>
                            <div className="flex flex-col items-center">
                                <img src={logo} className="max-w-[150px] w-full" alt="" />
                                <h3 className="text-white text-xl mt-5 mb-10">Get Started With Sondar</h3>
                                <img src={loginImg} className="max-w-xs" alt="" />
                            </div>
                            <div className="flex gap-3 items-start w-full text-white">
                                <Link to="/">Contact us</Link>
                                <span className="mx-2">|</span>
                                <Link to="/">Support</Link>
                            </div>
                        </div>
                        <div className="w-3/5 flex flex-col justify-center items-center p-7">
                            <h1 className="text-5xl text-center font-bold">Welcome</h1>
                            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                                <div className="form-group mt-12 mb-10 w-full">
                                    <label htmlFor="profilePic" className="flex items-center justify-center w-32 h-32 rounded-full cursor-pointer bg-[#EAEAEA] border-dashed border-[#055F5B] border-[1px]">
                                        <span className="text-[#27775F] text-sm">Upload logo</span>
                                        <input type="file" id="profilePic" hidden />
                                    </label>
                                </div>
                                <div className="form-group mt-5 mb-5 w-full">
                                    <div className="flex gap-3 items-center mb-2">
                                        <AiOutlineUser /> <label htmlFor="" className="font-semibold">Username</label>
                                    </div>
                                    <div className="flex gap-3 justify-between items-center bg-[#F9FAFB] border-[#EAEAEA] border-2 rounded-md pr-3">
                                        <input type="text" placeholder="Ali Haider Murtaza" className="input input-ghost w-full max-w-xl bg-transparent outline-none border-none focus:outline-none focus:border-none" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                                        {
                                            formData?.username !== "" && <IoCheckmarkCircle className="text-3xl text-[#20C904]" />
                                        }
                                    </div>
                                </div>
                                <div className="form-group mt-5 mb-5 w-full">
                                    <div className="flex gap-3 items-center mb-2">
                                        <HiOutlineEnvelope /> <label htmlFor="" className="font-semibold">Email</label>
                                    </div>
                                    <div className="flex gap-3 justify-between items-center bg-[#F9FAFB] border-[#EAEAEA] border-2 rounded-md pr-3">
                                        <input type="text" placeholder="Ali Haider Murtaza" className="input input-ghost w-full max-w-xl bg-transparent outline-none border-none focus:outline-none focus:border-none" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                        {
                                            formData?.email !== "" && <IoCheckmarkCircle className="text-3xl text-[#20C904]" />
                                        }
                                    </div>
                                </div>
                                <div className="form-group mt-5 mb-5 w-full">
                                    <div className="flex gap-3 items-center mb-2">
                                        <BsTelephone /> <label htmlFor="" className="font-semibold">Phone Number</label>
                                    </div>
                                    <div className="flex gap-3 justify-between items-center bg-[#F9FAFB] border-[#EAEAEA] border-2 rounded-md pr-3">
                                        <input type="text" placeholder="Ali Haider Murtaza" className="input input-ghost w-full max-w-xl bg-transparent outline-none border-none focus:outline-none focus:border-none" onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} />
                                        {
                                            formData?.phoneNumber !== "" && <IoCheckmarkCircle className="text-3xl text-[#20C904]" />
                                        }
                                    </div>
                                </div>
                                <div className="form-group my-5 w-full">
                                    <div className="flex gap-3 items-center mb-2">
                                        <GrLocation /> <label htmlFor="" className="font-semibold">Department</label>
                                    </div>
                                    <div className="flex gap-3 justify-between items-center bg-[#F9FAFB] border-[#EAEAEA] border-2 rounded-md pr-3">
                                        <input type="text" placeholder="13th Street. 47 W 13th St, New York, NY 10011, USA." className="input input-ghost w-full max-w-xl bg-transparent outline-none border-none focus:outline-none focus:border-none" onChange={(e) => setFormData({ ...formData, department: e.target.value })} />
                                        {
                                            formData?.department !== "" && <IoCheckmarkCircle className="text-3xl text-[#20C904]" />
                                        }
                                    </div>
                                </div>
                                <div className="form-group mt-5 mb-5 w-full text-center">
                                    <Link to="/v2/dashboard/settings" className="btn btn-lg bg-[#055F5B] text-white px-36 capitalize">Get started</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default V2Login