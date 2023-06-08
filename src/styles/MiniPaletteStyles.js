const root = {
  backgroundColor: "#fff",
  border: "1px solid black",
  borderRadius: "5px",
  padding: "0.5rem",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    cursor: "pointer",
  },
};

const colors = {
  backgroundColor: "#dae1e4",
  height: "150px",
  width: "100%",
  borderRadius: "5px",
  overflow: "hidden",
};

const title = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0",
  color: "black",
  paddingTop: "0.5rem",
  fontSize: "1rem",
  position: "relative",
};

const emoji = {
  marginLeft: "0.5rem",
  fontSize: "1.5rem",
};

const miniColor = {
  height: "25%",
  width: "20%",
  display: "inline-block",
  margin: "0 auto",
  position: "relative",
  marginBottom: "-3.5px",
};

const styles = {
  root,
  colors,
  title,
  emoji,
  miniColor,
};

export default styles;
