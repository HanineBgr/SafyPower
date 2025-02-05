import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const StationUsageDonutChart = () => {
  const data = {
    labels: ['In Use', 'Available'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#FF698A', '#57B7FB'], // Updated colors
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10, // This will round the edges of the donut chart
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}%`,
        },
      },
      // Custom plugin for displaying static text in the middle
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const { width, height } = chart.chartArea;
        const fontSize = 16;
        const fontStyle = 'bold';
        const fontFamily = 'Arial';
        const font = `${fontStyle} ${fontSize}px ${fontFamily}`;
        ctx.fillStyle = '#333'; // Text color
        ctx.font = font;

        const text = '100%'; // Static text
        const textX = width / 2;
        const textY = height / 2;

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, textX, textY); // Draw the text at the center of the donut
      },
    },
    cutout: '70%', // Adjust inner hole size
    radius: '60%', // Adjust the overall size of the donut chart
  };

  return (
    <div className="bg-white p-3 rounded-lg w-29 h-30"> 
      <h2 className="text-sm font-semibold text-gray-800 mb-2">Current Station Usage</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default StationUsageDonutChart;
