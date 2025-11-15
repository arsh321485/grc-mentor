<template>
  <main>
    <Header />

    <!-- section carousal -->

    <section class="carousal">
      <div class="container-fluid">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

          <!-- Indicators -->
          <div class="carousel-indicators custom-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>

          <!-- Carousel Items -->
          <div class="carousel-inner rounded-4 overflow-hidden">

            <div class="carousel-item active">
              <img src="../assets/slider-img-chng.png" class="d-block w-100 carousel-img" alt="Slide 1">
              <div class="carousel-caption custom-caption">
                <h2 class="fw-semibold display-6">Experience counts</h2>
                <p class="carousal-subtext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos similique
                  culpa, quae rerum omnis iure ratione vitae dolorem provident voluptatibus.</p>
              </div>
            </div>


            <div class="carousel-item">
              <img src="../assets/slider-img2.jpg" class="d-block w-100 carousel-img" alt="Slide 1">
              <div class="carousel-caption custom-caption">
                <h2 class="fw-semibold display-6">99.99% real</h2>
                <p class="carousal-subtext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos similique
                  culpa, quae rerum omnis iure ratione vitae dolorem provident voluptatibus.</p>
              </div>
            </div>



            <div class="carousel-item">
              <img src="../assets/slider-img2.jpg" class="d-block w-100 carousel-img" alt="Slide 1">
              <div class="carousel-caption custom-caption">
                <h2 class="fw-semibold display-6">Life time mentorship for all levels</h2>
                <p class="carousal-subtext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos similique
                  culpa, quae rerum omnis iure ratione vitae dolorem provident voluptatibus.</p>
              </div>
            </div>

            <!-- Controls -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>


    <!-- industries section -->

    <!-- <section class="container my-5">
      <div class="text-center mb-5">

        <h1 class="industry-h1">Industries you’ll work with:</h1>
        <p class="industry-subtext">Industries you’ll work with:</p>
      </div>
      <div class="container">
        <div class="row g-4">
          <div v-for="(item, index) in industries" :key="index" class="col-12 col-md-6 col-lg-4">
            <div class="flip-card">
              <div class="flip-card-inner">

                <div class="flip-card-front d-flex flex-column justify-content-center align-items-center p-4 rounded-3"
                  :style="{ backgroundColor: item.color }">
                  <i :class="item.icon + ' fs-1'" :style="{ color: item.iconColor }"></i>
                  <h5 class="mt-3 fw-bold">{{ item.title }}</h5>
                </div>


                <div class="flip-card-back">
                  <img :src="item.image" class="img-fluid rounded-3" :alt="item.title" />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </section> -->


    <section class="container my-5">
      <div class="text-center mb-5">
        <h1 class="industry-h1">Industries you’ll work with:</h1>
        <p class="industry-subtext">Industries you’ll work with:</p>
      </div>

      <div class="container">
        <div class="row g-4">
          <div v-for="(item, index) in industries" :key="index" class="col-12 col-md-6 col-lg-4">
            <div class="flip-card">
              <div class="flip-card-inner">
                <!-- FRONT (IMAGE) -->
                <!-- <div class="flip-card-front">
              <img :src="item.image" class="img-fluid rounded-3 w-100 h-100" :alt="item.title" />
            </div> -->

                <!-- FRONT (IMAGE + TITLE TEXT OVERLAY) -->
                <div class="flip-card-front position-relative">
                  <img :src="item.image" class="img-fluid rounded-3 w-100 h-100" :alt="item.title" />

                  <!-- Overlay Title -->
                  <div class="industry-overlay-text position-absolute w-100 text-center">
                    <h5 class="fw-bold text-white">{{ item.title }}</h5>
                  </div>
                </div>

                <!-- BACK (COLOR + ICON + TEXT) -->
                <!-- <div class="flip-card-back d-flex flex-column justify-content-center align-items-center p-4 rounded-3"
                  :style="{ backgroundColor: item.color }">
                  <i :class="item.icon + ' fs-1'" :style="{ color: item.iconColor }"></i>
                  <p class="mt-3 fw-bold text-center">{{ item.paragraph }}</p>
                </div> -->


                <!-- BACK (IMAGE + ICON + TEXT) -->
                <div
                  class="flip-card-back d-flex flex-column justify-content-center align-items-center p-4 rounded-3 text-center"
                  :style="{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }">
                  <!-- Dark overlay -->
                  <div class="overlay"></div>

                  <!-- Content above overlay -->
                  <div class="content">
                    <i :class="item.icon + ' fs-1'"></i>
                    <!-- <p class="mt-3 fw-bold">{{ item.paragraph }}</p> -->
                    <ul class="mt-3 text-start">
                      <li v-for="(point, idx) in item.paragraph" :key="idx">
                        {{ point }}
                      </li>
                    </ul>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Mentornship benefit section -->

    <section class="benefits-section text-center">
      <!-- <small class="industry-text">Industries</small> -->
      <h1 class="industry-h1 mt-2">Our Mentornship Program</h1>
      <p class="industry-subtext">Our Mentornship Program</p>

      <div class="container mt-5">
        <div class="row g-4">

          <div class="col-md-4 d-flex">
            <div class="p-4 benefit-card w-100">
              <h3>Real world task <br> experience</h3>
              <p class="text-muted">Work with AI mentors and customers that simulate actual human tasks, providing
                practical exposure rather than just theoretical knowledge.</p>
            </div>
          </div>

          <div class="col-md-4 d-flex">
            <div class="p-4 benefit-card w-100">
              <h3>Autonomous workflow management</h3>
              <p class="text-muted">Work with AI mentors and customers that simulate actual human tasks, providing
                practical exposure rather than just theoretical knowledge.</p>
            </div>
          </div>

          <div class="col-md-4 d-flex">
            <div class="p-4 benefit-card w-100">
              <h3>Intelligent decision <br> making</h3>
              <p class="text-muted">Work with AI mentors and customers that simulate actual human tasks, providing
                practical exposure rather than just theoretical knowledge.</p>
            </div>
          </div>

          <div class="col-md-4 d-flex">
            <div class="p-4 benefit-card w-100">
              <h3>Continuous learning & Adaptation</h3>
              <p class="text-muted">Work with AI mentors and customers that simulate actual human tasks, providing
                practical exposure rather than just theoretical knowledge.</p>
            </div>
          </div>

          <div class="col-md-4 d-flex">
            <div class="p-4 benefit-card w-100">
              <h3>Real, measurable <br> impact</h3>
              <p class="text-muted">Work with AI mentors and customers that simulate actual human tasks, providing
                practical exposure rather than just theoretical knowledge.</p>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- Testimonials section -->

    <section class="testimonials container py-5">
      <!-- <h5 class="text-center industry-text">Testimonials</h5> -->
      <h1 class="text-center industry-h1">Testimonials</h1>
      <p class="industry-subtext text-center"> Testimonials</p>

      <!-- Swiper container -->
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <!-- Testimonial slide -->
          <div class="swiper-slide" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="card shadow-sm p-4 h-100 mt-4">
              <!-- Quote icon -->
              <i class="bi bi-quote fs-2 mb-3" style="color: #0278D3;"></i>

              <!-- Testimonial text -->
              <p class="mb-3 text-muted">
                {{ testimonial.quote }}
              </p>

              <!-- Author info -->

              <div class="d-flex align-items-center">
                <!-- Grey Circle -->
                <div class="rounded-circle  d-flex align-items-center justify-content-center"
                  style="width: 40px; height: 40px; background-color: #D9D9D9;">
                  <span class="text-white fw-bold">
                    {{ testimonial.name.charAt(0) }}
                  </span>
                </div>

                <!-- Name + Position -->
                <div class="ms-2">
                  <h6 class="mb-0 fw-bold">{{ testimonial.name }}</h6>
                  <small class="text-muted">{{ testimonial.position }}</small>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Pagination only (no arrows) -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </section>


    <!-- Our Courses -->


    <div class="container-lg" style="max-width: 1100px;">
      <div class="row mt-3 core-benfites-row">
        <div class="col-lg-6 col-md-6 mb-4">
          <div class="home-core-benifts-widget">
            <img class="main-img" src="../assets/course-img.png" alt="">
            <div class="blur-section"></div>
            <div class="home-core-benefites-overlay">
              <h5 class="text-white text-center">GRC 101</h5>
              <p class="text-white text-center pt-2 px-4 py-4">
                GRC Analyst (1–2 years): Maps control frameworks (e.g. NIST, ISO 27001) to business processes,
                conducts risk and compliance assessments, and helps prepare audit evidence.
              </p>


              <router-link to="/signup">
                <button type="button" class="btn card-btn">
                  Know More
                </button>
              </router-link>

            </div>
          </div>

        </div>





        <div class="col-lg-6 col-md-6 mb-4">
          <div class="home-core-benifts-widget">
            <img class="main-img" src="../assets/course-img.png" alt="">
            <div class="blur-section"></div>
            <div class="home-core-benefites-overlay">
              <h5 class="text-white text-center">GRC 301</h5>
              <p class="text-white text-center pt-2 px-4 py-4">
                GRC Analyst (1–2 years): Maps control frameworks (e.g. NIST, ISO 27001) to business processes,
                conducts risk and compliance assessments, and helps prepare audit evidence.
              </p>

              <router-link to="/signup">
                <button type="button" class="btn card-btn">
                  Know More
                </button>
              </router-link>
            </div>
          </div>
          <!-- card here -->
        </div>
        <div class="col-lg-6 col-md-6 mb-4">
          <div class="home-core-benifts-widget">
            <img class="main-img" src="../assets/course-img.png" alt="">
            <div class="blur-section"></div>
            <div class="home-core-benefites-overlay">
              <h5 class="text-white text-center">GRC 501</h5>
              <p class="text-white text-center pt-2 px-4 py-4">
                GRC Analyst (1–2 years): Maps control frameworks (e.g. NIST, ISO 27001) to business processes,
                conducts risk and compliance assessments, and helps prepare audit evidence.
              </p>

              <router-link to="/signup">
                <button type="button" class="btn card-btn">
                  Know More
                </button>
              </router-link>
            </div>
          </div>
          <!-- card here -->
        </div>
        <div class="col-lg-6 col-md-6 mb-4">
          <div class="home-core-benifts-widget">
            <img class="main-img" src="../assets/course-img.png" alt="">
            <div class="blur-section"></div>
            <div class="home-core-benefites-overlay">
              <h5 class="text-white text-center">GRC 701</h5>
              <p class="text-white text-center pt-2 px-4 py-4">
                GRC Analyst (1–2 years): Maps control frameworks (e.g. NIST, ISO 27001) to business processes,
                conducts risk and compliance assessments, and helps prepare audit evidence.
              </p>

              <router-link to="/signup">
                <button type="button" class="btn card-btn">
                  Know More
                </button>
              </router-link>
            </div>
          </div>
          <!-- card here -->
        </div>
      </div>
    </div>



    <!-- Faq's  Section-->

    <section class=" faq-section" id="faq">
      <div class="container">
        <div class="row justify-content-center mx-0">
          <div class="col-lg-8">
            <div class="section-title">
              <h3 class="text-center" style="color: #0083BB;"><i class="bi bi-patch-question-fill"></i> FAQs</h3>
              <h1 class="text-center industry-h1">Frequently asked questions</h1>
              <p class="industry-subtext text-center"> Frequently asked questions</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="faq-container">

              <div class="tab-content  mt-5 ">


                <div class="tab-pane fade show active tabFaq2" id="tabFaq2">
                  <div class="row">
                    <div class="col-lg-12">


                      <div class="faq-box">
                        <div class="accordion" id="faqparent2">
                          <div class="accordion-item">
                            <h5 class="accordion-header" id="headingOne">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faqbody8" aria-expanded="true" aria-controls="faqbody8">
                                What are the benefits of participating in the GRC mentorship
                                program?
                              </button>
                            </h5>
                            <div id="faqbody8" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                              data-bs-parent="#faqparent2">
                              <div class="accordion-body">
                                <div class="faq-body">
                                  <p>The GRC mentorship program offers valuable
                                    opportunities for both mentors and mentees. Mentees
                                    gain access to experienced professionals who can
                                    provide guidance on career development, technical
                                    skills, and industry best practices. Mentors benefit
                                    from developing their leadership skills, expanding
                                    their professional network, and gaining fresh
                                    perspectives from emerging talent. </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="accordion-item">
                            <h5 class="accordion-header" id="faqhead1">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faqbody3" aria-expanded="true" aria-controls="faqbody3">
                                How does the GRC department match mentors and mentees?
                              </button>
                            </h5>
                            <div id="faqbody3" class="accordion-collapse collapse " aria-labelledby="faqhead1"
                              data-bs-parent="#faqparent2">
                              <div class="accordion-body">
                                <div class="faq-body">
                                  <p>We carefully match mentors and mentees based on their
                                    skills, interests, and career goals. We use a
                                    structured application process and consider factors
                                    such as experience level, technical expertise, and
                                    preferred areas of focus. Our goal is to create
                                    mutually beneficial partnerships that foster
                                    professional growth. </p>

                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h5 class="accordion-header" id="faqhead1">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faqbody4" aria-expanded="true" aria-controls="faqbody4">
                                What are the expectations for mentors and mentees in the GRC
                                program?
                              </button>
                            </h5>
                            <div id="faqbody4" class="accordion-collapse collapse " aria-labelledby="faqhead1"
                              data-bs-parent="#faqparent2">
                              <div class="accordion-body">
                                <div class="faq-body">
                                  <p>Mentors are expected to provide guidance, support,
                                    and constructive feedback to their mentees. Mentees
                                    are expected to actively participate in the program,
                                    be open to learning, and take ownership of their
                                    professional development. Regular communication and
                                    a commitment to scheduled meetings are essential for
                                    a successful mentorship relationship. </p>

                                </div>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tabFaq3">
                  <div class="row">
                    <div class="col-lg-12">


                      <div class="faq-box">
                        <div class="accordion" id="faqparent3">
                          <div class="accordion-item">
                            <h5 class="accordion-header" id="headingOne">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faqbody5" aria-expanded="true" aria-controls="faqbody5">
                                How does the GRC department assess the compliance and risk
                                profiles of potential partners?
                              </button>
                            </h5>
                            <div id="faqbody5" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                              data-bs-parent="#faqparent3">
                              <div class="accordion-body">
                                <div class="faq-body">
                                  <p>We conduct thorough due diligence on all potential
                                    partners, including a review of their compliance
                                    certifications, security policies, and risk
                                    management practices. We use a risk-based approach
                                    to identify and mitigate potential risks associated
                                    with partnering with external organizations. </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="accordion-item">
                            <h5 class="accordion-header" id="faqhead1">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faqbody6" aria-expanded="true" aria-controls="faqbody6">
                                What GRC requirements do partners need to meet to work with
                                our organization?
                              </button>
                            </h5>
                            <div id="faqbody6" class="accordion-collapse collapse " aria-labelledby="faqhead1"
                              data-bs-parent="#faqparent3">
                              <div class="accordion-body">
                                <div class="faq-body">
                                  <p>Partners are required to adhere to our established
                                    compliance standards and security policies. This may
                                    include providing evidence of compliance with
                                    relevant regulations, undergoing security audits,
                                    and participating in training programs. Specific
                                    requirements will be outlined in the partnership
                                    agreement. </p>

                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h5 class="accordion-header" id="faqhead1">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faqbody7" aria-expanded="true" aria-controls="faqbody7">
                                How does the GRC department monitor partner compliance and
                                risk throughout the partnership lifecycle?
                              </button>
                            </h5>
                            <div id="faqbody7" class="accordion-collapse collapse " aria-labelledby="faqhead1"
                              data-bs-parent="#faqparent3">
                              <div class="accordion-body">
                                <div class="faq-body">
                                  <p>We implement ongoing monitoring programs to ensure
                                    partner compliance and identify potential risks.
                                    This may include regular audits, performance
                                    reviews, and security assessments. We work
                                    collaboratively with partners to address any
                                    identified issues and maintain a strong compliance
                                    posture. </p>

                                </div>
                              </div>
                            </div>
                          </div>



                        </div>
                      </div>
                    </div>
                  </div>


                </div>


              </div><!-- End Bordered Tabs -->
            </div>
          </div>
        </div>
      </div>

    </section>


    <!-- Footer section -->
    <div>

      <Footer />
    </div>



  </main>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "HomeView",
  components: { Header, Footer },

  data() {
    return {
      industries: [
        {
          title: "Technology & IT Services",
          icon: "bi bi-gear-wide-connected",
          iconColor: "#3CACA7",
          color: "#EAFFFE",
          image: new URL('@/assets/technology-img.webp', import.meta.url).href,
          // paragraph: " SaaS companies, Managed Service Providers (MSPs), Cloud hosting providers, Data centers, Software development firms"
          paragraph: [
            "SaaS companies",
            "Managed Service Providers (MSPs)",
            "Cloud hosting providers",
            "Data centers",
            "Software development firms"
          ]

        },
        {
          title: "Banking & Financial Services",
          icon: "bi bi-bank",
          iconColor: "#3460A7",
          color: "#EAF2FF",
          image: new URL('@/assets/banking-financial.jpg', import.meta.url).href,
          // paragraph: "Commercial banks, fintech companies, payment processors, investment firms, insurance providers, and credit rating agencies."
          paragraph: [
            "Commercial banks",
            "Fintech companies",
            "Payment processors",
            "Investment firms",
            "Insurance providers",
            "Credit rating agencies"
          ]

        },
        {
          title: "Healthcare & Life Sciences",
          icon: "bi bi-hospital",
          iconColor: "#892318",
          color: "#FFECEA",
          image: new URL('@/assets/health-care.jpg', import.meta.url).href,
          // paragraph: "Hospitals, clinics, HealthTech platforms, pharmaceutical companies, clinical research organizations, and health insurers."
          paragraph: [
            "Hospitals",
            "Clinics",
            "HealthTech platforms",
            "Pharmaceutical companies",
            "Clinical research organizations",
            "Health insurers"
          ]

        },
        {
          title: "Business Process Outsourcing",
          icon: "bi bi-people",
          iconColor: "#60187D",
          color: "#F9EAFF",
          image: new URL('@/assets/outsourcing.webp', import.meta.url).href,
          // paragraph: "Call centers, shared service centers, payroll processors, and legal process outsourcing firms."
          paragraph: [
            "Call centers",
            "Shared service centers",
            "Payroll processors",
            "Legal process outsourcing firms"
          ]

        },
        {
          title: "Legal & Consulting Services",
          icon: "bi bi-person-workspace",
          iconColor: "#25822E",
          color: "#EAFFEC",
          image: new URL('@/assets/consulting-source.webp', import.meta.url).href,
          // paragraph: "Law firms, CPA firms, and consulting advisors."
          paragraph: [
            "Law firms",
            "CPA firms",
            "Consulting advisors"
          ]

        },
        {
          title: "E-commerce & Retail",
          icon: "bi bi-cart",
          iconColor: "#967E17",
          color: "#FFFBEA",
          image: new URL('@/assets/ecommarce-retail.webp', import.meta.url).href,
          // paragraph: "Online marketplaces, e-commerce platforms, and point-of-sale solution providers."
          paragraph: [
            "Online marketplaces",
            "E-commerce platforms",
            "Point-of-sale solution providers"
          ]

        },
        {
          title: "Manufacturing & Industrial",
          icon: "bi bi-gear-wide-connected",
          iconColor: "#C15D16",
          color: "#FFE7FA",
          image: new URL('@/assets/manufacture-industrial.webp', import.meta.url).href,
          // paragraph: "Smart factories with IIoT, automotive and electronics manufacturers, and defense and aerospace contractors."
          paragraph: [
            "Smart factories with IIoT",
            "Automotive manufacturers",
            "Electronics manufacturers",
            "Defense contractors",
            "Aerospace contractors"
          ]

        },
        {
          title: "Government & Public Sector",
          icon: "bi bi-building",
          iconColor: "#1F7595",
          color: "#FFEAEA",
          image: new URL('@/assets/public-sector.webp', import.meta.url).href,
          // paragraph: "Government ministries, defense and intelligence agencies, and e-governance platforms."
          paragraph: [
            "Government ministries",
            "Defense and intelligence agencies",
            "E-governance platforms"
          ]

        },
        {
          title: "Transportation & Logistics",
          icon: "bi bi-truck",
          iconColor: "#800B5B",
          color: "#EAFFFE",
          image: new URL('@/assets/transport-logistics.webp', import.meta.url).href,
          // paragraph: "Airlines and airports, maritime and shipping companies, and railway and logistics platforms."
          paragraph: [
            "Airlines and airports",
            "Maritime and shipping companies",
            "Railway platforms",
            "Logistics platforms"
          ]

        },
        {
          title: "Education & Research",
          icon: "bi bi-mortarboard",
          iconColor: "#0A741F",
          color: "#FFECEA",
          image: new URL('@/assets/education-research.jpg', import.meta.url).href,
          // paragraph: "Universities, research institutions, and EdTech platforms."
          paragraph: [
            "Universities",
            "Research institutions",
            "EdTech platforms"
          ]

        },
        {
          title: "Media & Telecommunications",
          icon: "bi bi-broadcast",
          iconColor: "#A34545",
          color: "#F9EAFF",
          image: new URL('@/assets/media-telecomunication.webp', import.meta.url).href,
          // paragraph: "ISPs, telecom companies, and digital media providers."
          paragraph: [
            "ISPs",
            "Telecom companies",
            "Digital media providers"
          ]

        },
        {
          title: "Energy & Utilities",
          icon: "bi bi-lightning-charge",
          iconColor: "#1B6494",
          color: "#FFFBEA",
          image: new URL('@/assets/energy-utility.webp', import.meta.url).href,
          // paragraph: "Oil & gas firms, power providers, and smart grid solution companies."
          paragraph: [
            "Oil & gas firms",
            "Power providers",
            "Smart grid solution companies"
          ]

        }
      ],


      swiper: null as Swiper | null,
      testimonials: [
        { quote: "GRC’s expertise in GDPR gave us the confidence to navigate compliance.", name: "Daniel US", position: "CEO, Star Media" },
        { quote: "Their guidance was clear, concise, and tailored to our needs.", name: "Sophia Lee", position: "CTO, Tech Solutions" },
        { quote: "Great support in handling regulatory frameworks.", name: "Raj Patel", position: "Manager, FinEdge" },
        { quote: "We could expand globally thanks to their compliance strategies.", name: "Emily Wong", position: "Director, Global Trade" },
        { quote: "Truly professional and reliable service.", name: "Carlos Mendez", position: "CEO, BrightFuture" },
        { quote: "Their solutions saved us significant time and effort.", name: "Marchent Dios", position: "CEO, Global Bright" }
      ]
    };
  },

  mounted() {
    this.swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1, slidesPerGroup: 1 },
        768: { slidesPerView: 2, slidesPerGroup: 2 },
        1024: { slidesPerView: 3, slidesPerGroup: 3 },
      },
    });
  },
  beforeUnmount() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
      this.swiper = null;
    }
  },

});
</script>




