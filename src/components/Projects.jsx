import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Link,
  useTheme,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const projects = [
  {
    title: "Smart Financial Calculators",
    desc: "A fully responsive financial calculator platform built with React, Material UI, and modern UI practices, providing tools like EMI, SIP, GST, tax, etc.",
    icon: <WebIcon />,
    link2: "https://finance-calculator-llkvripfj-nakul-sainis-projects-761249f0.vercel.app/",
    link: "https://github.com/nakul-saini404/Finance_calculator",
  },
  {
    title: "E-commerce App",
    desc: "A responsive e-commerce frontend built using React and Bootstrap.",
    icon: <ShoppingCartIcon />,
    link: "https://github.com/nakul-saini404/E-commerce-app",
    link2: "https://nakul-saini404.github.io/E-commerce-app/",
  },
  {
    title: "Theme Switcher",
    desc: "A theme switcher project to learn how to implement theme switcher.",
    icon: <SettingsIcon />,
    link: "https://github.com/nakul-saini404/themeSwitcher",
    link2: "https://nakul-saini404.github.io/Font-generator",
  },
  {
    title: "ToDo",
    desc: "A todo project that adds todos list, edits it, and deletes it.",
    icon: <CheckCircleIcon />,
    link: "https://github.com/nakul-saini404/10TodoContext",
    link2: "https://nakul-saini404.github.io/Font-generator",
  },
  {
    title: "Font Generator",
    desc: "Generate stylish and fancy fonts instantly. Perfect for creating unique usernames, bios, and captions for social media.",
    icon: <AutoAwesomeIcon />,
    link: "https://github.com/nakul-saini404/Font-generator",
    link2: "https://nakul-saini404.github.io/Font-generator",
  },
  {
    title: "Portfolio Website",
    desc: "A personal website built with React and Material UI, showcasing projects and a contact form.",
    icon: <WebIcon />,
    link: "https://github.com/nakul-saini404/PortFolio_SIte",
    link2: "https://nakul-saini404.github.io/PortFolio_Site/",
  },
];

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box sx={{ padding: "50px 0" }}>
      <Typography
        variant="h3"
        gutterBottom
        fontWeight="bold"
        my={6}
        textAlign="center"
      >
        𝑷𝒓𝒐𝒋𝒆𝒄𝒕𝒔
      </Typography>

      <Grid container spacing={3} width="95%" margin="auto">
        {projects.map((p, i) => (
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} key={i}>
            <Card
              elevation={3}
              sx={{
                height: "100%",          // ← fills the Grid cell height
                display: "flex",         // ← makes Card a flex container
                flexDirection: "column", // ← stacks children vertically
                color: isDark ? "#fff" : "#111",
                borderRadius: "16px",
                background: isDark
                  ? "linear-gradient(145deg, #1b1e24, #20242c)"
                  : "linear-gradient(145deg, #ffffff, #f0f0f0)",
                boxShadow: isDark
                  ? "0 4px 20px rgba(0,0,0,0.4)"
                  : "0 4px 20px rgba(0,0,0,0.1)",
                pt: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: isDark
                    ? "0 8px 25px rgba(0,0,0,0.6)"
                    : "0 8px 25px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",         // ← flex column inside card
                  flexDirection: "column",
                  flex: 1,                 // ← stretches to fill card height
                }}
              >
                {/* Icon circle */}
                <Box
                  sx={{
                    width: 260,
                    height: 260,
                    background: isDark
                      ? "linear-gradient(135deg, rgba(0,200,255,0.15), rgba(0,150,255,0.1))"
                      : "linear-gradient(135deg, rgba(25,118,210,0.1), rgba(25,118,210,0.05))",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                    mb: 2,
                  }}
                >
                  {React.cloneElement(p.icon, {
                    sx: { fontSize: 200, color: theme.palette.primary.main },
                  })}
                </Box>

                {/* Title */}
                <Typography variant="h6" sx={{ textAlign: "center", px: 3 }} gutterBottom>
                  {p.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{ margin: "auto", mb: 2, textAlign: "center", maxWidth: "80%" }}
                >
                  {p.desc}
                </Typography>

                {/* Links — pushed to bottom */}
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mt: "auto" }}  // ← pushes this row to the card bottom
                >
                  <Link
                    href={p.link}
                    sx={{
                      textAlign: "center",
                      width: "100%",
                      display: "inline-block",
                      color: theme.palette.primary.main,
                      mt: 2,
                    }}
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                  >
                    View Code On My GitHub
                  </Link>
                  <Link
                    href={p.link2}
                    sx={{
                      textAlign: "center",
                      width: "100%",
                      display: "inline-block",
                      color: theme.palette.primary.main,
                      mt: 2,
                    }}
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                  >
                    View Project Live
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;