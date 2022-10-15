<template>
 <div>
    <navbar />
    <section class="home">

<div class="image">
    <img src="images/profile.png" alt="">
</div>

<div class="content">
    <h3>"Minecraft"</h3>
    <span>"Mojang Studios"</span>
    <p>Minecraft เป็นเกมแซนด์บ็อกซ์สามมิติที่ไม่มีจุดมุ่งหมาย คือผู้เล่นมีอิสระในการเลือกว่าจะเล่นเกมอย่างไร อย่างไรก็ตามก็มีระบบอะชีฟเมนต์ (Achievement) เกมการเล่นโดยค่าเริ่มต้นจะเป็นมุมมองบุคคลที่หนึ่ง แต่ผู้เล่นก็สามารถปรับเป็นมุมมองบุคคลที่สามได้ เกมการเล่นหลัก ๆ ของเกมนี้จะเกี่ยวกับการทำลายและวางบล็อก โดยโลกของเกมนี้ประกอบไปด้วยวัตถุที่เป็น 3 มิติ (โดยส่วนใหญ่จะเป็นลูกบาศก์) จัดเรียงในรูปแบบของตารางและบล็อกเหล่านั้นจะแทนเป็นวัสดุต่าง ๆ เช่น ดิน หิน แร่ต่าง ๆ น้ำ ลาวา ลำต้นของต้นไม้ เป็นต้น ในขณะที่ผู้เล่นสามารถเดินทางได้อย่างอิสระรอบ ๆ โลก แต่วัตถุต่าง ๆ จะสามารถถูกวางไว้ในรูปแบบของตารางที่กำหนดไว้เท่านั้น ผู้เล่นสามารถเก็บวัตถุเหล่านี้และวางมันในที่ที่ผู้เล่นต้องการได้</p>
    

</div>
<div class="content">
    <p> <span>Type Game : </span> Survival , Creative , Single-Player , Multiplayer , Sandbox </p>
    <p> <span>Platform(s) : </span> Windows, macOS, Linux </p>
    <p> <span>Publisher(s) : </span> Mojang Studios, Xbox Game Studios, Sony Interactive Entertainment </p>
    <p> <span>Engine : </span> 	Lightweight Java Game Library, Custom C++ Library </p>
    <p> <span>Artist(s) : </span> Markus Toivonen , Jasper Boerstra , Kristoffer Zetterstrand</p>
</div>

</section>
 </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import axios from 'axios'


export default {
    components: { Navbar },
    methods: {
        async fetchExperience() {
            try {
                let res = await axios.get("https://633fc566e44b83bc73c0f545.mockapi.io/profile/v1/experiences")
                this.experience = res.data
            } catch (error) {
        
            }
        }
         
    },
    data() { 
        return { 
            experience: []
        }
    },
    beforeMount() {
        this.fetchExperience()
    }

            
    } 

</script>

<style>

</style>