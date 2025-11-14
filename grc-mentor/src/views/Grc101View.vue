<template>
  <main class="mentorship-page">
    <div class="container-fluid row g-0">
      <!-- Sidebar -->
      <div class="col-2 col-md-2 sidebar-col">
        <Sidebar class="sidebar" />
      </div>

      <!-- Main -->
      <div class="col-10 col-md-10 main-col">
        <!-- Banner -->
        <div class="banner mb-4">
          <div class="banner-left">
            <h6 class="banner-title">GRC 101</h6>
            <p class="banner-sub">
              You will be working with Media, Legal, Education and E-commerce industries.
            </p>
          </div>
        </div>

        <!-- 🟢 Top Banner -->
        <div class="top-banner mb-4">
          <div class="banner-content">
            <h4 class="banner-title">Industries</h4>
          </div>
        </div>

        <!-- 🟢 Tabs -->
        <div class="tab-buttons mb-4 d-flex flex-wrap gap-2">
          <button
            v-for="(industry, index) in industries"
            :key="index"
            class="tab-btn"
            :class="{ active: activeTab === industry.name }"
            @click="activeTab = industry.name"
          >
            {{ industry.name }}
          </button>
        </div>

        <!-- 🟩 Industry Section -->
        <section>
          <div class="container-fluid">
            <div class="row industry-row">
              <div
                v-for="(industry, index) in filteredIndustries"
                :key="index"
                class="col-12 industry-col"
              >
                <h6 class="fw-semibold mb-3 industry-title">
                  {{ industry.name }}
                  <span class="text-muted small">{{ industry.tasks.length }} tasks</span>
                </h6>

                <!-- Task Cards (4 per row) -->
                <div class="row g-4">
                  <div
                    v-for="(task, idx) in industry.tasks"
                    :key="idx"
                    class="col-12 col-sm-6 col-lg-3"
                  >
                    <div class="task-card">
                      <!-- 🖼️ Image Banner -->
                      <div class="task-banner">
                        <img :src="task.image" alt="task banner" class="task-img" />
                      </div>

                      <!-- Task Content -->
                      <div class="task-card-content">
                         <span class="text-semibold text-muted">{{ task.domain }}</span>

                        <h6 class="task-title">{{ task.title }}</h6>
                        <p class="task-subtitle">{{ task.subtitle }}</p>

                        <div class="tags">
                          <span class="tag">{{ task.tag }}</span><span class="tag">{{ task.tag }}</span><span class="tag">{{ task.tag }}</span>
                        </div>

                        <!-- Progress Bar -->
                        <div class="progress-container mt-2 mb-2">
                          <div class="progress">
                            <div
                              class="progress-bar"
                              :style="{ width: task.progressValue + '%' }"
                            ></div>
                          </div>
                          <small class="progress-text">{{ task.progress }}</small>
                        </div>

                        <!-- Footer -->
                        <div class="footer">
                          <span class="deadline">{{ task.deadline }}</span>
                          <router-link
                            to="/policyreview2"
                            class="btn btn-outline-primary btn-sm "
                            :class="{
                              'btn-success text-white': task.progress === 'Completed',
                              'btn-secondary text-white': task.progress === 'Not started',
                              'btn-warning text-white': task.progress === 'In progress',
                            }"
                          >
                            View
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Grc101View",
  components: { Sidebar },
  data() {
    return {
      activeTab: "Media",
      industries: [
        {
          name: "Media",
          tasks: Array.from({ length: 8 }, (_, i) => ({
            domain:"Domain Name",
            title: `Media Task ${i + 1}`,
            subtitle: "Name of the Subtask",
            deadline: "23rd July, 2025",
            progress: i % 2 === 0 ? "In progress" : "Completed",
            progressValue: i % 2 === 0 ? 60 : 100,
            tag: "ISO 27001",
            image:
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
          })),
        },
        {
          name: "Legal",
          tasks: Array.from({ length: 8 }, (_, i) => ({
             domain:"Domain Name",
            title: `Legal Task ${i + 1}`,
            subtitle: "Contract validation",
            deadline: "25th July, 2025",
            progress: "Not started",
            progressValue: 10,
            tag: "ISO 27002",
            image:
              "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60",
          })),
        },
        {
          name: "Education",
          tasks: Array.from({ length: 8 }, (_, i) => ({
             domain:"Domain Name",
            title: `Education Task ${i + 1}`,
            subtitle: "Policy awareness campaign",
            deadline: "26th July, 2025",
            progress: "Completed",
            progressValue: 100,
            tag: "ISO 27003",
            image:
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
          })),
        },
        {
          name: "E-commerce",
          tasks: Array.from({ length: 8 }, (_, i) => ({
             domain:"Domain Name",
            title: `E-commerce Task ${i + 1}`,
            subtitle: "Security testing",
            deadline: "28th July, 2025",
            progress: "In progress",
            progressValue: 50,
            tag: "ISO 27004",
            image:
              "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=800&q=60",
          })),
        },
      ],
    };
  },
  computed: {
    filteredIndustries() {
      return this.industries.filter((i) => i.name === this.activeTab);
    },
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

/* === Banner === */
.banner {
  margin-top: 30px;
  width: 100%;
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

/* === Tabs === */
.tab-buttons {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
}
.tab-btn {
  background: #fff;
  border: 1px solid #2d9cdb;
  color: #2d9cdb;
  border-radius: 8px;
  padding: 10px 120px;
  font-weight: 500;
  transition: all 0.3s ease;
  min-width: 180px;
  text-align: center;
}
.tab-btn:hover {
  background: #2d9cdb;
  color: #fff;
}
.tab-btn.active {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  color: #fff;
  box-shadow: 0 3px 8px rgba(45, 156, 219, 0.3);
}

/* === Industry === */
.industry-row {
  border-top: 2px solid #f2f2f2;
  margin-top: 2rem;
}
.industry-col {
  margin-bottom: 2rem;
}
.industry-title {
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

/* === Task Cards (4 per row like job cards) === */
.task-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}
.task-card:hover {
  transform: translateY(-4px);
}
.task-banner {
  position: relative;
  height: 120px;
  overflow: hidden;
}
.task-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.task-card-content {
  padding: 14px 16px 16px;
}
.task-title {
  font-size: 16px;
  font-weight: 600;
  color: #000;
}
.task-subtitle {
  font-size: 13px;
  color: #555;
  margin: 6px 0 10px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.tag {
  background: #eef2ff;
  color: #2f80ed;
  font-size: 12px;
  border-radius: 8px;
  padding: 3px 8px;
}

/* === Progress Bar === */
.progress-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.progress {
  width: 70%;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
}
.progress-bar {
  height: 6px;
  background: linear-gradient(90deg, #56ccf2, #2f80ed);
  border-radius: 3px;
}
.progress-text {
  font-size: 11px;
  color: #666;
  font-weight: 600;
}

/* === Footer === */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.deadline {
  font-size: 13px;
  color: #666;
  font-weight: 500;
}
</style>
