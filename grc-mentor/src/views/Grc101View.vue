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

                <!-- Task Cards -->
                <div class="row">
                  <div
                    v-for="(task, idx) in industry.tasks"
                    :key="idx"
                    class="col-12 col-md-6 col-lg-4 mb-3"
                  >
                    <TaskCard :task="task" />
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
import TaskCard from "@/components/TaskCard.vue";

export default {
  name: "Grc101View",
  components: { Sidebar, TaskCard },
  data() {
    return {
      activeTab: "Media", // default tab
      industries: [
        {
          name: "Media",
          tasks: Array.from({ length: 20 }, (_, i) => ({
            projectCode: "Domain",
            title: `Media Task ${i + 1}`,
            subtitle: "Name of Subtask",
            deadline: "23rd July, 2025",
            progress: "In progress",
            tag: "ISO 27001",
          })),
        },
        {
          name: "Legal",
          tasks: Array.from({ length: 20 }, (_, i) => ({
            projectCode: "Domain",
            title: `Legal Task ${i + 1}`,
            subtitle: "Name of Subtask",
            deadline: "23rd July, 2025",
            progress: "Not started",
            tag: "ISO 27002",
          })),
        },
        {
          name: "Education",
          tasks: Array.from({ length: 20 }, (_, i) => ({
            projectCode: "Domain",
            title: `Education Task ${i + 1}`,
            subtitle: "Name of Subtask",
            deadline: "23rd July, 2025",
            progress: "Completed",
            tag: "ISO 27003",
          })),
        },
        {
          name: "E-commerce",
          tasks: Array.from({ length: 20 }, (_, i) => ({
            projectCode: "Domain",
            title: `E-commerce Task ${i + 1}`,
            subtitle: "Name of Subtask",
            deadline: "23rd July, 2025",
            progress: "In progress",
            tag: "ISO 27004",
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

/* 🟦 Tab Buttons */
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
  border-radius: 20px;
  padding: 8px 18px;
  font-weight: 500;
  transition: all 0.3s ease;
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

/* 🧩 Industry Layout */
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
</style>
