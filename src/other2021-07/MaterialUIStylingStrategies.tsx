// https://material-ui.com/styles/basics/

import { makeStyles, styled, withStyles } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";

// Hook API example
const useStyles = makeStyles({ root: { color: "blue" } });

const HookExample = (props: ButtonProps) => {
  const classes = useStyles();
  return <Button variant="contained" color="default" children={props.children} className={classes.root} />;
};

// Styled components API
const StyledComponentsButton = styled(Button)({
  color: "green",
});

const StyledComponentsExample = (props: any) => {
  return <StyledComponentsButton variant="contained" color="default" {...props} />;
};

// Higher-order component API
const hocStyles = { root: { color: "red" } };

const HocExampleUnstyled = (props: any) => {
  const { classes } = props;
  return <Button variant="contained" color="default" children={props.children} className={classes.root} />;
};

const HocExample = withStyles(hocStyles)(HocExampleUnstyled);

export { HookExample, StyledComponentsExample, HocExample };
