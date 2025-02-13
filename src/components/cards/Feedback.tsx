"use client";

import React, { useState } from "react";
import { Heart, Reply, Send } from "lucide-react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  TextField,
  Stack,
  Box,
} from "@mui/material";

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

  const handleReply = (id: number) => {
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
        width: "530px",
        height: "500px",
        padding: "20px",
        bgcolor: "white",
        borderRadius: 3,
        boxShadow: 3,
        margin: "auto",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        My Feedback
      </Typography>

      <Stack
        spacing={2}
        sx={{ maxHeight: "420px", overflowY: "auto", paddingRight: "8px" }}
      >
        {feedbacks.map((feedback) => (
          <Card key={feedback.id} sx={{ bgcolor: "#EFF6FF", borderRadius: 2 }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                {/* Avatar */}
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

                {/* Feedback Content */}
                <Box flex={1}>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {feedback.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feedback.text}
                  </Typography>
                  {/* Rating */}
                  <Typography
                    variant="body2"
                    color="warning.main"
                    sx={{ mt: 1 }}
                  >
                    {"★".repeat(feedback.rating)}
                    {"☆".repeat(5 - feedback.rating)}
                  </Typography>
                </Box>

                {/* Actions (Like & Reply) */}
                <Stack spacing={1} alignItems="center">
                  <IconButton onClick={() => handleReply(feedback.id)}>
                    <Reply size={18} />
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

              {/* Reply Box */}
              {replyingTo === feedback.id && (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ mt: 2, bgcolor: "white", p: 1, borderRadius: 2, boxShadow: 1 }}
                >
                  <TextField
                    variant="standard"
                    fullWidth
                    placeholder="Write your reply..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    sx={{
                      "& .MuiInputBase-root": { fontSize: "14px" },
                      "& .MuiInput-underline:before": { borderBottom: "none" },
                      "& .MuiInput-underline:hover:before": { borderBottom: "none" },
                      "& .MuiInput-underline:after": { borderBottom: "none" },
                    }}
                  />
                  <IconButton
                    onClick={() => submitReply(feedback.id)}
                    color="primary"
                  >
                    <Send size={16} />
                  </IconButton>
                </Stack>
              )}

              {feedback.replies.length > 0 && (
                <Stack spacing={1} sx={{ mt: 2 }}>
                  {feedback.replies.map((reply, index) => (
                    <Box
                      key={index}
                      sx={{ p: 1, bgcolor: "grey.100", borderRadius: 2, fontSize: "14px" }}
                    >
                      {reply}
                    </Box>
                  ))}
                </Stack>
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default FeedbackSection;
