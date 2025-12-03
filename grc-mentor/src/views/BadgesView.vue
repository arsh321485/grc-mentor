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
        <div class="banner mb-4 ms-5">
          <div class="banner-left">
            <h6 class="banner-title">Badges</h6>
            <p class="banner-sub">A snapshot of your career graph</p>
          </div>
        </div>

        <!-- Tabs -->
        <div class="tabs-wrapper ms-5 mb-3">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            :class="['tab-btn', { active: activeTab === tab }]"
            type="button"
          >
            {{ tab }}
          </button>
        </div>

        <!-- Badges Section -->
        <section>
          <!-- Badges Grid -->
          <div class="row px-3 px-md-5">
            <div
              v-for="(badge, index) in filteredBadges"
              :key="index"
              class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex flex-column align-items-center"
            >
              <img
                :src="badge.img"
                :alt="badge.title"
                class="badges-img mb-2"
                width="160"
              />
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
import { defineComponent } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import ExpertBadge from "@/assets/expert-mentee.png";

type Badge = {
  tab: "GRC101" | "GRC301" | "GRC501";
  img: string;
  title: string;
  date: string;
};

export default defineComponent({
  name: "BadgesView",
  components: { Sidebar },
  data() {
    return {
      tabs: ["GRC101", "GRC301", "GRC501"] as const,
      activeTab: "GRC101" as "GRC101" | "GRC301" | "GRC501",
      badges: [
        // GRC101 (4 badges)
        { tab: "GRC101", img: ExpertBadge, title: "GRC101 — Level 1", date: "Earned on 01 Dec 2025" },
        { tab: "GRC101", img: ExpertBadge, title: "GRC101 — Level 2", date: "Earned on 03 Dec 2025" },
        { tab: "GRC101", img: ExpertBadge, title: "GRC101 — Level 3", date: "Earned on 05 Dec 2025" },
        { tab: "GRC101", img: ExpertBadge, title: "GRC101 — Level 4", date: "Earned on 07 Dec 2025" },

        // GRC301 (4 badges)
        { tab: "GRC301", img: ExpertBadge, title: "GRC301 — Badge A", date: "Earned on 02 Jan 2026" },
        { tab: "GRC301", img: ExpertBadge, title: "GRC301 — Badge B", date: "Earned on 04 Jan 2026" },
        { tab: "GRC301", img: ExpertBadge, title: "GRC301 — Badge C", date: "Earned on 06 Jan 2026" },
        { tab: "GRC301", img: ExpertBadge, title: "GRC301 — Badge D", date: "Earned on 08 Jan 2026" },

        // GRC501 (4 badges)
        { tab: "GRC501", img: ExpertBadge, title: "GRC501 — Badge 1", date: "Earned on 10 Feb 2026" },
        { tab: "GRC501", img: ExpertBadge, title: "GRC501 — Badge 2", date: "Earned on 12 Feb 2026" },
        { tab: "GRC501", img: ExpertBadge, title: "GRC501 — Badge 3", date: "Earned on 14 Feb 2026" },
        { tab: "GRC501", img: ExpertBadge, title: "GRC501 — Badge 4", date: "Earned on 16 Feb 2026" },
      ] as Badge[],
    };
  },
  computed: {
    filteredBadges(): Badge[] {
      // show first 4 badges for the active tab (guards in case there are more)
      return this.badges.filter((b) => b.tab === this.activeTab).slice(0, 4);
    },
  },
});
</script>

<style scoped>
/* keep your existing styles and add tab styles */

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

/* Badge Image */
.badges-img {
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 10px;
}

/* Page and layout */
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
  margin-left: 16.5%;
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

/* Tabs */
.tabs-wrapper {
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
  padding-left: 10px;
}

.tab-btn {
  background: #f0f7fb;
  border: 1px solid #dbeff9;
  padding: 8px 18px;
  border-radius: 18px;
  font-size: 14px;
  cursor: pointer;
  color: #0b6b9a;
  transition: all 0.18s ease;
}

.tab-btn.active {
  background: #2d9cdb;
  color: #fff;
  border-color: #2d9cdb;
}

/* Responsive adjustments */
@media (min-width: 768px) and (max-width: 1024px) {
  .sidebar-col {
    flex: 0 0 25% !important;
    max-width: 25% !important;
  }

  .main-col,
  .col-10.col-md-10 {
    flex: 0 0 75% !important;
    max-width: 75% !important;
    margin-left: 0 !important;
    padding-left: 20px !important;
  }

  .banner {
    margin-left: 10px !important;
    width: calc(100% - 10px) !important;
    padding: 14px 18px !important;
  }

  .badges-img {
    max-width: 200px !important;
  }

  .grid-text {
    font-size: 17px !important;
  }

  .grid-subtext {
    font-size: 12px !important;
  }

  .mentorship-page {
    overflow-x: hidden !important;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .tabs-wrapper {
    overflow-x: auto;
    white-space: nowrap;
    padding-left: 12px;
  }
  .tab-btn {
    flex-shrink: 0;
  }
  .main-col {
    margin-left: 0;
    padding: 0 1rem;
  }
}
</style>
