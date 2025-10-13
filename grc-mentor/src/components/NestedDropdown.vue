<template>
  <main class="mentorship-page">
    <div class="container-fluid">
      <div class="row g-4">
        <!-- Sidebar -->
        <div class="col-2 col-md-2">
          <Sidebarprofile />
        </div>

        <!-- Main Content -->
        <div class="col-10 col-md-10">
          <!-- Banner -->
          <div class="banner">
            <div class="banner-left">
              <h6 class="banner-title">Performance Report</h6>
              <p class="banner-sub">Detailed summary of your learning progress</p>
            </div>
          </div>

          <!-- Section -->
          <section>
            <div class="">
              <div class="card-body p-4 p-md-5">
                <div class="row g-4 align-items-center">
                  <!-- Progress Circle -->
                  <div class="col-md-5 text-center">
                    <div class="score-card p-4 rounded-4">
                      <div class="score-ring mx-auto mb-3">
                        <svg viewBox="0 0 120 120" class="d-block">
                          <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stop-color="#2d9cdb" />
                              <stop offset="50%" stop-color="#56ccf2" />
                              <stop offset="100%" stop-color="#2f80ed" />
                            </linearGradient>
                          </defs>

                          <circle cx="60" cy="60" r="52" class="track" />
                          <circle
                            cx="60"
                            cy="60"
                            r="52"
                            class="progress"
                            :style="circleStyle"
                          />
                          <text x="60" y="64" text-anchor="middle" class="score-text">
                            {{ progress }}%
                          </text>
                        </svg>
                      </div>
                      <div class="h6 mb-1">Overall Progress</div>
                      <div class="small text-muted">
                        You’ve completed {{ progress }}% of your learning journey
                      </div>
                    </div>
                  </div>

                  <!-- Summary -->
                  <div class="col-md-7">
                    <div class="report-info">
                      <h6 class="fw-semibold mb-3 section-title">
                        Here’s your learning summary based on performance and activities.
                      </h6>

                      <ul class="list-unstyled mb-4">
                        <li class="d-flex align-items-center mb-2">
                          <span class="dot me-2"></span>
                          Domain Name: <strong class="ms-1">{{ domainName }}</strong>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                          <span class="dot me-2"></span>
                          Task: <strong class="ms-1">{{ taskName }}</strong>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                          <span class="dot me-2"></span>
                          Sub-task: <strong class="ms-1">{{ subTask }}</strong>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                          <span class="dot me-2"></span>
                          Skill Developed: <strong class="ms-1">{{ skill }}</strong>
                        </li>
                      </ul>

                      <div class="alert alert-info border-0 rounded-3 shadow-sm">
                        <strong>📘 Feedback Summary:</strong>
                        <p class="mb-0 mt-1">{{ recommendation }}</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebarprofile from '@/components/Sidebarprofile.vue';

export default {
  name: "ReportView",
  components: { Sidebarprofile },
  data() {
    return {
      progress: 76,
      domainName: "Media",
      taskName: "Policy Implementation",
      subTask: "Access Control Review",
      skill: "Risk Analysis & Compliance",
      recommendation:
        "You’ve shown consistent effort throughout your modules. Continue focusing on accuracy and structure in your reports.",
      taskSummary: {
        title: "Create a Cyber Risk Assessment Policy",
        submittedOnTime: false,
        date: "October 5, 2025",
        quality: "Good",
        qualityExplanation:
          "You demonstrated strong conceptual understanding and structure. To improve, include more real-world compliance examples and evidence of implementation.",
        feedback: "Good understanding, but work can be more detailed.",
        comment:
          "Submitted slightly after the deadline. Try to manage your research time efficiently for future tasks.",
      },
    };
  },
  computed: {
    circleStyle() {
      const r = 52;
      const c = 2 * Math.PI * r;
      const dash = (this.progress / 100) * c;
      return { strokeDasharray: `${dash} ${c}` };
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

/* Banner */
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

/* Progress Circle */
.score-card {
  background: #ffffff;
  border: 1px solid #eef1f4;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
}
.score-ring {
  width: 180px;
  height: 180px;
}
svg {
  width: 100%;
  height: 100%;
}
.track {
  fill: none;
  stroke: #eef1f4;
  stroke-width: 10;
}
.progress {
  fill: none;
  stroke: url(#grad);
  stroke-width: 10;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 60px 60px;
  transition: stroke-dasharray 400ms ease;
}
.score-text {
  font-size: 28px;
  fill: #0d1b2a;
  font-weight: 700;
}

/* Dots */
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2f80ed;
  display: inline-block;
}

/* Alert */
.alert {
  font-size: 14px;
  background-color: #eaf6ff;
  color: #004085;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Task Summary Box */
.course-box {
  background: #ffffff;
  border: 1px solid #eef1f4;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
}
.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #0d1b2a;
}
.task-summary-content {
  background: #f8fbff;
  border-radius: 10px;
  padding: 15px 20px;
}
.badge {
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 20px;
}
.text-muted.small {
  color: #6c757d;
  font-size: 13px;
}
</style>
