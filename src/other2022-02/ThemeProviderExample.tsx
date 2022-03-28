import { createTheme } from "@material-ui/core/styles";
import { deepOrange, grey, indigo } from "@material-ui/core/colors";
import { Divider, Button, ThemeProvider } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const darkTheme = createTheme({
  palette: {
    divider: "rgba(0, 0, 0, 0.9)",
    background: {
      default: grey[900],
    },
    text: {
      primary: deepOrange[500],
      secondary: deepOrange[500],
      disabled: grey[600],
      hint: grey[300],
    },
    primary: { main: indigo[900], light: "#474f97", dark: "#121858" },
    secondary: { main: deepOrange[600] },
  },
});

export default function ThemeProviderExample() {
  return (
    <ThemeProvider theme={darkTheme}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </ThemeProvider>
  );
}

/*import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function ListDividers() {
  // const classes = useStyles();

  return (
    <List component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}
*/
