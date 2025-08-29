<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        
        <!-- Logo -->
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="../assets/logo-img.png" alt="" style="height: 35px;">
        </a>

        <!-- Toggler -->
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarText" 
          aria-controls="navbarText" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Menu -->
        <div class="collapse navbar-collapse" id="navbarText">
          <!-- LEFT MENU (Mentorship + About) -->
          <ul class="navbar-nav  mb-2 mb-lg-0">
            <!-- Mentorship -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="mentorshipMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mentorship
              </a>
              <ul class="dropdown-menu" aria-labelledby="mentorshipMenu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            <!-- About -->
            <li class="nav-item dropdown ms-3">
              <a class="nav-link dropdown-toggle text-dark" href="#" id="aboutMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </a>
              <ul class="dropdown-menu" aria-labelledby="aboutMenu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>

          <!-- RIGHT MENU (Insights + Sign Up) -->
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <!-- Insights -->
            <li class="nav-item dropdown me-lg-3">
              <a class="nav-link dropdown-toggle" href="#" id="insightsMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Insights
              </a>
              <ul class="dropdown-menu" aria-labelledby="insightsMenu">
                <li><a class="dropdown-item" href="#">Blog</a></li>
                <li><a class="dropdown-item" href="#">Case Studies</a></li>
              </ul>
            </li>

            <!-- Sign Up -->
            <li class="nav-item">
              <button 
                type="button" 
                class="btn btn-signup rounded-pill  mt-2 mt-lg-0">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
