<template>
  <div class="sidebar">
    <!-- Logo -->
    <div>
      <img
        src="../assets/logo-img.png"
        alt="logo"
        style="height: 20px; padding-left: 20px; margin-bottom: 20px"
      />
    </div>

    <!-- Search Bar -->
    <div class="search-box">
      <input
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
        <!-- Regular nav item -->
        <router-link
          v-if="item.type === 'link'"
          :to="item.route!"
          class="nav-item"
          @click="handleNavClick(item)"
        >
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </router-link>

        <!-- Dropdown Items (Task View / My Profile / My Achievements) -->
        <div
          v-else-if="item.type === 'dropdown'"
          class="nav-item"
          @click="toggleDropdown(item.key as DropdownKey)"
        >
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>

          <i
            :class="[
              'fas',
              dropdowns[item.key as DropdownKey] ? 'fa-chevron-up' : 'fa-chevron-down',
              'dropdown-arrow'
            ]"
          ></i>
        </div>

        <!-- DROPDOWN LISTS -->

        <!-- Task View -->
        <transition name="slide">
          <ul
            v-if="item.type === 'dropdown' && item.key === 'task' && dropdowns.task"
            class="dropdown-list"
          >
            <li
              v-for="(task, i) in taskSubRoutes"
              :key="i"
              :class="{ 'active-sub': activeSubItem === task.name }"
            >
              <router-link
                :to="task.route"
                class="text-decoration-none dropdown-link"
                @click="setActiveSubItem(task.name)"
              >
                <i :class="task.icon"></i>
                {{ task.name }}
              </router-link>
            </li>
          </ul>
        </transition>

        <!-- My Profile -->
        <transition name="slide">
          <ul
            v-if="item.type === 'dropdown' && item.key === 'profile' && dropdowns.profile"
            class="dropdown-list"
          >
            <li
              v-for="(tab, i) in profileSubRoutes"
              :key="i"
              :class="{ 'active-sub': activeSubItem === tab.name }"
            >
              <router-link
                :to="tab.route"
                class="text-decoration-none dropdown-link"
                @click="setActiveSubItem(tab.name)"
              >
                <i :class="tab.icon"></i>
                {{ tab.name }}
              </router-link>
            </li>
          </ul>
        </transition>

        <!-- My Achievements -->
        <transition name="slide">
          <ul
            v-if="item.type === 'dropdown' && item.key === 'achievements' && dropdowns.achievements"
            class="dropdown-list"
          >
            <li
              v-for="(ach, i) in achievementSubRoutes"
              :key="i"
              :class="{ 'active-sub': activeSubItem === ach.name }"
            >
              <router-link
                :to="ach.route"
                class="text-decoration-none dropdown-link"
                @click="setActiveSubItem(ach.name)"
              >
                <i :class="ach.icon"></i>
                {{ ach.name }}
              </router-link>
            </li>
          </ul>
        </transition>
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
          <i class="fas fa-cog text-decoration-none text-muted"></i>
          <router-link class="text-decoration-none text-muted" to="/setting"
            >Settings</router-link
          >
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
import { defineComponent } from "vue";

type DropdownKey = "task" | "profile" | "achievements";

type NavItemLink = {
  name: string;
  icon: string;
  route: string;
  type: "link";
};

type NavItemDropdown = {
  name: string;
  icon: string;
  key: DropdownKey;
  type: "dropdown";
};

type NavItem = NavItemLink | NavItemDropdown;

