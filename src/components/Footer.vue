<template>
  <footer class="footer-section bg-light py-5">
    <div class="container">
      <div class="row">
        <!-- Left Section -->
        <div class="col-lg-6 col-md-6 mb-4">
          <!-- <h3 class="logo">
            <span class="text-primary fw-bold">GRC</span><span class="fw-bold text-dark">DEPARTMENT</span>
          </h3> -->
          <div class="pt-4">
            <img src="../assets/logo-img.png" alt="" style="height: 35px;"> 
          </div>
          <p class="footer-description pt-5">
            Governance, Risk, and Compliance <strong>GRCMentor</strong> play a pivotal role in modern organizations,
            acting as cornerstones for sustainable growth and operational integrity.
          </p>
          <div class="certifications mt-3">
            <img src="../assets/SOC-badge.svg" alt="AICPA" class="cert-img" />
            <img src="../assets/Artboard-1-8.webp" alt="ISO 27001" class="cert-img" />
            <img src="../assets/Artboard-2-8.webp" alt="ISO 38301" class="cert-img" />
            <!-- <img src="../assets/Artboard-3-8.webp" alt="ISO 27017" class="cert-img" />
            <img src="../assets/Artboard-4-8.webp" alt="ISO 2701" class="cert-img" /> -->
          </div>
        </div>

        <!-- Useful Links -->
        <!-- <div class="col-lg-3 col-md-6 mb-4 pt-5 ps-5">
          <h5 class="fw-bold mb-3">Useful Link</h5>
          <ul class="list-unstyled footer-links">
            <li><i class="bi bi-chevron-right"></i> <router-link to="/home">Home</router-link></li>
            <li><i class="bi bi-chevron-right"></i> <router-link to="/home">Mentorship</router-link></li>
          </ul>
        </div> -->

        <div class="col-lg-3 col-md-6 mb-4 pt-5 ps-5">
    <h5 class="fw-bold mb-3">Useful Link</h5>
    <ul class="list-unstyled footer-links">
      <li>
        <i class="bi bi-chevron-right"></i>
        <router-link to="/home" @click.native="scrollToTop">Home</router-link>
      </li>
      <li>
        <i class="bi bi-chevron-right"></i>
        <router-link to="/home" @click.native="scrollToTop">Mentorship</router-link>
      </li>
    </ul>
  </div>

        <!-- Company Links -->
        <!-- <div class="col-lg-2 col-md-6 mb-4 pt-5 ps-5">
          <h5 class="fw-bold mb-3">Company</h5>
          <ul class="list-unstyled footer-links">
            <li><i class="bi bi-chevron-right"></i> <router-link to="/about">About Us</router-link></li>
            <li><i class="bi bi-chevron-right"></i> <router-link to="/careers">Careers</router-link></li>
            <li><i class="bi bi-chevron-right"></i> <router-link to="/insights">Insights</router-link></li>
          </ul>
        </div> -->

        <!-- Contact Section -->
        <div class="col-lg-3 col-md-6 pt-5 ps-5">
          <h5 class="fw-bold mb-3">Get In Touch</h5>
          <p>
            <i class="bi bi-envelope-fill me-2"></i>
            <a href="mailto:info@grcdepartment.co.in" class="email-link">info@grcmentor.ai</a>
          </p>
          <div class="social-icons mt-3">
            <a href="#" class="socialmedia-btn twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="socialmedia-btn linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="footer-bottom text-center pt-3 mt-4 mb-0 pb-0">
        <p>
          Copyright &copy; 2025
          <a href="https://grcmentor.ai" class="footer-brand">grcmentor</a>.
          All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
/* .footer-section {
  background-color: #f5f6f8;
} */

.logo {
  font-size: 1.5rem;
}

.footer-description {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
}

.certifications {
  display: flex;
  gap: 10px;
}

.cert-img {
  width: 55px;
  height: auto;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links i {
  font-size: 0.85rem;
  margin-right: 5px;
  color: #004aad;
}

.footer-links a {
  color: #001f3f;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #007bff;
}

.email-link {
  color: #001f3f;
  text-decoration: none;
}

.email-link:hover {
  color: #007bff;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.socialmedia-btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #004aad;
  border-radius: 8px;
  font-size: 1.1rem;
  color: #004aad;
  transition: all 0.3s ease;
}

.socialmedia-btn:hover {
  background-color: #004aad;
  color: #fff;
}

.footer-bottom {
  border-top: 1px solid #ddd;
  font-size: 0.9rem;
  color: #555;

}

.footer-brand {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.footer-brand:hover {
  text-decoration: underline;
}
</style>
