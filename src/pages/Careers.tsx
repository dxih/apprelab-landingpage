// Careers.tsx
import { Container, Typography, Box } from "@mui/material";
import CareerJobs from "../components/CareerJobs";
import { jobs } from "../data/jobs.data";

export default function Careers() {
  return (
    <Container sx={{ py: 7}}>
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
        Careers at <span style={{ color: "#0057FF" }}>apprelab™</span>
      </Typography>

      <Typography sx={{ color: "#475569", mb: 6, fontSize: "1.1rem" }}>
        Apply for available roles before our official launch. Join the early team and help shape the future of practical tech education!
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "space-between" }}>
        {jobs.map((job) => (
          <CareerJobs key={job.id} job={job} />
        ))}
      </Box>
    </Container>
  );
}
