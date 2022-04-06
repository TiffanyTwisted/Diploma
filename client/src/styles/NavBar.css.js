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
    color: "#e8eaf6",
  },
  navbar: {
    backgroundColor: "#5c6bc0",
  },
  menuItem:{
    color:"#e8eaf6",
    marginRight:theme.spacing(2),
    marginLeft:theme.spacing(2),
  },
};