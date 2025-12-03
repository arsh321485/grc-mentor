<template>
  <main class="career-page">
    <div class="container-fluid row g-0">
      <!-- Sidebar -->
      <div class="col-2 col-md-2 sidebar-col">
        <Sidebar class="sidebar" />
      </div>

      <!-- Main -->
      <div class="col-10 col-md-10 ">
        <!-- Banner -->
        <div class="banner mb-3 ms-4 mt-3 ms-5">
          <div class="banner-left">
            <h6 class="banner-title">Career Page</h6>
            <p class="banner-sub">A snapshot of your career page</p>
          </div>
        </div>

        <!-- Graph Section -->
        <section class="graph-layout pe-3  ms-5">
          <!-- Grc101 -->
        <div class="glass-card">
           <div class="box-header">
              <h4 class="p-2">GRC101</h4>
            </div>
            <div class="box-content p-3">
              <p class="section-title p-2">Skills acquired:</p>
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
          <div class="graph-box  inactive">
            <p class="placeholder-text">Grc301</p>
          </div>

          <!-- Grc501 -->
          <div class="graph-box  inactive">
            <p class="placeholder-text">Grc501</p>
          </div>

          <!-- Grc701 -->
          <!-- <div class="graph-box inactive">
            <p class="placeholder-text">Grc701</p>
          </div> -->


        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import expertMentee from "@/assets/expert-mentee.png";

export default {
  name: "CareergraphView",
  components: { Sidebar },
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
  padding: 15px;
 height: 490px;
 width: 360px;


}

/* Banner */
.banner {
  width: 95%;
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px 25px;
  color: #fff;
  display: flex;
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



/* Graph Layout */
.graph-layout {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  /* width: 100%; */

  gap: 20px;
}

/* Graph Boxes */
.graph-box {
width: 360px;
  border: 1px solid #2f80ed;
  border-radius: 3px;
 height: 490px;

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
  color: #000;
}

.box-content {
  flex: 1;
  border-bottom: 0.3px solid #d3dff0;

}
.section-title {
  font-weight: 500;


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
/* ============================================================================
   📱 TABLET RESPONSIVE FIX (768px – 1024px)
   for Career Graph Page
   ============================================================================ */
@media (min-width: 768px) and (max-width: 1024px) {

  /* -------------------------------
     SIDEBAR + MAIN LAYOUT
     ------------------------------- */
  .sidebar-col {
    flex: 0 0 25% !important;
    max-width: 25% !important;
  }

  .col-10.col-md-10,
  .main-col {
    flex: 0 0 75% !important;
    max-width: 75% !important;
    margin-left: 0 !important;              /* remove forced 16.5% shift */
    padding-left: 20px !important;
    padding-right: 10px !important;
  }

  /* -------------------------------
     BANNER
     ------------------------------- */
  .banner {
    margin-left: 10px !important;
    width: calc(100% - 10px) !important;
    padding: 14px 18px !important;
  }

  .banner-title {
    font-size: 15px !important;
  }

  .banner-sub {
    font-size: 12px !important;
  }

  /* -------------------------------
     GRAPH LAYOUT (4 boxes)
     ------------------------------- */
  .graph-layout {
    flex-wrap: wrap;
    gap: 15px !important;
    margin-left: 10px !important;
  }

  /* Glass card (GRC101 first box) */
  .glass-card {
    width: 48% !important;
    max-width: 420px !important;
    height: auto !important;
  }

  /* Inactive boxes: GRC301, 501, 701 */
  .graph-box {
    width: 100% !important;
    max-width: 420px !important;
    height: 380px !important;
  }

  /* Placeholder text shrink */
  .placeholder-text {
    font-size: 20px !important;
  }

  /* -------------------------------
     TEXT SIZE FIXES
     ------------------------------- */
  .section-title {
    font-size: 14px !important;
  }

  .section-text {
    font-size: 13px !important;
  }

  .badge-item p {
    font-size: 13px !important;
  }

  /* Badge image resize */
  .badge-img {
    width: 30px !important;
    height: 30px !important;
  }

  /* Remove horizontal scroll */
  .career-page {
    overflow-x: hidden !important;
  }
    .graph-layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
  }

  /* Each box takes 48% width = 2 in a row */
  .glass-card,
  .graph-box {
    width: 48% !important;
    max-width: 48% !important;
    height: auto !important;
  }
  .glass-card,
  .graph-box.inactive {
    min-width: unset !important;
  }
}



/* Responsive */
/* @media (max-width: 1200px) {
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
} */
</style>
