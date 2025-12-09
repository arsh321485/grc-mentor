<template>
  <main class="welcome-page page">
    <div class="container-fluid welcome-container">
      <div class="row justify-content-center min-vh-100 align-items-center welcome-row">

        <!-- CARD -->
        <div class="col-12 col-md-10 col-lg-8 col-xl-7">
          <div class="card shadow-lg p-4 p-md-5 text-center welcome-card mx-auto">

            <!-- Logo -->
            <div class="mb-4">
              <img src="../assets/logo-img.png" alt="Logo" class="welcome-logo" />
            </div>

            <!-- Title -->
            <h1 class="fw-bold mb-4 welcome-title">
              Welcome to the Mentorship Qualification Program
            </h1>

            <!-- Subtitle -->
            <p class="text-muted mb-4 welcome-subtitle">
              Please read these details carefully before starting the process.
            </p>

            <!-- Intro -->
            <p class="text-muted mb-5 intro-text">
              This process will help us understand your experience and guide you
              to the right mentorship track. It only takes a few minutes.
            </p>

            <!-- CTA -->
            <router-link to="/profileset" class="btn-submit btn-lg p-2">
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

/* PAGE BG */
.welcome-page {
  background: linear-gradient(135deg, #81b0f7 0%, #8fb8f5 45%, #20c997 120%);
}

/* CARD */
.welcome-card {
  border-radius: 20px;
  background: #fff;
}

/* LOGO */
.welcome-logo {
  height: 70px;
}

/* TEXT */
.welcome-title {
  font-size: 1.9rem;
  line-height: 1.3;
}

.welcome-subtitle {
  font-size: 1.15rem;
}

.intro-text {
  max-width: 750px;
  margin: 0 auto;
  font-size: 1.05rem;
}

/* BUTTON SIZE */
.btn-submit {
   background-color: #0096d6;
  /* background-color: rgb(49, 117, 49); */
   /* background: linear-gradient(135deg, #81b0f7 0%, #8fb8f5 45%, #20c997 120%); */
  color: #fff;
  border-radius: 10px;
  font-weight: 600;
}

/* ---------------------------------------------- */
/* RESPONSIVE — WITHOUT CHANGING ANY UI ELEMENT   */
/* ---------------------------------------------- */

/* 📱 Mobile (UI preserved) */
@media (max-width: 576px) {
  .welcome-card {
    padding: 2rem 1.2rem !important;
  }
  .welcome-title {
    font-size: 1.4rem;
  }
  .welcome-subtitle {
    font-size: 1rem;
  }
  .intro-text {
    font-size: 0.95rem;
  }
}

/* 🖥 Larger Desktops */
@media (min-width: 1200px) {
  .welcome-card {
    max-width: 950px;
  }
  .welcome-title {
    font-size: 2.2rem;
  }
}

@media (min-width: 1600px) {
  .welcome-card {
    max-width: 1050px;
  }
  .welcome-title {
    font-size: 2.4rem;
  }
}

@media (min-width: 2000px) {
  .welcome-card {
    max-width: 1150px;
  }
  .welcome-title {
    font-size: 2.6rem;
  }
  .intro-text {
    font-size: 1.2rem;
  }
}

/* ⭐ FIX FOR IPAD / MEDIUM HEIGHT SCREENS */
/* Prevents logo/card from shifting upward */
@media (max-height: 900px) and (min-width: 600px) {
  .welcome-row {
    align-items: flex-start !important;
    padding-top: 60px !important;
    padding-bottom: 40px !important;
    overflow-y: auto !important;
  }
}
</style>
