<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-1 col-sm-4 col-md-4 col-lg-3 col-xl-4 col-xxl-4"></div>
      <div class="col-11 col-sm-8 col-md-8 col-lg-9 col-xl-8 col-xxl-8 d-inline-flex">
        
          <select class="selectarea form-select" aria-label="Default select example">
            <option selected>เลือกทำเลที่คุณสนใจ</option>
            <option value="1">บึงทับช้าง</option>
            <option value="2">หัวทะเล</option>
          </select>
       
          <select class="selectprice form-select" aria-label="Default select example">
            <option selected>ราคาเริ่มต้นโครงการ</option>
            <option value="1">ต่ำกว่า 2ล้านบาท</option>
            <option value="2">2ล้านบาท - 2.5ล้านบาท</option>
            <option value="3">2.5ล้านบาท - 3ล้านบาท</option>
            <option value="4">3ล้านบาท - 3.5ล้านบาท</option>
            <option value="4">3.5ล้านบาทขึ้นไป</option>
          </select>
        
       
          <select class="selectsort form-select" aria-label="Default select example">
            <option selected>เรียงลำดับใหม่ - เก่า</option>
            <option value="1">เรียงลำดับเก่า - ใหม่</option>
          </select>
    
      </div>
    </div>

    <div class="row" style="margin-top: 50px">
      <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-0">
        <div class="cards">
          <img
            src="https://www.u-sabai.com/wp-content/uploads/2021/02/Harmonize_1778-scaled.jpg"
            class="feature-img"
            alt="Terrain"
          />

          <div class="content">
            <div class="labal">
              <span class="newlabel">โครงการใหม่</span>
            </div>
            <div class="nameproject">
              <p>ชื่อโครงการ</p>
              <p>ทำเล</p>
            </div>
            <div class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, at
              assumenda et quia doloremque consequuntur
            </div>

            <div class="nearby">
              <div class="nearby1">
                <div class="iconlocation">
                  <i class="fa-solid fa-car fa-xl"></i>
                </div>
                <span
                  >เซ็นทรัลโคราช
                  <p>10 km.</p></span
                >
              </div>

              <div class="nearby2">
                <div class="iconlocation">
                  <i class="fa-solid fa-car fa-xl"></i>
                </div>
                <span>
                  เซ็นทรัลโคราช
                  <p>10 km.</p></span
                >
              </div>
            </div>

            <div class="price">
              <p>*ราคาเริ่มต้น 2.1 ล้านบาท</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-0">
        <div class="cards">
          <img
            src="https://www.u-sabai.com/wp-content/uploads/2020/06/about7.png"
            class="feature-img"
            alt="Terrain"
          />

          <div class="content">
            <div class="labal">
              <span class="newlabel">โครงการใหม่</span>
            </div>
            <div class="nameproject">
              <p>ชื่อโครงการ</p>
              <p>ทำเล</p>
            </div>
            <div class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, at
              assumenda et quia doloremque consequuntur
            </div>

            <div class="nearby">
              <div class="nearby1">
                <div class="iconlocation">
                  <i class="fa-solid fa-car fa-xl"></i>
                </div>
                <span
                  >เซ็นทรัลโคราช
                  <p>10 km.</p></span
                >
              </div>

              <div class="nearby2">
                <div class="iconlocation">
                  <i class="fa-solid fa-car fa-xl"></i>
                </div>
                <span>
                  เซ็นทรัลโคราช
                  <p>10 km.</p></span
                >
              </div>
            </div>

            <div class="price">
              <p>*ราคาเริ่มต้น 2.1 ล้านบาท</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-0"></div>
    </div>
  </div>
</template>

<script>
export default {
     name: "AllcardPJC",
}
</script>

<style scoped>
.selectarea {
  width: 50%;
  border: 3px solid #ada7ff;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
}

.selectprice {
  width: 50%;
  border: 3px solid #cbb2fe;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
}

.selectsort {
  width: 50%;
  border: 3px solid #dab6fc;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
}

option {
  border: none;
}

/*--------------------------------------css card----------------------------------------------*/
.cards {
  display: grid;
  width: 369px;
  height: 540px;
  /* max-width: 185px;
  max-height: 250px; */
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
}

.feature-img {
  height: 100%;
  width: 100%;
  top: 0;
  left: 50;
  transform: scale(1.3);
}

.content {
  position: absolute;
  width: 369px;
  height: 540px;
  /* max-width: 185px;
  max-height: 250px; */
  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 80%);
  color: #ffffff;
}

