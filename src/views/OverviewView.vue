<template>
    <main>
         <div class="container-fluid row">
 <div class="col-2 col-md-2">
                <Sidebarprofile />
            </div>
            <div class="col-10 col-md-10">
 <div class="container my-5">
        <!-- Title -->
        <h3 class="fw-bold mb-3">Overview</h3>

        <!-- Current Mentorship -->
        <p class="text-muted mb-1">Current mentorship</p>
        <h5 class="fw-semibold mb-5">GRC 301</h5>

        <div class="overviewbox">
            <!-- How it works -->
            <p class="text-muted mb-5">How GRC Mentor works</p>

            <!-- Steps Row -->
            <div class="d-flex justify-content-between align-items-center flex-wrap mt-5 position-relative">
                <div v-for="(step, idx) in steps" :key="idx" class="step text-center flex-fill">
                    <!-- Circle number -->
                    <div class="circle mx-auto mb-2">{{ step.num }}</div>
                    <!-- Title -->
                    <h6 class="fw-semibold">{{ step.title }}</h6>
                    <!-- Description -->
                    <p class="text-muted small mb-0">{{ step.desc }}</p>
                </div>
            </div>
        </div>
    </div>
            </div>            
         </div>
    </main>
</template>


<script lang="ts">
import Sidebarprofile from '@/components/Sidebarprofile.vue';

export default {
    name: "OverviewView",
    components: {Sidebarprofile},
    data() {
        return {
            steps: [
                { num: 1, title: "Step 1", desc: "Step 1 description" },
                { num: 2, title: "Step 2", desc: "Step 2 description" },
                { num: 3, title: "Step 3", desc: "Step 3 description" },
            ],
        };
    },
};
</script>

<style scoped>
.circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #007bff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: relative;
    z-index: 1;
}

.overviewbox {
    margin-top: 20rem;
}

.step {
    position: relative;
    flex: 1;
}

/* Dotted line between steps */
.step::before,
.step::after {
    content: "";
    position: absolute;
    top: 20px;
    /* center of circle */
    border-top: 2px dotted #007bff;
    width: 50%;
    z-index: 0;
}

.step::before {
    left: -50%;
}

.step::after {
    right: -50%;
}

/* Remove extra line before first and after last */
.step:first-child::before {
    display: none;
}

.step:last-child::after {
    display: none;
}

/* Responsive */
@media (max-width: 768px) {
    .d-flex {
        flex-direction: column !important;
    }

    .step::before,
    .step::after {
        display: none;
        /* No lines in mobile view */
    }
}
</style>