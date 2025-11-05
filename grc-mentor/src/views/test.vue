<template>
  <main class="mentorship-page">
    <div class="container-fluid">
      <div class="row g-4">
        <!-- Stepper Left Column -->
        <div class="col-2 col-md-2">
          <Stepper :currentStep="3" />
        </div>

        <!-- Right Main Column -->
        <div class="col-10 col-md-10 mt-5">
          <!-- Banner -->
          <div class="banner mb-5">
            <div class="banner-left">
              <h6 class="banner-title">Payment Setup</h6>
              <p class="banner-sub">
                GRC-101 mentorship program cost and payment details (international supported)
              </p>
            </div>
            <div class="banner-right">{{ displayLevel }}</div>
          </div>

          <section class="">
            <div class="row g-4">
              <!-- Left: payment form/details -->
              <div class="col-lg-8">
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-body p-4">
                    <h5 class="mb-3">Choose payment method</h5>

                    <div class="mb-3">
                      <div class="btn-group w-100" role="group" aria-label="payment methods">
                        <label
                          class="btn btn-outline-secondary text-start"
                          :class="{ active: selected === 'card' }"
                          @click="selectMethod('card')"
                        >
                          <input type="radio" name="pay" class="d-none" :checked="selected === 'card'" />
                          <div class="fw-semibold">Card</div>
                          <div class="small text-muted">Visa, Mastercard, Amex (multi-currency)</div>
                        </label>

                        <label
                          class="btn btn-outline-secondary text-start"
                          :class="{ active: selected === 'paypal' }"
                          @click="selectMethod('paypal')"
                        >
                          <input type="radio" name="pay" class="d-none" :checked="selected === 'paypal'" />
                          <div class="fw-semibold">PayPal / Checkout</div>
                          <div class="small text-muted">Popular international wallets / PayPal</div>
                        </label>

                        <label
                          class="btn btn-outline-secondary text-start"
                          :class="{ active: selected === 'netbanking' }"
                          @click="selectMethod('netbanking')"
                        >
                          <input type="radio" name="pay" class="d-none" :checked="selected === 'netbanking'" />
                          <div class="fw-semibold">Netbanking</div>
                          <div class="small text-muted">Local banks</div>
                        </label>
                      </div>
                    </div>

                    <!-- Card form -->
                    <div v-if="selected === 'card'" class="mt-3">
                      <h6 class="mb-2">Card details</h6>
                      <div class="row g-2">
                        <div class="col-md-8">
                          <input
                            v-model="card.number"
                            maxlength="19"
                            placeholder="Card number"
                            class="form-control"
                          />
                        </div>
                        <div class="col-md-4">
                          <input v-model="card.name" placeholder="Name on card" class="form-control" />
                        </div>
                        <div class="col-md-3 mt-2">
                          <input v-model="card.exp" placeholder="MM/YY" class="form-control" />
                        </div>
                        <div class="col-md-3 mt-2">
                          <input v-model="card.cvv" placeholder="CVV" maxlength="4" class="form-control" />
                        </div>
                      </div>
                      <div v-if="cardError" class="text-danger small mt-2">{{ cardError }}</div>
                    </div>

                    <!-- Terms -->
                    <div class="mb-3 mt-4">
                      <a
                        href="javascript:void(0)"
                        class="text-primary small"
                        @click="openPolicyModal"
                      >
                        Accept Terms & Conditions
                      </a>
                    </div>

                    <router-link to="/paymentsuccess">
                      <button
                        class="btn btn-submit w-100 mb-2"
                        :disabled="!agreed || isProcessing"
                      >
                        Pay {{ formatted(totalConverted) }}
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- Right: Order summary + currency -->
              <div class="col-lg-4">
                <div class="card border-0 shadow-sm position-sticky" style="top: 90px;">
                  <div class="card-body p-4">
                    <h6 class="mb-3">Quick Summary</h6>
                    <div class="fs-4 fw-bold mb-1">{{ formatted(totalConverted) }}</div>
                    <div class="text-muted mb-3 small">Mentorship fee ({{ currency }})</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- ✅ Modal (same as Signup) -->
    <div
      v-if="showPolicyModal"
      class="center-modal-overlay"
      @click.self="closePolicyModal"
    >
      <div class="center-modal glass-card">
        <div class="modal-header">
          <h6>Acceptance Usage Policy</h6>
          <button class="close-btn" @click="closePolicyModal">&times;</button>
        </div>
        <div class="modal-body">
          <p>
            By proceeding with this payment, you agree to follow the platform guidelines,
            respect user privacy, and responsibly use all provided resources.
          </p>
          <p>
            Any misuse of the platform or violation of ethical standards may lead to
            termination of your account.
          </p>
          <div class="form-check gap-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="agreeTerms"
              v-model="agreed"
            />
            <label class="form-check-label small-text" for="agreeTerms">
              I agree to the terms
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary btn-sm" @click="closePolicyModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Stepper from "@/components/Stepper.vue";

export default {
  name: "PaymentSetupIntlWithLevel",
  components: { Stepper },
  data() {
    return {
      currency: "INR",
      totalConverted: 9999,
      card: { number: "", name: "", exp: "", cvv: "" },
      selected: "card",
      isProcessing: false,
      cardError: "",
      showPolicyModal: false,
      agreed: false,
    };
  },
  methods: {
    openPolicyModal() {
      this.showPolicyModal = true;
    },
    closePolicyModal() {
      this.showPolicyModal = false;
    },
    formatted(amount: any) {
      try {
        return new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: this.currency,
        }).format(amount);
      } catch {
        return `${this.currency} ${amount}`;
      }
    },
    selectMethod(method: string) {
      this.selected = method;
    },
  },
};
</script>

<style scoped>
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  font-family: "Inter", sans-serif;
}

.banner {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px 25px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.btn-submit {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  border: none;
  border-radius: 22px;
  padding: 10px 28px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
}
.btn-submit:hover {
  background: linear-gradient(90deg, #2f80ed, #2d9cdb);
}
.btn-submit:disabled {
  background: #b3d7e6;
  cursor: not-allowed;
}

/* ✅ Modal (same as signup) */
.center-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}
.center-modal {
  width: 500px;
  max-width: 95%;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.modal-header,
.modal-footer {
  padding: 12px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-body {
  padding: 15px;
  font-size: 14px;
  color: #444;
}
.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
.small-text {
  font-size: 13px;
  color: #555;
}
</style>
