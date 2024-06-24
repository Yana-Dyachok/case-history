import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderButton from '../slider-button/slider-button';
import {IPopUpProps } from '../../../types/interface';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './popup-img.module.css';

function PopUpImg({ documentsImg, initialImageUrl, onClose }: IPopUpProps) {
  return (
    <div className={styles.popup}>
      <div className={styles.popupBody}>
        <div className={styles.popupContentImg}>
        <button type="button" className={styles.closePopupBtn} onClick={onClose}/>
          <Swiper
            style={{ marginLeft: 'unset', marginRight: 'unset' }}
            className={styles.swiper}
            modules={[Navigation]}
            navigation={{
              nextEl: '.next',
              prevEl: '.prev',
            }}
            spaceBetween={35}
            slidesPerView={1}
            initialSlide={documentsImg.imageUrlArray.indexOf(initialImageUrl)}
          >
            {documentsImg.imageUrlArray.map((imgUrl) => (
              <SwiperSlide key={imgUrl}>
                <div className={styles.popupImageBlock}>
                  <img
                    src={imgUrl}
                    alt={imgUrl}
                    className={styles.popupImage}
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
      </div>
    </div>
  );
}

export default PopUpImg;
