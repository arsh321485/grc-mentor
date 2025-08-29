<template>
    <main>
        <div class="container-fluid row">
            <div class="col-2 col-md-2">
                <Sidebarprofile />
            </div>
            <div class="col-10 col-md-10">
                <!-- Title -->
                <h2 class="page-title pt-5 ps-5">Matching jobs for you</h2>

                <!-- Today's Jobs -->
                <div class="section">
                    <h5 class="section-title ps-5">Today</h5>
                    <div class="row g-4 ps-5">
                        <div class="col-md-4 col-lg-3 job-card-wrapper" v-for="(job, index) in todayJobs"
                            :key="'today-' + index">

                            <div class="d-flex align-items-start job-card">
                                <!-- Company Logo -->
                                <img :src="job.logo" alt="logo" class="company-logo me-3" />

                                <!-- Job Details -->
                                <div class="job-details">
                                    <!-- Job Title -->
                                    <h6 class="job-title">{{ job.title }}</h6>

                                    <!-- Company + Location -->
                                    <div class="d-flex align-items-center company-location">
                                        <span class="company-name">{{ job.company }}</span>
                                        <span class="dot-separator"></span>
                                        <span class="location">{{ job.location }}</span>
                                    </div>

                                    <!-- Go to Website -->
                                    <a :href="job.link" target="_blank" class="job-link">Go to website</a>
                                </div>
                            </div>

                            <!-- Vertical Separator -->
                            <div v-if="index !== todayJobs.length - 1" class="vertical-separator"></div>
                        </div>



                    </div>
                </div>

                <!-- Earlier Jobs -->
                <div class="section mt-5 ps-5">
                    <h5 class="section-title">Earlier this week</h5>
                    <div class="row g-4">

                       
                        <div class="col-md-4 col-lg-3 job-card-wrapper" v-for="(job, index) in earlierJobs"
                            :key="'today-' + index">

                            <div class="d-flex align-items-start job-card">
                                <!-- Company Logo -->
                                <img :src="job.logo" alt="logo" class="company-logo me-3" />

                                <!-- Job Details -->
                                <div class="job-details">
                                    <!-- Job Title -->
                                    <h6 class="job-title">{{ job.title }}</h6>

                                    <!-- Company + Location -->
                                    <div class="d-flex align-items-center company-location">
                                        <span class="company-name">{{ job.company }}</span>
                                        <span class="dot-separator"></span>
                                        <span class="location">{{ job.location }}</span>
                                    </div>

                                    <!-- Go to Website -->
                                    <a :href="job.link" target="_blank" class="job-link">Go to website</a>
                                </div>
                            </div>

                            <!-- Vertical Separator -->
                            <div v-if="index !== earlierJobs.length - 1" class="vertical-separator"></div>
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
    name: "MatchingjobsView",
    components: { Sidebarprofile },
    data() {
        return {
            todayJobs: [
                {
                    title: "Lead product designer",
                    company: "LinkedIn",
                    location: "India (remote)",
                    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    link: "https://linkedin.com",
                },
                {
                    title: "Lead product designer",
                    company: "LinkedIn",
                    location: "India (remote)",
                    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    link: "https://linkedin.com",
                },
                {
                    title: "Lead product designer",
                    company: "LinkedIn",
                    location: "India (remote)",
                    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    link: "https://linkedin.com",
                },
                {
                    title: "Lead product designer",
                    company: "LinkedIn",
                    location: "India (remote)",
                    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    link: "https://linkedin.com",
                },
                {
                    title: "Lead product designer",
                    company: "LinkedIn",
                    location: "India (remote)",
                    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    link: "https://linkedin.com",
                },
                {
                    title: "Lead product designer",
                    company: "LinkedIn",
                    location: "India (remote)",
                    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    link: "https://linkedin.com",
                },
            ],
            earlierJobs: [
                {
                    title: "Lead product designer",
                    company: "LinkedIn",
                    location: "India (remote)",
                    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    link: "https://linkedin.com",
                },
                {
                    title: "Lead product designer",
                    company: "LinkedIn",
                    location: "India (remote)",
                    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    link: "https://linkedin.com",
                },
                {
                    title: "Lead product designer",
                    company: "LinkedIn",
                    location: "India (remote)",
                    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    link: "https://linkedin.com",
                },
            ],
        };
    },
}
</script>

<style scoped>
.job-card-wrapper {
    position: relative;
    display: inline-block;
    padding-right: 24px;
    /* space for vertical line */
    margin-bottom: 25px;
}

.job-card {
    display: flex;
    align-items: flex-start;
    min-height: 120px;
}

.company-logo {
    width: 42px;
    height: 42px;
    object-fit: contain;
    border-radius: 50%;
    margin-top: 2px;
}

.job-details {
    flex: 1;
}

.job-title {
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 4px 0;
    color: #000000DE;
}

.company-location {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
}

.company-name {
    font-size: 14px;
    font-weight: 500;
    color: #000000DE;
    padding-top: 5px;
}

.dot-separator {
    width: 4px;
    height: 4px;
    background-color: #b3b3b3;
    border-radius: 50%;
    display: inline-block;
    margin-top: 12px;
}

.location {
    font-size: 14px;
    color: #00000099;
    padding-top: 12px;
    font-weight: 500;
}

.job-link {
    display: block;
    /* forces it to go below */
    margin-top: 6px;
    font-size: 15px;
    color: #027DB2;
    font-weight: 600;
    text-decoration: none;
}

.job-link:hover {
    text-decoration: underline;
}

.vertical-separator {
    position: absolute;
    top: 10%;
    right: 0;
    width: 1px;
    height: 80%;
    background-color: #e0e0e0;
    opacity: 0.8;
}

.page-title {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #000000DE;
}

.section-title {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 15px;
    color: #00000099;
}

/* .job-card {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    cursor: pointer;
} */

/* .job-card:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
} */

.job-title {
    font-size: 16px;
    font-weight: 600;
    color: #000;
    margin: 0;
}

.company-name {
    font-weight: 600;
    color: #000;
    margin: 2px 0 0;
    display: inline;
}

.location {
    color: #666;
    font-size: 14px;
    margin: 0 0 6px;
    display: inline;
}

.job-link {
    font-weight: 500;
    color: #0073b1;
    text-decoration: none;
    font-size: 14px;
}

.job-link:hover {
    text-decoration: underline;
}
</style>
