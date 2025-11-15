<template>
  <main class="mentorship-page">
    <div class="container-fluid">

      <div class="row g-4 ">

        <!-- LEFT STEPPER -->
        <div class="col-12 col-md-2 stepper-col p-0">
          <Stepper :currentStep="2" />
        </div>

        <!-- RIGHT CONTENT -->
        <div class="col-12 col-md-10">

          <!-- Banner -->
          <div class="banner mt-3 flex-wrap">
            <div class="">
              <h6 class="banner-title">Qualification Assessment</h6>
              <p class="banner-sub">
                Answer a few quick questions to map you to the right track.
              </p>
            </div>

            <div class="d-flex align-items-center gap-2 ms-auto flex-wrap">
              <span class="badge bg-light text-dark rounded-pill  ">
                Q {{ currentIndex + 1 }} / {{ questions.length }}
              </span>
            </div>
          </div>

          <!-- Assessment Section -->
          <section>
            <div class="row justify-content-center align-items-stretch g-4 m-0 ">

              <!-- Question Card -->
              <div class="col-lg-8 col-md-7 col-12 px-2 text-size">
                <div class="card  border-0 shadow-sm card-size">
                  <div class="card-body p-4 p-md-5">

                    <!-- Progress -->
                    <div class="mb-4">
                      <div class="d-flex justify-content-between align-items-center  flex-wrap">
                        <span class="small text-muted mb-1">Progress</span>
                        <span class="small fw-semibold">{{ progressPercent }}%</span>
                      </div>

                      <div class="progress progress-animated w-100" >
                        <div
                          class="progress-bar"
                          :style="{ width: progressPercent + '%' }"
                        ></div>
                      </div>
                    </div>

                    <!-- Question -->
                    <div class="mb-4">
                      <div class="d-flex align-items-start gap-2 mb-2 ">
                        <span class="q-num">{{ currentIndex + 1 }}</span>
                        <div class="mb-0">{{ currentQuestion.text }}</div>
                      </div>

                      <div class="row g-3">
                        <div
                          v-for="(opt, i) in currentQuestion.options"
                          :key="i"
                          class="col-12"
                        >
                          <label
                            class="option-tile d-flex align-items-center p-2 border rounded-3"
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
                            <div class="flex-grow-1 text-size">{{ opt }}</div>
                            <i class="bi bi-check2-circle ms-2"
                               v-if="selectedOptionIndex === i"></i>
                          </label>
                        </div>
                      </div>
                    </div>

                    <!-- Helper -->
                    <div class="d-flex align-items-center gap-2 text-muted small mt-2 flex-wrap">
                      <span class="status-dot"
                        :class="{ online: answers[currentIndex] !== null || selectedOptionIndex !== null }"
                      ></span>
                      <span>Selections auto-save as you navigate.</span>
                    </div>

                    <!-- CTAS -->
                    <div class="d-flex justify-content-end ">
                      <div class="d-flex gap-2">
                        <button
                          v-if="!isLast"
                          class="btn btn-submit "
                          :disabled="selectedOptionIndex === null || isSubmitting"
                          @click="goNext"
                        >
                          Next <i class="bi bi-arrow-right-short ms-1"></i>
                        </button>

                        <button
                          v-else
                          class="btn btn-success"
                          :disabled="selectedOptionIndex === null || isSubmitting"
                          @click="submitAssessment"
                        >
                          Submit <i class="bi bi-bar-chart-line ms-1"></i>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <!-- Timer Box -->
              <div class="col-lg-4 col-md-5 col-12 px-2">
                <div class="timer-box p-4 shadow-sm rounded-3 h-100 w-100 d-flex flex-column align-items-center justify-content-center">
                  <div class="base-timer">
                    <svg class="base-timer__svg" viewBox="0 0 100 100">
                      <g class="base-timer__circle">
                        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                        <path
                          :stroke-dasharray="dasharray"
                          class="base-timer__path-remaining"
                          :class="remainingPathColor"
                          d="
                            M 50,50
                            m -45,0
                            a 45,45 0 1,0 90,0
                            a 45,45 0 1,0 -90,0
                          "
                        ></path>
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
<script lang="ts">
import Stepper from "@/components/Stepper.vue";

