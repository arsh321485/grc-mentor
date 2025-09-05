<!-- <template>
    <main>

        <div class="container signup-container">
            <div class="row w-100 form-section mt-2">

             
                <div class="col-lg-6 col-md-12 left">
                    <router-link to="/" class="d-block mb-3 text-decoration-none"
                        style="color: #005E86; font-weight: 600;">
                        &larr; Back to homepage
                    </router-link>

                    <h2 class="" style="font-weight: 600;">Get started now</h2>
                    <p class=" mb-4" style="font-weight: 500; color: #00000099; font-size: 12px;">Join GRCD Department
                        for real life learning.</p>

                    <div class="d-flex justify-content-between align-items-center gap-3 px-3">
                        <button class="social-btn">
                            <img src="../assets/google-logo.png" alt="google" width="20">
                            Login with Google
                        </button>
                        <button class="social-btn">
                            <img src="../assets/facebook-logo.png" alt="facebook" width="20">
                            Login with Facebook
                        </button>
                    </div>

                    <hr class="my-4">

                    <form>
                        <div class="mb-3">
                            <label class="form-label">First name</label>
                            <input type="text" class="form-control" placeholder="Enter your first name">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Last name</label>
                            <input type="text" class="form-control" placeholder="Enter your last name">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" placeholder="Enter your email address">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" placeholder="Enter your password">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="termsCheck">
                            <label class="form-check-label" for="termsCheck">I agree to the terms</label>
                        </div>
                        <router-link to="/uploadcv" class="btn w-100 btn-submit">
                            Get started with GRC Department
                        </router-link>

                    </form>
                </div>

               
                <div class="col-lg-6 right p-0 d-none d-lg-block">
                    <img src="../assets/signup-img.png" alt="Signup Image" style="border-radius: 30px;">
                </div>

            </div>
        </div>

    </main>
</template>

<script lang="ts">
export default {
    name: "SignupView"
};
</script>



<style>
.btn-submit{
 background-color: #006CBF;
  color: white;
  width: 130px;
}
</style> -->



<template>

    <main>

        <div class="container signup-container">

            <div class="row w-100 form-section mt-2">



                <!-- Left Side -->

                <div class="col-lg-6 col-md-12 left">

                    <router-link to="/home" class="d-block mb-1 text-decoration-none"
                        style="color: #005E86; font-weight: 600;">

                        &larr; Back to homepage

                    </router-link>



                    <h4 style="font-weight: 600;">Get started now</h4>

                    <p class="mb-4" style="font-weight: 500; color: #00000099; font-size: 12px;">

                        Join GRCD Department for real life learning.

                    </p>



                    <!-- Social Login -->

                    <p class="signup-text">Sign in with</p>

                    <div class="d-flex justify-content-center align-items-center gap-3 px-3">

                        <button class="social-icon-btn">

                            <img src="../assets/google-logo.png" alt="google" />

                        </button>

                        <button class="social-icon-btn">

                            <img src="../assets/facebook-logo.png" alt="facebook" />

                        </button>

                        <button class="social-icon-btn">

                            <img src="../assets/twitter-logo.jpg" alt="twitter" />

                        </button>

                        <button class="social-icon-btn">

                            <img src="../assets/linkedin.jpg" alt="linkedin" />

                        </button>

                        <button class="social-icon-btn">

                            <img src="../assets/microsoft-logo.jpg" alt="microsoft" />

                        </button>

                    </div>



                    <!-- Divider -->

                    <div class="or-divider">

                        <span>or</span>

                    </div>



                    <!-- Signup Form -->

                    <form @submit.prevent="handleSubmit">

                        <div class="mb-1">

                            <label class="form-label">First name</label>

                            <input type="text" v-model="form.firstName" class="form-control"
                                placeholder="Enter your first name">

                        </div>

                        <div class="mb-1">

                            <label class="form-label">Last name</label>

                            <input type="text" v-model="form.lastName" class="form-control"
                                placeholder="Enter your last name">

                        </div>

                        <div class="mb-1">

                            <label class="form-label">Email</label>

                            <input type="email" v-model="form.email" class="form-control"
                                placeholder="Enter your email address">

                        </div>

                        <div class="mb-1">

                            <label class="form-label">Password</label>

                            <input type="password" v-model="form.password" class="form-control"
                                placeholder="Enter your password">

                        </div>

                        <div class="mb-1">

                            <label class="form-label">Confirm Password</label>

                            <input type="password" v-model="form.confirmPassword" class="form-control"
                                placeholder="Re-enter your password">

                        </div>



                        <!-- Temporary Captcha -->

                        <div class="mb-1 captcha-box">

                            <label class="form-label">Captcha</label>

                            <div class="d-flex align-items-center gap-3">

                                <div class="captcha-placeholder">{{ captcha }}</div>

                                <input type="text" v-model="form.captchaInput" class="form-control"
                                    placeholder="Enter captcha">

                            </div>

                        </div>



                        <!-- Terms -->

                        <div class="mb-3 form-check">

                            <input type="checkbox" class="form-check-input" id="termsCheck" v-model="form.agree">

                            <label class="form-check-label" for="termsCheck">I agree to the terms</label>

                        </div>



                        <!-- Submit -->

                        <router-link to="/uploadcv" class="btn w-100 btn-submit">

                            Get started with GRC Department

                        </router-link>



                        <!-- Already have account -->

                        <p class="have-account">

                            Already have an account?

                            <router-link to="/login" class="login-link">Login</router-link>

                        </p>

                    </form>

                </div>



                <!-- Right Side (Image) -->

                <div class="col-lg-6 right p-0 d-none d-lg-block">

                    <img src="../assets/signup-img.png" alt="Signup Image" style="border-radius: 30px;">

                </div>

            </div>

        </div>

    </main>

