<template>
  <div class="d-flex align-items-center justify-content-center min-vh-100 p-4 bg-light">
    <div class="auth-card rounded-4 shadow-sm d-flex overflow-hidden">
      <!-- LEFT SIDEBAR -->
      <aside class="left-pane p-4 d-none d-md-flex flex-column">
        <div class="brand mb-4">
          <strong>Untitled UI</strong>
        </div>

        <nav class="steps flex-grow-1">
          <ul class="list-unstyled mb-0">
            <li v-for="(s, i) in steps" :key="i" class="d-flex gap-3 mb-3">
              <div class="step-icon d-flex align-items-center justify-content-center"
                   :class="{'bg-success text-white': i === currentStep, 'bg-light text-muted': i !== currentStep}">
                <i :class="s.icon"></i>
              </div>
              <div class="step-text">
                <div class="small text-muted">{{ s.title }}</div>
                <div class="small">{{ s.subtitle }}</div>
              </div>
            </li>
          </ul>
        </nav>

        <div class="mt-auto small text-muted">
          <a href="#" class="text-decoration-none">&larr; Back to home</a>
          <span class="d-block mt-2"><a href="/login" class="text-decoration-none">Sign in</a></span>
        </div>
      </aside>

      <!-- RIGHT FORM -->
      <section class="right-pane p-5 flex-fill">
        <div class="d-flex justify-content-center mb-3">
          <!-- small logo -->
          <div class="logo rounded-circle bg-dark text-white d-flex align-items-center justify-content-center" style="width:36px;height:36px;">
            <span style="font-weight:700">U</span>
          </div>
        </div>

        <h3 class="text-center mb-1">Create a free account</h3>
        <p class="text-center text-muted mb-4">Provide your email and choose a password.</p>

        <!-- form card -->
        <div class="mx-auto" style="max-width:420px;">
          <form @submit.prevent="onSubmit" novalidate :class="{ 'was-validated': tried }">

            <div class="mb-3">
              <label class="form-label">Name *</label>
              <input v-model.trim="form.name" required type="text" class="form-control" :class="{ 'is-invalid': errors.name }" />
              <div class="invalid-feedback">{{ errors.name }}</div>
            </div>

            <div class="mb-3">
              <label class="form-label">Email *</label>
              <input v-model.trim="form.email" required type="email" class="form-control" :class="{ 'is-invalid': errors.email }" />
              <div class="invalid-feedback">{{ errors.email }}</div>
            </div>

            <div class="mb-3">
              <label class="form-label">Organization Name</label>
              <input v-model.trim="form.organization" type="text" class="form-control" />
            </div>

            <div class="row g-2 mb-3">
              <div class="col-md-6">
                <label class="form-label">Teams Present *</label>
                <select v-model="form.team" required class="form-select" :class="{ 'is-invalid': errors.team }">
                  <option value="">Select...</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
                <div class="invalid-feedback">{{ errors.team }}</div>
              </div>

              <div class="col-md-6">
                <label class="form-label">Location</label>
                <input v-model.trim="form.location" type="text" class="form-control" placeholder="City, Country" />
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Password *</label>
              <input v-model="form.password" required type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
              <div class="invalid-feedback">{{ errors.password }}</div>
            </div>

            <div class="mb-3">
              <label class="form-label">Confirm password *</label>
              <input v-model="form.passwordConfirm" required type="password" class="form-control" :class="{ 'is-invalid': errors.passwordConfirm }" />
              <div class="invalid-feedback">{{ errors.passwordConfirm }}</div>
            </div>

            <!-- visual separator -->
            <div class="d-flex align-items-center my-3">
              <div class="flex-grow-1 h-1 bg-light" style="height:6px;border-radius:6px;"></div>
              <div class="mx-2 small text-muted">OR</div>
              <div class="flex-grow-1 h-1 bg-light" style="height:6px;border-radius:6px;"></div>
            </div>

            <!-- social buttons -->
            <div class="d-grid gap-2 mb-3">
              <button type="button" @click="onGoogle" class="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2">
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="g" style="width:18px;height:18px" />
                Sign up with Google
              </button>

              <button type="button" @click="onApple" class="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                  <path d="M11.013 1.5c0 .867-.438 1.66-1.088 2.2-.515.447-1.189.8-1.826.8-.04-1.05.45-1.824 1.035-2.4C9.576 1.45 10.14 1.1 11.013 1.5z"/>
                  <path d="M8.79 3.9c.46.02 1.03.282 1.45.5.5.26 1.06.684 1.495 1.16.19.24.36.46.48.66-1.08.77-1.97.99-3.135 1-1.166.01-2.06-.34-3.14-1.1.12-.2.29-.42.48-.66.435-.477.995-.9 1.495-1.16.42-.217.99-.48 1.45-.502z"/>
                </svg>
                Sign up with Apple ID
              </button>
            </div>

            <div class="d-grid mb-2">
              <button class="btn btn-success btn-lg" :disabled="submitting">
                <span v-if="submitting" class="spinner-border spinner-border-sm me-2"></span>
                Continue
              </button>
            </div>

            <p v-if="message" :class="['mt-2', messageClass]" role="alert">{{ message }}</p>
          </form>

          <!-- small progress indicator -->
          <div class="progress-wrapper mt-4 d-flex align-items-center justify-content-center">
            <div class="progress d-inline-block" style="width:160px;height:8px;border-radius:8px;background:#e9ecef;">
              <div :style="{ width: progressPercent + '%', height:'8px', background:'#2f855a', borderRadius:'8px' }"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';

