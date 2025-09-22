<template>
  <main>
    <div class="container-fluid row g-0">
      <div class="col-12 col-md-2">
        <Starmedia />
      </div>

      <div class="col-12 col-md-10">
        <!-- Main Policy Page -->
        <div class="policy-page flex-grow-1">
          <!-- Header -->
          <div class="d-flex flex-wrap justify-content-between align-items-start p-4">
            <div>
              <div class="fw-semibold mb-3 mt-2 d-flex align-items-center">
                <div class="icon-section">
                  <i class="bi bi-file-earmark-ruled"></i>
                </div>
                <div class="fw-semibold ms-2 media-text">Media</div>
              </div>
            </div>

            <router-link to="/tasks" class="btn text-decoration-none p-0 mt-2 d-flex align-items-center"
              style="color: #0096D6;">

              Back to task menu
            </router-link>

          </div>

          <!-- Subtasks count -->
          <h2 class="fw-semibold mb-1 ms-3 mb-3">{{ policy.title }}</h2>
          <div class="text-muted ms-4 mb-3">
            Subtasks ({{ policy.subtasks.length }})

            <!-- Subtasks Accordion -->
            <div class="p-4">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item" v-for="(task, index) in policy.subtasks" :key="index">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                      :data-bs-target="'#flush-collapse' + index" aria-expanded="false"
                      :aria-controls="'flush-collapse' + index">
                      <span class="w-100 d-flex justify-content-between align-items-center">
                        <h6 class="fw-semibold mb-0">• {{ task.name }}</h6>
                        <small class="text-muted pe-3">Deadline: {{ task.deadline }}</small>
                      </span>
                    </button>
                  </h2>

                  <!-- Accordion Body -->
                  <div :id="'flush-collapse' + index" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <p class="fw-semibold mb-2">Instructions for the subtask:</p>
                      <p class="text-muted paratext">{{ task.instructions }}</p>

                      <div class="d-flex   mt-3 align-items-center">
                        <a v-if="task.link" :href="task.link" target="_blank" class="text-primary">
                          {{ task.link }}
                        </a>

                        <!-- <div class="d-flex  justify-content-between align-items-center"> -->

                        <!-- How To Dropdown -->
                        <div class="dropdown ms-auto">
                          <button class="dropbtn " @click="toggleDropdown('methods')">
                            How to ?
                          </button>

                          <!-- Level 1 -->
                          <ul v-if="openDropdown === 'methods'" class="dropdown-content">
                            <li>
                              <!-- Methods -->
                              <a href="#" @click.prevent="toggleSubmenu('methods-sub')">
                                <span class="color m-auto">
                                  <i class="bi bi-file-earmark-ruled p-1"></i>
                                  Methods
                                </span>
                                <span class="color">{{ openSubmenu === 'methods-sub'
                                  ? '▲' : '▼' }}</span>
                              </a>

                              <!-- Level 2 -->
                              <ul v-if="openSubmenu === 'methods-sub'" class="submenu-content">
                                <li class="ps-3 small ">Design and Development</li>

                                <!-- Tools -->
                                <li class=" ">
                                  <a href="#" @click.prevent="toggleSubmenu('methods-action-sub')">
                                    <span class="color">
                                      <i class="bi bi-tools p-1"></i>
                                      Tools
                                    </span>
                                    <span class="color">{{ openActionSubmenu ?
                                      '▲' : '▼' }}</span>
                                  </a>

                                  <!-- Level 3 -->
                                  <ul v-if="openActionSubmenu" class="submenu-content">
                                    <li class="ps-3 pe-3">
                                     <span  class="small"> Develop and create security tools,
                                      processes, and documentation</span>
                                    </li>
                                    <!-- Action -->
                                    <li>
                                      <a href="#" @click.prevent="toggleSubmenu('methods-action-sub')">
                                        <span class="color">
                                          <i class="bi bi-check2-square p-1"></i>
                                          Action
                                        </span>
                                        <span class="color">{{ openActionSubmenu ? '▲' : '▼' }}</span>
                                      </a>

                                      <!-- Action Submenu -->
                                      <ul v-if="openActionSubmenu" class="submenu-content">
                                        <li>
                                          <a href="#"
                                            @click.prevent="openDoc('https://docs.google.com/document/d/YOUR_DOC_ID/pub?embedded=true')">
                                            <span class="">
                                              Let’s Work Now
                                                <i class="bi bi-box-arrow-up-right"></i>
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <!-- </div> -->
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>



          <!-- Google Docs Side Panel -->
          <div v-if="selectedDoc" class="doc-panel" :class="{ fullscreen: isFullscreen }">
            <!-- Panel Header -->
            <div class="doc-header">
              <!-- Flip Button -->
              <button class="doc-btn" @click="toggleFullscreen" title="Toggle Fullscreen">
                <i class="bi" :class="isFullscreen ? 'bi-fullscreen-exit' : 'bi-arrows-fullscreen'"></i>
              </button>

              <!-- Close Button -->
              <button class="doc-btn" @click="selectedDoc = null" title="Close">
                <i class="bi bi-x-circle-fill"></i>
              </button>
            </div>

            <!-- Embedded Google Doc -->
            <iframe :src="selectedDoc" width="100%" height="100%" style="border:none; flex:1;"></iframe>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Starmedia from "@/components/Starmedia.vue";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  name: "Policyreview3View",
  components: {
    Starmedia,
  },
  data() {
    return {
      openDropdown: null as string | null,
      openSubmenu: null as string | null,
      openActionSubmenu: false,
      selectedDoc: null as string | null, // Google Doc link
      isFullscreen: false
    };
  },
  props: {
    policy: {
      type: Object,
      required: true,
      default: () => ({
        title: "Policy review",
        deadline: "23rd July, 2025",
        subtasks: [{
          name: "Subtask name",
          deadline: "23rd July, 2025",
          instructions: `One morning, when Gregor Samsa woke from troubled dreams,
                         he found himself transformed in his bed into a horrible vermin.
                          He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly
                        domed and divided by arches into stiff sections. The bedding
                         was hardly able to cover it and seemed ready to slide off any moment.
                         His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                         "What's happened to me?" he thought.
                         It wasn't a dream. His room, a proper human room although a little too small,
                          lay peacefully between its four familiar walls. A collection of textile samples
                          lay spread out on the table - Samsa was a travelling salesman -
                           and above it there hung a picture that he had recently
                            cut out of an illustrated magazine and housed in a nice,
                            gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright,
                             raising a heavy fur muff that covered the whole of her lower arm towards the viewer.
                              Gregor then turned to look out the window at the dull weather. Drops
`,
          link: "https://grcmentor.ai/link",
        },
        {
          name: "Subtask name",
          deadline: "23rd July, 2025",
          instructions: `One morning, when Gregor Samsa woke from troubled dreams,
                         he found himself transformed in his bed into a horrible vermin.
                          He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly
                        domed and divided by arches into stiff sections. The bedding
                         was hardly able to cover it and seemed ready to slide off any moment.
                         His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                         "What's happened to me?" he thought.
                         It wasn't a dream. His room, a proper human room although a little too small,
                          lay peacefully between its four familiar walls. A collection of textile samples
                          lay spread out on the table - Samsa was a travelling salesman -
                           and above it there hung a picture that he had recently
                            cut out of an illustrated magazine and housed in a nice,
                            gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright,
                             raising a heavy fur muff that covered the whole of her lower arm towards the viewer.
                              Gregor then turned to look out the window at the dull weather. Drops
`,
          link: "https://grcmentor.ai/link",
        },
        {
          name: "Subtask name",
          deadline: "23rd July, 2025",
          instructions: `One morning, when Gregor Samsa woke from troubled dreams,
                         he found himself transformed in his bed into a horrible vermin.
                          He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly
                        domed and divided by arches into stiff sections. The bedding
                         was hardly able to cover it and seemed ready to slide off any moment.
                         His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                         "What's happened to me?" he thought.
                         It wasn't a dream. His room, a proper human room although a little too small,
                          lay peacefully between its four familiar walls. A collection of textile samples
                          lay spread out on the table - Samsa was a travelling salesman -
                           and above it there hung a picture that he had recently
                            cut out of an illustrated magazine and housed in a nice,
                            gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright,
                             raising a heavy fur muff that covered the whole of her lower arm towards the viewer.
                              Gregor then turned to look out the window at the dull weather. Drops
`,
          link: "https://grcmentor.ai/link",

        }, {
          name: "Subtask name",
          deadline: "23rd July, 2025",
          instructions: `One morning, when Gregor Samsa woke from troubled dreams,
                         he found himself transformed in his bed into a horrible vermin.
                          He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly
                        domed and divided by arches into stiff sections. The bedding
                         was hardly able to cover it and seemed ready to slide off any moment.
                         His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                         "What's happened to me?" he thought.
                         It wasn't a dream. His room, a proper human room although a little too small,
                          lay peacefully between its four familiar walls. A collection of textile samples
                          lay spread out on the table - Samsa was a travelling salesman -
                           and above it there hung a picture that he had recently
                            cut out of an illustrated magazine and housed in a nice,
                            gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright,
                             raising a heavy fur muff that covered the whole of her lower arm towards the viewer.
                              Gregor then turned to look out the window at the dull weather. Drops
`,
          link: "https://grcmentor.ai/link",

        }, {
          name: "Subtask name",
          deadline: "23rd July, 2025",
          instructions: `One morning, when Gregor Samsa woke from troubled dreams,
                         he found himself transformed in his bed into a horrible vermin.
                          He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly
                        domed and divided by arches into stiff sections. The bedding
                         was hardly able to cover it and seemed ready to slide off any moment.
                         His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                         "What's happened to me?" he thought.
                         It wasn't a dream. His room, a proper human room although a little too small,
                          lay peacefully between its four familiar walls. A collection of textile samples
                          lay spread out on the table - Samsa was a travelling salesman -
                           and above it there hung a picture that he had recently
                            cut out of an illustrated magazine and housed in a nice,
                            gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright,
                             raising a heavy fur muff that covered the whole of her lower arm towards the viewer.
                              Gregor then turned to look out the window at the dull weather. Drops
`,
          link: "https://grcmentor.ai/link",

        }, {
          name: "Subtask name",
          deadline: "23rd July, 2025",
          instructions: `One morning, when Gregor Samsa woke from troubled dreams,
                         he found himself transformed in his bed into a horrible vermin.
                          He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly
                        domed and divided by arches into stiff sections. The bedding
                         was hardly able to cover it and seemed ready to slide off any moment.
                         His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                         "What's happened to me?" he thought.
                         It wasn't a dream. His room, a proper human room although a little too small,
                          lay peacefully between its four familiar walls. A collection of textile samples
                          lay spread out on the table - Samsa was a travelling salesman -
                           and above it there hung a picture that he had recently
                            cut out of an illustrated magazine and housed in a nice,
                            gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright,
                             raising a heavy fur muff that covered the whole of her lower arm towards the viewer.
                              Gregor then turned to look out the window at the dull weather. Drops
`,
          link: "https://grcmentor.ai/link",

        }, {
          name: "Subtask name",
          deadline: "23rd July, 2025",
          instructions: `One morning, when Gregor Samsa woke from troubled dreams,
                         he found himself transformed in his bed into a horrible vermin.
                          He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly
                        domed and divided by arches into stiff sections. The bedding
                         was hardly able to cover it and seemed ready to slide off any moment.
                         His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                         "What's happened to me?" he thought.
                         It wasn't a dream. His room, a proper human room although a little too small,
                          lay peacefully between its four familiar walls. A collection of textile samples
                          lay spread out on the table - Samsa was a travelling salesman -
                           and above it there hung a picture that he had recently
                            cut out of an illustrated magazine and housed in a nice,
                            gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright,
                             raising a heavy fur muff that covered the whole of her lower arm towards the viewer.
                              Gregor then turned to look out the window at the dull weather. Drops
`,
          link: "https://grcmentor.ai/link",

        }, {
          name: "Subtask name",
          deadline: "23rd July, 2025",
          instructions: `One morning, when Gregor Samsa woke from troubled dreams,
                         he found himself transformed in his bed into a horrible vermin.
                          He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly
                        domed and divided by arches into stiff sections. The bedding
                         was hardly able to cover it and seemed ready to slide off any moment.
                         His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                         "What's happened to me?" he thought.
                         It wasn't a dream. His room, a proper human room although a little too small,
                          lay peacefully between its four familiar walls. A collection of textile samples
                          lay spread out on the table - Samsa was a travelling salesman -
                           and above it there hung a picture that he had recently
                            cut out of an illustrated magazine and housed in a nice,
                            gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright,
                             raising a heavy fur muff that covered the whole of her lower arm towards the viewer.
                              Gregor then turned to look out the window at the dull weather. Drops
`,
          link: "https://grcmentor.ai/link",

        }, {
          name: "Subtask name",
          deadline: "23rd July, 2025",
          instructions: `One morning, when Gregor Samsa woke from troubled dreams,
                         he found himself transformed in his bed into a horrible vermin.
                          He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly
                        domed and divided by arches into stiff sections. The bedding
                         was hardly able to cover it and seemed ready to slide off any moment.
                         His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                         "What's happened to me?" he thought.
                         It wasn't a dream. His room, a proper human room although a little too small,
                          lay peacefully between its four familiar walls. A collection of textile samples
                          lay spread out on the table - Samsa was a travelling salesman -
                           and above it there hung a picture that he had recently
                            cut out of an illustrated magazine and housed in a nice,
                            gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright,
                             raising a heavy fur muff that covered the whole of her lower arm towards the viewer.
                              Gregor then turned to look out the window at the dull weather. Drops
`,
          link: "https://grcmentor.ai/link",

        }, {
          name: "Subtask name",
          deadline: "23rd July, 2025",
          instructions: `One morning, when Gregor Samsa woke from troubled dreams,
                         he found himself transformed in his bed into a horrible vermin.
                          He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly
                        domed and divided by arches into stiff sections. The bedding
                         was hardly able to cover it and seemed ready to slide off any moment.
                         His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                         "What's happened to me?" he thought.
                         It wasn't a dream. His room, a proper human room although a little too small,
                          lay peacefully between its four familiar walls. A collection of textile samples
                          lay spread out on the table - Samsa was a travelling salesman -
                           and above it there hung a picture that he had recently
                            cut out of an illustrated magazine and housed in a nice,
                            gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright,
                             raising a heavy fur muff that covered the whole of her lower arm towards the viewer.
                              Gregor then turned to look out the window at the dull weather. Drops
`,
          link: "https://grcmentor.ai/link",

        },
        ],
      }),
    },
  },
  methods: {
    selectOption(task: any, content: string) {
      task.selectedContent = content;
    },
    toggleDropdown(name: string) {
      this.openDropdown = this.openDropdown === name ? null : name;
      this.openSubmenu = null;
    },
    toggleSubmenu(name: string) {
      if (name === 'methods-action-sub') {
        this.openActionSubmenu = !this.openActionSubmenu;
      } else {
        this.openSubmenu = this.openSubmenu === name ? null : name;
        this.openActionSubmenu = false;
      }
    },
    openDoc(link: string) {
      this.selectedDoc = link;
    },


    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen;
    },

  },

};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.color {
  color: #0096D6;
  font-size: 14px;
  cursor: pointer;
}

