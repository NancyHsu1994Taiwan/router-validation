<template>
  <div class="w-full h-full rounded bg-slate-900 p-4">
    <img :src="`${$route.query.imgUrl}`" alt="" class="rounded" />
    <!-- <div class="w-full h-full rounded bg-center bg-contain bg-[url("`${$route.query.imgUrl}`")] "></div> -->
  </div>
</template>

<style scoped>
img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
