import { useContext } from "react";
import { ThemeContext } from "../context/theme";

export default function Heading3(props) {
  const { children, ...restProps } = props;

  const theme = useContext(ThemeContext)

  return (
    <h1
      className="heading-3"
      {...restProps}
      style={ theme ? { color: "black" } : {}}
    >
      {children}
    </h1>
  );
}
