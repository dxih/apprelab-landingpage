import { Container, Typography, Box } from "@mui/material";

export default function Terms() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
        Terms of Service
      </Typography>

      <Box sx={{ color: "#475569", lineHeight: 1.8 }}>
        <Typography paragraph>
          Welcome to AppRelab. By accessing our platform, you agree to the
          following terms and conditions.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 600 }}>
          1. Use of the Platform
        </Typography>
        <Typography paragraph>
          You agree to use AppRelab responsibly and comply with applicable laws.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 600 }}>
          2. User Accounts
        </Typography>
        <Typography paragraph>
          You are responsible for maintaining the confidentiality of your
          account information.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 600 }}>
          3. Limitations
        </Typography>
        <Typography paragraph>
          We are not liable for any damages resulting from use of our platform.
        </Typography>
      </Box>
    </Container>
  );
}
