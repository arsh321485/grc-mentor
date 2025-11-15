



<template>
  <main>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <!-- Logo -->
      <!-- <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="../assets/logo-img.png" alt="" style="height: 35px;">
      </a> -->

      <router-link to="/home" class="navbar-brand d-flex align-items-center">
        <img src="../assets/logo-img.png" alt="Logo" style="height: 35px;" />
      </router-link>


      <!-- Toggler -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Menu -->
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <!-- GRC Nav Items (Each opens its own modal) -->
          <li class="nav-item">
            <a class="nav-link  dropdown-toggle text-dark" href="#" data-bs-toggle="modal"
              data-bs-target="#grc101Modal">
              GRC-101
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link  dropdown-toggle text-dark" href="#" data-bs-toggle="modal"
              data-bs-target="#grc301Modal">
              GRC-301
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link  dropdown-toggle text-dark" href="#" data-bs-toggle="modal"
              data-bs-target="#grc501Modal">
              GRC-501
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link  dropdown-toggle text-dark" href="#" data-bs-toggle="modal"
              data-bs-target="#grc701Modal">
              GRC-701
            </a>
          </li>

          <!-- About Dropdown -->
          <li class="nav-item dropdown ms-3" @mouseleave="closeAbout">
            <a class="nav-link dropdown-toggle text-dark" href="#" @click.prevent="toggleAbout">
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

        <!-- Sign Up Button -->
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
          <li class="nav-item d-flex gap-2">
            <router-link to="/signup">
              <button type="button" class="btn btn-signup rounded-pill mt-2 mt-lg-0">
                Sign up
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Separate Modals for Each GRC -->

  <!-- GRC 101 Modal -->
  <!-- <div class="modal fade custom-modal" id="grc101Modal" tabindex="-1" aria-hidden="true" data-bs-backdrop="false"
    data-bs-keyboard="false">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content shadow-lg border-0 rounded-4">
        <div class="modal-header bg-gradient-primary text-white">
          <h5 class="modal-title fw-bold">GRC 101 - Beginner</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-md-4" v-for="(item, index) in grc101Data" :key="index">
              <div class="card h-100 shadow-sm border-0">
                <div class="card-body">
                  <h6 class="fw-bold">{{ item.title }}</h6>
                  <p class="text-muted">{{ item.description }}</p>
                 

                  <router-link to="/signup-grc101" class="text-primary fw-bold">
                   Enroll Now ->
                  </router-link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div class="modal fade custom-modal" id="grc101Modal" tabindex="-1" aria-hidden="true" data-bs-backdrop="false"
    data-bs-keyboard="false">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content shadow-lg border-0 rounded-4">

        <!-- Modal Header -->
        <div class="modal-header bg-gradient-primary text-white">
          <h5 class="modal-title fw-bold">GRC 101 - Beginner</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body">
          <div class="row g-3">

            <!-- Left Column: Introduction Card -->
            <div class="col-md-5">
              <div class="card h-100 shadow-sm border-0 text-center p-3">
                <img src="../assets/consulting-source.webp" alt="GRC 101" class="img-fluid rounded-3 mb-3"
                  style="max-height: 500px;">

                <!-- <p class="typing-paragraph text-start">{{ typedText }}</p> -->
                <!-- <router-link to="/signup-grc101" class="text-primary fw-bold text-end" style="text-decoration: none;">
                Enroll Now →
              </router-link> -->

              </div>


            </div>

            <!-- <div class="col-md-7">
              <div class="card h-100 shadow-sm border-0 p-3 text-center">
                <h6 class="fw-bold">{{ grc101Data[0].title }}</h6>
                <p class="typing-paragraph text-start">{{ typedText }}</p>


               
              </div>
            </div> -->


            <div class="col-md-7">
              <div class="card h-100 shadow-sm border-0 p-3 text-start">
                <h6 class="fw-bold">{{ grc101Data[0].title }}</h6>
                <p class="text-start">{{ grc101Data[0].description }}</p>


                <h6 class="fw-bold">{{ grc101Data[1].title }}</h6>
                <p class="text-start"> {{ grc101Data[1].description }}</p>


                <h6 class="fw-bold">{{ grc101Data[2].title }} </h6>
                <p class="text-start">{{ grc101Data[2].description }}</p>



                <div class=" text-end pt-2">
                  <!-- <router-link to="/signup-grc101" class="enroll-text-btn fw-bold">
                  Start Now <span class="arrow">→</span>
                  </router-link> -->
                   <router-link to="/signup-grc101">
              <button type="button" class="btn btn-signup rounded-pill mt-2 mt-lg-0">
                Start Now
              </button>
            </router-link>
                </div>

              </div>
            </div>


            <!-- Right Column: Image + Typing Paragraph -->
            <!-- <div class="col-md-4"> -->
            <!-- <div class="card h-100 shadow-sm border-0 p-3 text-center"> -->
            <!-- <img src="../assets/consulting-source.webp" alt="GRC 101" class="img-fluid rounded-3 mb-3" style="max-height: 300px;"> -->
            <!-- <p class="typing-paragraph text-start">{{ typedText }}</p> -->
            <!-- </div> -->
            <!-- </div> -->

          </div>
        </div>

      </div>
    </div>
  </div>



  <!-- GRC 301 Modal -->
  <!-- <div class="modal fade" id="grc301Modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content shadow-lg border-0 rounded-4">
        <div class="modal-header bg-gradient-primary text-white">
          <h5 class="modal-title fw-bold">GRC 301 - Intermediate</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-md-4" v-for="(item, index) in grc301Data" :key="index">
              <div class="card h-100 shadow-sm border-0">
                <div class="card-body">
                  <h6 class="fw-bold">{{ item.title }}</h6>
                  <p class="text-muted">{{ item.description }}</p>
                  <a href="#" class="text-primary fw-bold">Try Now →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div class="modal fade custom-modal" id="grc301Modal" tabindex="-1" aria-hidden="true" data-bs-backdrop="false"
    data-bs-keyboard="false">
    <div class="modal-dialog modal-xl modal-dialog-centered"> <!-- wider + vertically centered -->
      <div class="modal-content shadow-lg border-0 rounded-4">
        <div class="modal-header bg-gradient-primary text-white">
          <h5 class="modal-title fw-bold">GRC 301 - Intermediate</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-md-4" v-for="(item, index) in grc301Data" :key="index">
              <div class="card h-100 shadow-sm border-0">
                <div class="card-body">
                  <h6 class="fw-bold">{{ item.title }}</h6>
                  <p class="text-muted">{{ item.description }}</p>
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
  <div class="modal fade  custom-modal" id="grc501Modal" tabindex="-1" aria-hidden="true" data-bs-backdrop="false"
    data-bs-keyboard="false">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content shadow-lg border-0 rounded-4">
        <div class="modal-header bg-gradient-primary text-white">
          <h5 class="modal-title fw-bold">GRC 501 - Advanced</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-md-4" v-for="(item, index) in grc501Data" :key="index">
              <div class="card h-100 shadow-sm border-0">
                <div class="card-body">
                  <h6 class="fw-bold">{{ item.title }}</h6>
                  <p class="text-muted">{{ item.description }}</p>
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
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content shadow-lg border-0 rounded-4">
        <div class="modal-header bg-gradient-primary text-white">
          <h5 class="modal-title fw-bold">GRC 701 - Expert</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-md-4" v-for="(item, index) in grc701Data" :key="index">
              <div class="card h-100 shadow-sm border-0">
                <div class="card-body">
                  <h6 class="fw-bold">{{ item.title }}</h6>
                  <p class="text-muted">{{ item.description }}</p>
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

