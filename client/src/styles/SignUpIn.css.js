import { createTheme } from "@material-ui/core/styles";

const theme = createTheme();

export default {
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#0288D1",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
};