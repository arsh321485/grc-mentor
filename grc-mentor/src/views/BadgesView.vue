<template>
  <main class="mentorship-page">
    <div class="container-fluid row g-0">
      <!-- Sidebar -->
      <div class="col-2 col-md-2 sidebar-col">
       <Sidebar class="sidebar" />
      </div>

      <!-- Main -->
      <div class="col-10 col-md-10 main-col">
        <!-- Banner -->
        <div class="banner mb-5 ms-5">
          <div class="banner-left">
            <h6 class="banner-title">Badges</h6>
            <p class="banner-sub">
             A snapshot of your career graph
            </p>
          </div>
        </div>

     <!-- Badges Section -->
        <section>
        <!-- Badges Grid -->
        <div class="row px-3 px-md-5">
          <div
            v-for="(badge, index) in badges"
            :key="index"
            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ms-3 d-flex flex-column align-items-center"
          >
            <img :src="badge.img" alt="" class="badges-img mb-2" />
            <p class="grid-text mb-1">{{ badge.title }}</p>
            <p class="grid-subtext">{{ badge.date }}</p>
          </div>
        </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import ExpertBadge from "@/assets/expert-mentee.png";

export default {
  name: "BadgesView",
  components: { Sidebar },
  data() {
    return {
      badges: [
        { img: ExpertBadge, title: "Expert mentee", date: "Earned on 11th July, 2025" },
        { img: ExpertBadge, title: "Expert mentee", date: "Earned on 11th July, 2025" },
      ],
    };
  },
  methods: {
    openCalendar() {
      alert("Calendar view clicked!");
    },
  },
};
</script>

<style scoped>
/* Text Styles */
.grid-subtext {
  font-size: 13px;
  color: #00000099;
  text-align: center;
}

.grid-text {
  font-size: 19px;
  color: #000000DE;
  font-weight: 600;
  text-align: center;
}

.badges-text {
  font-size: 38px;
}

.badges-subtext {
  font-size: 14px;
  color: #00000099;
}

/* Badge Image */
.badges-img {
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 10px;
}
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  font-family: "Inter", sans-serif;
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
  margin-left: 16.5%; /* push main content after fixed sidebar */
  padding: 0 2rem;
}

.banner {
  margin-top: 30px;
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
/* ============================================================================
   📱 TABLET RESPONSIVE FIX — for Badges Page (768px–1024px)
   ============================================================================ */
@media (min-width: 768px) and (max-width: 1024px) {

  /* Sidebar becomes 25% width */
  .sidebar-col {
    flex: 0 0 25% !important;
    max-width: 25% !important;
  }

  /* Main becomes 75% */
  .main-col,
  .col-10.col-md-10 {
    flex: 0 0 75% !important;
    max-width: 75% !important;
    margin-left: 0 !important;   /* Remove forced 16.5% shift */
    padding-left: 20px !important;
  }

  /* Banner – remove ms-5 overflow */
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

  /* Badge grid fix */
  .row.px-3.px-md-5 {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  /* Remove ms-3 from cards that breaks layout */
  .col-12.col-sm-6.col-md-4.col-lg-3.ms-3 {
    margin-left: 0 !important;
  }

  /* Badge images resize for tablet */
  .badges-img {
    max-width: 200px !important;
  }

  /* Text resize */
  .grid-text {
    font-size: 17px !important;
  }

  .grid-subtext {
    font-size: 12px !important;
  }

  /* Prevent horizontal scroll */
  .mentorship-page {
    overflow-x: hidden !important;
  }
}


</style>
