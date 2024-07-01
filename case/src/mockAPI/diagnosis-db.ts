import { IDocuments } from '../types/interface';

const allImageUrls = {
  fgds: new URL('../assets/img/diagnosis/fgds.jpg', import.meta.url).href,
  sct_one: new URL('../assets/img/diagnosis/ckt-1.jpg', import.meta.url).href,
  sct_two: new URL('../assets/img/diagnosis/ckt-2.jpg', import.meta.url).href,
  usthyroid: new URL(
    '../assets/img/diagnosis/ultrasound-tyreoid.jpg',
    import.meta.url,
  ).href,
  usbreast: new URL(
    '../assets/img/diagnosis/ultrasound-mamolog.jpg',
    import.meta.url,
  ).href,
  echo: new URL('../assets/img/diagnosis/echo.jpg', import.meta.url).href,
  usabdomen_one: new URL(
    '../assets/img/diagnosis/ultrasound.jpg',
    import.meta.url,
  ).href,
  usabdomen_two: new URL(
    '../assets/img/diagnosis/ultrasound-2.jpg',
    import.meta.url,
  ).href,
  uskidney: new URL('../assets/img/diagnosis/uretra.jpg', import.meta.url).href,
};

const allPdfUrls = {
  petct_pdf_1: new URL('../assets/pdf-files/petct.pdf', import.meta.url).href,
  pathistology_1: new URL(
    '../assets/pdf-files/gistologia-2.pdf',
    import.meta.url,
  ).href,
  pathistology_2: new URL('../assets/pdf-files/gistologia.pdf', import.meta.url)
    .href,
  pathistology_3: new URL(
    '../assets/pdf-files/csd-lab-gistologia.pdf',
    import.meta.url,
  ).href,
  oro_bac_flora: new URL(
    '../assets/pdf-files/analysis/oro-bak.pdf',
    import.meta.url,
  ).href,
  uro_bac_flora: new URL(
    '../assets/pdf-files/analysis/uro-analisis.pdf',
    import.meta.url,
  ).href,
  hepatitis: new URL(
    '../assets/pdf-files/analysis/hepatit.pdf',
    import.meta.url,
  ).href,
  hiv: new URL(
    '../assets/pdf-files/analysis/hiv.pdf',
    import.meta.url,
  ).href,
  herpes: new URL(
    '../assets/pdf-files/analysis/herpes-cmv.pdf',
    import.meta.url,
  ).href,
};

const fgds: IDocuments = {
  id: 'fgds',
  imageUrlArray: [allImageUrls.fgds],
  pdfArray: [],
};

const sct: IDocuments = {
  id: 'sct',
  imageUrlArray: [allImageUrls.sct_one, allImageUrls.sct_two],
  pdfArray: [],
};

const petct: IDocuments = {
  id: 'petct',
  imageUrlArray: [],
  pdfArray: [allPdfUrls.petct_pdf_1],
};

const pathistology: IDocuments = {
  id: 'pathistology',
  imageUrlArray: [],
  pdfArray: [
    allPdfUrls.pathistology_1,
    allPdfUrls.pathistology_2,
    allPdfUrls.pathistology_3,
  ],
};

const usthyroid: IDocuments = {
  id: 'usthyroid',
  imageUrlArray: [allImageUrls.usthyroid],
  pdfArray: [],
};

const usbreast: IDocuments = {
  id: 'usbreast',
  imageUrlArray: [allImageUrls.usbreast],
  pdfArray: [],
};

const uskidney: IDocuments = {
  id: 'uskidney',
  imageUrlArray: [allImageUrls.uskidney],
  pdfArray: [],
};

const echo: IDocuments = {
  id: 'echo',
  imageUrlArray: [allImageUrls.echo],
  pdfArray: [],
};

const usabdomen: IDocuments = {
  id: 'usabdomen',
  imageUrlArray: [allImageUrls.usabdomen_one, allImageUrls.usabdomen_two],
  pdfArray: [],
};

const oro_bac_flora: IDocuments = {
  id: 'oro_bac_flora',
  imageUrlArray: [],
  pdfArray: [allPdfUrls
    .oro_bac_flora],
};

const uro_bac_flora: IDocuments = {
  id: 'uro_bac_flora',
  imageUrlArray: [],
  pdfArray: [allPdfUrls.uro_bac_flora],
};

const hepatitis: IDocuments = {
  id: 'hepatitis',
  imageUrlArray: [],
  pdfArray: [allPdfUrls.hepatitis],
};

const hiv: IDocuments = {
  id: 'hiv',
  imageUrlArray: [],
  pdfArray: [allPdfUrls.hiv],
};

const herpes: IDocuments = {
  id: 'herpes',
  imageUrlArray: [],
  pdfArray: [allPdfUrls.herpes],
};

export const diagnosisArray: IDocuments[] = [fgds, sct, petct, pathistology];
export const ultrasoundArray: IDocuments[] = [
  usthyroid,
  usbreast,
  usabdomen,
  echo,
  uskidney,
];

export const infectionsArray: IDocuments[] = [
  oro_bac_flora,
  uro_bac_flora,
  hepatitis,
  hiv,
  herpes
];