<!-- <template>
  <main>
    <div class="sidebar">

      <div class="sidebar-header">
        <h6 class="stepper-title">
          <span class="dot"></span> GRC Mentor
        </h6>
      </div>


      <div>
        <p class="media-text">Star media</p>
      </div>

      <div>
        <p class="media-sub-text mb-3">About the company <i class="bi bi-info-circle icon-color"></i></p>
      </div>

     <div>

        <p class="media-sub-text ">Industry</p>
        <p class="media-broad-text">Sustainable Products E-commerce</p>

     </div>

      <div>
        <p class="media-sub-text">Annual revenue</p>
      </div>

      <div>
        <p class="media-broad-text">$45 million</p>
      </div>

      <div>
        <p class="media-sub-text">Geographic presence</p>
      </div>

      <div>
        <p class="media-broad-text">United States and Canada</p>
      </div>

      <div>
        <p class="media-sub-text">Name of the project</p>
      </div>

      <div>
        <p class="media-broad-text">ISO 27001</p>
      </div>

      <div>
        <p class="media-sub-text">Description </p>
      </div>

      <div>
        <p class="media-broad-text">ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project.</p>
      </div>


      <div>
        <p class="media-sub-text">Technology stack</p>
      </div>


      <div>
        <p class="media-broad-text">Modern cloud infrastructure with sustainability tracking</p>
      </div>

      <div>
        <p class="media-sub-text">Business model</p>
      </div>

      <div>
        <p class="media-broad-text">Multi-vendor marketplace with focus on sustainability</p>
      </div>

      <div>
        <p class="media-sub-text">Primary focus</p>
      </div>

      <div>
        <p class="media-broad-text">Sustainable business practices and process improvement</p>
      </div>

      <div>
        <p class="media-broad-text">Mandatory laws</p>
      </div>

      <div>
        <p class="media-sub-text">Security Investment</p>
      </div>


    </div>
  </main>
</template>


<script lang="ts">
export default {
  name: "Starmedia"
};
</script>

<style scoped>
.media-text {
  color: #000000;
  font-weight: 500;
  font-size: 25px;

}

.icon-color{
  color: #0096D6;
}
.media-sub-text {
  font-size: 13px;
  font-weight: 400;
  color: #00000099;
  margin: 0;
}

.media-broad-text {
  font-size: 14px;
  font-weight: 500;
  color: #000000;

}


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

}

.dot-profile {
  height: 25px;
  width: 25px;
  background: linear-gradient(180deg, #B0A0FF 0%, #4023CF 100%);
  border-radius: 50%;

}


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


.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>

 -->


<!-- 
 <template>
  <main>
   
    <button
      class="toggle-btn"
      @click="toggleSidebar"
      :title="isOpen ? 'Close Sidebar' : 'Open Sidebar'"
    >
      <i v-if="isOpen" class="bi bi-x-lg"></i>
      <i v-else class="bi bi-layout-sidebar-inset"></i>
    </button>

 
    <div v-if="isOpen" class="sidebar">
      <div class="sidebar-header">
        <h6 class="stepper-title">
          <span class="dot"></span> GRC Mentor
        </h6>
      </div>

      <div>
        <p class="media-text">Star media</p>
      </div>

      <div>
        <p class="media-sub-text mb-3">
          About the company <i class="bi bi-info-circle icon-color"></i>
        </p>
      </div>

      <div>
        <p class="media-sub-text">Industry</p>
        <p class="media-broad-text">Sustainable Products E-commerce</p>
      </div>

      <div>
        <p class="media-sub-text">Annual revenue</p>
        <p class="media-broad-text">$45 million</p>
      </div>

      <div>
        <p class="media-sub-text">Geographic presence</p>
        <p class="media-broad-text">United States and Canada</p>
      </div>

      <div>
        <p class="media-sub-text">Name of the project</p>
        <p class="media-broad-text">ISO 27001</p>
      </div>

      <div>
        <p class="media-sub-text">Description</p>
        <p class="media-broad-text">
          ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project.
        </p>
      </div>

      <div>
        <p class="media-sub-text">Technology stack</p>
        <p class="media-broad-text">
          Modern cloud infrastructure with sustainability tracking
        </p>
      </div>

      <div>
        <p class="media-sub-text">Business model</p>
        <p class="media-broad-text">
          Multi-vendor marketplace with focus on sustainability
        </p>
      </div>

      <div>
        <p class="media-sub-text">Primary focus</p>
        <p class="media-broad-text">
          Sustainable business practices and process improvement
        </p>
      </div>

      <div>
        <p class="media-sub-text">Mandatory laws</p>
      </div>

      <div>
        <p class="media-sub-text">Security Investment</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Starmedia",
  setup() {
    const isOpen = ref(true);

    const toggleSidebar = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleSidebar,
    };
  },
});
</script>

