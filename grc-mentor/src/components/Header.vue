<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-light bg-white navbar-custom">
      <div class="container-fluid">
        <!-- Logo (keeps router-link as you had) -->
        <router-link to="/home" class="navbar-brand d-flex align-items-center">
          <img src="../assets/logo-img.png" alt="Logo" class="brand-logo" />
        </router-link>

        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Menu -->
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center nav-list">
            <!-- GRC Nav Items (open modals) -->
            <li class="nav-item">
              <a class="nav-link dropdown-toggle text-dark px-3" href="#" data-bs-toggle="modal"
                data-bs-target="#grc101Modal">
                GRC-101
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link dropdown-toggle text-dark px-3" href="#" data-bs-toggle="modal"
                data-bs-target="#grc301Modal">
                GRC-301
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link dropdown-toggle text-dark px-3" href="#" data-bs-toggle="modal"
                data-bs-target="#grc501Modal">
                GRC-501
              </a>
            </li>

            <!-- Advisor page nav-item (new) -->
            <li class="nav-item">
              <router-link to="/advisor" class="nav-link text-dark px-3">
                Advisor
              </router-link>
            </li>

            <!-- About Dropdown -->
            <li class="nav-item dropdown ms-3" @mouseleave="closeAbout">
              <a class="nav-link dropdown-toggle text-dark px-3" href="#" @click.prevent="toggleAbout">
                About
              </a>
              <ul class="dropdown-menu mt-2" :class="{ show: isAboutOpen }">
                <li><router-link class="dropdown-item" to="/aienable">AI enabled</router-link></li>
                <li><router-link class="dropdown-item" to="/platform">The Platform</router-link></li>
                <li><router-link class="dropdown-item" to="/whattoexcept">What to expect</router-link></li>
                <li><router-link class="dropdown-item" to="/experiencegain">Experience you will gain</router-link></li>
                <li><router-link class="dropdown-item" to="/careerpath">Career Path</router-link></li>
              </ul>
            </li>
          </ul>

          <!-- Sign In + Sign Up Buttons -->
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center auth-buttons">
            <li class="nav-item d-flex gap-2 align-items-center me-2">
              <router-link to="/signin">
                <button type="button" class="btn btn-signin rounded-pill">
                  Sign in
                </button>
              </router-link>
            </li>

            <li class="nav-item d-flex gap-2 align-items-center">
              <router-link to="/signup">
                <button type="button" class="btn btn-signup rounded-pill">
                  Sign up
                </button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- GRC 101 Modal (smaller, prettier) -->
    <div class="modal fade custom-modal" id="grc101Modal" tabindex="-1" aria-hidden="true" data-bs-backdrop="false"
      data-bs-keyboard="false">
      <div class="modal-dialog modal-centered">
        <div class="modal-content shadow-lg border-0 rounded-4">

          <!-- Modal Header -->
          <div class="modal-header bg-gradient-primary text-white modal-header-custom">
            <h5 class="modal-title fw-bold">GRC 101 - Beginner</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>

          <!-- Modal Body -->
          <div class="modal-body modal-body-custom">
            <div class="row g-4 align-items-center">
              <!-- Left Column: Image -->
              <div class="col-lg-5 col-md-12">
                <div class="card h-100 shadow-sm border-0 p-3 text-center info-card">
                  <img src="../assets/consulting-source.webp" alt="GRC 101" class="img-fluid rounded-3 modal-image" />
                </div>
              </div>

              <!-- Right Column: Text -->
              <div class="col-lg-7 col-md-12">
                <div class="card h-100 shadow-sm border-0 p-4 text-start content-card">
                  <h6 class="fw-bold mb-2">{{ grc101Data[0].title }}</h6>
                  <p class="mb-3 small-text">{{ grc101Data[0].description }}</p>

                  <h6 class="fw-bold mb-2">{{ grc101Data[1].title }}</h6>
                  <p class="mb-3 small-text">{{ grc101Data[1].description }}</p>

                  <h6 class="fw-bold mb-2">{{ grc101Data[2].title }}</h6>
                  <p class="mb-3 small-text">{{ grc101Data[2].description }}</p>

                  <div class="text-end mt-3">
                    <router-link to="/signup-grc101">
                      <button type="button" class="btn btn-signup rounded-pill btn-start">
                        Start Now
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- GRC 301 Modal -->
    <div class="modal fade custom-modal" id="grc301Modal" tabindex="-1" aria-hidden="true" data-bs-backdrop="false"
      data-bs-keyboard="false">
      <div class="modal-dialog modal-centered">
        <div class="modal-content shadow-lg border-0 rounded-4">
          <div class="modal-header bg-gradient-primary text-white modal-header-custom">
            <h5 class="modal-title fw-bold">GRC 301 - Intermediate</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body modal-body-custom">
            <div class="row g-3">
              <div class="col-md-4" v-for="(item, index) in grc301Data" :key="index">
                <div class="card h-100 shadow-sm border-0">
                  <div class="card-body">
                    <h6 class="fw-bold">{{ item.title }}</h6>
                    <p class="text-muted small-text">{{ item.description }}</p>
                    <a href="#" class="text-primary fw-bold">Try Now →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- GRC 501 Modal -->
    <div class="modal fade custom-modal" id="grc501Modal" tabindex="-1" aria-hidden="true" data-bs-backdrop="false"
      data-bs-keyboard="false">
      <div class="modal-dialog modal-centered">
        <div class="modal-content shadow-lg border-0 rounded-4">
          <div class="modal-header bg-gradient-primary text-white modal-header-custom">
            <h5 class="modal-title fw-bold">GRC 501 - Advanced</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body modal-body-custom">
            <div class="row g-3">
              <div class="col-md-4" v-for="(item, index) in grc501Data" :key="index">
                <div class="card h-100 shadow-sm border-0">
                  <div class="card-body">
                    <h6 class="fw-bold">{{ item.title }}</h6>
                    <p class="text-muted small-text">{{ item.description }}</p>
                    <a href="#" class="text-primary fw-bold">Try Now →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- GRC 701 Modal -->
    <div class="modal fade custom-modal" id="grc701Modal" tabindex="-1" aria-hidden="true" data-bs-backdrop="false"
      data-bs-keyboard="false">
      <div class="modal-dialog modal-centered">
        <div class="modal-content shadow-lg border-0 rounded-4">
          <div class="modal-header bg-gradient-primary text-white modal-header-custom">
            <h5 class="modal-title fw-bold">GRC 701 - Expert</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body modal-body-custom">
            <div class="row g-3">
              <div class="col-md-4" v-for="(item, index) in grc701Data" :key="index">
                <div class="card h-100 shadow-sm border-0">
                  <div class="card-body">
                    <h6 class="fw-bold">{{ item.title }}</h6>
                    <p class="text-muted small-text">{{ item.description }}</p>
                    <a href="#" class="text-primary fw-bold">Try Now →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const isAboutOpen = ref(false);

    const toggleAbout = () => (isAboutOpen.value = !isAboutOpen.value);
    const closeAbout = () => (isAboutOpen.value = false);

    // Sample static data (kept from your file)
    const grc101Data = ref([
      { title: "Introduction to GRC", description: `Welcome to GRC 101! This course will guide you step by step through Governance, Risk, and Compliance fundamentals, helping you understand frameworks, policies, and real-world applications. You will learn how organizations identify, assess, and mitigate risks while ensuring compliance with industry standards.` },
      {
        title: "What will we learn", description: `In GRC-101, you will gain a strong foundation in Governance, Risk, and Compliance. The course begins by introducing the key concepts of GRC and why they are essential for every organization. You will learn how governance sets the direction through policies and frameworks, how risk management helps identify, assess, and reduce potential threats, and how compliance ensures that organizations meet regulatory and industry standards.`  },
      { title: "What are the benefits", description: `GRC-101 equips you with a solid foundation in Governance, Risk, and Compliance, giving you practical skills to apply frameworks and manage risks effectively. It enhances career opportunities across multiple industries.` },
    ]);

    const grc301Data = ref([
      { title: "Risk Assessments", description: "Hands-on risk assessment techniques." },
      { title: "Control Mapping", description: "Map controls to compliance requirements." },
      { title: "Practical Labs", description: "Work on real-world compliance operations." },
    ]);

    const grc501Data = ref([
      { title: "Audit Readiness", description: "Prepare for ISO & SOC2 audits." },
      { title: "Stakeholder Reporting", description: "Create reports for management." },
      { title: "Automation Tools", description: "Leverage tools to speed compliance." },
    ]);

    const grc701Data = ref([
      { title: "GRC Strategy", description: "Develop enterprise-level GRC strategies." },
      { title: "Leadership Skills", description: "Lead large GRC programs." },
      { title: "Maturity Models", description: "Measure and improve GRC maturity." },
    ]);

    return {
      isAboutOpen,
      toggleAbout,
      closeAbout,
      grc101Data,
      grc301Data,
      grc501Data,
      grc701Data,
    };
  },
});
</script>

