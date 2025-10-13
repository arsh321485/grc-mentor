<template>
  <main class="career-page">
    <div class="container-fluid row g-0">
      <!-- Sidebar -->
      <div class="col-2 col-md-2 sidebar-col">
        <Sidebargrc2 />
      </div>

      <!-- Main -->
      <div class="col-10 col-md-10 main-col">
        <!-- Banner -->
        <div class="banner mb-5">
          <div class="banner-left">
            <h6 class="banner-title">Career Page</h6>
            <p class="banner-sub">A snapshot of your career page</p>
          </div>
        </div>

        <!-- Graph Section -->
        <section class="graph-layout">
          <!-- Grc101 -->
          <div class="glass-card active">
            <div class="box-header">
              <h4>GRC101</h4>
            </div>
            <div class="box-content">
              <p class="section-title">Skills acquired:</p>
              <p class="section-text">ISO 27001, ISO 27002, ISO 27003</p>

              <p class="section-title">Probable designations:</p>
              <p class="section-text">Designation 1, Designation 2</p>
            </div>
            <div class="box-footer">
              <p class="section-title">Badges attained:</p>
              <div class="badges">
                <div class="badge-item">
                  <img :src="expertMentee" alt="badge" class="badge-img" />
                  <p>Expert Mentee</p>
                </div>
                <div class="badge-item">
                  <img :src="expertMentee" alt="badge" class="badge-img" />
                  <p>Expert Mentee</p>
                </div>
                <div class="badge-item">
                  <img :src="expertMentee" alt="badge" class="badge-img" />
                  <p>Expert Mentee</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Grc301 -->
          <div class="graph-box inactive">
            <p class="placeholder-text">Grc301</p>
          </div>

          <!-- Grc501 -->
          <div class="graph-box inactive">
            <p class="placeholder-text">Grc501</p>
          </div>

          <!-- Grc701 -->
          <div class="graph-box inactive">
            <p class="placeholder-text">Grc701</p>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebargrc2 from "@/components/Sidebargrc2.vue";
import expertMentee from "@/assets/expert-mentee.png";

export default {
  name: "CareergraphView",
  components: { Sidebargrc2 },
  data() {
    return {
      expertMentee,
    };
  },
};
</script>

<style scoped>
.career-page {
  background: #f8fbff;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
}

.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  padding: 22px;
}

/* Banner */
.banner {
  margin-top: 30px;
  width: 99%;
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 10px;
  padding: 18px 25px;
  color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
.banner-title {
  font-size: 16px;
  font-weight: 600;
}
.banner-sub {
  font-size: 13px;
  opacity: 0.9;
}



/* Graph Layout */
.graph-layout {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  width: 100%;
  padding: 0 40px;
  gap: 25px;
}

/* Graph Boxes */
.graph-box {
  flex: 1;
  border: 1px solid #2f80ed;
  border-radius: 3px;
  min-height: 620px;
  display: flex;
  flex-direction: column;
  background: #d9d9d9;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.graph-box.active {
  background: #ffffff;
  border: 1px solid #2f80ed;
}

/* Active Box (Grc101) structure */
.box-header {
  border-bottom: 0.3px solid #d3dff0;
  padding: 20px;
  /* text-align: center; */
  font-weight: 700;
  font-size: 22px;
  color: #000;
}

.box-content {
  flex: 1;
  border-bottom: 0.3px solid #d3dff0;
  padding: 30px;
}
.section-title {
  font-weight: 600;
  font-size: 19px;
  margin-bottom: 5px;
}
.section-text {
  font-size: 15px;
  margin-bottom: 10px;
  color: #000;
}

.box-footer {
  padding: 20px;
}
.badges {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.badge-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
.badge-img {
  width: 35px;
  height: 35px;
}
.badge-item p {
  font-size: 14px;
  font-weight: 500;
}

/* Inactive (Grey) Boxes */
.graph-box.inactive {
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.placeholder-text {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  font-size: 22px;
}

/* Responsive */
@media (max-width: 1200px) {
  .graph-layout {
    flex-wrap: wrap;
    justify-content: center;
  }
  .graph-box {
    flex: 1 1 45%;
    min-height: 480px;
  }
}
@media (max-width: 768px) {
  .graph-box {
    flex: 1 1 100%;
  }
}
</style>
