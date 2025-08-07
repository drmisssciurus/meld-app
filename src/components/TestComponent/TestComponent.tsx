// import { Ref } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// // @ts-ignore
// import 'swiper/css';
// // @ts-ignore
// import 'swiper/css/pagination';
// import PublicationsItem from '../PublicationsItem/PublicationsItem';
// import styles from '../Publications/Publications.module.css';

// type PublicationsProps = {
//   sectionRef?: Ref<HTMLDivElement>;
// };

// const publications = [
//   {
//     name: 'Model’s Architecture',
//     autors:
//       'Martvel, G., Shimshoni, I. & Zamansky, A. Automated Detection of Cat Facial Landmarks. Int J Comput Vis (2024).',
//     articleName: 'Automated Detection of Cat Facial Landmarks',
//     articleLink: 'https://link.springer.com/article/10.1007/s11263-024-02006-w',
//   },
//   {
//     name: 'Dog Landmark Scheme',
//     autors:
//       'Martvel, G., Zamansky, A., Pedretti, G., Canori, C., Shimshoni, I. & Bremhorst A. (2025).',
//     articleName:
//       'Dog facial landmarks detection and its applications for facial analysis',
//     articleLink: 'https://www.nature.com/articles/s41598-025-07040-3',
//   },
//   {
//     name: 'Cat Landmark Scheme',
//     autors: 'Martvel, G., Farhat, N., Shimshoni, I., & Zamansky, A. (2023).',
//     articleName: 'CatFLW: Cat Facial Landmarks in the Wild Dataset',
//     articleLink: 'https://arxiv.org/abs/2305.04232',
//   },
//   {
//     name: 'Video-based Pain Recognition in Cats',
//     autors:
//       'Martvel, G., Lazebnik, T., Feighelstein, M., ... & Zamansky, A. (2025)',
//     articleName:
//       'Automated video-based pain recognition in cats using facial landmarks',
//     articleLink: 'https://www.nature.com/articles/s41598-024-78406-2',
//   },
//   {
//     name: 'Facial Dynamics of Brachycephalic Dogs',
//     autors:
//       'Martvel, G., Eretová, P., Přibylová, L., ... & Zamansky, A. (2025).',
//     articleName:
//       'Continuous automated analysis of facial dynamics of brachycephalic and...',
//     articleLink: 'https://link.springer.com/article/10.1186/s12917-025-04839-0',
//   },
//   {
//     name: 'Cat Facial Signals as a Social Function',
//     autors:
//       'Martvel, G., Scott, L., Florkiewicz, B., Zamansky, A., Shimshoni, I. & Lazebnik, T.',
//     articleName:
//       'Computational investigation of the social function of domestic cat facial signals',
//     articleLink: 'https://www.nature.com/articles/s41598-024-79216-2',
//   },
// ];

// function Publications({ sectionRef }: PublicationsProps) {
//   return (
//     <div className="container">
//       <div ref={sectionRef} className={styles.sliderWrapper}>
//         <h2 className={styles.title}>Publications</h2>
//         <Swiper
//           modules={[Pagination]}
//           spaceBetween={24}
//           slidesPerView={1.2}
//           breakpoints={{
//             640: {
//               slidesPerView: 2.2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           pagination={{ clickable: true }}
//           className={styles.swiper}
//         >
//           {publications.map((pub, idx) => (
//             <SwiperSlide key={idx} className={styles.slide}>
//               <div className={styles.slideInner}>
//                 <PublicationsItem {...pub} />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// export default Publications;
