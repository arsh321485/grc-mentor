<template>
  <main class="mentorship-page">
    <div class="container-fluid row g-0">
      <!-- Sidebar -->
      <div class="col-2 col-md-2 sidebar-col">
       <Sidebargrc2 :currentStep="4"  />
      </div>

      <!-- Main -->
      <div class="col-10 col-md-10 main-col">
        <!-- Banner -->
        <div class="banner mb-5">
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
            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex flex-column align-items-center"
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
import Sidebargrc2 from "@/components/Sidebargrc2.vue";
import ExpertBadge from "@/assets/expert-mentee.png";

export default {
  name: "BadgesView",
  components: { Sidebargrc2 },
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
  width: 100%;
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

</style>
