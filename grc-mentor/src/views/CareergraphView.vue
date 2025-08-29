
<template>
  <div class="container-fluid row">
    <div class="col-2 col-md-2">
      <Sidebargrc2 />
    </div>

    <div class="col-10 col-md-10">
      <!-- Header -->
      <div class="mb-4 career-text">
        <h2 class="mt-5">Career graph</h2>
        <p class="text-muted">A snapshot of your career graph</p>
      </div>

      <div class="career-graph">
        <!-- Left Skills Card -->
        <div class="skills-card card shadow-sm p-3">
          <p class="skill-text">Skills acquired:</p>
          <p class="skill-sub-text">ISO 27001, ISO 27002, ISO 27003</p>

          <p class="skill-text">Probable designations:</p>
          <p class="skill-sub-text">Designation 1, Designation 2</p>

          <h6 class="skill-text">Badges attained:</h6>
          <div class="d-flex flex-column gap-2">
            <span class="badge-item">
              <img src="../assets/expert-mentee.png" alt="" class="me-2 badge-img" />
              <p>Expert Mentee</p>
            </span>
            <span class="badge-item">
              <img src="../assets/expert-mentee.png" alt="" class="me-2 badge-img" />
              <p>Expert Mentee</p>
            </span>
            <span class="badge-item">
              <img src="../assets/expert-mentee.png" alt="" class="me-2 badge-img" />
              <p>Expert Mentee</p>
            </span>
          </div>
        </div>

        <!-- Right Graph Area -->
        <div class="graph-area">
          <!-- Diagonal line -->
          <div class="graph-line"></div>

          <!-- Milestones -->
          <div
            v-for="(milestone, index) in milestones"
            :key="index"
            class="milestone"
            :style="milestone.position"
          >
            <div :class="['circle', milestone.status]"></div>
            <div class="milestone-label text-center">
              <p class="fw-bold mb-0">{{ milestone.title }}</p>
              <small class="text-muted">Completed on July 23, 2025</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Sidebargrc2 from "@/components/Sidebargrc2.vue";

export default {
  name: "CareergraphView",
  components: { Sidebargrc2 },
  data() {
    return {
      milestones: [
        {
          title: "GRC 101",
          status: "filled", // fully filled blue
          position: { bottom: "0%", left: "5%" },
        },
        {
          title: "GRC 301",
          status: "bordered", // blue border only
          position: { bottom: "25%", left: "25%" },
        },
        {
          title: "GRC 501",
          status: "upcoming", // gray hollow
          position: { bottom: "50%", left: "50%" },
        },
        {
          title: "GRC 701",
          status: "upcoming", // gray hollow
          position: { bottom: "75%", left: "75%" },
        },
      ],
    };
  },
};
</script>

<style scoped>
.career-text {
  margin-left: 30px;
}
.career-text h2 {
  font-weight: 600;
}
.career-text p {
  font-size: 14px;
  color: #00000099;
}

.career-graph {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.skills-card {
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  border-radius: 12px;
  margin-left: 30px;
  margin-top: 155px;
  border: 0;
}

.skill-text {
  font-size: 13px;
  font-weight: 500;
  color: #00000099;
}
.skill-sub-text {
  font-size: 16px;
  color: #000000de;
  font-weight: 500;
}

/* Graph */
.graph-area {
  flex: 2;
  position: relative;
  min-height: 500px;
  width: 100%;
}
.graph-line {
  position: absolute;
  left: 5%;
  bottom: 0;
  width: 90%;
  height: 2px;
  background: #ddd;
  transform: rotate(-45deg);
  transform-origin: left bottom;
}

/* Milestones */
.milestone {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.circle {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  margin-bottom: 6px;
}
/* Different Circle Types */
.circle.filled {
  background: #008AC5;
  border: 2px solid #008AC5;
}
.circle.bordered {
  border: 2px solid #008AC5;
  background: #fff;
}
.circle.upcoming {
  border: 2px solid #ccc;
  background: #fff;
}

.milestone-label {
  font-size: 0.9rem;
}

.badge-item {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #000000de;
}
.badge-img {
  height: 40px;
  width: 50px;
}
</style>

