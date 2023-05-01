interface ButtonProps {
  backgroundColor: string;
}
export function Button({ backgroundColor }: ButtonProps) {
  return (
    <button type="button" style={{ backgroundColor }}>
      Hi there amigo
    </button>
  );
}
