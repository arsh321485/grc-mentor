<template>
  <main class="instructions-page d-flex justify-content-center align-items-center">
    <div class="instructions-card shadow-lg">

      <!-- Logo -->
      <div class="text-center mt-0">
        <img src="../assets/logo-img.png" alt="Logo" class="ins-logo" />
      </div>

      <!-- Title -->
      <h2 class="fw-bold text-center heading">Assessment Instructions</h2>
      <p class="text-muted text-center">
        Please read these instructions carefully before you begin.
      </p>

      <hr />

      <!-- Instructions List -->
      <div>
        <h5 class="fw-semibold mb-3">📘 General Guidelines</h5>

        <ol class="instruction-list">
          <li class="pb-1">
            📝 You will face <span class="badge bg-primary">5 Questions</span>
            related to your background and skills.
          </li>
          <li class="pb-1">✅ Answer each question honestly and clearly.</li>
          <li class="pb-1">🔄 Questions may be multiple-choice or short answers.</li>
          <li class="pb-1">
            ⏳ You will get
            <span class="badge bg-warning text-dark mx-1">5 Seconds</span> per question.
            Unanswered questions will skip automatically.
          </li>
          <li class="pb-1">🎯 Your responses will decide your mentorship track.</li>
        </ol>

        <h5 class="fw-semibold mb-3">⚡ Other Rules</h5>
        <ul class="instruction-list">
          <li class="pb-1">Complete the assessment in one sitting.</li>
          <li class="pb-1">Ensure a stable internet connection.</li>
          <li class="pb-1">It should take 5–10 minutes.</li>
          <li class="pb-1">Your data will remain private and secure.</li>
        </ul>
      </div>

      <!-- Buttons -->
      <div class="d-flex justify-content-between align-items-center">
        <router-link to="/welcome" class="text-decoration-none fw-semibold active-text">
          ← Back
        </router-link>

        <router-link to="/assessment" class="btn btn-submit px-4">
          Start Assessment
        </router-link>
      </div>

    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: "InstructionView",
};
</script>

<style scoped>
/* ------------------ */
/* Gradient Text Link */
/* ------------------ */
.active-text {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* Logo */
.ins-logo {
  height: 35px;
}

/* Page Background */
.instructions-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #81b0f7 0%, #8fb8f5 45%, #20c997 120%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Helps mobile screens */
}

/* ------------------ */
/* Main Card */
/* ------------------ */
.instructions-card {
  min-height: 630px;      /* keep same look */
  height: auto;           /* allow growing */
  max-width: 620px;       /* same width as your design */
  width: 100%;            /* responsive */
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
  padding: 2rem 2.5rem;
}

/* Text */
.instruction-list li {
  font-size: 14px;
  color: #444;
}

.heading {
  color: #002B5B;
}

/* Button */
.btn-submit {
  border-radius: 10px;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  color: #FFFFFF;
}

.btn-submit:hover {
  background-color: #0096D6;
}

/* ------------------------------------------- */
/* 📱 MOBILE */
/* ------------------------------------------- */
@media (max-width: 576px) {
  .instructions-card {
    padding: 1.7rem !important;
    max-width: 95%;
    min-height: auto;
  }

  h2.heading {
    font-size: 1.35rem !important;
  }

  .instruction-list li {
    font-size: 13px !important;
  }

  .btn-submit {
    font-size: 14px !important;
    padding: 10px 18px !important;
  }
}

/* ------------------------------------------- */
/* 📱 TABLETS (iPad Mini / Air / Android) */
/* ------------------------------------------- */
@media (min-width: 577px) and (max-width: 992px) {
  .instructions-card {
    max-width: 500px;
    padding: 2.8rem !important;
  }
}

/* ------------------------------------------- */
/* 💻 LAPTOPS */
/* ------------------------------------------- */
@media (min-width: 993px) and (max-width: 1600px) {
  .instructions-card {
    max-width: 620px;
    padding: 3rem !important;
  }
}

/* ------------------------------------------- */
/* 🖥 LARGE DESKTOPS / MONITORS */
/* ------------------------------------------- */
@media (min-width: 1601px) and (max-width: 2560px) {
  .instructions-card {
    max-width: 750px;
    padding: 3.5rem !important;
  }
}

/* ------------------------------------------- */
/* 🖥🖥 4K & ULTRAWIDE */
/* ------------------------------------------- */
@media (min-width: 2561px) {
  .instructions-card {
    max-width: 900px;
    padding: 4rem !important;
  }
}

/* ------------------------------------------- */
/* 📏 HEIGHT FIX FOR SMALL VERTICAL SCREENS */
/* ------------------------------------------- */
@media (max-height: 850px) {
  .instructions-page {
    align-items: flex-start !important;
    overflow-y: auto;
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
}
</style>
