import React from "react";
import { Box, Typography, Button, Link, Stack } from "@mui/material";

const Header = ({ darkMode, toggleDark }) => (
  <Box textAlign="center" mb={6}>
    <Typography variant="h3" fontWeight="bold">
      𝒩𝒶𝓀𝓊𝓁 𝒮𝒶𝒾𝓃𝒾
    </Typography>
    <Typography variant="subtitle1" sx={{ mb: 2 }}>
      𝑭𝒓𝒐𝒏𝒕𝒆𝒏𝒅 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 | 𝑹𝒆𝒂𝒄𝒕 𝑬𝒏𝒕𝒉𝒖𝒔𝒊𝒂𝒔𝒕
    </Typography>

    <Stack direction="row" justifyContent="center" spacing={3}>
      <Link href="nakul.saini404@gmail.com" color="primary" underline="none">
        Email
      </Link>
      <Link
        href="https://www.linkedin.com/in/nakul-saini404/"
        color="primary"
        underline="none"
      >
        LinkedIn
      </Link>
      <Link
        href="https://github.com/nakul-saini404"
        color="primary"
        underline="none"
      >
        GitHub
      </Link>
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        color="primary"
      >
        View Resume
      </Link>
      <Link href="/resume.pdf" download color="primary" underline="none">
        Download Resume
      </Link>
    </Stack>

    <Button
      size="small"
      onClick={toggleDark}
      sx={{
        position: "absolute",
        top: 50,
        right: 30,
        border: "none",
        outline: "none !important", // removes border
        boxShadow: "none", // optional: removes shadow
        "&:hover": {
          border: "none", // keep it borderless on hover too
        },
      }}
    >
      {darkMode ? "LIGHT MODE" : "DARK MODE"}
    </Button>
  </Box>
);

export default Header;
