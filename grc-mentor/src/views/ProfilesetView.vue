<!-- src/components/ProfileSetup.vue -->
<template>

  <main>
    <div class="container-fluid row">

      <div class="col-2 col-md-2">
        <Stepper :currentStep="1" />
      </div>

       <div class="col-10 col-md-10">
  <div class="profile-page py-5">
    <div class="container">
      <!-- Hero Section -->
      <div class="hero card border-0 shadow-sm mb-4 overflow-hidden">
        <div class="hero-bg"></div>
        <div class="card-body position-relative text-white">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h4 class="fw-semibold mb-1">Profile Setup</h4>
              <p class="mb-0 opacity-75">Upload your CV to help us map your experience.</p>
            </div>
            <span class="badge bg-light text-dark rounded-pill px-3 py-2">
              Step 4 of 4
            </span>
          </div>
        </div>
      </div>

      <!-- Main Section -->
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4 p-md-5">
              <div class="row g-4">
                <!-- CV Uploader -->
                <div class="col-md-7">
                  <label class="form-label fw-semibold">Upload CV</label>

                  <div
                    class="dropzone p-4 rounded-4 border d-flex flex-column align-items-center justify-content-center text-center"
                    :class="{ 'is-dragover': isDragOver, 'has-file': file }" @dragenter.prevent="onDrag(true)"
                    @dragover.prevent="onDrag(true)" @dragleave.prevent="onDrag(false)" @drop.prevent="onDrop">
                    <i class="bi bi-file-earmark-arrow-up display-6 mb-2"></i>
                    <div class="h6 mb-1">Drag & drop your CV here</div>
                    <p class="text-muted small mb-3">or</p>
                    <label class="btn btn-primary mb-2">
                      Choose File
                      <input type="file" class="d-none" accept=".pdf,.doc,.docx" @change="onFileSelect" />
                    </label>

                    <div v-if="file" class="file-chip d-inline-flex align-items-center gap-2 mt-2">
                      <i class="bi bi-file-earmark-text"></i>
                      <span class="text-truncate">{{ file.name }}</span>
                      <span class="text-muted">• {{ prettySize(file.size) }}</span>
                      <button class="btn btn-sm btn-link text-decoration-none" @click="clearFile">
                        Remove
                      </button>
                    </div>

                    <div v-if="error" class="alert alert-danger mt-3 mb-0 p-2 small">
                      {{ error }}
                    </div>
                  </div>

                  <!-- Upload Tips -->
                  <div class="mt-4">
                    <div class="fw-semibold mb-2">Upload tips</div>
                    <ul class="list-unstyled upload-tips mb-0">
                      <li class="d-flex align-items-start mb-2">
                        <i class="bi bi-check2-circle me-2"></i>
                        <span>Upload only in <strong>PDF</strong> (preferred) or DOC/DOCX</span>
                      </li>
                      <li class="d-flex align-items-start mb-2">
                        <i class="bi bi-check2-circle me-2"></i>
                        <span>Ensure file size is below <strong>5 MB</strong></span>
                      </li>
                      <li class="d-flex align-items-start mb-2">
                        <i class="bi bi-check2-circle me-2"></i>
                        <span>Include updated skills and experience</span>
                      </li>
                      <li class="d-flex align-items-start">
                        <i class="bi bi-check2-circle me-2"></i>
                        <span>Keep your CV professional and concise</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Mapping Preview -->
                <div class="col-md-5">
                  <div class="mapping card border-0 shadow-sm h-100">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <h6 class="mb-0">Experience Mapping (Preview)</h6>
                        <span class="badge" :class="file ? 'bg-success' : 'bg-secondary'">
                          {{ file ? 'Ready' : 'Pending' }}
                        </span>
                      </div>
                      <p class="text-muted small">
                        We’ll parse your CV to auto-fill these fields. You can edit anytime.
                      </p>

                      <div class="mb-3">
                        <label class="form-label small">Total Experience (years)</label>
                        <input type="number" min="0" step="0.5" class="form-control"
                          v-model.number="mapping.experienceYears" />
                      </div>

                      <div class="mb-3">
                        <label class="form-label small">Primary Domain</label>
                        <select class="form-select" v-model="mapping.domain">
                          <option value="">Select</option>
                          <option>GRC</option>
                          <option>Cybersecurity</option>
                          <option>Audit</option>
                          <option>IT Operations</option>
                          <option>Software Engineering</option>
                        </select>
                      </div>

                      <div class="mb-3">
                        <label class="form-label small">Key Skills</label>
                        <input type="text" class="form-control" v-model="mapping.skills"
                          placeholder="e.g., ISO 27001, Risk Assessment, SOC2, NIST" />
                        <div class="form-text">Comma-separated</div>
                      </div>

                      <button class="btn btn-outline-primary w-100" :disabled="!file || isUploading" @click="autoMap">
                        Auto-map (beta)
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Progress Bar -->
              <div v-if="isUploading" class="mt-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span class="small text-muted">Uploading & analyzing</span>
                  <span class="small fw-semibold">{{ progress }}%</span>
                </div>
                <div class="progress" style="height: 10px;">
                  <div class="progress-bar" role="progressbar" :style="{ width: progress + '%' }"
                    :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="d-flex justify-content-end gap-2 mt-4">
                <button class="btn btn-outline-secondary" @click="cancel">Cancel</button>
                <!-- <button
                  class="btn btn-success"
                  :disabled="!file || !!error || isUploading"
                  @click="submit"
                >
                  Save & Continue
                </button> -->

                <router-link :to="{ name: 'payment1' }">
                  <button class="btn btn-success" :disabled="!file || !!error || isUploading">
                    Save & Continue
                  </button>
                </router-link>

              </div>

              <div class="alert alert-info mt-3 mb-0 small">
                We never store your CV without your consent. You can delete it from settings later.
              </div>
            </div>
          </div>

          <p class="small text-muted text-center mt-3">
            Need help? You can update these details manually anytime after setup.
          </p>
        </div>
      </div>
    </div>
  </div>

       </div>

      </div>

      </main>