export default defineComponent({
  name: "Sidebar",
  data() {
    return {
      searchQuery: "" as string,
      activeItem: "" as string,
      activeSubItem: "" as string,

      // fixed shape, safe to index with DropdownKey
      dropdowns: {
        task: false,
        profile: false,
        achievements: false,
      } as Record<DropdownKey, boolean>,

      navItems: [
        { name: "About Mentorship", icon: "fas fa-home", route: "/aboutmentorship", type: "link" } as NavItem,
        { name: "Working Desk", icon: "fas fa-briefcase", route: "/grc101", type: "link" } as NavItem,
        { name: "Task View", icon: "fas fa-list-check", key: "task", type: "dropdown" } as NavItem,
        { name: "Career graph", icon: "fas fa-chart-line", route: "/careergraph", type: "link" } as NavItem,
        { name: "My Profile", icon: "fas fa-user", key: "profile", type: "dropdown" } as NavItem,
        { name: "MY Achievements", icon: "fas fa-award", key: "achievements", type: "dropdown" } as NavItem,
        { name: "Matching Jobs", icon: "fas fa-briefcase", route: "/matchingjobs", type: "link" } as NavItem,
      ] as NavItem[],

      taskSubRoutes: [
        { name: "Task List", route: "/policyreview2", icon: "fas fa-list" },
        { name: "Calendar", route: "/calender", icon: "fas fa-calendar" },
      ] as Array<{ name: string; route: string; icon: string }>,

      profileSubRoutes: [
        { name: "My CV", route: "/mycv", icon: "fas fa-file-alt" },
        { name: "My Learnings", route: "/my-learnings", icon: "fas fa-book" },
        { name: "Reports", route: "/report", icon: "fas fa-clipboard-list" },

      ] as Array<{ name: string; route: string; icon: string }>,

      achievementSubRoutes: [
        { name: "Badges", icon: "fas fa-award", route: "/badges" },
        { name: "Certificate", icon: "fas fa-certificate", route: "/certificate" },
      ] as Array<{ name: string; route: string; icon: string }>,
    };
  },

  methods: {
    handleNavClick(item: NavItem) {
      this.activeItem = item.name;
      this.activeSubItem = "";

      // close all dropdowns
      this.dropdowns.task = false;
      this.dropdowns.profile = false;
      this.dropdowns.achievements = false;
    },

    // accept only allowed keys -> safe indexing
    toggleDropdown(type: DropdownKey) {
      this.dropdowns[type] = !this.dropdowns[type];

      // close others
      (Object.keys(this.dropdowns) as Array<DropdownKey>).forEach((key) => {
        if (key !== type) this.dropdowns[key] = false;
      });
    },

    setActiveSubItem(name: string) {
      this.activeSubItem = name;
    },

    // optional helper used if you want to programmatically open dropdown based on route
    checkDropdownActive(path: string) {
      const taskMatch = this.taskSubRoutes.find((t) => t.route === path);
      const profileMatch = this.profileSubRoutes.find((p) => p.route === path);
      const achievementMatch = this.achievementSubRoutes.find((a) => a.route === path);

      if (taskMatch) {
        this.activeItem = "Task View";
        this.dropdowns.task = true;
        this.activeSubItem = taskMatch.name;
      } else if (profileMatch) {
        this.activeItem = "My Profile";
        this.dropdowns.profile = true;
        this.activeSubItem = profileMatch.name;
      } else if (achievementMatch) {
        this.activeItem = "MY Achievements";
        this.dropdowns.achievements = true;
        this.activeSubItem = achievementMatch.name;
      }
    },
  },

  watch: {
    // watch route to set active highlights
    $route(to: any) {
      const matchedItem = (this.navItems as NavItem[]).find(
        (item) => (item as NavItemLink).route === to.path
      );

      if (matchedItem) {
        this.activeItem = matchedItem.name;
        this.activeSubItem = "";
      } else {
        this.checkDropdownActive(to.path);
      }
    },
  },

  mounted() {
    const matchedItem = (this.navItems as NavItem[]).find(
      (item) => (item as NavItemLink).route === this.$route.path
    );

    if (matchedItem) {
      this.activeItem = matchedItem.name;
    } else {
      this.checkDropdownActive(this.$route.path);
    }
  },
});
</script>

<style scoped>
/* ✅ Highlight active sub item (Task List, Calendar, etc.) */
.active-sub .dropdown-link {
  color: #008AC5 !important;
  font-weight: 600;
}

.active-sub i {
  color: #008AC5 !important;
}

/* ✅ No changes here – keeping your full original design */
.sidebar {
  width: 260px;
  height: 100vh;
  background-color: #F6F6F8;
  padding: 20px 20px 20px 20px;
 /* padding-top: 20px; */
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
}

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

.nav-links .nav-item {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  color: inherit;
}

.nav-links .nav-item:hover {
  background-color: #f1f1f1;
  border-radius: 8px;
}

.nav-links li.active i,
.nav-links li.active span {
  color: #008AC5;
}

.dropdown-arrow {
  margin-left: auto;
  font-size: 12px;
  color: #555;
  transition: transform 0.3s;
}

.dropdown-list {
  list-style: none;
  padding-left: 40px;
  margin-top: 5px;
  color: black;
}

.dropdown-list li {
  display: flex;
  align-items: start;
  gap: 8px;
  padding: 6px 0;
  font-size: 13px;
  color: #333;
  cursor: pointer;
  transition: color 0.2s;
  list-style: disc;
}

.dropdown-list li:hover {
  color: #101111;
}

.dropdown-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #555;
  transition: color 0.2s ease;
}

.router-link-active {
  color: #555 !important;
}

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

.profile-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(180deg, #B0A0FF 0%, #4023CF 100%);
}

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

/* slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.18s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
