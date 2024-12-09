// import logo from "./logo.svg";
// import "./App.css";
// import { Grid2, Button, TextField, Link } from "@mui/material";

// function App() {
// 	return (
// 		<Grid2 className="App">
// 			<header className="App-header">
// 				<Link
// 					href="#"
// 					class="logo">
// 					<span>Mahroz</span> fatima{" "}
// 				</Link>

// 				<nav class="navbar">
// 					<a href="#home">Home</a>
// 					<a href="#about">About</a>
// 					<a href="#education">Education</a>
// 					<a href="#experience">Experience</a>
// 					<a href="#portfolio">Project</a>
// 					<a href="#contact">Contact</a>
// 				</nav>
// 				<div class="follow">
// 					<a
// 						href="#"
// 						class="fab fa-facebook-f"></a>
// 					<a
// 						href="#"
// 						class="fab fa-youtube"></a>
// 					<a
// 						href="#"
// 						class="fab fa-instagram"></a>
// 					<a
// 						href="#"
// 						class="fab fa-linkedin"></a>
// 				</div>
// 			</header>
// 		</Grid2>
// 	);
// }

// export default App;
///////////////////////////////////////////////////////////
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainLayout from "./MainLayout";
import "./App.css";

// const theme = createTheme();

function App() {
	return (
		// <ThemeProvider theme={theme}>
		<MainLayout />
		// </ThemeProvider>
	);
}

export default App;
