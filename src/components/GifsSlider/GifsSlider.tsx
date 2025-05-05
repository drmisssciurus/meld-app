import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './GifsSlider.module.css';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/autoplay';

import gif1 from '../../assets/gifs/1.gif';
import gif2 from '../../assets/gifs/2.gif';
import gif3 from '../../assets/gifs/3.gif';
import gif4 from '../../assets/gifs/4.gif';
import gif5 from '../../assets/gifs/5.gif';
import gif6 from '../../assets/gifs/6.gif';
import gif7 from '../../assets/gifs/7.gif';
import gif8 from '../../assets/gifs/8.gif';
import gif9 from '../../assets/gifs/9.gif';
import gif10 from '../../assets/gifs/10.gif';

const gifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10];

function GifsSlider() {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 3.2,
          },
          1024: {
            slidesPerView: 4.2,
          },
        }}
        style={{
          width: '100%',
          padding: '10px 0',
        }}
      >
        {[...gifs, ...gifs].map((gifSrc, i) => (
          <SwiperSlide key={i}>
            <div className={styles.slideWrapper}>
              <img src={gifSrc} alt={`gif-${i}`} className={styles.gifImage} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GifsSlider;