<style scoped>



.nav-link {
  color: #000000;
  font-size: 15px;
  font-weight: 500;
}

/* Make carousel images responsive */
.carousel-img {
  height: 91vh;
  object-fit: cover;
}

/* Indicators aligned to left */
.custom-indicators {
  justify-content: flex-between;
  margin-left: 8rem;
  /* adjust left spacing */
  margin-bottom: 1.5rem;
  /* space from bottom */
}

.custom-indicators [data-bs-target] {
  width: 35px;
  height: 4px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
}

.custom-indicators .active {
  background-color: #FFFFFF;
  /* blue active indicator */
}

/* Caption text styling */
.carousel-caption {
  bottom: 3rem;
  left: 3rem;
  right: auto;
  text-align: left;
}

.lead {
  color: #FFFFFF99;
  font-size: 16px;
}

.industry-text {
  color: #006CBF;
  font-size: 14px;
  font-weight: 500;
}

.industry-h1 {
  color: #121212;
  font-weight: 500;
}

.industry-subtext {
  color: #12121299;
  font-size: 16px;
  font-weight: 500;
}

/* Light blue gradient background */
.benefits-section {
  background: linear-gradient(to bottom, #ffffff, #e6f4ff);
  padding: 60px 20px;
}

.benefit-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;
  height: 100%;
  /* Ensure full height inside row */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 250px;
  /* Makes them more square */
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.benefit-card h3 {
  color: #000000DE;
  font-weight: 600;
  line-height: 35px;

}


/* Make swiper slides stretch equally */
.swiper-slide .card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* pushes author section to bottom */
  min-height: 250px;
}

