<!-- <template>
  <main class="calendar-static-page">
    <div class="container row g-0">

    </div>
  </main>
</template> -->
<template>
  <main class="mentorship-page">
    <div class="container-fluid row g-0">
      <!-- Sidebar -->
      <div class="col-2 col-md-2 sidebar-col">
          <Sidebargrc2 />
      </div>

      <!-- Main -->
      <div class="col-10 col-md-10 main-col">
        <!-- Banner -->
        <div class="banner mb-5">
          <div class="banner-left">
            <h6 class="banner-title">Calendar</h6>
            <p class="banner-sub">
           Your Calendar
            </p>
          </div>
        </div>

     <!-- Section -->
        <section>
          <div class="">

        <!-- Toolbar top row: Prev / Today / Next / Header -->
        <div class="toolbar">
          <div class="left">
            <button class="icon-btn" @click="goPrev" aria-label="Previous">‹</button>
            <button class="today-btn" @click="goToday">Today</button>
            <button class="icon-btn" @click="goNext" aria-label="Next">›</button>
            <div class="header-label">{{ headerLabel }}</div>
          </div>

          <!-- right area: main action buttons -->
          <div class="right">
            <!-- view button group (new) -->
            <div class="view-buttons" role="tablist" aria-label="Calendar views">
              <button
                :class="['vb', view === 'day' ? 'active' : '']"
                @click="setView('day')"
                title="Day"
                role="tab"
                :aria-selected="view === 'day'"
              >
                <svg class="vb-icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="7" y="8" width="3" height="3" fill="currentColor"/></svg>
                <span class="vb-label">Day</span>
              </button>

              <button
                :class="['vb', view === 'workWeek' ? 'active' : '']"
                @click="setView('workWeek')"
                title="Work week"
                role="tab"
                :aria-selected="view === 'workWeek'"
              >
                <svg class="vb-icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="6" y="8" width="3" height="3" fill="currentColor"/><rect x="11" y="8" width="3" height="3" fill="currentColor"/><rect x="16" y="8" width="3" height="3" fill="currentColor"/></svg>
                <span class="vb-label">Work Week</span>
              </button>

              <button
                :class="['vb', view === 'week' ? 'active' : '']"
                @click="setView('week')"
                title="Week"
                role="tab"
                :aria-selected="view === 'week'"
              >
                <svg class="vb-icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="6" y="8" width="3" height="3" fill="currentColor"/><rect x="11" y="8" width="3" height="3" fill="currentColor"/><rect x="16" y="8" width="3" height="3" fill="currentColor"/></svg>
                <span class="vb-label">Week</span>
              </button>

              <button
                :class="['vb', view === 'month' ? 'active' : '']"
                @click="setView('month')"
                title="Month"
                role="tab"
                :aria-selected="view === 'month'"
              >
                <svg class="vb-icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="7" y="7" width="3" height="3" fill="currentColor"/><rect x="14" y="7" width="3" height="3" fill="currentColor"/></svg>
                <span class="vb-label">Month</span>
              </button>
            </div>

            <!-- legacy dropdown + New button (kept for convenience) -->
            <div class="view-dropdown">
              <button class="view-btn" @click="toggleViewMenu">
                <span>{{ viewLabel }}</span>
                <svg width="12" height="12" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="#333" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <ul v-if="viewMenuOpen" class="view-list">
                <li v-for="opt in viewOptions" :key="opt.key" @click="setView(opt.key)">{{ opt.label }}</li>
              </ul>
            </div>

          </div>
        </div>

        <!-- calendar area -->
        <div class="calendar-area">
          <!-- time grid (day/workWeek/week) -->
          <div v-if="isTimeGrid" class="time-grid" :style="{ '--hour-height': hourPx + 'px' }">
            <div class="time-axis">
              <div v-for="h in 24" :key="'label-'+h" class="time-label">{{ (h<10? '0'+h : h) }}:00</div>
            </div>

            <div class="columns">
              <div v-for="(d, idx) in visibleDays" :key="'col-'+idx" class="day-column">
                <div class="day-header">
                  <div class="day-number">{{ d.getDate() }}</div>
                  <div class="day-week">{{ weekdayShort(d) }}</div>
                </div>

                <div class="grid-lines">
                  <div v-for="h in 24" :key="'line-'+h" class="grid-line"></div>
                </div>

                <div class="events">
                  <div
                    v-for="ev in eventsForDay(d)"
                    :key="ev.id"
                    class="event-card"
                    :style="styleForEvent(ev, d)"
                    @click="openEvent(ev)"
                  >
                    <div class="ev-title">{{ ev.title }}</div>
                    <div class="ev-time">{{ formatTime(ev.start) }} - {{ formatTime(ev.end) }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- month grid -->
          <div v-else class="month-grid">
            <div class="month-header">
              <div v-for="wd in ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']" :key="wd" class="month-weekday">{{ wd }}</div>
            </div>

            <div class="month-body">
              <div v-for="(cell, cidx) in monthCells" :key="cidx" :class="['month-cell', { 'other-month': cell.other }]">
                <div class="cell-top">
                  <span class="cell-daynum">{{ cell.date.getDate() }}</span>
                </div>
                <div class="cell-events">
                  <div v-for="ev in eventsForMonthCell(cell.date)" :key="ev.id" class="cell-ev">
                    <span class="dot"></span>
                    <span class="cell-ev-title">{{ ev.title }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- calendar-area -->
      </div>

        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebargrc2 from '@/components/Sidebargrc2.vue';
import { ref, computed } from "vue";

type ViewKey = "day" | "workWeek" | "week" | "month";
type Ev = { id: string; title: string; start: string; end: string; };

export default {
  name: "CalendarStatic",
  components: { Sidebargrc2 },
  setup() {
    const current = ref(new Date());
    const view = ref<ViewKey>("week");
    const viewMenuOpen = ref(false);

    const viewOptions = [
      { key: "day", label: "Day" },
      { key: "workWeek", label: "Work week" },
      { key: "week", label: "Week" },
      { key: "month", label: "Month" },
    ];
    const viewLabel = computed(() => {
      const opt = viewOptions.find((o) => o.key === view.value)!;
      return opt ? opt.label : "Week";
    });

    function toggleViewMenu() { viewMenuOpen.value = !viewMenuOpen.value; }
    function setView(k: ViewKey) {
      view.value = k;
      viewMenuOpen.value = false;
    }

    const sampleEvents = ref<Ev[]>(generateSampleEvents());

    function generateSampleEvents(): Ev[] {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const mk = (dayOffset:number, hhmm:string, durMin = 30, title="Event") => {
        const d = new Date(today);
        d.setDate(today.getDate() + dayOffset);
        const [hh, mm] = hhmm.split(":").map((n) => parseInt(n, 10));
        d.setHours(hh, mm, 0, 0);
        const e = new Date(d.getTime() + durMin * 60000);
        return { id: `${title}-${dayOffset}-${hhmm}`, title, start: d.toISOString(), end: e.toISOString() } as Ev;
      };
      return [
        mk(0, "08:30", 30, "Daily huddle"),
        mk(1, "10:00", 60, "Vishaka - Ashish meet"),
        mk(2, "17:00", 30, "Daily update"),
        mk(3, "11:00", 60, "Client review"),
        mk(-1, "09:00", 30, "Standup"),
        mk(5, "14:00", 90, "Deep work"),
      ];
    }

    const hourPx = 48;
    const visibleDays = computed(() => {
      const c = new Date(current.value);
      const isoDay = (d: Date) => (d.getDay() === 0 ? 7 : d.getDay());
      const monday = new Date(c);
      const diffToMon = isoDay(c) - 1;
      monday.setDate(c.getDate() - diffToMon);

      if (view.value === "day") {
        return [new Date(c.getFullYear(), c.getMonth(), c.getDate())];
      }
      if (view.value === "workWeek") {
        return Array.from({ length: 5 }, (_, i) => {
          const d = new Date(monday);
          d.setDate(monday.getDate() + i);
          return d;
        });
      }
      if (view.value === "week") {
        return Array.from({ length: 7 }, (_, i) => {
          const d = new Date(monday);
          d.setDate(monday.getDate() + i);
          return d;
        });
      }
      return [];
    });

    const monthCells = computed(() => {
      const base = new Date(current.value.getFullYear(), current.value.getMonth(), 1);
      const isoDay = (d: Date) => (d.getDay() === 0 ? 7 : d.getDay());
      const start = new Date(base);
      start.setDate(base.getDate() - (isoDay(base) - 1));
      const cells: { date: Date; other: boolean }[] = [];
      for (let i = 0; i < 42; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        cells.push({ date: d, other: d.getMonth() !== current.value.getMonth() });
      }
      return cells;
    });

    const headerLabel = computed(() => {
      if (view.value === "month") {
        const dt = new Date(current.value.getFullYear(), current.value.getMonth(), 1);
        return dt.toLocaleString("en-US", { month: "long", year: "numeric" });
      }
      if (view.value === "day") {
        const d = new Date(current.value);
        return d.toLocaleString("en-US", { day: "2-digit", month: "long", year: "numeric" });
      }
      const days = visibleDays.value;
      if (!days.length) return "";
      const start = days[0];
      const end = days[days.length - 1];
      if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
        const startDay = String(start.getDate()).padStart(2, "0");
        const endDay = String(end.getDate()).padStart(2, "0");
        const monthShort = start.toLocaleString("en-US", { month: "short" });
        return `${startDay}–${endDay} ${monthShort}, ${end.getFullYear()}`;
      } else {
        const fmtStart = `${String(start.getDate()).padStart(2, "0")} ${start.toLocaleString("en-US", { month: "short" })}`;
        const fmtEnd = `${String(end.getDate()).padStart(2, "0")} ${end.toLocaleString("en-US", { month: "short" })}, ${end.getFullYear()}`;
        return `${fmtStart} - ${fmtEnd}`;
      }
    });

    function goPrev() {
      const d = new Date(current.value);
      if (view.value === "day") d.setDate(d.getDate() - 1);
      else if (view.value === "workWeek" || view.value === "week") d.setDate(d.getDate() - 7);
      else d.setMonth(d.getMonth() - 1);
      current.value = d;
    }
    function goNext() {
      const d = new Date(current.value);
      if (view.value === "day") d.setDate(d.getDate() + 1);
      else if (view.value === "workWeek" || view.value === "week") d.setDate(d.getDate() + 7);
      else d.setMonth(d.getMonth() + 1);
      current.value = d;
    }
    function goToday() { current.value = new Date(); }

    function eventsForDay(day: Date) {
      const s = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 0, 0, 0, 0);
      const e = new Date(s); e.setDate(s.getDate() + 1);
      return sampleEvents.value.filter((ev) => {
        const a = new Date(ev.start);
        const b = new Date(ev.end);
        return !(b <= s || a >= e);
      });
    }
    function eventsForMonthCell(cellDate: Date) {
      const s = new Date(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate(), 0, 0, 0, 0);
      const e = new Date(s); e.setDate(s.getDate() + 1);
      return sampleEvents.value.filter((ev) => {
        const a = new Date(ev.start);
        return a >= s && a < e;
      });
    }
    function styleForEvent(ev: Ev, day: Date) {
      const a = new Date(ev.start);
      const b = new Date(ev.end);
      const dayStart = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 0, 0, 0);
      const dayEnd = new Date(dayStart); dayEnd.setDate(dayStart.getDate() + 1);
      const start = a < dayStart ? dayStart : a;
      const end = b > dayEnd ? dayEnd : b;
      const minutesFromMidnight = (start.getHours() * 60) + start.getMinutes();
      const durMinutes = Math.max(15, (end.getTime() - start.getTime()) / 60000);
      const topPx = (minutesFromMidnight / 60) * hourPx;
      const heightPx = (durMinutes / 60) * hourPx;
      return { top: topPx + "px", height: heightPx + "px" };
    }
    function openEvent(ev: Ev) { alert(`Event:\n${ev.title}\n${new Date(ev.start).toLocaleString()} - ${new Date(ev.end).toLocaleString()}`); }
    function formatTime(iso:string) { const d = new Date(iso); return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`; }
    function weekdayShort(d:Date) { return d.toLocaleString("en-US", { weekday: "short" }); }

    return {
      view, viewMenuOpen, viewOptions, viewLabel, toggleViewMenu, setView,
      sampleEvents, visibleDays, monthCells,
      eventsForDay, eventsForMonthCell, styleForEvent,
      goPrev, goNext, goToday, headerLabel,
      openEvent, formatTime, weekdayShort,
      isTimeGrid: computed(() => view.value !== "month"), hourPx,
    };
  },
};
</script>

<style scoped>

.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  font-family: "Inter", sans-serif;
}

.sidebar-col {
  padding-left: 0;
  padding-right: 0;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}

.main-col {
  margin-left: 16.5%; /* push main content after fixed sidebar */
  padding: 0 2rem;
}

.banner {

  margin-top: 30px;
  width: 100%;
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px 25px;
  color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
.banner-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}
.banner-sub {
  font-size: 13px;
  opacity: 0.9;
  margin: 2px 0 0 0;
}
/* Top-level layout */
.calendar-static-page { background: #f7faff; min-height:100vh; font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
.container { padding: 22px 48px; }

/* Banner */
.banner { background: linear-gradient(90deg,#2d9cdb,#56ccf2,#2f80ed); color:#fff; border-radius:10px; padding:14px 18px; box-shadow:0 6px 18px rgba(0,0,0,.06); margin-bottom:14px; }
.banner h6 { margin:0; font-size:16px; font-weight:600; }
.banner p { margin:3px 0 0; font-size:13px; opacity:0.95; }

/* Toolbar */
.toolbar { display:flex; justify-content:space-between; align-items:center; gap:12px; margin: 10px 0 18px; }
.toolbar .left { display:flex; align-items:center; gap:8px; }
.icon-btn, .today-btn, .view-btn, .new-btn { border-radius:8px; border:1px solid #e6e6e6; background:#fff; padding:8px 12px; cursor:pointer; font-weight:600; }
.icon-btn { padding:8px 10px; width:36px; height:36px; display:inline-flex; align-items:center; justify-content:center; }
.header-label { margin-left:10px; font-weight:700; color:#333; }

/* Right toolbar */
.toolbar .right { display:flex; align-items:center; gap:10px; position:relative; }

/* View buttons row (new) */
.view-buttons { display:flex; gap:8px; align-items:center; }
.vb { display:inline-flex; align-items:center; gap:8px; padding:8px 10px; border:1px solid #e8e8e8; border-radius:8px; background:#fff; cursor:pointer; color:#333; font-weight:600; }
.vb .vb-icon { width:18px; height:18px; color:#333; }
.vb .vb-label { font-size:13px; }
.vb:hover { background:#f6f9ff; color:var(--accent); }
.vb.active { background:#fff; border:1px solid #cfdfff; box-shadow: 0 2px 6px rgba(51,103,214,0.08); color:#173a8a; }

/* legacy dropdown */
.view-dropdown { position:relative; }
.view-list { position:absolute; right:0; top:calc(100% + 8px); background:#fff; border:1px solid #ececec; box-shadow:0 8px 18px rgba(0,0,0,0.06); border-radius:8px; padding:6px 0; list-style:none; z-index:20; min-width:140px; }
.view-list li { padding:8px 12px; cursor:pointer; }
.view-list li:hover { background:#f3f7ff; color:#2f80ed; font-weight:700; }

/* New button */
.new-btn { background:#5b4bd6; color:white; border-radius:8px; padding:8px 12px; border:none; cursor:pointer; }

/* Calendar area */
.calendar-area { background:white; border-radius:10px; box-shadow:0 6px 20px rgba(0,0,0,0.04); padding:12px; }

/* Time grid */
.time-grid { display:flex; gap:8px; --hour-height:48px; overflow:auto; padding:6px; }
.time-axis { width:84px; border-right:1px solid #f0f0f0; padding-right:8px; }
.time-label { height: var(--hour-height); display:flex; align-items:flex-start; padding-top:4px; color:#666; font-size:13px; }

.columns { flex:1; display:flex; gap:8px; min-width:600px; }
.day-column { flex:1; position:relative; border-left:1px dashed #f2f2f2; overflow:visible; }
.day-header { position:sticky; top:0; background:white; z-index:2; padding:6px 8px; display:flex; gap:8px; align-items:center; border-bottom:1px solid #f5f5f5; }
.day-number { font-weight:700; font-size:14px; }
.day-week { font-size:12px; color:#666; margin-left:6px; }

.grid-lines { position:relative; }
.grid-line { height: var(--hour-height); border-top:1px solid #f5f5f5; }

.events { position:absolute; left:8px; right:8px; top:0; bottom:0; pointer-events:none; }
.event-card { position:absolute; left:2px; right:2px; background:#eef3ff; border-left:4px solid #3b7ddd; padding:6px 8px; border-radius:6px; box-shadow:0 2px 6px rgba(0,0,0,0.06); pointer-events:auto; cursor:pointer; overflow:hidden; }
.ev-title { font-weight:700; font-size:13px; color:#0b2546; }
.ev-time { font-size:12px; color:#3b4b63; margin-top:4px; }

/* Month grid */
.month-grid { display:block; }
.month-header { display:grid; grid-template-columns:repeat(7,1fr); gap:0; border-bottom:1px solid #f5f5f5; padding-bottom:6px; margin-bottom:8px; }
.month-weekday { text-align:left; padding:4px 8px; font-weight:700; color:#666; font-size:13px; }
.month-body { display:grid; grid-template-columns:repeat(7,1fr); gap:6px; }
.month-cell { min-height:120px; border-radius:6px; border:1px solid #f1f1f1; padding:8px; background:#fff; position:relative; }
.month-cell.other-month { background:#fafafa; opacity:0.85; }
.cell-top { position:absolute; top:6px; left:8px; right:8px; display:flex; justify-content:flex-end; }
.cell-daynum { font-weight:700; color:#333; font-size:12px; }
.cell-events { margin-top:22px; display:flex; flex-direction:column; gap:6px; }
.cell-ev { display:flex; gap:8px; align-items:center; font-size:13px; color:#264067; }
.cell-ev .dot { width:8px; height:8px; border-radius:50%; background:#3b7ddd; display:inline-block; }

@media (max-width: 1000px) {
  .columns { min-width:420px; }
  .time-axis { width:64px; }
  :root { --hour-height:40px; }
}
</style>
