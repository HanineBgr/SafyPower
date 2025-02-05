import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "7 am", stations: 5 },
  { time: "8 am", stations: 1 },
  { time: "9 am", stations: 2 },
  { time: "10 am", stations: 3 },
  { time: "11 am", stations: 4 },
  { time: "12 pm", stations: 1 },
  { time: "1 pm", stations: 5 },
];

const UsedStationsChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg max-w-lg mt-6"> 
      <div className="flex justify-between items-center px-4 pb-2">
        <h2 className="text-sm font-semibold text-gray-800">Stations in use</h2>
        <span className="text-gray-500 text-xs">per hour</span>
      </div>
      <ResponsiveContainer width="100%" height={180}> 
        <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
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
          <Bar 
            dataKey="stations" 
            fill="#FF698A" 
            barSize={15} 
            radius={[10, 10, 10, 10]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsedStationsChart;
