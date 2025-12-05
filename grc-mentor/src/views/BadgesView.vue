<template>
  <main class="mentorship-page" aria-live="polite">
    <div class="container-fluid row g-0">
      <!-- Sidebar (unchanged visually) -->
      <div class="col-2 col-md-2 sidebar-col">
        <Sidebar class="sidebar" />
      </div>

      <!-- Main content -->
      <div class="col-10 col-md-10 main-col">
        <!-- Banner (kept visually the same but no extra top gap) -->
        <div class="banner">
          <div class="banner-left">
            <h6 class="banner-title">Badges</h6>
            <p class="banner-sub">A snapshot of your career graph</p>
          </div>
        </div>

        <!-- Tabs -->
        <div class="tabs-wrapper">
          <nav class="tabs" role="tablist" aria-label="Course tabs">
            <button
              v-for="t in tabs"
              :key="t.id"
              :class="['tab', { active: selectedTab === t.id }]"
              @click="selectTab(t.id)"
              role="tab"
              :aria-selected="selectedTab === t.id"
            >
              {{ t.label }}
            </button>
          </nav>
        </div>

        <!-- Hint -->
        <p class="unlock-hint">
          Only the first badge of <strong>GRC101</strong> is currently enabled — other badges are locked until prerequisites are complete.
        </p>

        <!-- Badges grid -->
        <section class="badges-section" aria-label="Badges">
          <div class="badges-grid">
            <article
              v-for="(badge, idx) in currentBadges"
              :key="badge.id || idx"
              class="badge-card"
              :class="{ locked: !badge.active }"
              role="button"
              tabindex="0"
              @click="openBadge(badge)"
              @keydown.enter.space.prevent="openBadge(badge)"
              :aria-label="badge.title + (badge.active ? ', open badge' : ', locked')"
            >
              <div class="badge-media" aria-hidden="true">
                <img :src="badge.img || expertBadge" :alt="badge.title" class="badge-img" />
              </div>

              <div class="badge-info">
                <div class="badge-title">{{ badge.title }}</div>
                <div class="badge-subtext">{{ badge.subtitle }}</div>
                <div class="badge-date">{{ badge.date }}</div>
              </div>

              <div class="badge-actions">
                <button v-if="badge.active" class="btn btn-primary btn-view" @click.stop="openBadge(badge)">View</button>
                <button v-else class="btn btn-outline-secondary btn-locked" @click.stop="lockedClick(badge)">
                  🔒 Locked
                </button>
              </div>

              <div v-if="!badge.active" class="locked-overlay" aria-hidden="true">
                <div class="lock-inner">🔒</div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
/* Replace this import with your uploaded asset path if you prefer,
   e.g. import expertBadge from "@/assets/your-uploaded-image.png" */
import expertBadge from "@/assets/expert-mentee.png";

