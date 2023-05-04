<template>
  <div class="w-full h-full rounded bg-slate-900 p-4">
    <p class="text-white">產品圖片</p>
    <!-- <img src="" alt="" /> -->
    <!-- <div class="w-full h-full rounded bg-center bg-contain bg-[url('${$route.query.img}')]"></div> -->
  </div>
</template>
<script>
export default {
  props: ['imgUrl'],

  setup() {
    // data(){
    //   return{
    //     imgurl
    //   }
  }
}
// const data = [
//   {
//     id: 0,
//     name: 'product 01',
//     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt!',
//     price: 'NT 1000',
//     img: 'https://i.pinimg.com/564x/88/2c/6d/882c6dd08c439407145b5bc63fbc2a26.jpg'
//   },
//   {
//     id: 1,
//     name: 'product 02',
//     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt!',
//     price: 'NT 1800',
//     img: 'https://i.pinimg.com/564x/2c/dc/7e/2cdc7e24f736d17a63a8f073ea73af86.jpg'
//   },
//   {
//     id: 2,
//     name: 'product 03',
//     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt!',
//     price: 'NT 500',
//     img: 'https://i.pinimg.com/564x/f5/d3/87/f5d387f5d91fa5381c4e468d730f8459.jpg'
//   },
//   {
//     id: 3,
//     name: 'product 04',
//     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt!',
//     price: 'NT 600',
//     img: 'https://i.pinimg.com/564x/d7/7d/d8/d77dd8db52390526d97d353c28c5c925.jpg'
//   },
//   {
//     id: 4,
//     name: 'product 05',
//     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt!',
//     price: 'NT 900',
//     img: 'https://i.pinimg.com/564x/61/7b/24/617b24fb3a336a83c27f1d767906688e.jpg'
//   },
//   {
//     id: 5,
//     name: 'product 06',
//     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt!',
//     price: 'NT 1200',
//     img: 'https://i.pinimg.com/564x/19/0b/05/190b0568f06474af76df7c3acdc2521f.jpg'
//   }
// ]
// return {
//   data
// }
</script>
<style scoped>
img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
