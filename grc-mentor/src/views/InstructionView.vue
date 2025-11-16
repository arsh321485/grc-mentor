<template>
  <main class="instructions-page d-flex justify-content-center align-items-center">
    <div class="instructions-card  shadow-lg">

      <!-- Logo -->
      <div class="text-center p-lg-4 p-0">
        <img src="../assets/logo-img.png" alt="Logo" class="ins-logo"  />
      </div>

      <!-- Title -->
      <h2 class="fw-bold text-center heading">Assessment Instructions</h2>
      <p class="text-muted text-center ">
        Please read these instructions carefully before you begin.
      </p>

      <hr />

      <!-- Instructions List -->
      <div class="p-lg-4 p-3">
        <h5 class="fw-semibold ">📘 General Guidelines</h5>

        <ol class="instruction-list ">
          <li class="pb-1">
            📝 You will face <span class="badge bg-primary ">5 Questions</span>
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

        <!-- Rules Section -->
        <h5 class="fw-semibold ">⚡ Other Rules</h5>
        <ul class="instruction-list">
          <li class="pb-1 ">Complete the assessment in one sitting.</li>
          <li class="pb-1 ">Ensure a stable internet connection.</li>
          <li class="pb-1 ">It should take 5–10 minutes.</li>
          <li class="pb-1 ">Your data will remain private and secure.</li>
        </ul>
      </div>

      <!-- Buttons -->
      <div class="d-flex justify-content-between align-items-centerp-lg-4 p-3">
        <router-link
          to="/welcome"
          class="text-decoration-none fw-semibold active-text">
          ← Back
        </router-link>

        <router-link to="/assessment" class="btn btn-submit ">
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
.active-text {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);

  /* For Chrome, Safari, Edge */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* For Firefox + Standard Browsers */
  background-clip: text;
  color: transparent;


}
.ins-logo{
  height: 35px;
}


.instructions-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #81b0f7 0%, #8fb8f5 45%, #20c997 120%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.instructions-card {
  height: 630px;
  width: 620px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
}

.instruction-list li {

  font-size: 14px;
    color: #444;

}
.heading{
  color:#002B5B
}


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
  color: #FFFFFF;
}

/* ------------------------- */
/*   RESPONSIVE FIXES ONLY   */
/* ------------------------- */

/* 📱 Mobile (small screens) */
@media (max-width: 576px) {
  .instructions-card {
    padding: 2rem !important;
  }
  h2 {
    font-size: 1.4rem !important;
  }
  .instruction-list li,
  .rules-list li {
    font-size: 14px !important;
  }
  .btn-submit {
    font-size: 15px !important;
    padding: 10px 20px !important;
  }
}

/* Tablets */
@media (min-width: 577px) and (max-width: 992px) {
  .instructions-card {
    padding: 3rem !important;
  }
}

/* Laptops (1366px) */
@media (min-width: 993px) and (max-width: 1600px) {
  .instructions-card {
    padding: 3.5rem !important;
  }
}

/* Large Monitors (22–32 inch) */
@media (min-width: 1601px) and (max-width: 2560px) {
  .instructions-card {
    max-width: 900px;
  }
}

/* 4K Screens */
@media (min-width: 2561px) {
  .instructions-card {
    max-width: 1100px;
    padding: 4rem !important;
  }
}
</style>