export default {
  name: "BadgesView",
  components: { Sidebar },
  data() {
    return {
      expertBadge,
      tabs: [
        { id: "grc101", label: "GRC101" },
        { id: "grc301", label: "GRC301" },
        { id: "grc501", label: "GRC501" }
      ],
      selectedTab: "grc101",
      badgesMap: {
        grc101: [
          {
            id: "g101-1",
            title: "Control Mapping Novice",
            subtitle: "Intro Badge",
            date: "Earned 11 Jul 2025",
            img: expertBadge,
            active: true,
            url: "https://www.virtualbadge.io/certificate-validator?credential=84f317fb-8410-4d64-9a42-397fae1800cd"
          },
          {
            id: "g101-2",
            title: "Documentation Badge",
            subtitle: "Course Progress",
            date: "Locked",
            img: expertBadge,
            active: false,
            url: ""
          },
          {
            id: "g101-3",
            title: "Risk Assessment Basics",
            subtitle: "Course Progress",
            date: "Locked",
            img: expertBadge,
            active: false,
            url: ""
          },
          {
            id: "g101-4",
            title: "Audit Support Starter",
            subtitle: "Course Progress",
            date: "Locked",
            img: expertBadge,
            active: false,
            url: ""
          }
        ],
        grc301: [
          { id: "g301-1", title: "Evidence Collector", subtitle: "Intermediate", date: "Locked", img: expertBadge, active: false, url: "" },
          { id: "g301-2", title: "Control Testing Basic", subtitle: "Intermediate", date: "Locked", img: expertBadge, active: false, url: "" },
          { id: "g301-3", title: "Audit Prep", subtitle: "Intermediate", date: "Locked", img: expertBadge, active: false, url: "" },
          { id: "g301-4", title: "Evidence Packaging", subtitle: "Intermediate", date: "Locked", img: expertBadge, active: false, url: "" }
        ],
        grc501: [
          { id: "g501-1", title: "Program Governance", subtitle: "Advanced", date: "Locked", img: expertBadge, active: false, url: "" },
          { id: "g501-2", title: "TPRM Intro", subtitle: "Advanced", date: "Locked", img: expertBadge, active: false, url: "" },
          { id: "g501-3", title: "Audit Coordination", subtitle: "Advanced", date: "Locked", img: expertBadge, active: false, url: "" },
          { id: "g501-4", title: "Reporting & Dashboards", subtitle: "Advanced", date: "Locked", img: expertBadge, active: false, url: "" }
        ]
      }
    };
  },
  computed: {
    currentBadges(): Array<any> {
      return this.badgesMap[this.selectedTab] || [];
    }
  },
  methods: {
    selectTab(id: string) {
      this.selectedTab = id;
      // scroll badges into view (smooth)
      const el = document.querySelector(".badges-section") as HTMLElement | null;
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    openBadge(badge: any) {
      if (!badge.active) return this.lockedClick(badge);
      if (badge.url) {
        window.open(badge.url, "_blank", "noopener");
      } else {
        // fallback details
        alert(`${badge.title}\n\n${badge.subtitle}\n${badge.date}`);
      }
    },
    lockedClick(badge: any) {
      alert(`${badge.title} is locked. Complete the prerequisite course to unlock this badge.`);
    }
  }
};
</script>

<style scoped>
/* --------------------------
   Base layout + visual reset
   -------------------------- */
:root {
  --sidebar-offset: 16.5%;
  --main-max-width: 1200px;
  --card-radius: 12px;
}

/* Page background / font */
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  overflow-x: hidden;
}

/* Sidebar: keep fixed and visually unchanged */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
  /* Do not change look — width managed by layout */
}

/* Main column: small top padding only so banner sits near top */
.main-col {
  margin-left: var(--sidebar-offset);
  padding: 18px 2rem 48px 2rem;
  box-sizing: border-box;
  min-height: 100vh;
}

/* Banner: keep your look but remove any large margins */
.banner {
  margin-top: 0;
  margin-bottom: 18px;
  width: calc(100% - 0px);
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 16px 22px;
  color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 10;
}
.banner-title { font-size: 16px; font-weight: 600; margin: 0; }
.banner-sub { font-size: 13px; opacity: 0.92; margin: 4px 0 0 0; }

/* Tabs */
.tabs-wrapper { width: 100%; max-width: var(--main-max-width); margin-bottom: 10px; }
.tabs {
  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 4px;
  flex-wrap: wrap;
}
.tab {
  background: transparent;
  border: 1px solid rgba(15, 23, 42, 0.06);
  color: #0b3a66;
  padding: 8px 14px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}
.tab.active {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  color: #fff;
  box-shadow: 0 6px 20px rgba(47, 128, 237, 0.12);
  border: none;
}

/* Hint text */
.unlock-hint {
  color: #374151;
  margin: 8px 0 18px;
  font-size: 14px;
  max-width: var(--main-max-width);
}

