import { Container, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { blogPosts, BlogSection } from "../data/blog.data";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) return <Container sx={{ py: 10 }}>Post not found</Container>;

  // Render structured content
  const renderContent = post.content.map((section: BlogSection, i: number) => (
    <Box key={i} sx={{ mb: 4 }}>
      {section.heading && (
        <Typography variant="h5" sx={{ mt: 3, mb: 2, fontWeight: 600 }}>
          {section.heading}
        </Typography>
      )}
      {section.text && (
        <Typography sx={{ color: "#475569", lineHeight: 1.8, mb: 2 }}>
          {section.text.split("\n").map((line, idx) => (
            <span key={idx}>
              {line.startsWith("- ") ? `• ${line.replace("- ", "")}` : line}
              <br />
            </span>
          ))}
        </Typography>
      )}
      {section.image && (
        <Box
          component="img"
          src={section.image}
          alt={section.heading || "Blog Image"}
          sx={{ width: "100%", borderRadius: 2, my: 2 }}
        />
      )}
    </Box>
  ));

  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
        {post.title}
      </Typography>
      <Box>{renderContent}</Box>
    </Container>
  );
}
