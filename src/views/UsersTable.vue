<template>
  <div class="absolute left-28 top-0 h-full w-full">
    <h1 class="text-white">後台使用者頁</h1>
    <tr>
      <td class="col-1">姓名</td>
      <td class="col-2">地址</td>
      <td class="col-3">生日</td>
    </tr>
    <tr v-for="item in user" :key="item.id">
      <td class="col-1">{{ item.user }}</td>
      <td class="col-2">{{ item.address }}</td>
      <td class="col-3">{{ item.birthDay }}</td>
    </tr>
  </div>
</template>
<style scoped>
* {
  background-color: #000;
  width: 100%;
}
tr,
td {
  border: #fff 1px solid;
  color: #fff;
  font-size: 16px;
}

.col-1 {
  width: 15%;
}
.col-2 {
  width: 60%;
}
.col-3 {
  width: 25%;
}
</style>
<script>
export default {
  setup() {
    const user = [
      {
        id: 0,
        user: 'user 01',
        address: 'somewhere',
        birthDay: '1994/01/01'
      },
      {
        id: 1,
        user: 'user 02',
        address: 'earth',
        birthDay: '1994/02/02'
      },
      {
        id: 2,
        user: 'user 03',
        address: 'taiwan',
        birthDay: '1994/03/03'
      },
      {
        id: 3,
        user: 'user 04',
        address: 'kaohsiung',
        birthDay: '1994/04/04'
      },
      {
        id: 4,
        user: 'user 05',
        address: 'tainan',
        birthDay: '1994/05/05'
      }
    ]

    return {
      user
    }
  }
}
</script>
