<template>
    <main>
   <Header />
       
<!-- Hero Section -->
  <section class="hero-section text-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 text-lg-start text-center">
          <h1 class="section-title mb-4">AI Enabled</h1>
          <p class="lead">
            AI agents are capable of independently performing human tasks, autonomously managing workflows, processes, and activities, and engaging in intelligent reasoning through interactions with both humans and other agents. By utilizing advanced reasoning powered by large language models, Mentor and the various AI agents we deploy have continuously learned and evolved through rigorous testing and development, enabling them to make informed decisions and achieve targeted results.
          </p>
        </div>
        <div class="col-lg-6 mt-4 mt-lg-0">
          <img src="https://img.freepik.com/free-vector/artificial-intelligence-abstract-concept_335657-2220.jpg?w=826&t=st=1719630241~exp=1719630841~hmac=4f3efcd46f0f570ff663d4f9a8f34bc63bb9844c05e10ef16f1c79cfe3872741" alt="AI Illustration" class="img-fluid img-rounded">
        </div>
      </div>
    </div>
  </section>

  <!-- Agentic AI Section -->
  <section class="py-5">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-md-6">
          <img src="https://img.freepik.com/free-vector/robot-human-communication-concept-illustration_114360-7300.jpg?w=826" class="img-fluid img-rounded" alt="Agentic AI">
        </div>
        <div class="col-md-6">
          <div class="content-box">
            <h2 class=" mb-3">Agentic AI</h2>
            <p class="lead">
              Agentic AI is advancing at a remarkable pace, offering tremendous potential for transformation through hands-on learning. This is why we developed the GRC agentic mentorship platform—to give newcomers real-world experience and prepare them for organizations aiming to deploy digital workforces with confidence and measurable impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mentorship Platform Section -->
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-md-6 order-md-2">
          <img src="https://img.freepik.com/free-vector/mentorship-concept-illustration_114360-6611.jpg?w=826" class="img-fluid img-rounded" alt="Mentorship Platform">
        </div>
        <div class="col-md-6">
          <div class="content-box">
            <h2 class=" mb-3">Our Mentorship Platform</h2>
            <p class="lead">
              Our mentorship platform bridges the gap between learning and real-world practice by using advanced AI agents to replicate the challenges and workflows found in modern organizations. This ensures mentees are not only learning but are also prepared to thrive in today’s rapidly evolving, technology-driven workplaces.
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
    name:"AienabledView",
    components: {Header , Footer}
}
</script>



   <style scoped>
    .hero-section {
      background: linear-gradient(to right, #e6f0ff, #f0f9ff);
      padding: 70px 0;
    }
    .section-title {
      font-weight: 700;
      font-size: 2.5rem;
      color: #007BAF;
    }
    .content-box {
      background-color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 0 15px rgba(0,0,0,0.05);
      color: #007BAF;
    }
    .img-rounded {
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.08);
    }
    .lead{
        color: black;
        font-size: 17px;
       font-weight: 400;
    }
  </style>