</template>

<script>
import Stepper from '@/components/Stepper.vue';

export default {
  name: "ProfileSetup",
  components: {Stepper},
  data() {
    return {
      file: null,
      error: "",
      isDragOver: false,
      isUploading: false,
      progress: 0,
      mapping: {
        experienceYears: null,
        domain: "",
        skills: ""
      },
      maxSize: 5 * 1024 * 1024,
      allowed: [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ]
    };
  },
  methods: {
    onDrag(state) {
      this.isDragOver = state;
    },
    onDrop(e) {
      this.isDragOver = false;
      const f = e.dataTransfer.files?.[0];
      if (f) this.handleFile(f);
    },
    onFileSelect(e) {
      const f = e.target.files?.[0];
      if (f) this.handleFile(f);
      e.target.value = "";
    },
    handleFile(f) {
      this.error = "";
      if (!this.allowed.includes(f.type) && !/\.(pdf|docx?|PDF)$/.test(f.name)) {
        this.error = "Unsupported file type. Please upload PDF or DOC/DOCX.";
        this.file = null;
        return;
      }
      if (f.size > this.maxSize) {
        this.error = "File too large. Max allowed size is 5 MB.";
        this.file = null;
        return;
      }
      this.file = f;
    },
    clearFile() {
      this.file = null;
      this.error = "";
      this.progress = 0;
    },
    prettySize(bytes) {
      const kb = 1024,
        mb = kb * 1024;
      return bytes >= mb
        ? (bytes / mb).toFixed(2) + " MB"
        : (bytes / kb).toFixed(0) + " KB";
    },
    autoMap() {
      if (!this.file) return;
      const name = this.file.name.toLowerCase();
      const guess = {
        domain: name.match(/grc|governance|compliance/)
          ? "GRC"
          : name.match(/security|soc|cyber/)
            ? "Cybersecurity"
            : name.match(/audit/)
              ? "Audit"
              : name.match(/dev|engineer|software/)
                ? "Software Engineering"
                : "",
        skills: ""
      };
      if (/iso|27001/.test(name)) guess.skills += "ISO 27001, ";
      if (/nist/.test(name)) guess.skills += "NIST, ";
      if (/risk/.test(name)) guess.skills += "Risk Assessment, ";
      if (/soc2?/.test(name)) guess.skills += "SOC 2, ";
      this.mapping.domain = guess.domain || this.mapping.domain;
      this.mapping.skills = (guess.skills + this.mapping.skills).replace(/,\s*$/, "");
      if (this.mapping.experienceYears == null)
        this.mapping.experienceYears = 1;
    },
    submit() {
      this.isUploading = true;
      this.progress = 0;
      const tick = setInterval(() => {
        this.progress = Math.min(this.progress + 12, 100);
        if (this.progress >= 100) {
          clearInterval(tick);
          try {
            const meta = {
              name: this.file.name,
              size: this.file.size,
              mapping: this.mapping
            };
            localStorage.setItem("profile_cv_meta", JSON.stringify(meta));
          } catch (e) { }
          this.isUploading = false;
          if (this.$router) {
            this.$router.push({ name: "ProfileReview" });
          } else {
            this.$emit("completed", { file: this.file, mapping: this.mapping });
          }
        }
      }, 180);
    },
    cancel() {
      if (this.$router) this.$router.push({ name: "QualificationAssessment" });
      else this.$emit("cancel");
    }
  }
};
</script>

<style scoped>
.profile-page {
  background: radial-gradient(1200px 600px at 10% -10%, rgba(13, 110, 253, 0.1), transparent 40%),
    radial-gradient(900px 500px at 110% 20%, rgba(25, 135, 84, 0.08), transparent 40%),
    #f8f9fb;
}

.hero-bg {
  position: absolute;
  inset: 0;
  opacity: 0.92;
  background: linear-gradient(135deg, #0d6efd 0%, #6ea8fe 45%, #20c997 120%);
}

.hero .card-body {
  backdrop-filter: saturate(120%) blur(0.5px);
}

.dropzone {
  background: #fff;
  border-color: #e9ecef !important;
  transition: all 180ms ease;
  min-height: 180px;
}

.dropzone:hover {
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.06);
  transform: translateY(-1px);
}

.dropzone.is-dragover {
  border-style: dashed;
  background: linear-gradient(0deg, rgba(13, 110, 253, 0.05), rgba(13, 110, 253, 0.05)), #fff;
}

.dropzone.has-file {
  border-color: #20c997 !important;
}

.file-chip {
  background: #f8f9fa;
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  border: 1px solid #eef1f4;
  max-width: 100%;
}

.upload-tips i {
  line-height: 1.2;
  margin-top: 0.15rem;
}

.upload-tips li span {
  line-height: 1.2;
}

.mapping .card-body {
  padding: 1.25rem;
}

.mapping .badge {
  font-weight: 600;
}

.btn {
  transition: transform 120ms ease, box-shadow 120ms ease;
}

.btn:active {
  transform: translateY(1px);
}
</style>
