export type InfectionsTypeKeys =
  | 'oro_bac_flora'
  | 'uro_bac_flora'
  | 'hepatitis'
  | 'hiv'
  | 'herpes';

export const infectionsType: Record<InfectionsTypeKeys, string> = {
  oro_bac_flora: 'Бакпосів із мигдалин',
  uro_bac_flora: 'Бакпосів сечі на мікрофлору',
  hepatitis: 'Гепатити',
  hiv: 'Вірус імунодефіциту людини',
  herpes: 'Герпес віруси',
};
