import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Header = ({ darkMode, toggleDark }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // ✅ Works on both localhost AND GitHub Pages (e.g. /repo-name/resume.pdf)
  const resumeUrl = `${import.meta.env.BASE_URL}/resume.pdf`;

  return (
    <Box textAlign="center" mb={6} sx={{ px: isSmallScreen ? 2 : 0 }}>
      {/* Name */}
      <Typography
        variant={isSmallScreen ? "h4" : "h3"}
        fontWeight="bold"
        sx={{ lineHeight: 1.2 }}
      >
        𝒩𝒶𝓀𝓊𝓁 𝒮𝒶𝒾𝓃𝒾
      </Typography>

      {/* Subtitle */}
      <Typography
        variant={isSmallScreen ? "body1" : "subtitle1"}
        sx={{ mb: 3, fontSize: isSmallScreen ? "0.9rem" : "1rem" }}
      >
        𝑭𝒓𝒐𝒏𝒕𝒆𝒏𝒅 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 | 𝑹𝒆𝒂𝒄𝒕 𝑬𝒏𝒕𝒉𝒖𝒔𝒊𝒂𝒔𝒕
      </Typography>

      {/* Links */}
      <Stack
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        spacing={isSmallScreen ? 2 : 3}
        sx={{ rowGap: isSmallScreen ? 2 : 0 }}
      >
        {[
          { href: "mailto:nakul.saini404@gmail.com", label: "Email" },
          { href: "https://www.linkedin.com/in/nakul-saini404/", label: "LinkedIn", target: "_blank" },
          { href: "https://github.com/nakul-saini404", label: "GitHub", target: "_blank" },
          { href: resumeUrl, label: "View Resume", target: "_blank" },
          { href: resumeUrl, label: "Download Resume", download: "Nakul-Saini-Resume.pdf" },
        ].map((link, i) => (
          <Stack
            key={i}
            sx={{
              width: isSmallScreen ? "45%" : "auto",
              textAlign: "center",
            }}
          >
            <Link
              href={link.href}
              color="primary"
              underline="none"
              target={link.target}
              rel={link.target ? "noopener noreferrer" : undefined}
              download={link.download}
              sx={{
                fontWeight: 600,
                fontSize: isSmallScreen ? "0.9rem" : "1rem",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {link.label}
            </Link>
          </Stack>
        ))}
      </Stack>

      {/* Theme toggle */}
      <Button
        size="small"
        onClick={toggleDark}
        sx={{
          position: "absolute",
          top: isSmallScreen ? 20 : 50,
          right: isSmallScreen ? 10 : 30,
          fontSize: isSmallScreen ? "0.75rem" : "0.85rem",
          border: "none",
          outline: "none !important",
          boxShadow: "none",
          "&:hover": { border: "none" },
        }}
      >
        {darkMode ? "LIGHT MODE" : "DARK MODE"}
      </Button>
    </Box>
  );
};

export default Header;