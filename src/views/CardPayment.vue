<template>
  <main>
    <div class="container payment-container py-4">
      <!-- Header -->
      <div class="d-flex align-items-center mb-3">
        <button class="btn btn-link p-0 me-2" @click="goBack">
          <i class="bi bi-arrow-left"></i>
        </button>
        <h5 class="mb-0 fw-bold">Checkout</h5>
      </div>

      <small class="text-muted d-block mb-3">
        Proceeding with {{ methodLabel }}
      </small>

      <!-- Card Number -->
      <div class="mb-3">
        <label class="form-label fw-bold">Credit card number</label>
        <div class="input-group">
          <input v-model="card.number" type="text" class="form-control" placeholder="XXXX XXXX XXXX" />
          <span class="input-group-text">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="visa" height="20" />
          </span>
        </div>
      </div>

      <!-- Cardholder Name -->
      <div class="mb-3">
        <label class="form-label fw-bold">Cardholder’s name as on the card</label>
        <input v-model="card.name" type="text" class="form-control" placeholder="eg. John Doe" />
      </div>

      <!-- Expiry & CVV -->
      <div class="row mb-3">
        <div class="col-4">
          <label class="form-label fw-bold">Expire date</label>
          <input v-model="card.mm" type="text" class="form-control" placeholder="MM" />
        </div>
        <div class="col-4">
          <label class="form-label">&nbsp;</label>
          <input v-model="card.yy" type="text" class="form-control" placeholder="YY" />
        </div>
        <div class="col-4">
          <label class="form-label fw-bold">CVV</label>
          <input v-model="card.cvv" type="password" class="form-control" placeholder="XXX" />
        </div>
      </div>

      <!-- Summary -->
      <div class="payment-summary mt-4">
        <div class="d-flex justify-content-between">
          <span>Items price :</span><span>150.00$</span>
        </div>
        <div class="d-flex justify-content-between">
          <span>Delivery :</span><span>50.00$</span>
        </div>
        <hr />
        <div class="d-flex justify-content-between fw-bold">
          <span>Total Payment :</span><span>200.00$</span>
        </div>
        <small class="text-primary" style="cursor: pointer;">view price details</small>
      </div>

      <button class="btn w-100 mt-3 rounded-pill" style="background-color: #007BAF; color: white;" @click="pay">
        Pay
      </button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "CardPayment",
  setup() {
    const route = useRoute();
    const method = (route.query.method as string) || "credit";

    const methodLabel = computed(() =>
      method === "debit" ? "Debit card" : "Credit card"
    );

    const card = reactive({
      number: "",
      name: "",
      mm: "",
      yy: "",
      cvv: "",
    });

    const goBack = () => window.history.back();
    const pay = () => alert(`Paying with ${methodLabel.value}`);

    return { methodLabel, card, pay, goBack };
  },
});
</script>

<style scoped>
.payment-container { max-width: 600px; background: #fff; }
.payment-summary { border-top: 1px solid #ddd; padding-top: 10px; }
</style>
