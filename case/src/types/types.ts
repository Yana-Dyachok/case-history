export type ButtonType = {
  btnType: 'button' | 'submit';
  children: string;
  to?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export type Neutrophils = {
  Segments: number;
  BandCells: number|0;
  Young?: number|0;
  Reticulocytes?: number|0;
}