.nameproject {
  font-weight: bold;
}

.nameproject p {
  font-size: 20px;
  font-weight: bold;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 20px;
}

.description {
  padding: 10px 20px 10px 20px;
  display: none;
}

.labal {
  height: 65%;
}

.nearby {
  display: inline-flex;
  margin-top: 10px;
  padding: 0px 0px 0px 20px;
}

.nearby1 {
  display: inline-flex;
  padding-right: 15px;
}

.nearby i {
  margin-top: 12px;
  padding: 10px;
}

.nearby2 {
  display: inline-flex;
  padding-right: 15px;
}

.nearby p {
  margin: 0;
  font-size: 10px;
  color: rgb(188, 188, 188);
  font-weight: bold;
}

.labal {
  text-align: end;
}

.newlabel {
  padding: 2px 15px 2px 15px;
  background-color: rgb(255, 0, 0);
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}

.price {
  padding: 0px 15px 0px 0px;
  text-align: end;
  margin-top: 30px;
  font-weight: bold;
  font-size: 18px;
}

.cards:hover {
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.521);
  transition: 0.3s;
  transform: scale(1.01);
}

/*--------------------------------------css card end----------------------------------------------*/


@media only screen and (max-width: 1180px) {

 .cards {
    /* width: 240px;
height: 300px; */
    width: 280px;
    height: 350px;
  }

  .content {
    width: 280px;
    height: 350px;
  }

  .nameproject p {
    font-size: 16px;
  }

  .labal {
    height: 60%;
  }
  .nearby {
    padding: 0px 0px 0px 10px;
  }
  .nearby p {
    font-size: 12px;
  }
  .nearby span {
    font-size: 12px;
  }
  .price {
    padding: 0px 5px 0px 0px;
    margin-top: 20px;
    font-size: 12px;
  }
  .price p {
    margin-bottom: 0px;
  }

  .iconlocation {
    font-size: 12px;
  }
  .newlabel {
    background-color: rgb(255, 0, 0);
    font-size: 10px;
  }
  .nearby1 {
    padding-right: 0px;
  }
  .nearby2 {
    padding-right: 0px;
  }
}

@media only screen and (max-width: 896px) {
   .selectarea {
    font-size: 12px;
  }
  .selectprice {
    font-size: 12px;
    margin-left: 5px;
  }
  .selectsort {
    font-size: 12px;
    margin-left: 5px;
  }


.cards {
/* width: 240px;
height: 300px; */
  width: 230px;
  height: 280px;
}


  .content {
  width: 230px;
  height: 280px;
}


  .nameproject p {
    font-size: 13px;
  }

  .labal {
    height: 55%;
  }
  .nearby {
    padding: 0px;
  }
  .nearby p {
    font-size: 10px;
  }
  .nearby span {
    font-size: 9px;
  }
  .price {
    padding: 0px 5px 0px 0px;
    margin-top: 20px;
    font-size: 12px;
  }
  .price p {
    margin-bottom: 0px;
  }

  .iconlocation {
    font-size: 12px;
  }
  .newlabel {
    background-color: rgb(255, 0, 0);
    font-size: 10px;
  }
  .nearby1 {
    padding-right: 0px;
  }
  .nearby2 {
    padding-right: 0px;
  }
}

@media only screen and (max-width: 414px) {
  .selectarea {
    font-size: 12px;
  }
  .selectprice {
    font-size: 12px;
    margin-left: 5px;
  }
  .selectsort {
    font-size: 12px;
    margin-left: 5px;
  }

  /* -----------------------------------------------card-------------------------------------------- */

.cards {

  width: 185px;
  height: 260px;

}


  .content {
  width: 185px;
  height: 260px;
}


  .nameproject p {
    font-size: 13px;
  }

  .labal {
    height: 50%;
  }
  .nearby {
    padding: 0px;
  }
  .nearby p {
    font-size: 10px;
  }
  .nearby span {
    font-size: 9px;
  }
  .price {
    padding: 0px 5px 0px 0px;
    margin-top: 20px;
    font-size: 12px;
  }
  .price p {
    margin-bottom: 0px;
  }

  .iconlocation {
    font-size: 12px;
  }
  .newlabel {
    background-color: rgb(255, 0, 0);
    font-size: 10px;
  }
  .nearby1 {
    padding-right: 0px;
  }
  .nearby2 {
    padding-right: 0px;
  }
   /* -----------------------------------------------end card-------------------------------------------- */
}

</style>
