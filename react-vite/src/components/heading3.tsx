import type React from "react";
import { useTheme } from "../store/theme";
import type { ReactNode } from "react";

interface IHeading3Props extends React.HTMLAttributes<HTMLHeadElement> {
  children: ReactNode;
}

export default function Heading3(props: IHeading3Props) {
  const { children, ...restProps } = props;

  const themeStore = useTheme()

  return (
    <h1
      className="heading-3"
      {...restProps}
      style={ themeStore.theme ? { color: "black" } : {}}
    >
      {children}
    </h1>
  );
}
