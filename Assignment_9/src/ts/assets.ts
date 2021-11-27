export type Assets = {
  baseUrl: string;
  images:{ key:string, url:string }[];
};
export default {
  baseUrl: './assets/',
  images: [
   
    {
      key: 'dino',
      url: 'img/dino.json',
    },
    {
      key: 'back',
      url: 'img/backcard.png',//new
    },
    {
      key: 'front',
      url: 'img/smilies.jpg',
    },
    {
      key: 'desyrel',
      url: 'fonts/desyrel.xml',
    },
  ],
};
