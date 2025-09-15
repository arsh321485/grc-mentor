<template>
  <main>
    <div class="container signup-container">
      <div class="row w-100 form-section mt-2">
        <div class="mt-5 mb-0">
          <img src="../assets/logo-img.png" alt="Logo" style="height: 35px;">
        </div>

        <!-- Left Side -->
        <div class="col-lg-6 col-md-12 left">
          <router-link to="/home" class="d-block mb-1 text-decoration-none" style="color: #005E86; font-weight: 600;">
            &larr; Back to homepage
          </router-link>

          <h4 style="font-weight: 600;">Forgot Password</h4>
          <p class="mb-4" style="font-weight: 500; color: #00000099; font-size: 12px;">
            Enter your registered email address and we’ll send you a reset link.
          </p>

          <form @submit.prevent="handleForgot">
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" v-model.trim="email" class="form-control" placeholder="Enter your email address">
            </div>

            <button type="submit" class="btn w-100 btn-submit">
              Send Reset Link
            </button>

            <p class="have-account">
              Remember your password?
              <router-link to="/signin" class="login-link">Back to Login</router-link>
            </p>
          </form>
        </div>

        <!-- Right Side (Image) -->
        <div class="col-lg-6 right p-0 d-none d-lg-block">
          <img src="../assets/signup-img.png" alt="Forgot Password Image" style="border-radius: 30px;">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    handleForgot() {
      if (!this.email) {
        alert("Please enter your email.");
        return;
      }
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
      if (!emailOk) {
        alert("Please enter a valid email.");
        return;
      }
      alert(`Password reset link sent to ${this.email}`);
      // 🔗 API call goes here
    },
  },
};
</script>

<style scoped>
/* Reuse styles from your Signup page */

.btn-submit {
    border-radius: 30px;
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    background-color: #0096D6;
    color: #FFFFFF;
}

.btn-submit:hover {
    border-radius: 30px;
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    background-color: #0096D6;
    color: #FFFFFF;
}


.have-account {
  font-size: 13px;
  color: #555;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0;
}
.login-link {
  color: #005E86;
  font-weight: 600;
  text-decoration: none;
  margin-left: 3px;
}    
.login-link:hover {
  text-decoration: underline;
}

/* Add a default style for btn-submit in case it's not global */

.btn-submit:hover {
  opacity: 0.95;
}
</style>