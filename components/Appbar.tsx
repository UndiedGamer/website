import Link from "next/link";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { LightMode, DarkMode } from '@mui/icons-material';
import useDarkMode from "../hooks/useDarkMode";

const Appbar = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" className="dark:bg-inherit">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Text
          </Typography>
          <div className="grid grid-cols-4">
            <span onClick={handleMode}>
              {!darkTheme ? (
                <LightMode className="top-navigation-icon" />
              ) : (
                <DarkMode className="top-navigation-icon" />
              )}
            </span>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Me</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
