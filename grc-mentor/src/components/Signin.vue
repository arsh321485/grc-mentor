<template>
  <main>
    <div class="container signup-container">
      <div class="row w-100 form-section mt-2">

        <!-- Left Side -->
        <div class="col-lg-6 col-md-12 left">
          <router-link to="/home" class="d-block mb-1 text-decoration-none" style="color: #005E86; font-weight: 600;">
            &larr; Back to homepage
          </router-link>

          <h4 style="font-weight: 600;">Welcome back</h4>
          <p class="mb-4" style="font-weight: 500; color: #00000099; font-size: 12px;">
            Sign in to continue learning with the GRC Department.
          </p>

          <!-- Social Login -->
         

          <!-- Divider -->
          <div class="or-divider">
           
          </div>

          <!-- Login Form -->
          <form @submit.prevent="handleLogin">
            <div class="mb-2">
              <label class="form-label">Email</label>
              <input type="email" v-model.trim="form.email" class="form-control" placeholder="Enter your email address">
            </div>
            <div class="mb-2">
              <label class="form-label">Password</label>
              <input type="password" v-model="form.password" class="form-control" placeholder="Enter your password">
            </div>

            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="rememberMe" v-model="form.remember">
                <label class="form-check-label" for="rememberMe">Remember me</label>
              </div>
              <router-link to="/forgot-password" class="small text-decoration-none fw-semibold" style="color:#005E86;">
                Forgot password?
              </router-link>
            </div>

            <!-- Submit -->
            <button type="submit" class="btn w-100 btn-submit">
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
          <img src="../assets/signup-img.png" alt="Login Image" style="border-radius: 30px;">
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: "Signin",
  data() {
    return {
      form: {
        email: "",
        password: "",
        remember: false
      }
    };
  },
  methods: {
    handleLogin() {
      if (!this.form.email) {
        alert("Please enter your email.");
        return;
      }
      // Simple email pattern check
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email);
      if (!emailOk) {
        alert("Please enter a valid email.");
        return;
      }
      if (!this.form.password) {
        alert("Please enter your password.");
        return;
      }

      // TODO: replace with real auth call
      // Example: await this.$auth.login(this.form)
      alert("Logged in successfully!");
      this.$router.push("/uploadcv"); // redirect after login (adjust as needed)
    }
  }
};
</script>

<style scoped>
/* Reuse styles from your Signup page */

.social-icon-btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}
.social-icon-btn img {
  height: 18px;
  width: auto;
}
.social-icon-btn:hover {
  background-color: #f8f8f8;
  border-color: #aaa;
  transform: scale(1.05);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.signup-text {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #444;
  margin: 20px 0 15px 0;
}

.or-divider {
  display: flex;
  align-items: center;
  text-align: center;
  color: #666;
  margin: 5px 0 15px 0;
}
.or-divider::before,
.or-divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ccc;
}
.or-divider:not(:empty)::before {
  margin-right: 10px;
}
.or-divider:not(:empty)::after {
  margin-left: 10px;
}
.or-divider span {
  font-size: 14px;
  font-weight: 500;
  text-transform: lowercase;
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
