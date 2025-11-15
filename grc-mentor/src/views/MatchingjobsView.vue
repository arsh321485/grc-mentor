<template>
  <main class="mentorship-page">
    <div class="container-fluid row g-0">
      <!-- Sidebar -->

      <div class="col-12 col-md-3 col-lg-2 sidebar-col">
         <Sidebar class="sidebar" />
      </div>

      <!-- Main -->
      <div class="col-12 col-md-9 col-lg-10">
        <!-- Banner -->
        <div class="banner mt-3 ms-5 mb-5">
          <div class="">
            <h6 class="banner-title">GRC Matching Jobs</h6>
            <p class="banner-sub">
              Explore the latest GRC and cybersecurity job opportunities
            </p>
          </div>
        </div>

        <!-- Filter Section -->
        <div class="filter-section ps-5 mb-4">
          <div class="d-flex align-items-center gap-3 position-relative">
            <h5 class="m-0">Filters:</h5>

            <!-- Pure Vue Dropdown -->
            <div class="custom-dropdown">
              <button
                class="btn btn-outline-primary dropdown-toggle"
                @click="toggleDropdown"
              >
                {{ selectedFilter }}
              </button>

              <transition name="fade">
                <ul
                  v-if="dropdownOpen"
                  class="custom-dropdown-menu shadow-sm animate__animated animate__fadeIn"
                >
                  <li>
                    <button class="dropdown-item" @click="applyFilter('Past Week')">
                      Past Week
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" @click="applyFilter('Past Month')">
                      Past Month
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" @click="applyFilter('Past 24 Hours')">
                      Past 24 Hours
                    </button>
                  </li>
                </ul>
              </transition>
            </div>
          </div>
        </div>

        <!-- Job Cards -->
        <section class="ps-5 pe-5">
          <div class="row g-4">
            <div
              class="col-12 col-sm-6 col-lg-3"
              v-for="(job, index) in filteredJobs"
              :key="index"
            >
              <div class="job-card" @click="openModal(job)">
                <div class="job-banner">
                  <span class="badge-status">Applications Open</span>
                  <img :src="job.image" class="banner-img" alt="banner" />
                </div>

                <div class="job-content">
                  <h6 class="job-title">{{ job.title }}</h6>
                  <p class="job-desc">{{ job.description }}</p>

                  <div class="tags">
                    <span v-for="(tag, i) in job.tags" :key="i" class="tag">{{ tag }}</span>
                  </div>

                  <div class="progress-container mt-2 mb-2">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        :style="{ width: job.progress + '%' }"
                      ></div>
                    </div>
                    <small class="days-left">{{ job.days }} DAYS LEFT</small>
                  </div>

                  <div class="footer">
                    <span class="salary"><SMALl>Salary:</SMALl>{{ job.salary }}</span>
                    <button class="btn btn-outline-primary btn-sm">Easy Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- No Jobs Found -->
          <div v-if="filteredJobs.length === 0" class="text-center mt-5">
            <h6>No jobs available for {{ selectedFilter }}.</h6>
          </div>
        </section>

        <!-- Right Slide Panel -->
        <div
          class="modal fade right-modal"
          id="jobModal"
          tabindex="-1"
          aria-labelledby="jobModalLabel"
          aria-hidden="true"
          ref="jobModal"
        >
          <div class="modal-dialog modal-dialog-slideout">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="jobModalLabel">{{ selectedJob.title }}</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p><strong>Company:</strong> {{ selectedJob.company }}</p>
                <p><strong>Location:</strong> {{ selectedJob.location }}</p>
                <hr />
                <p><strong>About Job:</strong><br />{{ selectedJob.longDesc }}</p>
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary w-100">Easy Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "GRCJobsView",
  components: { Sidebar },
  data() {
    return {
      selectedFilter: "Past Week",
      dropdownOpen: false,
      selectedJob: {},
      allJobs: [
        {
          title: "Cyber Risk Analyst",
          company: "SecureIT Labs",
          location: "Remote",
          description:
            "Analyze enterprise GRC frameworks and perform risk assessments.",
          longDesc:
            "Responsible for evaluating organizational risk exposure and ensuring compliance with ISO 27001 and SOC2 frameworks.",
          image:
            "https://images.unsplash.com/photo-1665686300783-447b174a23e9?auto=format&fit=crop&w=800&q=60",
          tags: ["GRC", "Risk", "ISO 27001"],
          salary: "₹8,50,000",
          days: 5,
          progress: 75,
          posted: "Past Week",
        },
        {
          title: "GRC Consultant",
          company: "RiskXpert",
          location: "Bangalore, India",
          description:
            "Implement and optimize GRC  across enterprise environments.",
          longDesc:
            "Work with global clients to deploy and  GRC frameworks, map controls, and automate compliance tracking.",
          image:
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60",
          tags: ["Governance", "Risk", "Automation"],
          salary: "₹14,00,000",
          days: 15,
          progress: 30,
          posted: "Past Week",
        },
        {
          title: "Information Security Officer",
          company: "CyberWave",
          location: "Mumbai, India",
          description:
            "Lead compliance monitoring for InfoSec programs.",
          longDesc:
            "Manage and monitor all information security operations. Ensure timely reporting of audit findings compliance improvement.",
          image:
            "https://images.unsplash.com/photo-1605902711622-cfb43c4437d3?auto=format&fit=crop&w=800&q=60",
          tags: ["InfoSec", "Governance", "Audit"],
          salary: "₹12,00,000",
          days: 9,
          progress: 60,
          posted: "Past Month",
        },
        {
          title: "SOC Compliance Engineer",
          company: "CloudDefend",
          location: "Pune, India",
          description:
            "Monitor and ensure cloud security compliance under SOC2 and GDPR.",
          longDesc:
            "Collaborate with DevOps and CloudOps teams to maintain SOC2 Type II compliance and perform periodic system checks.",
          image:
            "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=800&q=60",
          tags: ["SOC2", "GDPR", "Cloud Security"],
          salary: "₹10,50,000",
          days: 12,
          progress: 45,
          posted: "Past 24 Hours",
        },
        {
          title: "ISO 27001 Lead Auditor",
          company: "TrustSec",
          location: "Delhi, India",
          description: "Conduct ISO 27001 audits and ensure certification compliance.",
          longDesc:
            "Lead certification audits, generate compliance reports, and guide clients through closing nonconformities.",
          image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
          tags: ["ISO 27001", "Auditing", "Compliance"],
          salary: "₹11,20,000",
          days: 20,
          progress: 55,
          posted: "Past Month",
        },
        {
          title: "Vulnerability Analyst",
          company: "CyberFort",
          location: "Remote",
          description:
            "Identify vulnerabilities across enterprise assets.",
          longDesc:
            "Perform vulnerability scanning, threat modeling, and remediation recommendations for enterprise environments.",
          image:
            "https://images.unsplash.com/photo-1591696331117-5b95a74c14b6?auto=format&fit=crop&w=800&q=60",
          tags: ["Pentest", "VAPT", "Security"],
          salary: "₹9,00,000",
          days: 10,
          progress: 40,
          posted: "Past 24 Hours",
        },
      ],
    };
  },
  computed: {
    filteredJobs() {
      return this.allJobs.filter((job) => job.posted === this.selectedFilter);
    },
  },
  mounted() {
    // Close dropdown when clicking outside
    window.addEventListener("click", (e) => {
      const dropdown = this.$el.querySelector(".custom-dropdown");
      if (dropdown && !dropdown.contains(e.target as Node)) {
        this.dropdownOpen = false;
      }
    });
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    applyFilter(filter: string) {
      this.selectedFilter = filter;
      this.dropdownOpen = false;
    },
    openModal(job: any) {
      this.selectedJob = job;
      const modalEl = this.$refs.jobModal as HTMLElement;
      const modal = new (window as any).bootstrap.Modal(modalEl);
      modal.show();
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

/* .sidebar-col {
  padding-left: 0;
  padding-right: 0;
} */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}

/* --- Banner --- */

.banner {
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

/* --- Dropdown --- */
.custom-dropdown {
  position: relative;
  display: inline-block;
}
.custom-dropdown-menu {
  position: absolute;
  top: 110%;
  left: 0;
  background: #fff;
  border-radius: 8px;
  width: 180px;
  z-index: 100;
  list-style: none;
  padding: 6px 0;
}
.custom-dropdown-menu li {
  width: 100%;
}
.custom-dropdown-menu .dropdown-item {
  width: 100%;
  text-align: left;
  padding: 8px 16px;
  font-size: 14px;
  color: #333;
  background: transparent;
  border: none;
}
.custom-dropdown-menu .dropdown-item:hover {
  background-color: #f3f7ff;
  color: #007bff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* --- Job Cards --- */
.job-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}
.job-card:hover {
  transform: translateY(-4px);
}
.job-banner {
  position: relative;
  height: 120px;
  overflow: hidden;
}
.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.badge-status {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #4a90e2;
  color: #fff;
  font-size: 12px;
  border-radius: 4px;
  padding: 4px 8px;
}
.job-content {
  padding: 14px 16px 16px;
}
.job-title {
  font-size: 16px;
  font-weight: 600;
  color: #000;
}
.job-desc {
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
.progress-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.progress {
  width: 60%;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
}
.progress-bar {
  height: 6px;
  background: linear-gradient(90deg, #56ccf2, #2f80ed);
  border-radius: 3px;
}
.days-left {
  font-size: 11px;
  color: #888;
  font-weight: 600;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.salary {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

/* --- Modal --- */
.modal-dialog-slideout {
  position: fixed;
  top: 0;
  right: 0;
  margin: 0;
  height: 100%;
  max-width: 400px;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
}
.modal.fade.right-modal.show .modal-dialog-slideout {
  transform: translateX(0);
}
.modal-content {
  height: 100%;
  border-radius: 0;
  border-left: 2px solid #e0e0e0;
}

/* ==========================================================
   🔥 GLOBAL ANTI-SCROLL FIX
   (Prevents layout overflow for all screens)
========================================================== */
@media (min-width: 600px) {
  body, html {
    overflow-x: hidden !important;
  }

  .container-fluid,
  .row,
  .mentorship-page {
    overflow-x: hidden !important;
  }
}



/* ==========================================================
   📌 600–767px (Small Tablets)
========================================================== */
@media (min-width: 600px) and (max-width: 767px) {

  .sidebar-col {
    flex: 0 0 26% !important;
    max-width: 26% !important;
  }

  .col-12.col-md-9.col-lg-10 {
    flex: 0 0 74% !important;
    max-width: 74% !important;
  }

  /* Banner */
  .banner {
    width: 92% !important;
    margin-left: 15px !important;
    padding: 16px 18px !important;
  }

  /* Filter section */
  .filter-section {
    padding-left: 18px !important;
  }

  /* Cards: 2 per row */
  .col-12.col-sm-6.col-lg-3 {
    flex: 0 0 50% !important;
    max-width: 50% !important;
  }

  .job-card {
    width: 90% !important;
    margin: auto !important;
  }
}



/* ==========================================================
   📌 768–1024px (Tablets)
========================================================== */
@media (min-width: 768px) and (max-width: 1024px) {

  .sidebar-col {
    flex: 0 0 25% !important;
    max-width: 25% !important;
  }

  .col-12.col-md-9.col-lg-10 {
    flex: 0 0 75% !important;
    max-width: 75% !important;
  }

  .banner {
    width: 89% !important;
    margin-left: 35px !important;
  }

  .filter-section {
    padding-left: 30px !important;
  }

  /* 2 cards per row */
  .col-12.col-sm-6.col-lg-3 {
    flex: 0 0 50% !important;
    max-width: 50% !important;
  }

  .job-card {
    width: 88% !important;
    margin: auto !important;
  }
}



/* ==========================================================
   📌 1025–1280px (Small Laptops) — YOUR MAIN PROBLEM AREA
========================================================== */
@media (min-width: 1025px) and (max-width: 1280px) {

  .sidebar-col {
    flex: 0 0 22% !important;
    max-width: 22% !important;
  }

  .col-12.col-md-9.col-lg-10 {
    flex: 0 0 78% !important;
    max-width: 78% !important;
  }

  .banner {
    width: 88% !important;
    margin-left: 40px !important;
  }

  .filter-section {
    padding-left: 40px !important;
  }

  /* Prevent job grid overflow */
  section.ps-5,
  .filter-section.ps-5 {
    padding-left: 0 !important;
  }

  .col-12.col-sm-6.col-lg-3 {
    flex: 0 0 50% !important;
    max-width: 50% !important;
  }

  .job-card {
    width: 92% !important;
    margin: auto !important;
  }
}



/* ==========================================================
   📌 1281–1440px (Laptops)
========================================================== */
@media (min-width: 1281px) and (max-width: 1440px) {

  .banner {
    width: 92% !important;
    margin-left: 50px !important;
  }

  section.ps-5,
  .filter-section.ps-5 {
    padding-left: 20px !important;
  }

  .job-card {
    width: 94% !important;
  }
}



/* ==========================================================
   📌 1441–1920px (Large Monitors)
========================================================== */
@media (min-width: 1441px) and (max-width: 1920px) {

  .banner {
    width: 94% !important;
  }

  .job-card {
    width: 92% !important;
  }
}



/* ==========================================================
   📌 1921px+ (Ultra-wide / 4K)
========================================================== */
@media (min-width: 1921px) {

  .banner {
    width: 96% !important;
  }

  .job-card {
    width: 90% !important;
  }
}


</style>
