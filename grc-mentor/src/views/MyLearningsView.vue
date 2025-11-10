<template>
  <main class="mentorship-page">
    <div class="container-fluid">
      <div class="row g-0">
        <!-- Sidebar -->
        <div class="col-2 col-md-2 sidebar-col">
          <Sidebar class="sidebar" />
        </div>

        <!-- Main Area -->
        <div class="col-10 col-md-10 ">
          <!-- Banner -->
          <div class="banner mb-5">
            <div class="banner-left">
              <h6 class="banner-title">My Learning Dashboard</h6>
              <p class="banner-sub">Explore and continue your learning across key domains</p>
            </div>
          </div>

          <!-- Modules Section -->
          <section class="modules-section">
            <div class="row g-4">
              <!-- Module Card -->
              <div
                class="col-md-6 col-lg-6"
                v-for="(module, index) in modules"
                :key="index"
              >
                <div class="module-card shadow-sm p-4 rounded-4">
                  <div class="d-flex justify-content-between align-items-start mb-3">
                    <div class="d-flex align-items-center gap-2">
                      <i :class="module.icon" class="module-icon"></i>
                      <div>
                        <h6 class="fw-semibold mb-1">{{ module.title }}</h6>
                        <p class="text-muted small">{{ module.description }}</p>
                      </div>
                    </div>
                    <span
                      class="badge progress-badge"
                      :class="{
                        'bg-success': module.progress >= 80,
                        'bg-primary': module.progress < 80 && module.progress >= 50,
                        'bg-warning text-dark': module.progress < 50
                      }"
                    >
                      {{ module.progress }}%
                    </span>
                  </div>

                  <!-- Glowing Progress Bar -->
                  <div class="progress mb-3">
                    <div
                      class="progress-bar glowing"
                      role="progressbar"
                      :style="{ width: module.progress + '%' }"
                      :aria-valuenow="module.progress"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>

                  <!-- Module Footer -->
                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <div class="progress-text">
                      <small
                        :class="{
                          'text-success': module.progress >= 80,
                          'text-primary': module.progress < 80 && module.progress >= 50,
                          'text-warning': module.progress < 50
                        }"
                      >
                        {{ module.progress < 100 ? 'In Progress' : 'Completed' }}
                      </small>
                    </div>

                    <div class="d-flex gap-2">
                      <!-- Left Button -->
                      <button class="btn btn-gradient btn-sm" @click="openModal(module)">
                        View Task
                      </button>

                      <!-- Right Button -->
                      <router-link :to="module.link" class="btn btn-gradient btn-sm">
                        {{ module.progress < 100 ? 'Continue Learning' : 'View Summary' }}
                      </router-link>
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
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      v-for="(task, i) in selectedModule.tasks"
                      :key="i"
                    >
                      {{ task.name }}
                      <span
                        class="badge"
                        :class="task.completed ? 'bg-success' : 'bg-secondary'"
                      >
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
.sidebar-col {
  padding: 0;
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
  font-size: 18px;
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
  border: none;
  border-radius: 22px;
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
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
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


</style>
