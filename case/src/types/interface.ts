import { Neutrophils } from './types';

export interface ITags {
  children: React.ReactNode;
}

export interface IAnalysis {
  WBC: number;
  RBC: number;
  HGB: number;
  HCT: number;
  PLT: number;
  ESR: number;
}

export interface ILeucogram {
  Eosinophils: number | 0;
  Basophils: number | 0;
  Neutrophils: Neutrophils;
  Lymph: number;
  Mon: number;
}

export interface IDocuments {
  id: string;
  imageUrlArray: string[];
  pdfArray: string[];
}

export interface IDocumentProps {
  documents: IDocuments;
}

export interface IPopUpProps {
  documentsImg: IDocuments;
  initialImageUrl: string;
  onClose: () => void;
}

// export interface IDocumentsPdf {
//   id: string;
//   pdfArray: string[];
// }

// export interface IDocumentPdfProps {
//   documentsPdf: IDocumentsPdf;
// }
