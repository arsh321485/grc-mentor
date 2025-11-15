<template>
  <main class="page">
    <div class="container-fluid">
      <div class="row g-4">
        <!-- Stepper Left Column -->
        <div class="col-2 col-md-2">
          <Stepper :currentStep="4" />
        </div>

        <!-- Right Main Column -->
        <div class="col-10 col-md-10">
          <!-- Banner -->
          <div class="banner mt-4 mb-3">
            <div class="banner-left">
              <h6 class="banner-title">Onboarding</h6>
              <p class="banner-sub">Review your mentorship details below.</p>
            </div>
            <div class="banner-right">GRC 101</div>
          </div>

          <!-- Industries + Responsibilities Row -->
          <div class="row g-4 mb-4">
            <!-- Industries -->
            <div class="col-md-6">
              <section class="industries-card glass-card h-100">
                <h6 class="section-title mb-3 d-flex align-items-center justify-content-center">
                  Your mentorship will include:
                </h6>
                <div class="industries-grid">
                  <div
                    v-for="(industry, index) in industries"
                    :key="index"
                    class="industry-card"
                    :style="{ backgroundImage: 'url(' + industry.image + ')' }"
                    @click="openModal(industry)"
                  >
                    <div class="industry-overlay">
                      <h6 class="industry-title">{{ industry.name }}</h6>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <!-- Responsibilities -->
            <div class="col-md-6">
              <section class="roles-card glass-card h-100">
                <h6 class="section-title">You will be responsible for:</h6>
                <ul class="roles-list">
                  <li v-for="(role, index) in roles" :key="index" class="role-item">
                    <i class="fas fa-check-circle role-icon"></i>
                    <span>{{ role }}</span>
                  </li>
                </ul>
                <div class=" justify-content-end d-flex">
                  <div>
                <!-- <p class="mt-3">
                  <a href="javascript:void(0)" @click="openPolicyModal" class="policy-link">
                    Read Acceptance Usage Policy
                  </a>
                </p> -->
                  <div class="form-check gap-2">
            <input class="form-check-input" type="checkbox" id="agreeTerms" v-model="agree"/>
            <label class="form-check-label small-text" for="agreeTerms">
              I agree to  &nbsp;
            </label>
            <span   class="text-primary small text-decoration-underline "
                @click="openPolicyModal">
               Acceptable Usage Policy
            </span>
          </div>

                <button
                  class=" btn-submit " :disabled="!agree" @click="goToCommunication">Setup your communication
                </button>
                </div>
                </div>
              </section>
            </div>
          </div>

          <!-- Projects -->
          <section class="projects-card glass-card mb-4">
            <h6 class="section-title">Projects</h6>
            <p class="subtitle">You'll be working on these project/tasks:</p>
            <div class="accordion custom-accordion" id="projectAccordion">
              <div
                class="accordion-item"
                v-for="(project, index) in projects"
                :key="index"
              >
                <h2 class="accordion-header" :id="'heading' + index">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#collapse' + index"
                  >
                    <i class="fas fa-folder me-2"></i> {{ project.title }}
                  </button>
                </h2>
                <div
                  :id="'collapse' + index"
                  class="accordion-collapse collapse"
                  :aria-labelledby="'heading' + index"
                  data-bs-parent="#projectAccordion"
                >
                  <div class="accordion-body">
                    {{ project.details }}
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>

    <!-- Right Side Modal (Industries) -->
    <div
      v-if="activeIndustry"
      class="custom-modal-overlay"
      @click.self="closeModal"
    >
      <div class="custom-modal glass-card">
        <div class="modal-header">
          <h6>{{ activeIndustry.name }}</h6>
          <button class="close-btn" @click="closeModal">&times;</button>
        </div>
        <div class="modal-body">
          <p>{{ activeIndustry.details }}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary btn-sm" @click="closeModal">
            Close
          </button>
          <button class="btn btn-primary btn-sm">Save Changes</button>
        </div>
      </div>
    </div>

    <!-- Center Modal (Policy) -->
    <div v-if="showPolicyModal" class="center-modal-overlay" @click.self="closePolicyModal">
      <div class="center-modal glass-card">
        <div class="modal-header">
          <h6>Acceptable Usage Policy</h6>
          <button class="close-btn" @click="closePolicyModal">&times;</button>
        </div>
        <div class="modal-body">
          <p>
            By participating in this mentorship program, you agree to follow
            the community guidelines, complete assigned tasks responsibly,
            and maintain respectful collaboration with mentors and peers.
          </p>
          <p>
            Any misuse of resources, breach of confidentiality, or violation
            of ethical standards may result in removal from the program.
          </p>

        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary btn-sm" @click="closePolicyModal">Close</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Stepper from '@/components/Stepper.vue';
