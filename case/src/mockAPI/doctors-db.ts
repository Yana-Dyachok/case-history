import { IDocuments } from '../types/interface';

const allImageUrls = {
  oksana: new URL('../assets/img/oksana.jpg', import.meta.url).href,
  uretraTreatment: new URL(
    '../assets/img/treatment/uretra-treatment.jpg',
    import.meta.url,
  ).href,
  family_doctor_one_1: new URL(
    '../assets/img/doctors/family-one.jpg',
    import.meta.url,
  ).href,
  family_doctor_one_2: new URL(
    '../assets/img/doctors/family-one..jpg',
    import.meta.url,
  ).href,
  family_doctor_two: new URL(
    '../assets/img/doctors/family-two.jpg',
    import.meta.url,
  ).href,
  uretra_doctor: new URL(
    '../assets/img/doctors/uretra-doctor.jpg',
    import.meta.url,
  ).href,
  mamologist: new URL('../assets/img/doctors/mamologist.jpg', import.meta.url)
    .href,
  hematologist_one: new URL(
    '../assets/img/doctors/hematolog-cancer-univer.jpg',
    import.meta.url,
  ).href,
  otolaryngologist_one: new URL(
    '../assets/img/doctors/otolar.jpg',
    import.meta.url,
  ).href,
};

const urologist: IDocuments = {
  id: 'urologist',
  imageUrlArray: [allImageUrls.uretra_doctor],
  pdfArray: [],
};

const familyDoctor: IDocuments = {
  id: 'familydoctor',
  imageUrlArray: [
    allImageUrls.family_doctor_one_1,
    allImageUrls.family_doctor_one_2,
    allImageUrls.family_doctor_two,
  ],
  pdfArray: [],
};

const mamologist: IDocuments = {
  id: 'mamologist',
  imageUrlArray: [allImageUrls.mamologist],
  pdfArray: [],
};

const hematologist: IDocuments = {
  id: 'hematologist',
  imageUrlArray: [allImageUrls.hematologist_one],
  pdfArray: [],
};

const otolaryngologist: IDocuments = {
  id: 'otolaryngologist',
  imageUrlArray: [allImageUrls.otolaryngologist_one],
  pdfArray: [],
};

const doctorsArray: IDocuments[] = [
  familyDoctor,
  urologist,
  mamologist,
  hematologist,
  otolaryngologist,
];
export default doctorsArray;
