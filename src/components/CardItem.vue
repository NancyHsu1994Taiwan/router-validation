<template>
  <div class="grid grid-cols-4 grid-row-2 gap-2 w-[80%] h-full">
    <div v-for="item in data" :key="item.id" class="card flex flex-col justify-between p-4">
      <p class="text-xl text-white border-b-2 border-white pb-2">
        {{ item.name }}
      </p>
      <p class="text-sm text-white">
        {{ item.description }}
      </p>
      <div class="flex justify-between items-center border-t-2 border-white pt-2">
        <p class="text-base text-white">{{ item.price }}</p>
        <a class="rounded border-2 border-white p-1" @click="showProduct">
          <router-link :to="`/frontLayout/productsView/productView?imgUrl=${item.img}`">
            <p class="text-white text-xs">點擊看大圖</p>
          </router-link>
          <!-- :to={
            path:"/frontLayout/productsView/productView",
            query:{
              imgUrl:item.img
            }
            } -->
        </a>
      </div>
    </div>
  </div>
  <div id="pop" class="hidden">
    <button
      type="btn"
      id="close"
      class="px-2 py-1 bg-slate-700 text-white z-10 absolute top-5 right-5 rounded"
      @click="close"
    >
      x
    </button>
    <router-view :img-url="imgUrl" />
  </div>
</template>
<style scoped>
.card {
  border: #fff 1px solid;
  border-radius: 16px;
}

.mask {
  background-color: rgba(57, 57, 57, 0.8);
  border-radius: 16px;
  overflow: hidden;

  width: 50%;
  height: 80%;
  margin: 0 auto;
  position: absolute;
  top: 10%;
  left: 15%;
}
</style>
<script>
export default {
  setup() {
    const data = [
      {
        id: 0,
        name: 'product 01',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt!',
        price: 'NT 1000',
        img: 'https://i.pinimg.com/564x/88/2c/6d/882c6dd08c439407145b5bc63fbc2a26.jpg'
      },
      {
        id: 1,
        name: 'product 02',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt!',
        price: 'NT 1800',
        img: 'https://i.pinimg.com/564x/2c/dc/7e/2cdc7e24f736d17a63a8f073ea73af86.jpg'
      },
      {
        id: 2,
        name: 'product 03',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt!',
        price: 'NT 500',
        img: 'https://i.pinimg.com/564x/f5/d3/87/f5d387f5d91fa5381c4e468d730f8459.jpg'
      },
      {
        id: 3,
        name: 'product 04',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt!',
        price: 'NT 600',
        img: 'https://i.pinimg.com/564x/d7/7d/d8/d77dd8db52390526d97d353c28c5c925.jpg'
      },
      {
        id: 4,
        name: 'product 05',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt!',
        price: 'NT 900',
        img: 'https://i.pinimg.com/564x/61/7b/24/617b24fb3a336a83c27f1d767906688e.jpg'
      },
      {
        id: 5,
        name: 'product 06',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt!',
        price: 'NT 1200',
        img: 'https://i.pinimg.com/564x/19/0b/05/190b0568f06474af76df7c3acdc2521f.jpg'
      }
    ]

    function showProduct() {
      console.log('ok')
      const pop = document.querySelector('#pop')
      pop.setAttribute('class', 'block mask')
    }
    function close() {
      const pop = document.querySelector('#pop')
      pop.setAttribute('class', 'hidden')
    }
    return {
      data,
      showProduct,
      close
    }
  }
}
</script>
