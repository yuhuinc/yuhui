import React from "react";
import { Button as RKButton } from "reakit/Button";

import { withContent, WithContentProps } from "../Content/Content";

export interface ButtonProps extends WithContentProps {
  disabled?: boolean;
  [key: string]: any;
}

export type Button = React.ComponentType<ButtonProps>;

export const Button: Button = withContent(
  ({ children, ...rest }) => {
    return <RKButton {...rest}>{children}</RKButton>;
  }
);
