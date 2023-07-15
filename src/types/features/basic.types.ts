// Declare the basic state structure;
export type IBasicStateStructure = {
  error: boolean;
  loading: boolean;
  status: 'idle' | 'error' | 'success' | 'loading';
  message: string | null;
}

// Declare the basic return
export type IBaseRequestReturn = {
  message: string;
}