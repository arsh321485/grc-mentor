<template>
  <main class="mentorship-page">
    <div class="container-fluid">
      <div class="row g-4">
        <!-- Stepper Left Column -->
        <div class="col-2 col-md-2">
          <Stepper :currentStep="3" />
        </div>

        <!-- Right Main Column -->
        <div class="col-10 col-md-10">
          <!-- Banner -->
          <div class="banner mb-5">
            <div class="banner-left">
              <h6 class="banner-title">Payment Setup</h6>
              <p class="banner-sub"> GRC-101 mentorship program cost and payment details (international supported)</p>
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

                  <!-- <label
                    class="btn btn-outline-secondary text-start"
                    :class="{ active: selected === 'upi' }"
                    @click="selectMethod('upi')"
                    :disabled="currency !== 'INR'"
                    title="UPI available only for INR"
                  >
                    <input type="radio" name="pay" class="d-none" :checked="selected === 'upi'" />
                    <div class="fw-semibold">UPI</div>
                    <div class="small text-muted">(INR only)</div>
                  </label> -->

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
                <div class="form-text small mt-2">
                  Tip: For international card payments, ensure your bank allows foreign currency charges.
                </div>
              </div>

              <!-- PayPal -->
              <div v-if="selected === 'paypal'" class="mt-3">
                <h6 class="mb-2">Pay via PayPal / Checkout</h6>
                <p class="small text-muted">We will redirect you to the provider's secure checkout (multi-currency supported).</p>
                <div class="mb-2">
                  <button class="btn btn-outline-primary" @click="startPaypalFlow" :disabled="isProcessing">Pay via PayPal</button>
                </div>
              </div>

              <!-- UPI -->
              <div v-if="selected === 'upi' && currency === 'INR'" class="mt-3">
                <h6 class="mb-2">UPI</h6>
                <div class="row align-items-center">
                  <div class="col-md-7">
                    <input v-model="upiId" placeholder="you@bank (or scan QR)" class="form-control" />
                    <div class="form-text small">Enter VPA (e.g. username@bank) or scan the QR shown.</div>
                  </div>
                  <div class="col-md-5 text-center">
                    <div class="qr-box mx-auto">
                      <div class="qr-placeholder">QR</div>
                    </div>
                  </div>
                </div>
                <div v-if="upiError" class="text-danger small mt-2">{{ upiError }}</div>
              </div>

              <!-- Netbanking -->
              <div v-if="selected === 'netbanking'" class="mt-3">
                <h6 class="mb-2">Netbanking</h6>
                <select v-model="bank" class="form-select">
                  <option value="">Select bank</option>
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                </select>
                <div v-if="bankError" class="text-danger small mt-2">{{ bankError }}</div>
              </div>

              <!-- Coupon -->
              <div class="mt-4">
                <label class="form-label small">Have a coupon?</label>
                <div class="input-group">
                  <input v-model="coupon" class="form-control" placeholder="Enter coupon code" />
                  <button class="btn btn-outline-primary" @click="applyCoupon" :disabled="isApplying">
                    Apply
                  </button>
                </div>
                <div v-if="couponMsg" class="small mt-2" :class="couponSuccess ? 'text-success' : 'text-danger'">
                  {{ couponMsg }}
                </div>
              </div>

              <!-- Terms -->
              <div class="form-check mt-4">
                <input class="form-check-input" type="checkbox" id="agree" v-model="agreed" />
                <label class="form-check-label small" for="agree">
                  I agree to the <a href="#" @click.prevent>terms & refund policy</a>.
                </label>
              </div>

              <!-- <button class="btn btn-success w-100 mt-4" @click="proceedToPayment" :disabled="isProcessing">
                Proceed to Payment
              </button> -->

            </div>
          </div>
        </div>

        <!-- Right: Order summary + currency -->
        <div class="col-lg-4">
          <div class="card border-0 shadow-sm position-sticky" style="top: 90px;">
            <div class="card-body p-4">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <h6 class="mb-0">Order Summary</h6>
                <div>
                  <select v-model="currency" class="form-select form-select-sm" aria-label="currency" style="min-width:110px;">
                    <option v-for="c in supportedCurrencies" :key="c" :value="c">{{ c }}</option>
                  </select>
                </div>
              </div>

              <div class="fs-4 fw-bold mb-1">{{ formatted(subtotalConverted) }}</div>
              <div class="text-muted mb-3 small">Mentornship fee ({{ currency }})</div>

              <div class="d-flex justify-content-between small">
                <div>Subtotal</div>
                <div>{{ formatted(subtotalConverted) }}</div>
              </div>
              <div class="d-flex justify-content-between small">
                <!-- <div>Tax ({{ taxRate * 100 }}%)</div> -->
                <!-- <div>{{ formatted(gstAmountConverted) }}</div> -->
              </div>
              <div v-if="discountAmountConverted > 0" class="d-flex justify-content-between small text-success">
                <div>Discount</div>
                <div>- {{ formatted(discountAmountConverted) }}</div>
              </div>

              <hr />

              <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <div class="small text-muted">Total</div>
                  <div class="fw-semibold">{{ formatted(totalConverted) }}</div>
                </div>
                <div class="small text-muted">{{ currency }}</div>
              </div>

              <div class="mb-2 small text-muted">
                Rates: 1 {{ baseCurrency }} = {{ exchangeRate }} {{ currency }} (mock)
              </div>


              <router-link to="/paymentsuccess">
  <button
    class="btn btn-submit w-100 mb-2"
    :disabled="!canProceed || isProcessing"
  >
    Pay {{ formatted(totalConverted) }}
  </button>