<style scoped>

.toggle-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #0096d6;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 8px 10px;
  cursor: pointer;
  z-index: 100;
}
.toggle-btn:hover {
  background: #007bb5;
}
.toggle-btn i {
  font-size: 16px;
}


.sidebar {
  width: 260px;
  height: 100vh;
  background-color: #f6f6f8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
  position: relative;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.media-text {
  color: #000000;
  font-weight: 500;
  font-size: 25px;
}

.icon-color {
  color: #0096d6;
}

.media-sub-text {
  font-size: 13px;
  font-weight: 400;
  color: #00000099;
  margin: 0;
}

.media-broad-text {
  font-size: 14px;
  font-weight: 500;
  color: #000000;
}


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
  background: linear-gradient(180deg, #9fe2ff 0%, #0096d6 100%);
  border-radius: 50%;
  margin-right: 8px;
}
</style>
 -->

<!-- 
<template>
  <main>
 
    <div v-if="isOpen" class="sidebar">
    


      <div>
        <img src="../assets/logo-img.png" alt="" style="height: 20px; margin-bottom: 20px; ">
      </div>

      <div>
        <p class="media-text">Star media</p>
      </div>

      <div>
        <p class="media-sub-text mb-3">
          About the company <i class="bi bi-info-circle icon-color"></i>
        </p>
      </div>

      <div>
        <p class="media-sub-text">Industry</p>
        <p class="media-broad-text">Sustainable Products E-commerce</p>
      </div>

      <div>
        <p class="media-sub-text">Annual revenue</p>
        <p class="media-broad-text">$45 million</p>
      </div>

      <div>
        <p class="media-sub-text">Geographic presence</p>
        <p class="media-broad-text">United States and Canada</p>
      </div>

      <div>
        <p class="media-sub-text">Name of the project</p>
        <p class="media-broad-text">ISO 27001</p>
      </div>

      <div>
        <p class="media-sub-text">Description</p>
        <p class="media-broad-text">
          ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project,
          ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project,
          ISO 27001 is a project.
        </p>
      </div>

      <div>
        <p class="media-sub-text">Technology stack</p>
        <p class="media-broad-text">
          Modern cloud infrastructure with sustainability tracking
        </p>
      </div>

      <div>
        <p class="media-sub-text">Business model</p>
        <p class="media-broad-text">
          Multi-vendor marketplace with focus on sustainability
        </p>
      </div>

      <div>
        <p class="media-sub-text">Primary focus</p>
        <p class="media-broad-text">
          Sustainable business practices and process improvement
        </p>
      </div>

      <div>
        <p class="media-sub-text">Mandatory laws</p>
      </div>

      <div>
        <p class="media-sub-text">Security Investment</p>
      </div>
    </div>


    <button v-else class="open-btn" @click="toggleSidebar" title="Open Sidebar">
      <i class="bi bi-layout-sidebar-inset"></i>
    </button>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Starmedia",
  setup() {
    const isOpen = ref(true);

    const toggleSidebar = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleSidebar,
    };
  },
});
</script>

