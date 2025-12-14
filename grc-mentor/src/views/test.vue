<template>
  <main class="referral-page">
    <div class="container-fluid">

      <!-- BANNER -->
      <div class="banner mt-3 mb-4 px-4">
        <h6 class="banner-title">Referral Program</h6>
        <p class="banner-sub">Invite friends & get exciting rewards.</p>
      </div>

      <!-- MAIN REFERRAL CARD -->
      <div class="ref-card p-4 mx-auto">

        <h5 class="fw-bold text-center mb-2">Mentee Referral</h5>
        <p class="text-muted text-center small">
          Share your referral code with your friends.
          When they sign up using it, you get <strong>bonus rewards</strong>.
        </p>

        <!-- REFERRAL CODE BOX -->
        <div class="code-box mt-3 p-3">
          <p class="small text-muted mb-1">Your Referral Code</p>
          <h2 class="ref-code">{{ referralCode }}</h2>

          <button class="btn btn-copy mt-2 w-100 rounded-pill" @click="copyCode">
            Copy Code
          </button>
        </div>

        <!-- SHARE BUTTONS -->
        <div class="share-buttons mt-3 d-flex justify-content-between">

          <button class="share-btn">
            <i class="bi bi-link"></i>
            <span>Copy Link</span>
          </button>

          <button class="share-btn">
            <i class="bi bi-whatsapp"></i>
            <span>WhatsApp</span>
          </button>

          <button class="share-btn">
            <i class="bi bi-share"></i>
            <span>More</span>
          </button>

        </div>

      </div>

      <!-- UNIVERSITY REFERRAL CARD -->
      <div class="uni-card p-4 mx-auto mt-4">

        <h5 class="fw-bold text-center mb-2">University Referral</h5>
        <p class="text-muted text-center small">
          Universities get a special referral code for bulk mentee onboarding.
          Used during signup for <strong>special pricing</strong>.
        </p>

        <label class="form-label small mt-3 fw-semibold">Enter University Code</label>
        <input type="text" class="form-control mb-3" v-model="universityCode" placeholder="e.g. UNI2025">

        <button class="btn btn-primary w-100 rounded-pill">
          Apply Code
        </button>
      </div>

    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: "ReferralView",
  data() {
    return {
      referralCode: "MENTEE2025",
      universityCode: ""
    };
  },
  methods: {
    copyCode() {
      navigator.clipboard.writeText(this.referralCode);
      alert("Referral code copied!");
    }
  }
};
</script>

<style scoped>

/* BANNER (your existing design) */
.banner {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px;
  color: white;
}

/* MAIN REFERRAL CARD (mobile style) */
.ref-card,
.uni-card {
  background: #fff;
  width: 100%;
  max-width: 450px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
}

/* REFERRAL CODE BOX */
.code-box {
  border-radius: 12px;
  background: #f1f6ff;
  border: 1px solid #d7e7ff;
  text-align: center;
}

.ref-code {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 3px;
}

.btn-copy {
  background-color: #2d9cdb;
  color: white;
}

/* SHARE BUTTONS */
.share-buttons .share-btn {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 10px 14px;
  width: 32%;
  text-align: center;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}

.share-btn i {
  font-size: 18px;
  color: #2d9cdb;
}

/* University Box */
.uni-card .form-control {
  border-radius: 12px;
  padding: 10px 14px;
}

.btn-primary {
  background: #2d9cdb;
  border: none;
}

/* MOBILE FIRST */
@media (max-width: 768px) {
  .ref-card,
  .uni-card {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
