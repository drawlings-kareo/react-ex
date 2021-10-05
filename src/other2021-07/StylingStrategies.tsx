import "./StylingStrategies.scss";
import style from "./StylingStrategies.module.css";
import { createUseStyles } from "react-jss";
import styled from "styled-components";

// CSS
function CssExample() {
  return (
    <>
      <h1 className="CSSExampleHeader">header</h1>
      <div className="CSSExampleDiv">div</div>
    </>
  );
}

// CSS Modules
function CssModulesExample() {
  return (
    <>
      <h1 className={style.header}>header</h1>
      <div className={style.div}>div</div>
    </>
  );
}

// JSS
const styles = createUseStyles({
  myHeader: {
    color: "blue",
  },
  myDiv: {
    color: "green",
  },
});

function JssExample() {
  const classes = styles();
  return (
    <>
      <h1 className={classes.myHeader}>header</h1>
      <div className={classes.myDiv}>div</div>
    </>
  );
}

// styled-components
const Div = styled.div`
  color: blue;
`;

const H1 = styled.h1`
  color: blue;
`;

function StyledComponentsExample() {
  return (
    <>
      <H1>header</H1>
      <Div>div</Div>
    </>
  );
}

const Examples = () => {
  return (
    <>
      <CssExample />
      <CssModulesExample />
      <JssExample />
      <StyledComponentsExample />
    </>
  );
};

export default Examples;
