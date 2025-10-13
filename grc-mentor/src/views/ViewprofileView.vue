<template>
  <main class="mentorship-page">
    <div class="container-fluid row g-0">
      <!-- Sidebar -->
      <div class="col-2 col-md-2 sidebar-col">
        <Sidebarprofile />
      </div>

      <!-- Main -->
      <div class="col-10 col-md-10 main-col">
        <!-- Banner -->
        <div class="banner mb-5">
          <div class="banner-left">
            <h6 class="banner-title">Who's viewed my profile</h6>
            <p class="banner-sub">
            Who's viewed my profile
            </p>
          </div>
        </div>

     <!-- Badges Section -->
        <section>
        <!-- Badges Grid
         <div class="ps-5">
                    <h1 class="page-title">Who's viewed my profile</h1>
                    <p class="page-subtitle">Who's viewed my profile</p>
                </div> -->

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
        </section>
      </div>
    </div>
  </main>
</template>





<script lang="ts">

import Sidebarprofile from '@/components/Sidebarprofile.vue';
export default {
    name: "ProfileLogoutView",
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
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  font-family: "Inter", sans-serif;
}

.sidebar-col {
  padding-left: 0;
  padding-right: 0;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}

.main-col {
  margin-left: 16.5%; /* push main content after fixed sidebar */
  padding: 0 2rem;
}

.banner {
  margin-top: 30px;
  width: 100%;
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px 25px;
  color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
.banner-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}
.banner-sub {
  font-size: 13px;
  opacity: 0.9;
  margin: 2px 0 0 0;
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
