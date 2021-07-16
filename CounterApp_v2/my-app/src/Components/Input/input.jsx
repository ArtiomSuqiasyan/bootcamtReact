export default function Input({
  type,
  placeholder,
  onChange,
  defaultValue,
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      {...props}
    />
  );
}
