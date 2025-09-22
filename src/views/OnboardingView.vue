<template>
  <div class="onboarding-page py-5">
    <div class="container">

      <!-- Top strip that mirrors the 3-column layout in your image -->
      <div class="card border-0 shadow-sm mb-4">
        <div class="card-body py-3">
          <div class="row text-center align-items-center">
            <div class="col-md-4 fw-semibold">
              Mentorship Onboarding (For Freshers)
            </div>

            <div class="col-md-4 text-muted small">
              Provide onboarding instructions and request acceptance of usage policy.
              <div class="mt-2 small text-muted">
                Holding Company Details [Industry · Sub-industry · Company name]
              </div>
            </div>

            <div class="col-md-4 text-center text-md-end">
              <!-- kept your button class and size so it doesn't change global styles -->
              <button class="btn btn-success" :disabled="!accepted || isProcessing" @click="acceptAndContinue">
                Accept and Continue to platform
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main content -->
      <div class="row g-4">
        <!-- Left: Onboarding instructions -->
        <div class="col-lg-8">
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-4">
              <h5 class="mb-3">Welcome to the Mentorship Program</h5>
              <p class="text-muted">
                We’re excited to have you onboard. Please read the steps below carefully — these will
                help you prepare for your mentor sessions and get the most value from the program.
              </p>

              <ol class="mt-3">
                <li class="mb-2">
                  <strong>Complete your profile:</strong> Upload your CV and add basic details so mentors
                  understand your background.
                </li>
                <li class="mb-2">
                  <strong>Attend the orientation:</strong> Join the scheduled live welcome call in your cohort week.
                </li>
                <li class="mb-2">
                  <strong>Review materials:</strong> Read the program syllabus and pre-work before sessions.
                </li>
                <li class="mb-2">
                  <strong>Join community:</strong> Introduce yourself in the private forum to connect with peers.
                </li>
                <li class="mb-2">
                  <strong>Deliverables:</strong> Complete the capstone assignments and submit them for feedback.
                </li>
              </ol>

              <hr />

              <h6 class="mb-2">Usage policy (summary)</h6>
              <p class="small text-muted">
                By continuing you agree to our usage policy: be respectful in community interactions, do not share
                copyrighted or sensitive company data, and follow the program schedule and code of conduct. Violation
                of these terms may result in removal from the program.
              </p>

              <div class="mt-3">
                <button class="btn btn-link p-0" @click="openFullPolicy">
                  Read full policy
                </button>
              </div>

            </div>
          </div>

          <!-- Full policy preview (collapsible) -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-4">
              <h6 class="mb-3">Full Usage Policy</h6>
              <div class="policy-box p-3 rounded-3 border" style="max-height: 280px; overflow:auto;">
                <p class="small mb-2"><strong>1. Conduct</strong> — Maintain respectful and professional behaviour during sessions and in the forum.</p>
                <p class="small mb-2"><strong>2. Confidentiality</strong> — Do not post or share proprietary or sensitive employer/client data.</p>
                <p class="small mb-2"><strong>3. Intellectual Property</strong> — Any submitted project materials may be used for program promotion unless otherwise agreed.</p>
                <p class="small mb-2"><strong>4. Attendance</strong> — Repeated absence without notice may impact your completion certificate.</p>
                <p class="small mb-0 small text-muted">For full legal terms, open the full policy document.</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Right: Holding Company Details -->
        <div class="col-lg-4">
          <div class="card border-0 shadow-sm position-sticky" style="top: 90px;">
            <div class="card-body p-4">
              <h6 class="mb-3">Holding Company Details</h6>

              <div class="mb-3">
                <label class="form-label small">Company Name</label>
                <input type="text" class="form-control" v-model.trim="company.name" placeholder="Your company or 'Individual'" />
              </div>

              <div class="mb-3">
                <label class="form-label small">Industry</label>
                <select class="form-select" v-model="company.industry">
                  <option value="">Select industry</option>
                  <option>Technology</option>
                  <option>Banking & Finance</option>
                  <option>Healthcare</option>
                  <option>Government</option>
                  <option>Education</option>
                  <option>Other</option>
                </select>
              </div>

              <div class="mb-3">
                <label class="form-label small">Sub-industry</label>
                <input type="text" class="form-control" v-model.trim="company.subindustry" placeholder="e.g., Fintech, Cloud, Hospitals" />
              </div>

              <div class="mb-3">
                <label class="form-label small">Current Role</label>
                <input type="text" class="form-control" v-model.trim="company.role" placeholder="e.g., Intern, Analyst, Junior Engineer" />
              </div>

              <div class="mb-3">
                <label class="form-label small">Experience (years)</label>
                <input type="number" min="0" step="0.5" class="form-control" v-model.number="company.experience" />
              </div>

              <div class="form-check mt-2 mb-3">
                <input class="form-check-input" type="checkbox" id="acceptPolicy" v-model="accepted" />
                <label class="form-check-label small" for="acceptPolicy">
                  I accept the usage policy
                </label>
              </div>

              <div class="d-grid">
                <!-- keep your button size & classes -->
                <button class="btn btn-success" :disabled="!accepted || isProcessing" @click="acceptAndContinue">
                  Accept and Continue to platform
                </button>
              </div>

              <div v-if="saveMsg" class="mt-3 small" :class="saveSuccess ? 'text-success' : 'text-danger'">
                {{ saveMsg }}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Full policy modal -->
    <div class="modal fade" id="policyModal" tabindex="-1" aria-hidden="true" ref="policyModal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Full Usage Policy</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div class="modal-body">
            <p><strong>Full policy text goes here.</strong></p>
            <p class="small text-muted">(Paste your detailed legal/usage policy here. This area can be long and scrollable.)</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="acceptFromModal">Accept & Close</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "MentorshipOnboarding",
  props: {
    // allow parent/router to pass initial values
    initialCompany: { type: Object, default: null }
  },
  data() {
    return {
      company: {
        name: this.initialCompany?.name ?? "",
        industry: this.initialCompany?.industry ?? "",
        subindustry: this.initialCompany?.subindustry ?? "",
        role: this.initialCompany?.role ?? "",
        experience: this.initialCompany?.experience ?? null
      },
      accepted: false,
      isProcessing: false,
      saveMsg: "",
      saveSuccess: false
    };
  },
  methods: {
    openFullPolicy() {
      // use Bootstrap modal (requires bootstrap JS)
      const modalEl = this.$refs.policyModal;
      if (!modalEl) return;
      const modal = new bootstrap.Modal(modalEl);  
      modal.show();
    },
    acceptFromModal() {
      this.accepted = true;
      // close modal
      const modalEl = this.$refs.policyModal;
      if (modalEl) {
        const modal = bootstrap.Modal.getInstance(modalEl);  
        modal.hide();
      }
    },
    acceptAndContinue() {
      if (!this.accepted) {
        this.saveMsg = "You must accept the usage policy to continue.";
        this.saveSuccess = false;
        return;
      }

      // Basic validation for holding company details (optional)
      if (!this.company.name) {
        this.saveMsg = "Please provide company name (or type 'Individual').";
        this.saveSuccess = false;
        return;
      }

      this.isProcessing = true;
      this.saveMsg = "";
      // Simulate persist to server — replace with real API
      setTimeout(() => {
        try {
          const payload = {
            company: this.company,
            acceptedAt: new Date().toISOString()
          };
          // store locally as simple demo
          localStorage.setItem("mentorship_onboarding", JSON.stringify(payload));
          this.saveMsg = "Onboarding completed. Redirecting to platform…";
          this.saveSuccess = true;

          // navigate to dashboard or emit event
          if (this.$router) {
            setTimeout(() => this.$router.push({ name: "Dashboard" }), 900);
          } else {
            this.$emit("onboarded", payload);
          }
        } catch (e) {
          this.saveMsg = "Failed to save details. Please try again.";
          this.saveSuccess = false;
        } finally {
          this.isProcessing = false;
        }
      }, 900);
    }
  }
};
</script>

<style scoped>
.onboarding-page {
  background: radial-gradient(1200px 600px at 10% -10%, rgba(13, 110, 253, 0.08), transparent 40%),
              #f8f9fb;
}
.card { border-radius: 12px; }

/* policy box */
.policy-box { background: #fff; border: 1px solid #eef1f4; }

/* keep button style unaffected — do not override .btn globally */
</style>
