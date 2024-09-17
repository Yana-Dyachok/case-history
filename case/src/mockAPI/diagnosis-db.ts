import { IDocuments } from '../types/interface';

const allPdfUrls = {
  petct_pdf_1: new URL(
    '../assets/pdf-files/diagnosis/petct.pdf',
    import.meta.url,
  ).href,
  petct_pdf_2: new URL(
    '../assets/pdf-files/diagnosis/petct-2.pdf',
    import.meta.url,
  ).href,
  pathistology_1: new URL(
    '../assets/pdf-files/diagnosis/gistologia-2.pdf',
    import.meta.url,
  ).href,
  pathistology_2: new URL(
    '../assets/pdf-files/diagnosis/gistologia.pdf',
    import.meta.url,
  ).href,
  pathistology_3: new URL(
    '../assets/pdf-files/diagnosis/csd-lab-gistologia.pdf',
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
  hiv: new URL('../assets/pdf-files/analysis/hiv.pdf', import.meta.url).href,
  herpes: new URL(
    '../assets/pdf-files/analysis/herpes-cmv.pdf',
    import.meta.url,
  ).href,
  sct: new URL('../assets/pdf-files/diagnosis/ckt.pdf', import.meta.url).href,
  fgds: new URL('../assets/pdf-files/diagnosis/fgds.pdf', import.meta.url).href,
  usthyroid: new URL(
    '../assets/pdf-files/diagnosis/ultrasound-tyreoid.pdf',
    import.meta.url,
  ).href,
  usbreast: new URL(
    '../assets/pdf-files/diagnosis/ultrasound-mamolog.pdf',
    import.meta.url,
  ).href,
  echo: new URL('../assets/pdf-files/diagnosis/echo.pdf', import.meta.url).href,
  usabdomen: new URL(
    '../assets/pdf-files/diagnosis/ultrasound-abdomen.pdf',
    import.meta.url,
  ).href,
  uskidney: new URL('../assets/pdf-files/diagnosis/uretra.pdf', import.meta.url)
    .href,
};

const fgds: IDocuments = {
  id: 'fgds',
  pdfArray: [allPdfUrls.fgds],
};

const sct: IDocuments = {
  id: 'sct',
  pdfArray: [allPdfUrls.sct],
};

const petct: IDocuments = {
  id: 'petct',
  pdfArray: [allPdfUrls.petct_pdf_1, allPdfUrls.petct_pdf_2],
};

const pathistology: IDocuments = {
  id: 'pathistology',
  pdfArray: [
    allPdfUrls.pathistology_1,
    allPdfUrls.pathistology_2,
    allPdfUrls.pathistology_3,
  ],
};

const usthyroid: IDocuments = {
  id: 'usthyroid',
  pdfArray: [allPdfUrls.usthyroid],
};

const usbreast: IDocuments = {
  id: 'usbreast',
  pdfArray: [allPdfUrls.usbreast],
};

const uskidney: IDocuments = {
  id: 'uskidney',
  pdfArray: [allPdfUrls.uskidney],
};

const echo: IDocuments = {
  id: 'echo',
  pdfArray: [allPdfUrls.echo],
};

const usabdomen: IDocuments = {
  id: 'usabdomen',
  pdfArray: [allPdfUrls.usabdomen],
};

const oro_bac_flora: IDocuments = {
  id: 'oro_bac_flora',
  pdfArray: [allPdfUrls.oro_bac_flora],
};

const uro_bac_flora: IDocuments = {
  id: 'uro_bac_flora',
  pdfArray: [allPdfUrls.uro_bac_flora],
};

const hepatitis: IDocuments = {
  id: 'hepatitis',
  pdfArray: [allPdfUrls.hepatitis],
};

const hiv: IDocuments = {
  id: 'hiv',
  pdfArray: [allPdfUrls.hiv],
};

const herpes: IDocuments = {
  id: 'herpes',
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
  herpes,
];
