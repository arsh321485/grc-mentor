<template>
    <main>
          <div class="container-fluid row">
             <div class="col-2 col-md-2">
                <Sidebarprofile />
            </div>
              <div class="col-10 col-md-10">
                <div class="container-fluid">
        <!-- Page Title -->
        <h3 class="fw-bold m-5">Settings</h3>

        <!-- Username -->
        <div class="m-5">
            <label for="username" class="form-label fw-semibold">Your username</label>
            <input type="text" id="username" class="form-control w-25" placeholder="Enter your first name" />
        </div>

        <!-- Password -->
        <div class="m-5">
            <label for="password" class="form-label fw-semibold">Your password</label>
            <input type="password" id="password" class="form-control w-25" placeholder="Enter your password" />
        </div>

        <!-- Payment History -->
        <div class="mt-5">
            <h6 class="fw-semibold m-5">Payment history</h6>
            <div class="table-responsive m-5 w-75">
                <table class="table align-middle">
                    <thead class="table-light">
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
                                <h6>{{ payment.status }}</h6>
                            </td>
                            <td>{{ payment.method }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

              </div>
          </div>
    </main>
</template>


<script lang="ts">
import Sidebarprofile from '@/components/Sidebarprofile.vue';

export default {
    name: "SettingView",
    components:{Sidebarprofile},
    data() {
        return {
            payments: [
                { amount: "$300.30", date: "23rd July, 2025", status: "Paid", method: "Credit Card" },
                { amount: "$300.30", date: "23rd July, 2025", status: "Paid", method: "Credit Card" },
                { amount: "$300.30", date: "23rd July, 2025", status: "Paid", method: "Credit Card" },
            ],
        };
    },
};
</script>

<style scoped>

.table th,
.table td {
    vertical-align: middle;
    font-size: 19px;
    color: #000000DE;
    font-family: Inter;
    font-weight: 400;
    font-style: Normal;
    line-height: 20px;
}
</style>