/// <reference types="react" />

declare module '{{{name}}}/{{{component}}}' {
  export type { };
{component}}Props = {
    message?: string;
  };
  const {{component}}: ({ message }: {{component}}Props) => JSX.Element;
  export default {{component}};
}
