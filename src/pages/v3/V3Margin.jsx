
import { Chart as ChartJS, LineElement, PointElement, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from "chart.js"
import { Line } from 'react-chartjs-2';
import { FiMoreVertical, FiSearch } from 'react-icons/fi';

import profile1 from "../../assets/v3/orderinprogress/profile1.png"
import profile2 from "../../assets/v3/orderinprogress/profile2.png"

ChartJS.register(
    LineElement, PointElement, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend
)


const V3Margin = () => {

    const totalRevenueData = {
        labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        datasets: [
            {
                label: "Total Revenue",
                data: [10000, 20000, 70000, 40000, 60000, 10000, 40000, 0, 20000],
                backgroundColor: "#0500FF",
                borderColor: "#0500FF",
                borderWidth: 1,
                pointBorderColor: "#0500FF",
                fill: true,
                tension: 0.4
            }
        ]
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-10">
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
                        <h2 className="text-xl font-medium mb-8">84,576,477$</h2>
                    </div>
                    <Line data={totalRevenueData} options={{ height: 700 }} />
                </div>
            </div>
            <div className="flex justify-between items-center my-3">
                <h2 className="text-xl font-bold">All Order Margin</h2>
                <div className="rounded-full py-3 px-5 bg-[#055F5B0A] flex items-center gap-2 w-[300px]">
                    <FiSearch />
                    <input type="text" className="text-sm bg-transparent flex-1 outline-none" placeholder="Search product here to see margin" />
                </div>
            </div>
            <div className='w-full min-h-[200px] h-full max-h-[300px] overflow-y-auto bg-[#FFFBF3] p-4 rounded-lg mt-8'>
                <table className="w-full">
                    <thead>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Order</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Status</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Order number</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Quantity</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>price</th>
                        <th className='py-4 border-b-[1px] border-b-[#8E8E8E] font-semibold'>Total Margin</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-3 border-b-[1px] border-b-[#BABABA]'>
                                <div className='flex items-center gap-2 justify-center'>
                                    <img src={profile1} alt="" className='w-12' />
                                    <div>
                                        <h4 className='text-sm mb-0 pb-0'>Tony Nory</h4>
                                        <span className='text-xs'>Placed 12h ago</span>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <button className='text-[#65E062] bg-[#65E06245] rounded-md py-1 px-8'>Active</button>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>000000</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>90000</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>12,0000</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <div className="flex items-center gap-1 justify-center">
                                    <div className="radial-progress before:bg-[#D9D9D9] text-[#FFD600]" style={{ "--value": 70 }}>70%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-3 border-b-[1px] border-b-[#BABABA]'>
                                <div className='flex items-center gap-2 justify-center'>
                                    <img src={profile2} alt="" className='w-12' />
                                    <div>
                                        <h4 className='text-sm mb-0 pb-0'>Tony Nory</h4>
                                        <span className='text-xs'>Placed 12h ago</span>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <button className='text-[#65E062] bg-[#65E06245] rounded-md py-1 px-8'>Active</button>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>000000</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>90000</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <span>12,0000</span>
                            </td>
                            <td className="py-3 border-b-[1px] border-b-[#BABABA] text-center">
                                <div className="flex items-center gap-1 justify-center">
                                    <div className="radial-progress before:bg-[#D9D9D9] text-[#FFD600]" style={{ "--value": 70 }}>70%</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default V3Margin