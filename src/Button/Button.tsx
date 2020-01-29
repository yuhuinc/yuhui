import React from "react";
import { Button as RKButton } from "reakit/Button";

import { withContent, WithContentProps } from "../Content/Content";

interface ButtonProps extends WithContentProps {
  disabled?: boolean;
  [key: string]: any;
}

type Button = React.ComponentType<ButtonProps>;

export const Button: Button = withContent(
  ({ children, ...rest }: ButtonProps) => {
    return <RKButton {...rest}>{children}</RKButton>;
  }
);
