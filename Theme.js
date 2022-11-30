import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "#6e1e6e;",
    borderColor: "black",
    hoverColor: "#AC32AC",
    activeColor: "#41053c",
    primaryFontColor: "#fff",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
