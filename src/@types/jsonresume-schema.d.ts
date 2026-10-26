declare module "@jsonresume/schema" {
  export type ValidationError = {
    property: string;
    message: string;
    stack?: string;
  };

  export function validate(
    resume: unknown,
    callback: (errors: ValidationError[] | null, valid: boolean) => void,
  ): void;

  export const schema: unknown;
  export const jobSchema: unknown;
}
