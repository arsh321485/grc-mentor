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

              <!-- Title + Deadline -->
              <div class="d-flex flex-wrap align-items-center gap-3">
                <h2 class="fw-semibold mb-1 me-3">{{ policy.title }}</h2>
                <small class="text-muted">Deadline: {{ policy.deadline }}</small>
              </div>
            </div>

            <button
              class="btn  text-decoration-none p-0 mt-2"
              @click="$emit('close')"
               style="color: #0096D6;"
            >
              <i class="bi bi-x-circle-fill" style="color: #0096D6; font-size: 20px"></i>
              Close
            </button>
          </div>

        
          <!-- Subtasks count -->
                <div class="text-muted ms-4 mb-3">
                    <span class="fs-6">Subtasks</span> ({{ policy.subtasks.length }})
                </div>

          <!-- Subtasks Accordion -->
          <div class="p-4">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div
                class="accordion-item"
                v-for="(task, index) in policy.subtasks"
                :key="index"
              >
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#flush-collapse' + index"
                     :aria-expanded="index === 0 ? 'true' : 'false'"
                    :aria-controls="'flush-collapse' + index"
                  >
                    <span
                      class="w-100 d-flex justify-content-between align-items-center"
                    >
                      <!-- Left side -->
                      <span class="d-flex align-items-center gap-2">
                        <i
                          class="bi bi-check-circle-fill"
                          style="color: #0096D6; font-size: 16px"
                        ></i>
                        <h6 class="fw-semibold mb-0">{{ task.name }}</h6>
                      </span>

                      <!-- Right side -->
                      <small class="text-muted pe-3">Deadline: {{ task.deadline }}</small>
                    </span>
                  </button>
                </h2>

                <!-- Accordion Body -->
                <div
                  :id="'flush-collapse' + index"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <!-- Instructions -->
                    <p class="fw-semibold mb-2">Instructions for the subtask:</p>
                    <p class="text-muted paratext">{{ task.instructions }}</p>

                    <!-- Link -->
                    <a
                      v-if="task.link"
                      :href="task.link"
                      target="_blank"
                      class="d-block mt-2 text-primary"
                    >
                      {{ task.link }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Status Box -->
          <div class="status-box text-center  p-4">
            <h6 class="fw-semibold mb-2">Checking task status...</h6>
            <p class="text-muted mb-0">
              Your email was sent! The task has been marked as complete.
            </p>
          </div>
        </div>
      </div>
      <!-- col-10 -->
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
        subtasks: [
          {
            name: "Subtask name",
            deadline: "23rd July, 2025",
            instructions: `One morning, when Gregor Samsa woke from troubled dreams,
            he found himself transformed in his bed into a horrible vermin...`,
            link: "https://grcmentor.ai/link",
          },
            {
            name: "Subtask name",
            deadline: "23rd July, 2025",
            instructions: `One morning, when Gregor Samsa woke from troubled dreams,
            he found himself transformed in his bed into a horrible vermin...`,
            link: "https://grcmentor.ai/link",
          },
           {
            name: "Subtask name",
            deadline: "23rd July, 2025",
            instructions: `One morning, when Gregor Samsa woke from troubled dreams,
            he found himself transformed in his bed into a horrible vermin...`,
            link: "https://grcmentor.ai/link",
          },
            {
            name: "Subtask name",
            deadline: "23rd July, 2025",
            instructions: `One morning, when Gregor Samsa woke from troubled dreams,
            he found himself transformed in his bed into a horrible vermin...`,
            link: "https://grcmentor.ai/link",
          },
            {
            name: "Subtask name",
            deadline: "23rd July, 2025",
            instructions: `One morning, when Gregor Samsa woke from troubled dreams,
            he found himself transformed in his bed into a horrible vermin...`,
            link: "https://grcmentor.ai/link",
          },
            {
            name: "Subtask name",
            deadline: "23rd July, 2025",
            instructions: `One morning, when Gregor Samsa woke from troubled dreams,
            he found himself transformed in his bed into a horrible vermin...`,
            link: "https://grcmentor.ai/link",
          },
            {
            name: "Subtask name",
            deadline: "23rd July, 2025",
            instructions: `One morning, when Gregor Samsa woke from troubled dreams,
            he found himself transformed in his bed into a horrible vermin...`,
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

/* Status box */
.status-box {
  max-width: 800px;
  height: 120px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
}
</style>
