import { Box, Typography, TextField, Button, Paper, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(true);
  const theme = useTheme(); // ✅ Get current theme (dark/light)

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
    <Box
      sx={{
        height: "100%",
        p: 3,
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
    >
      <Typography variant="h3" gutterBottom fontWeight="bold">
        Contact Me
      </Typography>

      <Paper
        sx={{
        //   p: 3,
          
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(145deg, #1c1f26, #20242c)"
              : "linear-gradient(145deg, #ffffff, #f9f9f9)",
          color: theme.palette.text.primary,
        }}
        elevation={2}
      >
        <form onSubmit={handleSubmit}>
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
            type="submit"
          >
            SEND MESSAGE
          </Button>
        </form>

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
