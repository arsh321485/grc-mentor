<template>

  <main>

    <Header />
    <section class="container-fluid py-5">
      <div class="row align-items-center">
        <!-- LEFT SIDE: TEXT -->
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

        <!-- RIGHT SIDE: SIGNUP FORM -->
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
              <!-- <div class="mb-3 d-flex">
              <span class="input-group-text">+91</span>
              <input type="tel" class="form-control" placeholder="Phone Number *" required />
            </div> -->
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="terms" required />
                <label class="form-check-label small" for="terms">
                  I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                </label>
              </div>
              <button type="submit" class="btn btn-danger w-100 rounded-pill fw-bold">
                SIGN UP FOR FREE
              </button>
            </form>
            <div class="text-center my-3">or sign in using</div>
            <div class="d-flex justify-content-center gap-2" >
              <!-- <button class="btn btn-light border"><i class="bi bi-google"></i> Google</button> -->
              <img src="../assets/google-logo.png" alt="" style="height: 30px;">
              <!-- <button class="btn btn-light border"><i class="bi bi-linkedin"></i> LinkedIn</button> -->
              <img src="../assets/linkedin.jpg" alt="" style="height: 30px;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer section -->
    <div>

      <Footer />
    </div>

  </main>




</template>

<script lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
  name: "SignupGrc101View",
  components: { Header, Footer },
  setup() {
    const handleSignup = () => {
      alert("Signup for GRC-101 submitted!");
    };

    return {
      handleSignup,
    };
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
</style>
