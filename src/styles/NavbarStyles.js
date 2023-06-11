import { keyframes } from "@emotion/react";

// Define the rainbow animation
const rainbowAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const styles = {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      background:
        "linear-gradient(270deg, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff0000)",
      backgroundSize: "600% 600%",
      color: "transparent", // Make text transparent so background shows through
      backgroundClip: "text", // Clip background to text
      WebkitBackgroundClip: "text", // For Safari
      animation: `${rainbowAnimation} 3s ease infinite`, // Rainbow animation
    },
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":
      {
        backgroundColor: "green",
        outline: "none",
        border: "2px solid green",
        boxShadow: "none",
        width: "13px",
        height: "13px",
        marginLeft: "-7px",
        marginTop: "-3px",
      },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};

export default styles;
