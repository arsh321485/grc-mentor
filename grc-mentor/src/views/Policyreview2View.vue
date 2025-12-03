<template>
  <main class="mentorship-page">
    <div class="container-fluid row g-0">
      <!-- Sidebar -->
      <div class="col-2 col-md-2 sidebar-col">
        <Sidebar class="sidebar" />
      </div>

      <!-- Main -->
      <div class="col-10 col-md-10">
        <!-- Banner -->
        <div class="banner mb-4 ms-5">
          <div class="banner-left">
            <h6 class="banner-title"> Industry: Media</h6>
            <p class="banner-sub">Policy Review</p>
          </div>
          <div class="ms-auto">
            <button class="btn about-btn" @click="showModal = true">
              <i class="bi bi-info-circle me-2"></i> About the Company
            </button>
          </div>
        </div>

        <!-- Star Media Modal -->
        <div v-if="showModal" class="right-modal-overlay">
          <div class="right-modal">
            <div class="modal-header d-flex justify-content-between align-items-center">
              <h5 class="fw-bold mb-0">Star Media</h5>
              <button class="btn-close" @click="showModal = false">✕</button>
            </div>

            <div class="modal-body">
              <div class="row">
                <div v-for="(item, i) in companyDetails" :key="i" class="col-12 col-md-6 col-lg-4 mb-3">
                  <p class="detail-label fw-semibold text-muted small mb-1">{{ item.label }}</p>
                  <p class="detail-value text-dark mb-0">{{ item.value }}</p>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button class="btn btn-secondary" @click="showModal = false">Close</button>
            </div>
          </div>
        </div>

        <!-- Projects Section -->
        <section class="glass-card mb-4 mt-5 ms-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h6 class="section-title mb-0">Projects</h6>
          </div>
          <p class="subtitle">You'll be working on these project/tasks:</p>

          <div class="accordion custom-accordion" id="projectAccordion">
            <div class="accordion-item" v-for="(project, index) in projects" :key="index">
              <!-- Header -->
              <h2 class="accordion-header d-flex align-items-center" :id="'heading' + index">
                <button class="accordion-button collapsed flex-grow-1 d-flex align-items-center" type="button"
                  data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" :aria-controls="'collapse' + index"
                  @click="toggleAccordion(index)">
                  <i class="fas fa-folder me-2"> </i>
                  <span class="project-title flex-grow-1">{{ project.title }} <span v-for="(tag, tIndex) in project.tags" :key="tIndex" class="badge-tag  ms-lg-3"> {{tag }}</span></span>

                       <span class="ms-auto align-items-end badge-tag ">{{ project.status }} </span>
                </button>


              </h2>

              <!-- Body -->
              <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index"
                data-bs-parent="#projectAccordion">
                <div class="accordion-body d-flex flex-column flex-md-row align-items-start gap-3">
                  <!-- Left column -->
                  <div class="card-details flex-grow-1">
                    <p class="small-text text-muted mb-1">{{ project.domain }}</p>
                    <h5 class="fw-bold mb-1">{{ project.title }}</h5>

                    <p class="text-muted small mb-2">{{ project.subtitle }}</p>
                    <div class="text-muted small">{{ project.date }}</div>


                    <div class="progress-wrapper mb-1">
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" :style="{ width: project.progress + '%' }"
                          :aria-valuenow="project.progress" aria-valuemin="0" aria-valuemax="100"></div>

                      </div>
                    </div>
                    <div class="status small-text text-muted">{{ project.status }} {{ project.progress }}%</div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur dolorum
                          sapiente itaque iure accusantium mollitia et facilis vel inventore quam, eveniet neque amet
                          vitae sit a alias perspiciatis quil Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Laudantium nisi mollitia aliquid facilis expedita odio quae, molestias accusantium dolorum
                          ipsa, laborum animi harum, corrupti corporis ab ea non maiores ullam!.</p>

                        <!-- button column (positioned relative for dropdown) -->
                        <div class="">

                          <button class="btn howto-btn" @click.stop="toggleDropdown(index)"
                            :aria-expanded="openDropdown === index ? 'true' : 'false'">
                            How to ?
                          </button>

                          <!-- ROOT dropdown anchored under the button (slightly left-shifted to match screenshot) -->
                          <ul v-show="openDropdown === index" class="dropdown-menu root-dropdown show header-dropdown">
                            <li>
                              <a href="#" class="dropdown-item bg-colors"><i class="bi bi-file-earmark-ruled"></i>
                                Method »</a>
                            </li>
                            <li class="fs-6"><a class="dropdown-item" href="#">Design and Development</a></li>

                            <li class="dropdown-submenu">
                              <a class="dropdown-item" href="#"><i class="bi bi-tools"></i> Tools »</a>
                              <ul class="dropdown-menu">
                                <li class="fs-6">
                                  <a class="dropdown-item" href="#">
                                    Develop and create <br />
                                    security tools, processes,<br />
                                    and documentation
                                  </a>
                                </li>

                                <li class="dropdown-submenu">
                                  <a href="#" class="dropdown-item"><i class="bi bi-check2-square"></i> Action »</a>
                                  <ul class="dropdown-menu">
                                    <li>
                                      <a href="#" class="dropdown-item"
                                        @click.prevent="openDoc('https://docs.google.com/document/d/YOUR_DOC_ID/pub?embedded=true')">
                                        Lets Go <i class="bi bi-box-arrow-up-right"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </li>

                              </ul>
                            </li>
                          </ul>
                        </div>







                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Google Docs Side Panel -->
        <div v-if="selectedDoc" class="doc-panel" :class="{ fullscreen: isFullscreen }">
          <div class="doc-header">
            <button class="doc-btn" @click="toggleFullscreen" title="Toggle Fullscreen">
              <i class="bi" :class="isFullscreen ? 'bi-fullscreen-exit' : 'bi-arrows-fullscreen'"></i>
            </button>
            <button class="doc-btn" @click="selectedDoc = null" title="Close">
              <i class="bi bi-x-circle-fill"></i>
            </button>
          </div>

          <iframe :src="selectedDoc" width="100%" height="100%" style="border: none; flex: 1"></iframe>
        </div>
        <!-- End Google Docs Side Panel -->
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "IndustryModalPage",
  components: { Sidebar },
  data() {
    return {
      showModal: false,
      openDropdown: null as number | null,
      openSubmenu: null as string | null,
      selectedDoc: null as string | null,
      isFullscreen: false,
      activeAccordion: null as number | null,
      companyDetails: [
        { label: "About the company", value: "ⓘ" },
        { label: "Industry", value: "Sustainable Products E-commerce" },
        { label: "Annual revenue", value: "$45 million" },
        { label: "Geographic presence", value: "United States and Canada" },
        { label: "Name of the project", value: "ISO 27001" },
        { label: "Description", value: "ISO 27001 is a project..." },
        { label: "Technology stack", value: "Modern cloud infrastructure" },
        { label: "Business model", value: "Multi-vendor marketplace" },
        { label: "Primary focus", value: "Sustainability" },
        { label: "Mandatory laws", value: "Security Investment" },
      ],
      projects: [
        {
          domain: "Domain Name",
          title: "Media Task 1",
          subtitle: "Name of the Subtask",
          tags: ["ISO 27001", "Policy", "Security"],
          progress: 45,
          status: "In progress",
          date: "23rd July, 2025",
          note: "Draft the first policy section and get peer review.",
        },
        {
          domain: "Domain Name",
          title: "Project 2",
          subtitle: "Subtask example",
          tags: ["Tag A", "Tag B"],
          progress: 20,
          status: "Not started",
          date: "1st Aug, 2025",
          note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis pariatur, dolorem ducimus magnam...",
        },
        {
          domain: "Domain Name",
          title: "Project 3",
          subtitle: "Another task",
          tags: ["Tag X"],
          progress: 80,
          status: "Almost done",
          date: "10th Aug, 2025",
          note: "Finalize remaining checklist items.",
        },
      ],
    };
  },

  methods: {
    toggleAccordion(index: number) {
      this.activeAccordion = this.activeAccordion === index ? null : index;
      // close dropdown when changing accordion
      this.openDropdown = null;
      this.openSubmenu = null;
    },
    toggleDropdown(index: number) {
      this.openDropdown = this.openDropdown === index ? null : index;
      this.openSubmenu = null;
    },
    toggleSubmenu(name: string) {
      this.openSubmenu = this.openSubmenu === name ? null : name;
    },
    openDoc(link: string) {
      this.selectedDoc = link;
      this.openDropdown = null;
      this.openSubmenu = null;
    },
    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen;
    },
  },
};
</script>

