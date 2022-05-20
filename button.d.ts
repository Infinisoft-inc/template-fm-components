/// <reference types="react" />

declare module 'button/Button' {
  export type ButtonProps = {
    message?: string;
  };
  const Button: ({ message }: ButtonProps) => JSX.Element;
  export default Button;
}
