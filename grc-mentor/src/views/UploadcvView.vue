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
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Stepper from "@/components/Stepper.vue";

export default {
    name: "UploadcvView",
    components: { Stepper },
    data() {
        return {
            selectedFile: null,
            uploading: false,
            uploadProgress: 0,
            uploadSuccess: false,
        };
    },
    methods: {
        // Open hidden file input
        triggerFileUpload() {
            this.$refs.fileInput.click();
        },

        // Handle file selection
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.selectedFile = file;
                this.uploadFile();
            }
        },

        // Simulate file upload with progress
        uploadFile() {
            this.uploading = true;
            this.uploadSuccess = false;
            this.uploadProgress = 0;

            // Simulate progress (replace this with real API if needed)
            const interval = setInterval(() => {
                if (this.uploadProgress < 100) {
                    this.uploadProgress += 10;
                } else {
                    clearInterval(interval);
                    this.uploading = false;
                    this.uploadSuccess = true;
                }
            }, 300); // every 300ms increases 10%
        },
    },
};
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
    /* Stick to the viewport */
    bottom: 20px;
    /* Distance from bottom */
    left: 25%;
    /* Move to center horizontally */
    transform: translateX(-50%);
    /* Adjust for perfect center */
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
    /* Always stays on top */
}

/* Hover Effect */
.next-btn:hover {
    background-color: #4a9dcf;
}

.upload-box {
    /* border: 2px dashed #cfd8dc; */
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
</style>
