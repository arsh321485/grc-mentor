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
              <div class="carousel-caption text-start">
                <h3 class="fw-semibold display-6">Experience counts</h3>
                <p class="lead">Some representative placeholder content for the first slide.</p>
              </div>
            </div>

            <div class="carousel-item">
              <img src="../assets/slider-img2.jpg" class="d-block w-100 carousel-img" alt="Slide 2">
              <div class="carousel-caption text-start">
                <h5 class="fw-semibold display-6">Experience counts</h5>
                <p class="lead">Some representative placeholder content for the second slide.</p>
              </div>
            </div>

            <div class="carousel-item">
              <img src="../assets/slider-img2.jpg" class="d-block w-100 carousel-img" alt="Slide 3">
              <div class="carousel-caption text-start">
                <h5 class="fw-semibold display-6">Experience counts</h5>
                <p class="lead">Some representative placeholder content for the third slide.</p>
              </div>
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
    </section>


    <!-- industries section -->

    <section class="container my-5">
      <div class="text-center mb-5">
        <p class="industry-text">Industries</p>
        <h1 class="industry-h1">Industries you’ll work with:</h1>
        <p class="industry-subtext">Industries you’ll work with:</p>
      </div>

      <div class="row g-4">
        <div class="col-lg-4 col-md-6 col-12">
          <div class="p-4 rounded-3 shadow-sm text-center" style="background-color: #EAFFFE;">
            <i class="bi bi-gear-fill fs-1 " style="color: #3CACA7;"></i>
            <h5 class="mt-3 fw-bold">Technology & IT Services</h5>
            <p class="text-muted small">Technology & IT Services</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="p-4 rounded-3 shadow-sm text-center" style="background-color: #EAF2FF;">
            <i class="bi bi-gear-fill fs-1" style="color: #3460A7;"></i>
            <h5 class="mt-3 fw-bold">Banking & Financial Services</h5>
            <p class="text-muted small">Technology & IT Services</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="p-4 rounded-3 shadow-sm text-center" style="background-color: #FFECEA;">
            <i class="bi bi-gear-fill fs-1" style="color: #892318;"></i>
            <h5 class="mt-3 fw-bold">Healthcare & Life Sciences</h5>
            <p class="text-muted small">Technology & IT Services</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="p-4  rounded-3 shadow-sm text-center" style="background-color: #F9EAFF;">
            <i class="bi bi-gear-fill fs-1" style="color: #60187D;"></i>
            <h5 class="mt-3 fw-bold">Business Process Outsourcing</h5>
            <p class="text-muted small">Technology & IT Services</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="p-4 rounded-3 shadow-sm text-center" style="background-color: #EAFFEC;">
            <i class="bi bi-gear-fill fs-1" style="color: #25822E;"></i>
            <h5 class="mt-3 fw-bold">Legal & Consulting Services</h5>
            <p class="text-muted small">Technology & IT Services</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="p-4 rounded-3 shadow-sm text-center" style="background-color: #FFFBEA;">
            <i class="bi bi-gear-fill fs-1" style="color: #967E17;"></i>
            <h5 class="mt-3 fw-bold">E-commerce & Retail</h5>
            <p class="text-muted small">Technology & IT Services</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="p-4 rounded-3 shadow-sm text-center" style="background-color: #FFE7FA;">
            <i class="bi bi-gear-fill fs-1" style="color: #60187D;"></i>
            <h5 class="mt-3 fw-bold">Education & Research</h5>
            <p class="text-muted small">Technology & IT Services</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="p-4 rounded-3 shadow-sm text-center" style=" background-color: #FFEAEA;">
            <i class="bi bi-gear-fill fs-1" style="color: #A34545;"></i>
            <h5 class="mt-3 fw-bold">Media & Telecommunications</h5>
            <p class="text-muted small">Technology & IT Services</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="p-4 rounded-3 shadow-sm text-center" style="background-color: #EAFFFE;">
            <i class="bi bi-gear-fill fs-1" style="color: #3CACA7;"></i>
            <h5 class="mt-3 fw-bold">Energy & Utilities</h5>
            <p class="text-muted small">Energy & Utilities</p>
          </div>
        </div>
        <!-- Repeat the same col-lg-4 col-md-6 col-12 structure for remaining cards -->
      </div>
    </section>


    <!-- Mentornship benefit section -->

    <section class="benefits-section text-center">
      <small class="industry-text">Industries</small>
      <h1 class="industry-h1 mt-2">Mentorship benefits</h1>
      <p class="industry-subtext">Mentorship benefits</p>

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
      <h5 class="text-center industry-text">Testimonials</h5>
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

    <div class="home-core-section container py-5">

      <h5 class="text-center industry-text">Our courses</h5>
      <h1 class="text-center industry-h1">Our courses</h1>
      <p class="industry-subtext text-center"> Our courses</p>
      <div class="container-fluid fluid-padding">
        <div class="row justify-content-center">
          <div class="col-lg-8">

          </div>
        </div>

        <div class="row mt-3 core-benfites-row">
          <div class="col-lg-4 col-md-6 mb-4 ">


            <div class="home-core-benifts-widget">
              <img class="main-img" src="../assets/course-img.png" alt="">

              <!-- blurred image only behind text -->
              <div class="blur-section"></div>

              <div class="home-core-benefites-overlay">
                <h5 class="text-white text-center">GRC 101</h5>
                <p class="text-white text-center pt-2 px-4 py-4">
                  GRC Analyst (1–2 years): Maps control frameworks (e.g. NIST, ISO 27001) to business processes,
                  conducts risk and compliance assessments, and helps prepare audit evidence.
                </p>
              </div>
            </div>
          </div>


          <div class="col-lg-4 col-md-6 mb-4">

            <div class="home-core-benifts-widget">
              <img class="main-img" src="../assets/course-img.png" alt="">

              <!-- blurred image only behind text -->
              <div class="blur-section"></div>

              <div class="home-core-benefites-overlay">
                <h5 class=" text-center">GRC 301</h5>
                <p class="text-white text-center pt-2 px-4 py-4">
                  GRC Analyst (1–2 years): Maps control frameworks (e.g. NIST, ISO 27001) to business processes,
                  conducts risk and compliance assessments, and helps prepare audit evidence.
                </p>
              </div>
            </div>

          </div>
          <div class="col-lg-4 col-md-6 mb-4">

            <div class="home-core-benifts-widget">
              <img class="main-img" src="../assets/course-img.png" alt="">

              <!-- blurred image only behind text -->
              <div class="blur-section"></div>

              <div class="home-core-benefites-overlay">
                <h5 class="text-white text-center">GRC 501</h5>
                <p class="text-white text-center pt-2  px-4 py-4">
                  GRC Analyst (1–2 years): Maps control frameworks (e.g. NIST, ISO 27001) to business processes,
                  conducts risk and compliance assessments, and helps prepare audit evidence.
                </p>
              </div>
            </div>

          </div>
          <div class="col-lg-4 col-md-6 mb-4">

            <div class="home-core-benifts-widget">
              <img class="main-img" src="../assets/course-img.png" alt="">

              <!-- blurred image only behind text -->
              <div class="blur-section"></div>

              <div class="home-core-benefites-overlay">
                <h5 class="text-white text-center">GRC 701</h5>
                <p class="text-white text-center pt-2  px-4 py-4">
                  GRC Analyst (1–2 years): Maps control frameworks (e.g. NIST, ISO 27001) to business processes,
                  conducts risk and compliance assessments, and helps prepare audit evidence.
                </p>
              </div>
            </div>

          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="home-core-benifts-widget">
              <img class="main-img" src="../assets/course-img.png" alt="">

              <!-- blurred image only behind text -->
              <div class="blur-section"></div>

              <div class="home-core-benefites-overlay">
                <h5 class="text-white text-center">GRC 901</h5>
                <p class="text-white text-center pt-2 px-4 py-4">
                  GRC Analyst (1–2 years): Maps control frameworks (e.g. NIST, ISO 27001) to business processes,
                  conducts risk and compliance assessments, and helps prepare audit evidence.
                </p>
              </div>
            </div>


          </div>
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


  </main>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default defineComponent({
  name: "HomeView",
  components: { Header },
  data() {
    return {
      swiper: null as Swiper | null, // ✅ declare swiper here
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

