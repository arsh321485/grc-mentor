<!-- 

<template>
  <div class="results-page py-5">
    <div class="container">

      <div class="hero card border-0 shadow-sm mb-4 overflow-hidden">
        <div class="hero-bg" :class="levelClass"></div>
        <div class="card-body position-relative text-white">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h4 class="fw-semibold mb-1">Your Qualification Results</h4>
              <p class="mb-0 opacity-75">Great job completing the assessment!</p>
            </div>

            <div>

              <div class="">
                <img src="../assets/logo-img.png" alt="Logo" style="height: 25px;" class="" />
              </div>
              <span class="badge bg-light text-dark rounded-pill ms-5 mt-3 px-3 py-2">
                {{ displayLevel }}
              </span>
            </div>

          </div>

        
          <div class="stepper d-flex gap-2 mt-3" aria-hidden="true">
            <div class="step-dot done" v-for="i in 5" :key="i"></div>
          </div>

          <div v-if="passed" class="confetti" aria-hidden="true">
            <span v-for="n in 40" :key="n"></span>
          </div>
        </div>
      </div>


      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4 p-md-5">
              <div class="row g-4 align-items-center">
           
                <div class="col-md-5">
                  <div class="score-card text-center p-4 rounded-4">
                    <div class="score-ring mx-auto mb-3">
                      <svg viewBox="0 0 120 120" class="d-block">
                        <circle cx="60" cy="60" r="52" class="track" />
                        <circle cx="60" cy="60" r="52" class="progress" :style="circleStyle" />
                        <text x="60" y="64" text-anchor="middle" class="score-text">
                          {{ percent }}%
                        </text>
                      </svg>
                    </div>
                    <div class="h6 mb-1">Score: {{ score }} / {{ total }}</div>
                    <div class="small text-muted">Threshold: {{ threshold }}% for {{ highLevel }}</div>
                  </div>
                </div>

             
                <div class="col-md-7">
                  <h5 class="mb-2">Program: <span :class="['badge', levelBadgeClass]">{{ displayLevel }}</span></h5>
                  <p class="text-muted mb-3">
                    Based on your assessment, we’ve mapped you to the most suitable track.
                    You can proceed to set up your profile so we can personalize your journey.
                  </p>

                  <ul class="list-unstyled mb-4">
                    <li class="d-flex align-items-center mb-2">
                      <span class="dot me-2"></span>
                      Correct Answers: <strong class="ms-1">{{ score }}</strong>
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="dot me-2"></span>
                      Total Questions: <strong class="ms-1">{{ total }}</strong>
                    </li>
                    <li class="d-flex align-items-center">
                      <span class="dot me-2"></span>
                      Qualified for Program: <strong class="ms-1">{{ displayLevel }}</strong>
                    </li>
                  </ul>

                  <div class="d-flex flex-wrap gap-2">
                  
                    <router-link to="/payment1" class="btn btn-success">
                      Proceed to Profile Setup
                    </router-link>
                  

                  </div>
                </div>
              </div>

              <div class="alert mt-4 mb-0" :class="passed ? 'alert-success' : 'alert-warning'">
                <strong>{{ passed ? 'Nice!' : 'Heads up:' }}</strong>
                {{ passed
                  ? 'You met the threshold for the advanced track.'
                  : `You did not meet the ${threshold}% threshold for ${highLevel}, so we recommend ${lowLevel}.`
                }}
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "QualificationResults",
  props: {

    pScore: { type: Number, default: null },
    pTotal: { type: Number, default: null },
    pLevel: { type: String, default: null }
  },
  data() {
    const q = this.$route?.query || {};
    const score = Number(q.score ?? this.pScore ?? 0);
    const total = Number(q.total ?? this.pTotal ?? 5) || 5;
    const level = String(q.level ?? this.pLevel ?? "GRC 101");

    return {
      score,
      total,
      level,
      threshold: 70,       
      highLevel: "GRC 301",
      lowLevel: "GRC 101"
    };
  },
  computed: {
    percent() {
      const pct = Math.round((this.score / this.total) * 100);
      return isFinite(pct) ? Math.min(Math.max(pct, 0), 100) : 0;
    },
    passed() {
      return this.percent >= this.threshold;
    },
    displayLevel() {
    
      if (this.pLevel || (this.$route && this.$route.query.level)) return this.level;
      return this.passed ? this.highLevel : this.lowLevel;
    },
    levelClass() {
      return this.displayLevel === this.highLevel ? "hero-advanced" : "hero-basic";
    },
    levelBadgeClass() {
      return this.displayLevel === this.highLevel ? "bg-success" : "bg-primary";
    },
 
    circleStyle() {
      const r = 52;
      const c = 2 * Math.PI * r;
      const dash = (this.percent / 100) * c;
      return {
        strokeDasharray: `${dash} ${c}`,
      };
    }
  },
  methods: {
    proceedToProfile() {
 
      if (this.$router) {
        this.$router.push({ name: "ProfileSetup" });
      } else {
        this.$emit("proceed");
      }
    },
    retake() {
      if (this.$router) {
        this.$router.push({ name: "QualificationAssessment" });
      } else {
        this.$emit("retake");
      }
    }
  }
};
</script>


