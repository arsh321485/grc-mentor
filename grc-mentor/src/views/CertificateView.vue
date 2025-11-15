<template>
    <main>
        <div class="container-fluid row">
            <!-- Sidebar -->
            <div class="col-2 col-md-2">
                <Sidebar class="sidebar" />
            </div>

            <!-- Main Content -->
             <div class="col-10 col-md-10">
        <!-- Banner -->
        <div class="banner mb-5 ms-5">
          <div class="banner-left">
            <h6 class="banner-title">Your certificate</h6>
            <p class="banner-sub">
              You have successfully completed the GRC 101 program.
            </p>
          </div>
        </div>

                <!-- <p class="mb-4 ps-5 pt-3 content-title">Your certificate</p> -->

                <!-- Certificate Preview -->
                <div class="mb-3">
                    <img :src="certificatePath" alt="Certificate" class="ms-5 w-50" />
                </div>

                <!-- Action Buttons -->
                <div class="d-flex gap-3 justify-content-start ps-3 ms-5">
                    <!-- Share on LinkedIn -->
                    <button class="btn action-btn   d-flex align-items-center" @click="shareOnLinkedIn">
                        <i class="bi bi-box-arrow-up me-2"></i> Share on LinkedIn
                    </button>

                    <!-- Print Certificate -->
                    <button class="btn action-btn  d-flex align-items-center" @click="printCertificate">
                        <i class="fas fa-print me-2"></i> Download certificate
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import Sidebar from '@/components/Sidebar.vue';
// ✅ Import image properly for Vite/Webpack
import certificateImage from '../assets/certificate.png';

export default {
    name: "CertificateView",
    components: { Sidebar },

    data() {
        return {
            certificatePath: certificateImage
        };
    },

    methods: {
        // Opens LinkedIn share dialog
        shareOnLinkedIn() {
            const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.certificatePath)}`;
            window.open(linkedInUrl, '_blank', 'width=600,height=600');
        },

        // Prints the certificate
       printCertificate() {
    const printWindow = window.open('', '_blank');

    if (!printWindow) {
        alert('Unable to open print window');
        return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Print Certificate</title>
          <style>
            body { margin: 0; text-align: center; }
            img { max-width: 100%; height: auto; }
          </style>
        </head>
        <body>
          <img src="${this.certificatePath}" alt="Certificate" />
          <script>
            window.onload = function() {
              window.print();
              window.close();
            }
          <\/script>
        </body>
      </html>
    `);

    printWindow.document.close();
}

    }
};
</script>

<style scoped>

.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  font-family: "Inter", sans-serif;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}

.banner {
  margin-top: 30px;
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

.certificate-image {
  width: 100%;
  max-width: 700px;       /* Keep image size controlled */
  border-radius: 6px;
  border: 1px solid #ddd;
  display: block;         /* ✅ Aligns image to start */
}


.btn i {
    font-size: 16px;
}

.btn {
    padding: 10px 18px;
    font-weight: 500;
    border-radius: 10px;
    transition: all 0.3s ease;
}
.action-btn {
    border-radius: 10px;
    border: 1px solid #0082B9;
    color: #0082B9;
    font-size: 15px;
}




</style>
