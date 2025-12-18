import { Box, Container, Typography, Avatar, Paper, IconButton, Chip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// DEFAULT IMAGE
const DEFAULT_AVATAR = "https://via.placeholder.com/150";

// TEAM DATA
const TEAM_MEMBERS = [
  { name: "Harry Achugasim", role: "CEO", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Kamsiyochukwu B Mebuge", role: "Frontend Developer (Tech Lead)", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Amaka Maduechesi", role: "Product Design Lead", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Prisca Ezeh", role: "Backend Developer", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "David Isaac", role: "Frontend Developer (Intern)", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Nwoye Fidelis Chidera", role: "Mobile Developer", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Eve Thompson", role: "UI/UX Designer", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Frank Liu", role: "UI/UX Designer", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Sarah James", role: "HR Manager", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
  { name: "Daniel Okorie", role: "Social Media Manager", image: DEFAULT_AVATAR, linkedin: "#", github: "#" },
];

// SORTING BY SENIORITY
const sortBySeniority = (members: typeof TEAM_MEMBERS) => {
  const priority = ["CEO", "Lead", "Senior", "Developer", "Designer", "Intern"];
  return [...members].sort((a, b) => {
    const aIndex = priority.findIndex((p) => a.role.toLowerCase().includes(p.toLowerCase()));
    const bIndex = priority.findIndex((p) => b.role.toLowerCase().includes(p.toLowerCase()));
    return aIndex - bIndex;
  });
};

// CARD SECTION RENDERER
const renderSection = (title: string, members: typeof TEAM_MEMBERS) => {
  const sortedMembers = sortBySeniority(members);
  return (
    <Box sx={{ mb: 10 }}>
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
        {sortedMembers.map((member) => (
          <Paper
            key={member.name}
            elevation={3}
            sx={{
              width: 220,
              textAlign: "center",
              borderRadius: 3,
              p: 3,
              border: member.role === "CEO" ? "3px solid gold" : "1px solid #cccfd2ff",
              position: "relative",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 12px 32px rgba(0,87,255,0.15)",
              },
            }}
          >
            {/* INTERN RIBBON */}
            {member.role.toLowerCase().includes("intern") && (
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  right: -30,
                  transform: "rotate(45deg)",
                  background: "#FFB800",
                  color: "#fff",
                  px: 2,
                  py: 0.5,
                  fontWeight: 600,
                  fontSize: "0.75rem",
                }}
              >
                INTERN
              </Box>
            )}

            <Avatar
              src={member.image}
              alt={member.name}
              sx={{ width: 100, height: 100, mx: "auto", mb: 1.5 }}
            />

            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              {member.name}
            </Typography>

            {/* ROLE BADGE */}
            <Chip
              label={member.role}
              size="small"
              color={member.role.toLowerCase().includes("developer") ? "primary" : "default"}
              sx={{ mb: 1 }}
            />

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
};

export default function About() {
  const ceos = TEAM_MEMBERS.filter((m) => m.role === "CEO");

  const developers = TEAM_MEMBERS.filter((m) =>
    m.role.toLowerCase().includes("developer")
  );

  const designers = TEAM_MEMBERS.filter((m) =>
    m.role.toLowerCase().includes("designer")
  );

  const others = TEAM_MEMBERS.filter(
    (m) =>
      m.role !== "CEO" &&
      !m.role.toLowerCase().includes("developer") &&
      !m.role.toLowerCase().includes("designer")
  );

  return (
    <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 12 }, background: "#f9fafb51" }}>
      <Container maxWidth="lg">
        {/* INTRO */}
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: "#0057FF" }}>
            About Apprelab™
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 850,
              mx: "auto",
              mb: 4,
              color: "#475569",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.9,
            }}
          >
            Apprelab™ is a modern learning and work platform built to help people
            <strong> gain real skills, real experience, and real income</strong>.
            We go beyond theory by creating a space where learning meets practical execution.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 850,
              mx: "auto",
              mb: 4,
              color: "#475569",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.9,
            }}
          >
            Instead of stopping at courses, Apprelab™ allows learners to immediately
            apply what they’ve learned on <strong>real-world projects</strong> —
            guided by mentors and built for professional growth.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 850,
              mx: "auto",
              mb: 4,
              color: "#475569",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.9,
            }}
          >
            Our ecosystem is designed around three core pillars:
          </Typography>

          <Box sx={{ textAlign: "left", maxWidth: 650, mx: "auto", mb: 8 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • <strong>Learn:</strong> Practical micro-courses focused on in-demand skills.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • <strong>Work:</strong> Hands-on paid projects that build confidence and experience.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • <strong>Grow:</strong> Mentor guidance, certifications, and a portfolio that speaks for you.
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 850,
              mx: "auto",
              color: "#475569",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.9,
            }}
          >
            At Apprelab™, our goal is simple — to help individuals transition from
            learning to earning with confidence, clarity, and real proof of skill.
            We’re building a community where talent is nurtured, experience is earned,
            and opportunities are created.
          </Typography>
        </Box>

        {/* TEAM */}
        {renderSection("CEO", ceos)}
        {renderSection("Developers", developers)}
        {renderSection("Designers", designers)}
        {others.length > 0 && renderSection("Other Team Members", others)}
      </Container>
    </Box>
  );
}
