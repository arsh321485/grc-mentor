<template>
    <main>
        <Header />


        <!-- Header -->
        <section class="py-5 bg-light text-center">
            <div class="container">
                <h1 class="section-heading mb-4">The Platform</h1>
                <p class="lead mx-auto" style="max-width: 900px;">
                    Our mentoring platform is committed to supporting true entry-level talent, particularly in fields
                    that have traditionally been less accessible to those without prior experience, such as Cyber
                    Security, Data Privacy & AI Governance Risk & Compliance. We believe in creating genuine entry-level
                    opportunities and equipping the next generation to enter and thrive in GRC roles.
                </p>
            </div>
        </section>

        <!-- Experience Challenge Section -->
        <section class="py-5">
            <div class="container">
                <div class="row align-items-center g-4">
                    <div class="col-md-6">
                        <img src="https://img.freepik.com/free-vector/business-decision-making-concept_23-2148624969.jpg?w=826"
                            alt="Experience Challenge" class="img-fluid img-rounded">
                    </div>
                    <div class="col-md-6">
                        <div class="content-box">
                            <p>
                                Many newcomers face a significant challenge: gaining relevant professional experience
                                when most opportunities require prior experience. This creates a frustrating cycle,
                                making it difficult to enter the field, even as the demand for cybersecurity
                                professionals remains high.
                            </p>
                            <p>
                                Unlock your career potential with our mentorship platform—where learning goes far beyond
                                theory. As a mentee, you’ll have the unique opportunity to work across 12 diverse
                                industries, gaining practical, hands-on experience in Governance, Risk, and Compliance
                                (GRC) at multiple organizational levels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What Do You Get Section -->
        <section class="py-5 bg-light">
            <div class="container">
                <h2 class="section-heading text-center mb-5">What do you get?</h2>
                <div class="row g-4">

                    <!-- Card 1 -->
                    <div class="col-md-6">
                        <div class="highlight-box h-100">
                            <h5><i class="bi bi-globe feature-icon me-2"></i>Cross-Industry Exposure</h5>
                            <p>
                                Collaborate with mentors from sectors including finance, healthcare, technology,
                                manufacturing, and more. This breadth of experience cultivates adaptability, creative
                                problem-solving, and a broader professional perspective.
                            </p>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="col-md-6">
                        <div class="highlight-box h-100">
                            <h5><i class="bi bi-tools feature-icon me-2"></i>Hands-On Learning</h5>
                            <p>
                                Tackle real-world GRC projects, not just simulations. You’ll analyze risks, develop
                                compliance strategies, and navigate governance challenges under the guidance of seasoned
                                experts.
                            </p>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="col-md-6">
                        <div class="highlight-box h-100">
                            <h5><i class="bi bi-person-check feature-icon me-2"></i>Personalized Mentorship</h5>
                            <p>
                                Benefit from tailored guidance and actionable feedback as you progress through projects
                                designed to mirror actual workplace scenarios.
                            </p>
                        </div>
                    </div>

                    <!-- Card 4 -->
                    <div class="col-md-6">
                        <div class="highlight-box h-100">
                            <h5><i class="bi bi-lightning-charge feature-icon me-2"></i>Accelerated Skill Development
                            </h5>
                            <p class="">
                                Acquire both technical and soft skills that are in demand across industries—making you
                                career-ready and highly competitive in the job market.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Final Call-to-Action -->
        <section class="py-5">
            <div class="container">
                <div class="content-box text-center">
                    <p class="lead mb-4">
                        Whether you’re just starting out or looking to advance your GRC expertise, our platform empowers
                        you to learn by doing—so you’re prepared for the real challenges and opportunities organizations
                        face today.
                    </p>
                    <h4 class="fw-bold" style="color: #007BAF;">Join us to experience GRC mentorship that’s as dynamic and
                        multidimensional as the industries you’ll serve.</h4>
                </div>
            </div>
        </section>

        <div>
            <Footer />
        </div>
    </main>
</template>


<script lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
    name: "PlatformView",
    components: { Header, Footer }
}

</script>



<style>
.section-heading {
    color: #007BAF;
    font-weight: bold;
    font-size: 2.2rem;
}

.content-box {
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.content-box p {
    color: black;
    font-weight: 400;
    font-size: 17px;
}

.highlight-box {
    background-color: #f8f9fa;
    padding: 40px;
    border-radius: 10px;

}

.highlight-box p {
    font-size: 17px;
    color: black;
    font-weight: 400;
}

.feature-icon {
    font-size: 2rem;
    color: #007BAF;
}

.img-rounded {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
}
</style>