/// <reference types="react" />

declare module '{{{module}}}' {
  export type {{component}}Props = {
    message?: string;
  };
  const {{component}}: ({ message }: {{component}}Props) => JSX.Element;
  export default {{component}};
}
