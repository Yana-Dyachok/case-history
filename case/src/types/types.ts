export type ButtonType = {
  btnType: 'button' | 'submit';
  children: string;
  to?: string;
  disabled?: boolean;
  onClick?: () => void;
};
