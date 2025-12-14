import { Container, Typography, Box } from "@mui/material";

export default function Terms() {
  return (
    <Container sx={{ py: 7, maxWidth: "md" }}>
      {/* TITLE */}
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>
        Terms of Service
      </Typography>

      <Box sx={{ color: "#475569", lineHeight: 1.8 }}>
        <Typography paragraph>
          Welcome to Apprelab™. By accessing or using our platform, you agree to comply with
          these Terms of Service and all applicable laws. Please read them carefully.
        </Typography>

        {/* 1 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          1. Use of the Platform
        </Typography>
        <Typography paragraph>
          You agree to use Apprelab responsibly and for lawful purposes only.
          You must not:
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>Violate any local, national, or international laws.</li>
          <li>Post harmful, offensive, or unlawful content.</li>
          <li>Attempt to disrupt or interfere with the platform’s functionality.</li>
        </Typography>

        {/* 2 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          2. User Accounts
        </Typography>
        <Typography paragraph>
          To use certain features, you may need to create an account. You are responsible for:
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>Maintaining the confidentiality of your login credentials.</li>
          <li>All activities performed under your account.</li>
          <li>Providing accurate and up-to-date information.</li>
        </Typography>

        {/* 3 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          3. Intellectual Property
        </Typography>
        <Typography paragraph>
          All content, logos, designs, and software on Apprelab are the property of
          Apprelab™ or its licensors. You may not copy, reproduce, or distribute
          materials without explicit permission.
        </Typography>

        {/* 4 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          4. Limitations of Liability
        </Typography>
        <Typography paragraph>
          Apprelab is provided “as is” and we are not liable for any direct or
          indirect damages arising from your use of the platform. This includes
          data loss, service interruptions, or any financial or personal losses.
        </Typography>

        {/* 5 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          5. Third-Party Links
        </Typography>
        <Typography paragraph>
          Our platform may contain links to third-party websites. We are not
          responsible for the content or practices of these external sites, and
          encourage you to review their own terms and policies.
        </Typography>

        {/* 6 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          6. Termination
        </Typography>
        <Typography paragraph>
          We reserve the right to suspend or terminate your account or access to
          the platform at our discretion if you violate these Terms or engage in
          harmful activity.
        </Typography>

        {/* 7 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 600 }}>
          7. Changes to These Terms
        </Typography>
        <Typography paragraph>
          We may update these Terms from time to time. Significant changes will
          be communicated on the platform or via email. By continuing to use
          Apprelab after changes, you accept the updated terms.
        </Typography>

        {/* 8 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          8. Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions regarding these Terms of Service, please
          contact us at <strong>support@apprelab.com</strong>.
        </Typography>

        <Typography sx={{ mt: 6 }}>
          Last updated: December 13, 2025
        </Typography>
      </Box>
    </Container>
  );
}
