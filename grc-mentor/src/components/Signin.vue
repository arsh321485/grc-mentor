<template>
  <main class="signin-wrapper">
    <div class="signin-card">
      <div class="row g-0 align-items-center">

        <!-- LEFT SIDE -->
        <div class="col-12 col-lg-6 px-5">

          <!-- LOGO -->
          <img src="../assets/logo-img.png" alt="Logo" class="signin-logo" />

          <router-link to="/home" class="d-block back-link text-decoration-none py-2">
            ← Back to homepage
          </router-link>

          <h6 class="my-2">Welcome back</h6>
          <p class="subtitle">Sign in to continue learning with the GRC Mentor.</p>

          <!-- FORM -->
          <form @submit.prevent="handleLogin">
            <div class="mb-1">
              <label class="form-label">Email</label>
              <input type="email" v-model="form.email" class="form-control" placeholder="Enter your email" />
            </div>

            <div class="mb-1">
              <label class="form-label">Password</label>
              <input type="password" v-model="form.password" class="form-control" placeholder="Enter password" />
            </div>

            <div class="d-flex justify-content-between align-items-center flex-wrap">
              <div class="d-flex align-items-center gap-1 py-2">
                <input type="checkbox" v-model="form.remember" />
                <label class="form-label">Remember me</label>
              </div>

              <router-link to="/forgotpassword" class="forgot-link form-label">Forgot password?</router-link>
            </div>

            <!-- CAPTCHA -->
            <div class="captcha-box d-flex align-items-center justify-content-between mb-2">
              <div class="d-flex align-items-center gap-2">
                <input type="checkbox" />
                <label class="form-label">I'm not a robot</label>
              </div>
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" class="captcha-img" />
            </div>

            <!-- SUBMIT -->
            <button type="submit" class="btn-submit w-100 mb-2">Sign in</button>

            <p class="form-label pb-2">
              Don’t have an account?
              <router-link to="/signup" class="login-link">Create one</router-link>
            </p>
          </form>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="col-lg-6 d-none d-lg-flex right">
          <div class="image-wrapper">
            <img src="../assets/signup-img.png" class="right-img" alt="Signin Image" />
          </div>
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
      if (!this.form.email) return alert("Enter email");
      if (!this.form.password) return alert("Enter password");
      alert("Logged in successfully!");
      this.$router.push("/welcome");
    }
  }
};
</script>

<style scoped>
.signin-logo {
  height: 25px;
}

/* Same wrapper style as Signup */
.signin-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  padding: 30px;
}

/* FIXED — FULL RESPONSIVE WITHOUT CHANGING UI */
.signin-card {
  min-height: 610px; /* SAME LOOK */
  height: auto;      /* responsive */
  max-width: 1100px;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0,0,0,0.12);
}

/* Typography */
.form-label {
  font-size: 14px;
}
.form-control {
  font-size: 14px;
}

.subtitle {
  font-size: 13px;
  color: #5a5a5a;
  margin-bottom: 8px;
}

.btn-submit {
  border-radius: 10px;
  padding: 10px;
  background-color: #0096d6;
  color: #fff;
  font-size: 16px;
  display: block;
  border: none;
}

/* CAPTCHA */
.captcha-box {
  padding: 9px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.captcha-img {
  height: 22px;
}

/* RIGHT IMAGE SAME AS SIGNUP */
.right {
  padding: 24px;
}
.image-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
}
.right-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* RESPONSIVE (NO UI CHANGE) */
@media (max-width: 992px) {
  .right {
    display: none !important;
  }
}
/* Fix for iPad Air / iPad Mini / medium-height screens */
@media (max-height: 900px) and (min-width: 600px) {
  .signin-wrapper {
    align-items: flex-start !important;
    padding-top: 60px !important;  /* keeps same spacing as desktop */
    padding-bottom: 40px !important;
    overflow-y: auto;              /* allows normal scroll without affecting UI */
  }
}

</style>
