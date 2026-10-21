import { useTheme } from "../store/theme";

export default function Heading3(props) {
  const { children, ...restProps } = props;

  // const theme = useContext(ThemeContext)
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
