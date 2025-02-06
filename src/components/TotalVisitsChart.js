import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { day: "Mon", visits: 80 },
  { day: "Tue", visits: 72 },
  { day: "Wed", visits: 64 },
  { day: "Thu", visits: 50 },
  { day: "Fri", visits: 20 },
  { day: "Sat", visits: 60 },
  { day: "Sun", visits: 45 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-md rounded-full text-sm font-semibold">
        {`${payload[0].value} visits`}
      </div>
    );
  }
  return null;
};

const TotalVisitsChart = () => {
  return (
    <div className="p-2 bg-white shadow-md rounded-2xl w-full max-w-4xl h-[300px]"> {/* Increased height here */}
      <h2 className="text-sm font-semibold">Total visits</h2>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <XAxis
            dataKey="day"
            stroke="#888"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10 }} // Reduce the font size of the X axis labels
          />
          <YAxis
            stroke="#888"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }} // Reduce the font size of the Y axis labels
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="visits"
            fill="url(#colorGradient)"
            dot={{ r: 6, stroke: "#FF73C0", strokeWidth: 2, fill: "white" }}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7B61FF" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#FF73C0" stopOpacity={0.1} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalVisitsChart;
