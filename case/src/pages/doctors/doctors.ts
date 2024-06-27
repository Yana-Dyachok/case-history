export type DoctorsTypeKeys =
  | 'familydoctor'
  | 'otolaryngologist'
  | 'urologist'
  | 'hematologist'
  | 'mamologist';

export const doctorsType: Record<DoctorsTypeKeys, string> = {
  familydoctor: 'Огляд сімейного лікаря',
  otolaryngologist: 'Огляд ЛОРа',
  urologist: 'Огляд уролога',
  hematologist: 'Огляд гематолога',
  mamologist: 'Огляд мамолога',
};
