<template>
    <main>
        <div class="container-fluid row">
            <div class="col-2 col-md-2">
                <Sidebarprofile />
            </div>
            <div class="col-10 col-md-10">
                <div class="container-fluid">
                    <div class="row align-items-center mt-3">

                        <!-- Profile -->
                        <div class="col-4 d-flex align-items-center">
                            <img src="../assets/avtar-profile-img.jpg" class="rounded-circle profile-img" alt="avatar" />
                            <div class="ms-3">
                                <h6 class="fw-bold mb-0">Amit Sharma</h6>
                                <small class="text-muted">Product Designer</small>
                            </div>
                        </div>

                        <!-- Badges -->
                        <div class="col-4 d-flex align-items-center">
                            <div class="text-center me-4">
                                <img src="../assets/badges-img.png" alt="badges" class="badges-img" />
                                <p class="text-muted small mb-0">50+ tasks completed</p>
                            </div>
                            <div class="text-center">
                                <img src="../assets/badges-img.png" alt="badges" class="badges-img" />
                                <p class="text-muted small mb-0">50+ tasks completed</p>
                            </div>
                        </div>

                        <!-- Notification Bell -->
                        <div class="col-2 d-flex justify-content-center ">
                            <button class="btn  rounded-pill pe-4">Share</button>
                            <div class="bell-wrapper">
                                <i class="bi bi-bell"></i>
                            </div>
                        </div>

                    </div>

                    <!-- Area of Expertise -->
                    <div class="ms-5">
                        <div class="mt-5">
                            <h6 class="fw-bold">Area of expertise :</h6>
                            <div class="d-flex flex-wrap gap-2 mt-2">
                                <span class="h6 me-4 ">• KSA PDPL</span>
                                <span class="h6">• NDMO</span>
                            </div>
                        </div>

                        <!-- Professional Experience -->
                        <div class="mt-4">
                            <h6 class="">Professional experience -</h6>
                            <ul class="mt-2  small">
                                <li>
                                    Ashish has over 20 years of rich experience working in cross-functional areas,
                                    which include ISO 27001, ISO 27701, ISO 27017, ISO 22301, ISO 20000, ISO 9001, GDPR,
                                    FESMA, NIST, COBIT, SOC2, PDPL, NDMO.
                                </li>
                                <li>
                                    Ashish is currently focused on providing consulting services related to data
                                    privacy, and DP controls.
                                </li>
                                <li>
                                    Apart from consulting, Ashish has conducted numerous trainings for
                                    CISSP / ISO 27001 / ISO 27701 / ISO 27005 / ISO 27035 / ISO 31000 / ISO 22301 / ISO
                                    31000 / ITIL / COBIT
                                </li>
                            </ul>
                        </div>

                        <!-- Major Engagements -->
                        <div class="mt-4">
                            <h6 class="">Major engagements -</h6>

                            <div v-for="(engagement, idx) in engagements" :key="idx" class="engagement-card mt-3 p-3">
                                <div class="d-flex small mb-1">
                                    <h6 class="fw-bold me-5">{{ engagement.title }}</h6>
                                    <span><strong class="  color">Industry:</strong> {{ engagement.industry }} </span>
                                    <span class="ms-4"><strong class="text-muted  "></strong> {{ engagement.years }}
                                    </span>
                                </div>
                                <!-- <h6 class="fw-bold mb-1">{{ engagement.title }}</h6> -->
                                <p class="mb-0 small text-muted">
                                    {{ engagement.description }}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script>

import Sidebarprofile from '@/components/Sidebarprofile.vue';

export default {
    name: "MycvView",
    components: {Sidebarprofile},
    data() {
        return {
            engagements: [{
                title: "Data Governance Framework:",
                industry: "Media",
                years: "2022-2023",
                description: "Project leader for development of Data governance framework including compliance roadmap and UCL to comply to the requirements of the KSA PDPL, NDMO, ISO 27701 & GDPR for a large bank in KSA."
            },
            {
                title: "Data Governance Framework:",
                industry: "Media",
                years: "2022-2023",
                description: "Project leader for development of Data governance framework including compliance roadmap and UCL to comply to the requirements of the KSA PDPL, NDMO, ISO 27701 & GDPR for a large bank in KSA."
            }, {
                title: "Data Governance Framework:",
                industry: "Media",
                years: "2022-2023",
                description: "Project leader for development of Data governance framework including compliance roadmap and UCL to comply to the requirements of the KSA PDPL, NDMO, ISO 27701 & GDPR for a large bank in KSA."
            }, {
                title: "Data Governance Framework:",
                industry: "Media",
                years: "2022-2023",
                description: "Project leader for development of Data governance framework including compliance roadmap and UCL to comply to the requirements of the KSA PDPL, NDMO, ISO 27701 & GDPR for a large bank in KSA."
            },
            {
                title: "Data Governance Framework:",
                industry: "Media",
                years: "2022-2023",
                description: "Project leader for development of Data governance framework including compliance roadmap and UCL to comply to the requirements of the KSA PDPL, NDMO, ISO 27701 & GDPR for a large bank in KSA."
            }
            ]
        };
    }
};
</script>

<style scoped>
.color {
    color: #696767de;
}

/* Area of Expertise Badges */
.expertise-badge {
    background-color: #007bff;
    color: #fff;
    border-radius: 12px;
    padding: 4px 12px;
    font-size: 0.75rem;
}

/* Engagement Cards */
.engagement-card {

    border-radius: 8px;
    background: #fff;
}

.profile-img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border: 2px solid #007bff;
    padding: 3px;
}

.badges-img {
    width: 64px;
    height: 64px;
    display: block;
    margin: 0 auto;
}

.bell-wrapper {
    width: 40px;
    height: 40px;
    background-color: #d6f2ff;
    /* light blue */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bell-wrapper i {
    color: #007bff;
    /* blue icon */
    font-size: 18px;
}

button {
    background-color: #008BC7;
    margin-right: 20px;
    color: white;

}
</style>
