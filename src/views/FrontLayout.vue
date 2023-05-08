<template>
  <div class="absolute left-[150px] top-0 h-full w-full">
    <!--  class="absolute right-0 top-0 h-full w-full" -->
    <ul class="bg-teal-900 h-full w-[100px]">
      <li>
        <router-link to="/indexPage" class="text-white block w-full hover:bg-teal-800 p-4"
          >首頁</router-link
        >
      </li>
      <li>
        <router-link to="/productsView" class="text-white block w-full hover:bg-teal-800 p-4"
          >產品頁</router-link
        >
      </li>
    </ul>
    <router-view />
  </div>
</template>
<script>
export default {
  setup() {}
}
</script>
<style scoped></style>
