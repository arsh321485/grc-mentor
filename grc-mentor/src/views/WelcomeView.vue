<template>
  <main class="welcome-page">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center vh-100">
        <!-- Card Section -->
        <div class="col-12 col-md-10 col-lg-8 col-xl-7">
          <div class="welcome-card shadow-lg p-4 p-md-5 text-center mx-auto">
            <!-- Logo -->
            <div class="mb-4">
              <img src="../assets/logo-img.png" alt="GRC Mentor Logo" class="welcome-logo" />
            </div>

            <!-- Title -->
            <h1 class="welcome-title fw-semibold mb-4">
              Welcome to the Mentorship Qualification Program
            </h1>

            <!-- Subtitle -->
            <p class="welcome-subtitle mb-4">
              Please read these details carefully before starting the process.
            </p>

            <!-- Description -->
            <p class="intro-text mb-5">
              This process will help us understand your experience and guide you to the right mentorship track.
              It only takes a few minutes to begin.
            </p>

            <!-- CTA Button -->
            <router-link to="/profileset" class="btn-submit btn-lg px-5">
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
