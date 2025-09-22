<!-- <template>
    <main>
        <div class="container-fluid row">
        
            <div class="col-2 col-md-2">
                <Stepper :currentStep="1" />
            </div>

         
            <div class="col-10 col-md-10">
                <h2 class="cv-heading pt-5">Please upload your CV</h2>
                <p class="cv-subtext pt-2">Please wait while we set things up for you...</p>

                <div class="row">
                    <div class="col-5">
                        <div class="card upload-box" @click="triggerFileUpload">
                        
                            <div class="upload-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4-4m0 0l-4 4m4-4v12" />
                                </svg>
                            </div>

                        
                            <p class="upload-text text-center mb-2">Upload your CV</p>
                            <p class="upload-subtext text-center pb-3">You can upload a PDF file</p>

                        
                            <div v-if="uploading" class="progress my-3">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                    :style="{ width: uploadProgress + '%' }">
                                    {{ uploadProgress }}%
                                </div>
                            </div>

                       
                            <div v-if="uploadSuccess" class="alert alert-success mt-2 p-2 text-center">
                                File uploaded successfully!
                            </div>

                            <div v-if="selectedFile && !uploading" class="text-center mt-2">
                                <small class="text-primary">{{ selectedFile.name }}</small>
                            </div>

                         
                            <input type="file" ref="fileInput" class="d-none" @change="handleFileChange" />
                        </div>

                        
                        <router-link to="/cvadded" class="next-btn px-5">
                            Next: Course Payment
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Stepper from "@/components/Stepper.vue";

export default defineComponent({
  name: "UploadcvView",
  components: { Stepper },
  data() {
    return {
      selectedFile: null as File | null, 
      uploading: false,
      uploadProgress: 0,
      uploadSuccess: false,
    };
  },
  methods: {
    triggerFileUpload() {
      const input = this.$refs.fileInput as HTMLInputElement; 
      input.click();
    },

    handleFileChange(event: Event) {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        this.selectedFile = file; 
        this.uploadFile();
      }
    },

    uploadFile() {
      this.uploading = true;
      this.uploadSuccess = false;
      this.uploadProgress = 0;

      const interval = setInterval(() => {
        if (this.uploadProgress < 100) {
          this.uploadProgress += 10;
        } else {
          clearInterval(interval);
          this.uploading = false;
          this.uploadSuccess = true;
        }
      }, 300);
    },
  },
});
</script>


<style>
.cv-heading {
    font-weight: 500;
    font-size: 42px;
    color: #000000;
}

.cv-subtext {
    font-weight: 500;
    color: #00000099;
    font-size: 14px;
}

body {
    background-color: #f8f9fa;
}

.next-btn {
    position: fixed;
   
    bottom: 20px;
  
    left: 25%;
  
    transform: translateX(-50%);
 
    padding: 12px 40px;
    background-color: #7ea4b4;
    color: #FFFFFF;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: background 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    text-decoration: none;
  
}


.next-btn:hover {
    background-color: #4a9dcf;
}

.upload-box {
  
    border-radius: 12px;
    padding: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
}

.upload-box:hover {
    background-color: #f5faff;
}

.upload-circle {
    width: 60px;
    height: 60px;
    background-color: #e3f2fd;
    color: #0096D6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto 15px;
}

.upload-circle svg {
    width: 28px;
    height: 28px;
    stroke: #2196f3;
}

.upload-text {
    font-size: 24px;
    font-weight: 600;
    color: #000000DE;
}

.upload-subtext {
    font-size: 13px;
    color: #00000099;
}
</style> -->




