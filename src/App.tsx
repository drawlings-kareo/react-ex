import GridExample from "./other2022-03/GridExample";
import DataGridExample from "./other2022-03/DataGridExample";
import CheckboxStylingExample from "./other2022-02/CheckboxStylingExample";
import ConditionalFormattingExample from "./other2022-02/ConditionalFormattingExample";
import ThemeProviderExample from "./other2022-02/ThemeProviderExample";
import PromiseExampleB from "./other2022-02/PromiseExampleB";
import PromiseExample from "./other2022-02/PromiseExample";
import BoxStyled from "./other2021-11/BoxStyled";
import ReactReducerExample from "./other2022-01/ReactReducerExample";
import UseEffectTest from "./other2022-01/UseEffectTest";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <GridExample />
        {/*GridExample*/}
      </Route>
      <Route exact path="/DataGridExample">
        <DataGridExample />
      </Route>
      <Route exact path="/CheckboxStylingExample">
        <CheckboxStylingExample />
      </Route>
      <Route exact path="/ConditionalFormattingExample">
        <ConditionalFormattingExample />
      </Route>
      <Route exact path="/ThemeProviderExample">
        <ThemeProviderExample />
      </Route>
      <Route exact path="/PromiseExampleB">
        <PromiseExampleB />
      </Route>
      <Route exact path="/PromiseExample">
        <PromiseExample />
      </Route>
      <Route exact path="/BoxStyled">
        <BoxStyled />
      </Route>
      <Route exact path="/ReactReducerExample">
        <ReactReducerExample />
      </Route>
      <Route exact path="/UseEffectTest">
        <UseEffectTest />
      </Route>
    </Router>
  );
};

/*import MaterialTableEx from "./other2021-08/MaterialTableEx";
const App = () => {
  return <MaterialTableEx />;
};*/

/*import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Typography, Paper, Button, Checkbox, Box } from "@material-ui/core";
import React from "react";*/
/*import ThemeProvider from "./other2021-08/ThemeProvider";

const App = () => {
  return <ThemeProvider />;
};*/

/*import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: "Arial",
    },
    body1: {
      fontFamily: "Arial",
    },
  },
  overrides: {
    MuiButton: {
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
  },
});

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

  return (
    <Paper>
      <Box>
        <Checkbox checked={checked} onChange={handleChange} />
        <Checkbox checked={checked} onChange={handleChange} />
        <Checkbox checked={checked} onChange={handleChange} disabled />
      </Box>
      <Button>button</Button>
      <Button color="secondary" variant="contained">
        button
      </Button>
      <Button color="default" variant="contained">
        button
      </Button>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="body1">this is body text this is body text this is body text this is body text</Typography>
    </Paper>
  );
};*/

/*interface A {
  x?: boolean | undefined | string;
  y: number;
}

interface B extends A {
  z: string;
}

type C<T> = { p: T } | A | B;

const objB: B = { y: 4, z: "abc" };
const objC: C<number> = { p: 4 };
const objC2: C<string> = { p: "ace" };

const App = () => {
  return (
    <div>
      {objB.y}
      {objC.p}
      {objC2.p}
    </div>
  );
};*/

/*import styled from "styled-components";
import { Box, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Div = styled.div`
  color: green;
`;

const Form = styled.form`
  color: green;
`;

const useStyles = makeStyles({ root: { color: "green" } });

const App = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Form>
        main
        <div>native inner</div>
        <Box>inner</Box>
        <Input type="submit" value="Submit" />
      </Form>
      <div>outer</div>
    </Box>
  );
};*/

/*import ContextExample from "./other 2021-07/ContextExample";

const App = () => {
  return <ContextExample />;
};*/

/*import { HookExample, StyledComponentsExample, HocExample } from "./MaterialUIStylingStrategies";
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const App = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HookExample>HookExample</HookExample>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StyledComponentsExample>StyledComponentsExample</StyledComponentsExample>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HocExample>HocExample</HocExample>
      </TabPanel>
    </div>
  );
};*/

/*function App() {
  const [value, setValue] = React.useState(1);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>

      <Divider />
      <HookExample>HookExample</HookExample>
      <Divider />
      <StyledComponentsExample>StyledComponentsExample</StyledComponentsExample>
      <Divider />
      <HocExample>HocComponent</HocExample>
      <Divider />

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
    </>
  );
}*/

/*import StylingStrategies from "./StylingStrategies";

function App() {
  return <StylingStrategies />;
}*/

/*import React from "react";

type Worthy<T, Z> = { a?: T; b: Z };

type W<T extends React.ElementType = React.ElementType, Z = {}> = Worthy<T, Z>;

// const x: Worthy<number> = { b: 1, a: 3 };

function Comp(props: W<React.ElementType, string>) {
  return <div>{props.b}</div>;
}

function App() {
  return <Comp b={"abz"} />;
}*/

/*
import Link, { LinkProps } from "./Link";

const linkProps: LinkProps = {
  children: "Link",
  href: "http://design.kareoprod.ent/?path=/story/design-system_getting-started--page",
};

function App() {
  return (
    <div>
      <Link {...linkProps} />
      <Link href="http://design.kareoprod.ent/?path=/story/design-system_getting-started--page">Link</Link>
    </div>
  );
}*/

/*interface AppProps {}

interface AppState {
  count: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 5,
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    // document.title = `You clicked ${this.state.count} times`;
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
      </div>
    );
  }
}*/

/*import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  console.log("here1");

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("useEffect");
    return function cleanup() {
      console.log("cleanup");
    };
  });

  console.log("here2");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}*/

/*import { useState, useEffect } from "react";
const App = () => {
  console.log("here1");
  const [value, setValue] = useState("Banana");
  console.log("here2:" + value);
  useEffect(() => {
    setValue("Apple");
    console.log("useEffect");
    return function cleanup() {
      console.log("cleanup");
    };
  });
  console.log("here3:" + value);
  return <div>{value}</div>;
};*/

// DROPDOWN example
/*import Dropdown from "./Dropdown";
import { Button } from "@material-ui/core";
const App = () => {
  const dropdown1Changed = (value: number) => {
    console.log("dropdown 1 changed:" + value);
  };

  const dropdown2Changed = (value: number) => {
    console.log("dropdown 2 changed:" + value);
  };

  const list = [
    [1, "a"],
    [2, "b"],
    [3, "c"],
  ];

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <>
      <div>
        <Dropdown onChange={dropdown1Changed} list={list} />
        <Dropdown onChange={dropdown2Changed} list={list} />
      </div>
      <form onSubmit={handleSubmit}>
        <Dropdown list={list} />
        <Dropdown list={list} />
        <Dropdown list={list} />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};*/

export default App;
