// import { useContext } from "react";
// import { ThemeContext } from "../context/theme";
import { useTheme } from "../store/theme";

export default function Field(props) {
  const { id, label, isError, errorMsg, children } = props;

  // const theme = useContext(ThemeContext)

  const themeStore = useTheme()

  return (
    <div className="form-field" style={{ marginBottom: 37 }}>
      <label
        className="body-medium-medium"
        style={themeStore.theme ? { color: "black" } : {}}
        htmlFor={id}
      >
        {label}
      </label>
      {children}
      <span
        id="error-label-username"
        className="body-small-regular error-label"
        style={{
          visibility: isError ? "visible" : "hidden",
        }}
      >
        {errorMsg}
      </span>
    </div>
  );
}
