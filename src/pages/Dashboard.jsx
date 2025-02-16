import React, { useState } from "react";
import { FaUser, FaVolumeUp, FaUsers, FaCalendarWeek, FaSpeakerDeck, FaUserCheck, FaToggleOn } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import SideBar from "../components/SideBar";
import DateInput from "../components/DateInput";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const [showSideBar, setShowSideBar] = useState(false)
  // Example data for the users
  const cardData = [
    { user: "Users", value: 140, icon: <FaUser className="w-6 h-6 w-10" />, iconBackgorund: "bg-green-300", textColor: "text-green-300" },
    { user: "Referal Users", value: 64, icon: <FaVolumeUp className="w-6 h-6"/>, iconBackgorund: "bg-blue-300", textColor: "text-blue-300" },
    { user: "Today's Organic users", value: 76,  icon: <FaUsers className="w-6 h-6 w-10"/>, iconBackgorund: "bg-green-300", textColor: "text-green-300" },
    { user: "This Week Users", value: 679,  icon: <FaCalendarWeek className="w-6 h-6 w-10"/> , iconBackgorund: "bg-blue-300", textColor: "text-green-300" },
    { user: "This Month Users", value: 22727,  icon: <FaSpeakerDeck className="w-6 h-6 w-10"/>, iconBackgorund: "bg-blue-300", textColor: "text-green-300"  },
    { user: "Last Month Users", value: 71291,  icon: <FaUserCheck className="w-6 h-6 w-10"/>, iconBackgorund: "bg-blue-300", textColor: "text-green-300"   },
  ];

  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Registrations",
        data: [600, 580, 560, 540, 520, 500, 450],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)", // Light color for the shadow below the line
        fill: true, // Enables filling under the line, creating the shadow effect
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4, // Optional: adds smooth curve to the line
      },
      {
        label: "Referrals",
        data: [200, 190, 180, 170, 160, 150, 140],
        borderColor: "#EF4444",
        backgroundColor: "rgba(239, 68, 68, 0.2)", // Light color for the shadow below the line
        fill: true, // Enables filling under the line, creating the shadow effect
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4, // Optional: adds smooth curve to the line
      },
    ],
  };

  const options = {
    responsive: true,  // Make the chart responsive
    maintainAspectRatio: false,  // Allow resizing of the chart
    plugins: {
      legend: {
        position: "top",  // Position the legend on top
      },
    },
  };

  const handleToggle = () => {
    setShowSideBar(!showSideBar)
  }
  return (
    <div className="flex flex-row sm:gap-10">
        <SideBar showSideBar={showSideBar}/>
        <main className="flex-1 p-6 bg-white overflow-hidden">
            <div className="flex items-center justify-between mb-10">
                <h1 className="!text-xl !font-bold">Analytics</h1>
                
                {/* <button className="bg-[whitesmoke] !font-bold !text-lg !p-4 rounded-[6px]">Select Data Range</button> */}
                {/* <input type="date" placeholder="Select Data Range" className="border !p-2"/> */}
                <DateInput />
                <button className="md:hidden" onClick={handleToggle}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={35}
                        fill="none"
                        viewBox="0 0 24 24"
                      
                    >
                        <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeWidth={2}
                        d="M4 18h16M4 12h16M4 6h16"
                        />
                    </svg>
                </button>
            </div>
            {/* Grid of Cards with User or Speaker Icon and Value */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            {cardData.map((card, i) => (
                <div key={i} className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col justify-between h-40">
                {/* Icon and Name */}
                <div className="flex  items-center space-x-3 mb-auto">
                    {/* Alternating Icon (User or Speaker) */}
                    <div className={`w-10 h-10  bg-opacity-80 rounded-[10px] flex items-center justify-center text-white ${card?.iconBackgorund}`}>
                    {card?.icon}
                    </div>
                    <p className="text-md font-semibold">{card.user}</p>
                </div>
                <div className={`text-xl font-semibold  text-right ${card?.textColor}`}>
                    {card.value}
                </div>
                </div>
            ))}
            </div>

            {/* Chart */}
            <div className="bg-gray-100 p-4 rounded-md h-[400px] md:h-[400px]">
            <h2 className="!text-xl !font-bold text-start my-5">Last 7 Days: Registrations vs Referrals</h2>
            <Line data={data} options={options} />
            </div>
        </main> 
    </div>
  );
};

export default Dashboard;
