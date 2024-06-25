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

export interface IDocumentsImg {
  id: string;
  imageUrlArray: string[];
}

export interface IDocumentProps {
  documentsImg: IDocumentsImg;
}

export interface IPopUpProps {
  documentsImg: IDocumentsImg;
  initialImageUrl: string;
  onClose: () => void;
}