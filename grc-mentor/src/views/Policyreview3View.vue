<template>
<main>
    <div class="container-fluid row">
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

                        <!-- Title + Deadline + Links -->
                        <div class="d-flex flex-wrap align-items-center gap-3 m-lg-5">
              <h2 class="fw-semibold mb-1 me-3">{{ policy.title }}</h2>
              <small class="text-muted">Deadline: {{ policy.deadline }}</small>
              <div class="d-flex flex-wrap gap-3 ms-md-5 mt-2 mt-md-0">
                <span class="color">
                  <i class="bi bi-file-earmark-ruled p-1"></i> Methods
                </span>
                <span class="color">
                  <i class="bi bi-tools p-1"></i> Tools
                </span>
                <span class="color">
                  <i class="bi bi-play-circle-fill p-1"></i> Resources
                </span>
              </div>
            </div>
                    </div>

                    <button class="btn  text-decoration-none p-0 mt-2" @click="$emit('close')" style="color: #0096D6;">
                        <i class="bi bi-x-circle-fill" style="color: #0096D6; font-size: 20px"></i>
                        Close
                    </button>
                </div>

                <!-- Subtasks count -->
                <div class="text-muted ms-4 mb-3">
                    Subtasks ({{ policy.subtasks.length }})

                <!-- Subtasks Accordion -->
                <div class="p-4">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item" v-for="(task, index) in policy.subtasks" :key="index">
                         <h2 class="accordion-header">
  <button
    class="accordion-button collapsed "
   
    type="button"
    data-bs-toggle="collapse"
    :data-bs-target="'#flush-collapse' + index"
    aria-expanded="false"
    :aria-controls="'flush-collapse' + index"
  >
    <!-- Flex container -->
    <span class="w-100 d-flex justify-content-between align-items-center">
      <!-- Left side -->
      <h6 class="fw-semibold mb-0">• {{ task.name }}</h6>

      <!-- Right side -->
      <small class="text-muted pe-3">Deadline: {{ task.deadline }}</small>
    </span>
  </button>
</h2>



                            <!-- Accordion Body -->
                            <div :id="'flush-collapse' + index" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                 

                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <!-- <h5 class="fw-semibold mb-0">{{ task.name }}</h5> -->
                                    <!-- Instructions -->
                                    <p class="fw-semibold mb-2">Instructions for the subtask:</p>
                                         <!-- Deadline + Tools -->
                                    <div class="d-flex  gap-3 mb-3">
                                        <small class="text-muted">Deadline: {{ task.deadline }}</small>
                                        <span class="color">
                                            <i class="bi bi-file-earmark-ruled p-1"></i> Methods
                                        </span>
                                        <span class="color">
                                            <i class="bi bi-tools p-1"></i> Tools
                                        </span>
                                        <span class="color">
                                            <i class="bi bi-play-circle-fill p-1"></i> Resources
                                        </span>
                                    </div>
                                    </div>
                                    <p class="text-muted paratext">{{ task.instructions }}</p>

                                    

                                    <!-- Link -->
                                    <a v-if="task.link" :href="task.link" target="_blank" class="d-block mt-2 text-primary">
                                        {{ task.link }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Subtasks -->
            </div>
        </div>
        <!-- col-10 -->
        </div>
    </div>
</main>
</template>

<script lang="ts">
import Starmedia from "@/components/Starmedia.vue";

export default {
    name: "Policyreview3View",
    components: {
        Starmedia,
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
};
</script>

<style scoped>
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
</style>
