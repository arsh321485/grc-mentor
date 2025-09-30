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
            <h6 class="banner-title">Media</h6>
            <p class="banner-sub">Policy Review</p>
          </div>
          <!-- back Button -->
          <div class="ms-auto fw-bold">
            <router-link to="/grc101">
              <button type="button" class="btn text-decoration-none text-light banner-title mt-2 mt-lg-0">
                <i class="fas fa-arrow-left"></i>
                Back to task menu
              </button>
            </router-link>
          </div>
        </div>

        <!-- Star Media Modal -->
        <div v-if="showModal" class="modal-overlay">
          <div class="modal-content">
            <div class="modal-header d-flex justify-content-between align-items-center">
              <h5 class="fw-bold">Star Media</h5>
              <button class="btn-close" @click="showModal = false">✕</button>
            </div>

            <div class="modal-body">
              <div class="row">
                <div v-for="(item, i) in companyDetails" :key="i" class="col-12 col-md-6 col-lg-4 mb-4">
                  <p class="detail-label">{{ item.label }}</p>
                  <p class="detail-value">{{ item.value }}</p>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button class="btn btn-secondary" @click="showModal = false">
                Close
              </button>
            </div>
          </div>
        </div>

        <!-- Projects Section -->
        <section class="projects-card glass-card mb-4 mt-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h6 class="section-title mb-0">Projects</h6>
            <button class="btn px-4 py-2 btn-submit" @click="showModal = true">
              Industry
            </button>
          </div>
          <p class="subtitle">You'll be working on these project/tasks:</p>

          <div class="accordion custom-accordion" id="projectAccordion">
            <div class="accordion-item" v-for="(project, index) in projects" :key="index">
              <h2 class="accordion-header d-flex justify-content-between align-items-center" :id="'heading' + index">
                <!-- Left side: accordion toggle with project title -->
                <button class="accordion-button collapsed flex-grow-1" type="button" data-bs-toggle="collapse"
                  :data-bs-target="'#collapse' + index" :aria-controls="'collapse' + index"
                  @click="toggleAccordion(index)">
                  <i class="fas fa-folder me-2"></i> {{ project.title }}
                </button>

                <!-- Right side: How to button (only visible if open) -->
                <div class="dropdown ms-2" v-if="activeAccordion === index">
                  <button class="btn btn-submit dropdown-toggle" @click.stop="toggleDropdown(index)">
                    How to ?
                  </button>

                  <ul v-show="openDropdown === index" class="dropdown-menu show">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="bi bi-file-earmark-ruled p-1"></i> Method
                      </a>
                    </li>
                    <li><a class="dropdown-item" href="#">Design and Development</a></li>

                    <!-- Submenu -->
                    <li class="dropdown-submenu">
                      <a href="#" class="dropdown-item"><i class="bi bi-tools p-1"></i> Tools »</a>
                      <ul class="dropdown-menu">
                        <li>
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
              </h2>


              <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index"
                data-bs-parent="#projectAccordion">
                <div class="accordion-body">
                  {{ project.details }}



                </div>
              </div>
            </div>
          </div>
        </section>


        <!-- tp -->

        <!-- Google Docs Side Panel -->
        <div v-if="selectedDoc" class="doc-panel" :class="{ fullscreen: isFullscreen }">
          <!-- Panel Header -->
          <div class="doc-header">
            <button class="doc-btn" @click="toggleFullscreen" title="Toggle Fullscreen">
              <i class="bi" :class="isFullscreen ? 'bi-fullscreen-exit' : 'bi-arrows-fullscreen'"></i>
            </button>
            <button class="doc-btn" @click="selectedDoc = null" title="Close">
              <i class="bi bi-x-circle-fill"></i>
            </button>
          </div>

          <!-- Embedded Google Doc -->
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
      openActionSubmenu: false,
      selectedDoc: null as string | null,
      isFullscreen: false,


      activeAccordion: null as number | null, // track open accordion

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
        { title: "Project 1", details: "Details of Project 1 go here." },
        { title: "Project 2", details: "Details of Project 2 go here." },
        { title: "Project 3", details: "Details of Project 3 go here." },
      ],

    };
  },

  methods: {
    toggleAccordion(index: number) {
      this.activeAccordion = this.activeAccordion === index ? null : index;
      this.openDropdown = null; // reset dropdown when accordion changes
      this.openSubmenu = null; // reset submenu
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
      this.openDropdown = null; // close dropdown when doc opens
      this.openSubmenu = null;
    },
    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen;
    },
  }

  // },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
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
  padding: 22px;
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

/* Section Title */
.section-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #222;
}


/* Projects */
.subtitle {
  font-size: 13px;
  color: #666;
  margin-bottom: 14px;
}

.custom-accordion .accordion-item {
  border: none;
  margin-bottom: 10px;
  border-radius: 8px;
  /* overflow: hidden; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.custom-accordion .accordion-button {
  background: #f9f9f9;
  font-size: 14px;
  font-weight: 500;
}

.custom-accordion .accordion-button:not(.collapsed) {
  background: #eaf5ff;
  color: #2d7dd2;
  font-weight: 600;
}

/* Policy */
.small-text {
  font-size: 13px;
}

.btn-submit {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  border: none;
  border-radius: 22px;
  padding: 10px 28px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
}

.btn-submit:hover {
  background: linear-gradient(90deg, #2f80ed, #2d9cdb);
}

.btn-submit:disabled {
  background: #b3d7e6;
  cursor: not-allowed;
}

/* Right-Side Modal */
.custom-modal-overlay {
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

.custom-modal {
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

.modal-header,
.modal-footer {
  padding: 12px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  padding: 15px;
  font-size: 13px;
  color: #444;
}

.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}




/* Dropdown */


.accordion-button {
  font-size: 14px;
}

/* Dropdown */
/* .dropdown-menu {
  position: absolute;
  background: white;
  border: 1px solid #ddd;
  min-width: 200px;
  border-radius: 6px;
  padding: 5px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: none;
} */
 .dropdown-menu {
  position: absolute;
  right: 0;          /* stick to right edge of button */
  transform: translateX(-0%); /* shift a little left */
  background: white;
  border: 1px solid #ddd;
  min-width: 200px;
  border-radius: 6px;
  padding: 5px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  /* z-index: 1050; */
}


.dropdown-menu.show {
  display: block;
}

.dropdown-item {
  padding: 8px 14px;
  font-size: 14px;
  color: #333;
}

.dropdown-item:hover {
  background: #f4f9ff;
  color: #2d7dd2;
}

/* Submenu */
.dropdown-submenu {
  position: relative;
}



/* .dropdown-submenu>.dropdown-menu {
  top: 0;
  right: 100%;
  margin-right: 1.25rem;
} */

/* Show submenu on hover */
.dropdown-submenu:hover>.dropdown-menu {
  display: block;
}

/* Right-side Google Doc panel */
.doc-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0px 8px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  display: flex;
  flex-direction: column;
}

.close-panel {
  align-self: flex-end;
  background: #0096D6;
  color: white;
  border: none;
  padding: 6px 10px;
  margin: 8px;
  border-radius: 4px;
  cursor: pointer;
}

.doc-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  /* Default half width */
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  z-index: 2000;
  transition: all 0.3s ease-in-out;
}

.doc-panel.fullscreen {
  width: 100%;
  /* Expand fullscreen */
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
</style>
