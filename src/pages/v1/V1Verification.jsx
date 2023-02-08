
import logo from "../../assets/v1/login-logo.png"
import verificationImg from "../../assets/v1/verification-img.png"
import background from "../../assets/v1/login-background.png"

import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useState } from "react"


const V1Verification = () => {

    const [formData, setFormData] = useState({ n1: "", n2: "", n3: "", n4: "", n5: "", n6: "" })

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
                        <h3 className="text-white text-xl mt-5 mb-10 invisible">Get Started With Sondar</h3>
                        <img src={verificationImg} className="max-w-xs" alt="" />
                    </div>
                    <div className="flex gap-3 items-start w-full text-white">
                        <Link to="/">Contact us</Link>
                        <span className="mx-2">|</span>
                        <Link to="/">Support</Link>
                    </div>
                </div>
                <div className="w-3/5 flex flex-col justify-center items-center p-7">
                    <h1 className="text-5xl text-center font-bold">Account Verification</h1>
                    <p className="mt-5 text-[#9F9F9F] text-md">Please Enter the 6 Digit Code for the Verification</p>
                    <form onSubmit={handleSubmit} className="w-full max-w-lg">
                        <div className="form-group my-32 w-full">
                            <div className="flex gap-3 items-center mb-2 justify-center">
                                <label htmlFor="" className="font-semibold mb-5">6-digit Code</label>
                            </div>
                            <div className="flex gap-4 justify-center items-center rounded-md pr-3">
                                <input type="text" placeholder="0" className={`input input-ghost w-[70px] h-[70px] text-center bg-transparent outline-none ${formData.n1 !== "" ? "border-[#B1B1B1]" : "border-[#EAEAEA]"} border-2 focus:outline-none focus:border-[#FFD584]`} onChange={(e) => setFormData({ ...formData, n1: e.target.value })} tabIndex="1" />
                                <input type="text" placeholder="0" className={`input input-ghost w-[70px] h-[70px] text-center bg-transparent outline-none ${formData.n2 !== "" ? "border-[#B1B1B1]" : "border-[#EAEAEA]"} border-2 focus:outline-none focus:border-[#FFD584]`} onChange={(e) => setFormData({ ...formData, n2: e.target.value })} tabIndex="2" />
                                <input type="text" placeholder="0" className={`input input-ghost w-[70px] h-[70px] text-center bg-transparent outline-none ${formData.n3 !== "" ? "border-[#B1B1B1]" : "border-[#EAEAEA]"} border-2 focus:outline-none focus:border-[#FFD584]`} onChange={(e) => setFormData({ ...formData, n3: e.target.value })} tabIndex="3" />
                                <input type="text" placeholder="0" className={`input input-ghost w-[70px] h-[70px] text-center bg-transparent outline-none ${formData.n4 !== "" ? "border-[#B1B1B1]" : "border-[#EAEAEA]"} border-2 focus:outline-none focus:border-[#FFD584]`} onChange={(e) => setFormData({ ...formData, n4: e.target.value })} tabIndex="4" />
                                <input type="text" placeholder="0" className={`input input-ghost w-[70px] h-[70px] text-center bg-transparent outline-none ${formData.n5 !== "" ? "border-[#B1B1B1]" : "border-[#EAEAEA]"} border-2 focus:outline-none focus:border-[#FFD584]`} onChange={(e) => setFormData({ ...formData, n5: e.target.value })} tabIndex="5" />
                                <input type="text" placeholder="0" className={`input input-ghost w-[70px] h-[70px] text-center bg-transparent outline-none ${formData.n5 !== "" ? "border-[#B1B1B1]" : "border-[#EAEAEA]"} border-2 focus:outline-none focus:border-[#FFD584]`} onChange={(e) => setFormData({ ...formData, n6: e.target.value })} tabIndex="6" />
                            </div>
                            <div className="form-group w-full text-right mt-5">
                                <p>Didn’t receive code? <Link to="" className="text-[#055F5B] underline">Send Again</Link></p>
                            </div>
                        </div>
                        <div className="form-group mt-12 mb-5 w-full text-center">
                            <button className="btn btn-lg bg-[#055F5B] text-white px-36" tabIndex="7">Next &nbsp; &nbsp; <BsArrowRight /></button>
                        </div>
                    </form>
                </div>
            </div >
        </section >
    )
}

export default V1Verification