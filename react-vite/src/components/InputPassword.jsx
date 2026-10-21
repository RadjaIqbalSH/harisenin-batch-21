export default function InputPassword (props) {
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