import { IDocuments } from '../../types/interface';

const alltreatmentPdfUrls = {
  otosurgery: new URL(
    '../../assets/pdf-files/treatment/oto-surgery.pdf',
    import.meta.url,
  ).href,
};

const otosurgery: IDocuments = {
  id: 'otosurgery',
  pdfArray: [alltreatmentPdfUrls.otosurgery],
};

const chemotherapy: IDocuments = {
  id: 'otosurgery',
  pdfArray: [],
};
const radiationtherapy: IDocuments = {
  id: 'otosurgery',
  pdfArray: [],
};

const treatmentArray: IDocuments[] = [
  otosurgery,
  chemotherapy,
  radiationtherapy,
];
export default treatmentArray;
