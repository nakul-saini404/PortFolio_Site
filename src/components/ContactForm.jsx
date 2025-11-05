import { Box, Typography, TextField, Button, Paper, Snackbar, Alert ,Grid} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";


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
    <Box mt={4}
      sx={{
        height: "100%",
        width:"90%",
        margin:"auto",

        // p: 3,
        
        // boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
        // transition: "transform 0.3s ease, box-shadow 0.3s ease",
        // background:
        //   theme.palette.mode === "dark"
        //     ? "linear-gradient(145deg, #1b1e24, #20242c)"
        //     : "linear-gradient(145deg, #ffffff, #f4f4f4)",
        // color: theme.palette.text.primary,
        // "&:hover": {
        //   transform: "translateY(-6px)",
        //   boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
        // },
      }}
    >
      <Typography variant="h3" gutterBottom fontWeight="bold" textAlign={"center"}>
        Contact Me
      </Typography>

      <Paper
        sx={{
          p: 3,
          borderRadius: "16px",
        //   background:
        //     theme.palette.mode === "dark"
        //       ? "linear-gradient(145deg, #1c1f26, #20242c)"
        //       : "linear-gradient(145deg, #ffffff, #f9f9f9)",
        //   color: theme.palette.text.primary,
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
        elevation={2}
      >
        <Grid container spacing={3} onSubmit={handleSubmit} >
          <Grid size={{ xs: 12,sm:12, md: 6 }} >
            <Typography variant="h5" fontWeight="600" mb={2}>
              Let's connect 🤝
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Feel free to reach out for any query, freelance work, or just
              to say hi. I’ll get back to you as soon as possible!
            </Typography>

            <Typography variant="body2" color="text.secondary"mb={3}>
              📍 Location: India  
             
            </Typography>
            <Typography variant="body2" color="text.secondary"mb={3}>
              
              📧 Email: nakul.saini404@gmail.com 
              
            </Typography>
            <Typography variant="body2" color="text.secondary"mb={3}>
              
              💼 LinkedIn: www.linkedin.com/in/nakul-saini404
            </Typography>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12,sm:12, md: 6 }} >
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                required
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
              />

              <Button
                variant="contained"
                endIcon={<SendIcon />}
                type="submit"
                sx={{
                  mt: 2,
                  py: 1.2,
                  fontWeight: 600,
                  fontSize: "1rem",
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
            </Box>
          </Grid>
        </Grid>
        {/* <form >
          <TextField
            label="Name *"
            name="name"
            fullWidth
            margin="normal"
            required
            variant="outlined"
            color="primary"
          />
          <TextField
            label="Email *"
            name="email"
            fullWidth
            margin="normal"
            required
            type="email"
            variant="outlined"
            color="primary"
          />
          <TextField
            label="Message *"
            name="message"
            fullWidth
            margin="normal"
            required
            multiline
            rows={4}
            variant="outlined"
            color="primary"
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1.2 }}
            
          >
            SEND MESSAGE
          </Button>
        </form> */}

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
      </Paper>
    </Box>
  );
}


