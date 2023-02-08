
import logo from "../../assets/v1/login-logo.png"
import forgetPasswordImg from "../../assets/v1/forget-password.png"
import background from "../../assets/v1/login-background.png"
import emailSentConfirmImg from "../../assets/v1/email-sent-confirm-img.png"

import { toast } from "react-toastify"

import { IoCheckmarkCircle } from "react-icons/io5"
import { BsArrowRight } from "react-icons/bs"
import { HiOutlineEnvelope } from "react-icons/hi2"
import { Link } from "react-router-dom"
import { useState } from "react"


const V1ForgetPassword = () => {

    const [formData, setFormData] = useState({ email: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section className="login-section">
                <div className="wrapper flex w-full h-screen">
                    <div className="w-2/5 flex flex-col justify-between items-center p-7" style={{ background: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div></div>
                        <div className="flex flex-col items-center">
                            <img src={logo} className="max-w-[150px] w-full" alt="" />
                            <h3 className="text-white text-xl mt-5 mb-10 invisible">Get Started With Sondar</h3>
                            <img src={forgetPasswordImg} className="max-w-md" alt="" />
                        </div>
                        <div className="flex gap-3 items-start w-full text-white">
                            <Link to="/">Contact us</Link>
                            <span className="mx-2">|</span>
                            <Link to="/">Support</Link>
                        </div>
                    </div>
                    <div className="w-3/5 flex flex-col justify-center items-center p-7">
                        <h1 className="text-5xl text-center font-bold">Forget Password</h1>
                        <p className="mt-5 text-[#9F9F9F] text-md">Enter your Email to reser your password</p>
                        <form onSubmit={handleSubmit} className="w-full max-w-lg">
                            <div className="form-group my-10 w-full">
                                <div className="flex gap-3 items-center mb-2">
                                    <HiOutlineEnvelope className="text-3xl" /> <label htmlFor="" className="font-semibold">Email</label>
                                </div>
                                <div className="flex gap-3 justify-between items-center bg-[#F9FAFB] border-[#EAEAEA] border-2 rounded-md pr-3">
                                    <input type="email" placeholder="aqsa.design@gmail.com" className="input input-ghost w-full max-w-xl bg-transparent outline-none border-none focus:outline-none focus:border-none" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                    {
                                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData?.email) && <IoCheckmarkCircle className="text-3xl text-[#20C904]" />
                                    }
                                </div>
                                <div className="mt-4 text-right">
                                    <Link to="" className="text-[#055F5B] underline">Sign in here</Link>
                                </div>
                            </div>
                            <div className="form-group mt-12 mb-5 w-full text-center">
                                <button className="btn btn-lg p-0 bg-transparent border-none outline-none">
                                    <label
                                        htmlFor={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData?.email) ? "forgetPasswordConfirmEmailModal" : ""} className="btn px-36 bg-[#055F5B] text-white h-[63px]"
                                        onClick={() => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData?.email) ? toast.success("Sent to your email") : toast.error("Please enter valid email")}
                                    >
                                        Next &nbsp; &nbsp; <BsArrowRight />
                                    </label>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Email Sent Confirm Popup */}
            <input type="checkbox" id="forgetPasswordConfirmEmailModal" className="modal-toggle" />
            <label htmlFor="forgetPasswordConfirmEmailModal" className="modal cursor-pointer">
                <label className="modal-box relative text-center block" htmlFor="">
                    <img src={emailSentConfirmImg} className="max-w-[200px] mx-auto" />
                    <h3 className="text-2xl font-bold mt-4">Email Sent!</h3>
                    <p className="py-4 text-sm text-[#5E5E5E]">An Email containing the details for resetting your password have been sent to your registered Email.</p>
                    <div className="flex gap-4 items-center">
                        <button className="btn flex-1 capitalize bg-[#E3E3E3] text-[#055F5B] border-none outline-none hover:text-[#FFFFFF]" onClick={() => toast.success("Sent to your email")}>Resent Email</button>
                        <label htmlFor="forgetPasswordConfirmEmailModal" className="bg-[#055F5B] text-[#FFFFFF] capitalize flex-1 py-3 rounded-lg cursor-pointer hover:bg-[#101a1a]">Ok</label>
                    </div>
                </label>
            </label>
        </>
    )
}

export default V1ForgetPassword