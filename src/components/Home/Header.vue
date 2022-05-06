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
            <div class="video-container">
              <!-- <iframe
                src="https://www.youtube.com/embed/w10cz3dy-h4?controls=0&autoplay=1&mute=1&list=PLvN18hja7aw_v4RS9ML2LLiYA3PdTVW5s&loop=1"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
             
                scrolling="auto"
                allowfullscreen
                class="d-block w-100"
              ></iframe> -->

              <video controls muted  ref="myVideoPlayer"  autoplay >
                <source src="@/assets/page.mp4" type="video/webm" />
                <source src="@/assets/page.mp4" type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1650960865660-241c2d255aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              class="imgmobile d-block w-100"
            />

            <!-- <video class="img-fluid" style="width: 100%;" autoplay loop muted>
              <source
                 href="page.mp4"
                type="video/mp4"
              />
            </video> -->
            <!-- <img
              src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
              class="d-block w-100"
            /> -->
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
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carobutton carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="text-title">
        <div class="container text-center">
          <p id="mainTitle">บ้านอยู่สบาย จุดเริ่มต้นของชีวิตที่ดี</p>
          <p id="subTitle">www.u-sabai.co.th</p>
          <p id="descriptionTitle">
           ลูกบ้านทุกท่าน คือ สมาชิกในครอบครัวของเรา เราจึงใส่ใจในทุกขั้นตอนการผลิตและการให้บริการ
          </p>
          <button type="button" class="btn mt-5">
            ลงทะเบียนรับส่วนลดและสิทธิประโยชน์
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="header d-none">
    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/w10cz3dy-h4?controls=0&autoplay=1&mute=1&list=PLvN18hja7aw_v4RS9ML2LLiYA3PdTVW5s&loop=1"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        width="100%"
        height="100%"
        scrolling="auto"
        allowfullscreen
      ></iframe>
    </div>

    <div class="text-title">
      <p id="mainTitle">บ้านอยู่สบาย จุดเริ่มต้นของชีวิตที่ดี</p>
      <p id="webTitle">www.u-sabai.co.th</p>
      <p id="descriptionTitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        ex distinctio sint recusandae <br />
        deleniti ab facilis quo debitis illo maxime.
      </p>

      <button
        type="button"
        class="btn"
        style="
          color: #fff;
          border: 3px #ff4d6d solid;
          background-color: #ff4d6d;
        "
      >
        ลงทะเบียนรับส่วนลดและสิทธิประโยชน์
        <i class="fa-solid fa-arrow-right-to-bracket"></i>
      </button>
      <br />
      <a href="#sec2" class="">
        <div class="Scroll-down">
          <p id="text-Scroll-down">เลื่อนลง (scroll down)</p>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
          >
            <path
              class="slide-11"
              fill="#ffffff"
              d="M6.832 10.516a.857.857 0 111.097-1.317l4.594 3.828L17.117 9.2a.857.857 0 011.098 1.317l-5.132 4.276a.853.853 0 01-.933.123.85.85 0 01-.187-.123l-5.131-4.276z"
            />
          </svg>
        </div>
      </a>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "HeaderCPN",
};
</script>

<style scoped>
/* .Scroll-down {
  margin-top: 200px;
  cursor: pointer;
}

#text-Scroll-down {
  text-align: center;
  margin-bottom: 0px;
  animation: slide-11 1s infinite alternate both cubic-bezier(1, -0.01, 0, 0.98);
}
.slide-11 {
  animation: slide-11 1s infinite alternate both cubic-bezier(1, -0.01, 0, 0.98);
}
@keyframes slide-11 {
  50% {
    opacity: 50%;
  }
  100% {
    transform: translateY(2px);
    opacity: 100%;
  }
}

.header {
  height: 46vw;
  width: 100%;
  padding: 0 8%;
  position: relative;
}

iframe {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  filter: brightness(0.4);
}
.header a{
   text-decoration: none;
   color: rgb(255, 255, 255);
}

.text-title {
  position: absolute;
  width: 100%;
  color: #ffffff;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.text-title #mainTitle {
  font-size: 3vw;
  font-weight: bold;
}

.text-title #webTitle {
  font-size: 0.9vw;
}

.descriptionTitle {
  font-size: 0.9vw;
}

.text-title button {
  margin-top: 71px;
  min-width: 300px;
  min-height: 50px;
} */
video{
  /* height: 100%; */
  min-height: 250px;
  width: 100%;
  
  /* aspect-ratio:16/9; */
}

.imgmobile{
  display: none;
}

.header {
  height: 32vw;
  /* height: 41vw; */
  min-height: 250px;
  width: 100%;
  /* background-color: #ff4d6d; */
}
.text-title {
  width: 100%;
  color: #000000;
}

iframe {
  width: 100%;
  height: 32vw;
  filter: brightness(0.4);
}

.content {
  position: absolute;
  height: 32vw;
  /* height: 41vw; */
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
  font-size: 14px;
  text-transform: uppercase;
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
    font-size: 16px;
    margin-bottom: 2px;
  }

  #subTitle {
    font-size: 10px;
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

video{
  display: none;
  min-height: 250px;
  width: 100%;
}
.imgmobile{
  display: block;
}

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
