<template>
  <div class="container mt-5">
    <h3>Net Banking Payment</h3>
    <p>Select your bank and proceed with payment.</p>

    <select v-model="selectedBank" class="form-select mb-3">
      <option disabled value="">Select Bank</option>
      <option>HDFC Bank</option>
      <option>ICICI Bank</option>
      <option>SBI</option>
      <option>Axis Bank</option>
    </select>

    <button
      class="btn btn-primary w-100"
      @click="proceedPayment"
      :disabled="!selectedBank"
    >
      Proceed with {{ selectedBank }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NetBankingPayment",
  setup() {
    const selectedBank = ref("");

    const proceedPayment = () => {
      alert(`Processing Net Banking Payment with ${selectedBank.value}`);
    };

    return { selectedBank, proceedPayment };
  },
});
</script>
