import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './GifsSlider.module.css';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/autoplay';

const gifs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        {[...gifs, ...gifs].map((n, i) => (
          <SwiperSlide key={i}>
            <div className={styles.slideWrapper}>
              <img
                src={`./assets/gifs/${n}.gif`}
                alt={`gif-${n}`}
                className={styles.gifImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GifsSlider;
