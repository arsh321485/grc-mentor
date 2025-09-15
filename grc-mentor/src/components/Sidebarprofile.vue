<!-- <template>
  <div class="sidebar">
 

     <div>
      <img  src="../assets/logo-img.png" alt="" style="height: 20px; padding-left: 20px;margin-bottom: 20px; ">
    </div>


 
    <div class="search-box">
      <input
        style="border: 0;"
        type="text"
        placeholder="Search for anything..."
        v-model="searchQuery"
      />
      <span class="search-icon"><i class="bi bi-search"></i></span>
    </div>

  
    <ul class="nav-links">
      <li
        v-for="(item, index) in navItems"
        :key="index"
        :class="{ active: activeItem === item.name }"
      >
   
      <router-link
  v-if="item.name !== 'Projects'"
  :to="item.route || '#'"
  class="nav-item text-decoration-none"
  @click="handleNavClick(item)"
>
  <i :class="item.icon"></i>
  <span>{{ item.name }}</span>
</router-link>


       
        <div
          v-if="item.name === 'Projects'"
          class="nav-item"
          @click="toggleProjectsDropdown"
        >
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
          <i
            :class="[
              'fas',
              projectDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down',
              'dropdown-arrow'
            ]"
          ></i>
        </div>

    
        <ul v-if="item.name === 'Projects' && projectDropdownOpen" class="dropdown-list">
          <li
            v-for="(project, i) in projects"
            :key="i"
          >
            <router-link
              :to="`/projects/${project.toLowerCase().replace(/\s+/g, '-')}`"
              class="text-decoration-none dropdown-link"
            >
              {{ project }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>

  
    <div class="d-flex justify-content-end gap-3">
      <i class="bi bi-chat-text fs-5"></i>
      <i class="bi bi-gear fs-5"></i>
    </div>

   
    <div class="account-section">
      <p class="account-label">ACCOUNT</p>
      <ul>
        <li>
          <router-link to="/mycv" class="account-link text-decoration-none">
            <i class="fas fa-file-alt"></i>
            <span>Your CV</span>
          </router-link>
        </li>
       
        <li>
          <router-link to="/setting" class="account-link text-decoration-none">
            <i class="fas fa-cog"></i>
            <span>Settings</span>
          </router-link>
        </li>
      </ul>
    </div>


    <div class="profile">
   
      <div class="profile-icon"></div>

   
      <div class="profile-info">
        <h4 class="profile-name">Amit Sharma</h4>
        <p class="profile-email">amitsharma@gmail.com</p>
      </div>

      <i class="fas fa-chevron-down profile-dropdown"></i>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Sidebarprofile",
  data() {
    return {
      searchQuery: "",
      activeItem: "Working Desk",
      projectDropdownOpen: false,
      navItems: [
        { name: "Overview", icon: "fas fa-home", route: "/overview" },
        { name: "Working Desk", icon: "fas fa-briefcase", route: "/grc101" },
        { name: "Projects", icon: "fas fa-tasks" },
        { name: "Matching jobs", icon: "fas fa-map", route: "/matchingjobs" },
        { name: "Badges", icon: "fas fa-award", route: "/badges" },
        { name: "Career graph", icon: "fas fa-chart-line", route: "/careergraph" },
        { name: "Profile views", icon: "fas fa-user", route: "/profile-views" },
        { name: "Calender", icon: "fas fa-calendar", route: "/calendar" }
      ],
      projects: [
        "ISO 27001",
        "ISO 27002",
        "ISO 27003",
        "ISO 27004"
      ]
    };
  },
  methods: {
    handleNavClick(item: { name: string; icon?: string; route?: string }) {
      if (item.name !== "Projects") {
        this.activeItem = item.name;
        this.projectDropdownOpen = false;
      }
    },
    toggleProjectsDropdown() {
      this.projectDropdownOpen = !this.projectDropdownOpen;
    }
  }
};
</script> -->

