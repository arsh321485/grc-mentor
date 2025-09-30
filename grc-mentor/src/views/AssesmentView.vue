<template>
  <main class="mentorship-page">
    <div class="container-fluid">
      <div class="row g-4">
        <!-- Stepper Left Column -->
        <div class="col-12 col-md-2 mb-4 mb-md-0">
          <Stepper :currentStep="2" />
        </div>

        <!-- Right Main Column -->
        <div class="col-12 col-md-10">
          <!-- Banner -->
          <div class="banner mb-4 flex-wrap">
            <div class="banner-left mb-3 mb-md-0">
              <h6 class="banner-title">Qualification Assessment</h6>
              <p class="banner-sub">
                Answer a few quick questions to map you to the right track.
              </p>
            </div>
            <div class="d-flex align-items-center gap-2 ms-auto flex-wrap">
              <span class="badge bg-light text-dark rounded-pill px-3 py-2">
                ⏳ {{ timeLeft }}s
              </span>
              <span class="badge bg-light text-dark rounded-pill px-3 py-2">
                Q {{ currentIndex + 1 }} / {{ questions.length }}
              </span>
            </div>
          </div>

          <!-- Assessment Section -->
          <section>
            <div class="row justify-content-center align-items-stretch g-4">
              <!-- Question Card -->
              <div class="col-lg-8 col-md-7 col-12">
                <div class="card border-0 shadow-sm h-100">
                  <div class="card-body p-4 p-md-5">
                    <!-- Progress -->
                    <div class="mb-4">
                      <div
                        class="d-flex justify-content-between align-items-center mb-2 flex-wrap"
                      >
                        <span class="small text-muted">Progress</span>
                        <span class="small fw-semibold">{{
                          progressPercent
                        }}%</span>
                      </div>
                      <div
                        class="progress progress-animated w-100"
                        style="height: 10px"
                      >
                        <div
                          class="progress-bar"
                          role="progressbar"
                          :style="{ width: progressPercent + '%' }"
                          :aria-valuenow="progressPercent"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>

                    <!-- Question -->
                    <div class="mb-4">
                      <div class="d-flex align-items-start gap-2 mb-2">
                        <span class="q-num">{{ currentIndex + 1 }}</span>
                        <h5 class="mb-0">{{ currentQuestion.text }}</h5>
                      </div>

                      <!-- Options -->
                      <div class="row g-3">
                        <div
                          v-for="(opt, i) in currentQuestion.options"
                          :key="i"
                          class="col-12"
                        >
                          <label
                            class="option-tile d-flex align-items-center p-3 border rounded-3"
                            :class="{
                              selected: selectedOptionIndex === i,
                              saved:
                                answers[currentIndex] === i &&
                                selectedOptionIndex !== i,
                            }"
                            @click="selectedOptionIndex = i"
                          >
                            <input
                              class="form-check-input me-3"
                              type="radio"
                              :name="'q' + currentIndex"
                              :value="i"
                              v-model="selectedOptionIndex"
                            />
                            <div class="flex-grow-1">
                              <div class="fw-semibold">{{ opt }}</div>
                            </div>
                            <i
                              class="bi bi-check2-circle ms-2"
                              v-if="selectedOptionIndex === i"
                            ></i>
                          </label>
                        </div>
                      </div>
                    </div>

                    <!-- Helper -->
                    <div
                      class="d-flex align-items-center gap-2 text-muted small mt-2 flex-wrap"
                    >
                      <span
                        class="status-dot"
                        :class="{
                          online:
                            answers[currentIndex] !== null ||
                            selectedOptionIndex !== null,
                        }"
                      />
                      <span>Selections auto-save as you navigate.</span>
                    </div>

                    <!-- CTAs -->
                    <div
                      class="d-flex justify-content-between align-items-center mt-4 flex-wrap"
                    >
                      <div class="d-flex gap-2">
                        <button
                          v-if="!isLast"
                          class="btn btn-submit"
                          :disabled="selectedOptionIndex === null || isSubmitting"
                          @click="goNext"
                        >
                          Next
                          <i class="bi bi-arrow-right-short ms-1"></i>
                        </button>
                        <button
                          v-else
                          class="btn btn-success"
                          :disabled="selectedOptionIndex === null || isSubmitting"
                          @click="submitAssessment"
                        >
                          Submit
                          <i class="bi bi-bar-chart-line ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Timer Box -->
              <div class="col-lg-4 col-md-5 col-12">
                <div
                  class="timer-box d-flex flex-column align-items-center justify-content-center p-4 shadow-sm rounded-3 h-100"
                >
                  <div class="base-timer">
                    <svg
                      class="base-timer__svg"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g class="base-timer__circle">
                        <circle
                          class="base-timer__path-elapsed"
                          cx="50"
                          cy="50"
                          r="45"
                        />
                        <path
                          :stroke-dasharray="dasharray"
                          class="base-timer__path-remaining"
                          :class="remainingPathColor"
                          d="
                            M 50, 50
                            m -45, 0
                            a 45,45 0 1,0 90,0
                            a 45,45 0 1,0 -90,0
                          "
                        />
                      </g>
                    </svg>
                    <span class="base-timer__label">{{ timeLeft }}s</span>
                  </div>
                  <small class="mt-2 text-muted">Time left</small>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Stepper from "@/components/Stepper.vue";

