<!-- 


<template>
  <div class="qa-page py-5">

    <div class="container">
  

      <div class="hero card border-0 shadow-sm mb-4 overflow-hidden">
        <div class="hero-bg"></div>

        <div class="card-body position-relative text-white">

          <div class="d-flex justify-content-between align-items-center">

            <div>
              <h4 class="fw-semibold mb-1">Qualification Assessment</h4>
              <p class="mb-0 opacity-75">Answer a few quick questions to map you to the right track.</p>
            </div>
            <div>
              <div class="">
                <img src="../assets/logo-img.png" alt="Logo" style="height: 25px;" class="" />
              </div>
              <span class="badge bg-light text-dark rounded-pill px-3 py-2 mt-3 ms-4">
                Q {{ currentIndex + 1 }} / {{ questions.length }}
              </span>
            </div>
          </div>
        
          <div class="stepper d-flex gap-2 mt-3">
            <div v-for="(q, i) in questions" :key="q.id" class="step-dot" :class="{
              active: i === currentIndex,
              done: answers[i] !== null && i !== currentIndex
            }" />
          </div>
        </div>
      </div>

  
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4 p-md-5">

          
              <div class="mb-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span class="small text-muted">Progress</span>
                  <span class="small fw-semibold">{{ progressPercent }}%</span>
                </div>
                <div class="progress progress-animated" style="height: 10px;">
                  <div class="progress-bar" role="progressbar" :style="{ width: progressPercent + '%' }"
                    :aria-valuenow="progressPercent" aria-valuemin="0" aria-valuemax="100" />
                </div>
              </div>

            
              <div class="mb-4">
                <div class="d-flex align-items-start gap-2 mb-2">
                  <span class="q-num">{{ currentIndex + 1 }}</span>
                  <h5 class="mb-0">{{ currentQuestion.text }}</h5>
                </div>
                <p v-if="currentQuestion.subtitle" class="text-muted small mb-3">
                  {{ currentQuestion.subtitle }}
                </p>

             
                <div class="row g-3">
                  <div v-for="(opt, i) in currentQuestion.options" :key="i" class="col-12">
                    <label class="option-tile d-flex align-items-center p-3 border rounded-3" :class="{
                      selected: selectedOptionIndex === i,
                      saved: answers[currentIndex] === i && selectedOptionIndex !== i
                    }" @click="selectedOptionIndex = i">
                      <input class="form-check-input me-3" type="radio" :name="'q' + currentIndex" :value="i"
                        v-model="selectedOptionIndex" />
                      <div class="flex-grow-1">
                        <div class="fw-semibold">{{ opt }}</div>
                      </div>
                      <i class="bi bi-check2-circle ms-2" v-if="selectedOptionIndex === i"></i>
                    </label>
                  </div>
                </div>
              </div>

          
              <div class="d-flex align-items-center gap-2 text-muted small mt-2">
                <span class="status-dot"
                  :class="{ online: answers[currentIndex] !== null || selectedOptionIndex !== null }" />
                <span>Selections auto-save as you navigate.</span>
              </div>

             
              <div class="d-flex justify-content-between align-items-center mt-4">
                <button class="btn btn-outline-secondary" :disabled="currentIndex === 0 || isSubmitting"
                  @click="goPrev">
                  <i class="bi bi-arrow-left-short me-1" aria-hidden="true"></i>
                  Previous
                </button>

                <div class="d-flex gap-2">
                  <button v-if="!isLast" class="btn btn-primary"
                    :disabled="selectedOptionIndex === null || isSubmitting" @click="goNext">
                    Next
                    <i class="bi bi-arrow-right-short ms-1" aria-hidden="true"></i>
                  </button>

              

                  <router-link v-else :to="{ name: 'result', query: { selected: selectedOptionIndex } }"
                    class="btn btn-success" :class="{ disabled: selectedOptionIndex === null || isSubmitting }">
                    View Results
                    <i class="bi bi-bar-chart-line ms-1" aria-hidden="true"></i>
                  </router-link>

                </div>
              </div>

            </div>
          </div>

      
          <p class="small text-muted text-center mt-3">
            Tip: Use ← / → to move between questions, ↑ / ↓ to select options.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QualificationAssessment",
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      currentIndex: 0,
      answers: [],
      isSubmitting: false,
      questions: this.items ?? [
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
    this.selectedOptionIndex = this.answers[this.currentIndex];

 
    window.addEventListener("keydown", this.onKey);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.onKey);
  },
  methods: {
    onKey(e) {
      if (e.key === "ArrowRight") {
        if (!this.isLast && this.selectedOptionIndex !== null) this.goNext();
      } else if (e.key === "ArrowLeft") {
        if (this.currentIndex > 0) this.goPrev();
      } else if (e.key === "ArrowUp") {
        this.moveSelection(-1);
      } else if (e.key === "ArrowDown") {
        this.moveSelection(1);
      }
    },
    moveSelection(delta) {
      const len = this.currentQuestion.options.length;
      const next =
        this.selectedOptionIndex === null
          ? 0
          : (this.selectedOptionIndex + delta + len) % len;
      this.selectedOptionIndex = next;
    },
    goNext() {
      this.answers[this.currentIndex] = this.selectedOptionIndex;
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
        this.selectedOptionIndex = this.answers[this.currentIndex];
      }
    },
    goPrev() {
      this.answers[this.currentIndex] = this.selectedOptionIndex;
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.selectedOptionIndex = this.answers[this.currentIndex];
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

      if (this.$router) {
        this.$router.push({
          name: "QualificationResults",
          query: { score: String(score), total: String(this.questions.length), level }
        });
      } else {
        this.$emit("completed", {
          score,
          total: this.questions.length,
          level,
          answers: this.answers
        });
      }

      this.isSubmitting = false;
    }
  }
};
</script>

