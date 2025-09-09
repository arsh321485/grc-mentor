<template>
  <div class="mentorship-page py-5">
    <div class="container">
      <!-- Top strip -->
      <div class="card border-0 shadow-sm mb-4">
        <div class="card-body py-3">
          <div class="row text-center align-items-center">
            <div class="col-md-4 fw-semibold">
              Mentorship Program Details
            </div>
            <div class="col-md-4 text-muted small">
              {{ program.overview }}
            </div>
            <div class="col-md-4">
              <button class="btn btn-success" @click="goToPayment">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main content -->
      <div class="row g-4">
        <!-- Left: Details -->
        <div class="col-lg-8">
          <!-- Program highlights -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-4">
              <h5 class="mb-3">What you’ll get</h5>
              <div class="row g-3">
                <div
                  v-for="(h, i) in program.highlights"
                  :key="i"
                  class="col-md-6"
                >
                  <div class="d-flex align-items-start gap-2">
                    <span
                      class="badge rounded-pill bg-primary-subtle text-primary fw-semibold mt-1"
                    >
                      ✓
                    </span>
                    <div>
                      <div class="fw-semibold">{{ h.title }}</div>
                      <div class="text-muted small">{{ h.desc }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Curriculum / modules -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-4">
              <h5 class="mb-3">Curriculum</h5>
              <div class="accordion" id="curriculum">
                <div
                  v-for="(mod, idx) in program.modules"
                  :key="mod.id"
                  class="accordion-item"
                >
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#m' + idx"
                    >
                      {{ mod.title }}
                      <span class="ms-auto small text-muted">
                        {{ mod.duration }}
                      </span>
                    </button>
                  </h2>
                  <div
                    :id="'m' + idx"
                    class="accordion-collapse collapse"
                    data-bs-parent="#curriculum"
                  >
                    <div class="accordion-body">
                      <ul class="mb-0">
                        <li v-for="(pt, i) in mod.topics" :key="i">{{ pt }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mentors -->
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4">
              <h5 class="mb-3">Mentors</h5>
              <div class="row g-3">
                <div v-for="(m, i) in program.mentors" :key="i" class="col-md-6">
                  <div class="d-flex align-items-center p-3 border rounded-3">
                    <img
                      :src="m.avatar"
                      alt="Mentor Avatar"
                      class="rounded-circle me-3"
                      style="width: 48px; height: 48px; object-fit: cover"
                    />
                    <div>
                      <div class="fw-semibold">{{ m.name }}</div>
                      <div class="text-muted small">{{ m.role }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Pricing summary -->
        <div class="col-lg-4">
          <div
            class="card border-0 shadow-sm position-sticky"
            style="top: 90px"
          >
            <div class="card-body p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <h6 class="mb-0">Plan</h6>
                <span class="badge bg-primary">{{ program.plan.name }}</span>
              </div>

              <div class="display-6 fw-bold mb-1">
                {{ currency(program.plan.price) }}
              </div>
              <div class="text-muted mb-3 small">
                One-time payment (incl. taxes if applicable)
              </div>

              <ul class="list-unstyled small mb-3">
                <li
                  v-for="(inc, i) in program.plan.includes"
                  :key="i"
                  class="d-flex align-items-start mb-2"
                >
                  <span class="text-success me-2">•</span>
                  <span>{{ inc }}</span>
                </li>
              </ul>

              <button class="btn btn-success w-100 mb-2" @click="goToPayment">
                Proceed to Payment
              </button>
              <button
                class="btn btn-outline-secondary w-100"
                @click="askQuestion"
              >
                Have a question?
              </button>

              <hr class="my-4" />
              <div class="small text-muted">
                By continuing, you agree to our Terms & Refund Policy.
              </div>
            </div>
          </div>

          <!-- Mini FAQ -->
          <div class="card border-0 shadow-sm mt-4">
            <div class="card-body p-4">
              <h6 class="mb-3">Quick FAQ</h6>
              <div class="small">
                <p class="mb-2">
                  <strong>Duration:</strong> {{ program.duration }}
                </p>
                <p class="mb-2">
                  <strong>Format:</strong> {{ program.format }}
                </p>
                <p class="mb-0">
                  <strong>Start:</strong> {{ program.startDate }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MentorshipProgram",
  props: {
    programProp: { type: Object, default: null },
  },
  data() {
    return {
      program:
        this.programProp ?? {
          overview: "Overview of the mentorship program details.",
          duration: "8 weeks",
          format: "Live online + projects",
          startDate: "Rolling cohorts",
          highlights: [
            { title: "Live mentor sessions", desc: "Weekly 60–90 min interactive calls" },
            { title: "Hands-on projects", desc: "Real-world assignments & feedback" },
            { title: "Career guidance", desc: "Resume & interview support" },
            { title: "Community access", desc: "Private forum & peer support" },
          ],
          modules: [
            { id: 1, title: "GRC Foundations", duration: "Week 1–2", topics: ["Governance basics", "Risk concepts", "Compliance overview"] },
            { id: 2, title: "Risk Assessment", duration: "Week 3", topics: ["Methodologies", "Risk register", "Controls"] },
            { id: 3, title: "Compliance Frameworks", duration: "Week 4", topics: ["ISO 27001", "SOC 2", "NIST CSF"] },
            { id: 4, title: "Audits & Reporting", duration: "Week 5–6", topics: ["Internal audits", "Metrics & KPIs", "Reporting"] },
            { id: 5, title: "Capstone & Review", duration: "Week 7–8", topics: ["Capstone project", "Career prep", "Mock interview"] },
          ],
          mentors: [
            { name: "A. Sharma", role: "GRC Lead @ Fintech", avatar: "https://i.pravatar.cc/96?img=12" },
            { name: "R. Iyer", role: "Compliance Manager", avatar: "https://i.pravatar.cc/96?img=32" },
          ],
          plan: {
            name: "Standard",
            price: 9999,
            currency: "INR",
            includes: ["All live sessions", "Capstone evaluation", "Community access", "Certificate of completion"],
          },
        },
    };
  },
  methods: {
    currency(amount: number) {
      try {
        return new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: this.program.plan.currency || "INR",
        }).format(amount);
      } catch {
        return `₹${amount}`;
      }
    },
    goToPayment() {
      if (this.$router) {
        this.$router.push({
          name: "Payment",
          query: { plan: this.program.plan.name, amount: this.program.plan.price },
        });
      } else {
        this.$emit("proceed-to-payment", {
          plan: this.program.plan.name,
          amount: this.program.plan.price,
        });
      }
    },
    askQuestion() {
      if (this.$router) this.$router.push({ name: "Contact" });
      else this.$emit("open-support");
    },
  },
});
</script>

<style scoped>
.mentorship-page {
  background: radial-gradient(1200px 600px at 10% -10%, rgba(13, 110, 253, 0.1), transparent 40%),
              radial-gradient(900px 500px at 110% 20%, rgba(25, 135, 84, 0.08), transparent 40%),
              #f8f9fb;
}
.badge.bg-primary-subtle {
  background-color: rgba(13, 110, 253, 0.1) !important;
}
.accordion-button .small {
  opacity: 0.75;
}
@media (max-width: 991.98px) {
  .position-sticky {
    position: static !important;
  }
}
</style>
