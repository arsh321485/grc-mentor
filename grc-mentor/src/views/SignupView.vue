<template>
    <main>

        <div class="container signup-container">
            <div class="row w-100 form-section mt-2">

                <!-- Left Side -->
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

                <!-- Right Side (Image) -->
                <!-- <div class="col-lg-6 col-md-12 right p-0">
                    <img src="../assets/signup-img.png" alt="Signup Image" style="border-radius: 30px;">
                </div> -->

                <!-- Right Side (Image) | hidden on mobile/tablet -->
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