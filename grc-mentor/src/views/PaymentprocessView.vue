<!-- lattest paymetn code -->
<template>
    <main>
        <div class="container-fluid row">
            <!-- Stepper -->
            <div class="col-2 col-md-2">
                <Stepper :currentStep="2" />
            </div>

            <!-- Payment Section -->
            <div class="col-10 col-md-10">
                <div class="container payment-container py-4 mt-5">
                    <!-- Header -->
                    <div class="d-flex align-items-center mb-3">
                        <button class="btn btn-link p-0 me-2" @click="goBack">
                            <i class="bi bi-arrow-left"></i>
                        </button>
                        <h5 class="mb-0 fw-bold">Payment methods</h5>
                    </div>

                    <!-- Subtitle -->
                    <p class="text-muted">Choose a Payment method</p>

                    <!-- Payment Options -->
                    <div class="list-group">
                        <label class="list-group-item d-flex justify-content-between align-items-center payment-option"
                            v-for="(method, index) in paymentMethods" :key="index">
                            <div class="d-flex align-items-center">
                                <input class="form-check-input me-2" type="radio" name="payment" :value="method.value"
                                    v-model="selectedPayment" />
                                <span class="payment-label">{{ method.label }}</span>
                            </div>
                            <img :src="method.icon" class="payment-icon" />
                        </label>
                    </div>

                    <!-- Footer -->
                    <div class="payment-footer mt-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="mb-0 fw-bold">Total Payment :</p>
                            </div>
                            <div>
                                <p class="mb-0 fw-bold text-end">{{ totalAmount }}$</p>
                                <small class="" style="cursor: pointer; color: #007BAF;">
                                    view price details
                                </small>
                            </div>
                        </div>

                        <button class="btn w-100 mt-3 rounded-pill" @click="checkout"
                            style="background-color: #007BAF; color: white;">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import Stepper from "@/components/Stepper.vue";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
    name: "PaymentprocessView",
    components: { Stepper },
    setup() {
        const router = useRouter();
        const selectedPayment = ref("credit");
        const totalAmount = ref(200.0);

        const paymentMethods = [
            {
                label: "Credit card",
                value: "credit",
                icon: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
            },
            {
                label: "Debit card",
                value: "debit",
                icon: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
            },
            {
                label: "Paypal",
                value: "paypal",
                icon: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png",
            },
            {
                label: "Net banking",
                value: "netbanking",
                icon: "https://cdn-icons-png.flaticon.com/512/484/484167.png",
            },
        ];

        const checkout = () => {
            if (selectedPayment.value === "credit") {
                router.push({ name: "pay-card" });
            } else if (selectedPayment.value === "debit") {
                router.push({ name: "pay-card" }); // if you have a separate debit page, use its route
            } else if (selectedPayment.value === "paypal") {
                router.push({ name: "pay-paypal" });
            } else if (selectedPayment.value === "netbanking") {
                router.push({ name: "pay-netbanking" });
            }
        };

        const goBack = () => {
            window.history.back();
        };

        return {
            selectedPayment,
            totalAmount,
            paymentMethods,
            checkout,
            goBack,
        };
    },
});
</script>

<style scoped>
.payment-container {
    max-width: 700px;
    background: #fff;
}

.payment-option {
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

.payment-option:hover {
    background-color: #f8f9fa;
}

.payment-option input {
    accent-color: #007BAF;
}

.payment-label {
    font-size: 1rem;
    font-weight: 500;
}

.payment-icon {
    width: 35px;
    height: auto;
}

.payment-footer {
    border-top: 1px solid #e0e0e0;
    padding-top: 15px;
}
</style>
