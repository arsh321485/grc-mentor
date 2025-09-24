<template>
  <main class="mentorship-page">
    <div class="container-fluid">
      <div class="row g-4">
        <!-- Stepper Left Column -->
        <div class="col-2 col-md-2">
          <Stepper :currentStep="2" />
        </div>

        <!-- Right Main Column -->
        <div class="col-10 col-md-10">
          <!-- Banner -->
          <div class="banner mb-5">
            <div class="banner-left">
              <h6 class="banner-title">Qualification Assessment</h6>
              <p class="banner-sub"> Answer a few quick questions to map you to the right track.</p>
            </div>
             <!-- Timer + Question count -->
            <div class="d-flex align-items-center gap-3">
              <span class="badge bg-light text-dark rounded-pill px-3 py-2">
                ⏳ {{ timeLeft }}s
              </span>
              <span class="badge bg-light text-dark rounded-pill px-3 py-2">
                Q {{ currentIndex + 1 }} / {{ questions.length }}
              </span>
            </div>

            <!-- <div class="banner-right">GRC 101</div> -->
          </div>


              <section class="">
                <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4 p-md-5">
              <!-- Progress -->
              <div class="mb-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span class="small text-muted">Progress</span>
                  <span class="small fw-semibold">{{ progressPercent }}%</span>
                </div>
                <div class="progress progress-animated" style="height: 10px;">
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
                <p v-if="currentQuestion.subtitle" class="text-muted small mb-3">
                  {{ currentQuestion.subtitle }}
                </p>

                <!-- Options -->
                <div class="row g-3">
                  <div v-for="(opt, i) in currentQuestion.options" :key="i" class="col-12">
                    <label
                      class="option-tile d-flex align-items-center p-3 border rounded-3"
                      :class="{
                        selected: selectedOptionIndex === i,
                        saved: answers[currentIndex] === i && selectedOptionIndex !== i
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
              <div class="d-flex align-items-center gap-2 text-muted small mt-2">
                <span
                  class="status-dot"
                  :class="{
                    online: answers[currentIndex] !== null || selectedOptionIndex !== null
                  }"
                />
                <span>Selections auto-save as you navigate.</span>
              </div>

              <!-- CTAs -->
              <div class="d-flex justify-content-between align-items-center mt-4">


                <div class="d-flex gap-2">
                  <!-- Next for other questions -->
                  <button
                    v-if="!isLast"
                    class="btn btn-submit"
                    :disabled="selectedOptionIndex === null || isSubmitting"
                    @click="goNext"
                  >
                    Next
                    <i class="bi bi-arrow-right-short ms-1" aria-hidden="true"></i>
                  </button>

                  <!-- Submit for last question -->
                  <button
                    v-else
                    class="btn btn-success"
                    :disabled="selectedOptionIndex === null || isSubmitting"
                    @click="submitAssessment"
                  >
                    Submit
                    <i class="bi bi-bar-chart-line ms-1" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Keyboard tip -->

        </div>
      </div>

              </section>




        </div>
      </div>
    </div>




  </main>
</template>

<script >
import Stepper from '@/components/Stepper.vue';
export default {
  name: "QualificationAssessment",
  components: { Stepper },
  data() {
    return {
      currentIndex: 0,
      answers: [],
      isSubmitting: false,
      timeLeft: 5, // timer per question
      timer: null,
      lockedQuestions: [], // lock skipped ones
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
          options: [
            "Eliminate all risks",
            "Identify, analyze, and prioritize risks",
            "Approve budgets",
            "Hire auditors"
          ],
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
          options: [
            "Increase UI animations",
            "Reduce risk and ensure policy adherence",
            "Speed up frontend builds",
            "Replace audits"
          ],
          correctIndex: 1
        },
        {
          id: 5,
          text: "Which role typically owns overall GRC strategy?",
          options: ["CFO", "CIO", "CISO/Chief Risk Officer", "UI Lead"],
          correctIndex: 2
        }
      ],
      selectedOptionIndex: null
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
        this.timeLeft--;
        if (this.timeLeft <= 0) {
          this.autoSkip();
        }
      }, 1000);
    },
    autoSkip() {
      this.answers[this.currentIndex] = this.selectedOptionIndex;
      this.lockedQuestions.push(this.currentIndex);
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

      const score = this.answers.reduce((acc, ans, idx) => {
        const q = this.questions[idx];
        return acc + (ans === q.correctIndex ? 1 : 0);
      }, 0);

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

.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  padding: 30px;
  font-family: "Inter", sans-serif;
}

/* Glass Cards */


/* Banner */
.banner {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px 25px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
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
.banner-right {
  font-size: 15px;
  font-weight: 600;
}





/* Question Card */
.progress-animated .progress-bar {
  transition: width 280ms ease;
  /* background: linear-gradient(90deg, #0d6efd, #20c997); */
     background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);

}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #ced4da;
  display: inline-block;
}
.status-dot.online {
  background: #20c997;
}
.btn {
  transition: transform 120ms ease, box-shadow 120ms ease;
}
.btn:active {
  transform: translateY(1px);
}



.btn-submit {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  border: none;
  border-radius: 22px;
  padding: 10px 28px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
}





</style>
