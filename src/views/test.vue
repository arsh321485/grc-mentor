<template>
  <main>
    <div class="container-fluid row">
      <div class="col-2 col-md-2">
        <Stepper :currentStep="4" />
      </div>

      <div class="col-5 col-md-5">
        <!-- Title -->
        <h2 class="cvadd-head mt-5 pt-4">Setup Your Communication</h2>
        <div class="d-flex flex-column">
          <p class="sub-text pt-4 mb-0">Your email address is: </p>

          <!-- Info -->
          <p class="info-text">amitsharma@gmail.com</p>
          <button type="button" class="mattermost-btn w-75" @click="openModal">
            Connect to Mattermost
          </button>
        </div>

        <!-- heading -->
        <p class="mattermost-text mt-5 pt-4">
          Please setup your email with Mattermost and check back to continue...
        </p>

        <!-- Status Box -->
     <div class="status-box">
  <!-- Loader if pending -->
  <div class="loading-icon" v-if="status === 'pending'">
    <div class="blue-circle">
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>

  <!-- ✅ Tick mark if success -->
  <div class="success-icon" v-else>
    <div class="green-circle">
      <i class="fas fa-check"></i>
    </div>
  </div>

  <p class="text-center status-text mb-0" :class="status === 'success' ? 'status-success' : ''">
    Status: {{ status === 'pending' ? 'Pending' : 'Successful' }}
  </p>

  <p class="sub-text text-center">
    {{ status === 'pending'
      ? "You haven’t set up your email with Mattermost yet."
      : "You have set up your email with Mattermost." }}
  </p>
</div>



        <!-- Button -->
        <router-link to="/welcomementor" class="next-btn">
          Next: Your mentorship
        </router-link>
      </div>

      <div class="col-5 col-md-5 mt-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ut
          sed dolorem est numquam laborum hic doloremque cum rerum commodi
          voluptatibus fugit architecto assumenda natus sit ratione, velit
          recusandae pariatur?
        </p>
      </div>
    </div>

    <!-- ✅ Center Modal -->
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
            <label class="form-label small"> Set Your Password</label>
            <input type="password" v-model="form.password" class="form-control" placeholder="Enter password" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary btn-sm" @click="closeModal">Cancel</button>
          <button class="btn btn-primary btn-sm" @click="saveChanges">Save</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Stepper from "@/components/Stepper.vue";

export default {
  name: "MattermostView",
  components: { Stepper },
 methods: {
  openModal() {
    this.showModal = true;
  },
  closeModal() {
    this.showModal = false;
  },
  saveChanges() {
    console.log("Updated Email:", this.form.email);
    console.log("Updated Password:", this.form.password);

    // ✅ Update status when saved
    this.status = "success";

    this.closeModal();
    alert("Your details have been updated!");
  }
},
data() {
  return {
    showModal: false,
    form: {
      email: "amitsharma@gmail.com",
      password: ""
    },
    status: "pending"   // ✅ track status here
  };
},
};
</script>

<style>
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
  border-radius: 18px;
  padding: 30px 20px;
  max-width: 400px;
  background-color: #fafafa;
  text-align: center;
  margin-top: 20px;
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

/* Next Button */
.next-btn {
  position: fixed;
  bottom: 20px;
  left: 25%;
  transform: translateX(-50%);
  padding: 12px 40px;
  background-color: #007baf;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: background 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.next-btn:hover {
  background-color: #4a9dcf;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .next-btn {
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    padding: 14px;
    font-size: 15px;
  }
}

/* ✅ Center Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-box {
  width: 400px;
  max-width: 95%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.3s ease;
}

.modal-header,
.modal-footer {
  padding: 12px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  padding: 15px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}


.mattermost-btn {
  padding: 12px 40px;
  background-color: #007baf;   /* Same blue as next-btn */
  color: #ffffff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: background 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-top: 15px;  /* spacing from above text */
}

.mattermost-btn:hover {
  background-color: #4a9dcf;  /* Hover color */
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
  background-color: #e6f9ed; /* light green */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.green-circle i {
  color: #28a745;   /* green tick */
  font-size: 24px;
}

.status-success {
  color: #28a745;
}



/* Responsive */
@media (max-width: 768px) {
  .mattermost-btn {
    width: 90%;
    padding: 12px;
    font-size: 15px;
  }
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
</style>
