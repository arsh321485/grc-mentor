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
        <div class="banner mb-5">
          <div class="banner-left">
            <h6 class="banner-title">GRC 101</h6>
            <p class="banner-sub">
              You will be working with Media, Legal, Education and E-commerce industries.
            </p>
          </div>
        </div>

        <!-- Industry Columns -->
        <section>
          <div class="container-fluid">
            <div class="row industry-row">
              <div
                v-for="(industry, index) in industries"
                :key="index"
                class="col-12 col-md-6 col-lg-3 industry-col"
                :class="{ 'with-divider': index !== industries.length - 1 }"
              >
                <h6 class="fw-semibold mb-3 industry-title">
                  {{ industry.name }}
                  <span class="text-muted small">{{ industry.tasks.length }} tasks</span>
                </h6>

                <!-- TaskCard Component -->
                <TaskCard
                  v-for="(task, idx) in industry.tasks"
                  :key="idx"
                  :task="task"
                />
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
      industries: [
        {
          name: "Media",
          tasks: [
            {
              projectCode: "Domain",
              title: "Name of Task ",
              subtitle: "Name of Subtask",
              deadline: "23rd July, 2025",
              progress: "Completed",
              tag: "ISO 27001",
            },
            {
              projectCode: "Domain",
              title: "Name of Task ",
              subtitle: "Name of Subtask",
              deadline: "23rd July, 2025",
              progress: "Not started",
              tag: "ISO 27002",
            },
          ],
        },
        {
          name: "Legal",
          tasks: [
            {
              projectCode: "Domain",
              title: "Name of Task ",
              subtitle: "Name of Subtask",
              deadline: "23rd July, 2025",
              progress: "In progress",
              tag: "ISO 27003",
            },
          ],
        },
        {
          name: "Education",
          tasks: [
            {
              projectCode: "Domain",
              title: "Name of Task ",
              subtitle: "Name of Subtask",
              deadline: "23rd July, 2025",
              progress: "Not started",
              tag: "ISO 27004",
            },
          ],
        },
        {
          name: "E-commerce",
          tasks: [
            {
              projectCode: "Domain",
              title: "Name of Task ",
              subtitle: "Name of Subtask",
              deadline: "23rd July, 2025",
              progress: "Not started",
              tag: "ISO 27005",
            },
          ],
        },
      ],

        projects: [
        { title: "Project 1", details: "Details of Project 1 go here." },
        { title: "Project 2", details: "Details of Project 2 go here." },
        { title: "Project 3", details: "Details of Project 3 go here." },
        { title: "Project 4", details: "Details of Project 4 go here." },
        { title: "Project 5", details: "Details of Project 5 go here." },
      ],
      activeIndustry: null,
      showPolicyModal: false,
      agree: false,
    };
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
  margin-left: 16.5%; /* push main content after fixed sidebar */
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
.industry-row {
  border-top: 2px solid #f2f2f2;
  margin-top: 3rem; /* adjust to align below banner */
}
.industry-col.with-divider {
  border-right: 2px solid #f2f2f2;
}
.industry-title {
  font-size: 1rem;
  margin-bottom: 1rem;
}
</style>
