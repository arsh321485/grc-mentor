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
          <div class="ms-auto fw-bold">
            <router-link to="/grc101">
              <button
                type="button"
                class="btn text-decoration-none text-light banner-title mt-2 mt-lg-0"
              >
                <i class="fas fa-arrow-left"></i> Back to task menu
              </button>
            </router-link>
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
            <div
              class="accordion-item"
              v-for="(project, index) in projects"
              :key="index"
            >
              <!-- Header -->
              <h2
                class="accordion-header d-flex justify-content-between align-items-center"
                :id="'heading' + index"
              >
                <button
                  class="accordion-button collapsed flex-grow-1"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#collapse' + index"
                  :aria-controls="'collapse' + index"
                  @click="toggleAccordion(index)"
                >
                  <i class="fas fa-folder me-2"></i> {{ project.title }}
                </button>

                <!-- How to button only visible when open -->
                <div class="position-relative ms-2" v-if="activeAccordion === index">
                  <button
                    class="btn btn-submit dropdown-toggle"
                    @click.stop="toggleDropdown(index)"
                  >
                    How to ?
                  </button>

                  <!-- Dropdown -->
                  <ul v-show="openDropdown === index" class="dropdown-menu show">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="bi bi-file-earmark-ruled p-1"></i> Method
                      </a>
                    </li>
                    <li><a class="dropdown-item" href="#">Design and Development</a></li>

                    <!-- Tools Submenu -->
                    <li class="dropdown-submenu">
                      <a
                        href="#"
                        class="dropdown-item"
                        @click.prevent="toggleSubmenu('tools', index)"
                      >
                        <i class="bi bi-tools p-1"></i> Tools »
                      </a>
                      <ul
                        class="dropdown-menu"
                        v-show="openSubmenu === 'tools' && openDropdown === index"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Develop and create security tools,<br />
                            processes, and documentation
                          </a>
                        </li>

                        <!-- Action Submenu -->
                        <li class="dropdown-submenu">
                          <a
                            href="#"
                            class="dropdown-item"
                            @click.prevent="toggleSubmenu('action', index)"
                          >
                            <i class="bi bi-check2-square"></i> Action »
                          </a>
                          <ul
                            class="dropdown-menu"
                            v-show="openSubmenu === 'action' && openDropdown === index"
                          >
                            <li>
                              <a
                                href="#"
                                class="dropdown-item"
                                @click.prevent="
                                  openDoc(
                                    'https://docs.google.com/document/d/YOUR_DOC_ID/pub?embedded=true'
                                  )
                                "
                              >
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

              <!-- Accordion Body -->
              <div
                :id="'collapse' + index"
                class="accordion-collapse collapse"
                :class="{ show: activeAccordion === index }"
                data-bs-parent="#projectAccordion"
              >
                <div class="accordion-body">
                  {{ project.details }}
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Google Docs Side Panel -->
        <div
          v-if="selectedDoc"
          class="doc-panel"
          :class="{ fullscreen: isFullscreen }"
        >
          <div class="doc-header">
            <button
              class="doc-btn"
              @click="toggleFullscreen"
              title="Toggle Fullscreen"
            >
              <i
                class="bi"
                :class="isFullscreen ? 'bi-fullscreen-exit' : 'bi-arrows-fullscreen'"
              ></i>
            </button>
            <button class="doc-btn" @click="selectedDoc = null" title="Close">
              <i class="bi bi-x-circle-fill"></i>
            </button>
          </div>
          <iframe
            :src="selectedDoc"
            width="100%"
            height="100%"
            style="border: none; flex: 1"
          ></iframe>
        </div>
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
      activeAccordion: null as number | null,
      openDropdown: null as number | null,
      openSubmenu: null as string | null,
      selectedDoc: null as string | null,
      isFullscreen: false,
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
      this.openDropdown = null; // reset when accordion changes
      this.openSubmenu = null;
    },
    toggleDropdown(index: number) {
      this.openDropdown = this.openDropdown === index ? null : index;
      this.openSubmenu = null;
    },
    toggleSubmenu(name: string, index: number) {
      if (this.openDropdown !== index) return;
      this.openSubmenu = this.openSubmenu === name ? null : name;
    },
    openDoc(link: string) {
      this.selectedDoc = link;
    },
    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen;
    },
  },
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

/* Buttons */
.btn-submit {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  border: none;
  border-radius: 22px;
  padding: 8px 18px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  white-space: nowrap;
}

.btn-submit:hover {
  background: linear-gradient(90deg, #2f80ed, #2d9cdb);
}

/* Dropdown */
.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  border: 1px solid #ddd;
  min-width: 200px;
  border-radius: 6px;
  padding: 5px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1050;
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

.dropdown-submenu > .dropdown-menu {
  top: 0;
  left: 100%;
  margin-left: 0.25rem;
}

/* Doc Panel */
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
  transition: all 0.3s ease-in-out;
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
</style>
