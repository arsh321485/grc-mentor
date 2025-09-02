<template>
  <main>
    <Header />

    <!-- Logout button (top-right corner) -->
    <div class="container d-flex justify-content-end mt-3">
      <button class="btn btn-outline-danger btn-sm" @click="logout">Logout</button>
    </div>

    <!-- ===== Your original Home UI starts here ===== -->

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

    <!-- ===== Rest of your Industries, Mentorship, Testimonials, Courses, FAQ code stays exactly as you had it ===== -->

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Swiper, { SwiperOptions } from 'swiper/bundle';
import 'swiper/css/bundle';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeView',
  components: { Header },
  data() {
    return {
      swiper: null as Swiper | null, // ✅ Declare swiper here
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
    const options: SwiperOptions = {
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
    };

    this.swiper = new Swiper(".mySwiper", options); // ✅ Type-safe assignment
  },
  beforeUnmount() {
    if (this.swiper) this.swiper.destroy(true, true);
  },
  setup() {
    const router = useRouter();

    function logout() {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      router.push({ name: 'auth' });
    }

    return { logout };
  }
});
</script>
