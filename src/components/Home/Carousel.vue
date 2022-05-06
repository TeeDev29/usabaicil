<template>
  <div class="container">
    <div class="sildeproject">
      <div class="row">
        <div class="col-12 col-lg-6 col-md-12 col-sm-12 col-xl-6 col-xxl-6">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators m-auto">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <!--w-100 height: 450px-->
              <div class="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1649150202935-f6b0c85324b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  class="d-block w-100"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1649097272463-d095d762860e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  class="d-block w-100"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1649117594593-ca4332ec6f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  class="d-block w-100"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="col-12 col-lg-6 col-md-12 col-sm-12 col-xl-6 col-xxl-6">
          <div class="all-sildeproject">
            <p id="tital-sildeproject">
              <span class="comma">"</span> โครงการในเครือบ้านอยู่สบาย
              <span class="comma">"</span>
            </p>
            <p id="content-sildeproject">
              &nbsp; &nbsp;
              ทีมงานบ้านอยู่สบายทุกคนเชื่อเสมอว่าความจริงใจต่อลูกบ้านทุกท่าน คือ
              สิ่งที่ช่วยผลักดันให้ บ้านอยู่สบาย
              เป็นโครงการที่ได้รับการตอบรับที่ดีมาโดยตลอด เราคิดเสมอว่า
              ลูกบ้านทุกท่าน คือ สมาชิกในครอบครัวของเรา
              เราจึงใส่ใจในทุกขั้นตอนการผลิตและการให้บริการ.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaroselCPN",
};
</script>

<style scoped>
.sildeproject {
  margin-top: 0px;
  /* background-color:#ff4d6d; */
}

.comma {
  color: #ff4d6d;
}

.carousel {
  height: 100%;
}
.carousel-inner {
  width: 100%;
  height: 22vw;
  min-height: 200px;
  border-radius: 10px;
}

.carousel-item {
  /* height: 50%;
    width: 100%; */
  align-items: center;
}

#tital-sildeproject {
  font-size: 26px;
  font-weight: bold;
}

#content-sildeproject {
  text-align: justify;
  margin-top: 50px;
  font-size: 20px;
}

.all-sildeproject {
  padding: 80px 100px 0px 20px;
}

@media only screen and (max-width: 1180px) {
  .sildeproject {
    margin-top: 130px;
  }

  .carousel {
    height: 100%;
  }
  .carousel-inner {
    width: 100%;
    height: 22vw;
    min-height: 300px;
    background-color: aquamarine;
  }

  .carousel-item {
    /* height: 50%;
    width: 100%; */
    align-items: center;
  }

  #tital-sildeproject {
    font-size: 26px;
  }

  #content-sildeproject {
    margin-top: 20px;
    font-size: 14px;
  }

  .all-sildeproject {
    text-align: center;
    padding: 80px 30px 0px 30px;
  }
}

@media only screen and (max-width: 896px) {
  .sildeproject {
    margin-top: 130px;
  }

  .carousel {
    height: 100%;
  }
  .carousel-inner {
    width: 100%;
    height: 22vw;
    min-height: 300px;
    background-color: aquamarine;
  }

  .carousel-item {
    /* height: 50%;
    width: 100%; */
    align-items: center;
  }

  #tital-sildeproject {
    font-size: 16px;
  }

  #content-sildeproject {
    margin-top: 20px;
    font-size: 14px;
  }

  .all-sildeproject {
    text-align: center;
    padding: 30px 30px 0px 30px;
  }
}

@media only screen and (max-width: 414px) {
  .sildeproject {
    margin-top: 45px;
  }

  .carousel {
    height: 100%;
  }
  .carousel-inner {
    width: 100%;
    height: 22vw;
    min-height: 200px;
    background-color: aquamarine;
  }

  .carousel-item {
    /* height: 50%;
    width: 100%; */
    align-items: center;
  }

  #tital-sildeproject {
    font-size: 16px;
  }

  #content-sildeproject {
    margin-top: 20px;
    font-size: 12px;
  }

  .all-sildeproject {
    text-align: center;
    padding: 30px 30px 0px 30px;
  }

  /* .all-sildeproject {
    padding: 30px 30px 0px 30px;
  }

  #tital-sildeproject {
    font-size: 16px;
    text-align: center;
    font-weight: bold;
  }

  #content-sildeproject {
    margin-top: 20px;
    font-size: 12px;
  }

  .carousel {
    height: 90%;
  }

  .carousel-inner {
    min-height: 180px;
  } */
}
</style>
