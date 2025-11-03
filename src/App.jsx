import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState } from "react";
import { Container, CssBaseline, createTheme, ThemeProvider, Button } from "@mui/material";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactForm from "./components/ContactForm";


const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#1976d2" },
      background: { default: darkMode ? "#0e0f12" : "#f5f5f5", paper: darkMode ? "#1c1c22" : "#ffffff" },
    },
    typography: { fontFamily: "'Roboto', sans-serif" },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ py: 5 }} maxWidth="none !important">
        <Header darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />
        <Projects />
        <About />
        <ContactForm />
      </Container>
    </ThemeProvider>
  );
};

export default App;