const steps = [
  { title: 'Your details', subtitle: 'Provide an email and password', icon: 'bi bi-person' },
  { title: 'Verify your email', subtitle: 'Enter your verification code', icon: 'bi bi-envelope' },
  { title: 'Invite your team', subtitle: 'Start collaborating with your team', icon: 'bi bi-people' },
  { title: 'Welcome to Untitled!', subtitle: 'Get up and running in 3 minutes', icon: 'bi bi-check2-circle' }
];

const currentStep = 0; // visual; can be dynamic if you implement multi-step
const progressPercent = computed(() => ((currentStep + 1) / steps.length) * 100);

const form = reactive({
  name: '',
  email: '',
  organization: '',
  team: '',
  location: '',
  password: '',
  passwordConfirm: ''
});

const errors = reactive({});
const tried = ref(false);
const submitting = ref(false);
const message = ref('');
const messageClass = ref('');

function validate() {
  Object.keys(errors).forEach(k => delete errors[k]);
  let ok = true;

  if (!form.name) { errors.name = 'Name is required.'; ok = false; }
  if (!form.email) { errors.email = 'Email is required.'; ok = false; }
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) { errors.email = 'Enter a valid email.'; ok = false; }

  if (!form.team) { errors.team = 'Select a team.'; ok = false; }

  if (!form.password) { errors.password = 'Password is required.'; ok = false; }
  else if (form.password.length < 8) { errors.password = 'Minimum 8 characters.'; ok = false; }

  if (form.password !== form.passwordConfirm) { errors.passwordConfirm = 'Passwords do not match.'; ok = false; }

  return ok;
}

async function onSubmit() {
  tried.value = true;
  message.value = '';
  if (!validate()) return;
  submitting.value = true;

  const payload = {
    name: form.name,
    email: form.email,
    organization: form.organization,
    team: form.team,
    location: form.location,
    password: form.password
  };

  try {
    console.log('SIGNUP PAYLOAD:', JSON.stringify(payload, null, 2));
    // simulate network
    await new Promise(r => setTimeout(r, 700));
    message.value = 'Account created (demo). Check console for payload.';
    messageClass.value = 'text-success';
  } catch (e) {
    message.value = 'Something went wrong.';
    messageClass.value = 'text-danger';
  } finally {
    submitting.value = false;
  }
}

function onGoogle() {
  // demo placeholder
  alert('Google sign-up clicked (demo). Hook your OAuth flow here.');
}
function onApple() {
  alert('Apple sign-up clicked (demo). Hook your OAuth flow here.');
}
</script>

<style scoped>
.auth-card {
  width: 100%;
  max-width: 1100px;
  background: white;
  border-radius: 18px;
  overflow: hidden;
}

/* left pane */
.left-pane {
  width: 320px;
  background: #fbfbfb;
  border-right: 1px solid #eef0f2;
  display: flex;
  flex-direction: column;
}

/* step icon circle */
.step-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #f1f3f5;
  color: #6b7280;
  display: inline-flex;
}
.step-icon i { font-size: 14px; }

/* right pane */
.right-pane { min-width: 420px; }

.logo { width:36px;height:36px;border-radius:8px; }

/* smaller screens adjustments */
@media (max-width: 767px) {
  .auth-card { flex-direction: column; border-radius: 12px; }
  .left-pane { display: none !important; }
  .right-pane { padding: 2rem !important; }
}
</style>
