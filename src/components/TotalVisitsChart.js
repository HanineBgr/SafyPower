import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area } from "recharts";

// Example data for different dates
const data = [
  { time: "7 am", visits: 50 },
  { time: "8 am", visits: 75 },
  { time: "9 am", visits: 100 },
  { time: "10 am", visits: 120 },
  { time: "11 am", visits: 90 },
  { time: "12 pm", visits: 80 },
  { time: "1 pm", visits: 110 },
];

const TotalVisitsChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg mt-6" style={{ width: "800px" , height: "370px" }}>
      {/* Chart Title */}
      <div className="flex justify-between items-center px-4 pb-2 mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Total Visits</h2>
      </div>

      {/* Line chart container */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 30, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fill: "#555", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#555", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#fff', 
              borderColor: '#ddd', 
              borderWidth: 1, 
              borderRadius: 8, 
              padding: "6px 12px", 
              fontSize: "12px"
            }} 
          />
          {/* Gradient Area under the Line */}
          <Area 
            type="monotone" 
            dataKey="visits" 
            stroke="#8884d8" 
            fill="url(#gradient)"
            fillOpacity={0.4} 
          />
          <Line 
            type="monotone" 
            dataKey="visits" 
            stroke="#8884d8" 
            strokeWidth={2} 
            activeDot={{ r: 8 }} 
          />
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8884d8" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#8884d8" stopOpacity={0.1} />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalVisitsChart;
