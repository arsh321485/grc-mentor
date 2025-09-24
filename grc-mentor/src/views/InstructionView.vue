<template>
  <main class="instructions-page d-flex justify-content-center align-items-center">
    <div class="instructions-card p-5 shadow-lg">
      <!-- Logo -->
      <div class="text-center mb-4">
        <img src="../assets/logo-img.png" alt="Logo" style="height: 55px;" />
      </div>

      <!-- Title -->
      <h2 class="fw-bold text-center mb-2" style="color:#002B5B;">Assessment Instructions</h2>
      <p class="text-muted text-center mb-4">
        Please read these instructions carefully before you begin.
      </p>

      <!-- Divider -->
      <hr />

      <!-- Instructions List -->
      <div class="text-start">
        <h5 class="fw-semibold mb-3">📘 General Guidelines</h5>
        <ol class="instruction-list mb-4">
          <li>
            📝 You will face <span class="badge bg-primary mx-1">5 Questions</span>
            related to your background and skills.
          </li>
          <li>✅ Answer each question honestly and clearly.</li>
          <li>🔄 Questions may be multiple-choice or short answers.</li>
          <li>
            ⏳ You will get
            <span class="badge bg-warning text-dark mx-1">5 Seconds</span> per question.
            Unanswered questions will skip automatically.
          </li>
          <li>🎯 Your responses will decide your mentorship track.</li>
        </ol>

        <!-- Rules Section -->
        <h5 class="fw-semibold mb-3">⚡ Other Rules</h5>
        <ul class="rules-list">
          <li>Complete the assessment in one sitting.</li>
          <li>Ensure a stable internet connection.</li>
          <li>It should take 5–10 minutes.</li>
          <li>Your data will remain private and secure.</li>
        </ul>
      </div>

      <!-- Buttons -->
      <div class="d-flex justify-content-between align-items-center mt-5">
        <router-link
          to="/welcome"
          class="text-decoration-none fw-semibold active-text">
          &larr; Back
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
.active-text {
  /* color: #0083BB; */
 /* color: linear-gradient(90deg, #2d9cdb, #2f80ed); */
 background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  -webkit-background-clip: text;  /* For Chrome, Safari */
  -webkit-text-fill-color: transparent;
  background-clip: text;          /* Standard */
  color: transparent;
  font-weight: 600;
}
.instructions-page {
  min-height: 100vh;
  /* background:  #cad1f8; */
    background: linear-gradient( 135deg, #81b0f7 0%, #8fb8f5 45%, #20c997 120%);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.instructions-card {
  max-width: 800px;
  width: 100%;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
}

.instruction-list li {
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 1.6;
}

.rules-list li {
  margin-bottom: 8px;
  font-size: 15px;
  color: #444;
}

.btn-submit {

    border-radius: 30px;
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    background: linear-gradient(90deg, #2d9cdb, #2f80ed);
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
</style>
