<template>
  <div class="absolute left-28 top-0 p-2 h-full w-[80%]">
    <h1 class="text-white">產品頁</h1>
    <CardItem />
  </div>
</template>
<style scoped></style>
<script>
import CardItem from '../components/CardItem.vue'
export default {
  components: { CardItem },
  setup() {
    return {
      //   CardItem
    }
  }
}
</script>
<style scoped>
* {
  background-color: #000;
  width: 100%;
}
</style>
