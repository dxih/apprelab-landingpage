import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import { useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { blogPosts, BlogSection } from "../data/blog.data";

interface Comment {
  name: string;
  text: string;
}

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  // ----- SOCIAL STATE -----
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 50) + 5);

  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  const [commentName, setCommentName] = useState("");

  if (!post) return <Container sx={{ py: 10 }}>Post not found</Container>;

  // ----- HANDLERS -----
  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleComment = () => {
    if (!commentText.trim()) return;

    setComments([
      {
        name: commentName.trim() || "Anonymous",
        text: commentText,
      },
      ...comments,
    ]);

    setCommentText("");
    setCommentName("");
  };

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: post.title,
        text: post.excerpt,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied 🚀");
    }
  };

  // ----- CONTENT RENDERER -----
  const renderContent = post.content.map((section: BlogSection, i: number) => (
    <Box key={i} sx={{ mb: 5 }}>
      {section.heading && (
        <Typography variant="h5" sx={{ mt: 3, mb: 2, fontWeight: 600 }}>
          {section.heading}
        </Typography>
      )}

      {section.text && (
        <Typography sx={{ color: "#475569", lineHeight: 1.9, mb: 2 }}>
          {section.text.split("\n").map((line, idx) => (
            <span key={idx}>
              {line.startsWith("- ")
                ? `• ${line.replace("- ", "")}`
                : line}
              <br />
            </span>
          ))}
        </Typography>
      )}

      {/* 🔥 IMAGE (DESKTOP-SAFE SIZE) */}
      {section.image && (
        <Box
          sx={{
            my: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={section.image}
            alt={section.heading || "Blog Image"}
            sx={{
              width: "100%",
              maxWidth: "720px",   // 👈 desktop cap
              maxHeight: "420px",  // 👈 no giant images
              objectFit: "cover",
              borderRadius: 3,
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          />
        </Box>
      )}
    </Box>
  ));

  return (
    <Container sx={{ py: 10, maxWidth: "md" }}>
      {/* TITLE */}
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
        {post.title}
      </Typography>

      {/* ACTION BAR */}
      <Stack direction="row" spacing={4} alignItems="center" sx={{ mb: 6 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton onClick={handleLike} color={liked ? "error" : "default"}>
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography>{likes}</Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <ChatBubbleOutlineIcon sx={{ color: "#64748B" }} />
          <Typography>{comments.length}</Typography>
        </Stack>

        <IconButton onClick={handleShare}>
          <ShareIcon />
        </IconButton>
      </Stack>

      {/* CONTENT */}
      {renderContent}

      {/* COMMENTS */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Comments
        </Typography>

        <Stack spacing={2} sx={{ mb: 4 }}>
          <TextField
            placeholder="Your name (optional)"
            value={commentName}
            onChange={(e) => setCommentName(e.target.value)}
          />

          <TextField
            placeholder="Write a comment…"
            multiline
            minRows={3}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />

          <Button
            variant="contained"
            onClick={handleComment}
            sx={{ alignSelf: "flex-end" }}
          >
            Post Comment
          </Button>
        </Stack>

        {comments.length === 0 && (
          <Typography sx={{ color: "#64748B" }}>
            No comments yet. Be the first 👀
          </Typography>
        )}

        <Stack spacing={2}>
          {comments.map((comment, i) => (
            <Box
              key={i}
              sx={{
                background: "#F8FAFC",
                p: 2,
                borderRadius: 2,
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>
                {comment.name}
              </Typography>
              <Typography sx={{ color: "#475569" }}>
                {comment.text}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
