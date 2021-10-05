import { ThemeProvider, createMuiTheme, Typography, Box, Checkbox, Button, Divider } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React from "react";

const palette = {
  divider: "rgba(179, 180, 187, 0.12)",
  background: {
    paper: "#fff",
    default: "#ddd",
  },
  primary: {
    light: "#95BECF",
    main: "#2D7EA0",
    dark: "#064F6D",
    contrastText: "#fff",
  },
  secondary: {
    light: "#ED9A90",
    main: "#DD3722",
    dark: "#A32A19",
    contrastText: "#fff",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.87)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)",
  },
};

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: "Arial",
    },
    body1: {
      fontFamily: "Arial",
    },
  },
  palette: palette,
  overrides: {
    /*MuiButton: {
      root: {
        fontFamily: "Helvectia",
        fontSize: "32px",
        background: blue[100],
        color: blue[900],
      },
    },
    MuiCheckbox: {
      root: {
        "& .MuiCheckbox-colorSecondary": {
          color: blue[900],
        },
      },
    },
  },*/
    /*MuiButton: {
      contained: {
        border: `1px solid ${palette.primary.main}`,
        color: `${palette.primary.main}`,
        backgroundColor: `${palette.primary.contrastText}`,
        "&:hover": {
          color: `${palette.primary.dark}`,
          backgroundColor: `${palette.primary.contrastText}`,
          border: `1px solid ${palette.primary.dark}`,
        },
        "&$disabled": {
          color: `${palette.primary.light}`,
          backgroundColor: `${palette.primary.contrastText}`,
          border: `1px solid ${palette.primary.light}`,
          boxShadow:
            "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        },
      },
      containedPrimary: {
        border: `none`,
        "&:hover": {
          color: `${palette.primary.contrastText}`,
          backgroundColor: `${palette.primary.dark}`,
          border: `none`,
        },
        "&$disabled": {
          color: `${palette.primary.contrastText}`,
          backgroundColor: `${palette.primary.light}`,
          border: `none`,
        },
      },
      containedSecondary: {
        border: `none`,
        "&:hover": {
          color: `${palette.secondary.contrastText}`,
          backgroundColor: `${palette.secondary.dark}`,
          border: `none`,
        },
        "&$disabled": {
          color: `${palette.secondary.contrastText}`,
          backgroundColor: `${palette.secondary.light}`,
          border: `none`,
        },
      },
    },*/
    /*MuiButton: {
      root:
    }*/
  },
});

export { theme };

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
};

const Page = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Button>Button</Button>;

  /*return (
    <>
      <Box bgcolor="primary.main" p="5px" m="5px">
        abc
      </Box>
      <Box>
        <Checkbox checked={checked} onChange={handleChange} />
        <Checkbox checked={checked} onChange={handleChange} />
        <Checkbox checked={checked} onChange={handleChange} disabled />
      </Box>
      <Button color="primary" variant="contained">
        button
      </Button>
      <Button color="secondary" variant="contained">
        button
      </Button>
      <Button color="default" variant="contained">
        button
      </Button>
      <Typography variant="h1" color="primary">
        h1
      </Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Divider />
      <Typography variant="h6">h6</Typography>
      <Divider light />
      <Typography variant="body1">this is body text this is body text this is body text this is body text</Typography>
    </>
  );*/
};

export default App;
