<template>
  <main class="mentorship-page">
    <div class="container-fluid">
      <div class="row g-0">
        <!-- Sidebar -->
         <div class="col-2 col-md-2 sidebar-col">
         <Sidebar class="sidebar" />
      </div>

        <!-- Main Content -->
        <div class="col-10 col-md-10">
          <!-- Banner -->
          <div class="banner ms-5">
            <div class="">
              <h6 class="banner-title">Report</h6>
              <p class="banner-sub">Detailed summary of your learning progress</p>
            </div>
          </div>

          <!-- Full Height Section -->
          <section class="mt-3 ps-5">
            <div class="row">
              <!-- Left Column (Summary) -->
              <div class="col-md-5 col-lg-5  ">
                <div class="p-4 rounded-4 bg-white ">
                  <h6 class="fw-bold ">
                    Here’s your learning summary based on performance and activities.
                  </h6>

                  <ul class="list-group text-size  mt-lg-3 ">
                    <li class="d-flex align-items-center  ">
                      <span class=" dot me-2"></span>
                      Domain : <span class="text-size">{{ currentModule.domainName }}</span>
                    </li>
                    <li class="d-flex align-items-center pt-1">
                      <span class="dot me-2 "></span>
                      Industry :
                      <select
                        v-model="selectedModule"
                        class="ms-2 dropdown-list">
                        <option v-for="mod in modules" :key="mod" :value="mod">{{ mod }}</option>
                      </select>
                    </li>
                    <li class="d-flex align-items-center pt-1 ">
                      <span class="dot me-2"></span>
                      Task: <span class=" ms-1 text-size">{{ currentModule.taskName }}</span>
                    </li>
                    <li class="d-flex align-items-center pt-1">
                      <span class="dot me-2"></span>
                      Sub-task: <h6 class="ms-1 text-size">{{ currentModule.subTask }}</h6>
                    </li>
                    <li class="d-flex align-items-center pt-1">
                      <span class="dot me-2"></span>
                      Skill Developed: <h6 class="ms-1 text-size">{{ currentModule.skill }}</h6>
                    </li>
                  </ul>

                  <!-- Progress Circle -->
                  <div class="col-md-5 text-center mx-auto pt-3 pb-3">
                    <div class="rounded-4">
                      <div class="score-ring mb-3">
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
                          <text x="60" y="64" text-anchor="middle" class="score-text ">
                            {{ currentModule.progress }}%
                          </text>
                        </svg>
                      </div>
                      <div class="h6 mb-1 text-size ">
                        {{ selectedModule === 'Overall' ? 'Overall Progress' : 'Module Progress' }}
                      </div>
                      <div class="text-size text-muted">
                        You’ve completed {{ currentModule.progress }}% of your learning journey
                      </div>
                    </div>
                  </div>

                  <div class="alert alert-info border-0 rounded-3 shadow-sm mt-auto">
                    <h6>📘 Feedback Summary:</h6>
                    <p class="mb-0  text-size">{{ currentModule.recommendation }}</p>
                  </div>
                </div>
              </div>

              <!-- Right Column (Tabs + Table) -->
              <div class="col-md-7 col-lg-7 ">
                <div class="tab-content p-3 rounded-4 bg-white ">
                  <!-- Material Tabs -->
                  <div class="tabs ">
                    <button
                      v-for="(tab, index) in tabs"
                      :key="index"
                      :class="['tab-btn ', { active: activeTab === tab }]"
                      @click="activeTab = tab"
                    >
                      {{ tab }}
                    </button>
                  </div>

                  <!-- Tab Content -->
                  <div class="tab-content mt-4">
                    <div v-if="activeTab">
                      <h6 class="mt-5  ms-3 fw-bold">Domain: Access Control</h6>
                      <div class="tab-content p-3 rounded-4 bg-white h-100">
                        <table class="table table-bordered align-middle ">
                          <thead class="table-light ">
                            <tr>
                              <th class="text-size">Category</th>
                              <th class="text-size">Control Number</th>
                              <th class="text-size">Control Name</th>
                              <th class="text-size">Purpose</th>
                              <th class="text-size">Task</th>
                              <th class="text-size">Score</th> <!-- New Column Added -->
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in tableData[activeTab]" :key="index">
                              <td class="text-size-table">{{ item.category }}</td>
                              <td class="text-size-table">{{ item.controlNumber }}</td>
                              <td class="text-size-table">{{ item.controlName }}</td>
                              <td class="text-size-table">{{ item.purpose }}</td>
                              <td class="text-size-table">{{ item.task }}</td>
                               <td  class="text-size-table"><strong>{{ item.score }}/10</strong></td>
                            </tr>
                          </tbody>
                        </table>
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
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: "ReportView",
  components: { Sidebar },
  data() {
    return {
      selectedModule: "Overall",
      modules: ["Overall", "Legal", "Education", "Media", "E-commerce"],

      moduleData: {
        Legal: {
          progress: 82,
          domainName: "GRC101",
          taskName: "Compliance Review",
          subTask: "Policy Drafting",
          skill: "Legal Analysis",
          recommendation: "Excellent understanding of compliance frameworks.",
        },
        Education: {
          progress: 69,
          domainName: "GRC101",
          taskName: "Curriculum Design",
          subTask: "Module Mapping",
          skill: "Instructional Planning",
          recommendation: "Good conceptual clarity; improve content flow.",
        },
        Media: {
          progress: 76,
          domainName: "GRC101",
          taskName: "Policy Implementation",
          subTask: "Access Control Review",
          skill: "Risk Analysis & Compliance",
          recommendation:
            "You’ve shown consistent effort throughout your modules. Continue focusing on accuracy and structure in your reports.",
        },
        "E-commerce": {
          progress: 88,
          domainName: "GRC101",
          taskName: "Transaction Security",
          subTask: "Payment Gateway Setup",
          skill: "Cybersecurity Implementation",
          recommendation:
            "h6 understanding of secure payment systems; keep refining encryption techniques.",
        },
      },

      activeTab: "ISO 27001",
      tabs: ["ISO 27001", "ISO 27002", "ISO 27003", "ISO 27004"],

      tableData: {
        "ISO 27001": [
          {
            category: "Organizational",
            controlNumber: "A.5.1",
            controlName: "Policies for Information Security",
            purpose:
              "Ensure continuing suitability, adequacy, and effectiveness of management direction for information security compliance.",
            task: "Develop a comprehensive information security policy framework.",
             score: 8,
          },
          {
            category: "Organizational",
            controlNumber: "A.6.1",
            controlName: "Information Security Roles and Responsibilities",
            purpose:
              "Define roles and responsibilities for effective governance of information security.",
            task: "Establish accountability and assign security-related responsibilities.",
             score: 9,
          },
        ],


        "ISO 27002": [
          {
            category: "Technical",
            controlNumber: "A.8.1",
            controlName: "Asset Management",
            purpose:
              "Ensure assets are properly identified and managed throughout their lifecycle.",
            task: "Implement asset inventory with defined ownership and classification.",
              score: 8,
          },
          {
            category: "Technical",
            controlNumber: "A.9.2",
            controlName: "Access Control Management",
            purpose:
              "Provide authorized user access and prevent unauthorized access to systems.",
            task: "Design access control policy and review user privileges regularly.",
            score: 9,
          },
        ],
        "ISO 27003": [
          {
            category: "Planning",
            controlNumber: "A.10.1",
            controlName: "Cryptographic Controls",
            purpose:
              "Ensure proper and effective use of cryptography to protect data confidentiality and integrity.",
            task: "Develop and implement cryptographic key management procedures.",
              score: 70,
          },
          {
            category: "Planning",
            controlNumber: "A.11.1",
            controlName: "Physical Security Perimeter",
            purpose:
              "Prevent unauthorized physical access to sensitive areas and information systems.",
            task: "Establish security zones and controlled access measures.",
              score: 5,
          },
        ],
        "ISO 27004": [
          {
            category: "Monitoring",
            controlNumber: "A.12.1",
            controlName: "Operational Procedures and Responsibilities",
            purpose:
              "Ensure proper management and monitoring of information systems operations.",
            task: "Develop operational security processes and implement change management.",
              score: 6,
          },
          {
            category: "Monitoring",
            controlNumber: "A.13.2",
            controlName: "Information Transfer Policies",
            purpose:
              "Protect data in transit and ensure secure exchange between organizations.",
            task: "Implement encryption and secure transfer protocols for external data exchange.",
              score: 8,
          },
        ],
      },
    };
  },
  computed: {
    currentModule() {
      if (this.selectedModule === "Overall") {
        const values = Object.values(this.moduleData);
        const avgProgress =
          values.reduce((acc, m) => acc + m.progress, 0) / values.length;
        return {
          progress: Math.round(avgProgress),
          domainName: "GRC101",
          taskName: "All Modules Combined",
          subTask: "Comprehensive Review",
          skill: "Interdisciplinary Learning",
          recommendation:
            "Overall consistent performance across all modules. Great job!",
        };
      }
      return this.moduleData[this.selectedModule];
    },

    circleStyle() {
      const r = 52;
      const c = 2 * Math.PI * r;
      const dash = (this.currentModule.progress / 100) * c;
      return { strokeDasharray: `${dash} ${c}` };
    },
  },
};
</script>

