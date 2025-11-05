import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import bgImage from "../assets/contactus.jpg";

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(true);
  const theme = useTheme(); // ✅ Get current theme (dark/light)
  const isDark = theme.palette.mode === "dark";

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

  const handleClose = () => setOpen(false);

  return (
    <>
    <Typography
        variant="h3"
        gutterBottom
        fontWeight="bold"
        textAlign={"center"}
        mt={5}
      >
        𝒞𝑜𝓃𝓉𝒶𝒸𝓉 𝑀𝑒
      </Typography>
      <Box
      mt={4}
      sx={{
        height: "100%",
        width: "90%",
        margin: "auto",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        borderRadius: "16px", 
      }}
    >
      
 
      <Grid container spacing={3} onSubmit={handleSubmit}>
        <Grid size={{ xs: 12, sm: 12, md: 6 }} >
          <Paper
            sx={{
              p: 1,
              mb: 2,
              mt: 2,
              ml:6,
              display:"inline-block",
              borderRadius: "16px",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(145deg, #1b1e24, #20242c)"
                  : "linear-gradient(145deg, #ffffff, #f4f4f4)",
              color: theme.palette.text.primary,
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
              },
            }}
            elevation={3}
          >
            <Typography variant="h5" fontWeight="600">
              Let's connect 🤝
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 1,
              mb: 2,
              ml:6,
              display:"inline-block",
              borderRadius: "16px",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(145deg, #1b1e24, #20242c)"
                  : "linear-gradient(145deg, #ffffff, #f4f4f4)",
              color: theme.palette.text.primary,
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
              },
            }}
            elevation={3}
          >
            <Typography variant="body1" color="text.secondary">
              Feel free to reach out for any query, freelance work, or just to
              say hi. I’ll get back to you as soon as possible!
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 1,
              mb: 2,
              ml:6,
              borderRadius: "16px",
              display:"inline-block",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(145deg, #1b1e24, #20242c)"
                  : "linear-gradient(145deg, #ffffff, #f4f4f4)",
              color: theme.palette.text.primary,
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
              },
            }}
            elevation={3}
          >
            <Typography variant="body1" color="text.secondary">
              📍 Location: India
            </Typography>
          </Paper>
           <Paper
            sx={{
              p: 1,
              mb: 2,
              ml:6,
              borderRadius: "16px",
              display:"inline-block",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(145deg, #1b1e24, #20242c)"
                  : "linear-gradient(145deg, #ffffff, #f4f4f4)",
              color: theme.palette.text.primary,
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
              },
            }}
            elevation={3}
          >
            <Typography variant="body1" color="text.secondary">
               📧 Email: nakul.saini404@gmail.com
            </Typography>
          </Paper>
           <Paper
            sx={{
              p: 1,
              mb: 2,
              ml:6,
              borderRadius: "16px",
              display:"inline-block",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(145deg, #1b1e24, #20242c)"
                  : "linear-gradient(145deg, #ffffff, #f4f4f4)",
              color: theme.palette.text.primary,
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
              },
            }}
            elevation={3}
          >
            <Typography variant="body1" color="text.secondary">
              💼 LinkedIn: www.linkedin.com/in/nakul-saini404
            </Typography>
          </Paper>
         
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Paper
            sx={{
              p: 1,
              ml:6,
              borderRadius: "16px",
              display:"inline-block",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(145deg, #1b1e24, #20242c)"
                  : "linear-gradient(145deg, #ffffff, #f4f4f4)",
              color: theme.palette.text.primary,
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
              },
            }}
            elevation={3}
          >
            <TextField label="Name" variant="outlined" fullWidth required />
          </Paper>
            
             <Paper
            sx={{
              p: 1,
              ml:6,
              borderRadius: "16px",
              display:"inline-block",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(145deg, #1b1e24, #20242c)"
                  : "linear-gradient(145deg, #ffffff, #f4f4f4)",
              color: theme.palette.text.primary,
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
              },
            }}
            elevation={3}
          >
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              required
            />
          </Paper>
            
                 <Paper
            sx={{
              p: 1,
              ml:6,
              borderRadius: "16px",
              display:"inline-block",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(145deg, #1b1e24, #20242c)"
                  : "linear-gradient(145deg, #ffffff, #f4f4f4)",
              color: theme.palette.text.primary,
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
              },
            }}
            elevation={3}
          >
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
            />
          </Paper>
           
                  <Paper
            sx={{
              p: 1,
              ml:6,
              mb: 4,
              width: "fit-content",
              borderRadius: "16px",
              display:"inline-block",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(145deg, #1b1e24, #20242c)"
                  : "linear-gradient(145deg, #ffffff, #f4f4f4)",
              color: theme.palette.text.primary,
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
              },
            }}
            elevation={3}
          >
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              sx={{
                py: 1.2,
                fontWeight: 600,
                fontSize: "1rem",
                display:"inline-block",
                borderRadius: "8px",
                background: isDark
                  ? "linear-gradient(90deg, #2196F3, #00BCD4)"
                  : "linear-gradient(90deg, #1976D2, #42A5F5)",
                "&:hover": {
                  transform: "scale(1.02)",
                  transition: "0.3s",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                },
              }}
            >
              Send Message
            </Button>
          </Paper>

            
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
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6 }}></Grid>
      </Grid>
    </Box>
    </>
  
  );
}
