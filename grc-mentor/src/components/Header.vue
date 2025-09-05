<!-- <template>
 
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">

      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="../assets/logo-img.png" alt="" style="height: 35px;">
      </a>


      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

   
      <div class="collapse navbar-collapse" id="navbarText">
     
        <ul class="navbar-nav  mb-2 mb-lg-0">
     
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="mentorshipMenu" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Mentorship
            </a>
            <ul class="dropdown-menu" aria-labelledby="mentorshipMenu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

      
          <li class="nav-item dropdown ms-3">
            <a class="nav-link dropdown-toggle text-dark" href="#" id="aboutMenu" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              About
            </a>
            <ul class="dropdown-menu" aria-labelledby="aboutMenu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>

      
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
        
          <li class="nav-item dropdown me-lg-3">
       
            <ul class="dropdown-menu" aria-labelledby="insightsMenu">
              <li><a class="dropdown-item" href="#">Blog</a></li>
              <li><a class="dropdown-item" href="#">Case Studies</a></li>
            </ul>
          </li>

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

</template>

<script lang="ts">
export default {
  name: "Header",
};
</script>



<style>
.btn-signup {
  background-color: #006CBF;
  color: white;
  width: 130px;
}

.btn-signup:hover {
  background-color: #006CBF;
  color: white;
}
</style> -->


<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="../assets/logo-img.png" alt="" style="height: 35px;">
      </a>

      <!-- Toggler -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Menu -->
      <div class="collapse navbar-collapse" id="navbarText">
        <!-- LEFT MENU (Mentorship + About) -->
        <ul class="navbar-nav mb-2 mb-lg-0">
          <!-- Mentorship -->
          <li class="nav-item">
            <a class="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="modal"
              data-bs-target="#mentorshipModal">
              Mentorship
            </a>
          </li>

          <!-- About -->

          <li class="nav-item dropdown ms-3" @mouseleave="closeAbout">
            <a class="nav-link dropdown-toggle text-dark" href="#" @click.prevent="toggleAbout">
              About
            </a>
            <ul class="dropdown-menu mt-2" :class="{ show: isAboutOpen }">

              <li>
                <router-link class="dropdown-item" to="/aienable">
                  AI enabled
                </router-link>
              </li>

              <li>
                <router-link class="dropdown-item" to="/platform">
                 The Platform
                </router-link>
              </li>
               <li>
                <router-link class="dropdown-item" to="/whattoexcept">
                What to expect 
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/experiencegain">
                Experience you will gain
                </router-link>
              </li>
               <li>
                <router-link class="dropdown-item" to="/careerpath">
                Career Path
                </router-link>
              </li>

            </ul>
          </li>
        </ul>

        <!-- RIGHT MENU (Insights + Sign Up) -->
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
          <!-- Sign Up -->
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

  <!-- Mentorship Modal -->
  <div class="modal fade" id="mentorshipModal" tabindex="-1" aria-labelledby="mentorshipModalLabel" aria-hidden="true">


    <div class="modal-dialog modal-xl" style="margin-top: 60px; ">
      <div class="modal-content shadow-lg border-0 rounded-4">

        <div class="modal-header bg-gradient-primary text-white border-0 rounded-top-4">
          <h5 class="modal-title fw-bold" id="mentorshipModalLabel">
            Mentorship Programs
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>


        <div class="modal-body p-0">
          <div class="row g-0">

            <div class="col-3 bg-light border-end">
              <ul class="nav flex-column py-3">
                <li class="nav-item">
                  <a class="nav-link px-3 py-2 rounded mb-2" :class="{ active: selectedGRC === 'grc101' }" href="#"
                    @click.prevent="selectGRC('grc101')">GRC 101</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-3 py-2 rounded mb-2" :class="{ active: selectedGRC === 'grc301' }" href="#"
                    @click.prevent="selectGRC('grc301')">GRC 301</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-3 py-2 rounded mb-2" :class="{ active: selectedGRC === 'grc501' }" href="#"
                    @click.prevent="selectGRC('grc501')">GRC 501</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-3 py-2 rounded mb-2" :class="{ active: selectedGRC === 'grc701' }" href="#"
                    @click.prevent="selectGRC('grc701')">GRC 701</a>
                </li>
              </ul>
            </div>


            <div class="col-9 p-4">
              <transition name="fade">
                <div v-if="selectedGRC === 'grc101'">
                  <h5 class="fw-bold " style="color: #0a4c7f;">GRC 101 - Beginner</h5>
                  <p class="text-muted">
                    This program introduces you to Governance, Risk, and Compliance fundamentals.
                    Learn the basics of frameworks like ISO 27001, NIST, and SOC2.
                  </p>
                </div>

                <div v-else-if="selectedGRC === 'grc301'">
                  <h5 class="fw-bold " style="color: #0a4c7f;">GRC 301 - Intermediate</h5>
                  <p class="text-muted">
                    Dive deeper into risk assessments, control mapping, and compliance operations in real-world
                    scenarios.
                  </p>
                </div>

                <div v-else-if="selectedGRC === 'grc501'">
                  <h5 class="fw-bold " style="color: #0a4c7f;">GRC 501 - Advanced</h5>
                  <p class="text-muted">
                    Focus on audit readiness, reporting to stakeholders, and advanced compliance automation tools.
                  </p>
                </div>

                <div v-else-if="selectedGRC === 'grc701'">
                  <h5 class="fw-bold " style="color: #0a4c7f;">GRC 701 - Expert</h5>
                  <p class="text-muted">
                    Designed for professionals aiming to lead enterprise GRC programs and implement strategy.
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<!-- <script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const selectedGRC = ref("grc101"); 

    const selectGRC = (grc: string) => {
      selectedGRC.value = grc;
    };

    return {
      selectedGRC,
      selectGRC,
    };
  },
});
</script> -->
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    // Your existing GRC selection logic
    const selectedGRC = ref("grc101"); // Default selection
    const selectGRC = (grc: string) => {
      selectedGRC.value = grc;
    };

    // Dropdown logic for "About"
    const isAboutOpen = ref(false); // controls About dropdown

    const toggleAbout = () => {
      isAboutOpen.value = !isAboutOpen.value;
    };

    const closeAbout = () => {
      isAboutOpen.value = false;
    };

    return {
      selectedGRC,
      selectGRC,
      isAboutOpen,
      toggleAbout,
      closeAbout,
    };
  },
});
</script>




<style>
.btn-signup {
  background-color: #006cbf;
  color: white;
  width: 130px;
}

.btn-signup:hover {
  background-color: #006cbf;
  color: white;
}

.nav-link.active {
  font-weight: bold;
  color: #006cbf !important;
}


/* Modal Header Gradient */
.bg-gradient-primary {
  /* background: linear-gradient(135deg, #4e73df, #1cc88a); */
  background-color: #0a4c7f;
}

/* Navigation Links */
.nav-link {
  color: #495057;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #f8f9fa;
  color: #006cbf;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

.nav-link.active {
  background-color: #006cbf;
  color: white !important;
  font-weight: 600;
}

/* Content Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Rounded modal corners */
.modal-content {
  border-radius: 1rem;
}
</style>
