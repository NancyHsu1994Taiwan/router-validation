<template>
  <div class="absolute left-[150px] top-0 h-full w-full">
    <ul class="bg-teal-900 w-[100px] h-full">
      <li>
        <router-link
          to="/dashBoard/productsTable"
          class="text-white block w-full hover:bg-teal-800 p-4"
          >後台產品頁</router-link
        >
      </li>
      <li>
        <router-link
          to="/dashBoard/UsersTable"
          class="text-white block w-full hover:bg-teal-800 p-4"
          >後台使用者頁</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