/* Badges Section wrapper */
.badges-section {
  width: 100%;
  max-width: var(--main-max-width);
}

/* Responsive grid: 1 column mobile, 2 columns >=576, 4 columns >=992 */
.badges-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr; /* default: 1 column */
  align-items: start;
}

/* Square card layout */
.badge-card {
  background: #fff;
  border-radius: var(--card-radius);
  padding: 12px;
  box-shadow: 0 10px 30px rgba(20, 30, 50, 0.06);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: transform 140ms ease, box-shadow 140ms ease;
  cursor: pointer;
}

/* Square image container using aspect-ratio */
.badge-media {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(180deg,#f6fbff,#eef6ff);
  display:flex;
  align-items:center;
  justify-content:center;
}
.badge-img {
  width: 78%;
  height: 78%;
  object-fit: contain;
  display: block;
}

/* Text area */
.badge-info {
  padding: 10px 6px 6px;
  text-align: center;
}
.badge-title { font-size: 16px; font-weight: 700; color: #0b2540; margin-bottom: 6px; }
.badge-subtext { font-size: 13px; color: #475569; margin-bottom: 6px; }
.badge-date { font-size: 12px; color: #94a3b8; }

/* Actions area */
.badge-actions {
  display:flex;
  gap:8px;
  justify-content:center;
  margin-top:auto;
  padding-top:8px;
}
.btn-view, .btn-locked {
  border-radius: 8px;
  padding: 8px 12px;
  font-weight:600;
}

/* Locked visuals */
.badge-card.locked { opacity: 0.72; filter: grayscale(0.04); pointer-events: auto; }
.locked-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(255,255,255,0.65), rgba(255,255,255,0.65));
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius: var(--card-radius);
  z-index: 5;
}
.lock-inner {
  background: #fff;
  padding: 10px 12px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(10,20,30,0.08);
  font-weight:700;
}

/* Hover / focus */
.badge-card:focus,
.badge-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(20,30,50,0.08);
  outline: none;
}

/* ======================
   Responsive Breakpoints
   ====================== */

/* >=576px => 2 columns */
@media (min-width: 576px) {
  .badges-grid { grid-template-columns: repeat(2, 1fr); }
  .main-col { padding-left: 18px; padding-right: 18px; }
}

/* >=768px (tablets) we keep 2 columns for better readability */
@media (min-width: 768px) {
  .badges-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .main-col { padding-left: 28px; padding-right: 28px; padding-top: 20px; }

}

/* >=992px => 4 columns (desktop) */
@media (min-width: 992px) {
  .badges-grid { grid-template-columns: repeat(4, 1fr); gap: 22px; }
  .main-col { padding-left: 36px; padding-right: 36px; padding-top: 20px; }
}

/* >=1200px small polish */
@media (min-width: 1200px) {
  .badges-grid { gap: 26px; }
}

/* Defensive: ensure banner isn't pushed down by utility margins */
.banner { margin-top: 0 !important;
}

/* When viewport becomes narrow, collapse sidebar stacking */
@media (max-width: 767.98px) {
  .main-col { margin-left: 0; padding-left: 12px; padding-right: 12px; padding-top: 14px; }
}

/* Accessibility helpers */
.badge-card[role="button"] { outline: none; }
.badge-card:focus { box-shadow: 0 18px 40px rgba(20,30,50,0.12); transform: translateY(-5px); }

/* Limit maximum width for centered layout */
.badges-section { margin-top: 6px; margin-bottom: 40px; }
</style>


<!-- <style scoped>
/* --------------------------
   Base layout + visual reset
   -------------------------- */
:root {
  --sidebar-offset: 16.5%;
  --main-max-width: 1200px;
  --card-radius: 12px;
}

/* Page background / font */
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  overflow-x: hidden;
}

/* Sidebar: keep fixed and visually unchanged */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
}