</router-link>


              <button class="btn btn-outline-secondary w-100" @click="contactSupport">
                Need help?
              </button>

              <hr class="my-3" />
              <div class="small text-muted">Secure payment via Stripe / PayPal / local gateway.</div>
            </div>
          </div>

          <!-- Mini FAQ -->
          <div class="card border-0 shadow-sm mt-4">
            <div class="card-body p-4">
              <h6 class="mb-3">Quick FAQ</h6>
              <div class="small">
                <p class="mb-2"><strong>Currency:</strong> Choose preferred billing currency.</p>
                <p class="mb-2"><strong>Conversion:</strong> Exchange rate is a mock — use your backend rate for accuracy.</p>
                <p class="mb-0"><strong>Notes:</strong> UPI works only with INR billing.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
              </section>




        </div>
      </div>
    </div>




  </main>
</template>

<script lang="ts">

import Stepper from '@/components/Stepper.vue';
export default {
  name: "PaymentSetupIntlWithLevel",
    components: {Stepper},
  props: {
    planProp: { type: Object, default: null },
    liveRates: { type: Object, default: null },
    // level can be passed as prop or via router query
    levelProp: { type: String, default: null }
  },
  data() {
    const q = this.$route?.query || {};
    const basePlan = this.planProp ?? {
      name: q.plan ?? "Standard",
      price: Number(q.amount ?? 9999),
      currency: q.currency ?? "INR"
    };

    return {
      plan: basePlan,
      baseCurrency: "INR",
      supportedCurrencies: ["INR", "USD", "EUR", "GBP", "AED"],
      currency: "INR",
      mockRates: { INR: 1, USD: 0.012, EUR: 0.011, GBP: 0.0096, AED: 0.044 },
      selected: "card",
      card: { number: "", name: "", exp: "", cvv: "" },
      cardError: "",
      upiId: "",
      upiError: "",
      bank: "",
      bankError: "",
      coupon: "",
      couponMsg: "",
      couponSuccess: false,
      discountAmount: 0,
      agreed: false,
      isApplying: false,
      isProcessing: false,
      taxRate: 0.18,
      // level from query/prop
      level: String(q.level ?? this.levelProp ?? "GRC 101")
    };
  },
  computed: {
    rates() {
      return this.liveRates ?? this.mockRates;
    },
    exchangeRate() {
      return (this.rates[this.currency] ?? 1).toFixed(4);
    },
    subtotal() { return this.plan.price; },
    gstAmount() { return +(this.subtotal * this.taxRate); },
    discountAmountBase() { return this.discountAmount; },
    totalBase() { return +(this.subtotal + this.gstAmount - this.discountAmountBase); },
    rateNum() { return Number(this.rates[this.currency] ?? 1); },
    subtotalConverted() { return +(this.subtotal * this.rateNum).toFixed(2); },
    gstAmountConverted() { return +(this.gstAmount * this.rateNum).toFixed(2); },
    discountAmountConverted() { return +(this.discountAmountBase * this.rateNum).toFixed(2); },
    totalConverted() { return +(this.totalBase * this.rateNum).toFixed(2); },
    canProceed() {
      if (!this.agreed) return false;
      if (this.selected === "card") {
        return this.card.name && this.card.number.replace(/\s/g, "").length >= 12 && this.card.cvv.length >= 3;
      } else if (this.selected === "paypal") {
        return true;
      } else if (this.selected === "upi") {
        return this.currency === "INR" && !!this.upiId;
      } else if (this.selected === "netbanking") {
        return !!this.bank;
      }
      return false;
    },
    displayLevel() {
      return this.level;
    }
  },
  watch: {
    currency(newC) {
      if (newC !== "INR" && this.selected === "upi") this.selected = "card";
    }
  },
  methods: {
    formatted(amount:any) {
      try {
        return new Intl.NumberFormat("en-US", { style: "currency", currency: this.currency }).format(amount);
      } catch {
        return `${this.currency} ${amount}`;
      }
    },
    selectMethod(m) {
      if (m === "upi" && this.currency !== "INR") return;
      this.selected = m;
    },
    applyCoupon() {
      if (!this.coupon) { this.couponMsg = "Enter a coupon code."; this.couponSuccess = false; return; }
      this.isApplying = true;
      this.couponMsg = "";
      setTimeout(() => {
        if (this.coupon.toUpperCase() === "MENTOR20") {
          this.discountAmount = +(this.plan.price * 0.2).toFixed(2);
          this.couponMsg = `Coupon applied — you saved ${this.formatted(this.discountAmount * this.rateNum)}.`;
          this.couponSuccess = true;
        } else {
          this.discountAmount = 0;
          this.couponMsg = "Invalid coupon code.";
          this.couponSuccess = false;
        }
        this.isApplying = false;
      }, 700);
    },
    validateCard() {
      this.cardError = "";
      const num = this.card.number.replace(/\s/g, "");
      if (!/^\d{12,19}$/.test(num)) { this.cardError = "Enter a valid card number."; return false; }
      if (!this.card.name) { this.cardError = "Enter name on card."; return false; }
      if (!/^\d{2}\/\d{2}$/.test(this.card.exp)) { this.cardError = "Expiry must be MM/YY."; return false; }
      if (!/^\d{3,4}$/.test(this.card.cvv)) { this.cardError = "Enter a valid CVV."; return false; }
      return true;
    },
    startPaypalFlow() {
      this.isProcessing = true;
      setTimeout(() => {
        this.isProcessing = false;
        alert("Redirecting to PayPal (simulate). Send amount & currency to backend to create PayPal order.");
      }, 800);
    },
    proceedToPayment() {
      if (!this.agreed) { alert("Please accept terms & policy to continue."); return; }
      if (this.selected === "card" && !this.validateCard()) return;
      if (this.selected === "upi" && this.currency !== "INR") { alert("UPI available only for INR billing."); return; }
      if (this.selected === "netbanking" && !this.bank) { this.bankError = "Select a bank."; return; }

      this.isProcessing = true;
      const payload = {
        method: this.selected,
        plan: this.plan.name,
        amount: this.totalConverted,
        currency: this.currency,
        baseAmount: this.totalBase,
        baseCurrency: this.baseCurrency,
        coupon: this.couponSuccess ? this.coupon : null,
        level: this.level
      };

      setTimeout(() => {
        this.isProcessing = false;
        if (this.$router) {
          this.$router.push({ name: "Payment", query: { payload: JSON.stringify(payload) } });
        } else {
          this.$emit("start-payment", payload);
        }
      }, 900);
    },
    contactSupport() {
      if (this.$router) this.$router.push({ name: "Contact" });
      else this.$emit("contact");
    }
  },
  mounted() {
    if (this.liveRates && this.liveRates.USD) {
      this.mockRates = this.liveRates;
    }
  }
};
</script>

<style scoped>

.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  padding: 30px;
  font-family: "Inter", sans-serif;
}

/* Banner */
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
.banner-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}
.banner-sub {
  font-size: 13px;
  opacity: 0.9;
  margin: 2px 0 0 0;
}
.banner-right {
  font-size: 15px;
  font-weight: 600;
}





/* Keep original .btn behavior — DO NOT override .btn here so your global button styles remain */
.qr-box { width: 90px; height: 90px; border: 1px dashed #e9ecef; display:flex; align-items:center; justify-content:center; border-radius:8px; margin-left:auto; }
.qr-placeholder { font-weight:700; color:#adb5bd; }

/* Keep .btn-group .btn.active style but do not touch .btn global rules */
.btn-group .btn.active {
 background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 10px 26px rgba(13,110,253,0.08);
}

@media (max-width: 991.98px) {
  .position-sticky { position: static !important; }
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









</style>
