<template>
  <div class="sidebar">
    <!-- Logo & App Name -->
    <div class="sidebar-header">
      <h6 class="stepper-title">
        <span class="dot"></span> GRC Mentor
      </h6>
    </div>

    <!-- Search Barr -->
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
        @click="handleNavClick(item)"
      >
        <div class="nav-item">
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
        </div>

        <!-- Dropdown Submenu for Projects -->
        <ul v-if="item.name === 'Projects' && projectDropdownOpen" class="dropdown-list">
          <li v-for="(project, i) in projects" :key="i">
            {{ project }}
          </li>
        </ul>
      </li>
    </ul>

    <!-- Logout-section -->
    <div class="card border-0 shadow-sm">
      <div class="card-body pt-5">
        <i class="bi bi-box-arrow-right"></i> Log out
      </div>
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
import { defineComponent } from "vue";

interface NavItem {
  name: string;
  icon: string;
}

export default defineComponent({
  name: "Logoutsidebar",
  data() {
    return {
      searchQuery: "",
      activeItem: "Working Desk",
      projectDropdownOpen: false,
      navItems: [
        { name: "Overview", icon: "fas fa-home" },
        { name: "Working Desk", icon: "fas fa-briefcase" },
        { name: "Projects", icon: "fas fa-tasks" },
        { name: "Roadmap", icon: "fas fa-map" },
        { name: "Badges", icon: "fas fa-award" },
        { name: "Career graph", icon: "fas fa-chart-line" },
        { name: "Profile views", icon: "fas fa-user" },
        { name: "Calender", icon: "fas fa-calendar" },
      ] as NavItem[],
      projects: ["ISO 27001", "ISO 27002", "ISO 27003", "ISO 27004"],
    };
  },
  methods: {
    handleNavClick(item: NavItem) {
      if (item.name === "Projects") {
        this.projectDropdownOpen = !this.projectDropdownOpen;
      } else {
        this.activeItem = item.name;
        this.projectDropdownOpen = false;
      }
    },
  },
});
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
  padding: 10px 15px;
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
 w