export default function InputText(props) {
  return (
    <input
      className="input-text"
      id={props.id}
      type="text"
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}