.swiper-slide .card p {
  flex-grow: 1; /* quote text will expand and keep spacing */
}

.home-core-right {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-core-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-core-section {
  padding: 50px 0;
  /* background-color: var(--bg-light); */
}

.home-core-benifts-widget {
  width: 100%;
  height: 300px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}

/* main image (normal, unblurred) */
.home-core-benifts-widget .main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* blurred image section only at bottom */
.home-core-benifts-widget .blur-section {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  /* adjust: controls how much of image is blurred */
  background: url("../assets/course-img.png") center/cover no-repeat;
  filter: blur(6px);
  z-index: 1;
}

/* overlay text */
.home-core-benefites-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
  color: white;
  z-index: 2;
  /* text above blur */
}

.home-core-benefites-overlay h5 {
  padding-top: 140px;
  font-size: 28px;
  color: #FFFFFF;
}

.home-core-benefites-overlay p {
  margin: auto;
  /* pushes p to center */
  text-align: center;
  color: #FFFFFF;
  font-size: 14px;

}

.signup-cards {
  height: 200px;
}

.core-benfites-row {
  /* display: flex;
    justify-content: flex-start; */
  flex-wrap: wrap;
}

.core-benfites-row .col-lg-20 {
  /* width: 20%; */
  width: 24%;
}

