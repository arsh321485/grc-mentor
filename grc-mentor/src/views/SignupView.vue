<template>
  <main class="signup-wrapper">
    <div class="signup-card glass-card">
      <div class="row g-0">

        <!-- LEFT FORM -->
        <div class="col-12 col-lg-6 px-5 py-4">

          <!-- LOGO -->
          <img src="../assets/logo-img.png" alt="logo" class="logo-img mb-1" />

          <router-link to="/home" class="d-block mb-1 text-decoration-none back-link">
            ← Back to homepage
          </router-link>

          <h6 class=" mb-2">Signup</h6>

          <form @submit.prevent="handleSubmit">

            <div class="mb-1">
              <label class="form-label">First name</label>
              <input type="text" v-model="form.firstName" class="form-control" placeholder="Enter your first name" />
            </div>

            <div class="mb-1">
              <label class="form-label">Last name</label>
              <input type="text" v-model="form.lastName" class="form-control" placeholder="Enter your last name" />
            </div>

            <div class="mb-1">
              <label class="form-label">Email</label>
              <div class="input-group">
                <input type="text" v-model="form.emailUsername" class="form-control" placeholder="yourname" />
                <span class="input-group-text">@gmail.com</span>
              </div>
            </div>

            <div class="mb-1">
              <label class="form-label">Password</label>
              <input type="password" v-model="form.password" class="form-control" placeholder="Enter password" />
            </div>

            <div class="mb-1">
              <label class="form-label">Confirm Password</label>
              <input type="password" v-model="form.confirmPassword" class="form-control" placeholder="Re-enter password" />
            </div>

            <!-- CAPTCHA -->
            <div class="captcha-box d-flex align-items-center justify-content-between ">
              <div class="d-flex align-items-center gap-2">
                <input type="checkbox" id="captcha-check" class="captcha-check" />
                <label for="captcha-check">I'm not a robot</label>
              </div>
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" class="captcha-img" />
            </div>

            <!-- TERMS -->
            <div class="form-label gap-2 mb-2 d-flex align-items-center mt-2">
              <input class="form-label" type="checkbox" id="agreeTerms" v-model="form.agree" />
              <label class="form-label ">I agree</label>
              <span class=" form-label text-decoration-underline text-primary" @click="openPolicyModal">
                terms & conditions
              </span>
            </div>

            <!-- SUBMIT -->
            <router-link to="/welcome" class="btn-submit w-100 text-center mb-2" :class="{ disabled: !form.agree }">
              Get started
            </router-link>

            <p class="form-label pb-2">
              Already have an account?
              <router-link to="/signin" class="login-link">Login</router-link>
            </p>

          </form>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="col-lg-6 d-none d-lg-flex">
          <div class="img-box">
            <img src="../assets/signup-img.png" class="right-img" alt="Signup Image" />
          </div>
        </div>

      </div>
    </div>

    <!-- POLICY MODAL -->
    <div v-if="showPolicyModal" class="center-modal-overlay" @click.self="closePolicyModal">
      <div class="center-modal glass-card">
        <div class="modal-header">
          <h6>Acceptance Usage Policy</h6>
          <button class="close-btn" @click="closePolicyModal">&times;</button>
        </div>

        <div class="modal-body">
          <p>By signing up, you agree to follow the platform guidelines, respect user privacy, and responsibly use all provided resources.</p>
          <p>Any misuse or violation may result in account termination.</p>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary btn-sm" @click="closePolicyModal">Close</button>
        </div>
      </div>
    </div>

  </main>
</template>

<script lang="ts">
export default {
  name: "SignupView",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        emailUsername: "",
        password: "",
        confirmPassword: "",
        agree: false,
      },
      showPolicyModal: false,
    };
  },
  methods: {
    handleSubmit() {
      if (this.form.password !== this.form.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      if (!this.form.agree) {
        alert("You must agree to the terms!");
        return;
      }
      alert("Form submitted successfully!");
    },
    openPolicyModal() {
      this.showPolicyModal = true;
    },
    closePolicyModal() {
      this.showPolicyModal = false;
    }
  }
};
</script>

<style scoped>

/* WRAPPER */
.signup-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  padding: 30px;
}

/* MAIN CARD (responsive but same design) */
.signup-card {
  min-height: 635px;   /* Keeps design EXACT */
  height: auto;        /* Makes it responsive */
  max-width: 1000px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* LOGO */
.logo-img { height: 25px; }

/* FORM ITEMS */
.form-label { font-size: 14px; }
.form-control { font-size: 14px; }

/* CAPTCHA */
.captcha-box {
  padding: 9px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
}
.captcha-img { height: 25px; }

/* BUTTON */
.btn-submit {
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  text-decoration: none;
  background-color: #0096d6;
  color: white;
  display: block;
}
.btn-submit.disabled {
  background-color: #a0cde1;
  pointer-events: none;
}

/* RIGHT IMAGE */
.right-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
}
.img-box {
  padding: 50px;
  width: 100%;
  height: 100%;
}

/* RESPONSIVE (NO UI CHANGE) */
@media (max-width: 992px) {
  .signup-card {
    flex-direction: column;
    max-width: 600px;
  }
  .img-box {
    display: none;
  }
}

/* MODAL */
.center-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
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
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}
.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

</style>
