<template>
  <div class="stepper-container">
    <!-- <h6 class="stepper-title">
      <span class="dot"></span> GRC Mentor
    </h6> -->

    <div>
      <img src="../assets/logo-img.png" alt="" style="height: 20px; padding-left: 20px;margin-bottom: 20px; ">
    </div>

    <div class="steps">
      <div v-for="(step, index) in steps" :key="index" class="step">
        <!-- Step Circle -->
        <div class="circle" :class="{ active: currentStep === index + 1 }">
          <span v-if="currentStep === index + 1"><i class="bi bi-check2"></i></span>
          <span v-else>{{ index + 1 }}</span>
        </div>

        <!-- Step Text -->
        <p :class="{ 'active-text': currentStep === index + 1 }">
          {{ step }}
        </p>

        <!-- Dotted line (except last step) -->
        <div v-if="index !== steps.length - 1" class="line"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Stepper",
  props: {
    currentStep: {
      type: Number,
      default: 1, // Default first step active
    },
  },
  data() {
    return {
      steps: [
        "Qualification",
        "Payment",
        "Onboarding",
        "Communication",
        "Work Time",
      ],
    };
  },
};
</script>

<style scoped>
/* Container */
.stepper-container {
  background: #F6F6F8;
  padding: 20px;
  width: 100%;
  max-width: 280px;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Title */
.stepper-title {
  display: flex;
  align-items: center;
  color: #121212;
  font-size: 17px;
  font-weight: 650;
  margin-bottom: 40px;
}

.dot {
  height: 16px;
  width: 16px;
  background: linear-gradient(180deg, #9FE2FF 0%, #0096D6 100%);
  border-radius: 50%;
  margin-right: 8px;
  margin-left: 20px;

}

/* Steps */
.steps {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Step Circle */
.circle {
  height: 34px;
  width: 34px;
  border-radius: 50%;
  border: 2px solid #bbb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00000099;
  background: #fff;
}

.circle.active {
  background: #0083BB;
  color: #fff;
  border: none;
}

/* Step Text */
p {
  font-size: 16px;
  color: #00000099;
  margin-top: 6px;

}

.active-text {
  color: #0083BB;
  font-weight: 600;
}

/* Dotted Line */
.line {
  border-left: 2px dotted #bbb;
  height: 30px;
  margin: 4px 0;
}

/* Responsive */
@media (max-width: 768px) {
  .stepper-container {
    max-width: 100%;
    padding: 15px;
  }

  .circle {
    height: 28px;
    width: 28px;
    font-size: 12px;
  }

  p {
    font-size: 13px;
  }
}
</style>
