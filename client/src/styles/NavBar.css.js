import { createTheme } from "@material-ui/core/styles";

const theme = createTheme();

export default {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#e8eaf6",
  },
  title: {
    flexGrow: 1,
    color: "white",
    marginLeft:theme.spacing(2),
  },
  navbar: {
    backgroundColor: "#5c6bc0",
  },
  menuItem:{
    marginRight:theme.spacing(2),
    marginLeft:theme.spacing(2),
    color: "white",
  },
};