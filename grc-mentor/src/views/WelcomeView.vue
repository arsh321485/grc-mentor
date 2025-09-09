<!-- <template>
  <main class="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
 
    <div class="mb-4">
      <img src="../assets/logo-img.png" alt="Logo" style="height: 60px;" />
    </div>

    <h1 class="fw-bold mb-3" >Welcome to the Mentorship Qualification Program</h1>

 
    <p class="text-muted mb-4" style="max-width: 500px;">
      This process will help us understand your experience and guide you 
      to the right mentorship track. It only takes a few minutes.
    </p>

    <router-link to="/assessment" class="btn btn-submit  btn-lg px-5">
      Start Qualification
    </router-link>
  </main>
</template> -->









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

    <!-- Title -->
    <h1 class="fw-bold mb-3" >Welcome to the Mentorship Qualification Program</h1>

    <!-- Intro Text -->
    <p class="text-muted mb-4" style="max-width: 500px;">
      This process will help us understand your experience and guide you 
      to the right mentorship track. It only takes a few minutes.
    </p>

    <!-- CTA -->
    <router-link to="/assessment" class="btn btn-submit  btn-lg px-5">
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

</style>
