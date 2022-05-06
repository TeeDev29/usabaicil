<template>
  <div class="container mt-5">
    <div id="nameproject">Name Project</div>
    <div id="nameplan"><span>"</span> Name plan <span>"</span></div>
    <div id="disception">
      <p>
        &nbsp; &nbsp; <span>"</span> โครงการน้องใหม่ เครือบ้านอยู่สบาย
        สไตล์มินิมอล กับแบบบ้าน Achieve มุมมองใหม่ เพดานสูง 5 เมตร
        มาพร้อมกับฝ้าห้องรับแขกและห้องรับประทานอาหาร
        การออกแบบที่ทันสมัยน้อยแต่มาก เรียบแต่โก้ <span>"</span>
      </p>
    </div>
    <div class="row">
      <div class="col-12 col-sm-12 col-xxl-7">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="btn carousel-indicators">
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
            <div class="carousel-item active">
              <img
                src="https://www.u-sabai.com/wp-content/uploads/2020/07/the-absolute-virgo.jpg"
                class="d-block"
                alt=""
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.u-sabai.com/wp-content/uploads/2020/07/the-absolute-pisces.jpg"
                class="d-block"
                alt=""
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
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
              style="color: aqua"
            ></span>
          </button>
        </div>
      </div>

      <div class="col-12 col-sm-12 col-xxl-5">
        <p id="area">
          พื้นที่ใช้สอย : <span id="numarea">157</span
          ><span id="unitarea">ตาราง.เมตร</span>
        </p>
        <div class="row">
          <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-4">
            <div class="room">
              <img id="room" src="@/assets/icon/icon08.png" />
              <p>ห้องนอน : 3 ห้อง</p>
            </div>
          </div>
          <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-4">
            <div class="room">
              <img id="room" src="@/assets/icon/icon02.png" />
              <p>ห้องน้ำ : 3 ห้อง</p>
            </div>
          </div>
          <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-4">
            <div class="room">
              <img id="room" src="@/assets/icon/icon04.png" />
              <p>ห้องรับแขก : 3 ห้อง</p>
            </div>
          </div>

          <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-4">
            <div class="room">
              <img id="room" src="@/assets/icon/icon03.png" />
              <p>ห้องอาหาร : 3 ห้อง</p>
            </div>
          </div>

          <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-4">
            <div class="room">
              <img id="room" src="@/assets/icon/icon07.png" />
              <p>ห้องครัว : 3 ห้อง</p>
            </div>
          </div>

          <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-4">
            <div class="room">
              <img id="room" src="@/assets/icon/icon01.png" />
              <p>ที่จอดรถ : 2 คัน</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <gallerydetail />
    </div>
  </div>
</template>

<script>
import gallerydetail from "@/components/Detailsprojects/gallery_detail_CPN.vue";
export default {
  // name: 'typeplanhome'
  components: {
    gallerydetail,
  },
};
</script>

<style scoped>
#nameproject {
  font-size: 28px;
  font-weight: bold;
}

#nameplan {
  font-size: 20px;
}

#nameplan span {
  color: #ff4d6d;
}

#disception {
  margin: auto;
  width: 50%;
  padding: 3%;
}

#disception p {
  text-align: justify;
  font-size: 16px;
}

#disception span {
  color: #ff4d6d;
}

img {
  height: 50%;
  width: 50%;
  margin: 0 auto;
}

.iconroom {
  padding: 0px 100px 0px 100px;
}

.room p {
  margin-top: 10px;
}
.room {
  text-align: center;
  /* font-weight: bold; */
  font-size: 14px;
}
#room {
  width: 100px;
  height: 100px;
  background-color: rgb(239, 239, 239);
  border-radius: 10px;
  margin: auto;
  border-radius: 50%;
}

#area {
  font-size: 24px;
  /* font-weight: bold; */
}

#numarea {
  font-size: 36px;
  color: #ff4d6d;
}

#unitarea {
  font-size: 18px;
}

@media only screen and (max-width: 1180px) {
  #disception {
    margin: auto;
    width: 60%;
    padding: 1%;
  }

  #area {
    font-size: 20px;
    /* font-weight: bold; */
  }

  #numarea {
    font-size: 26px;
    color: #ff4d6d;
  }

  #unitarea {
    font-size: 14px;
  }
}

@media only screen and (max-width: 896px) {
  img {
    height: 50%;
    width: 50%;
    margin: 0 auto;
  }

  #disception {
    margin: auto;
    width: 80%;
    padding: 1%;
  }

  #disception p {
    font-size: 14px;
    margin-top: 10px;
  }

  #area {
    margin-top: 20px;
    font-size: 16px;
    /* font-weight: bold; */
  }

  #numarea {
    font-size: 20px;
    color: #ff4d6d;
  }

  #unitarea {
    font-size: 12px;
  }

  #room {
    width: 60px;
    height: 60px;
    background-color: rgb(239, 239, 239);
    border-radius: 10px;
    margin: auto;
    border-radius: 50%;
  }

  .room {
    font-size: 12px;
  }
}

@media only screen and (max-width: 414px) {
  img {
    height: 65%;
    width: 65%;
    margin: 0 auto;
  }

  #disception {
    margin: auto;
    width: 80%;
    padding: 1%;
  }

  #disception p {
    font-size: 10px;
    margin-top: 10px;
  }

  #area {
    margin-top: 20px;
    font-size: 16px;
    /* font-weight: bold; */
  }

  #numarea {
    font-size: 20px;
    color: #ff4d6d;
  }

  #unitarea {
    font-size: 12px;
  }

  #room {
    width: 60px;
    height: 60px;
    background-color: rgb(239, 239, 239);
    border-radius: 10px;
    margin: auto;
    border-radius: 50%;
  }

  .room {
    font-size: 12px;
  }
}
/* img {
    height: 65%;
    width: 65%;
  } */

/* img {
    height: 60%;
    width: 60%;
  } */
</style>
