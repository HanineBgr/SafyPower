import React, { useState } from "react";
import { Heart, Reply, Send } from "lucide-react";

const FeedbackSection = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: "Amyrobson",
      text: "I find the service satisfactory. But there is still an effort to be made",
      rating: 4,
      likes: 5,
      liked: false,
      replies: [],
    },
    {
      id: 2,
      name: "John Doe",
      text: "Great experience! Highly recommended.",
      rating: 5,
      likes: 25,
      liked: false,
      replies: [],
    },
    {
      id: 3,
      name: "Jane Smith",
      text: "The service needs improvement. Not satisfied.",
      rating: 3,
      likes: 15,
      liked: false,
      replies: [],
    },
    {
      id: 4,
      name: "Emily Davis",
      text: "Fantastic customer service. I really appreciate it.",
      rating: 5,
      likes: 12,
      liked: false,
      replies: [],
    },
  ]);

  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const toggleLike = (id) => {
    setFeedbacks((prevFeedbacks) =>
      prevFeedbacks.map((feedback) =>
        feedback.id === id
          ? {
              ...feedback,
              liked: !feedback.liked,
              likes: feedback.liked ? feedback.likes - 1 : feedback.likes + 1,
            }
          : feedback
      )
    );
  };

  const handleReply = (id) => {
    setReplyingTo(replyingTo === id ? null : id);
  };

  const submitReply = (id) => {
    if (replyText.trim()) {
      setFeedbacks((prevFeedbacks) =>
        prevFeedbacks.map((feedback) =>
          feedback.id === id
            ? {
                ...feedback,
                replies: [...feedback.replies, replyText],
              }
            : feedback
        )
      );
      setReplyText("");
      setReplyingTo(null);
    }
  };

  return (
    <div
      className="bg-white shadow-md rounded-xl mx-auto"
      style={{
        width: "530px",
        height: "472px",
        padding: "20px",
      }}
    >
      <h2 className="text-lg font-bold mb-4">My Feedback</h2>
      <div
        className="scrollbar-thin overflow-auto space-y-3"
        style={{
          maxHeight: "400px",
        }}
      >
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="p-4 bg-blue-50 rounded-lg shadow flex flex-col space-y-3"
          >
            <div className="flex items-start space-x-4">
              {/* Profile Avatar */}
              <div
                className="rounded-full flex items-center justify-center"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#cce4ff",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#1e3a8a",
                }}
              >
                {feedback.name[0]}
              </div>

              {/* Feedback Content */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-800">
                  {feedback.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{feedback.text}</p>
                <div className="mt-2 flex items-center space-x-1 text-yellow-500 text-base">
                  {"★".repeat(feedback.rating)}
                  {"☆".repeat(5 - feedback.rating)}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col items-center space-y-3">
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => handleReply(feedback.id)}
                >
                  <Reply size={18} />
                </button>
                <button
                  className={`flex items-center space-x-1 ${
                    feedback.liked ? "text-pink-500" : "text-gray-500"
                  } hover:text-pink-500`}
                  onClick={() => toggleLike(feedback.id)}
                >
                  <Heart
                    size={18}
                    fill={feedback.liked ? "currentColor" : "none"}
                  />
                  <span className="text-sm">{feedback.likes}</span>
                </button>
              </div>
            </div>

            {/* Reply Section */}
            {replyingTo === feedback.id && (
              <div className="mt-2 flex items-center bg-white rounded-lg p-2 shadow">
                <textarea
                  className="w-full p-1 bg-transparent focus:outline-none text-sm"
                  rows="1"
                  placeholder="Write your reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  style={{
                    resize: "none",
                    height: "28px", // Reduced height
                  }}
                />
                <button
                  className="ml-2 text-blue-500 hover:text-blue-700"
                  onClick={() => submitReply(feedback.id)}
                >
                  <Send size={16} /> {/* Smaller size and no circle */}
                </button>
              </div>
            )}

            {/* Display Replies */}
            {feedback.replies.length > 0 && (
              <div className="mt-2 space-y-2">
                {feedback.replies.map((reply, index) => (
                  <div
                    key={index}
                    className="p-2 bg-gray-100 rounded-lg text-sm text-gray-800"
                  >
                    {reply}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSection;
