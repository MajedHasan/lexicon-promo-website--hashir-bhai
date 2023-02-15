import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from "react-router-dom"
import bgImg from "../../assets/v4/bgImg.png"


const V4ForgetPassword = () => {


    return (
        <div style={{ background: `url("${bgImg}")`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div style={{ background: "rgba(0, 0, 0, 0.4)", minHeight: "100vh" }} className="flex justify-center items-center py-8">
                <form action="" className="w-[500px] rounded-xl bg-[#F6F6F6] h-full p-4">
                    <div className="mb-5">
                        <h2 className="text-center font-bold text-3xl text-[#013264]">Forget Password</h2>
                        <p className="text-center max-w-[330px] mx-auto mt-3">Please enter 6-digit code sent to your email to confim your email address.</p>
                    </div>
                    <div className="my-16">
                        <div className="grid grid-cols-6 gap-3">
                            <input type="text" className="border-b-[#013264] border-b-[1.5px] px-3 py-6 rounded-t-xl bg-white" />
                            <input type="text" className="border-b-[#013264] border-b-[1.5px] px-3 py-6 rounded-t-xl bg-white" />
                            <input type="text" className="border-b-[#013264] border-b-[1.5px] px-3 py-6 rounded-t-xl bg-white" />
                            <input type="text" className="border-b-[#013264] border-b-[1.5px] px-3 py-6 rounded-t-xl bg-white" />
                            <input type="text" className="border-b-[#013264] border-b-[1.5px] px-3 py-6 rounded-t-xl bg-white" />
                            <input type="text" className="border-b-[#013264] border-b-[1.5px] px-3 py-6 rounded-t-xl bg-white" />
                        </div>
                        <div className="text-right mt-3">
                            <button className="underline text-sm text-[#121212]">Resend code</button>
                        </div>
                    </div>
                    <div className="mb-5">
                        <button className="w-full py-3 px-4 bg-[#013264] text-white rounded-lg font-semibold text-lg">Done</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default V4ForgetPassword