export default {
  name: "QualificationAssessment",
  components: { Stepper },
  data() {
    return {
      currentIndex: 0,
      answers: [],
      isSubmitting: false,
      timeLeft: 5,
      timer: null,
      questions: [
        { id: 1, text: "Which domain does GRC primarily relate to?", options: ["Marketing", "Governance, Risk & Compliance", "DevOps", "UI/UX"], correctIndex: 1 },
        { id: 2, text: "A key purpose of risk assessment is to:", options: ["Eliminate all risks", "Identify, analyze, and prioritize risks", "Approve budgets", "Hire auditors"], correctIndex: 1 },
        { id: 3, text: "Which is commonly used in compliance frameworks?", options: ["ISO 27001", "CSS Grid", "JWT", "TCP/IP"], correctIndex: 0 },
        { id: 4, text: "Internal controls are designed to:", options: ["Increase UI animations", "Reduce risk and ensure policy adherence", "Speed up frontend builds", "Replace audits"], correctIndex: 1 },
        { id: 5, text: "Which role typically owns overall GRC strategy?", options: ["CFO", "CIO", "CISO/Chief Risk Officer", "UI Lead"], correctIndex: 2 },
      ],
      selectedOptionIndex: null,
      FULL_DASH_ARRAY: 283,
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIndex];
    },
    isLast() {
      return this.currentIndex === this.questions.length - 1;
    },
    progressPercent() {
      const filled = Math.min(this.currentIndex + 1, this.questions.length);
      return Math.round((filled / this.questions.length) * 100);
    },
    dasharray() {
      const rawTimeFraction = this.timeLeft / 5;
      return `${(rawTimeFraction * this.FULL_DASH_ARRAY).toFixed(0)} ${this.FULL_DASH_ARRAY}`;
    },
    remainingPathColor() {
      if (this.timeLeft <= 2) return "red";
      if (this.timeLeft <= 3) return "orange";
      return "green";
    },
  },
  created() {
    this.answers = Array(this.questions.length).fill(null);
    this.startTimer();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    startTimer() {
      this.timeLeft = 5;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.timer);
          setTimeout(() => this.autoSkip(), 500);
        }
      }, 1000);
    },
    autoSkip() {
      this.answers[this.currentIndex] = this.selectedOptionIndex;
      if (!this.isLast) {
        this.currentIndex++;
        this.selectedOptionIndex = this.answers[this.currentIndex];
        this.startTimer();
      } else {
        clearInterval(this.timer);
        this.submitAssessment();
      }
    },
    goNext() {
      this.answers[this.currentIndex] = this.selectedOptionIndex;
      if (!this.isLast) {
        this.currentIndex++;
        this.selectedOptionIndex = this.answers[this.currentIndex];
        this.startTimer();
      } else {
        clearInterval(this.timer);
        this.submitAssessment();
      }
    },
    submitAssessment() {
      this.isSubmitting = true;
      this.answers[this.currentIndex] = this.selectedOptionIndex;
      const score = this.answers.reduce((acc, ans, idx) => acc + (ans === this.questions[idx].correctIndex ? 1 : 0), 0);
      const level = score >= Math.ceil(this.questions.length * 0.7) ? "GRC 301" : "GRC 101";
      this.$router.push({ name: "result", query: { score: String(score), total: String(this.questions.length), level } });
      this.isSubmitting = false;
    },
  },
};
</script>

<style scoped>
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  padding: 30px;
  font-family: "Inter", sans-serif;
}

/* Banner */
.banner {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px 25px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.banner-title {
  font-size: 16px;
  font-weight: 600;
}
.banner-sub {
  font-size: 13px;
  opacity: 0.9;
}

/* Status Dot */
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ced4da;
}
.status-dot.online {
  background: #20c997;
}

/* Buttons */
.btn-submit {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  border: none;
  border-radius: 22px;
  padding: 10px 28px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
}

/* Timer Box */
.timer-box {
  background: #fff;
  min-height: 100%;
}
.base-timer {
  position: relative;
  width: 140px;
  height: 140px;
  margin: auto;
}
.base-timer__svg {
  transform: scaleX(-1);
}
.base-timer__circle {
  fill: none;
  stroke: none;
}
.base-timer__path-elapsed {
  stroke-width: 7px;
  stroke: #f0f0f0;
}
.base-timer__path-remaining {
  stroke-width: 7px;
  stroke-linecap: round;
  transition: 1s linear all;
  fill-rule: nonzero;
  stroke: currentColor;
}
.base-timer__label {
  position: absolute;
  width: 140px;
  height: 140px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
}
.base-timer__path-remaining.green {
  color: #20c997;
}
.base-timer__path-remaining.orange {
  color: #f1c40f;
}
.base-timer__path-remaining.red {
  color: #e74c3c;
}

/* Responsive Adjustments */
@media (max-width: 1200px) {
  .banner {
    flex-direction: column;
    align-items: flex-start;
  }
  .col-lg-8,
  .col-lg-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .timer-box {
    margin-top: 20px;
    height: auto !important;
  }
}
@media (max-width: 768px) {
  .banner-title {
    font-size: 14px;
  }
  .banner-sub {
    font-size: 12px;
  }
  .base-timer {
    width: 100px;
    height: 100px;
  }
  .base-timer__label {
    font-size: 18px;
  }
}
</style>
