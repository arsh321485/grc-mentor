<template>
  <main class="mentorship-page">
    <div class="container-fluid row g-0">
      <!-- Sidebar -->
      <div class="col-2 col-md-2 sidebar-col">
        <Sidebarprofile />
      </div>

      <!-- Main Content -->
      <div class="col-10 col-md-10 ">
        <!-- Banner -->
        <div class="banner mb-5">
          <div>
            <h5 class="banner-title"> Settings & Preferences</h5>
            <p class="banner-sub">Update your email, password, and check your payment history</p>
          </div>
        </div>

        <!-- Settings Section -->
        <section class="settings-section">

          <!-- Change Email -->
          <div class="card glass-cardshadow-lg mb-5 border-0">
            <div class="card-header bg-transparent border-0 d-flex align-items-center">
              <i class="bi bi-envelope-fill icon me-2"></i>
              <h6 class="fw-semibold mb-0">Change Email</h6>
            </div>
            <div class="card-body">
              <p class="text-muted small mb-3">Keep your contact email up to date.</p>
              <div class="mb-3">
                <label class="form-label fw-medium">New Email Address</label>
                <input type="email" class="form-control modern-input" placeholder="Enter your new email" />
              </div>
              <button class="btn-gradient">Update Email</button>
            </div>
          </div>

          <!-- Change Password -->
          <div class="card glass-cardshadow-lg mb-5 border-0">
            <div class="card-header bg-transparent border-0 d-flex align-items-center">
              <i class="bi bi-lock-fill icon me-2"></i>
              <h6 class="fw-semibold mb-0">Change Password</h6>
            </div>
            <div class="card-body">
              <p class="text-muted small mb-3">Make sure your password is strong and secure.</p>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label fw-medium">Old Password</label>
                  <input type="password" class="form-control modern-input" placeholder="Enter old password" />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label fw-medium">New Password</label>
                  <input type="password" class="form-control modern-input" placeholder="Enter new password" />
                </div>
              </div>
              <button class="btn-gradient">Update Password</button>
            </div>
          </div>

          <!-- Payment History -->
          <div class="card glass-cardshadow-lg mb-5 border-0">
            <div class="card-header bg-transparent border-0 d-flex align-items-center">
              <i class="bi bi-credit-card-2-front-fill icon me-2"></i>
              <h6 class="fw-semibold mb-0">Payment History</h6>
            </div>
            <div class="card-body">
              <p class="text-muted small mb-3">Review your recent payment transactions.</p>
              <div class="table-responsive">
                <table class="table table-hover align-middle">
                  <thead>
                    <tr>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(payment, idx) in payments" :key="idx">
                      <td>{{ payment.amount }}</td>
                      <td>{{ payment.date }}</td>
                      <td>
                        <span
                          class="badge rounded-pill"
                          :class="payment.status === 'Paid' ? 'bg-success' : 'bg-warning text-dark'"
                        >
                          {{ payment.status }}
                        </span>
                      </td>
                      <td>{{ payment.method }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebarprofile from '@/components/Sidebarprofile.vue';

export default {
  name: "SettingView",
  components: { Sidebarprofile },
  data() {
    return {
      payments: [
        { amount: "$300.30", date: "23rd July, 2025", status: "Paid", method: "Credit Card" },
        { amount: "$120.99", date: "10th Aug, 2025", status: "Pending", method: "PayPal" },
        { amount: "$499.00", date: "1st Sept, 2025", status: "Paid", method: "Debit Card" },
      ],
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
  width: 99%;
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

/* Glass Cards */
.glass-card {
  flex: 1;
   min-height: 701px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  padding: 22px;
  display: flex;
  flex-direction: column;
}




.icon {
  font-size: 1.3rem;
  color: #2d9cdb;
}

/* Inputs */
.modern-input {
  border-radius: 8px;
  border: 1px solid #d0d7de;
  padding: 10px 14px;
  transition: border 0.3s ease, box-shadow 0.3s ease;
}
.modern-input:focus {
  border-color: #56ccf2;
  box-shadow: 0 0 0 0.15rem rgba(86, 204, 242, 0.25);
}

/* Gradient Button */
.btn-gradient {
  background: linear-gradient(90deg, #2d9cdb, #56ccf2);
  border: none;
  color: #fff;
  border-radius: 8px;
  padding: 8px 20px;
  font-weight: 500;
  transition: all 0.3s ease;
}
.btn-gradient:hover {
  background: linear-gradient(90deg, #56ccf2, #2f80ed);
  transform: translateY(-2px);
}

/* Table */
.table thead {
  background-color: #f2f6fb;
  font-size: 14px;
  font-weight: 600;
  color: #555;
}
.table td {
  font-size: 15px;
  color: #333;
}
</style>
