
import logo from "../../assets/v1/login-logo.png"
import loginImg from "../../assets/v1/login-img.png"
import background from "../../assets/v1/login-background.png"

import { CiLock } from "react-icons/ci"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useState } from "react"


const V1ChangePassword = () => {

    const [formData, setFormData] = useState({ password: "", confirmPassword: "" })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
                    <h1 className="text-5xl text-center font-bold mb-28">Change Password</h1>
                    <form onSubmit={handleSubmit} className="w-full max-w-lg">
                        <div className="form-group my-10 w-full">
                            <div className="flex gap-3 items-center mb-2">
                                <CiLock /> <label htmlFor="" className="font-semibold">New Password</label>
                            </div>
                            <div className="flex gap-3 justify-between items-center bg-[#F9FAFB] border-[#EAEAEA] border-2 rounded-md pr-3">
                                <input type={showPassword ? "text" : "password"} placeholder="&#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;" className="input input-ghost w-full max-w-xl bg-transparent outline-none border-none focus:outline-none focus:border-none" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                {showPassword ? <AiOutlineEye className="text-3xl text-[#292D32] cursor-pointer" onClick={() => setShowPassword(false)} /> : <AiOutlineEyeInvisible className="text-3xl text-[#292D32] cursor-pointer" onClick={() => setShowPassword(true)} />}
                            </div>
                        </div>
                        <div className="form-group my-10 w-full">
                            <div className="flex gap-3 items-center mb-2">
                                <CiLock /> <label htmlFor="" className="font-semibold">Confirm Password</label>
                            </div>
                            <div className="flex gap-3 justify-between items-center bg-[#F9FAFB] border-[#EAEAEA] border-2 rounded-md pr-3">
                                <input type={showConfirmPassword ? "text" : "password"} placeholder="&#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;" className="input input-ghost w-full max-w-xl bg-transparent outline-none border-none focus:outline-none focus:border-none" onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                                {showConfirmPassword ? <AiOutlineEye className="text-3xl text-[#292D32] cursor-pointer" onClick={() => setShowConfirmPassword(false)} /> : <AiOutlineEyeInvisible className="text-3xl text-[#292D32] cursor-pointer" onClick={() => setShowConfirmPassword(true)} />}
                            </div>
                        </div>
                        <div className="form-group mt-28 mb-5 w-full text-center">
                            <button className="btn btn-lg bg-[#055F5B] text-white px-36 capitalize">Done</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default V1ChangePassword