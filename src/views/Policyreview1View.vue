<template>
  <main>
    <div class="container-fluid row">
      <div class="col-2 col-md-2">
        <Starmedia />
      </div>

      <div class="col-10 col-md-10">
        <div class="d-flex justify-content-end align-item-end pt-4">
          <button class="btn btn-link text-decoration-none" @click="$emit('close')" style="color:  #0096D6;"><i
              class="bi bi-x-circle-fill" style="color: #0096D6;"></i> Close</button>
        </div>

        <div class="fw-semibold mb-5 ps-5 pt-3 mt-2 d-flex align-items-center">
          <div class="icon-section d-flex justify-content-center align-items-center">
            <i class="bi bi-file-earmark-ruled"></i>
          </div>
          <div class="fw-semibold ms-2 media-text">Media</div>
        </div>

        <div class="d-flex flex-wrap gap-5 pt-0 mt-0">
          <h1 class="ps-5 policy-text">Policy review</h1>
          <p class="ps-2 pt-3 policy-subtext">Deadline: 23rd July, 2025</p>
        </div>

        <div>
          <p class="task-subtext ps-5 pt-3">Subtasks(11)</p>
        </div>



        <div class="accordion ps-5" style="border-top: 0;" id="accordionExample">
          <div class="accordion-item border-0">
            <h2 class="accordion-header" id="headingOne">
              <div class="accordion-item border-0">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                    style="font-size: 16px; color: #000;">

                    <!-- Left Side: Subtask -->
                    <div class="d-flex align-items-center">
                      <i class="bi bi-dot fs-2 me-1"></i>
                      <span class="left-subtask">Subtask name</span>
                    </div>


                    <!-- Right Side: Deadline + Icons -->
                    <div class="d-flex align-items-center gap-5 ms-auto">
                      <small class="right-deadline">Deadline: 23rd July, 2025</small>

                      <a href="#" class="right-method d-flex align-items-center text-decoration-none">
                        <i class="bi bi-shield-check me-1"></i> Methods
                      </a>

                      <a href="#" class="right-method d-flex align-items-center text-decoration-none">
                        <i class="bi bi-tools me-1"></i> Tools
                      </a>

                      <a href="#" class="right-method d-flex align-items-center text-decoration-none">
                        <i class="bi bi-circle-fill me-1"></i> Resources
                      </a>
                    </div>


                  </button>
                </h2>

                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
                  <div class="accordion-body">
                    <p class="body-subtask">Instructions for the subtask:</p>

                  </div>
                </div>
              </div>


            </h2>

            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
              <div class="accordion-body">
                <p class="body-subhead">One morning, when Gregor Samsa woke from troubled dreams, he found himself
                  transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his
                  head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.
                  The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs,
                  pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's
                  happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too
                  small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out
                  on the table - Samsa was a travelling salesman - and above it there hung a picture that he had
                  recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady
                  fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole
                  of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather.
                  Drops
                </p>
                <div><a href="" style="color: #0096D6; text-decoration: none;">https://grcmentor.ai/link</a></div>
              </div>
            </div>
          </div>

          <div class="accordion-item" style="border-top: 0; border-left: 0; border-right: 0;">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed left-subtask" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <i class="bi bi-dot fs-2 me-1"></i> Subtask name
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item" style="border-top: 0;  border-left: 0; border-right: 0;">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed left-subtask" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <i class="bi bi-dot fs-2 me-1"></i> Subtask name
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Starmedia from '@/components/Starmedia.vue';

export default {
  name: "Policyreview1View",
  components: { Starmedia }
}

</script>



<style >
.icon-section {
  width: 40px;
  /* size of the circle */
  height: 40px;
  background-color: #D5F2FF;
  /* background color like your image */
  border-radius: 50%;
  /* makes it a circle */
  display: flex;
  /* centers the icon */
  justify-content: center;
  align-items: center;
  font-size: 24px;
  /* size of the icon */
  color: #0096D6;
  /* icon color */
}

.media-text {
  color: #0096D6;
  font-size: 20px;
  font-weight: 500;
}

.policy-text {
  color: #000000;
}

.policy-subtext {
  font-size: 13px;
  color: #000000;
}

.task-subtext {
  color: #00000099;
  font-size: 13px;
  font-weight: 600;
}

.accordion-button:not(.collapsed) {
  background-color: white;
}

.accordion-button {
  background-color: #fff;
  box-shadow: none;
}

.accordion-button:focus {
  box-shadow: none;
}

.accordion-button:not(.collapsed) {
  background-color: #fff;
  color: #000;
}

.accordion-button .bi {
  font-size: 16px;
}

.left-subtask {
  font-weight: 500;
}

.right-deadline {
  font-size: 12px;
  font-weight: 500;
  color: #00000099;
}

.right-method {
  color: #0087C1;
  font-size: 13px;
  font-weight: 500;
}

.body-subtask {
  font-size: 15px;
  font-weight: 600;
  color: #000000DE;
}

.body-subhead {
  font-size: 13px;
  font-weight: 500;
  color: #000000;
}
</style>