<style scoped>
/* original styles retained where important; updated dropdown cascade & spacing */

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}

/* Hide any leftover "view" button selectors (non-destructive) */
.view-btn,
.view-button,
.btn-view {
  display: none !important;
}

/* Gradient / accent class */
.bg-colors {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  color: #f0eded;
  font-weight: 700;
  border-radius: 2px;
}

/* About Company Button */
.about-btn {
  background: #ffffff;
  color: #1d3557;
  border-radius: 10px;
  font-weight: 600;
  padding: 8px 20px;
  font-size: 14px;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
}

.about-btn:hover {
  background: #f1f1f1;
  color: #0d47a1;
  transform: scale(1.05);
}

.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  padding: 30px;
  font-family: "Inter", sans-serif;
}

/* Glass Cards */
.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  padding: 19px;
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

.section-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #222;
}

.subtitle {
  font-size: 13px;
  color: #666;
  margin-bottom: 14px;
}

.custom-accordion .accordion-item {
  border: none;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.custom-accordion .accordion-button {
  background: #f9f9f9;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 16px;
}

.custom-accordion .accordion-button:not(.collapsed) {
  background: #eaf5ff;
  color: #2d7dd2;
  font-weight: 600;
}

/* Keep project title spacing neat */
.project-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.accordion-body {
  padding: 16px !important;
}

/* Tag style */
.badge-tag {
  display: inline-block;
  background: #eef6ff;
  color: #2b6db3;
  padding: 6px 10px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 12px;
}

/* Progress styles */
.progress {
  height: 8px;
  background: #e6eef6;
  border-radius: 8px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  box-shadow: none;
}

/* How to button (pill) */
.howto-btn,
.btn.howto-btn {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  border: none;
  border-radius: 12px;
  padding: 6px 12px;
  font-weight: 700;
  font-size: 13px;
  color: #fff;
  white-space: nowrap;
  box-shadow: 0 6px 18px rgba(45, 156, 219, 0.15);
}

/* ---------- NEW: layout for progress/button/note & dropdown cascade ---------- */

.progress-grid {
  display: grid;
  grid-template-columns: auto auto;
  /* column 1 = bar, column 2 = button */
  grid-template-rows: auto auto;
  /* row 1 = bar+button, row 2 = note */
  gap: 8px 12px;
  align-items: center;
}

/* SHORT PROGRESS BAR (requested 180px) */
.progress-wrapper {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  width: 180px;
  min-width: 120px;
  max-width: 320px;
}

/* The button's column so dropdown positions relative to it */
.btn-col {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  position: relative;
  /* ensure dropdown is positioned relative to this */
}

/* ROOT dropdown anchored to the button container (slightly left-shifted to match screenshot) */
.btn-col>.root-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: -10px;
  /* slight left shift — matches the screenshot placement */
  transform: none;
  min-width: 220px;
  z-index: 2000;
  /* high z-index so it floats above other elements */
}

