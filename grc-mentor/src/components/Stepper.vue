<template>
  <div class="stepper-container">
    <!-- Logo -->
    <div class="stepper-logo">
      <img src="../assets/logo-img.png" alt="Logo" />
    </div>

    <!-- Steps -->
    <div class="steps">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="step"
      >
        <!-- Step Circle -->
        <div
          class="circle"
          :class="{ active: currentStep === index + 1 }"
        >
          <span v-if="currentStep === index + 1">
            <i class="bi bi-check2"></i>
          </span>
          <span v-else>{{ index + 1 }}</span>
        </div>

        <!-- Step Text -->
        <p :class="{ 'active-text': currentStep === index + 1 }">
          {{ step }}
        </p>

        <!-- Line -->
        <div v-if="index !== steps.length - 1" class="line"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "StepperBar",
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      steps: [
        "Upload your CV",
        "Assessment",
        "Mentorship Payment",
        "Onboarding",
        "Connect Mattermost",
      ],
    };
  },
};
</script>

<style scoped>
/* Stepper Wrapper */
.stepper-container {
  background: #f6f6f8;
  width: 100%;
  max-width: 300px;
  min-height: 100vh; /* Full height sidebar look */
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Logo */
.stepper-logo {
  margin-bottom: 40px;
}
.stepper-logo img {
  height: 32px;
  max-width: 100%;
  object-fit: contain;
}

/* Steps */
.steps {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Circle */
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
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  color: #fff;
  border: none;
}

/* Text */
p {
  font-size: 15px;
  color: #00000099;
  margin-top: 6px;
}
.active-text {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

/* Line */
.line {
  border-left: 2px dotted #bbb;
  height: 30px;
  margin: 4px 0;
}

/* Responsive */
@media (max-width: 768px) {
  .stepper-container {
    flex-direction: row;
    min-height: auto;
    max-width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 15px;
    overflow-x: auto;
  }
  .stepper-logo {
    margin: 0 20px 0 0;
    flex-shrink: 0;
  }
  .steps {
    flex-direction: row;
  }
  .step {
    flex: 1;
    min-width: 80px;
  }
  .line {
    border-left: none;
    border-top: 2px dotted #bbb;
    width: 40px;
    height: 2px;
    margin: 16px auto;
  }
  p {
    font-size: 12px;
  }
}
</style>
