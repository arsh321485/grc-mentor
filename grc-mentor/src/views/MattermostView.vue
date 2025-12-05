<template>
  <main class="mentorship-page">
    <div class="container-fluid">
      <div class="row g-4">
        <!-- Stepper Left Column -->
        <div class="col-2 col-md-2">
          <Stepper :currentStep="5" />
        </div>

        <!-- Right Main Column -->
        <div class="col-10 col-md-10 ">
          <!-- Banner -->
          <div class="banner mt-4 mb-3">
            <div class="banner-left">
              <h6 class="banner-title">Setup Your Communication</h6>
              <p class="banner-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="banner-right">GRC 101</div>
          </div>

          <!-- Two Cards Section -->
          <section>
            <div class="row g-4 ">
              <!-- Left Card -->
              <div class="col-md-6">
                <section class=" glass-card">
                  <div class="d-flex flex-column">
                    <div class="reporting-header ">
                      <h6 class="   pt-0"> I'm your reporting manager</h6>
                      <p class="text-muted mb-0">Let's set up your reporting time</p>
                    </div>
                    <hr class="m-0" />
                    <p class="mattermost-text  mx-auto mt-2">
                      Please setup your email with Mattermost to continue...
                    </p>
                    <div class="text-center ">
                      <button type="button" class="mattermost-btn btn-submit" @click="openModal">
                        Connect to Mattermost
                      </button>
                    </div>

                    <div class="status-box mx-auto">
                      <div class="loading-icon" v-if="status === 'pending'">
                        <div class="blue-circle">
                          <div class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>

                      <div class="success-icon" v-else>
                        <div class="green-circle"><i class="fas fa-check"></i></div>
                      </div>

                      <p class="text-center status-text mb-0" :class="status === 'success' ? 'status-success' : ''">
                        Status: {{ status === 'pending' ? 'Pending' : 'Successful' }}
                      </p>

                      <p class="sub-text text-center">
                        {{
                          status === "pending"
                            ? "You haven’t set up your email with Mattermost yet."
                            : "You have set up your email with Mattermost."
                        }}
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <!-- Modal -->
              <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
                <div class="modal-box">
                  <div class="modal-header">
                    <h5>Update Email & Password</h5>
                    <button class="close-btn" @click="closeModal">&times;</button>
                  </div>
                  <div class="modal-body">
                    <div class="mb-3">
                      <label class="form-label small">Email Address</label>
                      <input type="email" v-model="form.email" class="form-control" placeholder="Enter new email" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label small">Set Your Password</label>
                      <input type="password" v-model="form.password" class="form-control" placeholder="Enter password" />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-secondary btn-sm" @click="closeModal">Cancel</button>
                    <button class="btn btn-primary btn-sm" @click="saveChanges">Save</button>
                  </div>
                </div>
              </div>

              <!-- Right Card -->
              <div class="col-md-6">
                <section class="roles-card glass-card shadow-lg">
                  <div class="reporting-header">
                    <h6 class=" pt-0"> I'm your reporting manager</h6>
                    <p class="text-muted mb-0">Let's set up your reporting time</p>
                  </div>
                  <hr />


                  <!-- Step 1: Time Zone (AUTO-DETECT, no dropdown) -->
                  <h6 class="time-label"> Your location is:</h6>

                  <!-- detected zone display (no dropdown) -->
                  <div class="">
                    <div class="detected-zone-box p-3 rounded-2 d-flex align-items-center justify-content-between">
                      <div>
                        <div class="fw-semibold">{{ detectedLabel || "Unknown location" }}</div>
                        <div class="text-muted small">{{ detectedIana || "" }}</div>
                      </div>

                      <!-- optional: let user override if detection wrong -->
                      <div>
                        <button class="btn btn-outline-secondary btn-sm" @click="allowManual = !allowManual">
                          {{ allowManual ? "Use detected" : "Not your location?" }}
                        </button>
                      </div>
                    </div>

                    <!-- Manual selector only shows if user toggles it (keeps UI intact) -->
                    <div v-if="allowManual" class="">
                      <select v-model="selectedZone" class="form-select custom-select mb-4">
                        <option disabled value="">Select timezone</option>
                        <option value="IST">India (IST)</option>
                        <option value="EST">US Eastern (EST)</option>
                        <option value="PST">US Pacific (PST)</option>
                        <option value="GMT">Europe (GMT)</option>
                      </select>
                    </div>
                  </div>

                  <p class="border p-3 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Esse a cumque debitis ipsam vel perferendis ut unde rem sint iste asperiores
                     quasi natus blanditiis excepturi voluptates et, totam repellat at?</p>

                  <!-- Step 2: Time Slots -->
                  <transition name="fade" class=" ms-2 ">
                    <div v-if="selectedZoneComputed">
                      <h6 class="time-label">Select your reporting time ({{ selectedZoneComputed }}):</h6>
                      <div class="time-options">
                        <button
                          v-for="(slot, i) in timeSlotsForSelectedZone"
                          :key="i"
                          class="time-btn"
                          :class="{ active: selectedTime === slot }"
                          @click="selectTime(slot)"
                        >
                          {{ slot }}
                        </button>
                      </div>

                    <!-- Selected time confirmation -->
