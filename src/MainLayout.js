import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkIcon from "@material-ui/icons/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SearchIcon from "@material-ui/icons/Search";
import ShareIcon from "@material-ui/icons/Share";
import YouTubeIcon from "@material-ui/icons/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Document, pdfjs } from "react-pdf";

import {
	Box,
	Button,
	Drawer,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import emailjs from "emailjs-com";
import React, { useEffect, useRef } from "react";
export default function MainLayout() {
	const navJson = [
		{ label: "Home", href: "#", id: "home" },
		{ label: "About", href: "#About", id: "about" },
		{ label: "Education", href: "#education", id: "education" },
		{ label: "Experience", href: "#Experience", id: "experience" },
		{ label: "Project", href: "#portfolio", id: "portfolio" },
		{ label: "Skills", href: "#Skills", id: "Skills" },
		{ label: "Contact", href: "#contact", id: "contact" },

		// "Home",
		// "About",
		// "Education",
		// "Experience",
		// "Project",
		// "Contact",
	];

	const options = {
		cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
	};

	// Inside of React component
	// const emailRef = useRef();
	const formRef = useRef();
	const drawerWidth = 290;
	useEffect(() => emailjs.init("9MBpnKkLeQHaEKD5e"), []);
	const handleSubmit = () => {
		debugger;
		console.log(formRef?.current);
		emailjs.sendForm("contact_service", "contact_form", formRef.current).then(
			function (response) {
				console.log("SUCCESS!", response.status, response.text);
			},
			function (err) {
				console.log("FAILED...", err);
			}
		);
	};
	const drawer = (
		<div class="navbar">
			<List>
				{navJson.map((text, index) => (
					<ListItem
						className="navListOptions"
						key={text}
						disablePadding>
						<ListItemButton
							className="navListOptions"
							// tagtoshow={`#${text.href}`}
							href={text.href}
							// onClick={() => text.href}
						>
							{text.label}
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</div>
	);
	return (
		<Grid className="App">
			<header className="App-header">
				<Link
					href="#"
					class="logo">
					<span>Mahroz</span> fatima
				</Link>
				<Box
					sx={{
						width: { sm: drawerWidth },
						flexShrink: { sm: 0 },
						backgroundColor: "black !important",
					}}>
					<Drawer
						variant="permanent"
						sx={{
							display: { xs: "none", sm: "block" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
								backgroundColor: "#282c34 !important",
							},
						}}
						open>
						<Link
							href="#"
							class="logo">
							<span>Mahroz</span> fatima
						</Link>
						{drawer}
						<Grid className="AppsGrid">
							<IconButton
								color="secondary"
								variant="link"
								href="https://erp.mygstcafe.com/login">
								<FacebookIcon className="follow" />
							</IconButton>

							<IconButton
								color="secondary"
								variant="link"
								href="https://erp.mygstcafe.com/login">
								<InstagramIcon className="follow" />
							</IconButton>

							<IconButton
								color="secondary"
								variant="link"
								href="https://www.youtube.com/channel/UCFdM5EPsidPaDJcKUDRRh5Q">
								<YouTubeIcon className="follow" />
							</IconButton>

							<IconButton
								color="secondary"
								className="follow"
								variant="link"
								href="https://www.linkedin.com/in/mahroz-fatima-5563192a7">
								<LinkedInIcon className="follow" />
							</IconButton>
						</Grid>
					</Drawer>
				</Box>
			</header>

			<Grid
				class="home"
				id="Home">
				<Grid class="content">
					<span class="hi"> hi there... </span>
					<h3>
						i am <span> mahroz fatima </span>
					</h3>
					<Grid class="wrapper">
						<Grid class="static-txt">I'm a</Grid>
						<ul class="dynamic-txts">
							<li>
								<span>YouTuber</span>
							</li>
							<li>
								<span>Designer</span>
							</li>
							<li>
								<span>Developer</span>
							</li>
							<li>
								<span>Freelancer</span>
							</li>
						</ul>
					</Grid>
					<a
						href="#about"
						class="btn">
						about me
						{/* <Document options={options}>test</Document>; */}
					</a>
					<div class="image">{/* <img src="" alt=""> */}</div>
				</Grid>
			</Grid>
			<Grid
				class="about"
				id="About">
				<h1 class="heading">
					about <span> me </span>
				</h1>

				<Grid class="row-1">
					<div class="image">{/* <img src="myimg.jpeg" alt=""> */}</div>

					<div class="content">
						<h3> my name is mahroz fatima & i am a font-end developer </h3>
						<p>
							Hii, my name is Mahroz Fatima I'm a youTuber and Front End
							Developer From Kanpur,India I have 2.5+ year React js experience,I
							have a passion for solving problems i enjoy turning complex
							problem into simple beautiful and intutive interface designs.Let's
							Start scrolling and more about me
						</p>
						<div class="box-container">
							<div class="box">
								<p>
									<span> gender : </span> Female
								</p>
								<p>
									<span> language : </span> hindi, english,urdu
								</p>
								<p>
									<span> work : </span> front-end developer
								</p>
							</div>
							<div class="box">
								<p>
									<span> phone : </span> +918843232647
								</p>
								<p>
									<span> email : </span> mahrozfatima08@gmail.com
								</p>
								<p>
									<span> country : </span> india
								</p>
							</div>
						</div>

						<Button
							sx={{
								fontSize: "15px !important",
							}}
							variant="link"
							color="default"
							className="btn"
							href="Resume_02_10_2024_10_31_02_am.pdf">
							Download Resume
						</Button>
					</div>
				</Grid>
				<Grid
					container
					id="Skills">
					<h1 class="heading">
						<span> my </span> skills
					</h1>
					<Grid
						class="row-2"
						id="Skills">
						<Grid class="skills-bar">
							<div class="bar">
								<div class="info">
									<span>Html</span>
								</div>
								<div class="progress-line">
									<span
										class="html"
										style={{ backgroundColor: "rosybrown" }}></span>
								</div>
							</div>
							<div class="bar">
								<div class="info">
									<span>CSS</span>
								</div>
								<div class="progress-line">
									<span
										class="css"
										style={{ backgroundColor: "palegreen" }}></span>
								</div>
							</div>
							<div class="bar">
								<div class="info">
									<span>javascript</span>
								</div>
								<div class="progress-line">
									<span
										class="javascript"
										style={{ backgroundColor: "yellow" }}></span>
								</div>
							</div>
							<div class="bar">
								<div class="info">
									<span>Mysql</span>
								</div>
								<div class="progress-line">
									<span
										class="mysql"
										style={{ backgroundColor: "teal" }}></span>
								</div>
							</div>
							<div class="bar">
								<div class="info">
									<span>C</span>
								</div>
								<div class="progress-line">
									<span
										class="c"
										style={{ backgroundColor: "brown" }}></span>
								</div>
							</div>
							<div class="bar">
								<div class="info">
									<span>Bootstrap</span>
								</div>
								<div class="progress-line">
									<span
										class="bootstrap"
										style={{ backgroundColor: "skyblue" }}></span>
								</div>
							</div>
							<div class="bar">
								<div class="info">
									<span>java</span>
								</div>
								<div class="progress-line">
									<span
										class="css"
										style={{ backgroundColor: "goldenrod" }}></span>
								</div>
							</div>
							<div class="bar">
								<div class="info">
									<span>React Js</span>
								</div>
								<div class="progress-line">
									<span
										class="react"
										style={{ backgroundColor: "darkseagreen" }}></span>
								</div>
							</div>

							<div class="bar">
								<div class="info">
									<span>Dot Net</span>
								</div>
								<div class="progress-line">
									<span
										class="dotnet"
										style={{ backgroundColor: "rosybrown" }}></span>
								</div>
							</div>
						</Grid>
						<Grid
							container
							class="box-container">
							<Grid
								class="box"
								sx={{ width: "730px" }}>
								<h3>leadership</h3>
								<ul>
									<li>Goal setting</li>
									<li>Motivational skills</li>
									<li>Understanding</li>
								</ul>
							</Grid>
							<Grid class="box">
								<h3> team work </h3>
								<ul>
									<li>Collaboration</li>
									<li>Reliability</li>
									<li>Cooperation</li>
								</ul>
							</Grid>
							<Grid
								class="box"
								size={{ xs: 6, md: 8 }}>
								<h3>flexbility </h3>
								<ul>
									<li>Proactiveness</li>
									<li>Critical thinking</li>
									<li>Curiosity</li>
									<li>Patience</li>
								</ul>
							</Grid>
							<Grid
								class="box"
								size={{ xs: 6, md: 8 }}>
								<h3> Problem solving </h3>
								<ul>
									<li>Analysis</li>
									<li>Creativity</li>
									<li>Remaining calm during stressful situations</li>
								</ul>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					class="experience"
					id="Experience">
					<h1 class="heading">
						{" "}
						<span> my </span> experience{" "}
					</h1>

					<Grid class="box-container">
						<Grid class="box">
							<div class="content">
								<h3> 2022 - 2024 </h3>
								<h2>
									React Front-End Development: <span>Opticode-myGSTcafe</span>{" "}
								</h2>
								<h4 class="company">
									project:{" "}
									<span>
										Avinay ERP
										<a href="https://erp.mygstcafe.com/login">
											{" "}
											erp.mygstcafe.com
										</a>{" "}
									</span>{" "}
								</h4>
								<h4 class="company">
									Descriptions:
									<ul>
										<li class="companyProject">
											Enterprise Resource Planning (ERP) refers to a type of
											Software Developed reusable React.JS components, improving
											code manageability and reusability by 60%
										</li>
										<li class="companyProject">
											Designed multiple pages with different functions using
											React js and used React-router to navigate these
											pages(product list pages,product details pages,product
											creation and edit pages,customer cart page and customer
											login page) with user friendly flow when switching
										</li>
										<li class="companyProject">
											Used Lifecycle Methods,state,props,forms and events to
											implement interactive React component
										</li>
										<li class="companyProject">
											developing resuable frent-end
											components(headers,bodies,footer and so on)using react js
										</li>
										<li class="companyProject">
											Used react hooks to use state and lifecycle methods inside
											functional components to decrease complexity and improve
											maintainability and extensibility of system
										</li>
									</ul>
								</h4>
							</div>
						</Grid>
					</Grid>
				</Grid>
				<section
					class="portfolio"
					id="portfolio">
					<h1 class="heading">
						{" "}
						<span> my </span> Projects{" "}
					</h1>

					<div class="box-container">
						<div class="box">
							{/* <img src="imagesMygstcafe.jpg" alt="My GST Cafe Logo"> */}

							<h3> project 01 </h3>
							<div class="icons">
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<LinkIcon />}
									href="https://erp.mygstcafe.com/login"
								/>
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<SearchIcon />}
									href="https://www.google.com"
								/>
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<ShareIcon />}
									href="https://erp.mygstcafe.com/login"
								/>
							</div>
						</div>

						<div class="box">
							{/* <img src="images/img-2.jpg" alt=""> */}
							<h3> project 02 </h3>
							<div class="icons">
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<LinkIcon />}
									href="https://erp.mygstcafe.com/login"
								/>
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<SearchIcon />}
									href="https://www.google.com"
								/>
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<ShareIcon />}
									href="https://erp.mygstcafe.com/login"
								/>
							</div>
						</div>

						<div class="box">
							{/* <img src="images/img-3.jpg" alt=""> */}
							<h3> project 03 </h3>
							<div class="icons">
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<LinkIcon />}
									href="https://erp.mygstcafe.com/login"
								/>
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<SearchIcon />}
									href="https://www.google.com"
								/>
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<ShareIcon />}
									href="https://erp.mygstcafe.com/login"
								/>
							</div>
						</div>

						<div class="box">
							{/* <img src="images/img-4.jpg" alt=""> */}
							<h3> project 04 </h3>
							<div class="icons">
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<LinkIcon />}
									href="https://erp.mygstcafe.com/login"
								/>
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<SearchIcon />}
									href="https://www.google.com"
								/>
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<ShareIcon />}
									href="https://erp.mygstcafe.com/login"
								/>
							</div>
						</div>

						<div class="box">
							{/* <img src="images/img-5.jpg" alt=""> */}
							<h3> project 05 </h3>
							<div class="icons">
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<LinkIcon />}
									href="https://erp.mygstcafe.com/login"
								/>
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<SearchIcon />}
									href="https://www.google.com"
								/>
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<ShareIcon />}
									href="https://erp.mygstcafe.com/login"
								/>
							</div>
						</div>

						<div class="box">
							{/* <img src="images/img-6.jpg" alt=""> */}
							<h3> project 06 </h3>
							<div class="icons">
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<LinkIcon />}
									href="https://erp.mygstcafe.com/login"
								/>
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<SearchIcon />}
									href="https://www.google.com"
								/>
								<Button
									variant="link"
									color="default"
									// className={classes.signInButton}
									startIcon={<ShareIcon />}
									href="https://erp.mygstcafe.com/login"
								/>
							</div>
						</div>
					</div>
				</section>
				<Grid
					container
					class="education"
					id="education">
					<h1 class="heading">
						<span> my </span> education
					</h1>
					<div class="box-container">
						<div class="box">
							<div class="content">
								<span> 2012 - 2013 </span>
								<h3>High school</h3>
								<p>
									I have completed my 10th class with 64% from aisha siddiqua
									girls inter college in kanpur up board
								</p>
							</div>
						</div>

						<div class="box">
							<div class="content">
								<span> 2014 - 2015 </span>
								<h3> intermediate</h3>
								<p>
									{" "}
									I have completed my 12th class with 72% from aisha siddiqua
									girls inter college, in kanpur up board.
								</p>
							</div>
						</div>

						<div class="box">
							<div class="content">
								<span> 2019 - 2021 </span>
								<h3>Bachelor Of Computer Application (BCA)</h3>
								<p>
									I have completed my graduation with 59.86% from Axis Institute
									Of Higher Education,CSJMU in kanpur.{" "}
								</p>
							</div>
						</div>

						<div class="box">
							<div class="content">
								<span> 2022 - 2024 </span>
								<h3>Master Of Computer Application (MCA)</h3>
								<p>
									I have completed my Post graduation with 76% from J.S
									university in Shikohabad
								</p>
							</div>
						</div>
					</div>
				</Grid>
				<section
					class="contact"
					id="contact">
					<h1 class="heading">
						{" "}
						contact <span> me </span>{" "}
					</h1>

					<div class="icons-container">
						<div class="icons">
							<i class="fas fa-envelope"></i>
							<h3>my email</h3>
							<p>mahrozfatima2020@gmail.com</p>
							<p>mahrozfatima08@gmail.com</p>
						</div>

						<div class="icons">
							<i class="fas fa-phone"></i>
							<h3>my number</h3>
							<p>+919305396023</p>
							<p>+918840232647</p>
						</div>

						<div class="icons">
							<i class="fas fa-map-marker-alt"></i>
							<h3>my address</h3>
							<p>loha mandi kanpur, uttar pardesh, india - 208001</p>
						</div>
					</div>
					<div class="row">
						<form
							ref={formRef}
							onSubmit={handleSubmit}>
							<input
								type="text"
								placeholder="Name"
								id="name"
								name="name"
								class="box"></input>
							<input
								type="text"
								// ref={formRef}
								placeholder="Email"
								id="email"
								name="email"
								class="box"></input>
							<textarea
								placeholder="Message"
								id="message"
								name="message"
								cols="30"
								rows="10"></textarea>
							<Button
								type="submit"
								onClick={handleSubmit}
								class="btn">
								Send message
							</Button>
							<IconButton
								className="whatsappIcon"
								variant="link"
								href="https://api.whatsapp.com/send?phone=8840232647"
								target="_blank">
								<WhatsAppIcon />
							</IconButton>
						</form>
					</div>
				</section>
				<footer class="footer">
					created by <span> mahroz fatima </span> | all rights reserved!{" "}
				</footer>
			</Grid>
		</Grid>
	);
}
