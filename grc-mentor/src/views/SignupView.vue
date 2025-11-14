<template>
  <main class="signup-page">
    <div class="container signup-container">
      <div class="row w-100 form-section justify-content-center ">

        <!-- Logo -->
        <div class="signup-logo mt-5 mb-0">
          <img src="../assets/logo-img.png" alt="GRCMENTOR Logo" />
        </div>

        <!-- Left Side (Form) -->
        <div class="col-12 col-sm-12 col-md-10 col-lg-6 left">
          <router-link to="/home" class="d-block mb-1 text-decoration-none back-link">
            &larr; Back to homepage
          </router-link>

          <h4 class="signup-form-heading">Signup</h4>

          <!-- Signup Form -->
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
                <input type="text" v-model="form.emailUsername" class="form-control" placeholder="Enter your email name" />
                <span class="input-group-text">@gmail.com</span>
              </div>
            </div>

            <div class="mb-1">
              <label class="form-label">Password</label>
              <input type="password" v-model="form.password" class="form-control" placeholder="Enter your password" />
            </div>

            <div class="mb-1">
              <label class="form-label">Confirm Password</label>
              <input type="password" v-model="form.confirmPassword" class="form-control" placeholder="Re-enter your password" />
            </div>

            <!-- Fake Recaptcha -->
            <div class="fake-recaptcha">
              <div class="recaptcha-left">
                <input type="checkbox" id="captcha-check" class="recaptcha-checkbox" />
                <label for="captcha-check" class="recaptcha-label">I'm not a robot</label>
              </div>
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="recaptcha" class="recaptcha-img" />
            </div>

            <!-- Terms -->
            <div class="form-check gap-2 align-items-center terms-section">
              <input class="form-check-input" type="checkbox" id="agreeTerms" v-model="form.agree" />
              <label class="form-check-label small-text" for="agreeTerms">I agree to &nbsp;</label>
              <span class="terms-link" @click="openPolicyModal">terms & conditions</span>
            </div>

            <!-- Submit -->
            <router-link
              to="/welcome"
              class="w-100 btn-submit"
              :class="{ disabled: !form.agree }"
              :aria-disabled="!form.agree"
            >
              Get started
            </router-link>

            <!-- Already have account -->
            <p class="have-account">
              Already have an account?
              <router-link to="/signin" class="login-link">Login</router-link>
            </p>
          </form>
        </div>

        <!-- Right Side (Image) -->
        <div class="col-lg-6 d-none d-lg-block right p-0">
          <img src="../assets/signup-img.png" alt="Signup Image" class="signup-img " />
        </div>
      </div>
    </div>

    <!-- ✅ Center Modal (Policy) -->
    <div v-if="showPolicyModal" class="center-modal-overlay" @click.self="closePolicyModal">
      <div class="center-modal glass-card">
        <div class="modal-header">
          <h6>Acceptance Usage Policy</h6>
          <button class="close-btn" @click="closePolicyModal">&times;</button>
        </div>
        <div class="modal-body">
          <p>
            By signing up, you agree to follow the platform guidelines, respect user privacy,
            and responsibly use all provided resources.
          </p>
          <p>
            Any misuse or violation may result in account termination.
          </p>
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
import "../assets/main.css";

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
    },
  },
};
</script>
