<template>
  <main class="mentorship-page">
    <div class="container-fluid row g-0">
      <!-- Sidebar -->
      <div class="col-2 col-md-2 sidebar-col">
        <Sidebar class="sidebar" />
      </div>

      <!-- Main Content -->
      <div class="col-10 col-md-10 main-col">
        <!-- Banner -->
        <div class="banner mb-5">
          <div>
            <h5 class="banner-title">Settings & Preferences</h5>
            <p class="banner-sub">
              Manage your account information, password, and subscription details.
            </p>
          </div>
        </div>

        <!-- Account Section -->
        <section class="account-section glass-card mb-5">
          <h6 class="fw-semibold mb-4">Account</h6>

          <div class="row align-items-center mb-4">
            <div class="col-md-2 text-center">
              <img
                :src="avatarUrl"
                alt="Avatar"
                class="avatar-img rounded-circle shadow-sm"
              />
            </div>
            <div class="col-md-7">
              <h6 class="fw-bold mb-0">{{ fullName }}</h6>
              <p class="text-muted mb-1">@{{ username }}</p>
              <p class="text-muted small">{{ email }}</p>
            </div>
            <div class="col-md-3 d-flex flex-column align-items-end gap-2">
              <button class="btn-outline" @click="openModal('avatar')">
                Change Avatar
              </button>
              <button class="btn-outline" @click="openModal('password')">
                Change Password
              </button>
            </div>
          </div>
        </section>

        <!-- Subscription Section -->
        <section class="glass-card mb-5 subscription-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h6 class="fw-semibold mb-0">Your Subscription</h6>
            <span class="badge bg-gradient text-white px-3 py-2 fw-medium">Active</span>
          </div>

          <div class="subscription-info mb-4">
            <p class="text-muted small mb-1">Current Plan</p>
            <h5 class="fw-bold text-primary mb-3">GRC 101</h5>

            <p class="text-muted small mb-2">Included Standards:</p>
            <ul class="list-unstyled d-flex flex-wrap gap-3 mb-3">
              <li v-for="(standard, i) in includedStandards" :key="i" class="standard-pill">
                <i class="fas fa-shield-alt me-1"></i> {{ standard }}
              </li>
            </ul>

            <p class="text-muted small mb-1">
              Complete the current phase to unlock advanced compliance modules.
            </p>
          </div>

          <!-- Progress Bar -->
          <div class="progress mb-3" style="height: 8px;">
            <div
              class="progress-bar bg-gradient"
              role="progressbar"
              :style="{ width: progress + '%' }"
              :aria-valuenow="progress"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <p class="small text-muted mb-3">
            {{ progress }}% completed towards your next upgrade.
          </p>

          <div class="d-flex justify-content-between align-items-center">
            <p class="text-muted small mb-0">
              Upgrade to unlock ISO 27017, PCI-DSS, HIPAA & more.
            </p>
            <button class="btn-gradient">Upgrade Plan</button>
          </div>
        </section>
      </div>
    </div>

    <!-- Change Avatar Modal -->
    <div
      class="modal fade"
      id="changeAvatarModal"
      tabindex="-1"
      aria-labelledby="changeAvatarModalLabel"
      aria-hidden="true"
      ref="avatarModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content modal-glass">
          <div class="modal-header border-0">
            <h6 class="modal-title fw-semibold">Change Avatar</h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body text-center">
            <img
              :src="avatarUrl"
              class="rounded-circle shadow-sm mb-3"
              style="width: 90px; height: 90px; object-fit: cover;"
            />
            <input type="file" class="form-control mb-3" @change="handleAvatarUpload" />
            <button class="btn-gradient">Save</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Change Password Modal -->
    <div
      class="modal fade"
      id="changePasswordModal"
      tabindex="-1"
      aria-labelledby="changePasswordModalLabel"
      aria-hidden="true"
      ref="passwordModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content modal-glass">
          <div class="modal-header border-0">
            <h6 class="modal-title fw-semibold">Change Password</h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label fw-medium">Old Password</label>
              <input
                type="password"
                class="form-control modern-input"
                placeholder="Enter old password"
              />
            </div>
            <div class="mb-3">
              <label class="form-label fw-medium">New Password</label>
              <input
                type="password"
                class="form-control modern-input"
                placeholder="Enter new password"
              />
            </div>
            <button class="btn-gradient w-100">Save</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { Modal } from "bootstrap";

