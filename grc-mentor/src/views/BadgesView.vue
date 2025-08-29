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
                <div class="d-flex justify-content-end align-items-center pt-4">
                    <button class="btn btn-link calendar-btn" @click="openCalendar">
                        <i class="fas fa-calendar-alt me-2"></i> Calendar view
                    </button>
                </div>

                <!-- Title -->
                <div>
                    <p class="ps-5 fw-semibold badges-text mb-0 pb-0">Badges</p>
                    <p class="ps-5 badges-subtext">A snapshot of your career graph</p>
                </div>

                <!-- Static Badges Grid -->
                <div class="row ps-5">
                    <div class="d-flex justify-content-start gap-5">
                        <div class=""> 
                             <img src="../assets/expert-mentee.png" alt="" class="badges-img">
                             <p class="grid-text  mb-0 pb-0">Expert mentee</p>
                             <p class="grid-subtext">Earned on 11th July, 2025</p>
                            
                            </div>
                        <div class="">
                            <img src="../assets/expert-mentee.png" alt="" class="badges-img">
                             <p class="grid-text  mb-0 pb-0">Expert mentee</p>
                             <p class="grid-subtext">Earned on 11th July, 2025</p>
                        </div>
                       
                          
                    </div>
                    <!-- Badge 1 -->
                    <!-- <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 badges-img">
                       
                    </div> -->

                    <!-- Badge 2 -->
                    <!-- <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 img">
                      
                         <img src="../assets/expert-mentee.png" alt="">
                    </div> -->
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Sidebargrc2 from "@/components/Sidebargrc2.vue";

export default {
    name: "BadgesView",
    components: { Sidebargrc2 },
    methods: {
        openCalendar() {
            alert("Calendar view clicked!");
        },
    },
};
</script>

<style scoped>
.grid-subtext{
    font-size: 13px;
    color: #00000099;
}
.grid-text{
    font-size: 19px;
    color: #000000DE;
    font-weight: 600;
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
    color: #0082B9;
    text-decoration: none;
}

.calendar-btn:hover {
    text-decoration: none;
}

/* Badge Img */
.badges-img{
height: 200px;
width: 250px;
}

/* Badge Info */
.badge-info {
    text-align: center;
}

.badge-title {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    color: #000;
}

.badge-date {
    font-size: 13px;
    color: #6c757d;
    margin: 4px 0 0;
}
</style>
