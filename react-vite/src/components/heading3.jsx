export default function Heading3(props) {
  const { children, theme, ...restProps } = props;

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
