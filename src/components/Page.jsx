import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Link,
  Grid,
  CssBaseline,
  TextField,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import ProjectList from "../portFolioLIst/ProjectList";
import { Snackbar, Alert } from "@mui/material";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? grey[900] : "#f5f5f5",
      },
    },
    typography: {
      fontSize: 14,
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            margin: "0 auto",
            maxWidth: "inherit !important",
          },
        },
      },
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xqaldpvz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);
        e.target.reset();
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          py: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h2" align="center" gutterBottom>
            Nakul Saini
          </Typography>
          <Button
            variant="outlined"
            onClick={() => setDarkMode(!darkMode)}
            sx={{ mb: 4, position: "absolute", top: "12%", right: "4%" }}
          >
            {darkMode ? "Light" : "Dark"} Mode
          </Button>
        </Box>

        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          Frontend Developer | React Enthusiast
        </Typography>

        <Grid container justifyContent="center" spacing={2} sx={{ my: 2 }}>
          <Grid item>
            <Link href="nakul.saini404@gmail.com" underline="hover">
              Email
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://www.linkedin.com/in/nakul-saini404/"
              underline="hover"
            >
              LinkedIn
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://github.com/nakul-saini404" underline="hover">
              GitHub
            </Link>
          </Grid>
          <Grid item>
            <Link href="/resume.pdf" download underline="hover">
              Download Resume
            </Link>
          </Grid>
        </Grid>

        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom align="left">
            Projects
          </Typography>

          <ProjectList />

          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" gutterBottom align="left">
              About Me
            </Typography>
            <Typography variant="body1" color="text.secondary">
              I’m a passionate frontend developer who loves building responsive
              and user-friendly web apps. I enjoy working with React and
              continuously learning new technologies to improve my craft.
            </Typography>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" gutterBottom align="left">
              Contact Me
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                fullWidth
                name="name"
                label="Name"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                name="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}

              />
              <Button variant="contained" type="submit">
                Send Message
              </Button>
            </Box>

            <Snackbar
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={handleClose}
                severity={success ? "success" : "error"}
                sx={{ width: "100%" }}
              >
                {success
                  ? "Message sent successfully!"
                  : "Failed to send message."}
              </Alert>
            </Snackbar>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
