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
              <h6 class="banner-title">Payment Receipt</h6>
              <p class="banner-sub">Your payment has been successfully processed</p>
            </div>
            <div class="banner-right">GRC 101</div>
          </div>

          <!-- Cards Section -->
          <section>
            <div class="row">
              <div class="col-12">
                <!-- Payment Success Card -->
                <div class="card card-pay border-0 shadow-sm overflow-hidden mb-4">
                  <div
                    class="hero p-4 d-flex flex-column flex-md-row align-items-center gap-3"
                  >
                    <div
                      class="hero-icon d-flex align-items-center justify-content-center"
                    >
                      <svg viewBox="0 0 24 24" class="check-svg" aria-hidden>
                        <path
                          fill="none"
                          stroke="white"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20 6L9 17l-5-5"
                        />
                      </svg>
                    </div>
                    <div class="flex-grow-1 text-center text-md-start">
                      <div class="h4 mb-1">Payment successful</div>
                      <div class="small text-muted">
                        Thanks — your payment was processed successfully.
                      </div>
                      <div class="mt-2 small level-row">
                        <span class="level-badge me-2">{{ displayLevel }}</span>
                        <span class="text-muted"
                          >Plan:
                          <strong class="ms-1">{{
                            payload?.plan ?? "—"
                          }}</strong></span
                        >
                      </div>
                    </div>

                    <div class="text-center text-md-end">
                      <div class="fw-semibold fs-5">
                        {{ formatted(payload?.amount) }}
                      </div>
                      <div class="small text-muted">
                        {{ payload?.currency }}
                      </div>
                    </div>
                  </div>
                  <div class="confetti" aria-hidden></div>
                </div>

                <!-- Receipt Card -->
                <div class="card card-pay border-0 shadow-sm mb-4">
                  <div class="card-body p-4">
                    <div
                      class="d-flex justify-content-between align-items-start mb-3"
                    >
                      <h6 class="mb-0">Receipt</h6>
                      <div class="small text-muted">
                        Transaction: <strong class="ms-1">{{ txId }}</strong>
                      </div>
                    </div>

                    <div v-if="payload" class="receipt-grid mb-3">
                      <div class="row gx-2 gy-2">
                        <div class="col-sm-6 text-muted">Plan</div>
                        <div class="col-sm-6">{{ payload.plan }}</div>
                        <div class="col-sm-6 text-muted">Level</div>
                        <div class="col-sm-6">{{ payload.level }}</div>
                        <div class="col-sm-6 text-muted">Method</div>
                        <div class="col-sm-6 text-uppercase">
                          {{ payload.method }}
                        </div>
                        <div class="col-sm-6 text-muted">
                          Amount (converted)
                        </div>
                        <div class="col-sm-6">
                          {{ formatted(payload.amount) }} {{ payload.currency }}
                        </div>
                        <div class="col-sm-6 text-muted">
                          Base ({{ payload.baseCurrency }})
                        </div>
                        <div class="col-sm-6">{{ payload.baseAmount }}</div>
                        <div class="col-sm-6 text-muted">Coupon</div>
                        <div class="col-sm-6">{{ payload.coupon ?? "—" }}</div>
                        <div class="col-sm-6 text-muted">Date</div>
                        <div class="col-sm-6">{{ dateStr }}</div>
                      </div>
                    </div>

                    <div v-else class="text-muted mb-3">
                      No receipt data available.
                    </div>

                    <div class="d-flex flex-column flex-sm-row gap-2 mt-3">
                      <button
                        class="btn btn-submit"
                        @click="printReceipt"
                        :disabled="!payload"
                      >
                        <svg class="me-2 btn-icon" viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.6"
                            d="M6 9h12v7H6zM6 6h12"
                          />
                        </svg>
                        Print / Download
                      </button>

                      <button
                        class="btn btn-outline-secondary rounded-pill"
                        @click="copyTx"
                        :disabled="!payload"
                      >
                        <svg class="me-2 btn-icon" viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.6"
                            d="M9 12h6M9 16h6M4 6h14v12H4z"
                          />
                        </svg>
                        Copy Transaction ID
                      </button>

                      <router-link
                        to="/mentorship"
                        class="btn btn-submit ms-sm-auto d-flex align-items-center"
                      >
                        Start Your Mentorship
                      </router-link>
                    </div>

                    <div v-if="copiedMsg" class="small text-success mt-2">
                      {{ copiedMsg }}
                    </div>
                    <div class="small text-muted mt-3">
                      A copy of this receipt will be saved in your account (if
                      logged in).
                    </div>
                  </div>
                </div>


              </div>
            </div>

            <!-- Print Area -->
            <div id="printArea" class="d-none">
              <div
                style="font-family: Arial, sans-serif; padding:20px; max-width:700px; margin:auto;"
              >
                <h2>Receipt</h2>
                <p><strong>Transaction:</strong> {{ txId }}</p>
                <p><strong>Date:</strong> {{ dateStr }}</p>
                <table style="width:100%; border-collapse:collapse;">
                  <tr>
                    <td style="padding:6px; border-top:1px solid #e9ecef;">Plan</td>
                    <td style="padding:6px; border-top:1px solid #e9ecef;">
                      {{ payload?.plan }}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px;">Level</td>
                    <td style="padding:6px;">{{ payload?.level }}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px;">Method</td>
                    <td style="padding:6px;">{{ payload?.method }}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px;">Amount</td>
                    <td style="padding:6px;">
                      {{ formatted(payload?.amount) }} {{ payload?.currency }}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px;">Coupon</td>
                    <td style="padding:6px;">{{ payload?.coupon ?? "—" }}</td>
                  </tr>
                </table>
                <p style="margin-top:18px;">Thank you for your purchase.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Stepper from "@/components/Stepper.vue";

