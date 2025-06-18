import { AppBar, Toolbar, Typography, Button, IconButton, Box } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SchoolIcon from '@mui/icons-material/School';

const Navbar = ({ toggleTheme, darkMode }) => {
  return (
    <AppBar position="static" color="default" elevation={2}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 1, sm: 3 },
          flexWrap: "wrap",
        }}
      >
        {/* Logo */}
        <Box display="flex" alignItems="center" gap={1} mr="150px">
          <SchoolIcon sx={{ color: darkMode ? "#ec4899" : "#3b82f6" }} />
          <Typography variant="h6" fontWeight="bold" sx={{ color: "text.primary" }}>
            SkillSwap
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box
          display="flex"
          alignItems="center"
          gap={{ xs: 1, sm: 2 }}
          sx={{ flexGrow: 1, justifyContent: { xs: "center", sm: "center" }, mt: { xs: 1, sm: 0 } }}
        >
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/explore">Explore</Button> {/* ✅ New Page */}
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/contact">Contact</Button>
        </Box>

        {/* Theme Toggle + Auth Buttons */}
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton onClick={toggleTheme} color="inherit">
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <Button variant="outlined" color="primary" href="/login">
            Login
          </Button>
          <Button variant="contained" color="primary" href="/signup">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
