// ProjectList.js
import React from "react";
import { Grid, Card, CardContent, Typography, Link } from "@mui/material";



const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website built with React and Material UI, showcasing projects and a contact form.",
    link: "https://github.com/nakul-saini404/PortFolio_SIte",
  },
  {
    title: "E-commerce App",
    description: "A responsive e-commerce frontend built using React and Bootstrap.",
    link: "https://github.com/nakul-saini404/E-commerce-app",
  },
  {
    title: "Theme Switcher",
    description: "A theme switcher project for learn how to implement theme switcher.",
    link: "https://github.com/nakul-saini404/themeSwitcher",
  },
  {
    title: "ToDo",
    description: "A todo project that add todos list, edit it and delete it",
    link: "https://github.com/nakul-saini404/10TodoContext",
  },
];

export default function ProjectList() {


  return (
    <Grid container spacing={1} sx={{ mt: 2 }}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card elevation={4}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {project.description}
              </Typography>
              <Link href={project.link} target="_blank" rel="noopener" underline="hover">
                View Project Code On My GitHub
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
