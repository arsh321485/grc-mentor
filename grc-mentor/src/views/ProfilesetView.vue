<template>
  <main class="mentorship-page">
    <div class="container-fluid ">

      <div class="row g-4 main-row">

        <!-- LEFT STEPPER -->
        <div class="col-12 col-md-3 col-lg-2 stepper-col">
          <Stepper :currentStep="1" />
        </div>

        <!-- RIGHT CONTENT -->
        <div class="col-12 col-md-9 col-lg-10 content-col">

          <!-- BANNER -->
          <div class="banner mb-4 mt-3">
            <div>
              <h6 class="banner-title">Profile Setup</h6>
              <p class="banner-sub">Upload your CV to help us map your experience.</p>
            </div>
          </div>

          <!-- CARD -->
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4">

              <div class="row g-4">

                <!-- CV Upload -->
                <div class="col-12 col-lg-7">
                  <label class="form-label fw-semibold">Upload CV</label>

                  <div
                    class="dropzone p-3 rounded-4 border d-flex flex-column align-items-center justify-content-center text-center"
                    :class="{ 'is-dragover': isDragOver, 'has-file': file }" @dragenter.prevent="onDrag(true)"
                    @dragover.prevent="onDrag(true)" @dragleave.prevent="onDrag(false)" @drop.prevent="onDrop">
                    <i class="bi bi-file-earmark-arrow-up display-6 mb-2"></i>

                    <div class="h6 mb-1">Drag & drop your CV here</div>
                    <p class="text-muted small mb-3">or</p>

                    <label class="btn btn-submit mb-2">
                      Choose File
                      <input type="file" class="d-none" accept=".pdf,.doc,.docx" @change="onFileSelect" />
                    </label>

                    <!-- FILE PREVIEW -->
                    <div v-if="file" class="file-chip d-inline-flex align-items-center gap-2 mt-3">
                      <i class="bi bi-file-earmark-text"></i>
                      <span>{{ file.name }}</span>
                      <span class="text-muted">• {{ prettySize(file.size) }}</span>
                      <button class="btn btn-sm btn-link" @click="clearFile">Remove</button>
                    </div>

                    <div v-if="error" class="alert alert-danger small mt-3">{{ error }}</div>
                  </div>
                </div>

                <!-- Tips -->
                <div class="col-12 col-lg-5">
                  <div class="fw-semibold mb-2">Upload tips</div>
                  <ul class="list-unstyled upload-tips">
                    <li class="d-flex mb-2"><i class="bi bi-check2-circle me-2"></i>Upload only in PDF or DOC/DOCX</li>
                    <li class="d-flex mb-2"><i class="bi bi-check2-circle me-2"></i>File size must be below 5 MB</li>
                    <li class="d-flex mb-2"><i class="bi bi-check2-circle me-2"></i>Include updated skills & experience
                    </li>
                    <li class="d-flex"><i class="bi bi-check2-circle me-2"></i>Keep your CV professional</li>
                  </ul>
                </div>

              </div>

              <!-- Progress Bar -->
              <div v-if="isUploading" class="mt-4">
                <div class="d-flex justify-content-between small text-muted mb-2">
                  <span>Uploading & analyzing</span>
                  <span class="fw-semibold">{{ progress }}%</span>
                </div>

                <div class="progress" style="height: 10px;">
                  <div class="progress-bar" :style="{ width: progress + '%' }"></div>
                </div>
              </div>

              <!-- BUTTON -->
              <div class="d-flex justify-content-end mt-4">
                <router-link :to="{ name: 'instruction' }">
                  <button class="btn btn-submit" :disabled="!file || !!error || isUploading">
                    Save & Continue
                  </button>
                </router-link>
              </div>

              <div class="alert alert-info small mt-3">
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
    onDrag(state: boolean) { this.isDragOver = state; },
    onDrop(e: DragEvent) {
      this.isDragOver = false;
      const f = e.dataTransfer?.files?.[0];
      if (f) this.handleFile(f);
    },
    onFileSelect(e: Event) {
      const f = (e.target as HTMLInputElement).files?.[0];
      if (f) this.handleFile(f);
      (e.target as HTMLInputElement).value = "";
    },
    handleFile(f: File) {
      this.error = "";

      if (!this.allowed.includes(f.type) && !/\.(pdf|docx?)$/i.test(f.name)) {
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
      return bytes >= mb ? (bytes / mb).toFixed(2) + " MB" : (bytes / kb).toFixed(0) + " KB";
    }
  }
};
</script>

<style scoped>
/* PAGE BACKGROUND */
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  overflow-x: hidden;
}



.upload-tips {
    background: #f9f9f9;
    border: 3px solid #eee;
    border-radius: 8px;
   height: 200px;
    font-size: 13px;
    color: #444;
    width: 80%;
}

/* Keep content aligned to top on desktop */
@media (min-width: 992px) {
  .main-row {
    align-items: flex-start !important;
  }
}

/* Banner */
.banner {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px 25px;
  color: white;
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

/* Dropzone */
.dropzone {
  background: transparent;
  border: 2px solid tr;
  min-height: 180px;
  transition: all 0.2s ease;
}

.dropzone.is-dragover {
  background: #eaf5ff;
  border-style: dashed;
}

.dropzone.has-file {
  border-color: #20c997;
}

.file-chip {
  background: #f8f9fa;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid #e8edf0;
}

/* Buttons */
.btn-submit {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  padding: 8px 22px;
  border-radius: 10px;
  color: white;
  border: none;
  font-weight: 600;
}

.btn-submit:hover {
  background: linear-gradient(90deg, #2f80ed, #2d9cdb);
}
</style>
