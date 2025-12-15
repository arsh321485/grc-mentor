<template>
  <main class="mentorship-page">
    <div class="container-fluid ">

      <div class="row g-4 main-row">

        <!-- LEFT STEPPER (UNCHANGED) -->
        <div class="col-12 col-md-3 col-lg-2 stepper-col">
          <Stepper :currentStep="1" />
        </div>

        <!-- RIGHT CONTENT (UNCHANGED POSITION) -->
        <div class="col-12 col-md-9 col-lg-10 content-col">

          <!-- BANNER (UNCHANGED) -->
          <div class="banner mb-4 mt-3">
            <div>
              <h6 class="banner-title">Profile Setup</h6>
              <p class="banner-sub">Fill the form below to help us map your experience.</p>
            </div>
          </div>

          <!-- CARD (contains centered medium form) -->
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4">

              <div class="row justify-content-center">
                <div class="col-12 col-lg-9"> <!-- medium centered width -->
                  <label class="form-label fw-semibold d-block mb-3 text-center">Profile details</label>

                  <!-- ===== NEW FORM (2-column rows) ===== -->
                  <div class="form-panel p-3">
                    <form @submit.prevent="saveAndContinue" class="profile-form" novalidate>

                      <div class="grid-2">

                        <!-- Row 1: First name + Last name (replaces Full name) -->
                        <div class="form-group">
                          <label class="form-label small fw-semibold"> First Name</label>

                          <!-- inner two-column layout inside same grid cell to preserve UI -->
                          <div style="display:flex; gap:10px;">
                            <div style="flex:1;">
                              <input
                                v-model="form.firstName"
                                type="text"
                                class="form-control"
                                placeholder="First name"
                                :class="{ 'is-invalid': touched.firstName && !validators().firstName() }"
                                @blur="touched.firstName = true"
                                maxlength="40"
                                required
                              />
                              <div v-if="touched.firstName && !validators().firstName()" class="invalid-feedback small">
                                Please enter your first name.
                              </div>
                            </div>

                          </div>
                        </div>

                        <!-- Row 1: Email -->
                        <div class="form-group">
                          <label class="form-label small fw-semibold">Last Name</label>
                         <input
                                v-model="form.lastName"
                                type="text"
                                class="form-control"
                                placeholder="Last name"
                                :class="{ 'is-invalid': touched.lastName && !validators().lastName() }"
                                @blur="touched.lastName = true"
                                maxlength="40"
                                required
                              />
                              <div v-if="touched.lastName && !validators().lastName()" class="invalid-feedback small">
                                Please enter your last name.
                              </div>
                        </div>

                        <!-- Row 2: Country -->
                        <div class="form-group">
                          <label class="form-label small fw-semibold">Country</label>
                          <select
                            v-model="form.country"
                            class="form-select"
                            :class="{ 'is-invalid': touched.country && !validators().country() }"
                            @blur="touched.country = true"
                            required
                          >
                            <option value="">Select country</option>
                            <option value="India">India</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Canada">Canada</option>
                            <option value="UAE">UAE</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Other">Other</option>
                          </select>
                          <div v-if="touched.country && !validators().country()" class="invalid-feedback small">
                            Please select a country.
                          </div>
                        </div>

                        <!-- Row 2: Phone (code + number) -->
                        <div class="form-group">
                          <label class="form-label small fw-semibold">Phone</label>
                          <div class="d-flex">
                            <select v-model="form.countryCode" class="form-select me-2" style="max-width:120px;">
                              <option value="+91">+91</option>
                              <option value="+92">+92</option>
                              <option value="+1">+1</option>
                              <option value="+44">+44</option>
                              <option value="+971">+971</option>
                              <option value="+880">+880</option>
                            </select>

                            <input
                              v-model="form.phone"
                              type="tel"
                              class="form-control"
                              placeholder="9876543210"
                              :class="{ 'is-invalid': touched.phone && !validators().phone() }"
                              @blur="touched.phone = true"
                              maxlength="15"
                              required
                            />
                          </div>
                          <div v-if="touched.phone && !validators().phone()" class="invalid-feedback small">
                            Please enter a valid phone number (digits only).
                          </div>
                        </div>

                        <!-- Row 3: University -->
                        <div class="form-group">
                          <label class="form-label small fw-semibold">University</label>
                          <select v-model="form.university" class="form-select">
                            <option value="">Select university</option>
                            <option>University of Pune</option>
                            <option>University of Mumbai</option>
                            <option>Delhi University</option>
                            <option>University of Gujarat</option>
                            <option>Other</option>
                          </select>
                        </div>

                        <!-- Row 3: Qualification -->
                        <div class="form-group">
                          <label class="form-label small fw-semibold">Course</label>
                          <select
                            v-model="form.qualification"
                            class="form-select"
                            :class="{ 'is-invalid': touched.qualification && !validators().qualification() }"
                            @blur="touched.qualification = true"
                            required
                          >
                            <option value="">Select qualification</option>
                            <option>Bachelor's</option>
                            <option>Master's</option>
                            <option>PhD</option>
                            <option>Diploma</option>
                            <option>High School</option>
                            <option>Other</option>
                          </select>
                          <div v-if="touched.qualification && !validators().qualification()" class="invalid-feedback small">
                            Please select your qualification.
                          </div>
                        </div>

                        <!-- Row 4: About (full width) -->
                        <div class="form-group full">
                          <label class="form-label small fw-semibold">Tell us about yourself</label>
                          <textarea
                            v-model="form.about"
                            class="form-control"
                            :class="{ 'is-invalid': touched.about && !validators().about() }"
                            @blur="touched.about = true"
                            required
                            rows="5"
                            maxlength="800"
                            placeholder="A short summary about your background, interests or strengths"
                          ></textarea>
                          <div class="form-text small text-muted">{{ form.about.length }} / 800</div>
                        </div>

                      </div> <!-- end grid-2 -->

                      <!-- form-level error -->
                      <div v-if="formError" class="alert alert-danger small mt-2">{{ formError }}</div>

                      <!-- save button -->
                      <div class="mt-3 text-end">
                        <button
                          class="btn btn-submit"
                          :disabled="!isFormValid || isSaving"
                          @click="saveAndContinue"
                        >
                          Save & Continue
                        </button>
                      </div>
                    </form>
                  </div>
                  <!-- ===== END NEW FORM ===== -->

                </div> <!-- end col -->
              </div> <!-- end row -->

              <div class="mt-3">
                <div class="alert alert-info small">
                  We never store your profile without your consent. You can edit it later.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  </main>
