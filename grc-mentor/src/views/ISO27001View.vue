
<template>
    <main>
         <div class="container-fluid row">
             <div class="col-2 col-md-2">
                <Sidebargrc2 />
            </div>
              <div class="col-10 col-md-10">
                  <div class="overview-page p-5">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-start">
            <div>
                <h1 class="fw-bold">ISO 27001</h1>
                <p class="text-muted skill-desc">
                    Skill description Skill description Skill description Skill description Skill description Skill
                    description Skill description
                </p>
            </div>
            <div class="calendar-container">
                <!-- Calendar view button -->
                <div class="d-flex align-items-center " role="button" @click="openCalendar">
                    <i class="bi bi-calendar3 me-2 "></i>
                    <span class="fw-bold fs-5">Calendar view</span>
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
        </div>

        <!-- Project Details -->
        <div class="row text-center mt-4 mb-5">
            <div class="col-md-3">
                <p class="text-muted mb-1">Duration of the project</p>
                <h6 class="fw-semibold">3 weeks</h6>
            </div>
            <div class="col-md-3">
                <p class="text-muted mb-1">Industry worked with</p>
                <h6 class="fw-semibold">Media</h6>
            </div>
            <div class="col-md-3">
                <p class="text-muted mb-1">Skills learned</p>

            </div>
            <div class="col-md-3">
                <p class="text-muted mb-1">Management Interactions</p>

            </div>
        </div>

        <!-- Tasks Completed Section -->
        <h5 class="fw-semibold mb-3">Tasks completed</h5>
        <div class="row">
            <div v-for="(task, idx) in tasks" :key="idx" class="col-12 col-sm-6 col-lg-3 mb-4">
                <div class="card task-card h-100">
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
                                        <img src="../assets/avtar.png" class="rounded-circle" alt="avatar" />
                                    </div>
                                    <div v-if="task.tag" class="small text-secondary">
                                        • {{ task.tag }}
                                    </div>
                                </div>
                            </div>
                            <i class="bi bi-arrow-right text-primary fs-5"></i>
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


<script>
import Sidebargrc2 from '@/components/Sidebargrc2.vue';

export default {
    name: "ISO-27001View",
    components:{Sidebargrc2},
    data() {
        return {

            tasks: [
                {
                    title: "Task to be done",
                    deadline: "23rd July, 2025",
                    tag: "ISO 27001",
                },
                {
                    title: "Task to be done",
                    deadline: "23rd July, 2025",
                    tag: "ISO 27001",
                },
                {
                    title: "Task to be done",
                    deadline: "23rd July, 2025",
                    tag: "ISO 27001",
                },
                {
                    title: "Task to be done",
                    deadline: "23rd July, 2025",
                    tag: "ISO 27001",
                },
                {
                    title: "Task to be done",
                    deadline: "23rd July, 2025",
                    tag: "ISO 27001",
                }, {
                    title: "Task to be done",
                    deadline: "23rd July, 2025",
                    tag: "ISO 27001",
                }, {
                    title: "Task to be done",
                    deadline: "23rd July, 2025",
                    tag: "ISO 27001",
                }, {
                    title: "Task to be done",
                    deadline: "23rd July, 2025",
                    tag: "ISO 27001",
                },
            ],
        };
    },
    methods: {
        openCalendar() {
            if (!this.calendarModal) {
                this.calendarModal = new Modal(document.getElementById("calendarModal"));
            }
            this.calendarModal.show();
        },
    },

};
</script>

<style scoped>
.overview-page {
    font-family: "Inter", sans-serif;
}

.skill-desc {
    max-width: 700px;
    line-height: 1.6;
}

.calendar-container {
    cursor: pointer;
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 15px;
    color: #0082B9;
    height: 24px;
    line-height: 24px;
    letter-spacing: -0.7%;

}

.calendar-link {
    text-decoration: none;
    font-size: 14px;
}

.task-card {
    border: 1px solid #eee;
    background: #fff;
    transition: all 0.2s ease-in-out;
}

.task-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.arrow-link {
    font-size: 18px;
    text-decoration: none;
}

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