// import { MicNone } from "@mui/icons-material";
// import { createTheme } from "@mui/material";
// export const Theme = createTheme({
// 	typography: {
// 		fontFamily:
// 			"InterVariable,Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
// 		h3: {
// 			fontSize: "13px",
// 			fontWeight: "500 ",
// 			marginTop: "3px !important",
// 			marginBottom: "2px !important",
// 			color: "rgb(23,23,23)",
// 		},
// 		h5: {
// 			fontSize: "12px ",
// 			marginTop: "12px",
// 		},
// 		button: {
// 			textTransform: "none",
// 		},
// 	},
// 	shape: {
// 		borderColor: "rgb(224, 227, 231)",
// 	},
// 	components: {
// 		MuiInputLabel: {
// 			styleOverrides: {
// 				root: {
// 					fontSize: 13,
// 					fontWeight: 420,
// 					color: "#383838",
// 					transform: "translate(4px, -20px) scale(1)",
// 				},
// 				outlined: {
// 					" &.MuiFormLabel-root.MuiInputLabel-root.Mui-error.Mui-focused": {
// 						color: "#b20000 !important",
// 					},
// 					"&.MuiFormLabel-root.MuiInputLabel-root.Mui-error": {
// 						color: "#b20000",
// 					},

// 					"&.Mui-focused": {
// 						fontSize: 13,
// 						color: "#171717 !important", // Focus time All field label Color change
// 						padding: "0px",
// 						fontWeight: 600,
// 					},
// 					InputLabelProps: {
// 						sx: {
// 							"&.MuiInputLabel-animated": {
// 								fontSize: 15,
// 							},
// 						},
// 					},
// 				},
// 				standard: {
// 					fontSize: 13,
// 					transform: "translate(2px, 24px) scale(1)",
// 					"&.Mui-focused": {
// 						fontSize: 13,
// 						transform: "translate(9px, 1px) scale(0.75)",
// 					},
// 					"&.MuiInputLabel-shrink": {
// 						fontSize: 13,
// 						transform: "translate(21px, 1px) scale(0.75)",
// 					},
// 				},
// 			},
// 		},
// 		MuiMenuItem: {
// 			styleOverrides: {
// 				root: {
// 					color: "rgb(56,56,56)",
// 					fontWeight: 400,
// 					fontSize: "small",
// 				},
// 			},
// 		},
// 		MuiTextField: {
// 			styleOverrides: {
// 				root: {
// 					"& .MuiInputBase-input:focus": {
// 						backgroundColor: "#ebf3fd",
// 						borderRadius: "2px",
// 					},
// 					"& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
// 						{
// 							borderColor: "#cc0000", // Color when there's an error
// 						},
// 				},
// 			},
// 			defaultProps: {
// 				size: "small",
// 				fontSize: "1px",
// 				height: "16px",
// 				margin: "dense",
// 				variant: "outlined",
// 				inputProps: {
// 					style: {
// 						fontSize: "12px",
// 						paddingTop: "7px",
// 					},
// 				},
// 			},
// 		},

// 		MuiAppBar: {
// 			defaultProps: {
// 				elevation: 0,
// 			},
// 			styleOverrides: {
// 				root: {
// 					backgroundColor: "white",
// 					borderBottom: "1px solid",
// 					borderColor: "rgb(224, 227, 231)",
// 					color: "black",
// 				},
// 			},
// 		},

// 		MuiDialogTitle: {
// 			styleOverrides: {
// 				root: {
// 					fontSize: "15",
// 				},
// 			},
// 		},
// 		MuiDialogContentText: {
// 			styleOverrides: {
// 				root: {
// 					fontSize: "14",
// 				},
// 			},
// 		},
// 		MuiDialogContent: {
// 			styleOverrides: {
// 				root: {
// 					fontSize: "14",
// 				},
// 			},
// 		},
// 		MuiBreadcrumbs: {
// 			styleOverrides: {
// 				root: {
// 					fontSize: "small",
// 				},
// 			},
// 		},
// 		MuiTypography: {
// 			styleOverrides: {
// 				root: {
// 					fontSize: "small",
// 				},
// 			},
// 		},
// 		MuiAutocomplete: {
// 			styleOverrides: {
// 				inputRoot: {
// 					"&.Mui-disabled": {
// 						backgroundColor: "#efefef", // Custom disabled input background color
// 					},
// 				},
// 				listbox: {
// 					fontSize: "12px",
// 					"& .Mui-focusVisible": {
// 						backgroundColor: "#ebf3fd !important",
// 					},
// 					"& .Mui-focused": {
// 						backgroundColor: "#ebf3fd !important",
// 					},
// 				},
// 				root: {
// 					fontSize: 10,
// 					color: "#383838",