export default {
  name: "SettingView",
  components: { Sidebar },
  data() {
    return {
      fullName: "Vishakha Prajapati",
      username: "vishakhapr6385",
      email: "vishakhaprajapati0502@gmail.com",
      avatarUrl: "https://i.pravatar.cc/150?img=47",
      includedStandards: ["ISO 27001", "SOC 2", "NIST CSF", "GDPR"],
      progress: 0, // will animate on load
      modals: {
        avatar: null as Modal | null,
        password: null as Modal | null,
      },
    };
  },
  methods: {
    openModal(type: "avatar" | "password") {
      if (type === "avatar") this.modals.avatar?.show();
      else this.modals.password?.show();
    },
    handleAvatarUpload(event: any) {
      const file = event.target.files[0];
      if (file) this.avatarUrl = URL.createObjectURL(file);
    },
  },
  mounted() {
    this.modals.avatar = new Modal(this.$refs.avatarModal as HTMLElement);
    this.modals.password = new Modal(this.$refs.passwordModal as HTMLElement);

    // Animate progress bar
    const target = 68;
    let current = 0;
    const interval = setInterval(() => {
      if (current < target) {
        current++;
        this.progress = current;
      } else {
        clearInterval(interval);
      }
    }, 20);
  },
};
</script>

<style scoped>
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  font-family: "Inter", sans-serif;
}

.sidebar-col {
  padding-left: 0;
  padding-right: 0;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}
.main-col {
  margin-left: 16.5%;
  padding: 0 2rem;
}

/* Banner */
.banner {
  margin-top: 30px;
  width: 99%;
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px 25px;
  color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
.banner-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}
.banner-sub {
  font-size: 13px;
  opacity: 0.9;
  margin: 2px 0 0 0;
}

/* Glass Cards */
.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  padding: 22px;
}

/* Avatar */
.avatar-img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border: 3px solid #e3f2fd;
}

/* Buttons */
.btn-gradient {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2);
  border: none;
  color: #fff;
  border-radius: 8px;
  padding: 8px 20px;
  font-weight: 500;
  transition: all 0.3s ease;
}
.btn-gradient:hover {
  background: linear-gradient(90deg, #56ccf2, #2f80ed);
  transform: translateY(-2px);
}

.btn-outline {
  background: #fff;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  color: #333;
  font-size: 14px;
  padding: 6px 12px;
  transition: all 0.3s ease;
}
.btn-outline:hover {
  border-color: #2d9cdb;
  color: #2d9cdb;
}

/* Inputs */
.modern-input {
  border-radius: 8px;
  border: 1px solid #d0d7de;
  padding: 10px 14px;
  transition: border 0.3s ease, box-shadow 0.3s ease;
}
.modern-input:focus {
  border-color: #56ccf2;
  box-shadow: 0 0 0 0.15rem rgba(86, 204, 242, 0.25);
}

/* Modal Glass Style */
.modal-glass {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: none;
  padding: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

/* Subscription */
.subscription-card {
  position: relative;
}
.bg-gradient {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2);
}
.progress-bar.bg-gradient {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  transition: width 1s ease-in-out;
  border-radius: 4px;
}
.subscription-info h5 {
  color: #2d9cdb;
}
.subscription-info strong {
  color: #2f80ed;
}
.standard-pill {
  background-color: #f0f7ff;
  color: #2d9cdb;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 13px;
  display: flex;
  align-items: center;
}
.standard-pill i {
  color: #2f80ed;
}
</style>
