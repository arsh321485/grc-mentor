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

          <h4 style="font-weight: 600;">Change Password</h4>
          <p class="mb-4" style="font-weight: 500; color: #00000099; font-size: 12px;">
            Enter your current password and choose a new one.
          </p>

          <form @submit.prevent="handleChangePassword">
            <div class="mb-3">
              <label class="form-label">Current Password</label>
              <input type="password" v-model.trim="currentPassword" class="form-control" placeholder="Enter current password">
            </div>

            <div class="mb-3">
              <label class="form-label">New Password</label>
              <input type="password" v-model.trim="newPassword" class="form-control" placeholder="Enter new password">
            </div>

            <div class="mb-3">
              <label class="form-label">Confirm New Password</label>
              <input type="password" v-model.trim="confirmPassword" class="form-control" placeholder="Re-enter new password">
            </div>

            <button type="submit" class="btn w-100 btn-submit">
              Update Password
            </button>

            <p class="have-account">
              Go back to
              <router-link to="/profile" class="login-link">Profile</router-link>
            </p>
          </form>
        </div>

        <!-- Right Side (Image) -->
        <div class="col-lg-6 right p-0 d-none d-lg-block">
          <img src="../assets/signup-img.png" alt="Change Password Image" style="border-radius: 30px;">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ChangePasswordView",
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleChangePassword() {
      if (!this.currentPassword || !this.newPassword || !this.confirmPassword) {
        alert("Please fill all fields.");
        return;
      }
      if (this.newPassword !== this.confirmPassword) {
        alert("New passwords do not match.");
        return;
      }
      alert("Password updated successfully!");
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