export default {
  name: "PaymentSuccessView",
  components: { Stepper },
  data() {
    return {
      payload: null,
      txId: null,
      dateStr: null,
      copiedMsg: "",
    };
  },
  computed: {
    displayLevel() {
      return this.payload?.level ?? (this.$route?.query?.level ?? "GRC 101");
    },
  },
  created() {
    try {
      const raw = this.$route?.query?.payload;
      if (raw) this.payload = JSON.parse(raw);
    } catch {
      this.payload = null;
    }
    this.txId =
      "TX-" + Math.random().toString(36).slice(2, 10).toUpperCase();
    this.dateStr = new Date().toLocaleString();
  },
  mounted() {
    requestAnimationFrame(() => this.triggerConfetti());
  },
  methods: {
    formatted(amount) {
      if (amount == null) return "";
      try {
        const currency = (this.payload && this.payload.currency) || "USD";
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency,
        }).format(amount);
      } catch {
        return amount;
      }
    },
    printReceipt() {
      const printContent = document.getElementById("printArea").innerHTML;
      const win = window.open("", "_blank", "width=800,height=900");
      if (!win) {
        alert("Popup blocked — allow popups for this site to print/download.");
        return;
      }
      win.document.open();
      win.document.write(`
        <html>
          <head>
            <title>Receipt</title>
            <style>
              body { font-family: Arial, Helvetica, sans-serif; color: #111 }
              table { width: 100%; border-collapse: collapse }
              td { padding: 8px }
            </style>
          </head>
          <body>${printContent}</body>
        </html>
      `);
      win.document.close();
      win.focus();
      setTimeout(() => {
        win.print();
        win.close();
      }, 600);
    },
    copyTx() {
      if (!this.txId) return;
      navigator.clipboard
        ?.writeText(this.txId)
        .then(() => {
          this.copiedMsg = "Transaction ID copied to clipboard.";
          setTimeout(() => (this.copiedMsg = ""), 2500);
        })
        .catch(() => {
          this.copiedMsg = "Unable to copy — please copy manually.";
          setTimeout(() => (this.copiedMsg = ""), 2500);
        });
    },
    goToDashboard() {
      if (this.$router)
        this.$router.push({ name: "Dashboard" }).catch(() => {});
      else window.location.href = "/";
    },
    contactSupport() {
      if (this.$router)
        this.$router.push({ name: "Contact" }).catch(() => {});
      else alert("Contact support at support@example.com");
    },
    viewInvoices() {
      if (this.$router)
        this.$router.push({ name: "Invoices" }).catch(() => {});
      else alert("Open invoices section (not available in demo).");
    },
    triggerConfetti() {
      const conf = this.$el.querySelector(".confetti");
      if (!conf) return;
      const colors = ["#0d6efd", "#20c997", "#ffc107", "#e83e8c", "#6f42c1"];
      for (let i = 0; i < 18; i++) {
        const el = document.createElement("span");
        el.className = "confetti-piece";
        el.style.left = `${10 + Math.random() * 80}%`;
        el.style.background =
          colors[Math.floor(Math.random() * colors.length)];
        el.style.transform = `translateY(-10px) rotate(${
          Math.random() * 360
        }deg)`;
        conf.appendChild(el);
        setTimeout(() => el.remove(), 2400 + Math.random() * 1200);
      }
    },
  },
};
</script>

<!-- <style scoped>


/* Cards */
.card-pay {
  border-radius: 12px;
  width: 100%; /* full width responsive */
  max-width: 100%;
}

.hero {
  align-items: center;
  gap: 1rem;
  background: linear-gradient(
    90deg,
    rgba(13, 110, 253, 0.03),
    rgba(32, 201, 151, 0.02)
  );
}

.hero-icon {
  width: 84px;
  height: 84px;
  border-radius: 18px;
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(13, 110, 253, 0.08);
  flex-shrink: 0;
}

.check-svg {
  width: 42px;
  height: 42px;
}

.level-badge {
  display: inline-block;
  background: #f1f3f5;
  color: #0d6efd;
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  font-weight: 700;
  font-size: 0.8rem;
}

.receipt-grid .row > div {
  padding: 0.45rem 0;
}

.receipt-grid .row > div:nth-child(odd) {
  color: #6c757d;
}

.btn-icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
}

.btn .btn-icon {
  margin-right: 6px;
}





@media (max-width: 767.98px) {
  .hero {
    text-align: center;
    padding: 1.25rem;
    flex-direction: column;
  }

  .hero .text-md-start {
    text-align: center !important;
  }

  .hero-icon {
    width: 72px;
    height: 72px;
    border-radius: 14px;
  }

  .card {
    width: 95%; /* keep padding on mobile */
    margin-left: auto;
    margin-right: auto;
  }
}
</style> -->
