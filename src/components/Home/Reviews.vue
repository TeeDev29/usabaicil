<template>
  <div class="container" >
    <div class="row">
      <div class="review">
        <p id="titalreview">รีวิวจากลูกบ้าน โครงการ U-sabai</p>
      </div>
    </div>
    <div class="row" >
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <div class="allcardreview">
              <div class="card-review">
                <img
                  src="https://file.baanbaan.co/project/l/637541545208998973-ABL_security.jpg"
                  class="feature-img"
                  alt="Terrain"
                />

                <div class="content">
                  <div class="description">
                    &nbsp;&nbsp;" Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptate, maxime? "
                  </div>
                  <div class="reviewby">
                    <p id="byproject">THE ABSOLUTE</p>
                    <p id="byname">คุณไหมไทย</p>
                  </div>
                </div>
              </div>

              <div class="card-review">
                <img
                  src="https://www.u-sabai.com/wp-content/uploads/2021/02/HARMONIZE_3.jpg"
                  class="feature-img"
                  alt="Terrain"
                />

                <div class="content">
                  <div class="description">
                    &nbsp;&nbsp;" Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptate, maxime? "
                  </div>
                  <div class="reviewby">
                    <p id="byproject">THE ABSOLUTE</p>
                    <p id="byname">คุณไหมไทย</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="2000">
            <div class="allcardreview">
              <div class="card-review">
                <img
                  src="https://www.u-sabai.com/wp-content/uploads/2020/07/3-1.jpg"
                  class="feature-img"
                  alt="Terrain"
                />

                <div class="content">
                  <div class="description">
                    &nbsp;&nbsp;" Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptate, maxime? "
                  </div>
                  <div class="reviewby">
                    <p id="byproject">THE ABSOLUTE</p>
                    <p id="byname">คุณไหมไทย</p>
                  </div>
                </div>
              </div>

              <div class="card-review">
                <img
                  src="https://www.u-sabai.com/wp-content/uploads/2021/02/HARMONIZE_3.jpg"
                  class="feature-img"
                  alt="Terrain"
                />

                <div class="content">
                  <div class="description">
                    &nbsp;&nbsp;" Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptate, maxime? "
                  </div>
                  <div class="reviewby">
                    <p id="byproject">THE ABSOLUTE</p>
                    <p id="byname">คุณไหมไทย</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="allcardreview">
              <div class="card-review">
                <img
                  src="https://file.baanbaan.co/project/l/637541545208998973-ABL_security.jpg"
                  class="feature-img"
                  alt="Terrain"
                />

                <div class="content">
                  <div class="description">
                    &nbsp;&nbsp;" Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptate, maxime? "
                  </div>
                  <div class="reviewby">
                    <p id="byproject">THE ABSOLUTE</p>
                    <p id="byname">คุณไหมไทย</p>
                  </div>
                </div>
              </div>

              <div class="card-review">
                <img
                  src="https://www.u-sabai.com/wp-content/uploads/2021/02/HARMONIZE_3.jpg"
                  class="feature-img"
                  alt="Terrain"
                />

                <div class="content">
                  <div class="description">
                    &nbsp;&nbsp;" Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptate, maxime? "
                  </div>
                  <div class="reviewby">
                    <p id="byproject">THE ABSOLUTE</p>
                    <p id="byname">คุณไหมไทย</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev d-none"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          class="carousel-control-next d-none"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewsCPN",
};
</script>

<style scoped>
.container{
  margin-top: 80px;
}

#titalreview {
  font-size: 26px;
  font-weight: bold;
  color: #ff4d6d;
  margin-bottom: 20px;
}

.allcardreview {
  display: inline-flex;
  padding: 0% 7% 0% 7%;
  
}

.card-review {
  display: grid;
  width: 466px;
  height: 320px;
  overflow: hidden;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.452); */
  margin-left: 50px;
    border-radius:10px 10px 10px 10px;
}
.feature-img {
  height: 100%;
  width: 100%;
  /* position: absolute; */
  top: 0;
  left: 50;
  transform: scale(1.3);
  /* transform-origin:left 70%; */
}
.content {
  position: absolute;
  width: 466px;
  height: 320px;
  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  color: #ffffff;
    border-radius:10px 10px 10px 10px;
}

.description {
  margin: auto;
  width: 90%;
  /* border: 3px solid blue;    */
  padding: 3%;
  margin-top: 20%;
}

.reviewby {
  text-align: end;
  padding-right: 3%;
}
#byproject {
  font-size: 14px;
  margin: 0;
  margin-top: 15%;
}

#byname {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

@media only screen and (max-width: 1180px) {
  #titalreview {
    font-size: 26px;
  }

  .carousel{
    height: 232px;
  }
  
  .card-review {
    width: 400px;
    height: 220px;
  }

  .content {
     width: 400px;
    height: 220px;
  }

  #byproject {
    font-size: 12px;
    margin: 0;
    margin-top: 5%;
  }

  #byname {
    font-size: 12px;
  }

  .description {
    font-size: 12px;
    margin: auto;
    width: 95%;
    padding: 3%;
    margin-top: 20%;
  }

  .allcardreview {
    display: inline-flex;
    padding: 0;
  }
  .card-review {
    margin:0 auto;
    margin-left: 35px;
  }


}

@media only screen and (max-width: 896px) {

  .carousel{
    height: 180px;
  }


  #titalreview {
    font-size: 20px;
     margin-bottom: 20px;
  }

  .card-review {
    width: 300px;
    height: 180px;
  }

  .content {
     width: 300px;
    height: 180px;
  }

  #byproject {
    font-size: 12px;
    margin: 0;
    margin-top: 5%;
  }

  #byname {
    font-size: 12px;
  }

  .description {
    font-size: 12px;
    margin: auto;
    width: 95%;
    padding: 3%;
    margin-top: 20%;
  }

  .allcardreview {
    display: inline-flex;
    padding: 0;
  }
  .card-review {
    margin:0 auto;
    margin-left: 15px;
  }

}

@media only screen and (max-width: 414px) {

.container{
  margin-top: 20px;
}

  .carousel{
    height: 100px;
  }

  #titalreview {
    font-size: 16px;
  }

  #titalreview {
  margin-bottom: 20px;
}

  .card-review {
    width: 180px;
    height: 100px;
  }

  .content {
    width: 180px;
    height: 100px;
  }

  #byproject {
    font-size: 8px;
    margin: 0;
    margin-top: 2%;
  }

  #byname {
    font-size: 8px;
  }

  .description {
    font-size: 8px;
    margin: auto;
    width: 95%;
    padding: 3%;
    margin-top: 10%;
  }

  .allcardreview {
    display: inline-flex;
    padding: 0;
  }
  .card-review {
    margin:0 auto;
    margin-left: 10px;
  }
}

@media only screen and (max-width: 393px) {

  .card-review {
    width: 170px;
    height: 100px;
  }

  .content {
    width: 170px;
    height: 100px;
  }

}
</style>
