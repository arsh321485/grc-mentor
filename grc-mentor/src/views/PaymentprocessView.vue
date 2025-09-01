<template>
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

                            <!-- UPI Option -->
                            <label class="payment-option">
                                <input type="radio" value="upi" v-model="selectedOption" />
                                UPI
                            </label>

                            <!-- Credit Card Option -->
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



                <!-- Submit Button -->
                <router-link to="/mentornship" class="submit-btn px-5">
                    Your mentorship
                </router-link>



            </div>

        </div>
    </main>
</template>

<script>
import Stepper from '@/components/Stepper.vue';

export default {
    name: "PaymentprocessView",
    components: { Stepper },
    data() {
        return {
            selectedOption: "",  // For storing selected payment option
            cardNumber: "",      // For storing entered card number
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
    /* margin-bottom: 20px; */

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
    /* Increased padding for more space */
    border: 1px solid #ddd;
    border-radius: 12px;
    /* Slightly larger radius for modern look */
    cursor: pointer;
    color: #000000;
    font-weight: 500;
    font-size: 16px;
    min-height: 230px;
    /* Added minimum height */
    transition: all 0.3s ease;
    /* Smooth hover effects */
}


/* Radio button styling */
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
    /* Stick to the viewport */
    bottom: 20px;
    /* Distance from bottom */
    left: 25%;
    /* Move to center horizontally */
    transform: translateX(-50%);
    /* Adjust for perfect center */
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
    /* Always stays on top */
}

.submit-btn:hover {
    background-color: #005fa3;
}
</style>