// 					"& .MuiAutocomplete-option": {
// 						padding: 10,
// 					},

// 					"& .MuiInputBase-input": {
// 						fontSize: "12px",
// 						paddingTop: "0px ",
// 						// letterSpacing: "1.25px",
// 						paddingBottom: "0px ",
// 					},
// 					"& .MuiInputBase-input:focus": {
// 						backgroundColor: "#ebf3fd",
// 					},
// 					"& .MuiInputBase-root.Mui-focused": {
// 						backgroundColor: "#ebf3fd",
// 					},
// 					"& .MuiSvgIcon-root ": {
// 						color: "#c1bfbc",
// 					},
// 				},
// 			},
// 		},

// 		MuiTableCell: {
// 			styleOverrides: {
// 				root: {
// 					height: "14px",
// 				},
// 				body: {
// 					padding: "0px 0px",
// 					border: "1px solid #dee2e6",
// 					fontSize: "12px",
// 				},
// 				head: {
// 					color: "rgb(23,23,23)",
// 					fontWeight: 500,
// 					"&.MuiTableCell-root": {
// 						fontSize: 13,
// 					},
// 				},
// 			},
// 		},

// 		MuiAccordionDetails: {
// 			styleOverrides: {
// 				root: {
// 					padding: "15px 0px ",
// 				},
// 			},
// 		},
// 		MuiAccordion: {
// 			styleOverrides: {
// 				root: {
// 					boxShadow: "none",
// 					fontSize: "small",
// 					fontWeight: 700,

// 					"&::before": {
// 						margin: "0px !important",
// 						borderBottom: 1,
// 						top: 0,
// 						height: " 0px !important",
// 						backgroundColor: "rgba(0, 0, 0, 0) !important",
// 					},
// 					"&.MuiAccordion-root.Mui-expanded": {
// 						marginTop: "6px !important",
// 						bottom: 0,
// 					},
// 				},
// 			},
// 		},
// 		MuiPaper: {
// 			root: {
// 				MuiAccordion: {
// 					styleOverrides: {
// 						root: {
// 							margin: "0px !important",
// 						},
// 					},
// 				},
// 			},
// 		},
// 		MuiAccordionSummary: {
// 			styleOverrides: {
// 				root: {
// 					"&.MuiAccordionSummary-content": {
// 						margin: "6px !important",
// 					},
// 					"& .MuiAccordionSummary-expandIconWrapper": {
// 						transition: "none",
// 						"&.Mui-expanded": {
// 							transform: "none",
// 						},
// 					},
// 					"&.MuiAccordionSummary-gutters": {
// 						minHeight: " 0px !important",
// 						paddingLeft: " 0px !important",
// 					},
// 					"&.MuiAccordionSummary-gutters.Mui-expanded": {
// 						minHeight: "0px !important",
// 					},

// 					"&:hover": {
// 						backgroundColor: "#f1eeee",
// 					},
// 					boxShadow: "none",
// 				},
// 				content: {
// 					marginLeft: "6px !important",
// 					marginTop: "3px !important ",
// 					marginBottom: "3px !important ",
// 				},
// 			},
// 		},
// 		MuiLink: {
// 			styleOverrides: {
// 				root: {
// 					color: "#1976d2",
// 					textDecoration: "none",
// 					fontWeight: 500,
// 					cursor: "pointer",
// 					":hover": {
// 						textDecoration: "underline",
// 					},
// 				},
// 			},
// 		},
// 		MuiTab: {
// 			styleOverrides: {
// 				root: {
// 					fontSize: "12px",
// 					//  letterSpacing: "1.25px"
// 				},
// 			},
// 		},
// 	},
// });