<div class="selected-time  p-3 rounded-3 shadow-sm" v-if="selectedTime">
  <i class="bi bi-check-circle-fill text-success me-2"></i>
  You selected: <strong>{{ selectedTime }} ({{ selectedZoneComputed }})</strong>
</div>

<!-- Finish button: placed under time buttons and aligned with left -->
<div class="time-footer d-flex justify-content-end" v-if="selectedTime">
  <router-link :to="finishRoute" class="next-btn btn-submit ">
    Finish Onboarding
  </router-link>
</div>

                    </div>
                  </transition>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Stepper from "@/components/Stepper.vue";

export default defineComponent({
  name: "MattermostView",
  components: { Stepper },
  data() {
    return {
      showModal: false,
      form: {
        email: "amitsharma@gmail.com",
        password: "",
      },
      status: "pending",
      // timezone management
      detectedIana: "", // e.g. "Asia/Kolkata"
      detectedLabel: "", // e.g. "India (IST)"
      allowManual: false, // if user wants to manually choose
      // selectedZone: "",       // IST | EST | PST | GMT or empty
      // selectedTime: "",
      finishRoute: "/grc101",
      timeSlots: {
         IST: ["9 AM - 5 PM", "10 AM - 6 PM", "8 AM - 4 PM"],
        EST: ["8 AM - 4 PM", "9 AM - 5 PM", "1 PM - 9 PM"],
        PST: ["7 AM - 3 PM", "8 AM - 4 PM", "10 AM - 6 PM"],
        GMT: ["9 AM - 5 PM", "10 AM - 6 PM", "7 AM - 3 PM"]
      } as const,
      selectedZone: "IST",
      selectedTime: null as string | null,
    };
  },
  computed: {
    // If user manually selected zone use that, otherwise use detected mapping
    // Narrowed return type to the keys of timeSlots (or null)
    selectedZoneComputed(): (keyof typeof this.timeSlots) | null {
      if (this.allowManual && this.selectedZone) {
        const candidate = this.selectedZone as keyof typeof this.timeSlots;
        return candidate && candidate in this.timeSlots ? candidate : null;
      }
      // derive short label from detectedIana
      const mapped = this.mapIanaToShort(this.detectedIana);
      const key = mapped as keyof typeof this.timeSlots | null;
      return key && key in this.timeSlots ? (key as keyof typeof this.timeSlots) : null;
    },

    // computed getter that always returns a string[] so template indexing is safe
    timeSlotsForSelectedZone(): string[] {
      const key = this.selectedZoneComputed;
      if (!key) return [];
      // `this.timeSlots[key]` is readonly (because of `as const`), return a copy
      return Array.isArray(this.timeSlots[key]) ? [...this.timeSlots[key]] : [];
    },
  },
  mounted() {
    this.detectTimezone();
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    saveChanges() {
      this.status = "success";
      this.closeModal();
      alert("Your details have been updated!");
    },

    // User selects a time slot
    selectTime(slot: string) {
      this.selectedTime = slot;
    },

    // Map common IANA tz -> our short labels (fallback to IANA's region)
    // Return type narrowed to keys of timeSlots or null
    mapIanaToShort(iana: string): (keyof typeof this.timeSlots) | null {
      if (!iana) return null;
      const tz = iana.toLowerCase();
      if (tz.includes("kolkata") || tz.includes("india") || tz.includes("asia/kolkata")) return "IST";
      if (tz.includes("new_york") || tz.includes("america/new_york") || tz.includes("eastern")) return "EST";
      if (tz.includes("los_angeles") || tz.includes("america/los_angeles") || tz.includes("pacific")) return "PST";
      if (tz.includes("london") || tz.includes("gmt") || tz.includes("europe/london")) return "GMT";
      // fallback heuristics
      if (tz.includes("asia")) return "IST";
      if (tz.includes("america")) {
        // prefer EST for east coast, PST for west - simple heuristic:
        if (tz.includes("los") || tz.includes("pacific")) return "PST";
        return "EST";
      }
      if (tz.includes("europe")) return "GMT";
      // if unknown, return null so UI shows unknown
      return null;
    },

    // Detect timezone via browser
    detectTimezone() {
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
        this.detectedIana = tz;
        // generate a friendly label
        const short = this.mapIanaToShort(tz);
        if (short === "IST") this.detectedLabel = `India (IST)`;
        else if (short === "EST") this.detectedLabel = `US Eastern (EST)`;
        else if (short === "PST") this.detectedLabel = `US Pacific (PST)`;
        else if (short === "GMT") this.detectedLabel = `Europe (GMT)`;
        else this.detectedLabel = tz || "Unknown";

        // pre-fill selectedZone (so the time slots show)
        this.selectedZone = (short as string) || "";
      } catch (e) {
        // graceful fallback — log the error for debugging and then reset values
        // eslint-disable-next-line no-console
        console.error(e);
        this.detectedIana = "";
        this.detectedLabel = "";
        this.selectedZone = "";
      }
    },
  },
});
</script>

