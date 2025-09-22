<!-- <template>

    <Starmedia/>
    <Policycomponent/>



  <div :class="['playground', { dark: isDark }]">
 
    <nav class="navbar d-flex justify-content-between align-items-center px-4 py-2 shadow-sm">
      <div class="d-flex align-items-center gap-2">
        <img src="../assets/logo-img.png" alt="Logo" class="logo" />
        <h5 class="mb-0 fw-bold">GRC Playground</h5>
      </div>
      <button class="btn btn-sm btn-toggle" @click="toggleTheme">
        <i v-if="isDark" class="bi bi-sun-fill"></i>
        <i v-else class="bi bi-moon-fill"></i>
      </button>
    </nav>

 
    <div class="container-fluid playground-body">
      <div class="row h-100">
      
        <div class="col-md-6 p-3 left-panel">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <h4 class="fw-bold mb-3">Task Name</h4>
              <strong>Task:</strong>
              <p>Develop comprehensive information security policy framework covering all organizational aspects</p>
              <p class="text-muted small mb-2">Deadline: {{ deadline }}</p>

              <h6 class="fw-semibold">📌 Instructions:</h6>
              <p class="">
               One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops
              </p>
            

              

            </div>
          </div>
        </div>

    
        <div class="col-md-6 p-3 right-panel">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body d-flex flex-column">
              <h4 class="fw-bold mb-3">⚡ Workbench</h4>

              <div class="mb-4">
                <label class="fw-semibold mb-2">Choose Method:</label>
                <select v-model="selectedMethod" class="form-select shadow-sm">
                  <option disabled value="">-- Select a Method --</option>
                  <option v-for="(m, i) in methods" :key="i" :value="m">{{ m }}</option>
                </select>
              </div>

          
              <div class="mb-4 flex-grow-1">
                <label class="fw-semibold mb-2">Work Area:</label>
                <textarea
                  v-model="workNotes"
                  rows="8"
                  class="form-control shadow-sm"
                  placeholder="Write how you will apply the method, actions, and tools..."
                ></textarea>
              </div>

        
              <div class="mb-4">
                <h6 class="fw-semibold">Suggested Actions:</h6>
                <div class="d-flex flex-wrap gap-2">
                  <span v-for="(a, i) in actions" :key="i" class="badge bg-primary-subtle text-primary px-3 py-2 shadow-sm">
                    {{ a }}
                  </span>
                </div>
              </div>

              <div class="mb-4">
                <h6 class="fw-semibold">Suggested Tools:</h6>
                <div class="d-flex flex-wrap gap-2">
                  <span v-for="(t, i) in tools" :key="i" class="badge bg-success-subtle text-success px-3 py-2 shadow-sm">
                    {{ t }}
                  </span>
                </div>
              </div>
              

              <div class="mt-auto">
                <button class="btn btn-success w-100" @click="submitWork">✅ Submit Solution</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div class="mt-3 px-3">
        <router-link to="/policy" class="btn btn-secondary">⬅ Back to Policy</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Policycomponent from './Policycomponent.vue';
import Starmedia from './Starmedia.vue';

export default {
  name: "PlaygroundView",
  components: {Starmedia , Policycomponent},
  data() {
    return {
      isDark: false,
      selectedMethod: "",
      workNotes: "",
      methods: [
        "Design and Development",
        "Strategic Planning & Architecture",
        "Governance & Risk Management"
      ],
      actions: [
        "Develop security policies",
        "Create cybersecurity strategies",
        "Build risk management frameworks"
      ],
      tools: ["Policy Templates", "Risk Frameworks", "Compliance Checklists"]
    };
  },
  computed: {
    taskName() {
      return this.$route.query.taskName || "Untitled Task";
    },
    deadline() {
      return this.$route.query.deadline || "No deadline";
    }
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
    },
    submitWork() {
      alert(
       ''
      );
    }
  }
};
</script>

<style scoped>

.playground {
  min-height: 100vh;
  background: #f9fbfd;
  transition: background 0.3s, color 0.3s;
}
.playground.dark {
  background: #121212;
  color: #f1f1f1;
}
.playground.dark .card {
  background: #1e1e1e;
  color: #f1f1f1;
}
.playground-body {
  height: calc(100vh - 60px);
}

