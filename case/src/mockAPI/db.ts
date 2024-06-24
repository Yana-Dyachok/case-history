import { IDocumentsImg } from "../types/interface";
// export const documentsArray = [
//     {
//       "id": '1',
//       "imageUrl": "./oksana.jpg",
//     }, 
//     {
//       "id": '2',
//       "imageUrl": "./bikes/bike_2_orange.webp",
//     },
//     {
//       "id": '3', 
//       "imageUrl": "./bikes/bike_3_gray.webp",
//     },
//     {
//       "id": '4',
//       "imageUrl": "./bikes/bike_4_electro.webp",
//     },
//     {
//       "id": '5',
//       "imageUrl": "./bikes/bike_1_white.webp",
//     }
//   ]


  export const documentsArray: IDocumentsImg = {
    imageUrlArray: [
      new URL('../assets/img/oksana.jpg', import.meta.url).href,
      new URL('../assets/img/treatment/uretra-treatment.jpg', import.meta.url).href,
      new URL('../assets/img/treatment/uretra-treatment.jpg', import.meta.url).href,
    ],
  };
  
  export const urologTreatmentArray: IDocumentsImg = {
    imageUrlArray: [
      new URL('../assets/img/treatment/uretra-treatment.jpg', import.meta.url).href,
      new URL('../assets/img/treatment/uretra-treatment.jpg', import.meta.url).href,
      new URL('../assets/img/doctors/uretra.jpg', import.meta.url).href,
    ],
  };

  export const urologArray: IDocumentsImg = {
    imageUrlArray: [
      new URL('../assets/img/doctors/uretra.jpg', import.meta.url).href,
    ],
  };