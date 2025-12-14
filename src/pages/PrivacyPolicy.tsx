import { Container, Typography, Box } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Container sx={{ py: 7, maxWidth: "md" }}>
      {/* TITLE */}
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>
        Privacy Policy
      </Typography>

      <Box sx={{ color: "#475569", lineHeight: 1.8 }}>
        <Typography paragraph>
          At apprelab™, your privacy is a top priority. This Privacy Policy explains
          how we collect, use, and protect your information, and your rights
          regarding your data when you use our platform.
        </Typography>

        {/* 1 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          1. Information We Collect
        </Typography>
        <Typography paragraph>
          We may collect the following types of information:
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>Personal details such as your name, email address, and contact information.</li>
          <li>Account information when you register or join our waitlist.</li>
          <li>Usage data including how you interact with our platform and services.</li>
          <li>Device and technical information (e.g., browser type, IP address).</li>
        </Typography>

        {/* 2 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          2. How We Use Your Information
        </Typography>
        <Typography paragraph>
          We use the data we collect for purposes including:
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>Providing and improving our platform and services.</li>
          <li>Personalizing your experience and delivering relevant content.</li>
          <li>Communicating updates, announcements, and important information.</li>
          <li>Analyzing trends to enhance user experience and platform performance.</li>
        </Typography>

        {/* 3 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          3. Data Protection
        </Typography>
        <Typography paragraph>
          We implement industry-standard security measures to protect your
          information from unauthorized access, disclosure, alteration, or
          destruction. Your data is never sold to third parties.
        </Typography>

        {/* 4 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          4. Cookies and Tracking
        </Typography>
        <Typography paragraph>
          We use cookies and similar technologies to improve your experience,
          analyze site usage, and provide personalized content. You can manage
          cookie preferences through your browser settings.
        </Typography>

        {/* 5 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          5. Sharing Your Information
        </Typography>
        <Typography paragraph>
          We do not sell or rent your personal data. We may share information with:
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>Trusted service providers who help us operate and improve the platform.</li>
          <li>Legal authorities if required by law or to protect our rights.</li>
        </Typography>

        {/* 6 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          6. Your Rights
        </Typography>
        <Typography paragraph>
          You have the right to:
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>Access the personal information we hold about you.</li>
          <li>Request corrections or updates to your data.</li>
          <li>Request deletion of your information where applicable.</li>
          <li>Opt out of promotional emails or communications.</li>
        </Typography>

        {/* 7 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          7. Third-Party Links
        </Typography>
        <Typography paragraph>
          Our platform may include links to third-party websites. We are not
          responsible for the privacy practices of these external sites, and
          encourage you to review their policies.
        </Typography>

        {/* 8 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          8. Changes to This Policy
        </Typography>
        <Typography paragraph>
          We may update this Privacy Policy from time to time. Any significant
          changes will be communicated through our platform or via email. Please
          review periodically to stay informed.
        </Typography>

        {/* 9 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          9. Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions about this policy or your personal data,
          please contact us at <strong>support@apprelab.com</strong>.
        </Typography>

        <Typography sx={{ mt: 6 }}>
          Last updated: December 13, 2025
        </Typography>
      </Box>
    </Container>
  );
}