/* Main column: small top padding only so banner sits near top */
.main-col {
  margin-left: var(--sidebar-offset);
  padding: 14px 18px 48px 18px;
  box-sizing: border-box;
  min-height: 100vh;
}

/* Banner: keep your look but remove any large margins */
.banner {
  margin-top: 0;
  margin-bottom: 12px;
  width: calc(100% - 0px);
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 14px 20px;
  color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 10;
}
.banner-title { font-size: 16px; font-weight: 600; margin: 0; }
.banner-sub { font-size: 13px; opacity: 0.92; margin: 4px 0 0 0; }

/* Tabs container: make responsive and optionally sticky */
.tabs-wrapper {
  width: 100%;
  max-width: var(--main-max-width);
  margin-bottom: 8px;
  position: relative;
}

/* Make tabs horizontally scrollable on narrow widths (prevents awkward wrapping) */
.tabs {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 6px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(15,23,42,0.08) transparent;
  background: transparent;
  border-radius: 12px;
}

/* hide default scrollbar but still allow scroll (nice on Mac/Windows) */
.tabs::-webkit-scrollbar { height: 8px; }
.tabs::-webkit-scrollbar-thumb { background: rgba(15,23,42,0.06); border-radius: 20px; }
.tabs::-webkit-scrollbar-track { background: transparent; }

/* Make tabs sticky when page scrolls (stays under banner) */
@supports (position: sticky) {
  .tabs-wrapper { position: sticky; top: 8px; z-index: 9; }
}

/* Tab button styles */
.tab {
  background: transparent;
  border: 1px solid rgba(15, 23, 42, 0.06);
  color: #0b3a66;
  padding: 8px 14px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  flex: 0 0 auto; /* prevents growing when container is wide */
}
.tab.active {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  color: #fff;
  box-shadow: 0 6px 20px rgba(47, 128, 237, 0.12);
  border: none;
}

/* Hint text */
.unlock-hint {
  color: #374151;
  margin: 8px 0 16px;
  font-size: 14px;
  max-width: var(--main-max-width);
}

/* Badges Section wrapper */
.badges-section {
  width: 100%;
  max-width: var(--main-max-width);
}

/* Responsive grid:
   - default: 1 column
   - >= 480px: 2 columns
   - >= 768px: 2 columns
   - >= 992px: 3 columns (small laptops)
   - >= 1366px: 4 columns (desktop)
   - >= 1700px: 5 columns (ultra-wide)
*/
.badges-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr;
  align-items: start;
}

/* Square card layout */
.badge-card {
  background: #fff;
  border-radius: var(--card-radius);
  padding: 12px;
  box-shadow: 0 10px 30px rgba(20, 30, 50, 0.06);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: transform 140ms ease, box-shadow 140ms ease;
  cursor: pointer;
}

