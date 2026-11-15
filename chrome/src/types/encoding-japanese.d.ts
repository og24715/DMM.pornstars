declare module 'encoding-japanese' {
  export type EncodingName =
    | 'ASCII'
    | 'EUCJP'
    | 'SHIFT_JIS'
    | 'JIS'
    | 'UTF8'
    | 'UTF16'
    | 'UTF32'
    | 'AUTO';

  export function convert(data: string, to: EncodingName, from?: EncodingName): string;
  export function convert(data: number[], to: EncodingName, from?: EncodingName): number[];

  export function codeToString(data: number[]): string;
  export function stringToCode(data: string): number[];
}