.core-benfites-row .col-lg-21 {
  /* width: 28%; */
  width: 20%;
}

.grc-section {
  padding: 50px 0;
}

.grc-widget {
  /* background-color: var(--bg-light-blue); */
  padding: 30px;
  border-radius: 20px;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
}

.grc-widget h6 {
  font-size: 16px;
  color: #696969;
}

.grc-widget h3 {
  font-size: 24px;
  font-family: 'graphicWebMedium' !important;
  color: var(--primary-color);
  margin-top: 15px;
}

.grc-widget p {
  font-size: 16px;
  line-height: 25px;
  color: #555555;
  margin-bottom: 10px;
}

.grc-widget h5 {
  font-size: 16px;
  font-family: 'graphicWebSemiBold' !important;
}

.home-core-benifts-widget img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-core-benifts-widget:hover img {
  transform: scale(1.1);
  transition: 0.5s;
}

.home-core-benefites-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.368) 0%, rgba(0, 0, 0, 0.407) 100%);
  width: 100%;
  height: 100%;
  padding: 13px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;

}

.home-core-benefites-overlay h4 {
  color: var(--white);
  /* font-size: 20px; */
  font-size: 30px;
  /* font-family: 'graphicWebMedium' !important; */
  line-height: 30px;
  font-family: var(--font-main);
  font-weight: 600;
}

