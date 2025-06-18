  import { Button, Typography, Box } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SchoolIcon from '@mui/icons-material/School';

const HomePage = ({ toggleTheme, darkMode }) => {
  return (
    <Box
      sx={{
        height: '100vh',           // Full viewport height
        width: '100vw',            // Full viewport width
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: darkMode
          ? "linear-gradient(to right, #000000, #1f1f1f)"
          : "linear-gradient(to right, #ec4899, #3b82f6)",
        transition: 'background 0.5s ease',
        overflow: 'hidden',       // Prevent scroll
      }}
    >
      <Box
        sx={{
          p: 4,
          maxWidth: 600,
          width: '90%',
          backgroundColor: darkMode ? '#1f1f1f' : '#ffffff',
          borderRadius: 4,
          textAlign: 'center',
          boxShadow: 4,
        }}
      >
        <SchoolIcon
          sx={{
            fontSize: 60,
            color: darkMode ? '#ec4899' : '#3b82f6',
            mb: 2,
          }}
        />
        <Typography variant="h4" color="primary" gutterBottom>
          Welcome to SkillSwap
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Learn, Teach & Grow Together!
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href="/login"
          sx={{ mb: 2 ,
            ml:2
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
