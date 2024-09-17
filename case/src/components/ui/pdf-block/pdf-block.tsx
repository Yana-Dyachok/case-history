import { useState, ChangeEvent } from 'react';
import { Pagination } from '@mui/material';
import { IDocumentProps } from '../../../types/interface';
import PdfViewer from '../pdf-viewer/pdf-viewer';
import Loading from '../loading/loading';
import styles from './pdf-block.module.css';

function PdfBlock({ documents }: IDocumentProps) {
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    if (value !== page) {
      setPage(value);
      setIsLoading(true);
    }
  };

  const handlePdfLoad = () => {
    setIsLoading(false);
  };

  const currentPdfUrl = documents.pdfArray[page - 1];
  return (
    <div className={styles.container}>
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
        {isLoading && <Loading />}
        {currentPdfUrl && (
          <div className={styles.pdfContainer}>
            <PdfViewer pdfUrl={currentPdfUrl} onLoad={handlePdfLoad} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PdfBlock;
