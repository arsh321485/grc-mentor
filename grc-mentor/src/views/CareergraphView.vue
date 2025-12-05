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
        <div class="banner mb-3 ms-4 mt-3">
          <div class="banner-left">
            <h6 class="banner-title">Career Page</h6>
            <p class="banner-sub">A snapshot of your career page</p>
          </div>
        </div>

        <!-- Cards Section (centered, wider cards, no tabs) -->
        <section class="cards-area ms-4 me-4">
          <p class="unlock-hint">Complete the earlier course to unlock the next one. Example: finish <strong>GRC101</strong> to unlock <strong>GRC301</strong>.</p>

          <div class="cards-row centered">
            <article
              v-for="c in orderedCourses"
              :key="c.id"
              class="career-card"
              :class="{ inactive: !c.active }"
              @click="c.active && openCourse(c.id)"
              role="button"
              tabindex="0"
              @keydown.enter.space.prevent="c.active && openCourse(c.id)"
            >
              <!-- IMAGE / MEDIA -->
              <div class="card-media" :aria-hidden="!c.img">
                <img :src="cardImage" :alt="c.title + ' image'" loading="lazy" />
                <div class="media-badge">{{ c.levelTag }}</div>
              </div>

              <div class="card-top">
                <div class="card-tag">{{ c.levelTag }}</div>
                <div class="card-end">{{ c.endsIn }}</div>
              </div>

              <h4 class="card-title">{{ c.title }}</h4>
              <p class="card-sub">{{ c.subtitle }}</p>

              <div class="card-body">
                <p class="muted"><strong>Focus:</strong> {{ c.focus || '—' }}</p>

                <p class="mt-2"><strong>Skills Acquired</strong></p>
                <ul class="skill-list">
                  <li v-for="(s,i) in c.skills" :key="i">{{ s }}</li>
                </ul>

                <p class="mt-2"><strong>Frameworks</strong></p>
                <div class="frameworks">
                  <span v-for="(f,i) in c.frameworks" :key="i" class="chip">{{ f }}</span>
                </div>
              </div>

              <div class="card-footer">
                <div class="badges-inline">
                  <div v-for="(b,i) in c.badges" :key="i" class="badge-small">
                    <img :src="b.img || expertMentee" alt="badge" />
                  </div>
                </div>
                <div class="footer-actions">
                  <button v-if="c.active" class="btn btn-primary" @click.stop="openCourse(c.id)">Open</button>
                  <button v-else class="btn btn-outline-secondary" @click.stop="lockedClick(c)">Locked</button>
                </div>
              </div>

              <div v-if="!c.active" class="card-lock">
                <div class="lock-inner">🔒<span>Locked</span></div>
              </div>
            </article>
          </div>
        </section>

      </div>
    </div>

    <!-- Large square modal -->
    <teleport to="body">
      <div v-if="modal.visible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-square" role="dialog" aria-modal="true">
          <header class="modal-square-header">
            <h3>{{ modal.course.title }}</h3>
            <button class="btn-close" @click="closeModal">×</button>
          </header>

          <div class="modal-square-body">
            <h5>Focus</h5>
            <p>{{ modal.course.focus }}</p>

            <h5>Skills Acquired</h5>
            <ul>
              <li v-for="(s,i) in modal.course.skills" :key="i">{{ s }}</li>
            </ul>

            <h5>Frameworks</h5>
            <div class="frameworks mb-3">
              <span v-for="(f,i) in modal.course.frameworks" :key="i" class="chip">{{ f }}</span>
            </div>

            <h5>Badges</h5>
            <div class="badges-grid-wide">
              <div v-for="(b,i) in modal.course.badges" :key="i" class="badge-card-wide">
                <img :src="b.img || expertMentee" alt="badge" />
                <div class="badge-info">
                  <div class="badge-name">{{ b.name }}</div>
                  <div class="badge-issuer small text-muted">{{ b.issuedBy }}</div>
                </div>
              </div>
            </div>

            <h5>Certificates</h5>
            <ul>
              <li v-for="(c,idx) in modal.course.certificates" :key="idx">{{ c.title }} — <small class="text-muted">{{ c.issuer }}</small></li>
            </ul>
          </div>

          <footer class="modal-square-footer">
            <button class="btn btn-outline-secondary" @click="simulateAuditForCourse(modal.course)">Simulate Audit</button>
            <button class="btn btn-primary" @click="proceedToCourse(modal.course)">Start Course</button>
          </footer>
        </div>
      </div>
    </teleport>
  </main>
</template>

<script lang="ts">

import Sidebar from '@/components/Sidebar.vue';
import expertMentee from '@/assets/expert-mentee.png';
import  cardImage from '@/assets/education-research.jpg';

