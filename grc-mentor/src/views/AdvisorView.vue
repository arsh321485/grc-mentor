<template>
  <main class="advisors-page">
    <!-- Reuse your Header component (same look as AI page) -->
    <Header />

    <!-- Hero / Banner (full-width) -->
    <section class="hero container-fluid">
      <div class="hero-inner">
        <div class="hero-text">
          <h1 class="hero-title">GRC Mentors & Advisors</h1>
          <p class="hero-sub">
            A mentor in this space must guide mentees through three distinct phases of maturity:

          </p>

          <div class="hero-actions">
            <button class="btn primary" @click="scrollToApply">Apply as Advisor</button>
            <button class="btn ghost" @click="scrollToLevels">Read Levels</button>
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <img src="https://img.freepik.com/free-vector/artificial-intelligence-abstract-concept_335657-2220.jpg?w=826&t=st=1719630241~exp=1719630841~hmac=4f3efcd46f0f570ff663d4f9a8f34bc63bb9844c05e10ef16f1c79cfe3872741"
               alt="GRC mentorship illustration" />
        </div>
      </div>

      <svg class="hero-wave" viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,30 C300,90 900,0 1200,50 L1200,100 L0,100 Z" />
      </svg>
    </section>

    <!-- Main content: levels + apply form (full-width container) -->
    <section class="container-fluid content-fluid">
      <div class="">
        <div class="d-flex gap-4 flex-lg-row flex-column">
          <!-- left: levels -->
          <div class="levels" id="levels">
            <p class="intro">
              A mentor in this space must guide mentees through three distinct phases of maturity:
              Beginner (Operator) → Intermediate (Validator) → Expert (Architect).
            </p>

            <!-- Level 1 -->
            <article class="level-card">
              <div class="level-left">
                <div class="level-badge level-1">1</div>
              </div>
              <div class="level-right">
                <h3>Level 1: The Beginner Mentor <span class="muted">— The Operator</span></h3>
                <p class="phase">Learning to interpret automated flags and follow "stop-button" protocols.</p>
                <p class="instruction-label">Key Mentor Instruction</p>
                <blockquote class="instruction">
                  "Never assume the tool is right because it is green. Your job is to prove the tool is correct, not just accept it."
                </blockquote>
              </div>
            </article>

            <!-- Level 2 -->
            <article class="level-card">
              <div class="level-left">
                <div class="level-badge level-2">2</div>
              </div>
              <div class="level-right">
                <h3>Level 2: The Intermediate Mentor <span class="muted">— The Validator</span></h3>
                <p class="phase">Auditing the machine's logic and managing complex exceptions.</p>
                <p class="instruction-label">Key Mentor Instruction</p>
                <blockquote class="instruction">
                  "The mentee identifies the risk; you identify the impact. If the mentee flags a breach, your job is to determine if it’s a glitch or a crisis."
                </blockquote>
              </div>
            </article>

            <!-- Level 3 -->
            <article class="level-card">
              <div class="level-left">
                <div class="level-badge level-3">3</div>
              </div>
              <div class="level-right">
                <h3>Level 3: The Expert Mentor <span class="muted">— The Architect</span></h3>
                <p class="phase">Designing oversight governance and defining organizational risk appetite.</p>
                <p class="instruction-label">Key Mentor Instruction</p>
                <blockquote class="instruction">
                  "You are reviewing the metrics or designing the dashboard. You decide what the humans see and what the machines hide."
                </blockquote>
              </div>
            </article>

            <p class="footnote muted">
              Want these profiles shortened, expanded, or to include experience requirements and sample interview questions?
              Tell me which and I'll update the copy.
            </p>
          </div>

          <!-- right: apply card -->
          <aside class="apply" ref="applyCard">
            <div class="apply-panel">
              <h3 class="apply-title">Apply as a Mentor / Advisor</h3>
              <p class="muted small">We will contact you. Please provide accurate details.</p>

              <form @submit.prevent="submitForm" class="apply-form" novalidate>
                <label class="form-row">
                  <span class="label">Name</span>
                  <input v-model="form.name" type="text" placeholder="Full name" :class="{invalid: submitted && !form.name}" aria-required="true" />
                  <small v-if="submitted && !form.name" class="error">Name is required</small>
                </label>

                <label class="form-row">
                  <span class="label">Email</span>
                  <input v-model="form.email" type="email" placeholder="you@example.com" :class="{invalid: submitted && !validEmail}" aria-required="true" />
                  <small v-if="submitted && !validEmail" class="error">Enter a valid email</small>
                </label>

                <label class="form-row">
                  <span class="label">Select Level</span>
                  <select v-model="form.level" :class="{invalid: submitted && !form.level}">
                    <option value="">Choose a level</option>
                    <option value="1">Level 1 — Beginner (Operator)</option>
                    <option value="2">Level 2 — Intermediate (Validator)</option>
                    <option value="3">Level 3 — Expert (Architect)</option>
                  </select>
                  <small v-if="submitted && !form.level" class="error">Select a level</small>
                </label>

                <label class="form-row">
                  <span class="label">LinkedIn</span>
                  <input v-model="form.linkedin" type="url" placeholder="https://linkedin.com/in/yourname" />
                </label>



                <div class="actions">
                  <button :disabled="loading" type="submit" class="btn primary">
                    <span v-if="!loading">Submit Application</span>
                    <span v-else>Sending…</span>
                  </button>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, rerum eum! Ullam distinctio, quidem blanditiis officia architecto ducimus perferendis explicabo! Voluptatum maxime architecto quae consectetur vel dicta quos at nesciunt!</p>
                </div>

                <div v-if="success" class="toast success">Thanks — we received your application. We'll contact you soon.</div>
                <div v-if="error" class="toast error">{{ error }}</div>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
