import React from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import aboutImg from "../assets/about1.jpg";

const About = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box sx={{ padding: "50px 0" }} width="90%" mx="auto">
      <Typography
        variant="h3"
        gutterBottom
        fontWeight="bold"
        mb={5}
        textAlign={"center"}
      >
        About Me
      </Typography>
      <Paper
        sx={{
          p: 6,
          borderRadius: 3,
          background: isDark
            ? "linear-gradient(145deg, #1c1f26, #20242c)"
            : "linear-gradient(145deg, #ffffff, #f5f5f5)",
          color: theme.palette.text.primary,
        }}
        elevation={3}
      >
        <Grid container spacing={2} alignItems="center" direction={{xs: "column-reverse",sm: "column-reverse",md: "column-reverse", lg: "row" }} >
          {/* 📝 Left Side - Text */}
           
          <Grid size={{ xs: 12, md: 12 ,lg:7}}>
            <Typography variant="body1" mb={2} lineHeight={1.9}>
              
              I’m a passionate <strong>frontend developer</strong> driven by
              creativity and a love for crafting interactive digital
              experiences. I specialize in building responsive, user-friendly,
              and visually appealing web applications using <strong>React, Material UI,
              and modern JavaScript.</strong>
            </Typography>

            <Typography variant="body1" mb={2} lineHeight={1.9}>
                I enjoy transforming complex ideas into elegant, intuitive, and high-performing interfaces that delight users. For me, great design isn’t just about aesthetics—it’s about creating experiences that feel effortless and meaningful.
            </Typography>

             <Typography variant="body1" mb={2} lineHeight={1.9}>
               I’m constantly exploring new technologies to stay ahead of the curve, focusing on<strong>performance optimization, accessibility, and smooth user experience</strong>  across all devices.
            </Typography>
             <Typography variant="body1" mb={2} lineHeight={1.9}>
               When I’m not coding, you’ll find me exploring new UI trends, experimenting with color palettes, or brainstorming design ideas over coffee ☕.
            </Typography>
            <Typography variant="body1" lineHeight={1.9}>
             My goal is to keep learning, growing, and building products that not only work flawlessly but also inspire and connect with people.
            </Typography>
          </Grid>

          {/* 🖼️ Right Side - Image */}
         <Grid size={{ xs: 12, md: 12,lg:5 }}>
            <Box
              component="img"
              src={aboutImg}
              alt="About me illustration"
              sx={{
                width: "100%",
                maxWidth: "480px",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default About;