export default {
  name: "MentorshipView",
  components: { Stepper },
  data() {
    return {

      industries: [
        { name: "Media", company: "Company name", icon: "fas fa-play", class: "media", details: "Details about Media mentorship go here.", image: new URL('@/assets/media-telecomunication.webp', import.meta.url).href },

        { name: "Legal", company: "Company name", icon: "fas fa-gavel", class: "legal", details: "Details about Legal mentorship go here.", image: new URL('@/assets/outsourcing.webp', import.meta.url).href },
        { name: "Education", company: "Company name", icon: "fas fa-graduation-cap", class: "education", details: "Details about Education mentorship go here.", image: new URL('@/assets/education-research.jpg', import.meta.url).href },
        { name: "E-commerce", company: "Company name", icon: "fas fa-shopping-cart", class: "ecommerce", details: "Details about E-commerce mentorship go here.", image: new URL('@/assets/ecommarce-retail.webp', import.meta.url).href },
      ],
      roles: [
        "Collaborate with mentors and peers on assigned projects",
        "Contribute innovative ideas to industry challenges",
        "Complete tasks within deadlines and maintain quality",
        "Document your learnings and share with the community",
        "Participate in weekly review meetings and feedback sessions",
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
  methods: {
    openModal(industry) {
      this.activeIndustry = industry;
    },
    closeModal() {
      this.activeIndustry = null;
    },
    openPolicyModal() {
      this.showPolicyModal = true;
    },
    closePolicyModal() {
      this.showPolicyModal = false;
    },
    goToCommunication() {
      if (this.agree) {
        this.$router.push({ name: "mattermost" });
      }
    }
  },
};
</script>

<style scoped>

.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  padding: 30px;
  font-family: "Inter", sans-serif;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
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

/* Industries Grid */
.industries-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  gap: 25px 40px; /* vertical + horizontal spacing */
  justify-items: center;
}

.industry-box {
  width: 160px;
  height: 160px;
  /* background: #f0f5ff; */
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
}

.industry-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  margin-bottom: 10px;
}

.industry-title {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}

.industry-company {
  font-size: 12px;
  color: #666;
  margin: 0;
}

/* Icon Colors */
.icon-wrapper.media { background: #56ab2f; }
.icon-wrapper.legal { background: #ff5e62; }
.icon-wrapper.education { background: #5b86e5; }
.icon-wrapper.ecommerce { background: #fbc2eb; }

/* Roles Section */
.roles-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.role-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
}
.role-item:last-child {
  border-bottom: none;
}
.role-icon {
  color: #2d9cdb;
  font-size: 16px;
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
  overflow: hidden;
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
  border-radius: 10px;
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
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
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

/* Center Modal */
.center-modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}
.center-modal {
  width: 500px;
  max-width: 95%;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
.modal-header, .modal-footer {
  padding: 12px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-body {
  padding: 15px;
  font-size: 14px;
  color: #444;
}
.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

/* Industries Card */
.industry-card {
  width: 100%;
  height: 150px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.industry-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.industry-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  color: #fff;
  text-align: center;
}

.industry-title {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}

</style>
