<template>
  <main class="signin-wrapper">
    <div class="signin-card">
      <div class="row g-0 align-items-center">

        <!-- LEFT SIDE (Form) -->
        <div class="col-12 col-lg-6 px-5">
          <!-- LOGO -->
          <img src="../assets/logo-img.png" alt="Logo" class="signin-logo" />

          <router-link to="/home" class="d-block back-link text-decoration-none py-2">
            ← Back to homepage
          </router-link>

          <h6 class="my-2">Forgot Password</h6>
          <p class="subtitle">Enter your registered email address and we’ll send you a reset link.</p>

          <form @submit.prevent="handleForgot">
            <div class="mb-1">
              <label class="form-label">Email</label>
              <input
                type="email"
                v-model.trim="email"
                class="form-control"
                placeholder="Enter your email address"
              />
            </div>

            <button type="submit" class="btn-submit w-100 mb-2">Send Reset Link</button>

            <p class="form-label pb-2">
              Remember your password?
              <router-link to="/signin" class="login-link">Back to Login</router-link>
            </p>
          </form>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="col-lg-6 d-none d-lg-flex right">
          <div class="image-wrapper">
            <img src="../assets/signup-img.png" class="right-img" alt="Forgot Image" />
          </div>
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
      // place API call for sending reset link here
    },
  },
};
</script>

<style scoped>
/* ---- Matches SignIn sizing & typography ---- */
.signin-logo {
  height: 25px; /* same as SignIn */
}

/* Wrapper same as SignIn */
.signin-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  padding: 30px;
}

/* Card same as SignIn */
.signin-card {
  height: 610px;
  max-width: 1100px;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0,0,0,0.12);
}

/* Typography & spacing same as SignIn */
.form-label { font-size: 14px; }
.form-control {
  font-size: 14px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

/* subtitle same as SignIn */
.subtitle {
  font-size: 13px;
  color: #5a5a5a;
  margin-bottom: 8px;
}

/* Button - same visual weight as SignIn */
.btn-submit {
  border-radius: 10px;
  padding: 10px;
  background-color: #0096d6;
  color: #fff;
  font-size: 16px;
  display: block;
  border: none;
  font-weight: 600;
}

/* Right image same as SignIn */
.right { padding: 24px; }
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

/* Login link style consistent with SignIn */
.login-link {
  color: #005E86;
  font-weight: 600;
  text-decoration: none;
  margin-left: 3px;
}
.login-link:hover {
  text-decoration: underline;
}

/* small helpers */
.mb-1 { margin-bottom: .5rem; }
.mb-2 { margin-bottom: .75rem; }
.my-2 { margin-top: .5rem; margin-bottom: .5rem; }

/* Responsive */
@media (max-width: 992px) {
  .right { display: none !important; }
  .signin-card { height: auto; padding-top: 30px; padding-bottom: 30px; }
}
</style>
