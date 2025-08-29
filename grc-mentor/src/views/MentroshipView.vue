<template>
    <main>
        <div class="container-fluid row">
            <div class="col-2 col-md-2">
                <Stepper :currentStep="4" />
            </div>

            <div class="col-10 col-md-10">

                <!-- Header -->
                <h2 class="mentor-text mt-5 pt-4">About your mentorship:</h2>
                <p class="sub-text pt-2">Please wait while we set things up for you...</p>

                <!-- Industries -->
                <p class="text-mentor pt-4">Your mentorship will include these 4 industries:</p>
                <div class="industries pt-4">
                    <div class="industry">
                        <div class="top">
                            <div class="icon-wrapper media">
                                <i class="fas fa-play"></i>
                            </div>
                            
                           <h6>Media</h6>
                        </div>
                        <p>Company name</p>
                    </div>

                    <div class="industry">
                        <div class="top">
                            <div class="icon-wrapper legal">
                                <i class="fas fa-gavel"></i>
                            </div>
                           
                            <h6>Legal</h6>
                        </div>
                        <p>Company name</p>
                    </div>

                    <div class="industry">
                        <div class="top">
                            <div class="icon-wrapper education">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            
                            <h6>Education</h6>
                        </div>
                        <p>Company name</p>
                    </div>

                    <div class="industry">
                        <div class="top">
                            <div class="icon-wrapper ecommerce">
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                          
                            <h6>E-commerce</h6>
                        </div>
                        <p>Company name</p>
                    </div>
                </div>

                <!-- Project/Tasks -->
                <p class="text-mentor pt-4">You'll be working on this project/tasks:</p>
                <div class="project-box">
                    <div class="project-placeholder"></div>
                    <p class="text-project ">Project name</p>
                </div>

                <!-- Responsibilities -->
                <p class="placeholder-text mt-3 pt-4">Your responsibilities will be:</p>

                <!-- Policy -->
                
                <p class="pt-4 mt-5 placeholder-text">Acceptance usage policy</p>
                <label class="checkbox">
                    <input type="checkbox" v-model="agree" />
                    I agree to the terms
                </label>

                <!-- Button -->
                <!-- <button class="submit-btn" :disabled="!agree">
                    Setup your email
                </button> -->
               <button class="emial-btn ">
                 Setup your email
               </button>
            </div>

        </div>

    </main>
</template>

<script>
import Stepper from '@/components/Stepper.vue';

export default {
    name: "MentornshipView",
    components: { Stepper }
};
</script>


<style>
.mentorship-container h2 {

    font-weight: 500;
    font-style: Medium;
    font-size: 42px;
    line-height: 100%;
    letter-spacing: -2.3%;
    color: #000000;

}

.mentorship-container h3 {

    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 18px;
    color: #000000;
    line-height: 100%;
    letter-spacing: -0.7%;


}

.mentorship-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    font-family: Inter;
    text-align: left;
}

.mediatxt {

    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.6%;

}

.mentor-text {
    color: #000000;
    font-weight: 500;
}

.sub-text {
    color: #00000099;
    font-size: 14px;
}

.text-mentor {
    font-size: 18px;
    color: #000000;
    font-weight: 600;
}

.mediacompany {

    font-weight: 500;
    font-style: Medium;
    font-size: 13px;
    color: #000000;
    line-height: 24px;
    letter-spacing: -0.6%;
}

input {
    font-weight: 500;
    font-style: Medium;
    font-size: 13px;
    color: #000000;
    line-height: 100%;
    letter-spacing: -0.5%;

}

.top h6{
   font-weight: 500;
    color: #000000;
    padding-top: 8px;
}

.text-project{
   font-size: 15px;
   font-weight: 600;
   color: #000000DE;
}

.sub-text {
    color: #666;
    font-size: 14px;
    margin-bottom: 20px;
}
/* .top-text{
    font-size: 18px;
    font-weight: 500;
} */

.industries {
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    gap: 80px;
    margin-top: 20px;
}

.industry {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    text-align: center;
}

.industry .top {
    display: flex;
    align-items: center;
    gap: 10px;
}

.icon-wrapper {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.icon-wrapper.media {
    background: #c7f5c7;
    color: #008000;
}

.icon-wrapper.legal {
    background: #f5c7a7;
    color: #6b2f00;
}

.icon-wrapper.education {
    background: #a7d2f5;
    color: #003f6b;
}

.icon-wrapper.ecommerce {
    background: #c7c7f5;
    color: #2f2f8b;
}

.industry strong {
    font-size: 14px;
    font-weight: 600;
}

.industry p {
    margin-top: 8px;
    font-size: 13px;
    color: #000000;
    font-weight: 500;
}



.project-box {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 15px 0;

}



.project-placeholder {
    width: 96px;
    height: 80px;
    background-color: #D9D9D9;
    border-radius: 6px;
}

.placeholder-text {
    color: #000000;
    font-weight: 600;
    font-size: 18px;
}

.checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 15px 0;
}


.emial-btn{
    background-color: #007BAF;
    color: #FFFFFF;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
     padding: 12px 40px;
     bottom: 20px;           /* Distance from bottom */
    left: 25%;
  
}

/* ✅ Responsive */
@media (max-width: 768px) {
    .industries {
        flex-direction: column;
    }

    .industry {
        flex: 1 1 100%;
    }

}
</style>