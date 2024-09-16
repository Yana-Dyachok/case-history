import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import styles from './pdf-viewer.module.css';

interface PdfProps {
  pdfUrl: string;
}

function PdfViewer({ pdfUrl }: PdfProps) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className={styles.pdfContainer}>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
        <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
}

export default PdfViewer;
