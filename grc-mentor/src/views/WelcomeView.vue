<template>
  <main class="welcome-page">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center vh-100">
        <!-- Card Section -->
        <div class="col-12 col-md-10 col-lg-8 col-xl-7">
          <div class="card shadow-lg p-4 p-md-5 text-center welcome-card mx-auto">
            <!-- Logo -->
            <div class="mb-4">
              <img src="../assets/logo-img.png" alt="Logo" class="logo-img" />
            </div>

            <!-- Title -->
            <h1 class="fw-bold mb-4 display-6">
              Welcome to the Mentorship Qualification Program
            </h1>

            <!-- Subtitle -->
            <p class="text-muted mb-4 fs-5">
              Please read these details carefully before starting the process.
            </p>

            <!-- Intro Text -->
            <p class="text-muted mb-5 intro-text">
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
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: "WelcomeView",
};
</script>

<style scoped>
/* Background */
.welcome-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #81b0f7 0%, #8fb8f5 45%, #20c997 120%);
  font-family: "Inter", sans-serif;
}

/* Card */
.welcome-card {
  border-radius: 20px;
  max-width: 1400px;
  width: 120%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Logo */
.logo-img {
  height: 80px;
  max-width: 100%;
}

/* Intro text */
.intro-text {
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
}

/* Button */
.btn-submit {
  border-radius: 30px;
  padding: 14px 40px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  transition: all 0.3s ease-in-out;
}
.btn-submit:hover {
  background: linear-gradient(90deg, #2f80ed, #2d9cdb);
}

/* --- Global fix: prevent horizontal scroll --- */
html,
body {
  max-width: 100%;
  overflow-x: hidden;
}

.container-fluid {
  padding-left: 15px !important;
  padding-right: 15px !important;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
  box-sizing: border-box;
}

/* --- Media Queries for Specific Desktop Sizes --- */

/* 1366×768 (budget laptop screens) */
@media screen and (max-width: 1366px) {
  .container-fluid {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .intro-text {
    font-size: 16px;
  }
  .btn-submit {
    font-size: 16px;
    padding: 12px 30px;
  }
}

/* 1920×1080 (Full HD office monitors) */
@media screen and (min-width: 1367px) and (max-width: 1920px) {
  .container-fluid {
    max-width: 1600px;
  }
}

/* 2560×1440 (QHD monitors) */
@media screen and (min-width: 1921px) and (max-width: 2560px) {
  .container-fluid {
    max-width: 1800px;
  }
  .intro-text {
    font-size: 19px;
  }
}

/* 3840×2160 (4K displays) */
@media screen and (min-width: 2561px) {
  .container-fluid {
    max-width: 2000px;
  }
  .intro-text {
    font-size: 20px;
  }
  .btn-submit {
    font-size: 20px;
    padding: 14px 40px;
  }
}
</style>