<style scoped>
/* Base typography & layout */
main {
  font-family: "Segoe UI", Arial, Helvetica, sans-serif;
  color: #111827;
  line-height: 1.5;
}

/* ---------- NAVBAR ---------- */
.navbar-custom {
  padding: 0.6rem 1rem;
  box-shadow: 0 6px 30px rgba(16, 24, 40, 0.06);
  border-bottom: 1px solid rgba(15, 23, 42, 0.04);
}

/* Logo sizing and spacing */
.brand-logo {
  height: 38px;
  transition: transform .15s ease;
}
.brand-logo:hover { transform: translateY(-2px); }

/* Navbar links */
.nav-list .nav-link {
  font-weight: 600;
  letter-spacing: 0.2px;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
}
.nav-list .nav-link:hover {
  background: rgba(10, 76, 127, 0.06);
  color: #0a4c7f !important;
}

/* Auth buttons wrapper */
.auth-buttons { gap: 0.5rem; display: flex; align-items: center; }

/* Signin (outline) button */
.btn-signin {
  background: transparent;
  color: #0a4c7f;
  border: 1.5px solid rgba(10,76,127,0.12);
  padding: 0.4rem 0.95rem;
  min-width: 96px;
  font-weight: 600;
  transition: transform .12s ease, box-shadow .12s ease;
}
.btn-signin:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(10,76,127,0.06);
}

