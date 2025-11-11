<template>
  <main class="mentorship-page ">
    <div class="container-fluid">
      <div class="row g-4">
        <!-- Stepper Left Column -->
        <div class="col-12 col-md-3 col-lg-2">
          <Stepper :currentStep="1" />
        </div>

        <!-- Right Main Column -->
        <div class="col-12 col-md-9 col-lg-10  mt-5">
          <!-- Banner -->
          <div class="banner mb-4">
            <div class="banner-left">
              <h6 class="banner-title">Profile Setup</h6>
              <p class="banner-sub">
                Upload your CV to help us map your experience.
              </p>
            </div>
          </div>

          <!-- Card Section -->
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4 p-md-5">
              <div class="row g-4">
                <!-- CV Uploader -->
                <div class="col-12 col-lg-7 d-flex flex-column">
                  <label class="form-label fw-semibold">Upload CV</label>

                  <div
                    class="dropzone p-4 rounded-4 border d-flex flex-column align-items-center justify-content-center text-center"
                    :class="{ 'is-dragover': isDragOver, 'has-file': file }"
                    @dragenter.prevent="onDrag(true)"
                    @dragover.prevent="onDrag(true)"
                    @dragleave.prevent="onDrag(false)"
                    @drop.prevent="onDrop"
                  >
                    <i class="bi bi-file-earmark-arrow-up display-6 mb-2"></i>
                    <div class="h6 mb-1">Drag & drop your CV here</div>
                    <p class="text-muted small mb-3">or</p>
                    <label class="btn btn-submit mb-2">
                      Choose File
                      <input
                        type="file"
                        class="d-none"
                        accept=".pdf,.doc,.docx"
                        @change="onFileSelect"
                      />
                    </label>

                    <!-- Selected file -->
                    <div
                      v-if="file"
                      class="file-chip d-inline-flex align-items-center gap-2 mt-2"
                    >
                      <i class="bi bi-file-earmark-text"></i>
                      <span class="text-truncate">{{ file.name }}</span>
                      <span class="text-muted">• {{ prettySize(file.size) }}</span>
                      <button
                        class="btn btn-sm btn-link text-decoration-none"
                        @click="clearFile"
                      >
                        Remove
                      </button>
                    </div>

                    <!-- Error -->
                    <div
                      v-if="error"
                      class="alert alert-danger mt-3 mb-0 p-2 small"
                    >
                      {{ error }}
                    </div>
                  </div>
                </div>

                <!-- Upload Tips -->
                <div class="col-12 col-lg-5">
                  <div class="mt-4 mt-lg-0">
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
              </div>

              <!-- Progress Bar -->
              <div v-if="isUploading" class="mt-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span class="small text-muted">Uploading & analyzing</span>
                  <span class="small fw-semibold">{{ progress }}%</span>
                </div>
                <div class="progress" style="height: 10px;">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: progress + '%' }"
                    :aria-valuenow="progress"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="d-flex flex-wrap justify-content-end gap-2 mt-4">
                <!-- <button class="btn btn-outline-secondary" @click="cancel">
                  Cancel
                </button> -->

                <router-link :to="{ name: 'instruction' }">
                  <button
                    class="btn btn-submit"
                    :disabled="!file || !!error || isUploading"
                  >
                    Save & Continue
                  </button>
                </router-link>
              </div>

              <div class="alert alert-info mt-3 mb-0 small">
                We never store your CV without your consent. You can delete it later.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Stepper from '@/components/Stepper.vue';
export default {
  name: "ProfileSetup",
  components: { Stepper },
  data() {
    return {
      file: null as File | null,
      error: "",
      isDragOver: false,
      isUploading: false,
      progress: 0,
      maxSize: 5 * 1024 * 1024,
      allowed: [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ]
    };
  },
  methods: {
    onDrag(state: boolean) {
      this.isDragOver = state;
    },
    onDrop(e: DragEvent) {
      this.isDragOver = false;
      const f = e.dataTransfer?.files?.[0];
      if (f) this.handleFile(f);
    },
    onFileSelect(e: Event) {
      const target = e.target as HTMLInputElement;
      const f = target.files?.[0];
      if (f) this.handleFile(f);
      target.value = "";
    },
    handleFile(f: File) {
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
    prettySize(bytes: number) {
      const kb = 1024, mb = kb * 1024;
      return bytes >= mb
        ? (bytes / mb).toFixed(2) + " MB"
        : (bytes / kb).toFixed(0) + " KB";
    },
    cancel() {
      if (this.$router) this.$router.push({ name: "QualificationAssessment" });
    }
  }
};
</script>

<style scoped>


/* .container-fluid {
  padding: 20px;
} */

/* Banner */
.banner {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px 25px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.banner-title {
  font-size: 16px;
  font-weight: 600;
}
.banner-sub {
  font-size: 13px;
  opacity: 0.9;
}

/* Dropzone */
.dropzone {
  background: #fff;
  border: 2px solid #e9ecef;
  transition: all 180ms ease;
  min-height: 180px;
  width: 100%;
}
.dropzone.is-dragover {
  border-style: dashed;
  background: rgba(13, 110, 253, 0.05);
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

/* Buttons */
.btn-submit {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  border: none;
  border-radius: 22px;
  padding: 8px 22px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
}
.btn-submit:hover {
  background: linear-gradient(90deg, #2f80ed, #2d9cdb);
}
/* For screens wider than 1000px but less than 2000px */
@media (min-width: 1000px) and (max-width: 2000px) {
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 90vh;
  font-family: "Inter", sans-serif;

}

/* .container-fluid {
  padding: 20px;
} */

/* Banner */
.banner {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px 25px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.banner-title {
  font-size: 16px;
  font-weight: 600;
}
.banner-sub {
  font-size: 13px;
  opacity: 0.9;
}

/* Dropzone */
.dropzone {
  background: #fff;
  border: 2px solid #e9ecef;
  transition: all 180ms ease;
  min-height: 180px;
  width: 100%;
}
.dropzone.is-dragover {
  border-style: dashed;
  background: rgba(13, 110, 253, 0.05);
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

/* Buttons */
.btn-submit {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  border: none;
  border-radius: 22px;
  padding: 8px 22px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
}
.btn-submit:hover {
  background: linear-gradient(90deg, #2f80ed, #2d9cdb);
}
}

</style>
