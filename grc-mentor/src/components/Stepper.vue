<template>
  <div class="stepper-container">

    <!-- Logo -->
    <div class="stepper-logo">
      <img src="../assets/logo-img.png" alt="Logo" />
    </div>

    <!-- Steps -->
    <div class="steps">
      <div class="step" v-for="(step, index) in steps" :key="index">

        <!-- Step Circle -->
        <div class="circle" :class="{ active: currentStep === index + 1 }">
          <span v-if="currentStep === index + 1">
            <i class="bi bi-check2"></i>
          </span>
          <span v-else>{{ index + 1 }}</span>
        </div>

        <!-- Step Text -->
        <p :class="{ 'active-text': currentStep === index + 1 }">
          {{ step }}
        </p>

        <!-- Connecting Line -->
        <div class="line" v-if="index !== steps.length - 1"></div>

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

/* ----------------------------------------
   📌 DEFAULT DESKTOP – Vertical Stepper
---------------------------------------- */

.stepper-container {
  background: #f6f6f8;
  width: 100%;
  max-width: 300px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 992px) {
  .stepper-container {
    min-height: 100vh;
  }
}

.steps {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Logo */
.stepper-logo {
  margin-bottom: 35px;
}

.stepper-logo img {
  height: 22px;
  object-fit: contain;
}

/* Step Circle */
.circle {
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #777;
  font-size: 14px;
  transition: 0.25s ease;
}

.circle.active {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  color: white;
  border: none;
}

/* Step Text */
.step p {
  margin-top: 6px;
  font-size: 15px;
  color: #777;
  text-align: center;
  max-width: 160px;
}

.active-text {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

/* Vertical Line */
.line {
  height: 30px;
  border-left: 2px dotted #ccc;
  margin: 4px 0;
}


/* ----------------------------------------
   📱 MOBILE & TABLET – Horizontal Stepper
---------------------------------------- */

@media (max-width: 768px) {
  .stepper-container {
    flex-direction: row;
    max-width: 100%;
    padding: 15px;
    overflow-x: auto;
    gap: 20px;
  }

  .stepper-logo {
    margin: 0;
    flex-shrink: 0;
  }

  .steps {
    flex-direction: row;
    align-items: flex-start;
    gap: 25px;
  }

  .step {
    min-width: 90px;
    flex-direction: column;
    align-items: center;
  }

  /* Horizontal Line */
  .line {
    border-left: none;
    border-top: 2px dotted #ccc;
    width: 40px;
    height: 2px;
    margin: 10px auto 0;
  }

  /* Smaller fonts on small screens */
  .step p {
    font-size: 12px;
    max-width: 90px;
  }

  .circle {
    height: 30px;
    width: 30px;
  }
}

/* ----------------------------------------
   📱 EXTRA SMALL DEVICES (below 480px)
---------------------------------------- */

@media (max-width: 480px) {

  .step {
    min-width: 75px;
  }

  .step p {
    font-size: 11px;
    max-width: 70px;
  }

  .circle {
    height: 28px;
    width: 28px;
  }

  .line {
    width: 25px;
  }
}
</style>
