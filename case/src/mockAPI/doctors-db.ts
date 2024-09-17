import { IDocuments } from '../types/interface';

const allDoctorsPdfUrls = {
  hematologist_1: new URL(
    '../assets/pdf-files/doctors/gematologist-konsilium.pdf',
    import.meta.url,
  ).href,
  hematologist_2: new URL(
    '../assets/pdf-files/doctors/hematolog-cancer-univer.pdf',
    import.meta.url,
  ).href,
  oksana: new URL('../assets/pdf-files/oksana.pdf', import.meta.url).href,
  uretraTreatment: new URL(
    '../assets/pdf-files/treatment/uretra-treatment.pdf',
    import.meta.url,
  ).href,
  family_doctor_one: new URL(
    '../assets/pdf-files/doctors/family-one.pdf',
    import.meta.url,
  ).href,
  family_doctor_two: new URL(
    '../assets/pdf-files/doctors/family-two.pdf',
    import.meta.url,
  ).href,
  uretra_doctor: new URL(
    '../assets/pdf-files/doctors/uretra-doctor.pdf',
    import.meta.url,
  ).href,
  mamologist: new URL(
    '../assets/pdf-files/doctors/mamologist.pdf',
    import.meta.url,
  ).href,
  otolaryngologist_one: new URL(
    '../assets/pdf-files/doctors/otolar.pdf',
    import.meta.url,
  ).href,
};

const urologist: IDocuments = {
  id: 'urologist',
  pdfArray: [allDoctorsPdfUrls.uretra_doctor],
};

const familyDoctor: IDocuments = {
  id: 'familydoctor',
  pdfArray: [
    allDoctorsPdfUrls.family_doctor_one,
    allDoctorsPdfUrls.family_doctor_two,
  ],
};

const mamologist: IDocuments = {
  id: 'mamologist',
  pdfArray: [allDoctorsPdfUrls.mamologist],
};

const hematologist: IDocuments = {
  id: 'hematologist',
  pdfArray: [
    allDoctorsPdfUrls.hematologist_1,
    allDoctorsPdfUrls.hematologist_2,
  ],
};

const otolaryngologist: IDocuments = {
  id: 'otolaryngologist',
  pdfArray: [allDoctorsPdfUrls.otolaryngologist_one],
};

const doctorsArray: IDocuments[] = [
  familyDoctor,
  urologist,
  mamologist,
  hematologist,
  otolaryngologist,
];
export default doctorsArray;
