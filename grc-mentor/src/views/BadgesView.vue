<template>
  <main>
    <div class="container-fluid row">
      <!-- Sidebar -->
      <div class="col-12 col-md-2">
        <Sidebargrc2 />
      </div>

      <!-- Badges Section -->
      <div class="col-12 col-md-10">
        <!-- Header -->
        <div class="d-flex justify-content-end align-items-center pt-4 pe-3">
          <button class="btn btn-link calendar-btn" @click="openCalendar">
            <i class="fas fa-calendar-alt me-2"></i> Calendar view
          </button>
        </div>

        <!-- Title -->
        <div class="ps-3 ps-md-5 mb-4">
          <p class="fw-semibold badges-text mb-0">Badges</p>
          <p class="badges-subtext mb-0">A snapshot of your career graph</p>
        </div>

        <!-- Badges Grid -->
        <div class="row px-3 px-md-5">
          <div
            v-for="(badge, index) in badges"
            :key="index"
            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex flex-column align-items-center"
          >
            <img :src="badge.img" alt="" class="badges-img mb-2" />
            <p class="grid-text mb-1">{{ badge.title }}</p>
            <p class="grid-subtext">{{ badge.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebargrc2 from "@/components/Sidebargrc2.vue";
import ExpertBadge from "@/assets/expert-mentee.png";

export default {
  name: "BadgesView",
  components: { Sidebargrc2 },
  data() {
    return {
      badges: [
        { img: ExpertBadge, title: "Expert mentee", date: "Earned on 11th July, 2025" },
        { img: ExpertBadge, title: "Expert mentee", date: "Earned on 11th July, 2025" },
      ],
    };
  },
  methods: {
    openCalendar() {
      alert("Calendar view clicked!");
    },
  },
};
</script>

<style scoped>
/* Text Styles */
.grid-subtext {
  font-size: 13px;
  color: #00000099;
  text-align: center;
}

.grid-text {
  font-size: 19px;
  color: #000000DE;
  font-weight: 600;
  text-align: center;
}

.badges-text {
  font-size: 38px;
}

.badges-subtext {
  font-size: 14px;
  color: #00000099;
}

/* Calendar Button */
.calendar-btn {
  font-weight: 500;
  font-size: 15px;
  color: #0082b9;
  text-decoration: none;
}

.calendar-btn:hover {
  text-decoration: none;
}

/* Badge Image */
.badges-img {
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 10px;
}

/* Responsive Text & Layout Adjustments */
@media (max-width: 1200px) {
  .badges-text {
    font-size: 32px;
    padding-left: 90px;
  }
  .grid-text {
    font-size: 17px;
    padding-left: 90px;
  }
  .badges-img {
    max-width: 220px;
    padding-left: 90px;
  }
  .grid-subtext {
    padding-left: 90px;
  }
  .badges-subtext {
    padding-left: 90px;
  }
}

@media (max-width: 992px) {
  .badges-text {
    font-size: 28px;
    padding-left: 110px;
  }
  .grid-text {
    font-size: 16px;
    padding-left: 110px;
  }
  .badges-img {
    max-width: 200px;
    padding-left: 110px;
  }
  .grid-subtext {
    padding-left: 110px;
  }
  .badges-subtext {
    padding-left: 110px;
  }
}

@media (max-width: 768px) {
  .badges-text {
    font-size: 24px;
    padding-left: 40px;
  }
  .grid-text {
    font-size: 15px;
    padding-left: 40px;
  }
  .badges-img {
    max-width: 180px;
    padding-left: 40px;
  }
  .grid-subtext {
    padding-left: 40px;
  }
  .badges-subtext {
    padding-left: 40px;
  }
}

@media (max-width: 576px) {
  .badges-text {
    font-size: 22px;
    padding-left: 20px;
  }
  .grid-text {
    font-size: 14px;
    padding-left: 20px;
  }
  .badges-img {
    max-width: 150px;
    padding-left: 20px;
  }
  .grid-subtext {
    padding-left: 20px;
  }
  .badges-subtext {
    padding-left: 20px;
  }
}


</style>