export default {
  name: 'CareergraphView',
  components: { Sidebar },
  data() {
    return {
      cardImage,
      expertMentee,
      coursesMap: {
        grc101: {
          id: 'grc101',
          title: 'GRC101',
          subtitle: 'Intro to Operational GRC',
          focus: 'Operational execution, mapping controls, and supporting audits',
          skills: [
            'Control Mapping',
            'Documentation',
            'Risk Assessment Basics',
          ],
          frameworks: ['NIST CSF: Identify/Protect/Detect/Respond/Recover', 'ISO 27001: Annex A'],
          badges: [{ name: 'Control Mapping Novice', issuedBy: 'Internal', img: null }, { name: 'Documentation Badge', issuedBy: 'Internal', img: null }],
          certificates: [{ title: 'Intro to NIST CSF', issuer: 'Training Co', date: '2025-07-01' }],
          levelTag: 'GRC 101',
          endsIn: 'Ongoing',
          active: true,
          // new image field (fallback handled in template)
          img: expertMentee
        },
        grc301: {
          id: 'grc301',
          title: 'GRC301',
          subtitle: 'Intermediate: Controls & Evidence',
          focus: 'Deep dive into control implementation and collecting audit evidence.',
          skills: ['Advanced control mapping', 'Evidence collection for audits', 'Control testing basics'],
          frameworks: ['ISO 27001', 'NIST CSF (Detect/Respond)'],
          badges: [{ name: 'Evidence Collector', issuedBy: 'Internal', img: null }],
          certificates: [],
          levelTag: 'GRC 301',
          endsIn: 'Coming soon',
          active: false,
          img: expertMentee
        },
        grc501: {
          id: 'grc501',
          title: 'GRC501',
          subtitle: 'Advanced: Program Management & Audit Support',
          focus: 'Program-level controls, vendor governance and audit management.',
          skills: ['Program governance', 'Third-party risk management (TPRM)', 'Audit coordination & reporting'],
          frameworks: ['ISO 27001', 'NIST CSF (Identify/Protect)'],
          badges: [],
          certificates: [],
          levelTag: 'GRC 501',
          endsIn: 'Coming soon',
          active: false,
          img: expertMentee
        }
      },
      modal: {
        visible: false,
        course: {} as any
      }
    };
  },
  computed: {
    orderedCourses() {
      return [this.coursesMap.grc101, this.coursesMap.grc301, this.coursesMap.grc501];
    }
  },
  methods: {
    openCourse(id: string) {
      const c = (this.coursesMap as Record<string, any>)[id];
      if (!c) return;
      if (!c.active) return this.lockedClick(c);
      this.modal.course = JSON.parse(JSON.stringify(c));
      this.modal.visible = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.modal.visible = false;
      document.body.style.overflow = '';
    },
    lockedClick(course: any) {
      alert(`${course.title} is locked. Complete the previous course to unlock.`);
    },
    simulateAuditForCourse(course: any) {
      alert('Simulated audit evidence created for ' + course.title);
    },
    proceedToCourse(course: any) {
      alert('Proceed to ' + course.title + ' (placeholder)');
    }
  }
};
</script>

