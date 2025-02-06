import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'In use', value: 30, color: '#FF698A' },
  { name: 'Available', value: 70, color: '#57B7FB' },
];

export default function StationUsagePieChart() {
  return (
    <div className="flex flex-col bg-white p-5 rounded-2xl shadow-md w-[300px] h-[300px] relative">
      {/* Title aligned to the left */}
      <p className="text-sm font-semibold text-black mb-3 text-left">Current station usage</p>

      {/* Donut Chart Wrapper */}
      <div className="relative flex justify-center">
        <PieChart width={220} height={220}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={85}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            cornerRadius={20} // 🔥 Rounded edges
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        {/* Centered Text (100%) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl font-bold text-black">100%</p>
        </div>
      </div>

      {/* Legend moved up closer to the chart */}
      <div className="flex justify-center gap-4"> {/* Reduced mt-4 to mt-2 */}
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
            <p className="text-sm text-gray-700">{`${item.value}% ${item.name}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
