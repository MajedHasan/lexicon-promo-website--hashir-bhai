import React from 'react'

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"


import { Chart as ChartJS, LineElement, PointElement, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut, Line } from 'react-chartjs-2';
import { FiMoreVertical } from 'react-icons/fi';

ChartJS.register(
    LineElement, PointElement, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend
)


const V3Costing = () => {
    const expenseSpeedData = {
        labels: [12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [
            {
                label: "Expense Speed",
                data: [6, 3, 9, 4, 12, 7, 10, 15, 13],
                backgroundColor: "#0038FF",
                borderColor: "#0038FF",
                borderWidth: 1,
                pointBorderColor: "#0038FF",
                fill: true,
                tension: 0.4
            }
        ]
    }
    const shippingSpeedData = {
        labels: [12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [
            {
                label: "Shipping Speed",
                data: [6, 3, 9, 4, 12, 7, 10, 15, 13],
                backgroundColor: "#FF00F5",
                borderColor: "#FF00F5",
                borderWidth: 1,
                pointBorderColor: "#FF00F5",
                fill: true,
                tension: 0.4
            }
        ]
    }
    const pdExpenseSpeedData = {
        labels: [12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [
            {
                label: "Product decoration expenses Speed",
                data: [6, 3, 9, 4, 12, 7, 10, 15, 13],
                backgroundColor: "#38FF51",
                borderColor: "#38FF51",
                borderWidth: 1,
                pointBorderColor: "#38FF51",
                fill: true,
                tension: 0.4
            }
        ]
    }
    const pExpenseSpeedData = {
        labels: [12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [
            {
                label: "Packaging Expenses Speed",
                data: [6, 3, 9, 4, 12, 7, 10, 15, 13],
                backgroundColor: "#FFB800",
                borderColor: "#FFB800",
                borderWidth: 1,
                pointBorderColor: "#FFB800",
                fill: true,
                tension: 0.4
            }
        ]
    }
    const totalRevenueData = {
        labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        datasets: [
            {
                label: "Total Revenue",
                data: [10000, 20000, 70000, 40000, 60000, 10000, 40000, 0, 20000],
                backgroundColor: "#39BE18",
                borderColor: "#39BE18",
                borderWidth: 1,
                pointBorderColor: "#39BE18",
                fill: true,
                tension: 0.4
            }
        ]
    }

    return (
        <>
            <div className="my-6 flex justify-between items-center">
                <h2 className='text-2xl font-bold'>Search order to get expenses invoice</h2>
                <button className='bg-[#055F5B] py-4 px-16 rounded-lg text-white'>Upload invoice </button>
            </div>
            <div className='my-6'>
                <div className='shadow-inner p-8 w-full rounded-xl bg-[#FFFBF3] flex justify-between'>
                    <div className='flex gap-10'>
                        <div>
                            <h2 className="text-2xl font-bold mb-1">Billed From</h2>
                            <ul style={{ listStyle: "none" }}>
                                <li>Clinet Name</li>
                                <li>1 client address</li>
                                <li>city , state , country</li>
                                <li>Zip code</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-1">Invoice Number</h2>
                            <p>00000000</p>
                            <h2 className="text-2xl font-bold mb-1 mt-4">Date of issue</h2>
                            <p>03/08/2022</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-5">Invoice Total</h2>
                        <h2 className="text-3xl font-bold text-[#055F5B]">$4259.00</h2>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                <div className="col-span-2 grid grid-cols-2 gap-10">
                    <div className='bg-[#FFFBF3] p-2 rounded-lg shadow-lg'>
                        <div className='flex items-center justify-between'>
                            <h2 className="text-xl font-bold flex gap-2 items-center">12% <AiOutlineArrowDown className='text-sm text-[#00BA13]' /></h2>
                            <select name="" id="" className='bg-[#FFD584] rounded-lg p-1 outline-none text-xs'>
                                <option value="">Last Month</option>
                            </select>
                        </div>
                        <Line data={expenseSpeedData} options={{}} />
                    </div>
                    <div className='bg-[#FFFBF3] p-2 rounded-lg shadow-lg'>
                        <div className='flex items-center justify-between'>
                            <h2 className="text-xl font-bold flex gap-2 items-center">Normal</h2>
                            <select name="" id="" className='bg-[#FFD584] rounded-lg p-1 outline-none text-xs'>
                                <option value="">Last Month</option>
                            </select>
                        </div>
                        <Line data={shippingSpeedData} options={{}} />
                    </div>
                    <div className='bg-[#FFFBF3] p-2 rounded-lg shadow-lg'>
                        <div className='flex items-center justify-between'>
                            <h2 className="text-xl font-bold flex gap-2 items-center">32%% <AiOutlineArrowUp className='text-sm text-[#FF0000]' /></h2>
                            <select name="" id="" className='bg-[#FFD584] rounded-lg p-1 outline-none text-xs'>
                                <option value="">Last Month</option>
                            </select>
                        </div>
                        <Line data={pdExpenseSpeedData} options={{}} />
                    </div>
                    <div className='bg-[#FFFBF3] p-2 rounded-lg shadow-lg'>
                        <div className='flex items-center justify-between'>
                            <h2 className="text-xl font-bold flex gap-2 items-center">66% <AiOutlineArrowUp className='text-sm text-[#FF0000]' /></h2>
                            <select name="" id="" className='bg-[#FFD584] rounded-lg p-1 outline-none text-xs'>
                                <option value="">Last Month</option>
                            </select>
                        </div>
                        <Line data={pExpenseSpeedData} options={{}} />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className='bg-[#FFFBF3] p-2 rounded-lg shadow-lg h-full'>
                        <div className='flex items-center justify-between'>
                            <h2 className="text-xl font-bold flex gap-2 items-center">Total Revenue</h2>
                            <div className='flex gap-3 items-center'>
                                <label htmlFor="" className='flex gap-1 items-center'>
                                    <input type="radio" name="MonthlyOrWeekly" id="" /> Monthly
                                </label>
                                <label htmlFor="" className='flex gap-1 items-center'>
                                    <input type="radio" name="MonthlyOrWeekly" id="" /> Weekly
                                </label>
                                <FiMoreVertical />
                            </div>
                        </div>
                        <div className='my-4'>
                            <h2 className="text-2xl font-bold">84,576,477$</h2>
                        </div>
                        <Line data={totalRevenueData} options={{ height: 700 }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default V3Costing