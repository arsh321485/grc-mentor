<template>
    <main>
        <div class="container-fluid row">
            <div class="col-2 col-md-2">
                <Stepper :currentStep="5" />
            </div>

            <div class="col-10 col-md-10 setup-container">
                <!-- Heading -->
                <h2 class="setup-title  mt-5 pt-4">Welcome to GRC Mentor!</h2>
                <p class="setup-subtext pt-2">Please wait while we set things up for you...</p>

                <!-- Reporting Manager -->
                <h5 class="reporting-text pt-5">I’m your reporting manager. Lets setup your course</h5>

                <!-- Time Selection -->
                <p class="time-label pt-5">Pick your reporting time (in IST):</p>
                <div class="time-buttons">
                    <button class="time-btn active px-5">9 AM - 5 PM</button>
                    <button class="time-btn px-5">10 AM - 6 PM</button>
                    <button class="time-btn px-5">8 AM - 4 PM</button>
                </div>

                <!-- Start Learning Button -->
               <div class="start-btn-container">
  <router-link 
      to="/grc101" 
      class="start-btn"
  >
      Start learning
  </router-link>
</div>

            </div>

        </div>
    </main>
</template>

<script lang="ts">
import Stepper from '@/components/Stepper.vue';

export default {
    name: "WelcomementorView",
    components: { Stepper }
}
</script>


<style>
/* Container */
.setup-container {
    /* padding: 40px; */
    background-color: #fff;
    border-radius: 12px;
}

/* Heading */
.setup-title {
    font-size: 28px;
    font-weight: 500;
    color: #000000;
    /* margin-bottom: 8px; */
}

/* Subtext */
.setup-subtext {
    font-size: 14px;
    color: #00000099;
    /* margin-bottom: 20px; */
}

/* Reporting Manager Text */
.reporting-text {
    font-size: 18px;
    color: #000000;
    font-weight: 600;
    /* margin-bottom: 25px; */
}

/* Time Label */
.time-label {
    font-size: 18px;
    font-weight: 600;
    /* margin-bottom: 10px; */
    color: #000000;
}

/* Time Buttons */
.time-buttons {
    display: flex;
    gap: 15px;
    /* margin-bottom: 30px; */
}

.time-btn {
    padding: 10px 18px;
    font-size: 15px;
    font-weight: 500;
    color: #000000DE;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.time-btn:hover {
    border-color: #5ab9f0;
    color: #5ab9f0;
}

.time-btn.active {
    /* background-color: #eaf6ff; */
    border-color: #007BAF;
    color: #007BAF;
    font-size: 15px;
    font-weight: 600;
}

/* Start Button */
.start-btn-container {
    margin-top: 60px;
    /* Push button to bottom */
    display: flex;
    justify-content: flex-start;
}

.start-btn {
    position: fixed;
    /* Stick to the viewport */
    bottom: 20px;
    /* Distance from bottom */
    left: 25%;
    /* Move to center horizontally */
    transform: translateX(-50%);
    /* Adjust for perfect center */
    padding: 12px 40px;
    background-color: #007BAF;
    color: #FFFFFF;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: background 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    text-decoration: none;
    /* Always stays on top */
}

.start-btn:hover {
    background-color: #005fa3;
}

/* Responsive */
@media (max-width: 768px) {
    .setup-container {
        padding: 20px;
    }

    .time-buttons {
        flex-direction: column;
        gap: 10px;
    }

    .start-btn {
        width: 100%;
        text-align: center;
    }
}
</style>