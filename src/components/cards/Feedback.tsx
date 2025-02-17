"use client";
import React, { useState } from "react";
import { Heart, Send, MessageCircle } from "lucide-react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Stack,
  Box,
  InputAdornment,
} from "@mui/material";
import "../../styles/globals.css";

type Feedback = {
  id: number;
  name: string;
  text: string;
  rating: number;
  likes: number;
  liked: boolean;
  replies: string[];
};

const FeedbackSection: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      id: 1,
      name: "Amyrobson",
      text: "I find the service satisfactory. But there is still an effort to be made.",
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

  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState<string>("");

  const toggleLike = (id: number) => {
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

  const handleReplyClick = (id: number) => {
    setReplyingTo(replyingTo === id ? null : id);
  };

  const submitReply = (id: number) => {
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
    <Box
      sx={{
        width: "615px",
        height: "500px",
        padding: "20px",
        bgcolor: "white",
        borderRadius: 3,
        boxShadow: 3,
        margin: "auto",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Feedbacks
      </Typography>
      <Box
        sx={{ maxHeight: "440px", overflowY: "auto", paddingRight: "8px" }}
        className="scrollbar-thin"
      >
        <Stack spacing={2}>
          {feedbacks.map((feedback) => (
            <Card key={feedback.id} sx={{ bgcolor: "#EFF6FF", borderRadius: 2 }}>
              <CardContent sx={{ minHeight: "90px" }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      bgcolor: "#cce4ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#1e3a8a",
                      borderRadius: "50%",
                    }}
                  >
                    {feedback.name[0]}
                  </Box>
                  <Box flex={1}>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {feedback.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feedback.text}
                    </Typography>
                    <Typography variant="body2" color="warning.main" sx={{ mt: 1 }}>
                      {"★".repeat(feedback.rating)}
                      {"☆".repeat(5 - feedback.rating)}
                    </Typography>
                  </Box>
                  <Stack spacing={1} alignItems="center">
                    <IconButton onClick={() => handleReplyClick(feedback.id)}>
                      <MessageCircle size={18} />
                    </IconButton>
                    <IconButton
                      onClick={() => toggleLike(feedback.id)}
                      sx={{ color: feedback.liked ? "error.main" : "text.secondary" }}
                    >
                      <Heart size={18} fill={feedback.liked ? "currentColor" : "none"} />
                      <Typography variant="body2">{feedback.likes}</Typography>
                    </IconButton>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default FeedbackSection;
