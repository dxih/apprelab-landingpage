import { Box } from '@mui/material';
import Hero from '../components/Hero';
import WhyAppRelab from '../components/WhyAppRelab';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Hero />
      <WhyAppRelab />
      <HowItWorks />
    </Box>
  );
};

export default Home;
