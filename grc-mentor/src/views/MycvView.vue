<template>
  <main>
    <div class="container-fluid row">
      <!-- Sidebar (unchanged) -->
      <div class="col-2 col-md-2">
        <Sidebar class="sidebar" />
      </div>

      <div class="col-10 col-md-10">
        <div class="container-fluid">

          <!-- YOUR ORIGINAL BANNER (unchanged) -->
          <div class="banner mt-3 mb-4 px-4">
            <h6 class="banner-title">Profile Setup</h6>
            <p class="banner-sub">Fill the form below to help us map your experience.</p>
          </div>

          <!-- TOP ROW: small profile header (keeps same look you had) -->
          <div class="row align-items-center g-3 px-4">
            <div class="col-12 col-md-5 d-flex align-items-center">
              <img src="../assets/avtar-profile-img.jpg" class="rounded-circle profile-img" alt="avatar" />
              <div class="ms-3">
                <h6 class="fw-bold mb-0">Amit Sharma</h6>
                <small class="text-muted">Product Designer</small>
              </div>
            </div>

            <div class="col-12 col-md-5 d-flex justify-content-md-center justify-content-start gap-4">
              <div class="text-center">
                <img src="../assets/badges-img.png" alt="" class="badges-img" />
                <p class="text-muted small mb-0">50+ tasks completed</p>
              </div>
              <div class="text-center">
                <img src="../assets/badges-img.png" alt="" class="badges-img" />
                <p class="text-muted small mb-0">Top Performer</p>
              </div>
            </div>

            <div class="col-12 col-md-2 d-flex justify-content-md-end justify-content-start align-items-center gap-3">
              <button class="btn btn-primary rounded-pill px-4">Share</button>
              <div class="bell-wrapper">
                <i class="bi bi-bell"></i>
              </div>
            </div>
          </div>
          <!-- end top row -->

          <!-- ============================
               TWO EQUAL-HEIGHT BOXES (LEFT CV | RIGHT BASIC DETAILS)
               ============================ -->
          <div class="row mt-4 gx-4 align-items-stretch boxes-row px-4">

            <!-- LEFT BOX: CV (70%) -->
            <div class="col-12 col-lg-8">
              <div class="cv-box p-4 h-100 d-flex flex-column">

                <!-- CV content -->
                <div class="cv-content flex-grow-1">
                  <h6 class="fw-bold">CV Details</h6>

                  <div class="mt-3">
                    <h6 class="fw-bold">Area of expertise :</h6>
                    <div class="d-flex flex-wrap gap-2 mt-2">
                      <span class="me-3">• KSA PDPL</span>
                      <span>• NDMO</span>
                    </div>
                  </div>

                  <div class="mt-3">
                    <h6>Professional experience -</h6>
                    <ul class="small">
                      <li>
                        Ashish has over 20 years of rich experience working in cross-functional areas,
                        which include ISO 27001, ISO 27701, ISO 27017, ISO 22301, ISO 20000, ISO 9001, GDPR,
                        FESMA, NIST, COBIT, SOC2, PDPL, NDMO.
                      </li>
                      <li>
                        Ashish is currently focused on providing consulting services related to data
                        privacy, and DP controls.
                      </li>
                      <li>
                        Apart from consulting, Ashish has conducted numerous trainings for
                        CISSP / ISO 27001 / ISO 27701 / ISO 27005 / ISO 27035 / ISO 31000 / ISO 22301.
                      </li>
                    </ul>
                  </div>

                  <div class="mt-3">
                    <h6>Major engagements -</h6>
                    <div v-for="(engagement, idx) in engagements" :key="idx" class="engagement-card mt-3 p-3">
                      <div class="d-flex small mb-1 flex-wrap align-items-center">
                        <h6 class="fw-bold me-3 mb-0">{{ engagement.title }}</h6>
                        <span class="me-3"><strong class="color">Industry:</strong> {{ engagement.industry }}</span>
                        <span class="text-muted">{{ engagement.years }}</span>
                      </div>
                      <p class="mb-0 small text-muted">{{ engagement.description }}</p>
                    </div>
                  </div>
                </div> <!-- end cv-content -->

              </div> <!-- end cv-box -->
            </div>

            <!-- RIGHT BOX: Basic Details (30%) -->
            <div class="col-12 col-lg-4">
              <div class="basic-details-box p-4 h-100 d-flex flex-column">

                <h5 class="fw-bold text-center mb-3">Basic Details</h5>

                <ul class="list-unstyled mb-0 details-list">
                  <li class="d-flex mb-3">
                    <span class="label">Name</span>
                    <span class="value ms-auto">Amit Sharma</span>
                  </li>

                  <li class="d-flex mb-3">
                    <span class="label">Email</span>
                    <span class="value ms-auto">amit.sharma@example.com</span>
                  </li>
                  <li class="d-flex mb-3">
                    <span class="label">Phone:</span>
                    <span class="value ms-auto">+91 98765 43210</span>
                  </li>
                  <li class="d-flex mb-3">
                    <span class="label">Country</span>
                    <span class="value ms-auto">India</span>
                  </li>

                  <li class="d-flex mb-3">
                    <span class="label">University</span>
                    <span class="value ms-auto">University of Pune</span>
                  </li>

                  <li class="d-flex mb-3">
                    <span class="label">Qualification</span>
                    <span class="value ms-auto">Master's Degree</span>
                  </li>

                  <!-- SINGLE SKILLS ROW with progress kept at 0% -->
                  <li class="mb-3 d-flex align-items-center">
                    <span class="label">Skills</span>

                    <div class="skill-progress-wrap ms-3 me-2 flex-grow-1">
                      <div class="progress skill-progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 0%"></div>
                      </div>
                    </div>

                    <div class="skill-percent small text-muted" style="width:36px; text-align:right;">
                      0%
                    </div>
                  </li>

                </ul>

                <div class="mt-auto text-center">
                  <small class="text-muted">More info will appear here after API integration</small>
                </div>
              </div>
            </div>

          </div>
          <!-- end boxes row -->

        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: "MycvView",
  components: { Sidebar },
  data() {
    return {
      engagements: [
        {
          title: "Data Governance Framework",
          industry: "Media",
          years: "2022-2023",
          description: "Project leader for development of Data governance framework including compliance roadmap and UCL to comply to the requirements of the KSA PDPL, NDMO, ISO 27701 & GDPR for a large bank in KSA."
        },
        {
          title: "Privacy & Compliance Assessment",
          industry: "Finance",
          years: "2020-2021",
          description: "Led privacy maturity assessment and remediation planning for a regional financial services company."
        },
        {
          title: "Security Advisory",
          industry: "E-commerce",
          years: "2019-2020",
          description: "Provided ISO 27001 readiness and gap analysis for an e-commerce platform."
        }
      ]
    };
  }
};
</script>

