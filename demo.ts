import { TextInput, TextInputDemo } from './src';

export { TextInput, TextInputDemo };
export type { TextInputProps, TextInputRef } from './src';

// For testing in a simple HTML file
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.TextInputComponents = { TextInput, TextInputDemo };
}