/* Signup button */
.btn-signup {
  background: linear-gradient(180deg,#0078bf 0%, #005fa0 100%);
  color: #fff;
  min-width: 120px;
  padding: 0.45rem 1rem;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(0, 108, 191, 0.12);
  border: none;
}
.btn-signup:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 108, 191, 0.14);
}

/* ---------- DROPDOWN (About) ---------- */
.dropdown-menu {
  border-radius: 10px;
  min-width: 210px;
  padding: 0.4rem 0;
  box-shadow: 0 10px 30px rgba(2,6,23,0.08);
  border: none;
}
.dropdown-item {
  padding: 0.6rem 1rem;
  font-weight: 600;
}
.dropdown-item:hover {
  background: rgba(10,76,127,0.05);
}

/* ---------- MODAL / DIALOG ---------- */
/* Smaller, centered dialog (still roomy) */
.modal-centered {
  max-width: 820px;
  margin: 1.75rem auto;
}
@media (max-width: 992px) {
  .modal-centered { max-width: 92%; margin: 1.25rem auto; }
}

/* Modal content */
.custom-modal .modal-content {
  border-radius: 14px;
  overflow: hidden;
}

/* Header (thinner, modern) */
.modal-header-custom {
  padding: 0.9rem 1.25rem;
  background: linear-gradient(90deg,#0b5a88 0%, #073b5f 100%);
  align-items: center;
}
.modal-header-custom .modal-title {
  color: #fff;
  font-size: 1.05rem;
}

/* Modal body */
.modal-body-custom {
  padding: 1.25rem;
  max-height: 72vh;
  overflow-y: auto;
  background: linear-gradient(180deg,#ffffff 0%, #fbfdff 100%);
}

/* Cards inside modal */
.info-card, .content-card {
  border-radius: 12px;
}

/* Modal image smaller and nicely constrained */
.modal-image {
  width: 100%;
  height: auto;
  max-height: 360px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(9,30,66,0.06);
}

/* Text sizing in modal */
.small-text {
  color: #4b5563;
  font-size: 0.95rem;
}

/* Start button inside modal: slightly larger for emphasis */
.btn-start {
  padding: 0.45rem 1.15rem;
  min-width: 100px;
}

/* Cards general hover */
.card {
  border-radius: 10px;
  transition: transform .18s ease, box-shadow .18s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(13, 23, 52, 0.06);
}

/* Light utility tweaks */
.text-muted {
  color: #6b7280 !important;
}
.align-items-center { align-items: center; }

/* Accessibility: ensure focus states */
a:focus, button:focus {
  outline: 3px solid rgba(10,76,127,0.12);
  outline-offset: 2px;
}

/* Keep small screens comfortable */
@media (max-width: 576px) {
  .brand-logo { height: 34px; }
  .modal-image { max-height: 240px; }
  .modal-body-custom { padding: 0.9rem; }
  .btn-signup { min-width: 100px; padding: 0.35rem 0.9rem; }
  .btn-signin { min-width: 84px; padding: 0.3rem 0.7rem; }
}
</style>
