<template>
  <div class="header">
    <div class="content">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide h-100 position-relative"
        data-bs-ride="carousel"
      >
        <div class="carobutton carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner h-100 w-100">
          <div class="carousel-item active" data-bs-interval="5000">
            <img
              src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
              class="d-block w-100"
            />
          </div>
        </div>
        <button
          class="carobutton carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            class="carobutton carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            class="carobutton carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      <div class="text-title">
        <div class="container">
          <p id="mainTitle">โครงการ บ้านเดี่ยว 2 ชั้น</p>
          <p id="subTitle">บ้านอยู่สบาย จุดเริ่มต้นของชิวิตที่ดี</p>
          <p id="descriptionTitle">จำนวนโครงการทั้งหมด 2 โครงการ</p>

          <button type="button" class="btn">
            ลงทะเบียนรับส่วนลดและสิทธิประโยชน์
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPJH2F",
};
</script>

<style scoped>
.header {
  height: 25vw;
  min-height: 250px;
  width: 100%;
  background-color: rgb(35, 90, 255);
}
.text-title {
  width: 100%;
  color: #000000;
}

.content {
  position: absolute;
  height: 25vw;
  min-height: 250px;
  width: 100%;
  background: linear-gradient(450deg, #00000092 0%, rgba(0, 0, 0, 0) 60%);
  color: #ffffff;
}

.text-title {
  position: absolute;
  width: 100%;
  color: #ffffff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.btn {
  margin-top: 10px;
  color: #fff;
  border: 3px #ff4d6d solid;
  background-color: #ff4d6d;
  box-shadow: 0px 0px 5px #ff4d6d;
}

#mainTitle {
  font-size: 36px;
  font-weight: bold;
}

#subTitle {
  font-size: 24px;
}

#descriptionTitle {
  font-size: 16px;
}


@media only screen and (max-width: 1180px) {
  #mainTitle {
    font-size: 26px;
    margin-bottom: 2px;
  }

  #subTitle {
    font-size: 16px;
    margin-bottom: 1px;
  }

  #descriptionTitle {
    font-size: 14px;
  }

  .carobutton {
    display: none;
  }
  .btn {
    font-size: 14px;
  }
}

@media only screen and (max-width: 844px) {
  #mainTitle {
    font-size: 18px;
    margin-bottom: 2px;
  }

  #subTitle {
    font-size: 12px;
    margin-bottom: 1px;
  }

  #descriptionTitle {
    font-size: 10px;
  }

  .carobutton {
    display: none;
  }
  .btn {
    font-size: 10px;
  }
}

@media only screen and (max-width: 414px) {
  #mainTitle {
    font-size: 18px;
    margin-bottom: 2px;
  }

  #subTitle {
    font-size: 12px;
    margin-bottom: 1px;
  }

  #descriptionTitle {
    font-size: 10px;
  }

  .carobutton {
    display: none;
  }
  .btn {
    font-size: 10px;
  }
}

</style>
