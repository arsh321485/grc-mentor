<template>
  <div class="task-card p-3 rounded shadow-sm mb-3" style="background: #f9f9f9;">
    <!-- Project Code & Arrow -->
    <div class="d-flex">
      <div class="d-flex align-items-center mb-2">
        <i class="bi bi-journal-text text-warning me-2"></i>
        <span class="small fw-semibold text-muted">{{ task.projectCode  }}</span>
      </div>
      <router-link to="/policyreview2" class="text-decoration-none ms-auto">
        <i class="bi bi-arrow-right fs-5 icon-grc"></i>
      </router-link>
    </div>

    <!-- Task Title -->
    <span class="fw-semibold text-dark mt-3 mb-3 task-title" title="Task details">
      {{ task.title }}
    </span>
    <p class="text-muted small">{{ task.subtitle }}</p>

    <!-- Bottom Row -->
    <div class="d-flex align-items-center gap-3 flex-wrap">
      <!-- Progress Badge -->
      <button
        class="badge rounded-pill border-0"
        :class="{
          'bg-secondary text-white': task.progress === 'Not started',
          'bg-warning text-white': task.progress === 'In progress',
          'bg-success text-white': task.progress === 'Completed'
        }"

      >
        <i class="bi bi-circle-half me-1"></i>{{ task.progress || "Not started" }}
      </button>

      <!-- Due Date -->
      <div class="d-flex align-items-center text-muted small">
        <i class="bi bi-calendar-event me-1"></i>
        {{ task.deadline }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TaskCard",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>
