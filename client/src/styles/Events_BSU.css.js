import { createTheme } from "@material-ui/core/styles";

const theme = createTheme();

export default {
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  title: {
      font: "Source Sans Pro",
      margin: theme.spacing(3),
  },
};