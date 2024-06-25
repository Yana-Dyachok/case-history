import { IDocumentsImg } from "../types/interface";

const allImageUrls = {
  oksana: new URL('../assets/img/oksana.jpg', import.meta.url).href,
  uretraTreatment: new URL('../assets/img/treatment/uretra-treatment.jpg', import.meta.url).href,
  uretraDoctor: new URL('../assets/img/doctors/uretra.jpg', import.meta.url).href,
  mamologist: new URL('../assets/img/doctors/mamologist.jpg', import.meta.url).href,
  hematologistOne: new URL('../assets/img/doctors/hematolog-cancer-univer.jpg', import.meta.url).href,

};

 const urologist: IDocumentsImg = {
  id: 'urologist',
  imageUrlArray: [
    allImageUrls.uretraDoctor,
  ],
};

 const familyDoctor: IDocumentsImg = {
  id: 'familydoctor',
  imageUrlArray: [
    allImageUrls.uretraDoctor,
  ],
};

 const mamologist: IDocumentsImg = {
  id: 'mamologist',
  imageUrlArray: [
    allImageUrls.mamologist,
  ],
};

const hematologist: IDocumentsImg = {
  id: 'hematologist',
  imageUrlArray: [
    allImageUrls.hematologistOne,
  ],
};

export const doctorsArray:IDocumentsImg[]=[familyDoctor,urologist, mamologist, hematologist]
