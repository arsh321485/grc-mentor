<template>
  <main class="welcome-page page">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center vh-100">
        <!-- Card Section -->
        <div class="col-12 col-md-10 col-lg-8 col-xl-7">
          <div class="card shadow-lg p-4 p-md-5 text-center welcome-card mx-auto">
            <!-- Logo -->
            <div class="mb-4">
              <img src="../assets/logo-img.png" alt="Logo" class="welcome-logo" />
            </div>

            <!-- Title -->
            <h1 class="fw-bold mb-4 display-6 welcome-title">
              Welcome to the Mentorship Qualification Program
            </h1>

            <!-- Subtitle -->
            <p class="text-muted mb-4 fs-5 welcome-subtitle">
              Please read these details carefully before starting the process.
            </p>

            <!-- Intro Text -->
            <p class="text-muted mb-5 intro-text">
              This process will help us understand your experience and guide you
              to the right mentorship track. It only takes a few minutes.
            </p>

            <!-- CTA -->
            <router-link to="/profileset" class=" btn-submit btn-lg px-5">
              Let's Go
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: "WelcomeView",
};
</script>

