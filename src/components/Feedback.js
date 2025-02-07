import React from "react";

const FeedbackSection = () => {
  const feedbacks = [
    { name: "Amyrobson", text: "I find the service satisfactory. But there is still an effort to be made", rating: 4 },
    { name: "John Doe", text: "Great experience! Highly recommended.", rating: 5 },
    { name: "Jane Smith", text: "The service needs improvement. Not satisfied.", rating: 3 },
  ];

  return (
    <div className="bg-white p-6 shadow-md rounded-xl">
      <h2 className="text-lg font-bold">My Feedback</h2>
      <div className="mt-4 space-y-4">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-sm font-bold">{feedback.name}</h3>
            <p className="text-sm text-gray-600">{feedback.text}</p>
            <p className="mt-2 text-sm text-yellow-500">{"★".repeat(feedback.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSection;