.home-core-benefites-overlay a {
  color: var(--white);
  font-size: 14px;
  font-weight: 500;
  padding: 6px 15px;
  border: 1px solid var(--white);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-top: 20px;
  /* font-family: 'graphicWebSemiBold' !important; */
  font-family: var(--font-sub);
  text-transform: uppercase;
  transition: 0.5s;
}


.home-core-benefites-overlay a:hover {
  background-color: var(--primary-color);
  color: var(--white);
  border-color: var(--primary-color);
}

.benefits {
  background-color: rgb(3, 49, 109);
  padding-top: 20px;
  padding-bottom: 20px;
}

.benefits-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  /* optional for smoother corners */
}

.benefits-card:hover {
  transform: translateY(-8px);
  /* lifts the card slightly */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  /* deeper shadow on hover */
}



/* faq */

.faq-section {
  background-color: #f7f7f7;
  padding: 50px 0;
}

.faq-container ul {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  gap: 10px;
  margin-top: 20px;
}

.faq-container ul li button {
  font-size: 16px;
  background-color: transparent;
  padding: 7px 25px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--primary-color) !important;
  color: var(--primary-color);
  text-decoration: none;
  padding-bottom: 3px;
  font-weight: 500;
  border-radius: 5px;
  font-family: var(--font-sub);
}

