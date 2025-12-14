<template>
  <main class="mentorship-page">
    <div class="container-fluid row g-0">
      <!-- Sidebar -->
      <div class="col-2 col-md-2 sidebar-col">
        <Sidebar class="sidebar" />
      </div>

      <!-- Main Content -->
      <div class="col-10 col-md-10 p-2 mt-3">
        <!-- Banner -->
        <div class="banner mb-4">
          <div>
            <h5 class="banner-title">Settings & Preferences</h5>
            <p class="banner-sub">Manage your profile, subscription, and referrals.</p>
          </div>
        </div>

        <!-- Combined Account + Subscription -->
        <section class="glass-card combined-card mb-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h6 class="fw-semibold">Account Overview</h6>
          </div>

          <div class="row g-3 align-items-start">
            <!-- Left: Account Info -->
            <div class="col-md-5 border-end">
              <div class="d-flex align-items-center mb-3">
                <img
                  :src="avatarUrl"
                  alt="Avatar"
                  class="avatar-img rounded-circle shadow-sm me-3"
                />
                <div>
                  <h6 class="fw-bold mb-0">{{ fullName }}</h6>
                  <p class="text-muted small mb-0">@{{ username }}</p>
                  <p class="text-muted small">{{ email }}</p>
                </div>
              </div>

              <div class="d-flex flex-wrap gap-2">
                <button class="btn-outline btn-xs" @click="openModal('avatar')">Change Avatar</button>
                <button class="btn-outline btn-xs" @click="openModal('password')">Change Password</button>
              </div>
            </div>

            <!-- Right: Subscription Info -->
            <div class="col-md-7 ps-md-4">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h6 class="fw-semibold mb-0">Subscription</h6>
                <span class="badge bg-gradient text-white px-3 py-1 fw-medium">Active</span>
              </div>

              <p class="text-muted small mb-1">Current Plan</p>
              <h6 class="fw-bold text-primary mb-2">GRC 101</h6>

              <p class="text-muted small mb-2">Included Standards:</p>
              <ul class="list-unstyled d-flex flex-wrap gap-2 mb-2">
                <li v-for="(standard, i) in includedStandards" :key="i" class="standard-pill">
                  <i class="fas fa-shield-alt me-1"></i> {{ standard }}
                </li>
              </ul>

              <div class="progress mb-2" style="height: 6px;">
                <div
                  class="progress-bar bg-gradient"
                  role="progressbar"
                  :style="{ width: progress + '%' }"
                ></div>
              </div>
              <p class="small text-muted mb-2">{{ progress }}% completed</p>

              <div class="d-flex justify-content-between align-items-center">
                <p class="text-muted small mb-0">Upgrade to unlock more standards</p>
                <button class="btn-gradient btn-xs">Upgrade</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Referral Section -->
        <section class="glass-card referral-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h6 class="fw-semibold mb-0">Referral Program</h6>
            <span class="badge bg-gradient text-white px-3 py-1 fw-medium">New</span>
          </div>

          <!-- Mentee Referral -->
          <div class="mb-3">
            <h6 class="fw-bold mb-1 text-primary">Mentee Referral</h6>
            <p class="text-muted small mb-2">
              Mentees can refer their <strong>college/university</strong> and receive a
              <strong>10% discount on GRC 301</strong>.
            </p>

            <div class="referral-box d-flex justify-content-between align-items-center mb-2">
              <div>
                <small class="text-muted">Your Code</small>
                <h6 class="fw-bold mb-0">{{ referralCode }}</h6>
              </div>
              <button class="btn-outline btn-xs" @click="copyReferral">Copy</button>
            </div>

            <p class="text-muted small mb-2">Share on:</p>
            <div class="d-flex flex-wrap gap-2">
              <button class="btn-social btn-xs linkedin" @click="share('linkedin')">
                <i class="fab fa-linkedin"></i>
              </button>
              <button class="btn-social btn-xs facebook" @click="share('facebook')">
                <i class="fab fa-facebook"></i>
              </button>
              <button class="btn-social btn-xs twitter" @click="share('twitter')">
                <i class="fab fa-x-twitter"></i>
              </button>
              <button class="btn-social btn-xs whatsapp" @click="share('whatsapp')">
                <i class="fab fa-whatsapp"></i>
              </button>
            </div>
          </div>

          <hr />

          <!-- University Referral -->

        </section>
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
      progress: 68,
      referralCode: "MENTEE2025",
      universityCode: "",
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
    copyReferral() {
      navigator.clipboard.writeText(this.referralCode);
      alert("Referral code copied!");
    },
    share(platform: string) {
      const text = `Join GRC 101 using my referral code: ${this.referralCode}`;
      const url = encodeURIComponent(window.location.origin);
      let shareUrl = "";
      switch (platform) {
        case "linkedin":
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
          break;
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          break;
        case "twitter":
          shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;
          break;
        case "whatsapp":
          shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`;
          break;
      }
      window.open(shareUrl, "_blank");
    },
  },
};
</script>

<style scoped>
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  color: #333;
}
.sidebar {
  position: fixed;
  height: 100vh;
}
.main-col {
  margin-left: 16.5%;
  padding: 0 2rem;
}


/* Banner */
.banner {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px 25px;
  color: #fff;
  display: flex;
  justify-content: space-between;
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

.banner-right {
  font-size: 15px;
  font-weight: 600;
}


/* Cards */
.glass-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
}
.border-end {
  border-color: #e6ecf3 !important;
}
hr {
  border-color: #f1f1f1;
}

/* Avatar */
.avatar-img {
  width: 55px;
  height: 55px;
  object-fit: cover;
  border: 2px solid #e3f2fd;
}

/* Buttons */
.btn-gradient {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2);
  border: none;
  color: #fff;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 12px;
}
.btn-outline {
  background: #fff;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  color: #333;
  font-size: 12px;
  padding: 4px 10px;
}
.btn-outline:hover {
  border-color: #2d9cdb;
  color: #2d9cdb;
}
.btn-xs {
  padding: 3px 10px !important;
  font-size: 12px !important;
}

/* Inputs */
.modern-input {
  border-radius: 6px;
  border: 1px solid #d0d7de;
  padding: 7px 10px;
  font-size: 13px;
}

/* Referral */
.referral-card .referral-box {
  background: #f4f8ff;
  border: 1px solid #d8e7ff;
  border-radius: 8px;
  padding: 8px 14px;
}
.btn-social {
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
}
.btn-social.linkedin {
  background: #0077b5;
}
.btn-social.facebook {
  background: #1877f2;
}
.btn-social.twitter {
  background: #000;
}
.btn-social.whatsapp {
  background: #25d366;
}

/* Standard tags */
.standard-pill {
  background: #f0f7ff;
  color: #2d9cdb;
  padding: 3px 8px;
  border-radius: 14px;
  font-size: 12px;
}
</style>
