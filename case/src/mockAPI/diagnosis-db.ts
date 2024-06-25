import { IDocumentsImg } from "../types/interface";

const allImageUrls = {
  ultrasound: new URL('../assets/img/diagnosis/ultrasound.jpg', import.meta.url).href,
  fgds: new URL('../assets/img/diagnosis/fgds.jpg', import.meta.url).href,
  sctone: new URL('../assets/img/diagnosis/ckt-1.jpg', import.meta.url).href,
  scttwo: new URL('../assets/img/diagnosis/ckt-2.jpg', import.meta.url).href,
  petсt: new URL('../assets/img/diagnosis/fgds.jpg', import.meta.url).href,
};

const ultrasound: IDocumentsImg = {
  id: 'ultrasound',
  imageUrlArray: [
    allImageUrls.ultrasound,
  ],
};

 const fgds: IDocumentsImg = {
  id: 'fgds',
  imageUrlArray: [
    allImageUrls.fgds,
  ],
};

 const sct: IDocumentsImg = {
  id: 'sct',
  imageUrlArray: [
    allImageUrls.sctone,
    allImageUrls.scttwo,
  ],
};

 const petkt: IDocumentsImg = {
  id: 'petсt',
  imageUrlArray: [
    allImageUrls.petсt,
  ],
};

export const diagnosisArray:IDocumentsImg[]=[ultrasound, fgds, sct, petkt]
