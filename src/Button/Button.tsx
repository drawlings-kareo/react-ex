import React, { FunctionComponent } from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";

// export type ButtonProps = Omit<MuiButtonProps, "color">;

export type ButtonProps = Pick<MuiButtonProps, "color" | "variant" | "disableElevation" | "disableFocusRipple">;

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return <MuiButton {...props} disableRipple={false} />;
};

Button.defaultProps = {
  color: "primary",
  disableElevation: true,
  disableFocusRipple: true,
  variant: "contained",
};

Button.displayName = "KareoButton";
export default Button;
