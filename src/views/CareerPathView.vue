<template>
    <main>

        <Header />
           <!-- Hero -->
<section class="py-4 text-center bg-light">
  <div class="container">
    <h1 class="section-heading">Career Path</h1>
  </div>
</section>

<!-- Timeline Section -->
<section class="py-2">
  <div class="container">
    <div class="timeline">

      <!-- Step 1 -->
      <div class="timeline-step">
        <h5><i class="bi bi-person-workspace icon-circle"></i>GRC Intern (0–1 year)</h5>
        <p>Supports audit preparation, assists with policy and procedure documentation, and performs basic compliance tasks.</p>
      </div>

      <!-- Step 2 -->
      <div class="timeline-step">
        <h5><i class="bi bi-search icon-circle"></i>GRC Analyst (1–2 years)</h5>
        <p>Maps control frameworks (e.g. NIST, ISO 27001) to business processes, conducts risk and compliance assessments, and helps prepare audit evidence.</p>
      </div>

      <!-- Step 3 -->
      <div class="timeline-step">
        <h5><i class="bi bi-person-check icon-circle"></i>Senior GRC Analyst/Consultant (2–4 years)</h5>
        <p>Leads discrete compliance engagements, coordinates implementation of control recommendations, and drives program-level risk management initiatives.</p>
      </div>

      <!-- Step 4 -->
      <div class="timeline-step">
        <h5><i class="bi bi-diagram-3 icon-circle"></i>GRC Manager (4–6 years)</h5>
        <p>Manages end-to-end GRC programs and cross-functional teams, develops risk and compliance strategies, and ensures alignment with organizational objectives.</p>
      </div>

      <!-- Step 5 -->
      <div class="timeline-step">
        <h5><i class="bi bi-award icon-circle"></i>GRC Director (7–10 years)</h5>
        <p>Defines and oversees enterprise-wide GRC strategy, directs executive reporting on risk posture, and serves as the primary liaison with regulators and external auditors (estimated based on general industry progression).</p>
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
    name: "CareerPathView",
    components: {Header , Footer}
}
</script>


<style>
    body {
      background-color: #f9f9f9;
    }
    .section-heading {
      color: #007BAF;
      font-size: 2.3rem;
      font-weight: bold;
    }
    .timeline {
      position: relative;
      margin: 50px 0;
      padding-left: 40px;
      border-left: 3px solid #007BAF;
    }
    .timeline-step {
      position: relative;
      margin-bottom: 40px;
    }
    /* .timeline-step::before {
      content: "";
      position: absolute;
      top: 3;
      left: -18px;
      width: 20px;
      height: 20px;
      background-color: #0d6efd;
      border-radius: 50%;
      border: 3px solid #fff;
      box-shadow: 0 0 0 3px #0d6efd66;
    } */
    .timeline-step h5 {
      font-weight: bold;
      color: #007BAF;
    }
    .timeline-step p {
      margin-bottom: 0;
    }
    .icon-circle {
      font-size: 1.4rem;
      margin-right: 10px;
      color: #007BAF;
    }
  
</style>