.faq-container ul li button.active {
  background-color: var(--primary-color) !important;
  color: var(--white) !important;
}

.faq-container ul li button:hover {
  background-color: var(--primary-color) !important;
  color: var(--white) !important;
}

.faq-box .accordion-item {
  overflow: hidden;
  border: none;
  margin-bottom: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 40px !important;
}

.faq-box .accordion-button {
  /* font-size: 18px; */
  font-size: 20px;
  box-shadow: none !important;
  color: var(--color-dark);
  line-height: 26px;
}

.faq-box .accordion-button:not(.collapsed) {
  background-color: transparent;
  font-weight: 700 !important;
}

.faq-body p {
  /* font-size: 16px; */
  font-size: 18px;
  color: var(--color-dark);
  margin: 0;
  font-family: var(--font-main);
}

.faq-body ul {
  border: 0;
  width: 100%;
}

.faq-body ul li {
  font-size: 15px;
  line-height: 25px;
  color: var(--black);
  margin-bottom: 10px;
}

.faq-body ul li strong {
  margin-right: 5px;
}



/* signup */
.signup-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-section {
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.form-label {
  font-size: 16px;
  font-weight: 500;
  color: #000000;
}

.form-section .left {
  padding: 40px;
}

.form-section .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.social-btn {
  border: 1px solid #ddd;
  border-radius: 30px;
  padding: 10px;
  width: 100%;
  margin-bottom: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 0.3s;
  background-color: white;
  color: #000000DE;
  font-size: 15px;
}

.social-btn:hover {
  background-color: #f1f1f1;
}

.form-control {
  border-radius: 10px;
  border: none;
  background-color: #F6F6F6;
  padding: 12px;
  font-weight: 500;
  font-size: 14px;
  color: #00000099;
}


.btn-submit {
  border-radius: 30px;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  background-color: #0096d6;
  color: #ffffff;
  text-align: center;
  display: block;
  text-decoration: none;
   border: none !important;              /* remove all borders */
  outline: none !important;
    transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15); /* soft elevation */
}
.btn-submit:hover {
  background-color: #007bb5;
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.btn-submit.disabled {
  background-color: #a0cde1;
  pointer-events: none;
  cursor: not-allowed;
}
.btn-submit:focus,
.btn-submit:active {
  border: none !important;
  outline: none !important;
  background-color: #006c9d;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2) inset;
}

.form-check-input {
  background-color: #EAEAEA;
}





.home-core-benifts-widget {
  max-width: 500px;
  margin: auto;
}




/* Responsiveness */
@media (max-width: 768px) {
  .carousel-img {
    height: 40vh;
  }

  .carousel-caption {
    bottom: 1.5rem;
    left: 1rem;
    right: 1rem;
  }

  .carousel-caption h5 {
    font-size: 1.25rem;
  }

  .carousel-caption p {
    font-size: 0.9rem;
  }

  .social-btn {
    font-size: 10px;
    width: 100%;
    height: 25%;

  }
}

main {
  font-family: "Segoe UI", Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #1a1a1a; /* dark gray, similar to the text */
  line-height: 1.6;
}
.carousal-subtext {
  font-weight: 400;
  color: #FFFFFF99;
}

/* Base button styling */
.card-btn {
  background-color: #0096D6;
  border: 1px solid #0096D6;
  color: white;
  border-radius: 20px;
  margin-bottom: 60px;
}

/* Flip Card */
.flip-card {
  background-color: transparent;
  height: 280px;
  perspective: 1000px;
  /* enables 3D effect */
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  /* keeps both faces aligned */
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  backface-visibility: hidden;

  /* hides back when not visible */
}

.flip-card-front {
  z-index: 2;
  transform: rotateY(0deg);
}

/* BACK is rotated */
.flip-card-back {
  transform: rotateY(180deg);
  z-index: 1;
  /* filter: blur(1px) brightness(0.8);  */
  opacity: 0.85;
}

/* Dark overlay */
.flip-card-back .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* adjust opacity */
  z-index: 1;
}

