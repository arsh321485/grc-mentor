<template>
  <main>
    <Header />

    <section class="container-fluid py-5">
      <div class="row align-items-center">
        <!-- LEFT SIDE -->
        <div class="col-lg-6 px-5">
          <h1 class="fw-bold display-4">
            Begin your <span class="highlight">GRC-101</span> journey
          </h1>
          <p class="lead mt-4">
            GRC-101 is your entry point into Governance, Risk, and Compliance.
            Learn the fundamentals of risk management, ISO standards, and
            security compliance with hands-on modules designed for beginners.
          </p>
          <p>
            Start your learning today and build a strong foundation
            in compliance frameworks that every organization relies on.
          </p>
        </div>

        <!-- RIGHT SIDE -->
        <div class="col-lg-5 offset-lg-1">
          <div class="signup-box shadow p-4 rounded-3 bg-white">
            <h5 class="fw-bold mb-3">Get Started with GRC-101</h5>

            <form @submit.prevent="handleSignup">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Name *" required />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="Email *" required />
              </div>
              <div class="mb-3">
                <input type="password" class="form-control" placeholder="Password *" required />
              </div>
              <div class="mb-3">
                <input type="password" class="form-control" placeholder="Confirm Password *" required />
              </div>

              <!-- ✅ Policy link trigger -->
              <div class="text-center mb-3">
                <a href="#" class="small text-primary" @click.prevent="openPolicyModal">
                  View and accept Terms & Conditions
                </a>
              </div>

              <button
                type="submit"
                class="btn btn-danger w-100 rounded-pill fw-bold"
                :disabled="!agree"
              >
                SIGN UP FOR FREE
              </button>
            </form>

            <div class="text-center my-3">or sign in using</div>
            <div class="d-flex justify-content-center gap-2">
              <img src="../assets/google-logo.png" alt="" style="height: 30px;" />
              <img src="../assets/linkedin.jpg" alt="" style="height: 30px;" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ✅ Center Modal (Policy) -->
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
            By participating in this mentorship program, you agree to follow
            the community guidelines, complete assigned tasks responsibly,
            and maintain respectful collaboration with mentors and peers.
          </p>
          <p>
            Any misuse of resources, breach of confidentiality, or violation
            of ethical standards may result in removal from the program.
          </p>
          <div class="form-check gap-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="agreeTerms"
              v-model="agree"
            />
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

    <Footer />
  </main>
</template>


<script lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
  name: "SignupGrc101View",
  components: { Header, Footer },
  data() {
    return {
      showPolicyModal: false,
      agree: false,
    };
  },
  methods: {
    handleSignup() {
      if (!this.agree) {
        alert("Please accept the terms before signing up.");
        return;
      }
      alert("Signup for GRC-101 submitted!");
    },
    openPolicyModal() {
      this.showPolicyModal = true;
    },
    closePolicyModal() {
      this.showPolicyModal = false;
    },
  },
};
</script>


<style scoped>
.highlight {
  color: #007bff;
  /* blue text highlight */
  position: relative;
}

.highlight::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: #ffe100;
  /* yellow underline effect */
  z-index: -1;
}

.signup-box {
  max-width: 400px;
  margin: auto;
}
.center-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.center-modal {
  background: #fff;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
  padding: 20px;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
}

.modal-body {
  font-size: 14px;
  color: #444;
  margin-bottom: 15px;
}

.modal-footer {
  text-align: right;
}

.small-text {
  font-size: 13px;
  color: #555;
}

</style>
