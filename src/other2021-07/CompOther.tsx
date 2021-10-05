// https://material-ui.com/styles/basics/

import { Button, ButtonProps } from "@material-ui/core";
import { makeStyles, styled, withStyles } from "@material-ui/core/styles";
import styledCom from "styled-components";

const useStyles = makeStyles({
  root: {
    color: "blue",
  },
});

const HookExample = (props: ButtonProps) => {
  const classes = useStyles();

  return (
    <Button variant="contained" color="primary" className={classes.root}>
      {props.children}
    </Button>
  );
};

const StyledComponentsExample = styled(Button)({
  color: "green",
});

const StyledComponentsNativeExample = styledCom.button`
  color: blue;
`;

const hocStyles = {
  root: {
    color: "red",
  },
};

const HocComponentUnstyled = (props: any) => {
  const { classes } = props;
  return <Button className={classes.root}>HocComponent</Button>;
};

const HocComponent = withStyles(hocStyles)(HocComponentUnstyled);

export { HookExample, StyledComponentsExample, StyledComponentsNativeExample, HocComponent };
