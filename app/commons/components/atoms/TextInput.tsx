export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const TextInput = ({ className, ...props }: InputProps) => {
  return (
    <input className={`p-1 w-100p ${className}`} width="100%" {...props} />
  );
};