<style scoped>
.full-box {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.full-section {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 130px);
}
.report-card{
  background-color:  #ffffff;
  height: 420px;
}
.dropdown-list{
  border-radius: 5px;
  border:1px solid gainsboro;
  width: auto;
 display: inline-block;
 font-size: small;
  padding: 4px 4px;
}
.text-size{
font-size: 14px;
}
.text-size-table{
font-size: 13px;
}

/* Progress Circle */
.score-card {
  background: #ffffff;
  border: 1px solid #eef1f4;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
}
.score-ring {
  width: 160px;
  height: 120px;
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
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}
.banner-sub {
  font-size: 13px;
  opacity: 0.9;
  margin: 2px 0 0 0;
}


.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2f80ed;
  display: inline-block;
}
.alert {
  font-size: 14px;
  background-color: #eaf6ff;
  color: #004085;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Tabs */

.tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
  gap: 20px;
  flex-wrap: wrap;
}
.tab-btn {
  background: transparent;
  border: none;
  font-weight: 500;
  font-size: 15px;
  color: #6c757d;
  padding-bottom: 10px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}
.tab-btn.active {
  color: #2f80ed;
}
.tab-btn.active::after {

  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #2f80ed;
  border-radius: 2px;
}
.tab-btn:hover {
  color: #2f80ed;
}


