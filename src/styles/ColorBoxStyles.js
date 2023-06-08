import chroma from "chroma-js";

const colorBox = (theme, props) => ({
  background: props.background,
  width: "20%",
  height: props.showFullPallete ? "25%" : "50%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  marginBottom: "-3.5px",
  "&:hover button": {
    opacity: "1",
  },
});

const boxContent = {
  position: "absolute",
  width: "100%",
  left: "0px",
  bottom: "0px",
  padding: "10px",
  color: "black",
  letterSpacing: "1px",
  textTransform: "uppercase",
  fontSize: "12px",
};

const copyOverlay = {
  opacity: "0",
  zIndex: "0",
  width: "100%",
  height: "100%",
  transition: "transform 0.6s ease-in-out",
  transform: "scale(0.1)",
};

const showOverlay = {
  opacity: "1",
  transform: "scale(50)",
  zIndex: "10",
  position: "absolute",
};

const copyMsg = {
  position: "fixed",
  left: "0",
  right: "0",
  top: "0",
  bottom: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontSize: "4rem",
  transform: "scale(0.1)",
  opacity: "0",
  color: "white",
  "& h1": {
    fontWeight: "400",
    textShadow: "1px 2px black",
    background: "rgba(255, 255, 255, 0.2)",
    width: "100%",
    textAlign: "center",
    marginBottom: "0",
    padding: "1rem",
    textTransform: "uppercase",
  },
  "& p": {
    fontSize: "2rem",
    fontWeight: "100",
  },
};

const showMsg = {
  opacity: "1",
  transform: "scale(1)",
  zIndex: "25",
  transition: "all 0.4s ease-in-out",
  transitionDelay: "0.3s",
};

const copyText = (theme, props) => ({
  color: chroma(props.background).luminance() >= 0.2 ? "black" : "white",
});

const colorName = (theme, props) => ({
  color: chroma(props.background).luminance() <= 0.08 ? "white" : "black",
});

const seeMore = (theme, props) => ({
  color: chroma(props.background).luminance() >= 0.2 ? "black" : "white",
  background: "rgba(255, 255, 255, 0.3)",
  position: "absolute",
  border: "none",
  right: "0px",
  bottom: "0px",
  width: "60px",
  height: "30px",
  textAlign: "center",
  lineHeight: "30px",
  textTransform: "uppercase",
});

const copyButton = (theme, props) => ({
  color: chroma(props.background).luminance() >= 0.2 ? "black" : "white",
  width: "100px",
  height: "30px",
  position: "absolute",
  display: "flex",
  top: "50%",
  left: "50%",
  marginLeft: "-50px",
  marginTop: "-15px",
  textAlign: "center",
  outline: "none",
  background: "rgba(255, 255, 255, 0.3)",
  fontSize: "1rem",
  lineHeight: "30px",
  textTransform: "uppercase",
  border: "none",
  textDecoration: "none",
  alignItems: "center",
  justifyContent: "center",
  opacity: "0",
  borderRadius: "4px",
  "&:hover": {
    opacity: "1",
  },
});
const styles = {
  colorBox,
  boxContent,
  copyOverlay,
  showOverlay,
  copyMsg,
  showMsg,
  copyText,
  colorName,
  seeMore,
  copyButton,
};

export default styles;