<div>
        <Footer />
    </div>

  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'AdvisorsMasterpieceFluid',
  components: { Header, Footer },
  setup() {
    const form = ref({
      name: '',
      email: '',
      level: '',
      linkedin: '',
      note: ''
    });
    const submitted = ref(false);
    const loading = ref(false);
    const success = ref(false);
    const error = ref('');
    const applyCard = ref<HTMLElement | null>(null);

    const validEmail = (): boolean => /\S+@\S+\.\S+/.test((form.value.email || '').trim());

    const submitForm = async () => {
      submitted.value = true;
      error.value = '';
      success.value = false;

      if (!form.value.name || !validEmail() || !form.value.level) {
        error.value = 'Please fill required fields.';
        return;
      }

      if (form.value.note.length > 300) {
        error.value = 'Note too long (max 300).';
        return;
      }

      loading.value = true;
      try {
        // Replace with your API POST endpoint. Simulated network request below:
        await new Promise((r) => setTimeout(r, 900));

        success.value = true;
        // clear (keep UX friendly)
        form.value.name = '';
        form.value.email = '';
        form.value.level = '';
        form.value.linkedin = '';
        form.value.note = '';
        submitted.value = false;

        setTimeout(() => (success.value = false), 5000);
      } catch (e: any) {
        error.value = 'Submission failed. Try again later.';
      } finally {
        loading.value = false;
      }
    };

    const scrollToApply = () => {
      const el = applyCard.value || document.querySelector('.apply');
      if (el) (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const scrollToLevels = () => {
      const el = document.getElementById('levels');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return {
      form,
      submitted,
      loading,
      success,
      error,
      validEmail,
      submitForm,
      applyCard,
      scrollToApply,
      scrollToLevels
    };
  }
});
</script>

 <style scoped>
/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Poppins:wght@600;700&display=swap');

:root{
  --bg: #f8fbff;
  --card: #ffffff;
  --accent-a: #2f80ed;
  --accent-b: #56ccf2;
  --muted: #64748b;
  --text: #102530;
}

/* Page */
.advisors-page { background: var(--bg); color: var(--text); min-height: 100vh; font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }

/* Hero (full width container-fluid) */
.hero {
  width: 100%;
  border-radius: 14px;
  background: linear-gradient(90deg, rgba(47,128,237,0.08), rgba(86,204,242,0.06));
  box-shadow: 0 14px 40px rgba(20,30,50,0.05);
  position: relative;
  overflow: visible;
  padding: 20px 6%;
  box-sizing: border-box;
  margin-top: 18px;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 22px;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
}
.hero-title { font-family: 'Poppins', sans-serif; font-size: 28px; margin: 0 0 8px; color: #083b6b; letter-spacing: -0.2px; }
.hero-sub { margin: 0; color: #143241; font-size: 15px; line-height: 1.5; }
.hero-visual img { width: 100%; height: 260px; object-fit: cover; border-radius: 10px; box-shadow: 0 10px 30px rgba(20,30,50,0.08); }

/* Action buttons */
.hero-actions { display:flex; gap: 12px; margin-top: 14px; }
.btn { border-radius: 10px; padding: 10px 14px; border: 1px solid black; cursor: pointer; font-weight: 700; }
.btn.primary { background: linear-gradient(90deg, var(--accent-a), var(--accent-b)); color: #083b6b; box-shadow: 0 15px 30px rgba(47,128,237,0.12); }
.btn.ghost { background: transparent; border: 1px solid #083b6b; color: #083b6b; }

/* hero wave */
.hero-wave { position: absolute; left: 0; right: 0; bottom: -1px; height: 42px; fill: rgba(255,255,255,0.14); transform: translateY(26px); }

/* Main content fluid container */
.content-fluid {
  width: 80%;
  /* padding: 36px 6%; */
  box-sizing: border-box;
  margin-top: 8px;
}
.content-inner { max-width: 1280px;  }

/* Grid layout for levels + apply */
/* .grid { display: grid; grid-template-columns: 1fr 380px; gap: 28px; align-items: start; } */

/* Levels */
.intro { color: var(--text); margin-bottom: 12px; font-size: 15px; line-height: 1.5; }
.levels { display: grid; gap: 16px; }

/* Level card */
.level-card {
  display: flex;
  gap: 16px;
  padding: 18px;
  border-radius: 12px;
  background: linear-gradient(180deg,#fff,#fbfdff);
  box-shadow: 0 12px 30px rgba(10,20,30,0.04);
  transition: transform 170ms ease, box-shadow 170ms ease;
}
.level-card:hover { transform: translateY(-8px); box-shadow: 0 26px 60px rgba(15,30,50,0.08); }
.level-left { width: 60px; display:flex; align-items:center; justify-content:center; }
.level-badge { width:64px; height:64px; border-radius:12px; display:grid; place-items:center; font-weight:600; color:#fff; font-size:18px; box-shadow: 0 10px 28px rgba(15,30,50,0.06); }
.level-badge.level-1 { background: linear-gradient(180deg,#60a5fa,#2f80ed); }
.level-badge.level-2 { background: linear-gradient(180deg,#7dd3fc,#56ccf2); color:#063244; }
.level-badge.level-3 { background: linear-gradient(180deg,#ffd580,#f6c85f); color:#3b2f00; }

.level-right h3 { margin: 0 0 6px; font-size: 18px; }
.muted { color: var(--muted); font-size: 13px; }
.phase { margin: 6px 0 10px; color: #1b3942; }
.instruction-label { font-weight: 700; color: #0b4e7a; margin-bottom: 6px; }
.instruction { margin:0; padding: 12px; border-radius: 8px; background: rgba(47,128,237,0.04); border-left: 3px solid rgba(47,128,237,0.12); color: #143241; }

/* Apply panel */
.apply {
width: 50%; }
.apply-panel {
  background: linear-gradient(180deg,#fff,#fbfdff);
  border-radius: 12px;
  padding: 38px;
  box-shadow: 0 18px 48px rgba(10,20,30,0.06);
margin-top: 65px;
}
.apply-title { margin: 0 0 6px; font-size: 18px; }
.apply-form { display:flex; flex-direction:column; gap:12px; margin-top: 8px; }
.form-row { display:flex; flex-direction:column; gap:6px; }
.label { font-weight: 700; font-size: 13px; color: #0b3b57; }

/* Inputs */
input[type="text"], input[type="email"], input[type="url"], select, textarea {
  border: 1px solid #e6eef7;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 14px;
  background: #fff;
  outline: none;
  transition: box-shadow 120ms ease, border-color 120ms ease;
}
input:focus, select:focus, textarea:focus { border-color: rgba(47,128,237,0.9); box-shadow: 0 8px 30px rgba(47,128,237,0.06); }
.invalid { border-color: #ef4444 !important; box-shadow: 0 6px 20px rgba(239,68,68,0.06); }
.error { color: #ef4444; font-size: 12px; }

/* Actions & toasts */
.actions { margin-top: 2px; }
.toast { margin-top: 10px; padding: 10px 12px; border-radius: 8px; font-size: 13px; }
.toast.success { background: rgba(34,197,94,0.10); color: #065f46; border: 1px solid rgba(34,197,94,0.12); }
.toast.error { background: rgba(239,68,68,0.06); color: #7f1d1d; border: 1px solid rgba(239,68,68,0.09); }
.apply-footer { margin-top: 12px; color: var(--muted); font-size: 13px; }

/* Footer (fluid) */
.page-footer { width: 100%; padding: 28px 6%; box-sizing: border-box; margin-top: 18px; background: transparent; }
.footer-inner { max-width: 1280px; margin: 0 auto; text-align: center; }

/* Responsive tweaks */
@media (max-width: 991.98px) {
  .hero-inner { grid-template-columns: 1fr; padding: 22px 0; }
  .hero-visual img { height: 180px; }
  .grid { grid-template-columns: 1fr; gap: 18px; }
  .apply-panel { position: relative; top: 0; }
  .hero-title { font-size: 24px; }
}
</style>
