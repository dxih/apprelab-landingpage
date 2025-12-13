import { Box, Container, Typography, Card, CardContent, CardMedia, Button, Chip, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blog.data";

export default function Blog() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h3" sx={{ mb: 6, fontWeight: 700 }}>
        apprelab™ Blog
      </Typography>

      <Box sx={{ display: "grid", gap: 6, gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" } }}>
        {blogPosts.map((post) => {
          const firstImage = post.content.find((c) => c.image)?.image;
          return (
            <Card
              key={post.id}
              sx={{ borderRadius: 3, background: "#F9FAFB", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
            >
              {firstImage && (
                <CardMedia component="img" height="180" image={firstImage} alt={post.title} sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
              )}
              <CardContent sx={{ p: 4 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Chip label={post.category} color="primary" size="small" />
                  <Typography variant="body2" sx={{ color: "#64748B" }}>
                    By {post.author} · {post.date}
                  </Typography>
                </Stack>

                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                  {post.title}
                </Typography>

                <Typography sx={{ mb: 3, color: "#475569", lineHeight: 1.8 }}>
                  {post.excerpt}
                </Typography>

                <Button component={Link} to={`/blog/${post.id}`} sx={{ color: "#0057FF", fontWeight: 600 }}>
                  Read More →
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
}
