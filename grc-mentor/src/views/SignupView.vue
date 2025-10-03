<template>
  <main>
    <div class="container signup-container">
      <div class="row w-100 form-section  justify-content-center">
        <div class="mt-5 mb-0">
          <img src="../assets/logo-img.png" alt="" style="height: 35px;" />
        </div>

        <!-- Left Side (Form) -->
        <div class="col-12 col-sm-12 col-md-10 col-lg-6 left">
          <router-link
            to="/home"
            class="d-block mb-1 text-decoration-none"
            style="color: #005E86; font-weight: 600;"
          >
            &larr; Back to homepage
          </router-link>

          <h4 style="font-weight: 600;">Signup</h4>

          <!-- Signup Form -->
          <form @submit.prevent="handleSubmit">
            <div class="mb-1">
              <label class="form-label">First name</label>
              <input
                type="text"
                v-model="form.firstName"
                class="form-control"
                placeholder="Enter your first name"
              />
            </div>
            <div class="mb-1">
              <label class="form-label">Last name</label>
              <input
                type="text"
                v-model="form.lastName"
                class="form-control"
                placeholder="Enter your last name"
              />
            </div>
            <div class="mb-1">
              <label class="form-label">Email</label>
              <div class="input-group">
                <input
                  type="text"
                  v-model="form.emailUsername"
                  class="form-control"
                  placeholder="Enter your email name"
                />
                <span class="input-group-text">@gmail.com</span>
              </div>
            </div>
            <div class="mb-1">
              <label class="form-label">Password</label>
              <input
                type="password"
                v-model="form.password"
                class="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div class="mb-1">
              <label class="form-label">Confirm Password</label>
              <input
                type="password"
                v-model="form.confirmPassword"
                class="form-control"
                placeholder="Re-enter your password"
              />
            </div>

            <!-- Fake Recaptcha -->
            <div
              style="
                padding: 10px;
                margin-top: 12px;
                margin-bottom: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                width: 300px;
                display: flex;
                align-items: center;
                justify-content: space-between;
              "
            >
              <div style="display: flex; align-items: center; gap: 10px;">
                <input
                  type="checkbox"
                  id="captcha-check"
                  style="width: 20px; height: 20px; cursor: pointer;"
                />
                <label for="captcha-check" style="cursor: pointer;">I'm not a robot</label>
              </div>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="recaptcha"
                style="height: 30px;"
              />
            </div>

            <!-- Terms -->
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="termsCheck"
                v-model="form.agree"
              />
              <label class="form-check-label" for="termsCheck">I agree to the terms</label>
            </div>

            <!-- Submit -->
            <router-link to="/welcome" class="btn w-100 btn-submit">Get started</router-link>

            <!-- Already have account -->
            <p class="have-account">
              Already have an account?
              <router-link to="/signin" class="login-link">Login</router-link>
            </p>
          </form>
        </div>

        <!-- Right Side (Image) -->
        <div class="col-lg-6 d-none d-lg-block right p-0">
          <img src="../assets/signup-img.png" alt="Signup Image" class="img-fluid" style="border-radius: 30px;" />
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
    };
  },
  computed: {
    fullEmail() {
      return this.form.emailUsername + "@gmail.com";
    },
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
  },
};
</script>

<style scoped>
/* Buttons */
.btn-submit {
  border-radius: 30px;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  background-color: #0096d6;
  color: #ffffff;
}
.btn-submit:hover {
  background-color: #007bb5;
  color: #ffffff;
}

.login-link {
  color: #005e86;
  font-weight: 600;
  text-decoration: none;
  margin-left: 3px;
}
.login-link:hover {
  text-decoration: underline;
}



/* Image */
.signup-img {
  max-width: 80%;
  border-radius: 30px;
}
/* --- Global fix: prevent horizontal scroll --- */
html, body {
  max-width: 100%;
  overflow-x: hidden;
}

/* Bootstrap container fix */
.container-fluid {
  padding-left: 15px !important;
  padding-right: 15px !important;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
  box-sizing: border-box;
}

/* Ensure UI boxes don’t exceed parent width */
.dropzone,
.captcha-box,
.card,
.banner {
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

/* --- Media Queries for Specific Desktop Sizes --- */

/* 1366×768 (budget laptop screens) */
@media screen and (max-width: 1366px) {
  .container-fluid {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .dropzone, .captcha-box {
    font-size: 14px;
    min-height: 150px;
  }
  .banner-title {
    font-size: 14px;
  }
}

/* 1920×1080 (Full HD office monitors) */
@media screen and (min-width: 1367px) and (max-width: 1920px) {
  .container-fluid {
    max-width: 1600px; /* center content */
  }
}

/* 2560×1440 (QHD monitors) */
@media screen and (min-width: 1921px) and (max-width: 2560px) {
  .container-fluid {
    max-width: 1800px;
  }
  .dropzone {
    min-height: 200px;
  }
}

/* 3840×2160 (4K displays) */
@media screen and (min-width: 2561px) {
  .container-fluid {
    max-width: 2000px; /* readability */
  }
  .banner-title {
    font-size: 20px;
  }
  .dropzone {
    min-height: 220px;
  }
}



</style>
