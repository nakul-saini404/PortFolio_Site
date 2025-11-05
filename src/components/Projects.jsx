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

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal website built with React and Material UI, showcasing projects and a contact form.",
    icon: <WebIcon />,
    link: "https://github.com/nakul-saini404/PortFolio_SIte",
    link2:"https://nakul-saini404.github.io/PortFolio_Site/",
  },
  {
    title: "E-commerce App",
    desc: "A responsive e-commerce frontend built using React and Bootstrap.",
    icon: <ShoppingCartIcon />,
    link: "https://github.com/nakul-saini404/E-commerce-app",
  },
  {
    title: "Theme Switcher",
    desc: "A theme switcher project to learn how to implement theme switcher.",
    icon: <SettingsIcon />,
    link: "https://github.com/nakul-saini404/themeSwitcher",
  },
  {
    title: "ToDo",
    desc: "A todo project that adds todos list, edits it, and deletes it.",
    icon: <CheckCircleIcon />,
    link: "https://github.com/nakul-saini404/10TodoContext",
  },
];

const Projects = () => {
  // ✅ useTheme() must be called at the top of the component, not inside JSX
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box  sx={{padding:"50px 0"}}>
      <Typography variant="h3" gutterBottom fontWeight="bold" my={6} textAlign="center">
        Projects
      </Typography>

      <Grid container spacing={3} width={"95%"} margin="auto">
        {projects.map((p, i) => (
          <Grid size={{ xs: 12,sm:6, md: 6, lg:3  }} key={i}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                color: isDark ? "#fff" : "#111",
                borderRadius: "16px",
                background: isDark
                  ? "linear-gradient(145deg, #1b1e24, #20242c)"
                  : "linear-gradient(145deg, #ffffff, #f0f0f0)",
                boxShadow: isDark
                  ? "0 4px 20px rgba(0, 0, 0, 0.4)"
                  : "0 4px 20px rgba(0, 0, 0, 0.1)",
                pt: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: isDark
                    ? "0 8px 25px rgba(0, 0, 0, 0.6)"
                    : "0 8px 25px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    background: isDark
                      ? "linear-gradient(135deg, rgba(0,200,255,0.15), rgba(0,150,255,0.1))"
                      : "linear-gradient(135deg, rgba(25,118,210,0.1), rgba(25,118,210,0.05))",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    margin: "auto",
                    mb: 2,
                  }}
                >
                  {React.cloneElement(p.icon, {
                    sx: { fontSize: 40, color: theme.palette.primary.main },
                  })}
                </Box>

                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", px: 3 }}
                  gutterBottom
                >
                  {p.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    margin: "auto",
                    mb: 2,
                    textAlign: "center",
                    maxWidth: "80%",
                    
                  }}
                >
                  {p.desc}
                </Typography>
                <Box display={"flex"} alignItems="center"  justifyContent="soace-between" >
                     <Link
                  href={p.link}
                  sx={{
                    textAlign: "center",
                    margin: "auto",
                    width: "100%",
                    display: "inline-block",
                    color: theme.palette.primary.main,
                    mt:2
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
                    margin: "auto",
                    width: "100%",
                    display: "inline-block",
                    color: theme.palette.primary.main,
                    mt:2
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

