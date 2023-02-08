
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


const V1Login = () => {

    const [formData, setFormData] = useState({ username: "", location: "", password: "" })
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
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
                            <button className="btn btn-lg bg-[#055F5B] text-white px-36">Sign In</button>
                        </div>
                        <div className="form-group w-full text-center">
                            <p>Don’t have an account? <Link to="" className="text-[#055F5B] underline">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default V1Login