/* Square image container using aspect-ratio */
.badge-media {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(180deg,#f6fbff,#eef6ff);
  display:flex;
  align-items:center;
  justify-content:center;
}
.badge-img {
  width: 78%;
  height: 78%;
  object-fit: contain;
  display: block;
}

/* Text area */
.badge-info {
  padding: 10px 6px 6px;
  text-align: center;
}
.badge-title { font-size: 16px; font-weight: 700; color: #0b2540; margin-bottom: 6px; }
.badge-subtext { font-size: 13px; color: #475569; margin-bottom: 6px; }
.badge-date { font-size: 12px; color: #94a3b8; }

/* Actions area */
.badge-actions {
  display:flex;
  gap:8px;
  justify-content:center;
  margin-top:auto;
  padding-top:8px;
}
.btn-view, .btn-locked {
  border-radius: 8px;
  padding: 8px 12px;
  font-weight:600;
}

/* Locked visuals */
.badge-card.locked { opacity: 0.72; filter: grayscale(0.04); pointer-events: auto; }
.locked-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(255,255,255,0.65), rgba(255,255,255,0.65));
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius: var(--card-radius);
  z-index: 5;
}
.lock-inner {
  background: #fff;
  padding: 10px 12px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(10,20,30,0.08);
  font-weight:700;
}

/* Hover / focus */
.badge-card:focus,
.badge-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(20,30,50,0.08);
  outline: none;
}

/* ======================
   Responsive Breakpoints
   ====================== */

/* >=480px => 2 columns (small phones / large phones) */
@media (min-width: 480px) {
  .badges-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .main-col { padding-left: 16px; padding-right: 16px; }
}

/* >=768px => keep 2 columns for tablets (landscape/portrait) */
@media (min-width: 768px) {
  .badges-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
  .main-col { padding-left: 24px; padding-right: 24px; padding-top: 16px; }
}

/* >=992px => 3 columns (small laptops / 1024 ~ 1365px): this is the sweet spot for small laptops */
@media (min-width: 992px) {
  .badges-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .main-col { padding-left: 28px; padding-right: 28px; padding-top: 18px; }
}

/* >=1366px => 4 columns (typical desktop) */
@media (min-width: 1366px) {
  .badges-grid { grid-template-columns: repeat(4, 1fr); gap: 22px; }
  .main-col { padding-left: 36px; padding-right: 36px; padding-top: 20px; }
}

/* >=1700px => 5 columns (ultra-wide monitors) */
@media (min-width: 1700px) {
  .badges-grid { grid-template-columns: repeat(5, 1fr); gap: 26px; }
  .main-col { padding-left: 48px; padding-right: 48px; padding-top: 20px; }
}

/* Defensive: ensure banner isn't pushed down by utility margins */
.banner { margin-top: 0 !important; }

/* When viewport becomes narrow, collapse sidebar stacking */
@media (max-width: 767.98px) {
  .main-col { margin-left: 0; padding-left: 12px; padding-right: 12px; padding-top: 12px; }
}

/* On very narrow widths, allow tabs to be gesture-scrollable and hide bubble shadow */
@media (max-width: 480px) {
  .tabs { gap: 8px; padding: 6px 4px; }
  .tab { padding: 6px 10px; font-size: 14px; }
}

/* Accessibility helpers */
.badge-card[role="button"] { outline: none; }
.badge-card:focus { box-shadow: 0 18px 40px rgba(20,30,50,0.12); transform: translateY(-5px); }

/* Limit maximum width for centered layout */
.badges-section { margin-top: 6px; margin-bottom: 40px; max-width: var(--main-max-width); }

/* Small polish: keep tabs left aligned visually with cards in narrow screens */
@media (max-width: 1024px) {
  .tabs { padding-left: 0; padding-right: 8px; }
}
/* === Tabs: make non-scrolling / nicely aligned on laptops & monitors === */

/* At small laptop and up, stop horizontal scrolling and left-align tabs */
@media (min-width: 992px) {
  .tabs {
    overflow-x: visible !important;      /* disable horizontal scroll */
    justify-content: flex-start !important; /* left align tabs */
    gap: 12px !important;                /* slightly larger gap on bigger screens */
    padding: 0 !important;               /* remove scroll padding */
  }

  /* Ensure the tabs wrapper sits visually with the content (not floating) */
  .tabs-wrapper {
    position: relative !important;
    top: 0 !important;
    margin-left: 0 !important;
    max-width: var(--main-max-width) !important;
  }
}

/* At large desktop widths, make tabs compact and centered within main area */
@media (min-width: 1366px) {
  .tabs {
    gap: 14px !important;
    padding: 6px 0 !important;
  }

  .tabs-wrapper {
    display: flex !important;
    justify-content: flex-start !important; /* keep aligned with content */
    padding-left: 4px !important;
  }
}

/* Defensive: keep tabs sticky under the banner but not fixed to viewport on large screens */
@media (min-width: 992px) {
  .tabs-wrapper { position: sticky; top: 8px; z-index: 9; }
}

</style> -->
