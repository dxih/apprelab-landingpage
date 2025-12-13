import { Container, Typography, Box } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
        Privacy Policy
      </Typography>

      <Box sx={{ color: "#475569", lineHeight: 1.8 }}>
        <Typography paragraph>
          At AppRelab, we take your privacy seriously. This policy explains what
          data we collect, why we collect it, and how we use and protect it.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 600 }}>
          1. Information We Collect
        </Typography>
        <Typography paragraph>
          We may collect personal information such as your name, email, and
          usage data when you join the waitlist or apply for roles.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 600 }}>
          2. How We Use Your Information
        </Typography>
        <Typography paragraph>
          We use your data to improve our platform, personalize your experience,
          and communicate updates.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 600 }}>
          3. Data Protection
        </Typography>
        <Typography paragraph>
          Your information is stored securely and never sold to third parties.
        </Typography>
      </Box>
    </Container>
  );
}
