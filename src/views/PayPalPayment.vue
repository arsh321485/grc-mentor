<template>
  <div class="container mt-5">
    <h3 class="fw-bold mb-3">PayPal Payment</h3>
    <p class="text-muted">You will be redirected to PayPal to complete your payment.</p>

    <!-- PayPal Button Simulation -->
    <button class="btn btn-primary w-100 mt-3 rounded-pill" @click="redirectToPayPal">
      Continue to PayPal
    </button>

    <!-- Cancel Button -->
    <button class="btn btn-outline-secondary w-100 mt-3 rounded-pill" @click="goBack">
      Cancel
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PayPalPayment",
  setup() {
    const router = useRouter();

    const redirectToPayPal = () => {
      alert("Redirecting to PayPal...");
      // Simulate redirect
      setTimeout(() => {
        alert("Payment Successful via PayPal!");
        router.push("/"); // ✅ Redirect back to home or success page
      }, 1500);
    };

    const goBack = () => {
      router.back();
    };

    return { redirectToPayPal, goBack };
  },
});
</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>
