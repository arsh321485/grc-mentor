<template>
    <main>
        <div class="container-fluid row">
            <div class="col-2 col-md-2">
                <Starmedia />
            </div>
            <div class="col-10 col-md-10">
                <!-- Main Policy Page -->
                <div class="policy-page flex-grow-1">
                    <!-- Header -->
                    <div class="d-flex justify-content-between align-items-start p-4 ">
                        <div>
                            <div class="fw-semibold mb-5  mt-2 d-flex align-items-center">
                                <div class=" icon-section"> <i class="bi bi-file-earmark-ruled"></i></div>
                                <div class="fw-semibold   ms-2 media-text">Media </div>
                            </div>
                            <div class="d-flex">
                                <h2 class="fw-semibold mb-1">{{ policy.title }}</h2>
                                <small class="text-muted deadlinebox ">Deadline: {{ policy.deadline }}</small>
                                <div class="ms-5 d-flex gap-3 ">
                                    <span class="color"> <i class="bi bi-tools p-2"></i>Tools</span>
                                    <span class="color"> <i class="bi bi-file-earmark-ruled"></i>Methods</span>
                                    <span class="color"> <i class="bi bi-play-circle-fill"></i>Resousrces</span>
                                </div>
                            </div>
                        </div>

                        <button class="btn btn-link text-decoration-none" @click="$emit('close')"><i
                                class="bi bi-x-circle-fill" style="color: #0096D6;"></i> Close</button>
                    </div>

                    <div class="text-mutedm ms-5"><small>Subtask(11)</small></div>


                    <!-- Subtasks -->
                    <div class="p-4">
                        <!-- <h6 class="fw-semibold mb-3">Subtasks ({{ policy.subtasks.length }})</h6> -->

                        <!-- First subtask expanded -->
                        <div class="mb-4  rounded p-3">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h6 class="fw-semibold">• {{ policy.subtasks[0].name }}</h6>
                                <!-- <small class="text-muted">Deadline: {{ policy.subtasks[0].deadline }}</small> -->
                            </div>
                            <div>
                                <p class="mb-2"><strong>Instructions for the subtask:</strong></p>
                                <p class="text-muted" style="white-space: pre-line;">{{ policy.subtasks[0].instructions
                                    }}</p>
                                <a :href="policy.subtasks[0].link" target="_blank">{{ policy.subtasks[0].link }}</a>
                            </div>

                        </div>

                        <!-- Remaining subtasks collapsible -->
                        <div class="p-4">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item" v-for="(task, index) in policy.subtasks" :key="index">
                                    <h2 class="accordion-header">
                                        <button
                                            class="accordion-button collapsed d-flex justify-content-between align-items-center"
                                            type="button" data-bs-toggle="collapse"
                                            :data-bs-target="'#flush-collapse' + index" aria-expanded="false"
                                            :aria-controls="'flush-collapse' + index">
                                            <span>
                                                <i class="bi bi-check-circle-fill" style="color: #0096D6;"></i>
                                                {{ task.name }}
                                            </span>
                                            <small class="text-muted deadlinebox1">
                                                Deadline: {{ task.deadline }}
                                            </small>
                                        </button>
                                    </h2>
                                    <div :id="'flush-collapse' + index" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <p class="mb-2"><strong>Instructions:</strong></p>
                                            <p class="text-muted paratext">{{ task.instructions }}</p>
                                            <a v-if="task.link" :href="task.link" target="_blank">{{ task.link }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>



<script>
import Starmedia from "@/components/Starmedia.vue";

export default {
    name: "Policyreview2View",
    components: { Starmedia },
    props: {
        policy: {
            type: Object,
            required: true,
            default: () => ({
                title: "Policy review",
                deadline: "23rd July, 2025",
                subtasks: [
                    {
                        name: "Subtask name",
                        deadline: "23rd July, 2025",
                        instructions: `
                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops
                        `,
                        link: "Checking subtask status. Please wait...",
                    },
                    { name: "Subtask name", deadline: "23rd July, 2025", instructions: "More details..." },
                    { name: "Subtask name", deadline: "23rd July, 2025", instructions: "More details..." },
                    { name: "Subtask name", deadline: "23rd July, 2025", instructions: "More details..." },
                ],
            }),
        },
    },
    data() {
        return {
            openTask: null,

        };
    },
    methods: {
        toggleTask(index) {
            this.openTask = this.openTask === index ? null : index;
        },
    },
};
</script>

<style scoped>
.custom-icon a {
    color: #0096D6;


}

.color {
    color: #0096D6;
}


.icon-section {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #87d3f3;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #0096D6;
    margin-top: 18px;
    padding: 5px;
    justify-content: center;
}

.media-text {
    margin-top: 18px;
    color: #0096D6;
}

.deadlinebox {

    margin-left: 55em;
    padding: 8px;
    font-size: 14px;

}

.deadlinebox1 {
    margin-left: 80em;
    padding: 8px;
    font-size: 14px;
}

.policy-page {
    width: 1124px;
    min-height: 100vh;
    background: #ffffff;
    /* box-shadow: -4px 0px 25px rgba(0, 0, 0, 0.08);
    border-radius: 24px 0px 0px 24px; */
    font-family: "Inter", sans-serif;
}

h2 {
    font-size: 24px;
}

.icon-color {
    color: #0096D6;
    width: 16px;
    height: 16px;

}

.paratext {
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 13px;
    color: #000000DE;
    line-height: 24px;
    letter-spacing: -0.8%;
}

a {
    text-decoration: none;
}
</style>