<!-- <script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const isAboutOpen = ref(false);

    const toggleAbout = () => (isAboutOpen.value = !isAboutOpen.value);
    const closeAbout = () => (isAboutOpen.value = false);

   
    const grc101Data = ref([
      { title: "Introduction to GRC", description: "Learn the basics of Governance, Risk & Compliance." },
      { title: "ISO 27001 Overview", description: "Understand core security framework concepts." },
      { title: "SOC2 Fundamentals", description: "Explore compliance requirements for SaaS businesses." },
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
</script> -->

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const isAboutOpen = ref(false);

    const toggleAbout = () => (isAboutOpen.value = !isAboutOpen.value);
    const closeAbout = () => (isAboutOpen.value = false);

    // Sample static data
    const grc101Data = ref([
      { title: "Introduction to GRC", description: `Welcome to GRC 101! This course will Welcome to GRC 101! This course will guide you step by step through Governance, Risk, and Compliance fundamentals, helping you understand frameworks, policies, and real-world applications. You will learn how organizations identify, assess, and mitigate risks while ensuring compliance with industry standards.` },
      {
        title: "What will we learn", description: `In GRC-101, you will gain a strong foundation in Governance, Risk, and Compliance. 
  The course begins by introducing the key concepts of GRC and why they are essential 
  for every organization. You will learn how governance sets the direction through 
  policies and frameworks, how risk management helps identify, assess, and reduce 
  potential threats, and how compliance ensures that organizations meet regulatory 
  and industry standards.`  },
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

    // Typing effect for GRC 101 modal
    // const typedText = ref("");
    // const fullText = `Welcome to GRC 101! This course will Welcome to GRC 101! This course will guide you step by step through Governance, Risk, and Compliance fundamentals, helping you understand frameworks, policies, and real-world applications. You will learn how organizations identify, assess, and mitigate risks while ensuring compliance with industry standards. By the end of this course, you'll gain practical insights to make informed decisions and strengthen your organization’s overall risk management strategy. you step by step through Governance, Risk, and Compliance fundamentals, helping you understand frameworks, policies, and real-world applications.`;
    // let index = 0;

    // const typeWriter = () => {
    //   if (index < fullText.length) {
    //     typedText.value += fullText[index];
    //     index++;
    //     setTimeout(typeWriter, 50); 
    //   }
    // };

    // onMounted(() => {
    //   const modalEl = document.getElementById("grc101Modal");
    //   if (modalEl) {
    //     modalEl.addEventListener("shown.bs.modal", () => {
    //       typedText.value = ""; // reset
    //       index = 0;
    //       typeWriter();
    //     });
    //   }
    // });

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

main {
  font-family: "Segoe UI", Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #1a1a1a; /* dark gray, similar to the text */
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Segoe UI", Arial, Helvetica, sans-serif;
  font-weight: 700; /* bold headings */
 
}
.btn-signup {
  background-color: #006cbf;
  color: white;
  width: 130px;
}

.btn-signup:hover {
  background-color: #006cbf;
  color: white;
}

.bg-gradient-primary {
  background-color: #0a4c7f;
}

.card {
  border-radius: 0.75rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}


/* Apply only to this modal */
.custom-modal .modal-dialog {
  max-width: 90%;
  /* Increase width (default lg is ~800px, xl is ~1140px) */
  height: 90vh;
  /* Increase height */
  padding-top: 33px;
}

.custom-modal .modal-content {
  height: 100%;
  /* Fill dialog */
  border-radius: 16px;
  background: #fff;
}

.custom-modal .modal-body {
  overflow-y: auto;
  /* Scroll inside if content is long */
  padding: 2rem;
  /* More padding */
}

.custom-modal .card {
  transition: transform 0.2s ease-in-out;
}

.custom-modal .card:hover {
  transform: translateY(-5px);
  /* Small hover effect */
}

.enroll-text-btn {
  color: #007BAF;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  animation: textGlow 1.5s infinite alternate;
}

.arrow {
  display: inline-block;
  margin-left: 5px;
  animation: arrowMove 1s infinite alternate;
}

/* Continuous glowing text animation */
@keyframes textGlow {
  0% {
    text-shadow: 0 0 5px #007BAF;
  }

  50% {
    text-shadow: 0 0 15px #007BAF, 0 0 20px #007BAF;
  }

  100% {
    text-shadow: 0 0 5px #007BAF;
  }
}

/* Continuous arrow movement */
@keyframes arrowMove {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(5px);
  }

  100% {
    transform: translateX(0);
  }
}

.icon-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
