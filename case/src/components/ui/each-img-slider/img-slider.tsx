import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import SliderButton from '../slider-button/slider-button';
import { IDocumentProps } from '../../../types/interface';
import PopUpImg from '../popup/popup-img';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './img-slider.module.css';

function ImgSlider({ documentsImg }: IDocumentProps) {
  const [isPopUp, setIsPopUp] = useState<boolean>(false);
  const [currentImgUrl, setCurrentImgUrl] = useState<string>('');

  const handleImageClick = (imgUrl: string) => {
    setCurrentImgUrl(imgUrl);
    setIsPopUp(true);
  };

  const handleClosePopUp = () => {
    setIsPopUp(false);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    imgUrl: string,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleImageClick(imgUrl);
    }
  };

  return (
    <>
      <div className={styles.sliderBlock}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev',
          }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {documentsImg.imageUrlArray.map((imgUrl) => (
            <SwiperSlide key={imgUrl}>
              <div
                className={styles.documentPageImgBlock}
                onClick={() => handleImageClick(imgUrl)}
                onKeyDown={(event) => handleKeyDown(event, imgUrl)}
                tabIndex={0}
                role="button"
              >
                <img
                  src={imgUrl}
                  alt={imgUrl}
                  className={styles.documentPageImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.sliderBtns}>
          <SliderButton classNames="prev" />
          <SliderButton classNames="next" />
        </div>
      </div>
      {isPopUp && (
        <PopUpImg
         documentsImg={documentsImg}
          initialImageUrl={currentImgUrl}
          onClose={handleClosePopUp}
        />
      )}
    </>
  );
}

export default ImgSlider;

