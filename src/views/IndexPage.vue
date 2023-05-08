<template>
  <div class="absolute left-28 top-0 h-full w-[70%]">
    <!--  class="absolute right-0 top-0 h-full w-[70%]" -->
    <h1 class="text-white text-4xl">COOL STATIONARY</h1>
    <h2 class="text-white text-2xl">請填寫寄送方式</h2>
    <VForm v-slot="{ handleReset }">
      <label for="name" class="text-white block text-sm">Name</label>
      <VField
        id="name"
        name="name"
        label="Name"
        type="text"
        placeholder="your name"
        rules="required|alpha_spaces"
        class="p-1 text-white text-sm"
        v-model="data.name"
      />
      <ErrorMessage name="name" class="mb-1 text-red-600 text-xs" as="div"></ErrorMessage>
      <label for="email" class="text-white block text-sm">Email</label>
      <VField
        id="email"
        name="email"
        label="email"
        type="text"
        placeholder="your email"
        rules="required|email"
        class="p-1 text-sm text-white"
        v-model="data.email"
      />
      <ErrorMessage name="email" class="block mb-1 text-red-600 text-xs"></ErrorMessage>
      <label for="tel" class="text-white block text-sm">Telephone</label>
      <VField
        id="tel"
        name="tel"
        label="tel"
        type="text"
        placeholder="your phone number"
        rules="required|digits:10"
        class="p-1 text-sm text-white"
        v-model="data.tel"
      />
      <!-- :rules="isPhone" -->
      <!-- rules="required|digits:10" -->
      <ErrorMessage name="tel" class="block mb-1 text-red-600 text-xs"></ErrorMessage>
      <label for="note" class="text-white block text-sm">備註</label>
      <VField
        id="note"
        name="note"
        label="note"
        as="textarea"
        rows="2"
        cols="40"
        rules=""
        class="p-2 border-2 border-white rounded text-white text-sm"
        v-model="data.note"
      />
      <label for="shipping" class="text-white block text-sm">寄送方式</label>

      <VField
        id="shipping"
        name="shipping"
        label="shipping"
        type="radio"
        rules="required"
        class="p-2 text-white mb-1"
      >
        <select
          name="shipping"
          id=""
          class="border-2 border-white bg-slate-900 text-white text-sm mb-2"
          placeholder="請選擇寄送方式"
          v-model="data.shipping"
        >
          <option selected value="" class="border-2 border-white text-white rounded">
            請選擇寄送方式
          </option>
          <option value="convenienceStore" class="border-2 border-white text-white">
            超商取貨
          </option>
          <option value="postal" class="border-2 border-white text-white">中華郵政</option>
          <option value="homeDelivery" class="border-2 border-white text-white">黑貓宅配</option>
        </select>
      </VField>

      <button
        type="Submit"
        id="submitBtn"
        class="block text-white border-2 border-white rounded p-1 w-[100px] text-sm"
        :disabled="!isComplete"
        @click="handleReset"
      >
        送出
      </button>
    </VForm>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
// import { ValidationProvider } from 'vee-validate'
// components: {
//   ValidationProvider
// }
export default {
  setup() {
    // function isPhone(value) {
    //   const phoneNumber = /^(09)[0-9]{8}$/
    //   return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    // }
    // return isPhone
    let data = reactive({
      name: '',
      email: '',
      tel: '',
      note: '',
      shipping: ''
    })
    const isComplete = computed(() => {
      return data.name && data.email && data.tel && data.shipping
    })
    // const changeStatus = computed(() => {
    //   const submitBtn = document.querySelector('#submitBtn')
    //   return submitBtn.getAttribute('disabled')
    // })
    // onMounted(() => {
    //   changeStatus()
    // })
    return {
      data,
      isComplete
      // changeStatus
    }
  }
}
</script>
<style scoped>
body {
  background-color: #000;
  width: 100%;
}
form {
  width: 500px !important;
}
input,
textarea {
  border: #fff solid 1px;
  border-radius: 4px;
  background-color: #000;
  width: 500px;
}

#submitBtn:disabled {
  color: gray;
}
</style>