<template>
  <main>
    <div class="container-fluid row">
      <!-- Stepper -->
      <div class="col-2 col-md-2">
        <Stepper :currentStep="1" />
      </div>

      <!-- CV Upload Section -->
      <div class="col-10 col-md-10">
        <h2 class="cv-heading pt-5">Please upload your CV</h2>
        <p class="cv-subtext pt-2">Please wait while we set things up for you...</p>

        <div class="row">
          <!-- Left: Upload Box -->
          <div class="col-5">
            <div class="card upload-box" @click="triggerFileUpload">
              <!-- Upload Icon -->
              <div class="upload-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4-4m0 0l-4 4m4-4v12" />
                </svg>
              </div>

              <!-- Upload Text -->
              <p class="upload-text text-center mb-2">Upload your CV</p>
              <p class="upload-subtext text-center pb-3">You can upload a PDF file</p>

              <!-- Progress Bar -->
              <div v-if="uploading" class="progress my-3">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                  :style="{ width: uploadProgress + '%' }">
                  {{ uploadProgress }}%
                </div>
              </div>

              <!-- Success Message -->
              <div v-if="uploadSuccess" class="alert alert-success mt-2 p-2 text-center">
                File uploaded successfully!
              </div>

              <!-- File Name -->
              <div v-if="selectedFile && !uploading" class="text-center mt-2">
                <small class="text-primary">{{ selectedFile.name }}</small>
              </div>

              <!-- Hidden File Input -->
              <input type="file" ref="fileInput" class="d-none" @change="handleFileChange" />
            </div>

            <!-- Button -->
            <router-link to="/cvadded" class="next-btn px-5">
              Next: Course Payment
            </router-link>
          </div>

          <!-- Right: Illustration + Tips -->
        <div class="col-7 d-flex justify-content-center">
  <div class="upload-tips text-center p-3 d-flex flex-column align-items-center">
    
    <!-- Illustration -->
    <div class="upload-illustration mb-3">
      <img src="../assets/cv-upload-img.jpg" alt="Upload illustration" class="img-fluid" style="max-width: 200px;" />
    </div>

    <!-- Heading -->
    <h6 class="fw-bold mb-2">Tips for your CV</h6>

    <!-- List -->
   <ul class="list-unstyled text-start">
  <li class="d-flex align-items-center mb-2">
    <i class="bi bi-check2-circle text-success me-2"></i>
    Upload only in PDF format
  </li>
  <li class="d-flex align-items-center mb-2">
    <i class="bi bi-check2-circle text-success me-2"></i>
    Ensure file size is below 5MB
  </li>
  <li class="d-flex align-items-center mb-2">
    <i class="bi bi-check2-circle text-success me-2"></i>
    Include updated skills and experience
  </li>
  <li class="d-flex align-items-center">
    <i class="bi bi-check2-circle text-success me-2"></i>
    Keep your CV professional and concise
  </li>
</ul>

    
  </div>
</div>

        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Stepper from "@/components/Stepper.vue";

export default defineComponent({
  name: "UploadcvView",
  components: { Stepper },
  data() {
    return {
      selectedFile: null as File | null,
      uploading: false,
      uploadProgress: 0,
      uploadSuccess: false,
    };
  },
  methods: {
    triggerFileUpload() {
      const input = this.$refs.fileInput as HTMLInputElement;
      input.click();
    },
    handleFileChange(event: Event) {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        this.selectedFile = file;
        this.uploadFile();
      }
    },
    uploadFile() {
      this.uploading = true;
      this.uploadSuccess = false;
      this.uploadProgress = 0;
      const interval = setInterval(() => {
        if (this.uploadProgress < 100) {
          this.uploadProgress += 10;
        } else {
          clearInterval(interval);
          this.uploading = false;
          this.uploadSuccess = true;
        }
      }, 300);
    },
  },
});
</script>

<style>
.cv-heading {
  font-weight: 500;
  font-size: 42px;
  color: #000000;
}

.cv-subtext {
  font-weight: 500;
  color: #00000099;
  font-size: 14px;
}

body {
  background-color: #f8f9fa;
}

.next-btn {
  position: fixed;
  bottom: 20px;
  left: 25%;
  transform: translateX(-50%);
  padding: 12px 40px;
  background-color: #7ea4b4;
  color: #FFFFFF;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: background 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-decoration: none;
}

.next-btn:hover {
  background-color: #4a9dcf;
}

.upload-box {
  border-radius: 12px;
  padding: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
}

.upload-box:hover {
  background-color: #f5faff;
}

.upload-circle {
  width: 60px;
  height: 60px;
  background-color: #e3f2fd;
  color: #0096D6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto 15px;
}

.upload-circle svg {
  width: 28px;
  height: 28px;
  stroke: #2196f3;
}

.upload-text {
  font-size: 24px;
  font-weight: 600;
  color: #000000DE;
}

.upload-subtext {
  font-size: 13px;
  color: #00000099;
}

/* Right Side Enhancements */
.upload-illustration img {
  max-width: 300px;
  display: block;
  margin-bottom: 20px;
}

.upload-tips {
  background: #f9f9f9;
  border: 3px solid #eee;
  border-radius: 8px;
  padding: 15px;
  font-size: 13px;
  color: #444;
  width: 80%;
}

.upload-tips h6 {
  font-weight: 600;
  margin-bottom: 8px;
}

.upload-tips ul {
  padding-left: 18px;
  margin: 0;
}
</style>