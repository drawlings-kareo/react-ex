import React from "react";

const ThemeContext = React.createContext("");

const ContextExample = () => {
  return (
    <ThemeContext.Provider value={"Olympics start today"}>
      <Container />
    </ThemeContext.Provider>
  );
};

const Container = (props: any) => {
  return <Text />;
};

const Text = (props: any) => {
  const text = React.useContext(ThemeContext);
  return <div>received: {text}</div>;
};

export default ContextExample;