<template>
  <div class="sidebar">
    <!-- Logo -->
    <div>
      <img
        src="../assets/logo-img.png"
        alt=""
        style="height: 20px; padding-left: 20px; margin-bottom: 20px"
      />
    </div>

    <!-- Search Bar -->
    <div class="search-box">
      <input
        style="border: 0"
        type="text"
        placeholder="Search for anything..."
        v-model="searchQuery"
      />
      <span class="search-icon"><i class="bi bi-search"></i></span>
    </div>

    <!-- Navigation Links -->
    <ul class="nav-links">
      <li
        v-for="(item, index) in navItems"
        :key="index"
        :class="{ active: activeItem === item.name }"
      >
        <!-- Router link for normal items -->
        <router-link
          v-if="item.name !== 'Projects'"
          :to="item.route || '#'"
          class="nav-item text-decoration-none"
          @click="handleNavClick(item)"
        >
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </router-link>

        <!-- Projects Dropdown -->
        <div
          v-if="item.name === 'Projects'"
          class="nav-item"
          @click="toggleProjectsDropdown"
        >
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
          <i
            :class="[
              'fas',
              projectDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down',
              'dropdown-arrow',
            ]"
          ></i>
        </div>

        <!-- Projects Submenu -->
        <ul
          v-if="item.name === 'Projects' && projectDropdownOpen"
          class="dropdown-list"
        >
          <li v-for="(project, i) in projects" :key="i">
            <router-link
              :to="`/projects/${project.toLowerCase().replace(/\s+/g, '-')}`"
              class="text-decoration-none dropdown-link"
              @click="activeItem = project"
            >
              {{ project }}
            </router-link>
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
          <router-link to="/mycv" class="account-link text-decoration-none">
            <i class="fas fa-file-alt"></i>
            <span>Your CV</span>
          </router-link>
        </li>
        <li>
          <router-link to="/setting" class="account-link text-decoration-none">
            <i class="fas fa-cog"></i>
            <span>Settings</span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Profile Section -->
    <div class="profile">
      <div class="profile-icon"></div>
      <div class="profile-info">
        <h4 class="profile-name">Amit Sharma</h4>
        <p class="profile-email">amitsharma@gmail.com</p>
      </div>
      <i class="fas fa-chevron-down profile-dropdown"></i>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Sidebarprofile",
  data() {
    return {
      searchQuery: "",
      activeItem: "Working Desk",
      projectDropdownOpen: false,
      navItems: [
        { name: "Overview", icon: "fas fa-home", route: "/overview" },
        { name: "Working Desk", icon: "fas fa-briefcase", route: "/grc101" },
        { name: "Projects", icon: "fas fa-tasks" },
        { name: "Matching jobs", icon: "fas fa-map", route: "/matchingjobs" },
        { name: "Badges", icon: "fas fa-award", route: "/badges" },
        { name: "Career graph", icon: "fas fa-chart-line", route: "/careergraph" },
        { name: "Profile views", icon: "fas fa-user", route: "/profileview" },
        { name: "Calender", icon: "fas fa-calendar", route: "/calendar" },
      ],
      projects: ["ISO 27001", "ISO 27002", "ISO 27003", "ISO 27004"],
    };
  },
  methods: {
    handleNavClick(item: { name: string; icon?: string; route?: string }) {
      if (item.name !== "Projects") {
        this.activeItem = item.name;
        this.projectDropdownOpen = false;
      }
    },
    toggleProjectsDropdown() {
      this.projectDropdownOpen = !this.projectDropdownOpen;
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
  transition: background 0.3s;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 15px;
}

.nav-item:hover {
  background-color: #f1f1f1;
  border-radius: 20px;
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
  padding: 6px 0;
  font-size: 14px;
}

.dropdown-link {
  color: #000000DE;
}

.dropdown-link:hover {
  color: #008AC5;
}

/* Account Section */
.account-label {
  font-size: 13px;
  font-weight: bold;
  color: #000000DE;
  margin-bottom: 10px;
}

.account-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  font-size: 14px;
  color: #00000099;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.account-link:hover {
  background-color: #f1f1f1;
  color: #008AC5;
}

.account-link i {
  color: #D9D9D9;
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
