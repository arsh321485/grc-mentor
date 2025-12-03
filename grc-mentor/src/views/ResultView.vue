<template>
  <main class="mentorship-page">
    <div class="container-fluid">
      <div class="row g-4">

        <!-- LEFT STEPPER -->
        <div class="col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2">
          <Stepper :currentStep="2" />
        </div>

        <!-- RIGHT MAIN CONTENT -->
        <div class="col-12 col-sm-12 col-md-9 col-lg-10 col-xl-10 mt-5">

          <!-- Banner -->
          <div class="banner mb-5">
            <div class="banner-left">
              <h6 class="banner-title">Your Assessment Results</h6>
              <p class="banner-sub">Great job completing the assessment!</p>
            </div>
            <div class="banner-right">{{ displayLevel }}</div>
          </div>

          <!-- Main Section -->
          <section>
            <div class="card border-0 shadow-sm">
              <div class="card-body p-4 p-md-5">

                <div class="row g-4 align-items-center">

                  <!-- SCORE CARD -->
                  <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                    <div class="score-card text-center p-4 rounded-4">
                      <div class="score-ring mx-auto mb-3">
                        <svg viewBox="0 0 120 120" class="d-block">

                          <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stop-color="#2d9cdb" />
                              <stop offset="50%" stop-color="#56ccf2" />
                              <stop offset="100%" stop-color="#2f80ed" />
                            </linearGradient>
                          </defs>

                          <circle cx="60" cy="60" r="52" class="track" />

                          <circle cx="60" cy="60" r="52" class="progress" :style="circleStyle" />

                          <text x="60" y="64" text-anchor="middle" class="score-text">
                            {{ percent }}%
                          </text>
                        </svg>
                      </div>

                      <div class="h6 mb-1">Score: {{ score }} / {{ total }}</div>
                      <div class="small text-muted">
                        Threshold: {{ threshold }}% for {{ highLevel }}
                      </div>
                    </div>
                  </div>

                  <!-- SUMMARY -->
                  <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                    <p class="text-muted mb-3">
                      Based on your assessment, we’ve mapped you to the most suitable track.
                    </p>

                    <ul class="list-unstyled mb-4">
                      <li class="d-flex align-items-center mb-2">
                        <span class="dot me-2"></span>
                        Correct Answers:
                        <strong class="ms-1">{{ score }}</strong>
                      </li>

                      <li class="d-flex align-items-center mb-2">
                        <span class="dot me-2"></span>
                        Total Questions:
                        <strong class="ms-1">{{ total }}</strong>
                      </li>

                      <li class="d-flex align-items-center">
                        <span class="dot me-2"></span>
                        Qualified for Program:
                        <strong class="ms-1">{{ displayLevel }}</strong>
                      </li>
                    </ul>
                    <!-- payment button -->
                    <div class="d-flex justify-content-end">
                      <router-link to="/payment1" class="btn btn-submit">
                        Proceed to Payment
                      </router-link>
                    </div>
                  </div>
                </div>

                <!-- Note -->
                <div class="alert mt-4 mb-0" :class="passed ? 'alert-success' : 'alert-warning'">
                  <strong>{{ passed ? "Nice!" : "Heads up:" }}</strong>
                  {{
                    passed
                      ? "You met the threshold for the advanced track."
                      : `You did not meet the ${threshold}% threshold for ${highLevel}, so we recommend ${lowLevel}.`
                  }}
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
import confetti from "canvas-confetti";

export default {
  name: "ResultView",
  components: { Stepper },
  props: {
    pScore: { type: Number, default: null },
    pTotal: { type: Number, default: null },
    pLevel: { type: String, default: null },
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
      lowLevel: "GRC 101",
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
    circleStyle() {
      const r = 52;
      const c = 2 * Math.PI * r;
      const dash = (this.percent / 100) * c;
      return {
        strokeDasharray: `${dash} ${c}`,
      };
    },
  },
  mounted() {
    if (this.percent > 30) {
      this.launchConfetti();
    }
  },
  methods: {
    launchConfetti() {
      const duration = 5 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          startVelocity: 30,
          spread: 360,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    },
  },
};
</script>

<style scoped>
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  /* padding: 30px; */
  font-family: "Inter", sans-serif;
}

.btn-submit {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  border: none;
  border-radius: 10px;
  padding: 10px 28px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
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
  /* ✅ use gradient */
  stroke-width: 10;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 60px 60px;
  transition: stroke-dasharray 400ms ease;
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

@media (min-width: 1000px) and (max-width: 2000px) {
  .mentorship-page {
    background: linear-gradient(135deg, #f7faff, #eef3fb);
    min-height: 100vh;
    /* padding: 30px; */
    font-family: "Inter", sans-serif;
  }

  .btn-submit {
    background: linear-gradient(90deg, #2d9cdb, #2f80ed);
    border: none;
    border-radius: 10px;
    padding: 10px 28px;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
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
    /* ✅ use gradient */
    stroke-width: 10;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 60px 60px;
    transition: stroke-dasharray 400ms ease;
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
}
</style>
