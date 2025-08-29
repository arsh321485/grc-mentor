<template>
    <main>
        <div class="container-fluid row">
            <div class="col-2 col-md-2">
                <Sidebarprofile />
            </div>

            <div class="col-10 col-md-10 bg-white">
                <!-- Header Section -->
                <div class="d-flex justify-content-end align-items-center mb-4 pt-3">
                    <button class="btn btn-link calendar-btn">
                        <i class="fas fa-calendar-alt me-2"></i>
                        Calendar view
                    </button>
                </div>
                <div class="ps-5">
                    <h1 class="page-title">Who's viewed my profile</h1>
                    <p class="page-subtitle">Who's viewed my profile</p>
                </div>



                <!-- Profile List -->
                <div class="profile-list ps-5">
                    <div v-for="(viewer, index) in viewers" :key="index"
                        class="profile-item d-flex justify-content-start align-items-center ">
                        <!-- Left Side: Avatar + Info -->
                        <div class="d-flex align-items-center">
                            <img :src="viewer.avatar" alt="profile" class="profile-avatar" />
                            <div class="ms-3">
                                <h5 class="profile-name">{{ viewer.name }}</h5>
                                <p class="profile-source">{{ viewer.source }}</p>
                            </div>
                        </div>

                        <!-- Right Side: Date -->
                        <div class="profile-date">
                            Viewed on <strong>{{ viewer.viewedDate }}</strong>
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
    name: "ViewprofileView",
    components: { Sidebarprofile },
    data() {
        return {
            viewers: [
                {
                    name: "Allan Donald",
                    source: "Linkedin",
                    viewedDate: "11th July, 2025",
                    avatar: new URL("../assets/profile-img.jpg", import.meta.url).href,
                },
                {
                    name: "Allan Donald",
                    source: "Linkedin",
                    viewedDate: "11th July, 2025",
                    avatar: new URL("../assets/profile-img.jpg", import.meta.url).href,
                },
                {
                    name: "Allan Donald",
                    source: "Linkedin",
                    viewedDate: "11th July, 2025",
                    avatar: new URL("../assets/profile-img.jpg", import.meta.url).href,
                },
                {
                    name: "Allan Donald",
                    source: "Linkedin",
                    viewedDate: "11th July, 2025",
                    avatar: new URL("../assets/profile-img.jpg", import.meta.url).href,
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Page Header */
.page-title {
    font-size: 24px;
    font-weight: 700;
    color: #000;
    margin-bottom: 5px;
}

.page-subtitle {
    font-size: 14px;
    color: #00000099;
    font-weight: 500;
    margin: 0;
}

/* Calendar Button */
.calendar-btn {
    font-size: 15px;
    font-weight: 500;
    color: #0082B9;
    text-decoration: none;
}

.calendar-btn:hover {
    text-decoration: underline;
}

/* Profile List */
.profile-list {
    margin-top: 20px;
}

.profile-item {
    padding: 12px 0;
    gap: 150px;
    /* border-bottom: 1px solid #f1f1f1; */
}

.profile-avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
}

.profile-name {
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 3px;
}

.profile-source {
    font-size: 13px;
    color: #00000099;
    font-weight: 500;
    margin: 0;
}

.profile-date {
    font-size: 14px;
    color: #00000099;
}

.profile-date strong {
    font-weight: 700;
    color: #000000DE;
}
</style>
