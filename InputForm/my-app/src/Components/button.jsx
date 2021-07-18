export default function Button({ text, disabled, ...props }) {
  return (
    <>
      <button disabled={disabled} {...props}>
        {text}
      </button>
    </>
  );
}
