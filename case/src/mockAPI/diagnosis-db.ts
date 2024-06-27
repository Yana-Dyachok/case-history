import { IDocumentsImg } from '../types/interface';

const allImageUrls = {
  fgds: new URL('../assets/img/diagnosis/fgds.jpg', import.meta.url).href,
  sct_one: new URL('../assets/img/diagnosis/ckt-1.jpg', import.meta.url).href,
  sct_two: new URL('../assets/img/diagnosis/ckt-2.jpg', import.meta.url).href,
  petсt: new URL('../assets/img/diagnosis/fgds.jpg', import.meta.url).href,
  usthyroid: new URL('../assets/img/diagnosis/ultrasound-tyreoid.jpg', import.meta.url).href,
  usbreast: new URL('../assets/img/diagnosis/ultrasound-mamolog.jpg', import.meta.url).href,
  echo: new URL('../assets/img/diagnosis/echo.jpg', import.meta.url).href,
  usabdomen_one: new URL('../assets/img/diagnosis/ultrasound.jpg', import.meta.url)
  .href,
  usabdomen_two: new URL('../assets/img/diagnosis/ultrasound-2.jpg', import.meta.url)
  .href,
  uskidney: new URL('../assets/img/diagnosis/uretra.jpg', import.meta.url).href,
};

const fgds: IDocumentsImg = {
  id: 'fgds',
  imageUrlArray: [allImageUrls.fgds],
};

const sct: IDocumentsImg = {
  id: 'sct',
  imageUrlArray: [allImageUrls.sct_one, allImageUrls.sct_two],
};

const petkt: IDocumentsImg = {
  id: 'petсt',
  imageUrlArray: [allImageUrls.petсt],
};

const usthyroid: IDocumentsImg = {
  id: 'usthyroid',
  imageUrlArray: [allImageUrls.usthyroid],
};

const usbreast: IDocumentsImg = {
  id: 'usbreast',
  imageUrlArray: [allImageUrls.usbreast],
};

const uskidney: IDocumentsImg = {
  id: 'uskidney',
  imageUrlArray: [allImageUrls.uskidney],
};

const echo: IDocumentsImg = {
  id: 'echo',
  imageUrlArray: [allImageUrls.echo],
};

const usabdomen: IDocumentsImg = {
  id: 'usabdomen',
  imageUrlArray: [allImageUrls.usabdomen_one, allImageUrls.usabdomen_two],
};

export const diagnosisArray: IDocumentsImg[] = [fgds, sct, petkt];
export const ultrasoundArray: IDocumentsImg[] = [usthyroid, usbreast, usabdomen, echo, uskidney];
