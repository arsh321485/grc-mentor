<template>
  <main class="mentorship-page">
    <div class="container-fluid">
      <div class="row g-4">
        <div class="col-2 col-md-2">
          <Stepper :currentStep="3" />
        </div>

        <div class="col-10 col-md-10 mt-5">
          <div class="banner mb-5">
            <div class="banner-left">
              <h6 class="banner-title">Payment Setup</h6>
              <p class="banner-sub">
                GRC-101 mentorship program cost and payment details (international supported)
              </p>
            </div>
            <div class="banner-right">{{ displayLevel }}</div>
          </div>

          <section>
            <div class="row g-4">
              <div class="col-lg-8">
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-body p-4">
                    <h5 class="mb-3">Choose payment method</h5>

                    <div class="mb-3">
                      <div class="btn-group w-100" role="group">
                        <label
                          class="btn btn-outline-secondary text-start"
                          :class="{ active: selected === 'card' }"
                          @click="selectMethod('card')"
                        >
                          <div class="fw-semibold">Card</div>
                          <div class="small text-muted">Visa, Mastercard, Amex (multi-currency)</div>
                        </label>

                        <label
                          class="btn btn-outline-secondary text-start"
                          :class="{ active: selected === 'paypal' }"
                          @click="selectMethod('paypal')"
                        >
                          <div class="fw-semibold">PayPal / Checkout</div>
                          <div class="small text-muted">Popular international wallets / PayPal</div>
                        </label>

                        <label
                          class="btn btn-outline-secondary text-start"
                          :class="{ active: selected === 'netbanking' }"
                          @click="selectMethod('netbanking')"
                        >
                          <div class="fw-semibold">Netbanking</div>
                          <div class="small text-muted">Local banks</div>
                        </label>
                      </div>
                    </div>

                    <div v-if="selected === 'card'" class="mt-3">
                      <h6 class="mb-2">Card details</h6>
                      <div class="row g-2">
                        <div class="col-md-8">
                          <input v-model="card.number" maxlength="19" placeholder="Card number" class="form-control" />
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

                    <div v-if="selected === 'paypal'" class="mt-3">
                      <h6 class="mb-2">Pay via PayPal / Checkout</h6>
                      <p class="small text-muted">You will be redirected to PayPal for secure checkout.</p>
                      <button class="btn btn-outline-primary" @click="startPaypalFlow" :disabled="isProcessing">
                        Pay via PayPal
                      </button>
                    </div>

                    <div v-if="selected === 'netbanking'" class="mt-3">
                      <h6 class="mb-2">Netbanking</h6>
                      <select v-model="bank" class="form-select">
                        <option value="">Select bank</option>
                        <option>State Bank of India</option>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>Axis Bank</option>
                      </select>
                    </div>

                    <div class="mt-4">
                      <label class="form-label small">Have a coupon?</label>
                      <div class="input-group">
                        <input v-model="coupon" class="form-control" placeholder="Enter coupon code" />
                        <button class="btn btn-outline-primary" @click="applyCoupon" :disabled="isApplying">
                          Apply
                        </button>
                      </div>
                      <div
                        v-if="couponMsg"
                        class="small mt-2"
                        :class="couponSuccess ? 'text-success' : 'text-danger'"
                      >
                        {{ couponMsg }}
                      </div>
                    </div>

                    <div class="form-check mt-4">
                      <input class="form-check-input" type="checkbox" id="agree" v-model="agreed" />
                      <label class="form-check-label small" for="agree">
                        I agree to the
                        <a href="javascript:void(0)" class="text-primary" @click="openPolicyModal">
                          terms & refund policy
                        </a>.
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card border-0 shadow-sm position-sticky" style="top: 90px;">
                  <div class="card-body p-4">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                      <h6 class="mb-0">Order Summary</h6>
                      <div>
                        <select
                          v-model="currency"
                          class="form-select form-select-sm"
                          style="min-width: 110px;"
                        >
                          <option v-for="c in supportedCurrencies" :key="c" :value="c">{{ c }}</option>
                        </select>
                      </div>
                    </div>

                    <div class="fs-4 fw-bold mb-1">{{ formatted(totalConverted) }}</div>
                    <div class="text-muted small mb-3">Mentorship Fee ({{ currency }})</div>

                    <router-link to="/paymentsuccess">
                      <button
                        class="btn btn-submit w-100 mb-2"
                        :disabled="!canProceed || isProcessing"
                      >
                        Pay {{ formatted(totalConverted) }}
                      </button>
                    </router-link>

                    <div class="small text-muted">
                      Secure payment via Stripe / PayPal / local gateway.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- ✅ Terms Modal -->
    <div v-if="showPolicyModal" class="center-modal-overlay" @click.self="closePolicyModal">
      <div class="center-modal glass-card">
        <div class="modal-header">
          <h6>Terms & Refund Policy</h6>
          <button class="close-btn" @click="closePolicyModal">&times;</button>
        </div>
        <div class="modal-body">
          <p>
            By continuing with this payment, you agree to follow our payment and refund policy.
            Refunds are only applicable before mentorship commencement. For any disputes, contact support.
          </p>
          <p>All transactions are processed securely via Stripe/PayPal/local gateways.</p>
          <div class="form-check gap-2">
            <input class="form-check-input" type="checkbox" id="agreeTerms" v-model="agreed" />
            <label class="form-check-label small-text" for="agreeTerms">
              I agree to the terms
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary btn-sm" @click="closePolicyModal">Close</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Stepper from '@/components/Stepper.vue';
export default {
  name: "PaymentSetupIntlWithLevel",
  components: { Stepper },
  data() {
    return {
      selected: "card",
      card: { number: "", name: "", exp: "", cvv: "" },
      cardError: "",
      bank: "",
      coupon: "",
      couponMsg: "",
      couponSuccess: false,
      isApplying: false,
      isProcessing: false,
      supportedCurrencies: ["INR", "USD", "EUR", "GBP"],
      currency: "INR",
      totalConverted: 9999,
      agreed: false,
      showPolicyModal: false,
    };
  },
  computed: {
    canProceed() {
      return this.agreed;
    },
  },
  methods: {
    formatted(a: number) {
      return new Intl.NumberFormat("en-IN", { style: "currency", currency: this.currency }).format(a);
    },
    selectMethod(m: string) {
      this.selected = m;
    },
    applyCoupon() {
      this.couponMsg = this.coupon === "MENTOR20" ? "Coupon applied (20% off)" : "Invalid coupon";
      this.couponSuccess = this.coupon === "MENTOR20";
    },
    openPolicyModal() {
      this.showPolicyModal = true;
    },
    closePolicyModal() {
      this.showPolicyModal = false;
    },
    startPaypalFlow() {
      alert("Redirecting to PayPal...");
    },
  },
};
</script>

<style scoped>
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
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
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
