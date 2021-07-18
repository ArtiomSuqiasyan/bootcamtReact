export default function Input({
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  ...props
}) {
  return (
    <>
      <input name={name} type={type} value={value} placeholder={placeholder} onChange={onChange} {...props} />
      <p>{error}</p>
    </>
  );
}