.navbar {
  background: #ffffff;
}
.playground.dark .navbar {
  background: #1e1e1e;
}
.logo {
  height: 28px;
}
.btn-toggle {
  background: none;
  border: none;
  font-size: 18px;
  color: #0096d6;
  cursor: pointer;
}


.card {
  border-radius: 12px;
}
.left-panel {
  border-right: 1px solid #e0e0e0;
}
.playground.dark .left-panel {
  border-right: 1px solid #333;
}


.badge {
  font-size: 13px;
  border-radius: 20px;
}
</style> -->

<template>
  <div class="layout">
    <div class="sidebars">
      <!-- Reopen Icons -->
      <div class="reopen-icons">
        <i
          v-if="!showPolicy"
          class="bi bi-file-text reopen-icon"
          title="Open Policy Review"
          @click="showPolicy = true"
        ></i>

        <i
          v-if="!showPlayground"
          class="bi bi-lightning reopen-icon"
          title="Open Playground"
          @click="showPlayground = true"
        ></i>
      </div>

      <!-- Policy Review -->
      <div v-if="showPolicy" class="section" :style="{ flex: sizes.policy }">
        <div class="section-header">
          <h6>📑 Policy Review</h6>
          <button class="close-btn" @click="showPolicy = false">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <Policycomponent />
        <div class="resizer" @mousedown="startResize('policy', $event)"></div>
      </div>

      <!-- Playground -->
      <div v-if="showPlayground" class="section" :style="{ flex: sizes.playground }">
        <div class="section-header">
          <h6>⚡ Playground</h6>
          <button class="close-btn" @click="showPlayground = false">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="p-3">
          <h5 class="fw-bold">Workbench</h5>

          <label class="fw-semibold mb-2">Choose Method:</label>
          <select v-model="selectedMethod" class="form-select shadow-sm mb-3">
            <option disabled value="">-- Select a Method --</option>
            <option v-for="(m, i) in methods" :key="i" :value="m">{{ m }}</option>
          </select>

          <textarea
            v-model="workNotes"
            rows="5"
            class="form-control shadow-sm mb-3"
            placeholder="Write how you will apply the method..."
          ></textarea>

          <button class="btn btn-success w-100" @click="submitWork">
            ✅ Submit Solution
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Policycomponent from "./Policycomponent.vue";

export default {
  name: "MainWorkspace",
  components: { Policycomponent },
  data() {
    return {
      showPolicy: true,
      showPlayground: true,

      // Flex ratios for resizable sections
      sizes: {
        policy: 1,
        playground: 1,
      },

      // Playground
      selectedMethod: "",
      workNotes: "",
      methods: [
        "Design and Development",
        "Strategic Planning & Architecture",
        "Governance & Risk Management",
      ],

      // Resizing state
      resizing: null,
      startX: 0,
      startSize: 0,
    };
  },
  methods: {
    submitWork() {
      alert(
        `✅ Submitted!\n\nMethod: ${this.selectedMethod}\nNotes: ${this.workNotes}`
      );
    },
    startResize(section, event) {
      this.resizing = section;
      this.startX = event.clientX;
      this.startSize = this.sizes[section];

      document.addEventListener("mousemove", this.resize);
      document.addEventListener("mouseup", this.stopResize);
    },
    resize(event) {
      if (!this.resizing) return;
      const delta = (event.clientX - this.startX) / window.innerWidth * 3;
      this.sizes[this.resizing] = Math.max(0.5, this.startSize + delta);
    },
    stopResize() {
      this.resizing = null;
      document.removeEventListener("mousemove", this.resize);
      document.removeEventListener("mouseup", this.stopResize);
    },
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.sidebars {
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
}

.section {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  background: #f9fbfd;
  min-width: 200px;
  max-width: 90vw;
  position: relative;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eef1f4;
  padding: 8px 12px;
  border-bottom: 1px solid #ddd;
  font-weight: 600;
}

.close-btn {
  border: none;
  background: none;
  font-size: 16px;
  cursor: pointer;
}

.resizer {
  width: 6px;
  cursor: col-resize;
  background: #ccc;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
}

/* Reopen Icons styling */
.reopen-icons {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  left: 10px;
  gap: 12px;
  z-index: 10;
}

.reopen-icon {
  font-size: 22px;
  color: #555;
  cursor: pointer;
  transition: transform 0.2s, color 0.2s;
}

.reopen-icon:hover {
  color: #0d6efd;
  transform: scale(1.2);
}
</style>
