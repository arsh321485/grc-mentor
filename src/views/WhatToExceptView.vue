<template>
    <main>
        <Header />

        <!-- Section 1: Personalized Guidance -->
<section class="py-2">
  <div class="container">
    <div class="row align-items-center g-4">
      <div class="col-lg-6">
        <img src="https://img.freepik.com/free-vector/ai-customer-support-abstract-concept-illustration_335657-3017.jpg?w=826" alt="AI Mentor" class="img-fluid img-rounded">
      </div>
      <div class="col-lg-6">
        <div class="info-box">
          <h4><i class="bi bi-person-video3 icon"></i>Personalized Guidance and Support</h4>
          <p>
            You’ll be paired with an advanced AI mentor specializing in GRC, offering personalized guidance, real-time feedback, and continuous support as you explore GRC concepts and tackle industry challenges. Our AI mentor adapts to your learning style and progress, ensuring you receive tailored advice and practical insights every step of the way.
          </p>
          <p>
            Mentors help you set and achieve specific skill goals, whether you’re aiming for technical mastery, leadership development, or a career transition.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Section 2: Hands-On Learning -->
<section class="highlight-section">
  <div class="container">
    <div class="row align-items-center g-4">
      <div class="col-lg-6 order-lg-2">
        <img src="https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-839.jpg?w=826" alt="Hands-on Learning" class="img-fluid img-rounded">
      </div>
      <div class="col-lg-6">
        <div class="info-box">
          <h4><i class="bi bi-journal-code icon"></i>Hands on Learning and Real-World Application</h4>
          <p>
            Our programs are guided by various subject matter expert AI mentors who deliver knowledge with practical exercises and real-world consulting projects to deepen your understanding and showcase your competencies.
          </p>
          <p>
            You’ll engage in scenario-based projects, audits, and assessments curated by the AI mentor, closely simulating actual GRC consulting engagements to prepare you for real-world challenges.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Section 3: Career Development -->
<section class="py-5">
  <div class="container">
    <div class="row align-items-center g-4">
      <div class="col-lg-6">
        <img src="https://img.freepik.com/free-vector/resume-concept-illustration_114360-4441.jpg?w=826" alt="Career Development" class="img-fluid img-rounded">
      </div>
      <div class="col-lg-6">
        <div class="info-box">
          <h4><i class="bi bi-briefcase icon"></i>Career Development and Networking Opportunities</h4>
          <p>
            GRCD Mentorship is a catalyst for career growth, helping you build confidence, executive presence, and strategic thinking—key traits for leadership roles in GRC.
          </p>
          <p>
            Programs include CV / profile development to be job ready, interview preparation, and guidance on certifications relevant to GRC.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Section 4: Industry Trends -->
<section class="highlight-section">
  <div class="container">
    <div class="row align-items-center g-4">
      <div class="col-lg-6 order-lg-2">
        <img src="https://img.freepik.com/free-vector/data-security-illustration-concept_114360-493.jpg?w=826" alt="Trends and Technology" class="img-fluid img-rounded">
      </div>
      <div class="col-lg-6">
        <div class="info-box">
          <h4><i class="bi bi-bar-chart-line icon"></i>Exposure to Industry Trends and Technologies</h4>
          <p>
            Mentors share insights on emerging compliance technologies, digital risk strategies, and evolving regulatory frameworks, ensuring you stay current in a rapidly changing field.
          </p>
          <p>
            Exposure to work with various industries / sub industries and garner a well-rounded experience.
          </p>
          <p>
            Getting firsthand experience working with clients, delivering projects.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


        <div>
            <Footer />
        </div>

    </main>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default{
    name: "WhatToExceptView",
    components: {Header , Footer}
}

</script>


<style>
    .section-heading {
      color: #007BAF;
      font-size: 2.3rem;
      font-weight: bold;
    }
    .info-box {
      background-color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    }
    .info-box p{
        font-weight: 400;
        font-size: 17px;
        color: black;
    }
    .highlight-section {
      background-color: #f8f9fa;
      padding: 50px 0;
    }
    .img-rounded {
      border-radius: 12px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    }
    .icon {
      font-size: 2rem;
      color: #007BAF;
      margin-right: 15px;
    }
  </style>
   