/* nested submenu: open to the right of parent menu (cascade) */
.dropdown-submenu>.dropdown-menu {
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 6px;
  min-width: 220px;
  display: none;
  /* shown on hover (below) */
  z-index: 2100;
}

/* deeper nested submenu */
.dropdown-submenu .dropdown-submenu>.dropdown-menu {
  left: 100%;
  top: 0;
  margin-left: 6px;
  z-index: 2200;
}

/* show submenu on hover */
.dropdown-submenu:hover>.dropdown-menu {
  display: block;
}

/* NOTE: placed under the progress bar column and right-aligned in that column */
.progress-note {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin: 18px 0 0 0;
  /* requested gap */
  text-align: right;
  /* starts from the right edge of the progress bar column */
  color: #6c757d;
  font-size: 0.95rem;
  line-height: 1.4;
}

/* dropdown base look */
.header-dropdown {
  padding: 8px 0;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

/* dropdown menu base */
.dropdown-menu {
  background: white;
  border: 1px solid #ddd;
  min-width: 200px;
  border-radius: 6px;
  padding: 6px 0;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

/* Submenu caret spacing tweak */
.dropdown-submenu>a::after {
  content: "›";
  float: right;
  font-weight: 700;
}

/* ensure nested menus remain accessible when hovering */
.dropdown-submenu {
  position: relative;
}

/* Doc panel */
.doc-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  display: flex;
  flex-direction: column;
}

.doc-panel.fullscreen {
  width: 100%;
}

.doc-header {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  background: #f9fafb;
}

.doc-btn {
  background: transparent;
  border: none;
  font-size: 20px;
  color: #0096d6;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.doc-btn:hover {
  transform: scale(1.2);
  color: #e63946;
}

/* Responsive tweaks (tablet) */
@media (min-width: 768px) and (max-width: 1024px) {
  .sidebar-col {
    flex: 0 0 25% !important;
    max-width: 25% !important;
  }

  .col-10.col-md-10 {
    flex: 0 0 75% !important;
    max-width: 75% !important;
  }

  .banner,
  .glass-card,
  .projects-card,
  .top-banner,
  .accordion,
  section,
  .industry-row {
    margin-left: 20px !important;
    width: calc(100% - 20px) !important;
  }

  .about-btn {
    font-size: 12px !important;
    padding: 6px 14px !important;
  }

  .accordion-button {
    font-size: 13px !important;
    padding: 10px !important;
  }

  .accordion-body {
    font-size: 13px !important;
  }

  .dropdown-menu {
    min-width: 160px !important;
    font-size: 13px !important;
    padding: 5px;
  }

  .right-modal {
    width: 320px !important;
  }

  .doc-panel {
    width: 60% !important;
  }

  .doc-panel.fullscreen {
    width: 100% !important;
  }

  .doc-btn {
    font-size: 18px !important;
  }
}

/* Mobile tweaks */
@media (max-width: 767.98px) {
  .progress-wrapper {
    width: 140px;
    min-width: 100px;
  }

  .btn-col>.root-dropdown {
    left: -6px;
    min-width: 180px;
  }

  .progress-note {
    font-size: 0.85rem;
    margin-top: 12px;
    text-align: right;
  }
}
</style>
