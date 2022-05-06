<template>
  <div class="container mt-5">
    <div class="title-recommend">
      <p id="main-recommend">บ้านอยู่สบายจุดเริ่มต้น ของชีวิตที่ดี</p>

      <div class="description">
        <p id="description-recommend">
          ทีมงานบ้านอยู่สบายทุกคนเชื่อเสมอว่าความจริงใจต่อลูกบ้านทุกท่าน คือ
          สิ่งที่ช่วยผลักดันให้ บ้านอยู่สบาย
          เป็นโครงการที่ได้รับการตอบรับที่ดีมาโดยตลอด เราคิดเสมอว่า
          ลูกบ้านทุกท่าน คือ สมาชิกในครอบครัวของเรา
          เราจึงใส่ใจในทุกขั้นตอนการผลิตและการให้บริการ
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommedPJH2F",
};
</script>

<style scoped>
.description {
  margin: auto;
  width: 60%;
  /* border: 3px solid #ddd;   */
  padding: 3%;
}

#main-recommend {
  font-size: 36px;
  font-weight: bold;
  color: #ff4d6d;
  text-align: center;
  margin-bottom: 0px;
}
#description-recommend {
  font-weight: bold;
  font-size: 18px;
  text-align: center;
}



@media only screen and (max-width: 1180px) {
 #main-recommend {
    font-size: 16px;
  }

  #description-recommend {
    font-size: 14px;
  }
  .description {
    margin: auto;
    width: 90%;
    /* border: 3px solid #ddd;   */
    padding: 2%;
  }
}

@media only screen and (max-width: 844px) {
    #main-recommend {
    font-size: 16px; 
  }

  #description-recommend {
    font-size: 14px;
  }
  .description {
    margin: auto;
    width: 80%;
    /* border: 3px solid #ddd;   */
    padding: 2%;
  }
}

/* @media screen and (max-width: 896px) and (min-width: 414px){  
  #main-recommend {
    font-size: 12px;
  }

  #description-recommend {
    font-size: 10px;
  }
  .description {
    margin: auto;
    width: 80%;
    padding: 2%;
  }
} */

@media only screen and (max-width: 414px) {
  #main-recommend {
    font-size: 12px;
  }

  #description-recommend {
    font-size: 10px;
  }
  .description {
    margin: auto;
    width: 80%;
    padding: 2%;
  }
}





</style>
