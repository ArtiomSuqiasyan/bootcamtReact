export default function Paragraph({className, text, ...props}) {
  return (
      <p className={className} {...props}>{text}</p>
  );
}
