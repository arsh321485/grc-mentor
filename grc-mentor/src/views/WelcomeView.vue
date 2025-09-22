<!--
<template>
  <main>
    <div class="container-fluid row">
       <div class="col-2 col-md-2">
        <Stepper :currentStep="1" />
      </div>
  <div class="col-10 col-md-10 container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
  <div class="mb-4">
      <img src="../assets/logo-img.png" alt="Logo" style="height: 60px;" />
    </div>

    <h1 class="fw-bold mb-3" >Welcome to the Mentorship Qualification Program</h1>


    <p class="text-muted mb-4" style="max-width: 500px;">
      This process will help us understand your experience and guide you
      to the right mentorship track. It only takes a few minutes.
    </p>


    <router-link to="/profileset" class="btn btn-submit  btn-lg px-5">
      Start Qualification
    </router-link>

  </div>

    </div>
  </main>
</template>

<script lang="ts">
import Stepper from '@/components/Stepper.vue';

export default {
  name: "WelcomeView",
  components: { Stepper },
};

</script>
<style scoped>
.btn-submit {
    border-radius: 30px;
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    background-color: #0096D6;
    color: #FFFFFF;
}

.btn-submit:hover {
    border-radius: 30px;
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    background-color: #0096D6;
    color: #FFFFFF;
}

</style> -->
<template>
  <main class="welcome-page">
    <div class="container-fluid row">
      <!-- Stepper Section -->
      <div class="col-2 col-md-2">
        <!-- <Stepper :currentStep="1" /> -->
      </div>

      <!-- Card Section -->
      <div class="col-10 col-md-10 d-flex justify-content-center align-items-center vh-100">
        <div class="card shadow-lg p-5 text-center welcome-card">
          <!-- Logo -->
          <div class="mb-4">
            <img src="../assets/logo-img.png" alt="Logo" style="height: 80px;" />
          </div>

          <!-- Title -->
          <h1 class="fw-bold mb-4 display-6">
            Welcome to the Mentorship Qualification Program
          </h1>

          <!-- Subtitle (optional) -->
          <p class="text-muted mb-4 fs-5">
            Please read these details carefully before starting the process.
          </p>

          <!-- Intro Text -->
          <p class="text-muted mb-5" style="max-width: 800px; margin: 0 auto; font-size: 18px;">
            This process will help us understand your experience and guide you
            to the right mentorship track. It only takes a few minutes.
          </p>

          <!-- CTA -->
          <router-link to="/profileset" class="btn btn-submit btn-lg px-5">
            Let's Go
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
// import Stepper from '@/components/Stepper.vue';

export default {
  name: "WelcomeView",
  // components: { Stepper },
};
</script>

<style scoped>
/* Background like your screenshot */
.welcome-page {
  min-height: 100vh;
  background: linear-gradient(to right, #8EC5FC, #E0C3FC);
  /* padding: 20px; */
}

/* Bigger + Taller card styling */
.welcome-card {
  border-radius: 20px;
  max-width: 1400px;   /* wide */
  width: 100%;
  min-height: 75vh;    /* taller card (75% of screen height) */
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* center content inside */
}

/* Button styling */
.btn-submit {
  border-radius: 30px;
  padding: 14px 40px;
  font-size: 18px;
  font-weight: 600;
  background-color: #0096D6;
  color: #FFFFFF;
  transition: all 0.3s ease-in-out;
}

.btn-submit:hover {
  background-color: #007bb5;
}
</style>