<style scoped>

.qa-page {
  background: radial-gradient(1200px 600px at 10% -10%, rgba(13, 110, 253, 0.12), transparent 40%),
    radial-gradient(900px 500px at 110% 20%, rgba(25, 135, 84, 0.10), transparent 40%),
    #f8f9fb;
}


.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0d6efd 0%, #6ea8fe 45%, #20c997 120%);
  opacity: 0.9;
}

.hero .card-body {
  backdrop-filter: saturate(120%) blur(0.5px);
}


.stepper .step-dot {
  width: 28px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
  transition: all 240ms ease;
}

.stepper .step-dot.active {
  background: #fff;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.35) inset;
}

.stepper .step-dot.done {
  background: rgba(255, 255, 255, 0.75);
}


.progress-animated .progress-bar {
  transition: width 280ms ease;
  background: linear-gradient(90deg, #0d6efd, #20c997);
}


.q-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(13, 110, 253, 0.12);
  color: #0d6efd;
  font-weight: 600;
}


.option-tile {
  cursor: pointer;
  background: #fff;
  border-color: #e9ecef !important;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background 160ms ease;
}

.option-tile:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);
}

.option-tile.selected {
  border-color: #0d6efd !important;
  background: linear-gradient(0deg, rgba(13, 110, 253, 0.06), rgba(13, 110, 253, 0.06)), #fff;
  box-shadow: 0 8px 24px rgba(13, 110, 253, 0.12);
}

.option-tile.saved {
  border-style: dashed;
}

.option-tile .form-check-input {
  width: 1.1rem;
  height: 1.1rem;
  margin-top: 0;
}

.option-tile .form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
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
</style> -->




<!-- src/components/QualificationAssessment.vue -->
<template>
  <div class="qa-page py-5">
    <!-- Fixed Logo -->
    <div class="position-absolute top-0 start-0 p-3">
      <img src="../assets/logo-img.png" alt="Logo" style="height: 32px;" />
    </div>

    <div class="container position-relative pt-3">
      <!-- Gradient headerek / hero -->
      <div class="hero card border-0 shadow-sm mb-4 overflow-hidden">
        <div class="hero-bg"></div>
        <div class="card-body position-relative text-white">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h4 class="fw-semibold mb-1">Qualification Assessment</h4>
              <p class="mb-0 opacity-75">
                Answer a few quick questions to map you to the right track.
              </p>
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
          </div>

          <!-- Stepper -->
          <div class="stepper d-flex gap-2 mt-3">
            <div
              v-for="(q, i) in questions"
              :key="q.id"
              class="step-dot"
              :class="{
                active: i === currentIndex,
                done: answers[i] !== null && i !== currentIndex
              }"
            />
          </div>
        </div>
      </div>

      <!-- Main card -->
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
                    class="btn btn-primary"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "QualificationAssessment",
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
/* ✅ keep your same UI */
.qa-page {
  background: radial-gradient(1200px 600px at 10% -10%, rgba(13, 110, 253, 0.12), transparent 40%),
    radial-gradient(900px 500px at 110% 20%, rgba(25, 135, 84, 0.1), transparent 40%),
    #f8f9fb;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0d6efd 0%, #6ea8fe 45%, #20c997 120%);
  opacity: 0.9;
}
.hero .card-body {
  backdrop-filter: saturate(120%) blur(0.5px);
}
.stepper .step-dot {
  width: 28px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
  transition: all 240ms ease;
}
.stepper .step-dot.active {
  background: #fff;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.35) inset;
}
.stepper .step-dot.done {
  background: rgba(255, 255, 255, 0.75);
}
.progress-animated .progress-bar {
  transition: width 280ms ease;
  background: linear-gradient(90deg, #0d6efd, #20c997);
}
.q-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(13, 110, 253, 0.12);
  color: #0d6efd;
  font-weight: 600;
}
.option-tile {
  cursor: pointer;
  background: #fff;
  border-color: #e9ecef !important;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background 160ms ease;
}
.option-tile:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);
}
.option-tile.selected {
  border-color: #0d6efd !important;
  background: linear-gradient(0deg, rgba(13, 110, 253, 0.06), rgba(13, 110, 253, 0.06)), #fff;
  box-shadow: 0 8px 24px rgba(13, 110, 253, 0.12);
}
.option-tile.saved {
  border-style: dashed;
}
.option-tile .form-check-input {
  width: 1.1rem;
  height: 1.1rem;
}
.option-tile .form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
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
</style>