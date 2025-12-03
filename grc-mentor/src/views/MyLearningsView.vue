<template>
  <main class="mentorship-page">
    <div class="container-fluid">
      <div class="row g-0">
        <!-- Sidebar -->
        <div class="col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 sidebar-col">
          <Sidebar class="sidebar" />
        </div>

        <!-- Main Area -->
        <div class="col-sm-9 col-md-9 col-lg-10 col-xl-10 col-xxl-10">

          <!-- Banner -->
          <div class="banner mb-5 ms-0 ms-sm-2 ms-md-3 ms-lg-3 ms-xl-3 ms-xxl-3 ms-lg-5  ms-xl-5 ms-xxl-5">

            <div class="banner-left">
              <h6 class="banner-title">My Learning Dashboard</h6>
              <p class="banner-sub">Explore and continue your learning across key domains</p>
            </div>
          </div>

          <!-- Modules Section -->
          <section class="modules-section">
            <div class="row g-4 ms-0 ms-xl-5 ms-lg-5">
              <!-- Module Card -->
              <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" v-for="(module, index) in modules"
                :key="index">
                <div class="module-card shadow-sm p-4 rounded-4">
                  <div class="d-flex justify-content-between align-items-start mb-3">
                    <div class="d-flex align-items-center gap-2">
                      <i :class="module.icon" class="module-icon"></i>
                      <div>
                        <h6 class="fw-semibold mb-1">{{ module.title }}</h6>
                        <p class="text-muted small">{{ module.description }}</p>
                      </div>
                    </div>
                    <span class="badge progress-badge" :class="{
                      'bg-success': module.progress >= 80,
                      'bg-primary': module.progress < 80 && module.progress >= 50,
                      'bg-warning text-dark': module.progress < 50
                    }">
                      {{ module.progress }}%
                    </span>
                  </div>

                  <!-- Glowing Progress Bar -->
                  <div class="progress mb-3">
                    <div class="progress-bar glowing" role="progressbar" :style="{ width: module.progress + '%' }"
                      :aria-valuenow="module.progress" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>

                  <!-- Module Footer -->
                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <div class="progress-text">
                      <small :class="{
                        'text-success': module.progress >= 80,
                        'text-primary': module.progress < 80 && module.progress >= 50,
                        'text-warning': module.progress < 50
                      }">
                        {{ module.progress < 100 ? 'In Progress' : 'Completed' }} </small>
                    </div>

                    <div class="d-flex gap-2">
                      <!-- Left Button -->
                      <button class="btn btn-gradient btn-sm" @click="openModal(module)">
                        View Task
                      </button>

                      <!-- Right Button -->
                      <router-link :to="module.link" class="btn btn-gradient btn-sm">
                        {{ module.progress < 100 ? 'Continue Learning' : 'View Summary' }} </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- ✅ Right Side Modal -->
          <transition name="slide">
            <div v-if="showModal" class="right-modal-overlay" @click.self="closeModal">
              <div class="right-modal shadow-lg">
                <div class="modal-header">
                  <h5>{{ selectedModule.title }} — Tasks</h5>
                  <button class="close-btn" @click="closeModal">&times;</button>
                </div>
                <div class="modal-body">
                  <p class="text-muted small">{{ selectedModule.description }}</p>
                  <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center"
                      v-for="(task, i) in selectedModule.tasks" :key="i">
                      {{ task.name }}
                      <span class="badge" :class="task.completed ? 'bg-success' : 'bg-secondary'">
                        {{ task.completed ? "Done" : "Pending" }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "LearningView",
  components: { Sidebar },
  data() {
    return {
      showModal: false,
      selectedModule: {},
      modules: [
        {
          title: "Legal",
          description: "Dive into regulatory frameworks, data protection, and compliance essentials.",
          progress: 70,
          icon: "bi bi-balance-scale",
          link: "/module/legal",
          tasks: [
            { name: "Understand GDPR basics", completed: true },
            { name: "Draft a privacy policy", completed: false },
            { name: "Identify key compliance risks", completed: false },
          ],
        },
        {
          title: "Education",
          description: "Explore LMS, digital classrooms, and the ethics of edtech innovation.",
          progress: 45,
          icon: "bi bi-mortarboard",
          link: "/module/education",
          tasks: [
            { name: "Analyze LMS tools", completed: true },
            { name: "Create an e-learning plan", completed: false },
          ],
        },
        {
          title: "E-Commerce",
          description: "Master security, privacy, and growth strategies in the online retail ecosystem.",
          progress: 80,
          icon: "bi bi-cart-check",
          link: "/module/ecommerce",
          tasks: [
            { name: "Research online payment systems", completed: true },
            { name: "Assess website vulnerabilities", completed: true },
            { name: "Plan secure checkout flow", completed: false },
          ],
        },
        {
          title: "Media",
          description: "Learn content governance, copyright policies, and responsible broadcasting.",
          progress: 30,
          icon: "bi bi-camera-reels",
          link: "/module/media",
          tasks: [
            { name: "Explore copyright laws", completed: false },
            { name: "Review fair use principles", completed: false },
          ],
        },
      ],
    };
  },
  methods: {
    openModal(module: any) {
      this.selectedModule = module;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
/* Page Layout */
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  font-family: "Inter", sans-serif;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}

/* Banner */
.banner {
  margin-top: 30px;
  width: 95%;
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

/* Module Card */
.module-card {
  background: #ffffff;
  border: 1px solid #eef1f4;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 97%;
}

.module-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 0;
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  transition: width 0.4s ease;
}

.module-card:hover::after {
  width: 100%;
}

.module-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}

/* Module Icon */
.module-icon {
  font-size: 1.8rem;
  color: #2d9cdb;
  background: #e8f6ff;
  padding: 10px;
  border-radius: 12px;
}

/* Progress Bar */
.progress {
  height: 8px;
  background-color: #edf2fa;
  border-radius: 10px;
}

.progress-bar {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  border-radius: 10px;
  transition: width 0.4s ease;
}

.glowing {
  box-shadow: 0 0 8px rgba(86, 204, 242, 0.6);
}

/* Buttons */
.btn-gradient {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
/* background: #36a866; */
  color: rgb(25, 216, 41);
  border-radius: 10px;
  /* border: none; */
  border-radius: 10px;
  padding: 8px 20px;
  font-weight: 500;
  font-size: 13px;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-gradient:hover {
  background: linear-gradient(90deg, #56ccf2, #2f80ed);
  transform: translateY(-2px);
}

/* Right-Side Modal */
.right-modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  z-index: 1000;
}

.right-modal {
  width: 380px;
  max-width: 90%;
  background: #fff;
  height: 100%;
  border-radius: 0;
  box-shadow: -6px 0 18px rgba(0, 0, 0, 0.15);
  animation: slideIn 0.3s ease forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

.modal-header {
  padding: 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  padding: 20px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
}

/* Badges */
.progress-badge {
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 12px;
}
/* small tabs */
@media (min-width: 600px) and (max-width: 767px) {

  .banner-title { font-size: 14px !important; }
  .banner-sub { font-size: 11px !important; }

  .module-icon { font-size: 1.3rem !important; }

  .module-card h6 { font-size: 14px !important; }
  .module-card p.small { font-size: 12px !important; }

  .progress-badge { font-size: 10px !important; }

  .btn-gradient { font-size: 11px !important; padding: 6px 14px !important; }

  .modal-header h5 { font-size: 16px !important; }
  .modal-body p { font-size: 13px !important; }

}
/* tablets */
/* 🌟 TABLET FIX - ONLY for 768px to 1024px */
@media (min-width: 768px) and (max-width: 1024px) {

  /* --- Sidebar & Main Columns --- */
  .sidebar-col {
    flex: 0 0 28% !important;
    max-width: 28% !important;
  }

  .col-sm-9.col-md-9.col-lg-10.col-xl-10.col-xxl-10 {
    flex: 0 0 72% !important;
    max-width: 72% !important;
  }

  /* --- Banner Fix --- */
  .banner {
    width: 92% !important;
    margin-left: 20px !important;
    padding: 16px 20px !important;
  }

  .banner-title { font-size: 16px !important; }
  .banner-sub { font-size: 13px !important; }

  /* --- Module Section Fix --- */
  .modules-section .row {
    margin-left: 0 !important;
    padding: 0 15px !important;
  }

  /* Ensure 2 cards per row and aligned */
  .module-card {
    width: 100% !important;
    margin: 0 auto !important;
    padding: 18px !important;
  }

  .module-icon {
    font-size: 1.6rem !important;
  }

  .progress-badge {
    font-size: 11px !important;
    padding: 5px 10px !important;
  }

  /* Buttons smaller for tablet */
  .btn-gradient {
    font-size: 12px !important;
    padding: 6px 14px !important;
  }

  /* Modal adjustments */
  .right-modal {
    width: 340px !important;
  }

  .modal-header h5 { font-size: 16px !important; }
  .modal-body p { font-size: 14px !important; }
}

/* small latops */
@media (min-width: 1025px) and (max-width: 1280px) {

  .banner-title { font-size: 16px !important; }
  .banner-sub { font-size: 13px !important; }

  .module-icon { font-size: 1.6rem !important; }

  .module-card h6 { font-size: 16px !important; }
  .module-card p.small { font-size: 14px !important; }

  .progress-badge { font-size: 12px !important; }

  .btn-gradient { font-size: 13px !important; padding: 8px 18px !important; }

  .modal-header h5 { font-size: 18px !important; }
  .modal-body p { font-size: 15px !important; }

}
/* laptops */
@media (min-width: 1281px) and (max-width: 1440px) {
  .banner {
    width: 90% !important;
    margin-left: 60px !important;
  }
 .module-card {
    width: 80% !important;
    margin: 0 auto !important;
  }

  .banner-title { font-size: 17px !important; }
  .banner-sub { font-size: 14px !important; }

  .module-icon { font-size: 1.7rem !important; }

  .module-card h6 { font-size: 17px !important; }
  .module-card p.small { font-size: 15px !important; }

  .btn-gradient { font-size: 14px !important; }

}
/* dektop  */
@media (min-width: 1441px) and (max-width: 1920px) {

  .banner-title { font-size: 18px !important; }
  .banner-sub { font-size: 15px !important; }

  .module-icon { font-size: 1.8rem !important; }

  .module-card h6 { font-size: 18px !important; }
  .module-card p.small { font-size: 16px !important; }

  .btn-gradient { font-size: 15px !important; }

}
/* Large Monitors / 2K / 4K (1921px+) */
@media (min-width: 1921px) {


  .banner-title { font-size: 20px !important; }
  .banner-sub { font-size: 16px !important; }

  .module-icon { font-size: 2rem !important; }

  .module-card h6 { font-size: 19px !important; }
  .module-card p.small { font-size: 17px !important; }

  .btn-gradient { font-size: 16px !important; padding: 10px 24px !important; }

  .modal-header h5 { font-size: 20px !important; }
  .modal-body p { font-size: 17px !important; }
}
/* 🔥 FULL FIX FOR 1100px – 1280px (your breaking zone) */
@media (min-width: 1100px) and (max-width: 1280px) {

  /* Sidebar + main layout balance */
  .sidebar-col {
    flex: 0 0 26% !important;
    max-width: 26% !important;
  }

  .col-sm-9.col-md-9.col-lg-10.col-xl-10.col-xxl-10 {
    flex: 0 0 74% !important;
    max-width: 74% !important;
  }

  /* Banner aligns correctly */
  .banner {
    width: 88% !important;
    margin-left: 40px !important;
  }

  /* REMOVE ms-5 pushing row to right */
  .modules-section .row {
    margin-left: 0 !important;
  }

  /* Make 2 cards per row fit nicely */
  .module-card {
    width: 92% !important;
    margin: 0 auto !important;
  }
.btn-gradient {
    font-size: 13px !important;
    padding: 8px 12px !important;

  }
}

</style>
