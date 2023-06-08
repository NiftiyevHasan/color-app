const palette = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
};

const colors = {
  height: "90%",
};

const goBack = {
  width: "20%",
  height: "50%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  marginBottom: "-3.5px",
  opacity: "1",
  backgroundColor: "black",
  "& a": {
    color: "white",
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
    borderRadius: "2px",
  },
};

const styles = {
  palette,
  colors,
  goBack,
};

export default styles;
