<template>
  <main class="page">
    <div class="container">
      <div class="row w-100 form-section mt-2">
        <!-- Logo -->
        <div class="mt-5 mb-0 text-center text-lg-start">
          <img src="../assets/logo-img.png" alt="Logo" class="signin-logo" />
        </div>

        <!-- Left Side -->
        <div class="col-lg-6 col-md-12 left">
          <router-link to="/home" class="d-block mb-2 back-link">
            &larr; Back to homepage
          </router-link>

          <h4 class="fw-semibold">Welcome back</h4>
          <p class="subtitle">
            Sign in to continue learning with the GRC Mentor.
          </p>

          <!-- Login Form -->
          <form @submit.prevent="handleLogin">
            <div class="mb-2">
              <label class="form-label">Email</label>
              <input
                type="email"
                v-model.trim="form.email"
                class="form-control"
                placeholder="Enter your email address"
              />
            </div>
            <div class="mb-2">
              <label class="form-label">Password</label>
              <input
                type="password"
                v-model="form.password"
                class="form-control"
                placeholder="Enter your password"
              />
            </div>

            <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="rememberMe"
                  v-model="form.remember"
                />
                <label class="form-check-label" for="rememberMe"
                  >Remember me</label
                >
              </div>
              <router-link to="/forgotpassword" class="forgot-link">
                Forgot password?
              </router-link>
            </div>

            <!-- Fake Recaptcha -->
            <div class="fake-recaptcha mb-3">
              <div class="d-flex align-items-center gap-2">
                <input type="checkbox" id="captcha-check" />
                <label for="captcha-check">I'm not a robot</label>
              </div>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="recaptcha"
              />
            </div>

            <!-- Submit -->
            <button type="submit" class=" w-100 btn-submit">
              Sign in
            </button>

            <!-- No account -->
            <p class="have-account">
              Don’t have an account?
              <router-link to="/signup" class="login-link">Create one</router-link>
            </p>
          </form>
        </div>

        <!-- Right Side (Image) -->
        <div class="col-lg-6 right p-0 d-none d-lg-block">
          <img
            src="../assets/signup-img.png"
            alt="Login Image"
            class="img-fluid rounded-4 right-img"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: "SignIn",
  data() {
    return {
      form: {
        email: "",
        password: "",
        remember: false,
      },
    };
  },
  methods: {
    handleLogin() {
      if (!this.form.email) return alert("Please enter your email.");
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email);
      if (!emailOk) return alert("Please enter a valid email.");
      if (!this.form.password) return alert("Please enter your password.");
      alert("Logged in successfully!");
      this.$router.push("/welcome");
    },
  },
};
</script>

