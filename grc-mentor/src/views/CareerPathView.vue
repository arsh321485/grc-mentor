<template>
  <main class="career-page">
    <div class="container-fluid row g-0">
      <!-- Sidebar -->
      <div class="col-2 col-md-2 sidebar-col">
        <Sidebar class="sidebar" />
      </div>

      <!-- Main Content -->
      <div class="col-10 col-md-10 main-col">
        <!-- Top Banner -->
        <div class="career-banner shadow-sm mb-4">
          <div class="banner-content">
            <h6 class="banner-title">GRC 101</h6>
            <p class="banner-sub">
              You will be working with Media, Legal, Education and E-commerce industries.
            </p>
          </div>
        </div>

        <!-- Career Graph Section -->
        <section class="career-graph-section">
          <div class="career-graph-container">
            <!-- Info Card (Static Left Box) -->
            <div class="info-card shadow-sm">
              <p><strong>Skills acquired:</strong> ISO 27001, ISO 27002, ISO 27003</p>
              <p><strong>Probable designations:</strong> Designation 1, Designation 2</p>
              <p><strong>Badges attained:</strong></p>
              <div class="badges">
                <div class="badge-item">
                  <i class="bi bi-award"></i> Expert Mentee
                </div>
                <div class="badge-item">
                  <i class="bi bi-award"></i> Expert Mentee
                </div>
                <div class="badge-item">
                  <i class="bi bi-award"></i> Expert Mentee
                </div>
              </div>
            </div>

            <!-- Diagonal Career Line -->
            <div class="career-line"></div>

            <!-- Milestones -->
            <div class="milestone milestone-101">
              <div class="dot active"></div>
              <p class="milestone-title">GRC 101</p>
              <p class="milestone-sub">Completed on July 23, 2025</p>
            </div>

            <div class="milestone milestone-301">
              <div class="dot"></div>
              <p class="milestone-title">GRC 301</p>
              <p class="milestone-sub">Completed on July 23, 2025</p>
            </div>

            <div class="milestone milestone-501">
              <div class="dot"></div>
              <p class="milestone-title">GRC 501</p>
              <p class="milestone-sub">Completed on July 23, 2025</p>
            </div>

            <div class="milestone milestone-701">
              <div class="dot"></div>
              <p class="milestone-title">GRC 701</p>
              <p class="milestone-sub">Completed on July 23, 2025</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "CareerGraphView",
  components: { Sidebar },
};
</script>

<style scoped>
/* ====== LAYOUT ====== */
.career-page {
  background: #f9fafc;
  /* min-height: 100vh;
  font-family: "Inter", sans-serif; */
}

.sidebar-col {
  padding-left: 0;
  padding-right: 0;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}

.main-col {
  margin-left: 16.5%;
  padding: 0 2rem;
}

/* ====== TOP BANNER ====== */
.career-banner {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  color: #fff;
  padding: 18px 25px;
  margin-top: 30px;
}

.banner-title {
  font-weight: 600;
  font-size: 16px;
  margin: 0;
}

.banner-sub {
  font-size: 13px;
  margin-top: 2px;
  opacity: 0.9;
}

/* ====== CAREER GRAPH ====== */
.career-graph-section {
  display: flex;
  justify-content: center;
}

.career-graph-container {
  position: relative;
  width: 100%;
  min-height: 500px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin-bottom: 40px;
}

/* Diagonal line */
.career-line {
  position: absolute;
  top: 65%;
  left: 12%;
  width: 75%;
  height: 2px;
  background: linear-gradient(to right, #007baf, #cfdbe8);
  transform: rotate(-33deg);
  transform-origin: left center;
  opacity: 0.6;
}

/* Info card */
.info-card {
  position: absolute;
  top: 38%;
  left: 10%;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  width: 260px;
  border: 1px solid #e7eef4;
}

.info-card p {
  font-size: 13px;
  color: #333;
  margin-bottom: 10px;
}

.badges {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.badge-item {
  background-color: #fff4ee;
  border: 1px solid #f3d7c3;
  border-radius: 8px;
  padding: 8px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #000;
  font-weight: 500;
}

/* ====== MILESTONES ====== */
.milestone {
  position: absolute;
  text-align: center;
  font-size: 13px;
  color: #333;
}

.milestone-title {
  font-weight: 600;
  margin-bottom: 0;
}

.milestone-sub {
  color: #7a7a7a;
  font-size: 12px;
  margin: 0;
}

/* Dots */
.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 3px solid #007baf;
  background-color: #fff;
  margin: 0 auto 8px;
  transition: all 0.3s ease;
}
.dot.active {
  background-color: #007baf;
  box-shadow: 0 0 0 4px rgba(0, 123, 175, 0.2);
}

/* Positions */
.milestone-101 {
  bottom: 40px;
  left: 18%;
}

.milestone-301 {
  bottom: 160px;
  left: 38%;
}

.milestone-501 {
  bottom: 280px;
  left: 58%;
}

.milestone-701 {
  bottom: 400px;
  left: 76%;
}

/* ====== RESPONSIVE ====== */
@media (max-width: 992px) {
  .main-col {
    margin-left: 0;
    padding: 1rem;
  }

  .career-graph-container {
    min-height: 600px;
  }

  .career-line {
    transform: rotate(-25deg);
  }

  .info-card {
    left: 5%;
    width: 220px;
  }

  .milestone-101 {
    left: 22%;
  }

  .milestone-301 {
    left: 40%;
  }

  .milestone-501 {
    left: 60%;
  }

  .milestone-701 {
    left: 78%;
  }
}

@media (max-width: 768px) {
  .career-line {
    display: none;
  }

  .info-card {
    position: relative;
    left: 0;
    top: 0;
    transform: none;
    margin: 20px auto;
    width: 90%;
  }

  .milestone {
    position: relative;
    display: block;
    margin-bottom: 20px;
  }

  .milestone-101,
  .milestone-301,
  .milestone-501,
  .milestone-701 {
    left: 0;
    bottom: auto;
  }
}
</style>
