import type { ChangeEventHandler } from "react";

interface InputPasswordProps {
    onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
}

export default function InputPassword (props: InputPasswordProps) {
    return (
        <input
          className="input-text"
          id="pasword"
          type="password"
          placeholder="Masukkan kata sandi"
          onChange={props.onChange}
        />
    )
}