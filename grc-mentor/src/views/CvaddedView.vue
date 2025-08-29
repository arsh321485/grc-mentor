<template>
    <main>
        <div class="container-fluid row">
            <div class="col-2 col-md-2">
                <Stepper :currentStep="1" />
            </div>

            <div class="col-10 col-md-10">
                <!-- Title -->
                <h2 class="cvadd-head mt-5 pt-4">CV added. Checking your eligibility...</h2>
                <p class="sub-text pt-2">Please wait while we set things up for you...</p>

                <!-- Info -->
                <p class="info-text">
                    Well done, you’re a GRC pro already! You’ve completed GRC 101 and GRC 301 courses already,
                    we need to do an eligibility check to ensure you’re eligible for GRC 501, please wait...
                </p>

                <!-- Status Box -->
                <div class="status-box">
                    <div class="loading-icon">
                        <div class="blue-circle">
                            <div class="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <p class="text-center status-text mb-0">Status: Pending</p>
                    <p class="sub-text text-center">We’re doing an eligibility check</p>
                </div>

                <!-- Button -->
                <button class="next-btn px-5 ">Next: Course Payment</button>
            </div>
        </div>
    </main>
</template>

<script>
import Stepper from '@/components/Stepper.vue';

export default {
    name: "CvaddedView",
    components: { Stepper }
}
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

.status-box {
    border: 1px solid #ddd;
    border-radius: 18px;
    padding: 30px 20px;
    max-width: 400px;
    background-color: #fafafa;
    text-align: center;
    margin-top: 20px;
}

/* New Loading Icon Styles */
.loading-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
}

.blue-circle {
    width: 55px;
    height: 55px;
    background-color: #E1F6FF; /* Light blue background */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dots {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0096D6; /* Dark blue inner circle */
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
    0%, 80%, 100% {
        opacity: 0.3;
    }
    40% {
        opacity: 1;
    }
}

.status-text{
    color: #000000DE;
    font-weight: 500;
    font-size: 20px;
}

.next-btn {
    position: fixed;         /* Stick to the viewport */
    bottom: 20px;           /* Distance from bottom */
    left: 25%;              /* Move to center horizontally */
    transform: translateX(-50%); /* Adjust for perfect center */
    padding: 12px 40px;
    background-color: #7ea4b4;
    color: #FFFFFF;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: background 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;          /* Always stays on top */
}

/* Hover Effect */
.next-btn:hover {
    background-color: #4a9dcf;
}

/* Responsive Styling */
@media (max-width: 768px) {
    .next-btn {
        width: 90%;             /* Take most of the width on mobile */
        left: 50%;
        transform: translateX(-50%);
        padding: 14px;
        font-size: 15px;
    }
}


/* ✅ Responsive Styling */
@media (max-width: 768px) {
    .eligibility-container {
        padding: 15px;
    }

    .info-text {
        font-size: 14px;
        padding: 0 10px;
    }

    .status-box {
        width: 90%;
        padding: 20px 15px;
    }

    .next-btn {
        width: 90%;
        font-size: 15px;
        padding: 12px;
    }
}
</style>