<style scoped>
/* keep original color token */
.color { color: #696767de; }

/* fixed sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}

/* Banner (keeps your original look) */
.banner {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px 25px;
  color: white;
  box-shadow: 0 6px 18px rgba(47,128,237,0.12);
}
.banner-title { font-size: 16px; font-weight: 600; margin: 0; }
.banner-sub { margin: 4px 0 0; font-size: 13px; opacity: 0.95; }

/* Boxes visuals */
.cv-box,
.basic-details-box {
  background: #fff;
  border-radius: 12px;
  border: 1px solid rgba(15,23,42,0.04);
  box-shadow: 0 10px 26px rgba(12,30,50,0.04);
  min-height: 220px;
}

/* ensure equal height columns */
.boxes-row > .col-12 > .cv-box,
.boxes-row > .col-12 > .basic-details-box {
  /* default for stacked mobile */
}
@media (min-width: 992px) {
  /* on lg+ screens ensure both inner boxes fill the column height */
  .boxes-row > .col-12.col-lg-8 > .cv-box,
  .boxes-row > .col-12.col-lg-4 > .basic-details-box {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}

/* avatar & badges */
.profile-img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border: 2px solid #007bff;
  padding: 3px;
  border-radius: 50%;
}
.badges-img {
  width: 56px;
  height: 56px;
  object-fit: cover;
}

/* engagement card */
.engagement-card {
  border-radius: 8px;
  background: #f8fafc;
  border: 1px solid rgba(0,0,0,0.03);
}

/* basic details list */
.details-list .label {
  font-weight: 600;
  color: #4b5563;
}
.details-list .value {
  color: #111827;
  max-width: 60%;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* bell + button */
.bell-wrapper {
  width: 40px;
  height: 40px;
  background-color: #d6f2ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bell-wrapper i { color: #007bff; font-size: 18px; }

button {
  background-color: #008BC7;
  margin-right: 20px;
  color: white;
}

/* ---------- SKILLS PROGRESS STYLES (compact) ---------- */
/* wrap for progress so it grows and shrinks nicely */
.skill-progress-wrap {
  min-width: 0;
}

/* make bootstrap progress compact */
.skill-progress {
  height: 8px;
  border-radius: 8px;
  background: rgba(15,23,42,0.06);
  overflow: hidden;
}
.skill-progress .progress-bar {
  height: 8px;
  border-radius: 8px;
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  box-shadow: none;
}

/* percent text */
.skill-percent {
  color: #6b7280;
}

/* small responsive adjustments */
@media (max-width: 991.98px) {
  .profile-img { width: 56px; height: 56px; }
  .badges-img { width: 48px; height: 48px; }
}

@media (max-width: 575.98px) {
  /* stack label above progress on very small screens */
  .basic-details-box li.d-flex.align-items-center {
    flex-direction: column;
    align-items: stretch;
  }
  .basic-details-box .skill-percent {
    margin-top: 6px;
    text-align: left !important;
  }
}

/* responsive adjustments for details value truncation */
@media (max-width: 767.98px) {
  .cv-box, .basic-details-box { min-height: auto; }
  .details-list .value { max-width: 55%; }
  .banner { padding: 14px; }
}
</style>
