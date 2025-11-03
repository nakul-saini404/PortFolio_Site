// // ProjectList.js
// import React from "react";
// import { Grid, Card, CardContent, Typography, Link,Box } from "@mui/material";



// const projects = [
//   {
//     title: "Portfolio Website",
//     description: "A personal website built with React and Material UI, showcasing projects and a contact form.",
//     link: "https://github.com/nakul-saini404/PortFolio_SIte",
//   },
//   {
//     title: "E-commerce App",
//     description: "A responsive e-commerce frontend built using React and Bootstrap.",
//     link: "https://github.com/nakul-saini404/E-commerce-app",
//   },
//   {
//     title: "Theme Switcher",
//     description: "A theme switcher project for learn how to implement theme switcher.",
//     link: "https://github.com/nakul-saini404/themeSwitcher",
//   },
//   {
//     title: "ToDo",
//     description: "A todo project that add todos list, edit it and delete it",
//     link: "https://github.com/nakul-saini404/10TodoContext",
//   },
// ];

// export default function ProjectList() {


//   return (
//     <div>
//       <Grid container spacing={3}>
//       {projects.map((project, index) => (
//         <Grid item xs={12} sm={6} md={3} key={index}>
//           <Card elevation={3} sx={{ height: "100%", p: 1 }}>
//             <CardContent>
//               <Box sx={{ mb: 2 }}>{project.icon}</Box>
//               <Typography variant="h6" gutterBottom>{project.title}</Typography>
//               <Typography variant="body2" sx={{ mb: 2 }}>{project.desc}</Typography>
//               <Link href={project.link} color="primary" underline="hover">
//                 View Project Code On My GitHub
//               </Link>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//     </div>
  
//   );
// }
