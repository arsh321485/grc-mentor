<template>
  <div class="sidebar">
    <!-- Logo & App Name -->
    <!-- <div class="sidebar-header">
      <h6 class="stepper-title">
        <span class="dot"></span> GRC Mentor
      </h6>
    </div> -->

     <div>
      <img  src="../assets/logo-img.png" alt="" style="height: 20px; padding-left: 20px;margin-bottom: 20px; ">
    </div>


    <!-- Search Bar -->
    <div class="search-box">
      <input
        style="border: 0;"
        type="text"
        placeholder="Search for anything..."
        v-model="searchQuery"
      />
      <span class="search-icon"> <i class="bi bi-search"></i></span>
    </div>

    <!-- Navigation Links -->
   <ul class="nav-links">
  <li
    v-for="(item, index) in navItems"
    :key="index"
    :class="{ active: activeItem === item.name }"
  >
    <router-link
      :to="item.route"
      class="nav-item"
      @click.native="handleNavClick(item)"
    >
      <i :class="item.icon"></i>
      <span>{{ item.name }}</span>

      <!-- Dropdown arrow only for Projects -->
      <i
        v-if="item.name === 'Projects'"
        :class="[
          'fas',
          projectDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down',
          'dropdown-arrow'
        ]"
      ></i>
    </router-link>

    <!-- Dropdown Submenu for Projects -->
    <ul
      v-if="item.name === 'Projects' && projectDropdownOpen"
      class="dropdown-list"
    >
      <li
        v-for="(project, i) in projects"
        :key="i"
        @click="$router.push(`/projects/${project.toLowerCase().replace(/\s+/g, '-')}`)"
      >
        {{ project }}
      </li>
    </ul>
  </li>
</ul>


    <!-- Chat & Settings -->
    <div class="d-flex justify-content-end gap-3">
      <i class="bi bi-chat-text fs-5"></i>
      <i class="bi bi-gear fs-5"></i>
    </div>

    <!-- Account Section -->
    <div class="account-section">
      <p class="account-label">ACCOUNT</p>
      <ul>
  <li>
    <router-link to="/mycv" class="d-flex align-items-center text-decoration-none account-link gap-3">
      <i class="fas fa-file-alt"></i>
      <span>Your CV</span>
    </router-link>
  </li>

  <!-- <li>
    <router-link to="/feedback" class="d-flex align-items-center text-decoration-none account-link gap-3">
      <i class="fas fa-comment-dots"></i>
      <span>Feedback</span>
    </router-link>
  </li> -->

  <li>
    <router-link to="/setting" class="d-flex align-items-center text-decoration-none account-link gap-3">
      <i class="fas fa-cog"></i>
      <span>Settings</span>
    </router-link>
  </li>
</ul>

    </div>

    <!-- Profile Section -->
    <div class="profile">
      <!-- Gradient Circle Icon -->
      <div class="profile-icon"></div>

      <!-- Name and Email -->
      <div class="profile-info">
        <h4 class="profile-name">Amit Sharma</h4>
        <p class="profile-email">amitsharma@gmail.com</p>
      </div>

      <!-- Dropdown Icon -->
      <i class="fas fa-chevron-down profile-dropdown"></i>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Sidebar",
  data() {
    return {
      searchQuery: "",
      activeItem: "Working Desk",
      projectDropdownOpen: false,
      navItems: [
        { name: "Overview", icon: "fas fa-home", route: "/overview" },
        { name: "Working Desk", icon: "fas fa-briefcase", route: "/grc101" },
        { name: "Projects", icon: "fas fa-tasks", route: "/projects" },
        { name: "Roadmap", icon: "fas fa-map", route: "/roadmap" },
        { name: "Badges", icon: "fas fa-award", route: "/badges" },
        { name: "Career graph", icon: "fas fa-chart-line", route: "/careergraph" },
        { name: "Profile views", icon: "fas fa-user", route: "/profileview" },
      ],
      projects: [
        "Project Apollo",
        "Project Orion",
        "Project Gemini",
        "Project Phoenix",
      ],
    };
  },
  methods: {
    handleNavClick(item: { name: string; icon?: string; route?: string }) {
      if (item.name === "Projects") {
        this.projectDropdownOpen = !this.projectDropdownOpen;
      } else {
        this.activeItem = item.name;
        this.projectDropdownOpen = false;
      }
    },
  },
};
</script>


<style scoped>
/* Title */
.stepper-title {
  display: flex;
  align-items: center;
  color: #121212;
  font-size: 17px;
  font-weight: 600;
}

.dot {
  height: 20px;
  width: 20px;
  background: linear-gradient(180deg, #9FE2FF 0%, #0096D6 100%);
  border-radius: 50%;
  margin-right: 8px;
  margin-left: 20px;
}

/* Sidebar Container */
.sidebar {
  width: 260px;
  height: 100vh;
  background-color: #F6F6F8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
}

/* Logo & App Name */
.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-box {
  position: relative;
  width: 200px;
}

.search-box input {
  width: 100%;
  padding: 10px 40px 10px 15px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  color: #00000099;
}

.search-box .search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #00000099;
  font-size: 16px;
  pointer-events: none;
}

/* Navigation Links */
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 15px;
}
.nav-links .nav-item {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 15px;
  color: inherit;
  width: 100%;
}

.nav-links .nav-item:hover {
  background-color: #f1f1f1;
  border-radius: 8px;
}


.nav-links li i {
  font-size: 15px;
  color: #000000;
}

.nav-links li span {
  color: #00000099;
}

.nav-links li.active .nav-item {
  background-color: #fff;
  color: #008AC5;
  border-radius: 20px;
}

.nav-links li.active i,
.nav-links li.active span {
  color: #008AC5;
}

/* Dropdown Arrow */
.dropdown-arrow {
  margin-left: auto;
  font-size: 12px;
  color: #555;
  transition: transform 0.3s;
}

/* Dropdown List */
.dropdown-list {
  list-style: disc;
  padding-left: 40px;
  margin-top: 5px;
}

.dropdown-list li {
  display: flex;
  align-items: start;
  gap: 8px;
  padding: 6px 0;
  font-size: 14px;
  color: #000000DE;
  cursor: pointer;
  transition: color 0.2s;
  list-style: disc;
}

.dropdown-list li:hover {
  color: #008AC5;
}

/* Account Section */
.account-section {
  margin-top: 20px;
}

.account-label {
  font-size: 13px;
  font-weight: bold;
  color: #000000DE;
  margin-bottom: 10px;
}

.account-section ul {
  list-style: none;
  padding: 0;
}

.account-section ul li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 6px;
}

.account-section ul li i {
  color: #D9D9D9;
}

.account-section ul li span {
  color: #00000099;
}

.account-section ul li:hover {
  background-color: #f1f1f1;
}

/* Profile Section */
.profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-right: 5px;
}

/* Gradient Circle Icon */
.profile-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(180deg, #B0A0FF 0%, #4023CF 100%);
}

/* Name and Email Container */
.profile-info {
  flex: 1;
  line-height: 1.2;
}

.profile-name {
  font-size: 14px;
  font-weight: 600;
  color: #000;
  margin: 0;
}

.profile-email {
  font-size: 12px;
  color: #666;
  margin: 0;
}

.profile-dropdown {
  font-size: 12px;
  color: #666;
}
</style>
