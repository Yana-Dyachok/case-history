import { useState, ChangeEvent } from 'react';
import { Pagination } from '@mui/material';
import { IDocumentProps } from '../../types/interface';
import PdfViewer from '../ui/pdf-viewer/pdf-viewer';
import styles from './pdf-block.module.css';

function PdfBlock({ documents }: IDocumentProps) {
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    if (value !== page) {
      setPage(value);
    }
  };

  const currentPdfUrl = documents.pdfArray[page - 1];
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Pagination
          sx={{
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: '#f99a54',
              color: '#ffffff',
            },
            '& .MuiPaginationItem-icon': {
              color: '#136e35',
            },
          }}
          shape="rounded"
          count={documents.pdfArray.length}
          page={page}
          onChange={handlePageChange}
        />
        <div className={styles.pdfBlock}>
          {currentPdfUrl && (
            <div className={styles.pdfContainer}>
              <PdfViewer pdfUrl={currentPdfUrl} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PdfBlock;