.icon-section {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #87d3f3;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #0096D6;
  justify-content: center;
}

.media-text {
  color: #0096D6;
}

.policy-page {
  background: #ffffff;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  padding: 0;
}

h2 {
  font-size: 24px;
}

.paratext {
  font-size: 13px;
  line-height: 22px;
  color: #000000DE;
}

a {
  text-decoration: none;
}

/* Dropdown */
.dropdown {
  position: relative;
  display: inline-block;
  margin-right: 20rem;
}

.dropbtn {
  background-color: transparent;
  /* background-color: #0096D6; */
  color: #0096D6;
  /* color: white; */
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

}

.dropdown-content {
  position: absolute;
  background-color: #ffffff;
  min-width: 220px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin-top: 5px;
  padding: 0;
  z-index: 10;
}

.dropdown-content li {
  list-style: none;
}

.dropdown-content li a {
  display: block;

  padding: 10px 14px;
  text-decoration: none;
  color: #333;
  font-size: 13px;
}

.dropdown-content li a:hover {
  background-color: #f1f1f1;
}

.submenu-content {
  background: #fafafa;
  /* border-left: 3px solid #0096D6; */
  align-items: center;
  padding-left: 1px;
  justify-content: space-evenly;

}

.submenu-content li a {
  padding-left: 24px;
}

/* Right-side Google Doc panel */
.doc-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0px 8px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  display: flex;
  flex-direction: column;
}

.close-panel {
  align-self: flex-end;
  background: #0096D6;
  color: white;
  border: none;
  padding: 6px 10px;
  margin: 8px;
  border-radius: 4px;
  cursor: pointer;
}

.doc-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  /* Default half width */
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  z-index: 2000;
  transition: all 0.3s ease-in-out;
}

.doc-panel.fullscreen {
  width: 100%;
  /* Expand fullscreen */
}

.doc-header {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  background: #f9fafb;
}

.doc-btn {
  background: transparent;
  border: none;
  font-size: 20px;
  color: #0096d6;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.doc-btn:hover {
  transform: scale(1.2);
  color: #e63946;
}
</style>