/* Content sits above overlay */
/* .flip-card-back .content {
  position: relative;
  z-index: 2;
  color: white;
} */


.flip-card-back .content {
  position: relative;
  z-index: 2;
  color: #fff;
  /* make text white */
  font-weight: 600;
  text-align: center;

  /* Highlight / Glow */
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.8),
    0 0 12px rgba(255, 255, 255, 0.6);
}

.flip-card-back .content i {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #fff;
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.6));
}

.flip-card-back .content p {
  font-size: 1rem;
  line-height: 1.4;
}


.flip-card-back ul {
  list-style: disc;
  /* bullet style */
  padding-left: 1.2rem;
  /* indent */
  margin: 0;
}

.flip-card-back li {
  color: white;
  /* keep text visible */
  font-weight: 500;
  margin-bottom: 4px;
}


/* Overlay text on front image */
.industry-overlay-text {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);

  font-weight: 600;
  text-align: center;
  padding: 0 10px;
}

/* Carousel Section */
/* Custom caption positioning */
.carousel-caption.custom-caption {
  position: absolute;
  top: 25%;
  left: 10%;
  right: 10%;
  text-align: left;
  transform: translateY(-10%);
  max-width: 700px;
}

/* Heading and paragraph spacing */
.carousel-caption.custom-caption h2,
.carousel-caption.custom-caption h5 {
  margin-bottom: 10px;
}

/* Paragraph styling */
.carousel-caption.custom-caption p {
  display: block;
  white-space: normal;
  /* ensures normal wrapping */
  word-wrap: break-word;
  /* breaks long words */
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 0.5rem;
  font-weight: 500;
}

/* ✅ Responsive Fix: Slightly lower captions on smaller screens */
@media (max-width: 768px) {
  .carousel-caption.custom-caption {
    max-width: 90%;
    top: 30%;
    left: 5%;
    right: 5%;
  }

  .carousel-caption.custom-caption h2,
  .carousel-caption.custom-caption h5 {
    font-size: 1.5rem;
  }

  .carousel-caption.custom-caption p {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .carousel-caption.custom-caption {
    top: 35%;
    text-align: center;
    max-width: 95%;
  }

  .carousel-caption.custom-caption p {
    font-size: 0.95rem;
  }
}


</style>
