export type ExtensionConfig = {
  prefix: string;
  suffix: string;
  atReplacement: string;
  hyphenReplacement: string;
  imageExtensions: string[];
};

export interface IImage {
  name: string;
  path: string;
}
