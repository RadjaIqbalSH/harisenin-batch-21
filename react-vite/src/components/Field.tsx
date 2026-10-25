import type { ReactNode } from "react";
import { useTheme } from "../store/theme";
import type React from "react";

// function exmaple<T>(payload: T): T {

//   return 
// }

// exmaple<number>(3)

interface IFieldProps {
  id: string;
  label: string;
  isError: boolean;
  errorMsg: string;
  children: ReactNode
}

export default function Field(props: IFieldProps) {
  const { id, label, isError, errorMsg, children } = props;

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
