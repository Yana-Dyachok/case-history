export type UltrasoundTypeKeys =
  | 'usthyroid'
  | 'usbreast'
  | 'usabdomen'
  | 'uskidney'
  | 'echo';

export const ultrasoundType: Record<UltrasoundTypeKeys, string> = {
  usthyroid: 'УЗД щитовидної залози',
  usbreast: 'УЗД молочних залоз',
  echo: 'УЗД серця',
  usabdomen: 'УЗД ОЧП',
  uskidney: 'УЗД нирок та сечовивідних шляхів',
};