export default {
  name: "QualificationAssessment",
  components: { Stepper },
  data() {
    return {
      currentIndex: 0,
      answers: [] as (number | null)[],
      isSubmitting: false,
      timeLeft: 5,
      timer: null as any,
      questions: [
        {
          id: 1,
          text: "Which domain does GRC primarily relate to?",
          options: ["Marketing", "Governance, Risk & Compliance", "DevOps", "UI/UX"],
          correctIndex: 1
        },
        {
          id: 2,
          text: "A key purpose of risk assessment is to:",
          options: ["Eliminate all risks", "Identify, analyze, and prioritize risks", "Approve budgets", "Hire auditors"],
          correctIndex: 1
        },
        {
          id: 3,
          text: "Which is commonly used in compliance frameworks?",
          options: ["ISO 27001", "CSS Grid", "JWT", "TCP/IP"],
          correctIndex: 0
        },
        {
          id: 4,
          text: "Internal controls are designed to:",
          options: ["Increase UI animations", "Reduce risk and ensure policy adherence", "Speed up frontend builds", "Replace audits"],
          correctIndex: 1
        },
        {
          id: 5,
          text: "Which role typically owns overall GRC strategy?",
          options: ["CFO", "CIO", "CISO/Chief Risk Officer", "UI Lead"],
          correctIndex: 2
        }
      ],
      selectedOptionIndex: null as number | null,
      FULL_DASH_ARRAY: 283
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIndex];
    },
    isLast(): boolean {
      return this.currentIndex === this.questions.length - 1;
    },
    progressPercent(): number {
      return Math.round(((this.currentIndex + 1) / this.questions.length) * 100);
    },
    dasharray(): string {
      const raw = this.timeLeft / 5;
      return `${(raw * this.FULL_DASH_ARRAY).toFixed(0)} ${this.FULL_DASH_ARRAY}`;
    },
    remainingPathColor(): string {
      if (this.timeLeft <= 2) return "red";
      if (this.timeLeft <= 3) return "orange";
      return "green";
    }
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
        if (this.timeLeft > 0) this.timeLeft--;
        else {
          clearInterval(this.timer);
          setTimeout(() => this.autoSkip(), 400);
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
        this.submitAssessment();
      }
    },
    submitAssessment() {
      this.isSubmitting = true;
      this.answers[this.currentIndex] = this.selectedOptionIndex;

      const score = this.answers.reduce(
        (acc, ans, idx) => acc + (ans === this.questions[idx].correctIndex ? 1 : 0),
        0
      );

      const level =
        score >= Math.ceil(this.questions.length * 0.7) ? "GRC 301" : "GRC 101";

      this.$router.push({
        name: "result",
        query: {
          score: String(score),
          total: String(this.questions.length),
          level
        }
      });

      this.isSubmitting = false;
    }
  }
};
</script>
<style scoped>
/* REMOVE HORIZONTAL SCROLL */
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  overflow-x: hidden !important;
  font-family: "Inter", sans-serif;
}

/* STEPPER COLUMN FIX */
.stepper-col {
  padding: 0 !important;
}
.text-size{
  font-size: 16px;
}

/* BANNER */
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
  margin: 0;
}
.banner-sub {
  font-size: 13px;
  opacity: 0.9;
   margin: 2px 0 0 0;
}

/* STATUS DOT */
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ced4da;
}
.status-dot.online {
  background: #20c997;
}
.card-size{
  height: 520px;
}

/* BUTTON */
.btn-submit {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  border: none;
  border-radius: 10px;
  padding: 9px 19px;
  font-size: 14px;
  color: #fff;
}
.progress-animated{
  height: 8px;
  
}

/* TIMER BOX — FIX WIDTH ISSUES */
.timer-box {
  background: #fff;
  width: 100% !important;
  max-width: 100% !important;
}

/* TIMER SVG STYLES */
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

/* LARGE SCREENS */
@media (min-width: 1600px) {
  .mentorship-wrapper {
    padding-left: 60px;
    padding-right: 60px;
  }
}
</style>
