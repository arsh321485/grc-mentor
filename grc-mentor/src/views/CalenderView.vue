<template>
    <main>
        <div class="container-fluid row">
            <!-- Sidebar -->
            <div class="col-2 col-md-2">
                <Sidebargrc2 />
            </div>

            <!-- Calendar Section -->
            <div class="col-10 col-md-10 bg-white">
                <!-- Header -->
                <div class=" mb-4 ps-5 pt-5">
                    <h2 class="calendar-title">Calendar</h2>


                </div>

                <div class="d-flex align-items-center ps-5 justify-content-between">
                    <!-- Left Section: Month Selector + Today Button -->
                    <div class="d-flex align-items-center gap-3">
                        <!-- Month Selector -->
                        <select class="form-select month-select" v-model="selectedMonth">
                            <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                        </select>

                        <!-- Today Button -->
                        <button class="btn btn-today" @click="goToToday">Today</button>
                    </div>

                    <!-- Right Section: Search Bar -->
                    <div class="input-group search-box">
                        <input type="text" class="form-control" v-model="searchQuery" placeholder="Search for tasks" />
                    </div>
                </div>


                <!-- Weekday Headers -->
                <div class="row text-center week-header pt-5">
                    <div v-for="(day, i) in weekDays" :key="i" class="col">
                        {{ day }}
                    </div>
                </div>

                <!-- Calendar Grid -->
                <div class="row calendar-grid ps-3 pt-5">
                    <div v-for="(day, index) in 7" :key="index" class="col day-column position-relative">
                        <!-- Tasks on this day -->
                        <div v-for="(task, tIndex) in tasks.filter(t => t.day === index)" :key="tIndex"
                            class="task-card" :style="{
                                backgroundColor: task.color,
                                borderLeft: '4px solid ' + task.borderColor,
                                color: task.textColor,
                                top: task.top + 'px'
                            }">
                            <strong>{{ task.title }}</strong>
                            <p class="mb-0">Started {{ task.date }}</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </main>
</template>

<script lang="ts">
import Sidebargrc2 from '@/components/Sidebargrc2.vue';

export default {
    name: "CalenderView",
    components: { Sidebargrc2 },
    data() {
        return {
            selectedMonth: "February 2025",
            months: [
                "January 2025",
                "February 2025",
                "March 2025",
                "April 2025",
                "May 2025",
                "June 2025",
                "July 2025",
            ],
            searchQuery: "",
            weekDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            tasks: [
                { day: 0, title: "Task 1 deadline", date: "11th July", color: "#ECFFE6", borderColor: "#196900", textColor: "#196900", top: 150 },
                { day: 1, title: "Task 1 deadline", date: "11th July", color: "#FFF6E6", borderColor: "#925C00", textColor: "#925C00", top: 30 },
                { day: 1, title: "Task 1 deadline", date: "11th July", color: "#ECFFE6", borderColor: "#196900", textColor: "#196900", top: 110 },
                { day: 2, title: "Task 4 deadline", date: "11th July", color: "#E6F9FF", borderColor: "#007193", textColor: "#007193", top: 200 },
                { day: 3, title: "Task 4 deadline", date: "11th July", color: "#E6F9FF", borderColor: "#007193", textColor: "#007193", top: 100 },
                { day: 4, title: "Task 4 deadline", date: "11th July", color: "#E6F9FF", borderColor: "#007193", textColor: "#007193", top: 280 },
                { day: 5, title: "Task 4 deadline", date: "11th July", color: "#E6F9FF", borderColor: "#007193", textColor: "#007193", top: 180 },
                { day: 6, title: "Task 4 deadline", date: "11th July", color: "#E6F9FF", borderColor: "#007193", textColor: "#007193", top: 370 },
            ],

        };
    },
    methods: {
        goToToday() {
            this.selectedMonth = "February 2025";
        },
    },
};
</script>

<style scoped>
/* Header */
.calendar-title {
    font-size: 40px;
    font-weight: 500;
    color: #000000DE;
}

/* Month & Today Button */
.btn-today {
    font-size: 14px;
    color: #000000;
    font-weight: 500;
}

.month-select {
    width: 160px;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    border-radius: 6px;
    border: 2px solid #0000000F;
}

/* Search Box */
.search-box {
    border: 1px solid #00000029;
    border-radius: 30px;
    max-width: 300px;
    background-color: #0000000F;
}

.search-box input {
    border-radius: 50px;
    padding-left: 15px;
}

/* Weekday Headers */
.week-header {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
}

/* Calendar Grid */
.calendar-grid {
    border-top: 1px solid #0000001F;
    min-height: 500px;
}

.day-column {
    border-right: 1px solid #0000001F;
    min-height: 500px;
    padding: 10px;
}

.day-column:last-child {
    border-right: none;
}

/* Task Cards */
.task-card {
    position: absolute;
    left: 10px;
    right: 10px;
    padding: 8px 10px;
    border-radius: 6px;
    font-size: 14px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
    min-width: 164px;
}

.task-card strong {
    display: block;
    font-weight: 600;
    color: #000;
}

.task-card p {
    font-size: 13px;
    color: #555;
    margin: 0;
}

/* Responsive Media Queries */
@media (max-width: 1200px) {
    .calendar-title {
        font-size: 36px;
        padding-left: 40px;
    }
    .month-select {
        width: 140px;
        font-size: 13px;
    }
    .btn-today {
        font-size: 13px;
    }
    .search-box {
        max-width: 250px;
    }
    .week-header {
        font-size: 14px;
    }
    .calendar-grid {
        min-height: 450px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .task-card {
        font-size: 13px;
        min-width: 140px;
    }
}

@media (max-width: 992px) {
    .calendar-title {
        font-size: 32px;
        padding-left: 30px;
    }
    .month-select {
        width: 120px;
        font-size: 12px;
    }
    .btn-today {
        font-size: 12px;
        padding: 4px 8px;
    }
    .search-box {
        max-width: 200px;
    }
    .week-header {
        font-size: 13px;
    }
    .calendar-grid {
        min-height: 400px;
    }
    .task-card {
        font-size: 12px;
        min-width: 120px;
    }
}

@media (max-width: 768px) {
    .calendar-title {
        font-size: 28px;
        padding-left: 20px;
    }
    .month-select {
        width: 100px;
        font-size: 12px;
    }
    .btn-today {
        font-size: 12px;
        padding: 3px 6px;
    }
    .search-box {
        max-width: 160px;
    }
    .week-header {
        font-size: 12px;
    }
    .calendar-grid {
        min-height: 350px;
    }
    .task-card {
        font-size: 11px;
        min-width: 100px;
    }
}

@media (max-width: 576px) {
    .calendar-title {
        font-size: 24px;
        padding-left: 10px;
    }
    .month-select {
        width: 90px;
        font-size: 11px;
    }
    .btn-today {
        font-size: 11px;
        padding: 2px 4px;
    }
    .search-box {
        max-width: 140px;
    }
    .week-header {
        font-size: 11px;
    }
    .calendar-grid {
        min-height: 300px;
    }
    .task-card {
        font-size: 10px;
        min-width: 90px;
    }
}

</style>
