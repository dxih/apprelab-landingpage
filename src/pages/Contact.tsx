import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = () => {
    alert("Message sent successfully!");
  };

  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
        Contact Us
      </Typography>

      <Typography sx={{ mb: 4, color: "#475569" }}>
        Have questions? Want to partner with us? Send a message below.
      </Typography>

      <Box
        sx={{
          p: 5,
          borderRadius: 3,
          background: "#ffffff",
          boxShadow: "0 8px 30px #0002",
          maxWidth: "600px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <TextField
            label="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <TextField
            label="Message"
            multiline
            minRows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <Button
            variant="contained"
            sx={{ background: "#0057FF" }}
            onClick={submit}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