<style scoped>
.career-page {
  background: #f8fbff;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
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

/* cards area */
.cards-area { margin-left: 16px; margin-right:16px; }
.unlock-hint { color:#374151; margin-bottom:12px; }

/* Cards row */
.cards-row { display:flex; gap:20px; align-items:flex-start; justify-content:center; }

/* ---- Card ---- */
.career-card {
  width: 440px;
  height: 520px;
  background:#fff;
  border-radius:12px;
  padding:18px;
  box-shadow:0 12px 36px rgba(20,30,50,0.06);
  position:relative;
  display:flex;
  flex-direction:column;
}

/* IMAGE / media area at top of card */
.card-media {
  position: relative;
  width: 100%;
  border-radius: 10px;
  /* overflow: hidden; */
  margin-bottom: 12px;
  height: 160px;
  background: linear-gradient(180deg, #f4f7fb, #fff);
}
.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  -webkit-user-drag: none;
  user-select: none;
}

/* small badge overlay on the media */
.media-badge {
  position: absolute;
  left: 12px;
  bottom: 10px;
  background: rgba(255,255,255,0.9);
  color: #0b66b2;
  padding: 6px 8px;
  border-radius: 8px;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(10,20,30,0.08);
  font-size: 12px;
}

/* inactive state */
.career-card.inactive { opacity:0.6; filter:grayscale(0.02); cursor:not-allowed; }
.card-top { display:flex; justify-content:space-between; align-items:center; }
.card-tag { background:#f1f6ff; color:#0b66b2; padding:6px 8px; border-radius:8px; font-weight:700; }
.card-title { margin:12px 0 6px; font-size:20px; }
.card-sub { color:#6b7280; margin-bottom:8px; }
.card-body { flex:1 1 auto; overflow:auto; }
.skill-list { margin:6px 0 0 18px; }
.frameworks { margin-top:8px; display:flex; gap:8px; flex-wrap:wrap; }
.chip { background:#f1f6ff; padding:6px 10px; border-radius:999px;  border:1px solid #e6f0fb; }
.card-footer { display:flex; justify-content:space-between; align-items:center; margin-top:12px; }
.badges-inline { display:flex; gap:8px; }
.badge-small img { width:44px; height:44px; border-radius:6px; }
.footer-actions .btn { border-radius:8px; }
.card-lock { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)); border-radius:12px; }
.lock-inner { background:#fff; padding:10px 14px; border-radius:10px; box-shadow:0 8px 20px rgba(0,0,0,0.08); display:flex; gap:8px; align-items:center; }

/* Badges grid wide */
.badges-grid-wide { display:flex; gap:12px; flex-wrap:wrap; }
.badge-card-wide { display:flex; gap:10px; align-items:center; padding:10px; border:1px solid #eef6ff; background:#fff; border-radius:8px; }
.badge-card-wide img { width:60px; height:60px; border-radius:8px; }

/* Modal square (large) */
.modal-overlay { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(6,10,20,0.55); padding:20px; z-index:3000; }
.modal-square { width: min(920px, 92vw); height: min(820px, 92vh); background:#fff; border-radius:12px; display:flex; flex-direction:column; box-shadow:0 24px 80px rgba(10,20,30,0.4); }
.modal-square-header { padding:18px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eef3f7; }
.modal-square-body { padding:18px; overflow:auto; flex:1 1 auto; }
.modal-square-footer { padding:14px 18px; border-top:1px solid #eef3f7; display:flex; justify-content:flex-end; gap:8px; }
.btn-close { background:transparent; border:none; font-size:22px; cursor:pointer; }

/* responsive */
@media (min-width: 768px) and (max-width: 1024px) {
  .sidebar-col {
    flex: 0 0 25% !important;
    max-width: 25% !important;
  }
  .col-10.col-md-10,
  .main-col {
    flex: 0 0 75% !important;
    max-width: 75% !important;
    margin-left: 0 !important;
    padding-left: 20px !important;
    padding-right: 10px !important;
  }
  .banner {
    margin-left: 20px !important;
    width: calc(100% - 10px) !important;
    padding: 14px 18px !important;
  }
  .banner-title { font-size: 15px !important; }
  .banner-sub { font-size: 12px !important; }
}

/* Mobile first: phones */
@media (max-width: 767.98px) {
  .container-fluid.row.g-0 { display: block; }
  .sidebar-col,
  .col-10.col-md-10 { width: 100% !important; max-width: 100% !important; padding: 8px 12px; }
  .banner { width: calc(100% - 24px); padding: 12px; border-radius: 10px; flex-direction: column; gap: 6px; }
  .cards-row { display: flex; flex-direction: column; gap: 14px; align-items: stretch; }
  .career-card { width: 100% !important; max-width: none; height: auto; padding: 14px; }
  .card-media { height: 180px; }
  .card-body { max-height: 220px; }
}

/* Small tablets & large phones */
@media (min-width: 768px) and (max-width: 1024px) {
  .sidebar-col { flex: 0 0 22% !important; max-width: 22% !important; }
  .col-10.col-md-10 { flex: 0 0 78% !important; max-width: 78% !important; padding-left: 18px; }
  .cards-row {
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: center;
  }
  .career-card { width: min(660px, 100%); max-width: 760px; height: auto; }
  .card-body { max-height: 320px; }
}

/* Desktop small: 2 columns */
@media (min-width: 1025px) and (max-width: 1399.98px) {
  .sidebar-col { flex: 0 0 18% !important; max-width: 18% !important; }
  .col-10.col-md-10 { flex: 0 0 82% !important; max-width: 82% !important; padding-left: 22px; }
  .cards-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(320px, 1fr));
    gap: 18px;
    justify-items: center;
  }
  .career-card { width: 100%; max-width: 480px; height: 520px; }
  .card-body { max-height: 420px; }
}

/* Wide desktops: 3 columns */
@media (min-width: 1400px) {
  .sidebar-col { flex: 0 0 15% !important; max-width: 15% !important; }
  .col-10.col-md-10 { flex: 0 0 85% !important; max-width: 85% !important; padding-left: 32px; }
  .cards-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(320px, 1fr));
    gap: 20px;
    justify-content: center;
  }
  .career-card { width: 440px; height: 520px; }
}

/* Small refinements kept across breakpoints */
.career-card[role="button"] { outline: none; }
.career-card:focus { box-shadow: 0 12px 30px rgba(47, 128, 237, 0.16); transform: translateY(-3px); transition: transform 120ms ease, box-shadow 120ms ease; }
.frameworks { max-width: 100%; word-break: break-word; }
.modal-square { width: min(920px, 92vw); height: min(820px, 92vh); }

</style>
