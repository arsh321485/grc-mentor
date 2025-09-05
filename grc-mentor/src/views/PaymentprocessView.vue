<!-- <template>
    <main>
        <div class="container-fluid row">
            <div class="col-2 col-md-2">
                <Stepper :currentStep="2" />
            </div>

            <div class="col-10 col-md-10">

                <h2 class="process-text mt-5 pt-4">Please pay to proceed:</h2>
                <p class="sub-text  pt-2">Please wait while we set things up for you...</p>

                <div class="row">
                    <div class="col-5">
                        <div class="payment-box">
                            <h6 class="mb-0">Select payment option:</h6>
                            <p class="sub-text  pt-2">Select payment option:</p>

                         
                            <label class="payment-option">
                                <input type="radio" value="upi" v-model="selectedOption" />
                                UPI
                            </label>

                           
                            <label class="payment-option-2 card-option">
                                <input type="radio" value="card" v-model="selectedOption" />
                                <div>
                                    <span>Credit card</span>
                                    <p class="sub-text pt-2">Select payment option:</p>
                                    <input v-if="selectedOption === 'card'" type="text" placeholder="Card number"
                                        v-model="cardNumber" />

                                    <p class="card-sub-text">Card number</p>
                                </div>


                            </label>

                        </div>
                    </div>
                </div>



             
                <router-link to="/mentornship" class="submit-btn px-5">
                    Your mentorship
                </router-link>



            </div>

        </div>
    </main>
</template>

<script lang="ts">
import Stepper from '@/components/Stepper.vue';

export default {
    name: "PaymentprocessView",
    components: { Stepper },
    data() {
        return {
            selectedOption: "", 
            cardNumber: "",      
        };
    },
};
</script>


<style>
.process-text {
    color: #000000;
    font-weight: 500;
}

.sub-text {
    color: #00000099;
    font-size: 14px;
  

}

.payment-box {
    margin: 20px 0;
    color: #000000;
    font-weight: 600;
}

.payment-option {
    display: flex;
    align-items: flex-start;
    margin: 15px 0;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    cursor: pointer;
    color: #000000;
    font-weight: 500;
    font-size: 16px;

}

.payment-option input[type="radio"] {
    margin-right: 10px;
    margin-top: 4px;
}

.payment-option-2 {
    display: flex;
    align-items: flex-start;
    margin: 15px 0;
    padding: 20px;

    border: 1px solid #ddd;
    border-radius: 12px;

    cursor: pointer;
    color: #000000;
    font-weight: 500;
    font-size: 16px;
    min-height: 230px;

    transition: all 0.3s ease;

}



.payment-option-2 input[type="radio"] {
    margin-right: 10px;
    margin-top: 4px;
}

.card-option input[type="text"] {
    display: block;
    margin-top: 10px;
    padding: 8px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 6px;
}

.card-sub-text {
    color: #000000DE;
    font-weight: 500;
    font-size: 13px;
}

.submit-btn {
    position: fixed;
 
    bottom: 20px;
 
    left: 25%;

    transform: translateX(-50%);

    padding: 12px 40px;
    background-color: #007BAF;
    color: #FFFFFF;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: background 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    text-decoration: none;

}

.submit-btn:hover {
    background-color: #005fa3;
}
</style> -->






<!-- new -payment code -->
<!-- 
<template>
  <main>
    <div class="container-fluid row">
     
      <div class="col-2 col-md-2">
        <Stepper :currentStep="2" />
      </div>

      <div class="col-10 col-md-10">
        <div class="container payment-container py-4 mt-5">
        
          <div class="d-flex align-items-center mb-3">
            <button class="btn btn-link p-0 me-2" @click="goBack">
              <i class="bi bi-arrow-left"></i>
            </button>
            <h5 class="mb-0 fw-bold">Payment methods</h5>
          </div>

        
          <p class="text-muted">Choose a Payment method</p>

        
          <div class="list-group">
            <label
              class="list-group-item d-flex justify-content-between align-items-center payment-option"
              v-for="(method, index) in paymentMethods"
              :key="index"
            >
            
              <div class="d-flex align-items-center">
                <input
                  class="form-check-input me-2"
                  type="radio"
                  name="payment"
                  :value="method.value"
                  v-model="selectedPayment"
                />
                <span class="payment-label">{{ method.label }}</span>
              </div>

            
              <img :src="method.icon" class="payment-icon" />
            </label>
          </div>

          
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

            <button
              class="btn w-100 mt-3 rounded-pill"
              @click="checkout"
              style="background-color: #007BAF; color: white;"
            >
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
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "PaymentprocessView",
  components: { Stepper },
  setup() {
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

 
    const selectedPaymentLabel = computed(() => {
      const method = paymentMethods.find(
        (m) => m.value === selectedPayment.value
      );
      return method ? method.label : "Selected payment";
    });

    const checkout = () => {
      alert(`Proceeding with ${selectedPaymentLabel.value}`);
    };

    const goBack = () => {
      window.history.back();
    };

    return {
      selectedPayment,
      selectedPaymentLabel,
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
  margin-left: 0;
  margin-right: 0;
  background: #fff;
}

.payment-option {
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
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
</style> -->




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