<style scoped>




/* Card */
.reporting-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 10px;
  padding: 35px;
  max-width: 650px;
  width: 100%;
  transition: all 0.3s ease-in-out;
}

.reporting-card:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  transform: translateY(-3px);
}

/* Header */
.reporting-header {
  text-align: center;
  margin-bottom: 10px;
}

.reporting-header h5 {
  color: #2f3542;
}

.reporting-header p {
  font-size: 14px;
  color: #6c757d;
}

/* Divider */
.divider {
  margin: -1px 0;
  border-top: 1px solid #e0e6ed;
}

/* Labels */
.time-label {
  font-size: 14px;


  color: #333;
}

/* Select dropdown */
.custom-select {
  border-radius: 12px;
  padding: 10px 15px;
  font-size: 15px;
  border: 1px solid #d0d7e2;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.custom-select:focus {
  border-color: #2f80ed;
  box-shadow: 0 0 6px rgba(47,128,237,0.3);
}

/* Time buttons */
.time-options {
  display: flex !important;       /* make sure flex is applied */
  flex-wrap: wrap;
  gap: 12px !important;           /* space between buttons (modern browsers) */
  padding-left: 8px;              /* left padding so first button is not flush to edge */
  align-items: center;
}

.time-footer {
  margin-top: 12px;

}

.time-btn {
  margin: 0 12px 12px 0;

  /* keep your other styles as-is */
}

.time-btn:hover {
  background: #e7f5ff;
}

.time-btn.active {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  color: #fff;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 123, 175, 0.3);
}

/* Selected time box */
.selected-time {
  background: #f1fdf6;
  border: 1px solid #b6e8c9;
  color: #155724;
  font-size: 15px;
  display: flex;
  align-items: center;
}

/* Fade animation for slots */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}


.btn-submit {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  border: none;
  border-radius: 10px;
  padding: 10px 28px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
}
.mentorship-page {
  background: linear-gradient(135deg, #f7faff, #eef3fb);
  min-height: 100vh;
  /* padding: 30px; */
  font-family: "Inter", sans-serif;
}

/* Row: make equal height cards */
.row.g-4 {
  /* display: flex;
  align-items: stretch; */
      display: flex;
  align-items: stretch;
}

.col-md-6 {
  display: flex;
}

/* Glass Cards */
.glass-card {
  flex: 1;
   min-height: 301px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  padding: 22px;
  display: flex;
  flex-direction: column;
}

/* Banner */
.banner {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2, #2f80ed);
  border-radius: 12px;
  padding: 18px 25px;
  color: #fff;
  display: flex;
  justify-content: space-between;
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

.banner-right {
  font-size: 15px;
  font-weight: 600;
}

.cvadd-head {
  color: #000000;
  font-weight: 500;
}

.sub-text {
  color: #00000099;
  font-size: 14px;
  font-weight: 400;
}

.info-text {
  font-size: 15px;
  color: #000000;
  line-height: 1.6;
  max-width: 600px;
  font-weight: 500;
}

.mattermost-text {
  font-size: 16px;
  font-weight: 500;
}

.status-box {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 30px 20px;
  max-width: 400px;
  background-color: #fafafa;
  text-align: center;
  margin-top: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);       /* Add shadow */
}

/* Loading Icon */
.loading-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
}

