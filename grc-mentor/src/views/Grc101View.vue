<template>
    <main>
        <div class="container-fluid row">
            <div class="col-2 col-md-2">
                <Sidebar />
            </div>

            <div class="col-10 col-md-10">

                <!-- calendar -->
                <div class="calendar-container d-flex justify-content-end">
                    <!-- Calendar view button -->
                    <div class="d-flex align-items-center pt-3" role="button" @click="openCalendar">
                        <i class="bi bi-calendar3 me-2 fs-4"></i>
                        <span class="fs-5">Calendar view</span>
                    </div>

                    <!-- Bootstrap Modal -->
                    <div class="modal fade" id="calendarModal" tabindex="-1" aria-labelledby="calendarModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="calendarModalLabel">Calendar</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <!-- Calendar Component -->
                                    <input type="date" class="form-control" v-model="selectedDate" />
                                    <p class="mt-3">
                                        <strong>Selected date:</strong> {{ selectedDate }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between align-items-start mb-5">
                    <div class="ps-5">
                        <h1 class="custom-heading mb-2 pt-2">GRC 101</h1>

                        <p class="custom-text">
                            You will be working with Media, Legal, Education and E-commerce industries.
                        </p>
                    </div>


                </div>

                <!-- Industry Columns -->
                <div class="container ps-5">
                    <div class="row gx-5 industry-row">
                        <div v-for="(industry, index) in industries" :key="index"
                            class="col-12 col-md-6 col-lg-3 industry-col"
                            :class="{ 'with-divider': index !== industries.length - 1 }">
                            <h6 class="fw-semibold mb-3 industry-title">
                                {{ industry.name }}
                                <span class="text-muted small">{{ industry.tasks.length }} tasks</span>
                            </h6>

                            <!-- Task cards -->
                            <div v-for="(task, idx) in industry.tasks" :key="idx" class="card task-card mb-4">
                                <div class="card-body p-3">
                                    <div class="d-flex justify-content-between align-items-start mb-2">
                                        <div>
                                            <h6 class="fw-semibold mb-1">{{ task.title }}</h6>
                                            <p class="text-muted small mb-1">
                                                Deadline: {{ task.deadline }}
                                            </p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <!-- Avatar -->
                                                <div class="pe-0">
                                                    <img src="../assets/avtar.png" class="rounded-circle"
                                                        alt="avatar" />
                                                </div>
                                                <div v-if="task.tag" class="small text-secondary">
                                                    • {{ task.tag }}
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <i class="bi bi-arrow-right fs-5 icon-grc"></i> -->
                                        <router-link to="/policyreview2" class="text-decoration-none">
                                            <i class="bi bi-arrow-right fs-5 icon-grc"></i>
                                        </router-link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import Datepicker from "vue3-datepicker";

export default defineComponent({
    name: "Grc101View",
    components: {
        Sidebar,
        Datepicker,
    },
    data() {
        return {
            selectedDate: null as Date | null,
            calendarModal: null as Modal | null,
            showCalendar: false,
            industries: [
                {
                    name: "Media",
                    tasks: [
                        { title: "Task to be done", deadline: "23rd July, 2025", tag: "ISO 27001" },
                        { title: "Task to be done", deadline: "23rd July, 2025", tag: "ISO 27001" },
                        { title: "Task to be done", deadline: "23rd July, 2025" },
                        { title: "Task to be done", deadline: "23rd July, 2025" },
                        { title: "Task to be done", deadline: "23rd July, 2025" },
                    ],
                },
                {
                    name: "Legal",
                    tasks: [
                        { title: "Task to be done", deadline: "23rd July, 2025", tag: "ISO 27001" },
                        { title: "Task to be done", deadline: "23rd July, 2025" },
                        { title: "Task to be done", deadline: "23rd July, 2025" },
                        { title: "Task to be done", deadline: "23rd July, 2025" },
                        { title: "Task to be done", deadline: "23rd July, 2025" },
                    ],
                },
                {
                    name: "Education",
                    tasks: [
                        { title: "Task to be done", deadline: "23rd July, 2025" },
                    ],
                },
                {
                    name: "E-commerce",
                    tasks: [
                        { title: "Task to be done", deadline: "23rd July, 2025" },
                    ],
                },
            ],
        };
    },
    methods: {
        openCalendar() {
            const calendarElement = document.getElementById("calendarModal");
            if (!calendarElement) return;

            if (!this.calendarModal) {
                this.calendarModal = new Modal(calendarElement);
            }
            this.calendarModal.show();
        },
    },
});
</script>



<style scoped>
.custom-heading {
    font-family: Inter;
    font-weight: 600;
    font-style: semi bold;
    font-size: 46px;
    line-height: 64px;
    letter-spacing: -3%;
    color: #000000DE;
}

.custom-text {
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    color: #000000DE;
    line-height: 24px;
    letter-spacing: -1%;

}

.custom-text1 {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16.5px;
    line-height: 28px;
    letter-spacing: -0.008em;
    color: #000000DE;
}

.calendar-container {
    cursor: pointer;
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 15px;
    color: #0082B9;
    line-height: 24px;
    letter-spacing: -0.7%;

}

.icon-grc {
    color: #0096D6;
}



/* Industry row borders */
.industry-row {
    border-top: 2px solid #f2f2f2;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.industry-col.with-divider {
    border-right: 2px solid #f2f2f2;
}

/* Industry title spacing */
.industry-title {
    font-size: 1rem;
    margin-bottom: 1rem;
}

/* Task card styling */
.task-card {
    border-radius: 12px;
    border: 1px solid #eaeaea;
    box-shadow: none;
    transition: all 0.2s ease-in-out;
}

.task-card:hover {
    box-shadow: 0 4px 14px rgba(61, 95, 245, 0.05);
}

.task-card h6 {
    font-size: 0.95rem;
}

.task-card p {
    font-size: 0.8rem;
}

/* Avatar size */
.task-card img {
    width: 28px;
    height: 28px;
}
</style>