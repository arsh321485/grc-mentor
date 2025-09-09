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
                <p class="carousal-subtext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos similique culpa, quae rerum omnis iure ratione vitae dolorem provident voluptatibus.</p>
              </div>
            </div>

          
            <div class="carousel-item">
              <img src="../assets/slider-img2.jpg" class="d-block w-100 carousel-img" alt="Slide 1">
              <div class="carousel-caption custom-caption">
                <h2 class="fw-semibold display-6">99.99% real</h2>
                <p class="carousal-subtext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos similique culpa, quae rerum omnis iure ratione vitae dolorem provident voluptatibus.</p>
              </div>
            </div>

           

            <div class="carousel-item">
              <img src="../assets/slider-img2.jpg" class="d-block w-100 carousel-img" alt="Slide 1">
              <div class="carousel-caption custom-caption">
                <h2 class="fw-semibold display-6">Life time mentorship for all levels</h2>
                <p class="carousal-subtext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos similique culpa, quae rerum omnis iure ratione vitae dolorem provident voluptatibus.</p>
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
            <div class="flip-card-front">
              <img :src="item.image" class="img-fluid rounded-3 w-100 h-100" :alt="item.title" />
            </div>

            <!-- BACK (COLOR + ICON + TEXT) -->
            <div class="flip-card-back d-flex flex-column justify-content-center align-items-center p-4 rounded-3"
              :style="{ backgroundColor: item.color }">
              <i :class="item.icon + ' fs-1'" :style="{ color: item.iconColor }"></i>
              <h5 class="mt-3 fw-bold text-center">{{ item.title }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- Mentornship benefit section -->

    <section class="benefits-section text-center">
      <small class="industry-text">Industries</small>
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
          image: "https://via.placeholder.com/400x250?text=Tech+IT"
        },
        {
          title: "Banking & Financial Services",
          icon: "bi bi-bank",
          iconColor: "#3460A7",
          color: "#EAF2FF",
          image: "https://via.placeholder.com/400x250?text=Banking"
        },
        {
          title: "Healthcare & Life Sciences",
          icon: "bi bi-hospital",
          iconColor: "#892318",
          color: "#FFECEA",
          image: "https://via.placeholder.com/400x250?text=Healthcare"
        },
        {
          title: "Business Process Outsourcing",
          icon: "bi bi-people",
          iconColor: "#60187D",
          color: "#F9EAFF",
          image: "https://via.placeholder.com/400x250?text=BPO"
        },
        {
          title: "Legal & Consulting Services",
          icon: "bi bi-person-workspace",
          iconColor: "#25822E",
          color: "#EAFFEC",
          image: "https://via.placeholder.com/400x250?text=Legal"
        },
        {
          title: "E-commerce & Retail",
          icon: "bi bi-cart",
          iconColor: "#967E17",
          color: "#FFFBEA",
          image: "https://via.placeholder.com/400x250?text=E-commerce"
        },
        {
          title: "Manufacturing & Industrial",
          icon: "bi bi-gear-wide-connected",
          iconColor: "#C15D16",
          color: "#FFE7FA",
          image: "https://via.placeholder.com/400x250?text=Manufacturing"
        },
        {
          title: "Government & Public Sector",
          icon: "bi bi-building",
          iconColor: "#1F7595",
          color: "#FFEAEA",
          image: "https://via.placeholder.com/400x250?text=Government"
        },
        {
          title: "Transportation & Logistics",
          icon: "bi bi-truck",
          iconColor: "#800B5B",
          color: "#EAFFFE",
          image: "https://via.placeholder.com/400x250?text=Transport"
        },
        {
          title: "Education & Research",
          icon: "bi bi-mortarboard",
          iconColor: "#0A741F",
          color: "#FFECEA",
          image: "https://via.placeholder.com/400x250?text=Education"
        },
        {
          title: "Media & Telecommunications",
          icon: "bi bi-broadcast",
          iconColor: "#A34545",
          color: "#F9EAFF",
          image: "https://via.placeholder.com/400x250?text=Media"
        },
        {
          title: "Energy & Utilities",
          icon: "bi bi-lightning-charge",
          iconColor: "#1B6494",
          color: "#FFFBEA",
          image: "https://via.placeholder.com/400x250?text=Energy"
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

.carousal-subtext{
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


.flip-card {
  background-color: transparent;
  height: 280px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

.flip-card-back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}


/* carousal */
/* Custom caption positioning */
.carousel-caption.custom-caption {
  position: absolute;
  top: 25%;
  /* Push caption to 25% from top */
  left: 10%;
  right: 10%;
  text-align: left;
  /* Align text to left (can change to center if needed) */
  transform: translateY(-10%);
   max-width: 700px; 
}

/* Adjust heading and paragraph spacing */
.carousel-caption.custom-caption h2,
.carousel-caption.custom-caption h5 {
  margin-bottom: 10px;
}
/* Paragraph styling to wrap text automatically */
.carousel-caption.custom-caption p {
  display: block;
  white-space: normal; /* ✅ ensures normal wrapping */
  word-wrap: break-word; /* ✅ breaks long words if needed */
  font-size: 1.1rem;
  line-height: 1.6; /* ✅ nice spacing between lines */
  margin-top: 0.5rem;
  font-weight: 500
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
    /* Center text on very small screens */
  }
    .carousel-caption.custom-caption p {
    font-size: 0.95rem;
  }
}
</style>