.blue-circle {
  width: 55px;
  height: 55px;
  background-color: #e1f6ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dots {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0096d6;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  gap: 4px;
  padding: 3px;
}

.dots span {
  width: 5px;
  height: 5px;
  background-color: white;
  border-radius: 50%;
  animation: blink 1s infinite;
}

.dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0%,
  80%,
  100% {
    opacity: 0.3;
  }
  40% {
    opacity: 1;
  }
}

.status-text {
  color: #000000de;
  font-weight: 500;
  font-size: 20px;
}

.status-success {
  color: #28a745;
}
.detected-zone-box {
  background: #fff;
  border: 1px solid #e6eef6;
  border-radius: 8px;
}

/* Next Button */
.next-btn {



  position: static !important;
  transform: none !important;
  right: auto !important;
  bottom: auto !important;
  /* margin-left: 0; */
}

.next-btn:hover {
  background-color: #4a9dcf;
}
.mattermost-btn {
  padding: 10px 40px;
  background-color: #007baf;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: background 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  display: inline-block; /* ensures perfect centering */
}

.mattermost-btn:hover {
  background-color: #4a9dcf;
}


.success-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
}

.green-circle {
  width: 55px;
  height: 55px;
  background-color: #e6f9ed;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.green-circle i {
  color: #28a745;
  font-size: 24px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@media (max-width: 768px) {
  .col-2.col-md-2 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .col-10.col-md-10 {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 20px;
  }
}
html, body, .mentorship-page {
  overflow-x: hidden;
}
.container-fluid {
  padding-left: 15px !important;
  padding-right: 15px !important;
  box-sizing: border-box;
}
@media (max-width: 576px) {
  .time-options {
    flex-direction: column;
    align-items: stretch;
  }
  .time-btn {
    width: 100%;
    text-align: center;
  }
}
@media (max-width: 576px) {
  .mattermost-text, .status-text {
    font-size: 14px;
  }
}
@media (min-width: 1367px) and (max-width: 1920px) {
  .glass-card {
    padding: 30px;
  }
  .banner-title {
    font-size: 18px;
  }
  .mattermost-text {
    font-size: 17px;
  }
}
/* ---------- Modal Overlay & Box (drop-in replacement) ---------- */
.modal-overlay {
  position: fixed;       /* stay above page and cover whole viewport */
  inset: 0;              /* top:0; right:0; bottom:0; left:0; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.55); /* dark translucent backdrop */
  z-index: 1090;         /* very high z-index so it sits above other UI */
  padding: 20px;         /* spacing on small screens */
  -webkit-overflow-scrolling: touch;
}

/* Modal box */
.modal-box {
  width: 100%;
  max-width: 680px;      /* comfortable max width */
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 18px 50px rgba(20, 40, 60, 0.25);
  overflow: hidden;      /* keep header/body/footer together */
  animation: modalPop 160ms ease-out;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 64px); /* ensure it never overflows viewport */
}

/* smooth entrance */
@keyframes modalPop {
  from { transform: translateY(6px) scale(.995); opacity: 0; }
  to   { transform: translateY(0)   scale(1);     opacity: 1; }
}

/* header / close button */
.modal-header {
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eef3f7;
  background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,251,0.98));
}
.modal-header h5 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}
.close-btn {
  background: transparent;
  border: none;
  font-size: 22px;
  line-height: 1;
  padding: 6px 8px;
  cursor: pointer;
  color: #3b3f45;
  border-radius: 8px;
}
.close-btn:hover { background: rgba(0,0,0,0.04); }

/* modal body scrolls inside the box if tall */
.modal-body {
  padding: 18px;
  overflow: auto;               /* scroll inside the modal when content is tall */
  flex: 1 1 auto;               /* flex grow so body takes available space */
}

/* footer */
.modal-footer {
  padding: 12px 18px;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  border-top: 1px solid #eef3f7;
  background: #fff;
}

/* responsive tweaks */
@media (max-width: 576px) {
  .modal-box { max-width: 520px; }
  .modal-header h5 { font-size: 15px; }
  .modal-body { padding: 14px; }
  .modal-footer { padding: 10px 14px; }
}


</style>
