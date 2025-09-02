 <template>
  <main>
    <div class="sidebar">

      <div class="sidebar-header">
        <h6 class="stepper-title">
          <span class="dot"></span> GRC Mentor
        </h6>
      </div>


      <div>
        <p class="media-text">Star media</p>
      </div>

      <div>
        <p class="media-sub-text mb-3">About the company <i class="bi bi-info-circle icon-color"></i></p>
      </div>

     <div>

        <p class="media-sub-text ">Industry</p>
        <p class="media-broad-text">Sustainable Products E-commerce</p>

     </div>

      <div>
        <p class="media-sub-text">Annual revenue</p>
      </div>

      <div>
        <p class="media-broad-text">$45 million</p>
      </div>

      <div>
        <p class="media-sub-text">Geographic presence</p>
      </div>

      <div>
        <p class="media-broad-text">United States and Canada</p>
      </div>

      <div>
        <p class="media-sub-text">Name of the project</p>
      </div>

      <div>
        <p class="media-broad-text">ISO 27001</p>
      </div>

      <div>
        <p class="media-sub-text">Description </p>
      </div>

      <div>
        <p class="media-broad-text">ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project.</p>
      </div>


      <div>
        <p class="media-sub-text">Technology stack</p>
      </div>


      <div>
        <p class="media-broad-text">Modern cloud infrastructure with sustainability tracking</p>
      </div>

      <div>
        <p class="media-sub-text">Business model</p>
      </div>

      <div>
        <p class="media-broad-text">Multi-vendor marketplace with focus on sustainability</p>
      </div>

      <div>
        <p class="media-sub-text">Primary focus</p>
      </div>

      <div>
        <p class="media-broad-text">Sustainable business practices and process improvement</p>
      </div>

      <div>
        <p class="media-broad-text">Mandatory laws</p>
      </div>

      <div>
        <p class="media-sub-text">Security Investment</p>
      </div>


    </div>
  </main>
</template>


<script lang="ts">
export default {
  name: "Starmedia"
};
</script>

<style scoped>
.media-text {
  color: #000000;
  font-weight: 500;
  font-size: 25px;

}

.icon-color{
  color: #0096D6;
}
.media-sub-text {
  font-size: 13px;
  font-weight: 400;
  color: #00000099;
  margin: 0;
}

.media-broad-text {
  font-size: 14px;
  font-weight: 500;
  color: #000000;

}


.stepper-title {
  display: flex;
  align-items: center;
  color: #121212;
  font-size: 17px;
  font-weight: 600;
}

.dot {
  height: 20px;
  width: 20px;
  background: linear-gradient(180deg, #9FE2FF 0%, #0096D6 100%);
  border-radius: 50%;
  margin-right: 8px;

}

.dot-profile {
  height: 25px;
  width: 25px;
  background: linear-gradient(180deg, #B0A0FF 0%, #4023CF 100%);
  border-radius: 50%;

}


.sidebar {
  width: 260px;
  height: 100vh;
  background-color: #F6F6F8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
}


.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>



<!-- <template>



  <div class="d-flex align-items-center mb-5">
    <div class="blue-circle "></div>
    <h5 class="mb-0 fw-semibold5">GRC Mentor</h5>
  </div>


  <h3 class="fw-semibold mb-3">{{ company.name }}</h3>
  <small class="text-muted">About the company <i class="bi bi-info-circle icon-color"></i></small>


  <div class=" mt-4">
    <div v-for="(item, index) in companyInfo" :key="index" class="mb-3">
      <small class="text-muted d-block">{{ item.label }}</small>
      <div class="fw-medium mb-2 info-text">{{ item.value }}</div>
    </div>
  </div>

</template>

<script>
export default {
  name:"Starmedia",
  props: {
    company: {
      type: Object,
      required: true,
      default: () => ({
        name: "Star media",
        industry: "Sustainable Products E-commerce",
        revenue: "$45 million",
        geography: "United States and Canada",
        project: "ISO 27001",
        description: "ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project, ISO 27001 is a project.",
        technology: "Modern cloud infrastructure with sustainability tracking",
        businessModel: "Multi-vendor marketplace with focus on sustainability",
        focus: "Sustainable business practices and process improvement",
        laws: "Mandatory laws",
        investment: "Security Investment"
      })
    }
  },
  computed: {
    companyInfo() {
      return [
        { label: "Industry", value: this.company.industry },
        { label: "Annual revenue", value: this.company.revenue },
        { label: "Geographic presence", value: this.company.geography },
        { label: "Name of the project", value: this.company.project },
        { label: "Description", value: this.company.description },
        { label: "Technology stack", value: this.company.technology },
        { label: "Business model", value: this.company.businessModel },
        { label: "Primary focus", value: this.company.focus },
        { label: "Mandatory laws", value: this.company.laws },
        { label: "Security Investment", value: this.company.investment }
      ];
    }
  }
};
</script>

<style scoped>
.info-text {
  font-size: 12px;
  color: #000;
  margin-bottom: 20;
}

.icon-color {
  color: #0096D6;
  width: 16px;
  height: 16px;

}

.blue-circle {
  width: 30px;
  height: 30px;
  background-color: #0096D6;
  border-radius: 50%;
  margin-right: 10px;
}

.sidebar-container {
  width: 308px;
  min-height: 100vh;
  background: #f6f6f6;
  border-right: 1px solid #e0e0e0;
  font-family: 'Inter', sans-serif;
  color: #121212;

}

.sidebar-container h3 {
  font-size: 28px;
  color: #000;
}

.sidebar-container small {
  font-size: 13px;
}

.sidebar-container p {
  font-size: 15px;
  color: #000;
}
</style> -->
