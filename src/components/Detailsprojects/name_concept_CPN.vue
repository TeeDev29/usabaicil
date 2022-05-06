<template>
  <div class="container">
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <iframe
          src="https://www.youtube.com/embed/Ua1I4qd8Q8M?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="disvedio col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <p id="nameproject">THE ABSOLUTE</p>
        <p id="description">
          &nbsp; &nbsp; &nbsp;&nbsp;
          <b
            >เป็นโครงการสุดท้ายของบ้านอยู่สบายโซนหัวทะเล มีถนนสี่แลนตัดผ่าน
            ใกล้สวนสมเด็จพระเทพ * โครงการเงียบสงบเหมาะกับการอยู่อาศัย
            รายล้อมไปด้วยธรรมชาติ * ออกแบบบ้านให้มีความสมบูรณ์แบบ
            สามารถตอบโจทย์ได้ครบถ้วน อย่างลงตัว</b
          >
        </p>
        <p id="price"><b>เริ่มต้น* 2.65ล้านบาท</b></p>
        <p id="interest">ดอกเบี้ย 2.25% นาน 3 ปี</p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="caseinspilation col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <p id="nameproject">แนวคิดโครงการ</p>
        <p class="ception text-center fw-bold">
          " สร้างสมดุลชีวิต ในทุกวันของชีวิต "
        </p>
        <p class="inspilation fw-bold">
          &nbsp; &nbsp; จากนิยามการสร้างสมดุลและการใช้ชีวิต
          สู่แรงบันดาลใจในการออกแบบโครงการบ้านที่สะท้อนความเรียบง่าย Minimal
          รักษาสมดุลและเป็นหนึ่งเดียวกับธรรมชาติ สงบ ผ่อนคลาย แต่ทันสมัย
        </p>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <img
          id="concept"
          src="https://www.u-sabai.com/wp-content/uploads/2020/07/DSC02618.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin-top: 100px;
}

#concept {
  width: 100%;
  height: 315px;
}

#nameproject {
  font-size: 30px;
  color: #ff4d6d;
  font-weight: bold;
}

#price {
  text-align: end;
  font-weight: bold;
  margin-top: 10%;
  margin-bottom: 0px;
  font-size: 24px;
}

#interest {
  text-align: end;
  font-size: 14px;
}

#description {
  font-size: 18px;
  margin-top: 5%;
}

.caseinspilation {
  /* pt-5 ps-5 pe-5 */
  padding: auto;
}

.ception {
  margin-top: 12px;
  margin-bottom: 12px;
}
iframe{
      width:100%;
      height:315px;
}

@media only screen and (max-width: 1180px) {

  .caseinspilation {
    padding: auto;
  }
  #nameproject {
    font-size: 18px;
  }
  .inspilation {
    font-size: 14px;
  }
  #concept {
    width: 100%;
    height: 180px;
  }

  .ception {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  #description {
    font-size: 12px;
  }
  .disvedio{
     padding: auto;
      font-size: 5px;
  }
  #price{
     font-size: 16px;
  }
  #interest{
    font-size: 10px;
  }
  iframe{
      width:100%;
      height:200px;
  }


}

@media only screen and (max-width: 896px) {
.caseinspilation {
    padding: auto;
  }
  #nameproject {
    font-size: 16px;
  }
  .inspilation {
    font-size: 12px;
  }
  #concept {
    width: 100%;
    height: 180px;
  }

  .ception {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  #description {
    font-size: 12px;
  }
  .disvedio{
     padding: auto;
      font-size: 5px;
  }
  #price{
     font-size: 12px;
  }
  #interest{
    font-size: 10px;
  }
  iframe{
      width:100%;
      height:200px;
  }
}

@media only screen and (max-width: 414px) {
  .caseinspilation {
    padding: auto;
  }
  #nameproject {
    font-size: 14px;
  }
  .inspilation {
    font-size: 9px;
  }
  #concept {
    width: 100%;
    height: 150px;
  }

  .ception {
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 10px;
  }
  #description {
    font-size: 8px;
  }
  .disvedio{
     padding: auto;
      font-size: 5px;
  }
  #price{
     font-size: 12px;
  }
  #interest{
    font-size: 10px;
  }
  iframe{
      width:100%;
      height:150px;
  }
}
</style>
