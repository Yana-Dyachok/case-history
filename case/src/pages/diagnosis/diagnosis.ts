export type DiagnosisTypeKeys =
  | 'ultrasound'
  | 'fgds'
  | 'sct'
  | 'petct'
  | 'ecg'
  | 'pathistology';

export const diagnosisType: Record<DiagnosisTypeKeys, string> = {
  ultrasound: 'УЗД',
  fgds: 'ФГДС + h.pylori',
  sct: 'СКТ',
  petct: 'ПЕТ КТ',
  ecg: 'ЕКГ',
  pathistology: 'Патогістологічне дослідження ',
};
