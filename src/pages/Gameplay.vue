<template>
  <div>
      <Navbar />

      <section class="about">

          <h1 class="heading"> GAMEPLAY <span>HOW TO</span> </h1>

          <div class="row">

              <div class="info-container">

                  <h1>Menu Exploration</h1>

                  <div class="box-container">

                      <div class="box">
                          <h3> <span> Step 1: </span> Download and install Minecraft </h3>
                          <h3> <span> Step 2: </span> Open Minecraft  </h3>
                          <h3> <span> Step 3 : </span> Click Play</h3>
                          <h3> <span> Step 4 : </span> Click Create New World </h3>

                      </div>

                      <div class="box">
                        <h3> <span> Step 5 : </span> Change World name </h3>
                        <h3> <span> Step 6 : </span> Click Create New World </h3>
                        <h3> <span>Step 7 : </span> Click more optines to setting other </h3>
                        <h3> <span>Step 8 : </span> Click Create World </h3>
                      </div>

                  </div>

                  <a href="/profilewithcss/files/resume.pdf" class="btn"> Download Minecraft <i class="fas fa-download"></i>
                  </a>

              </div>

              <div class="count-container">

                  <div class="box">
                      <h3>Hard+</h3>
                      <p>Hardcore Mode</p>
                  </div>

                  <div class="box">
                      <h3>Normal+</h3>
                      <p>Survival Mode</p>
                  </div>

                  <div class="box">
                      <h3>Easy+</h3>
                      <p>Creative Mode</p>
                  </div>

                  <div class="box">
                      <h3>+</h3>
                      <p>Mod and other</p>
                  </div>

              </div>

          </div>

      </section>

      <!-- about section ends -->

      <!-- skills section starts  -->

      <section class="skills">

          <h1 class="heading"> <span>Default</span> ITEMS </h1>

          <div class="box-container">
              <div class="box">
                  <img src="images/icon-1.png">
                  <h3>Eye of Ender </h3>
              </div>
              <div class="box">
                  <img src="images/icon-2.png">
                  <h3>Ender Pearl </h3>
              </div>
              <div class="box">
                  <img src="images/icon-3.png">
                  <h3>Egg</h3>
              </div>
              <div class="box">
                  <img src="images/icon-4.png">
                  <h3>Fireworks</h3>
              </div>
              <div class="box">
                  <img src="images/icon-5.png">
                  <h3>Snowball</h3>
              </div>
              <div class="box">
                  <img src="images/icon-6.png">
                  <h3>Potions</h3>
              </div>
          </div>

      </section>

      <!-- skills section ends -->

      <!-- education section starts  -->

      <section class="education">

          <h1 class="heading"> <span>Minecraft</span> Platform </h1>

          <div class="box-container">

              <div class="box">
                  <i class="fas fa-briefcase"></i>
                  <span>MINECRAFT: JAVA EDITION (PC / MAC)</span>
                  <h3>PC Version</h3>
                  <p>Start by opening the Minecraft launcher. If you don’t have the launcher you can download it here. The launcher should automatically show you the latest release. If not, press the arrow to the right of the play button and select “Latest Release”. Easy!</p>
              </div>

              <div class="box">
                  <i class="fas fa-briefcase"></i>
                  <span>IOS / ANDROID</span>
                  <h3>Smartphone Version</h3>
                  <p>Open up App Store or Google Play on your device and search for “Minecraft”. If you own Minecraft already you should be prompted to update Minecraft if it isn’t already updated. If you have the latest version installed just press “Open” and play!</p>
              </div>

              <div class="box">
                  <i class="fas fa-briefcase"></i>
                  <span>XBOX</span>
                  <h3>Xbox Console</h3>
                  <p>Go to “My Apps & Games”, select Minecraft and press the more options button. From the list, select “Manage game & add-ons” and then “Updates”. Any updates will be available here. If no updates are available here, your game is fully updated!
                  </p>
              </div>

              <div class="box">
                  <i class="fas fa-briefcase"></i>
                  <span>PLAYSTATION 4</span>
                  <h3>PS Version</h3>
                  <p>Minecraft for PS4 should update automatically. If updates are not set to automatic on your PS4, you can select the game using the ‘options’ button and then select ‘check for update’ from the new menu.</p>
              </div>


          </div>

      </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar }
}
</script>

<style>
</style>