</template>



<script lang="ts">

export default {

    name: "SignupView",

    data() {

        return {

            captcha: Math.floor(1000 + Math.random() * 9000), // random 4-digit number

            form: {

                firstName: "",

                lastName: "",

                email: "",

                password: "",

                confirmPassword: "",

                captchaInput: "",

                agree: false

            }

        };

    },

    methods: {

        handleSubmit() {

            if (this.form.password !== this.form.confirmPassword) {

                alert("Passwords do not match!");

                return;

            }

            if (Number(this.form.captchaInput) !== this.captcha) {

                alert("Captcha is incorrect!");

                return;

            }

            if (!this.form.agree) {

                alert("You must agree to the terms!");

                return;

            }

            alert("Form submitted successfully!");

        }

    }

};

</script>



<style scoped>
.btn-submit {
  border-radius: 30px;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  background-color: #0096D6;
  color: #FFFFFF;
}
.btn-submit:hover {
  border-radius: 30px;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  background-color: #0096D6;
  color: #FFFFFF;
}
.social-icon-btn {

    width: 45px;

    height: 45px;

    border-radius: 50%;

    border: 1px solid #ddd;

    background-color: #fff;

    display: flex;

    align-items: center;

    justify-content: center;

    transition: 0.3s;

}

.social-icon-btn img {

    height: 18px;

    width: auto;

}

.social-icon-btn:hover {

    background-color: #f8f8f8;

    border-color: #aaa;

    transform: scale(1.05);

    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

}



.signup-text {

    text-align: center;

    font-size: 14px;

    font-weight: 600;

    color: #444;

    margin: 20px 0 15px 0;

}



.or-divider {

    display: flex;

    align-items: center;

    text-align: center;

    color: #666;

    margin: 5px 0;

}

.or-divider::before,

.or-divider::after {

    content: '';

    flex: 1;

    border-bottom: 1px solid #ccc;

}

.or-divider:not(:empty)::before {

    margin-right: 10px;

}

.or-divider:not(:empty)::after {

    margin-left: 10px;

}

.or-divider span {

    font-size: 14px;

    font-weight: 500;

    text-transform: lowercase;

}



.captcha-box {

    text-align: left;

}

.captcha-placeholder {

    border: 1px solid #ddd;

    border-radius: 6px;

    padding: 8px 12px;

    background: #f9f9f9;

    color: #333;

    font-weight: bold;

    font-size: 16px;

    letter-spacing: 2px;

    min-width: 80px;

    text-align: center;

}



.have-account {

    font-size: 13px;

    color: #555;

    text-align: center;

    margin-top: 8px;

    margin-bottom: 0;

}

.login-link {

    color: #005E86;

    font-weight: 600;

    text-decoration: none;

    margin-left: 3px;

}

.login-link:hover {

    text-decoration: underline;

}
</style>