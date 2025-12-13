import { Box, Container, Typography, Avatar, Paper, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// DEFAULT IMAGE
const DEFAULT_AVATAR = "https://via.placeholder.com/150";

// TEAM DATA
const TEAM_MEMBERS = [
  { name: "Alice Johnson", role: "CEO", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Bob Smith", role: "Tech Lead", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Clara Lee", role: "Tech Lead", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Charlie Brown", role: "Frontend Developer", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Daniel Kim", role: "Frontend Developer", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Debbie Wilson", role: "Backend Developer", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Eve Thompson", role: "UI/UX Designer", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Frank Liu", role: "UI/UX Designer", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Grace Park", role: "QA Engineer", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
];

// FLEXBOX LAYOUT FUNCTION FOR TEAM SECTIONS
const renderSection = (title: string, members: typeof TEAM_MEMBERS) => (
  <Box sx={{ mb: 12 }}>
    <Typography
      variant="h4"
      sx={{ mb: 4, fontWeight: 600, color: "#1E293B", textAlign: "center" }}
    >
      {title}
    </Typography>

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        justifyContent: "center",
      }}
    >
      {members.map((member) => (
        <Paper
          key={member.name}
          elevation={3}
          sx={{
            width: 220,
            textAlign: "center",
            borderRadius: 3,
            p: 3,
            border: member.role === "CEO" ? "3px solid gold" : "1px solid #E2E8F0",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 12px 32px rgba(0,87,255,0.15)",
            },
          }}
        >
          <Avatar
            src={member.image}
            alt={member.name}
            sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
          />

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
            {member.name}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {member.role}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <IconButton
              component="a"
              href={member.linkedin}
              target="_blank"
              sx={{
                color: "#0A66C2",
                border: "1px solid #0A66C2",
                borderRadius: "50%",
                p: 0.5,
                "&:hover": { backgroundColor: "rgba(10,102,194,0.1)" },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>

            <IconButton
              component="a"
              href={member.github}
              target="_blank"
              sx={{
                color: "#171515",
                border: "1px solid #171515",
                borderRadius: "50%",
                p: 0.5,
                "&:hover": { backgroundColor: "rgba(23,21,21,0.1)" },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Box>
        </Paper>
      ))}
    </Box>
  </Box>
);

export default function About() {
  const ceos = TEAM_MEMBERS.filter((m) => m.role === "CEO");
  const techLeads = TEAM_MEMBERS.filter((m) => m.role.includes("Tech Lead"));
  const developers = TEAM_MEMBERS.filter((m) => m.role.includes("Developer"));
  const designers = TEAM_MEMBERS.filter((m) => m.role.includes("Designer"));
  const others = TEAM_MEMBERS.filter(
    (m) =>
      !m.role.includes("CEO") &&
      !m.role.includes("Tech Lead") &&
      !m.role.includes("Developer") &&
      !m.role.includes("Designer")
  );

  return (
    <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 12 }, background: "#F9FAFB" }}>
      <Container maxWidth="lg">
        {/* INTRO SECTION */}
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: "#0057FF" }}>
            About Apprelab™
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 800,
              mx: "auto",
              mb: 4,
              color: "#475569",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.8,
            }}
          >
            Apprelab™ is a unique platform that combines{" "}
            <strong>learning, earning, and real-world experience</strong>.
            Our mission is to bridge the gap between education and professional opportunities.
            We empower learners to gain practical skills through{" "}
            <strong>micro-courses</strong>, while providing opportunities to apply those
            skills on real paid projects with guidance from experienced mentors.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 800,
              mx: "auto",
              mb: 4,
              color: "#475569",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.8,
            }}
          >
            Our platform structure is built around <strong>three pillars</strong>:
          </Typography>

          <Box sx={{ textAlign: "left", maxWidth: 600, mx: "auto", mb: 8 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • <strong>Learn:</strong> Access affordable micro-courses designed to teach practical skills.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • <strong>Earn:</strong> Work on real paid projects to gain hands-on experience.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • <strong>Build Experience:</strong> Receive mentor guidance and earn verified certifications.
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "#475569",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.8,
            }}
          >
            Our goal is to create a <strong>community of skilled professionals</strong> ready
            to excel in the real world. We aim to empower learners, connect them with mentors
            and SMEs, and help them build a professional portfolio that truly stands out.
          </Typography>
        </Box>

        {/* TEAM SECTIONS */}
        {renderSection("CEO", ceos)}
        {renderSection("Tech Leads", techLeads)}
        {renderSection("Developers", developers)}
        {renderSection("Designers", designers)}
        {others.length > 0 && renderSection("Other Team Members", others)}
      </Container>
    </Box>
  );
}