<style scoped>

.sidebar {
  width: 260px;
  height: 100vh;
  background-color: #f6f6f8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
  position: relative;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Close button inside sidebar */
.close-btn {
  background: none;
  border: none;
  color: #000;
  font-size: 16px;
  cursor: pointer;
}

.close-btn:hover {
  color: #0096d6;
}


.open-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  background: #0096d6;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 8px 10px;
  cursor: pointer;
  z-index: 200;
}

.open-btn:hover {
  background: #007bb5;
}

.open-btn i {
  font-size: 18px;
}


.media-text {
  color: #000000;
  font-weight: 500;
  font-size: 25px;
}

.icon-color {
  color: #0096d6;
}

.media-sub-text {
  font-size: 13px;
  font-weight: 400;
  color: #00000099;
  margin: 0;
}

.media-broad-text {
  font-size: 14px;
  font-weight: 500;
  color: #000000;
}


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
  background: linear-gradient(180deg, #9fe2ff 0%, #0096d6 100%);
  border-radius: 50%;
  margin-right: 8px;
}
</style> -->




<template>
  <main>
    <!-- Sidebar -->
    <div  class="sidebar">
      <div class="sidebar-header">
        <h6 class="stepper-title">
          <span class="dot"></span> GRC Mentor
        </h6>
       
      </div>

      <div>
        <p class="media-text">Star media</p>
      </div>

      <div>
        <p class="media-sub-text mb-3">
          About the company <i class="bi bi-info-circle icon-color"></i>
        </p>
      </div>

      <div>
        <p class="media-sub-text">Industry</p>
        <p class="media-broad-text">Sustainable Products E-commerce</p>
      </div>

      <div>
        <p class="media-sub-text">Annual revenue</p>
        <p class="media-broad-text">$45 million</p>
      </div>

      <div>
        <p class="media-sub-text">Geographic presence</p>
        <p class="media-broad-text">United States and Canada</p>
      </div>

      <div>
        <p class="media-sub-text">Name of the project</p>
        <p class="media-broad-text">ISO 27001</p>
      </div>

      <div>
        <p class="media-sub-text">Description</p>
        <p class="media-broad-text">
          ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project,
          ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project,
          ISO 27001 is a project.
        </p>
      </div>

      <div>
        <p class="media-sub-text">Technology stack</p>
        <p class="media-broad-text">
          Modern cloud infrastructure with sustainability tracking
        </p>
      </div>

      <div>
        <p class="media-sub-text">Business model</p>
        <p class="media-broad-text">
          Multi-vendor marketplace with focus on sustainability
        </p>
      </div>

      <div>
        <p class="media-sub-text">Primary focus</p>
        <p class="media-broad-text">
          Sustainable business practices and process improvement
        </p>
      </div>

      <div>
        <p class="media-sub-text">Mandatory laws</p>
      </div>

      <div>
        <p class="media-sub-text">Security Investment</p>
      </div>
    </div>

    <!-- Toggle button when sidebar is closed -->
  
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Starmedia",
  setup() {
    const isOpen = ref(true);

    const toggleSidebar = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleSidebar,
    };
  },
});
</script>

<style scoped>
/* Sidebar styles */
.sidebar {
  /* width: 260px; */
  height: 100vh;
  background-color: #f6f6f8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
  position: relative;
}



/* Typography */
.media-text {
  color: #000000;
  font-weight: 500;
  font-size: 25px;
}

.icon-color {
  color: #0096d6;
}

.media-sub-text {
  font-size: 13px;
  font-weight: 400;
  color: #00000099;
  margin: 0;
}

.media-broad-text {
  font-size: 14px;
  font-weight: 500;
  color: #000000;
}

/* Stepper Title */
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
  background: linear-gradient(180deg, #9fe2ff 0%, #0096d6 100%);
  border-radius: 50%;
  margin-right: 8px;
}
</style>