.table {
  font-size: 15px;
  background: white;
  border-radius: 10px;
  overflow: hidden;

}
.table th {
  background: #f3f7fc;
  color: #333;
  font-weight: 600;
  text-align: left;
  padding: 14px 10px;
}
.table td {
  color: #444;
  vertical-align: middle;
  padding: 12px 10px;
  line-height: 1.5;
}
.table-bordered th,
.table-bordered td {
  border: 1px solid #e3e6ec;
}

/* Responsive */
@media (max-width: 992px) {
  /* .full-section {
    height: auto;
  } */
  .table {
    font-size: 13px;
  }

}
/* 🌟 TABLET FIX (768px – 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {

  /* --- SIDEBAR FIX --- */
  .sidebar-col {
    flex: 0 0 26% !important;
    max-width: 26% !important;
  }

  .col-10.col-md-10 {
    flex: 0 0 74% !important;
    max-width: 74% !important;
  }

  /* --- BANNER FIX --- */
  .banner {
    width: 90% !important;
    margin-left: 20px !important;
    padding: 14px 20px !important;
  }

  .banner-title {
    font-size: 16px !important;
  }

  .banner-sub {
    font-size: 12px !important;
  }

  /* --- SECTION SPACING --- */
  section.ps-5 {
    padding-left: 20px !important;
  }

  /* --- LEFT SUMMARY BOX --- */
  .col-md-5,
  .col-lg-5 {
    padding-right: 10px !important;
    padding-left: 10px !important;
  }

  .p-4 {
    padding: 18px !important;
  }

  .text-size {
    font-size: 13px !important;
  }

  .text-size-table {
    font-size: 12px !important;
  }

  /* Progress circle resizing */
  .score-ring {
    width: 120px !important;
    height: 120px !important;
  }

  .score-text {
    font-size: 22px !important;
  }

  /* --- RIGHT TABLE / TAB SECTION --- */
  .col-md-7,
  .col-lg-7 {
    padding-right: 10px !important;
    padding-left: 10px !important;
  }

  .tab-btn {
    font-size: 14px !important;
  }

  /* Fit table inside tablet width */
  .table {
    font-size: 12px !important;
    overflow-x: auto !important;
    display: block !important;
  }

  th,
  td {
    padding: 10px 6px !important;
    white-space: nowrap !important;
  }

  /* Parent container scroll */
  .tab-content {
    overflow-x: auto !important;
  }

  /* Spacing for top text */
  h6.mt-5.ms-3.fw-bold {
    margin-top: 20px !important;
    margin-left: 0 !important;
    font-size: 15px !important;
  }
}

</style>
