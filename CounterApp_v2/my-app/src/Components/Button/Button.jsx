export default function Button({onClick, disabled, text, ...props}) {
    return (
        <button onClick={onClick} disabled={disabled} {...props}>
            {text}
        </button>
    );
}
