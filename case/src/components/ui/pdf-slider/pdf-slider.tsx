import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderButton from '../slider-button/slider-button';
import { IDocumentProps } from '../../../types/interface';
import PdfViewer from '../pdf-viewer/pdf-viewer';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './pdf-slider.module.css';

function PdfSlider({ documents }: IDocumentProps) {
  return (
    <div className={styles.container}>
      <div className={styles.sliderBlock}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev',
          }}
          spaceBetween={40}
          slidesPerView={1}
        >
          {documents.pdfArray.map((pdfUrl) => (
            <SwiperSlide key={pdfUrl}>
              <PdfViewer pdfUrl={pdfUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.sliderBtns}>
          <SliderButton classNames="prev" />
          <SliderButton classNames="next" />
        </div>
      </div>
    </div>
  );
}

export default PdfSlider;
