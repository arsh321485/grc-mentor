<template>
    <main>
        <div class="container-fluid row">
            <!-- Sidebar -->
            <div class="col-2 col-md-2">
                <Sidebarprofile />
            </div>

            <!-- Main Content -->
            <div class="col-10 col-md-10">
                <div class="d-flex justify-content-end pt-3 calender-icon">
                  <i class="bi bi-calendar"></i>  Calendar view
                </div>
                <p class="mb-4 ps-5 pt-3 content-title">Your certificate</p>

                <!-- Certificate Preview -->
                <div class="certificate-preview mb-3 text-center">
                    <img :src="certificatePath" alt="Certificate" class="certificate-image shadow" />
                </div>

                <!-- Action Buttons -->
                <div class="d-flex gap-3 justify-content-start ps-3">
                    <!-- Share on LinkedIn -->
                    <button class="btn action-btn d-flex align-items-center" @click="shareOnLinkedIn">
                        <i class="bi bi-box-arrow-up me-2"></i> Share on LinkedIn
                    </button>

                    <!-- Print Certificate -->
                    <button class="btn action-btn  d-flex align-items-center" @click="printCertificate">
                        <i class="fas fa-print me-2"></i> Print certificate
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Sidebarprofile from '@/components/Sidebarprofile.vue';
// ✅ Import image properly for Vite/Webpack
import certificateImage from '../assets/certificate.png';

export default {
    name: "CertificateView",
    components: { Sidebarprofile },

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
.content-title {
    font-weight: 600;
    font-size: 46px;
}

/* .certificate-container {
    text-align: center;
} */

/* .certificate-preview {
    max-width: 700px;
    margin: 0 auto;
}

.certificate-image {
    width: 100%;
    border-radius: 6px;
    border: 1px solid #ddd;
} */

.certificate-preview {
  max-width: 100%;
  margin: 0;              /* ✅ No centering */
  text-align: left;       /* ✅ Align content to left */
  padding-left: 12px;
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
    border-radius: 25px;
    border: 1px solid #0082B9;
    color: #0082B9;
    font-size: 15px;
}
.calender-icon{
    color: #0082B9;
    font-size: 15px;
    font-weight: 500;
}

</style>