</template>

<script lang="ts">
import Stepper from '@/components/Stepper.vue';

export default {
  name: "ProfileSetup",
  components: { Stepper },

  data() {
    return {
      // updated form model: replaced fullName with firstName & lastName
      form: {
        firstName: '',
        lastName: '',
        country: '',
        countryCode: '+91',
        phone: '',
        university: '',
        qualification: '',
        about: '',
        // kept for compatibility (not used)
        experienceYears: null as number | null,
        skills: [] as string[]
      },

      // touched flags
      touched: {
        firstName: false,
        lastName: false,
        country: false,
        phone: false,
        qualification: false,
        experienceYears: false,
        skills: false,
        about: false
      },

      // UI states
      isSaving: false,
      savingProgress: 0,
      formError: ''
    };
  },

  computed: {
    isFormValid(): boolean {
      const v = this.validators();
      return v.firstName() &&
             v.lastName() &&
             v.country() &&
             v.phone() &&
             v.qualification() &&
             v.about();
    }
  },

  methods: {
    validators() {
      const self: any = this;
      return {
        firstName: () => !!(self.form.firstName && self.form.firstName.trim().length > 0),
        lastName: () => !!(self.form.lastName && self.form.lastName.trim().length > 0),
        country: () => !!(self.form.country && self.form.country.trim().length > 0),
        phone: () => {
          const val = (self.form.phone || '').replace(/\s+/g, '');
          const re = /^\d{7,15}$/;
          return re.test(val);
        },
        qualification: () => !!(self.form.qualification && self.form.qualification.trim().length > 0),
        experienceYears: () => {
          const v = Number(self.form.experienceYears);
          return !isNaN(v) && v >= 0 && v <= 50;
        },
        about: () => !!(self.form.about && self.form.about.trim().length > 0),

        skills: () => {
          return Array.isArray(self.form.skills) && self.form.skills.length > 0;
        }

      };
    },

    // UI-only save — validate, show tiny animation, then route (keeps original behavior)
    async saveAndContinue() {
      // mark touched so errors show
      Object.keys(this.touched).forEach(k => (this.touched[k as keyof typeof this.touched] = true));
      this.formError = '';

      if (!this.isFormValid) {
        this.formError = 'Please fill the required fields to continue.';
        return;
      }

      try {
        this.isSaving = true;
        this.savingProgress = 20;

        await new Promise((r) => setTimeout(r, 120));
        this.savingProgress = 60;
        await new Promise((r) => setTimeout(r, 120));
        this.savingProgress = 100;
        await new Promise((r) => setTimeout(r, 80));

        this.$router.push({ name: 'payment1' });
      } catch (err) {
        this.formError = 'Something went wrong. Please try again.';
      } finally {
        this.isSaving = false;
        this.savingProgress = 0;
      }
    }
  }
};
</script>

<style scoped>
  .banner {
  margin-top: 30px;
  width: 95%;
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

.section-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #222;
}

/* Keep your original page styles; only added grid layout for the form */
.form-panel {
  border: 1px solid rgba(45,156,219,0.12);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(18,38,63,0.06);
}

/* grid for two-column rows and full-width last row */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.grid-2 .full {
  grid-column: 1 / -1;
}

/* small responsive fallback */
@media (max-width: 992px) {
  .grid-2 { grid-template-columns: 1fr; }
}

/* reuse your existing input styles */
.profile-form .form-control,
.profile-form .form-select {
  border-radius: 8px;
  padding: 10px 12px;
  box-shadow: none;
  border: 1px solid #e6edf3;
}
.profile-form .form-control:focus,
.profile-form .form-select:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(45, 156, 219, 0.08);
  border-color: #2d9cdb;
}

.invalid-feedback { color: #d9534f; }

/* button style kept */
.btn-submit {
  background: linear-gradient(90deg, #2d9cdb, #2f80ed);
  padding: 8px 22px;
  border-radius: 10px;
  color: white;
  border: none;
  font-weight: 600;
}
.btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

 /* small helper text */
.form-text.small { color: #6b7a8a; }
</style>
