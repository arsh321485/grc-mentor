<template>
  <main>
    <div class="container signup-container">
      <div class="row w-100 form-section justify-content-center">
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
            <div class="mb-3">
              <a
                href="javascript:void(0)"
                class="text-primary small"
                @click="openPolicyModal"
              >
              Accept Terms & Conditions
              </a>
            </div>

            <!-- Submit -->
            <router-link
              to="/welcome"
              class="btn w-100 btn-submit"
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
          <img
            src="../assets/signup-img.png"
            alt="Signup Image"
            class="img-fluid"
            style="border-radius: 30px;"
          />
        </div>
      </div>
    </div>

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
            By signing up, you agree to follow the platform guidelines, respect user privacy,
            and responsibly use all provided resources.
          </p>
          <p>
            Any misuse of information or violation of community standards may result in
            termination of your account.
          </p>
          <div class="form-check gap-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="agreeTerms"
              v-model="form.agree"
            />
            <label class="form-check-label small-text" for="agreeTerms">
              I agree to the terms
            </label>
          </div>
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

<style scoped>
/* --- Your Existing Styles --- */
.btn-submit {
  border-radius: 30px;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  background-color: #0096d6;
  color: #ffffff;
  text-align: center;
  display: block;
  text-decoration: none;
}
.btn-submit:hover {
  background-color: #007bb5;
  color: #ffffff;
}
.btn-submit.disabled {
  background-color: #a0cde1;
  pointer-events: none;
  cursor: not-allowed;
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

/* ✅ Modal Styles (same as Mentorship Page) */
.center-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-header,
.modal-footer {
  padding: 12px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  padding: 15px;
  font-size: 14px;
  color: #444;
}

.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.small-text {
  font-size: 13px;
  color: #555;
}
</style>