<style scoped>
.results-page {
  background: radial-gradient(1200px 600px at 10% -10%, rgba(13, 110, 253, 0.10), transparent 40%),
    radial-gradient(900px 500px at 110% 20%, rgba(25, 135, 84, 0.08), transparent 40%),
    #f8f9fb;
}


.hero-bg {
  position: absolute;
  inset: 0;
  opacity: 0.92;
}

.hero-advanced {
  background: linear-gradient(135deg, #20c997 0%, #51d1aa 40%, #0d6efd 120%);
}

.hero-basic {
  background: linear-gradient(135deg, #0d6efd 0%, #6ea8fe 45%, #6f42c1 120%);
}

.hero .card-body {
  backdrop-filter: saturate(120%) blur(0.5px);
}


.stepper .step-dot {
  width: 28px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
}

.stepper .step-dot.done {
  background: rgba(255, 255, 255, 0.9);
}


.confetti {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.confetti span {
  position: absolute;
  top: -10px;
  width: 8px;
  height: 12px;
  background: white;
  opacity: 0.9;
  transform: rotate(15deg);
  border-radius: 2px;
  animation: fall 2.2s linear infinite;
}

.confetti span:nth-child(odd) {
  width: 6px;
  height: 10px;
  opacity: 0.85;
}

@keyframes fall {
  0% {
    transform: translateY(-10px) rotate(0deg);
  }

  100% {
    transform: translateY(140%) rotate(360deg);
  }
}

.confetti span:nth-child(5n) {
  background: #ffd166;
}

.confetti span:nth-child(5n+1) {
  background: #ef476f;
}

.confetti span:nth-child(5n+2) {
  background: #06d6a0;
}

.confetti span:nth-child(5n+3) {
  background: #118ab2;
}

.confetti span:nth-child(5n+4) {
  background: #8338ec;
}

.confetti span:nth-child(1) {
  left: 5%;
  animation-delay: .0s;
}

.confetti span:nth-child(2) {
  left: 10%;
  animation-delay: .2s;
}

.confetti span:nth-child(3) {
  left: 15%;
  animation-delay: .1s;
}

/* scatter */
.confetti span:nth-child(10) {
  left: 30%;
  animation-delay: .15s;
}

.confetti span:nth-child(15) {
  left: 45%;
  animation-delay: .05s;
}

.confetti span:nth-child(20) {
  left: 60%;
  animation-delay: .25s;
}

.confetti span:nth-child(25) {
  left: 72%;
  animation-delay: .1s;
}

.confetti span:nth-child(30) {
  left: 84%;
  animation-delay: .2s;
}

.confetti span:nth-child(35) {
  left: 92%;
  animation-delay: .3s;
}


.score-card {
  background: #ffffff;
  border: 1px solid #eef1f4;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
}

.score-ring {
  width: 180px;
  height: 180px;
}

svg {
  width: 100%;
  height: 100%;
}

.track {
  fill: none;
  stroke: #eef1f4;
  stroke-width: 10;
}

.progress {
  fill: none;
  stroke: url(#grad);
  stroke-width: 10;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 60px 60px;
  transition: stroke-dasharray 400ms ease;
}


.progress {
  stroke: #0d6efd;
}

.score-text {
  font-size: 28px;
  fill: #0d1b2a;
  font-weight: 700;
}


.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #0d6efd;
  display: inline-block;
}

.alert {
  border: none;
}

.btn:focus-visible {
  box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
}
</style> -->



<!-- src/components/QualificationResults.vue -->
<template>
  <div class="results-page py-5">

    <!-- Fixed Logo -->
    <div class="position-absolute top-0 start-0 p-3">
      <img src="../assets/logo-img.png" alt="Logo" style="height: 32px;" />
    </div>
    <div class="container ">

      <!-- Hero -->
      <div class="hero card border-0 shadow-sm mt-3 overflow-hidden">
        <div class="hero-bg" :class="levelClass"></div>
        <div class="card-body position-relative text-white ">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h4 class="fw-semibold mb-1">Your Qualification Results</h4>
              <p class="mb-0 opacity-75">Great job completing the assessment!</p>
            </div>
            <span class="badge bg-light text-dark rounded-pill px-3 py-2">
              {{ displayLevel }}
            </span>
          </div>

          <!-- Stepper mimic (finished) -->
          <div class="stepper d-flex gap-2 mt-3" aria-hidden="true">
            <div class="step-dot done" v-for="i in 5" :key="i"></div>
          </div>

          <!-- Confetti (only when passed) -->
          <div v-if="passed" class="confetti" aria-hidden="true">
            <span v-for="n in 40" :key="n"></span>
          </div>
        </div>
      </div>

      <!-- Main -->
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4 p-md-5">
              <div class="row g-4 align-items-center">
                <!-- Score -->
                <div class="col-md-5">
                  <div class="score-card text-center p-4 rounded-4">
                    <div class="score-ring mx-auto mb-3">
                      <svg viewBox="0 0 120 120" class="d-block">
                        <circle cx="60" cy="60" r="52" class="track" />
                        <circle cx="60" cy="60" r="52" class="progress" :style="circleStyle" />
                        <text x="60" y="64" text-anchor="middle" class="score-text">
                          {{ percent }}%
                        </text>
                      </svg>
                    </div>
                    <div class="h6 mb-1">Score: {{ score }} / {{ total }}</div>
                    <div class="small text-muted">Threshold: {{ threshold }}% for {{ highLevel }}</div>
                  </div>
                </div>

                <!-- Summary -->
                <div class="col-md-7">
                  <h5 class="mb-2">Program: <span :class="['badge', levelBadgeClass]">{{ displayLevel }}</span></h5>
                  <p class="text-muted mb-3">
                    Based on your assessment, we’ve mapped you to the most suitable track.
                    You can proceed to set up your profile so we can personalize your journey.
                  </p>

                  <ul class="list-unstyled mb-4">
                    <li class="d-flex align-items-center mb-2">
                      <span class="dot me-2"></span>
                      Correct Answers: <strong class="ms-1">{{ score }}</strong>
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="dot me-2"></span>
                      Total Questions: <strong class="ms-1">{{ total }}</strong>
                    </li>
                    <li class="d-flex align-items-center">
                      <span class="dot me-2"></span>
                      Qualified for Program: <strong class="ms-1">{{ displayLevel }}</strong>
                    </li>
                  </ul>

                  <div class="d-flex flex-wrap gap-2">
                    <!-- <button class="btn btn-success" @click="proceedToProfile">
                      Proceed to Profile Setup
                    </button> -->

                    <router-link to="/payment1" class="btn btn-success">
                      Proceed to Payment
                    </router-link>
                    <!-- 
                    <button class="btn btn-outline-primary" @click="retake">
                      Retake Assessment
                    </button> -->

                    <!-- <router-link to="/welcome" class="btn btn-outline-primary">
                      Retake Assessment
                    </router-link> -->

                  </div>
                </div>
              </div>

              <!-- Note -->
              <div class="alert mt-4 mb-0" :class="passed ? 'alert-success' : 'alert-warning'">
                <strong>{{ passed ? 'Nice!' : 'Heads up:' }}</strong>
                {{ passed
                  ? 'You met the threshold for the advanced track.'
                  : `You did not meet the ${threshold}% threshold for ${highLevel}, so we recommend ${lowLevel}. ` }}
              </div>
            </div>
          </div>

          <!-- <p class="small text-muted text-center mt-3">
            You can update your profile anytime after setup.
          </p> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ResultView",
  props: {
    // optional props fallback if not using router query
    pScore: { type: Number, default: null },
    pTotal: { type: Number, default: null },
    pLevel: { type: String, default: null }
  },
  data() {
    const q = this.$route?.query || {};
    const score = Number(q.score ?? this.pScore ?? 0);
    const total = Number(q.total ?? this.pTotal ?? 5) || 5;
    const level = String(q.level ?? this.pLevel ?? "GRC 101");

    return {
      score,
      total,
      level,
      threshold: 70,        // percent needed for advanced
      highLevel: "GRC 301",
      lowLevel: "GRC 101"
    };
  },
  computed: {
    percent() {
      const pct = Math.round((this.score / this.total) * 100);
      return isFinite(pct) ? Math.min(Math.max(pct, 0), 100) : 0;
    },
    passed() {
      return this.percent >= this.threshold;
    },
    displayLevel() {
      // prefer router-provided mapping; otherwise derive from threshold
      if (this.pLevel || (this.$route && this.$route.query.level)) return this.level;
      return this.passed ? this.highLevel : this.lowLevel;
    },
    levelClass() {
      return this.displayLevel === this.highLevel ? "hero-advanced" : "hero-basic";
    },
    levelBadgeClass() {
      return this.displayLevel === this.highLevel ? "bg-success" : "bg-primary";
    },
    // circular progress styling
    circleStyle() {
      const r = 52;
      const c = 2 * Math.PI * r;
      const dash = (this.percent / 100) * c;
      return {
        strokeDasharray: ` ${dash} ${c}`,
      };
    }
  },
  methods: {
    proceedToProfile() {
      // Navigate to Page 4
      if (this.$router) {
        this.$router.push({ name: "ProfileSetup" });
      } else {
        this.$emit("proceed");
      }
    },
    retake() {
      if (this.$router) {
        this.$router.push({ name: "QualificationAssessment" });
      } else {
        this.$emit("retake");
      }
    }
  }
};
</script>

<style scoped>
.results-page {
  background: radial-gradient(1200px 600px at 10% -10%, rgba(13, 110, 253, 0.10), transparent 40%),
    radial-gradient(900px 500px at 110% 20%, rgba(25, 135, 84, 0.08), transparent 40%),
    #f8f9fb;
}

/* Hero gradient (level aware) */
.hero-bg {
  position: absolute;
  inset: 0;
  opacity: 0.92;
}

.hero-advanced {
  background: linear-gradient(135deg, #20c997 0%, #51d1aa 40%, #0d6efd 120%);
}

.hero-basic {
  background: linear-gradient(135deg, #0d6efd 0%, #6ea8fe 45%, #6f42c1 120%);
}

.hero .card-body {
  backdrop-filter: saturate(120%) blur(0.5px);
}

/* Stepper */
.stepper .step-dot {
  width: 28px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
}

.stepper .step-dot.done {
  background: rgba(255, 255, 255, 0.9);
}

/* Confetti */
.confetti {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.confetti span {
  position: absolute;
  top: -10px;
  width: 8px;
  height: 12px;
  background: white;
  opacity: 0.9;
  transform: rotate(15deg);
  border-radius: 2px;
  animation: fall 2.2s linear infinite;
}

.confetti span:nth-child(odd) {
  width: 6px;
  height: 10px;
  opacity: 0.85;
}

@keyframes fall {
  0% {
    transform: translateY(-10px) rotate(0deg);
  }

  100% {
    transform: translateY(140%) rotate(360deg);
  }
}

.confetti span:nth-child(5n) {
  background: #ffd166;
}

.confetti span:nth-child(5n+1) {
  background: #ef476f;
}

.confetti span:nth-child(5n+2) {
  background: #06d6a0;
}

.confetti span:nth-child(5n+3) {
  background: #118ab2;
}

.confetti span:nth-child(5n+4) {
  background: #8338ec;
}

.confetti span:nth-child(1) {
  left: 5%;
  animation-delay: .0s;
}

.confetti span:nth-child(2) {
  left: 10%;
  animation-delay: .2s;
}

.confetti span:nth-child(3) {
  left: 15%;
  animation-delay: .1s;
}

/* scatter */
.confetti span:nth-child(10) {
  left: 30%;
  animation-delay: .15s;
}

.confetti span:nth-child(15) {
  left: 45%;
  animation-delay: .05s;
}

.confetti span:nth-child(20) {
  left: 60%;
  animation-delay: .25s;
}

.confetti span:nth-child(25) {
  left: 72%;
  animation-delay: .1s;
}

.confetti span:nth-child(30) {
  left: 84%;
  animation-delay: .2s;
}

.confetti span:nth-child(35) {
  left: 92%;
  animation-delay: .3s;
}

/* Score card */
.score-card {
  background: #ffffff;
  border: 1px solid #eef1f4;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
}

.score-ring {
  width: 180px;
  height: 180px;
}

svg {
  width: 100%;
  height: 100%;
}

.track {
  fill: none;
  stroke: #eef1f4;
  stroke-width: 10;
}

.progress {
  fill: none;
  stroke: url(#grad);
  stroke-width: 10;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 60px 60px;
  transition: stroke-dasharray 400ms ease;
}

/* gradient fallback if SVG defs not used: use solid */
.progress {
  stroke: #0d6efd;
}

.score-text {
  font-size: 28px;
  fill: #0d1b2a;
  font-weight: 700;
}

/* Dots in list */
.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #0d6efd;
  display: inline-block;
}

.alert {
  border: none;
}

/* Accessibility: focus ring */
.btn:focus-visible {
  box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
}
</style>