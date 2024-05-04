interface ButtonProps {
  backgroundColor: string;
}
export const Button = ({ backgroundColor }: ButtonProps) => {
  return (
    <button type="button" style={{ backgroundColor }}>
      Hi there amigo
    </button>
  );
};
