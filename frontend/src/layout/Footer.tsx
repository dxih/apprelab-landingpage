import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppRelabLogo from '../assets/apprelab_logo.png';
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: 'rgba(255, 255, 255, 0.91)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(0, 87, 255, 0.1)',
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 4,
          }}
        >
          {/* BRAND */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box
              component="img"
              src={AppRelabLogo}
              alt="AppRelab Logo"
              sx={{ height: 40, mb: 1 }}
            />

            <Typography
              variant="body2"
              sx={{ color: '#64748B', fontWeight: 500 }}
            >
              Bridging the gap between learning and real-world experience.
            </Typography>
          </Box>

          {/* 2 COLUMN LINKS */}
        <Box
          sx={{
            display: "flex",
            gap: 6,
            textAlign: { xs: "center", md: "left" },

            // 🔥 Center it on mobile with margin left/right 50px
            ml: { xs: "50px", md: 0 },
            mr: { xs: "50px", md: 0 },

            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >

            {/* COLUMN 1 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <FooterLink text="Home" to="/" />
              <FooterLink text="Careers" to="/careers" />
              <FooterLink text="Blog" to="/blog" />
            </Box>

            {/* COLUMN 2 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <FooterLink text="Contact" to="/contact" />
              <FooterLink text="Privacy Policy" to="/privacy-policy" />
              <FooterLink text="Terms of Service" to="/terms" />
            </Box>
          </Box>

      {/* SOCIALS */}
      <Box sx={{ display: 'flex', gap: 1 , paddingLeft: { xs: 17, md: 0 },}}>
        {[
          { icon: LinkedInIcon, url: "https://www.linkedin.com/company/apprelabapp/" },
          { icon: FacebookIcon, url: "https://www.facebook.com/share/16ZSJVe8eu/" },
          { icon: InstagramIcon, url: "https://www.instagram.com/apprelab?utm_source=qr&igsh=Z2x5aDRreDZ2NHpw" },
        ].map(({ icon: Icon, url }, i) => (
          <IconButton
            key={i}
            component="a"
            href={url}
            target="_blank"
            sx={{
              color: '#64748B',
              transition: '0.3s',
              '&:hover': {
                color: '#0057FF',
                transform: 'translateY(-3px)',
                backgroundColor: 'rgba(0, 87, 255, 0.08)',
              },
            }}
          >
            <Icon />
          </IconButton>
        ))}
      </Box>
        </Box>

        {/* COPYRIGHT */}
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            mt: 4,
            pt: 3,
            borderTop: '1px solid rgba(0, 87, 255, 0.1)',
            color: '#94A3B8',
            fontWeight: 500,
          }}
        >
          © 2025 AppRelab. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

/* SMALL REUSABLE LINK COMPONENT */
const FooterLink = ({ text, to }: { text: string; to: string }) => (
  <Link
    component={RouterLink}
    to={to}
    underline="none"
    variant='h6'
    sx={{
      color: '#475569',
      fontWeight: 600,
      display: 'block',
      "&:hover": { color: "#0057FF", textDecoration: "none" },
    }}
  >
    {text}
  </Link>
);

export default Footer;
