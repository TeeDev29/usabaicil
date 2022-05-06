<template>
  <div class="container mt-5">
    <div class="row">
      <p class="title text-center fw-bold">ทำเลที่ตั้ง</p>
    </div>
    <div class="row mt-2 text-center fw-bold">
      <div class="col-0 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
      <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <div class="nearby-item">
          <p id="name-nearby">เซ็นทรัลโคราช</p>
        </div>
        <p class="km mt-2">5 กิโลเมตร</p>
      </div>
      <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <div class="nearby-item">
          <p id="name-nearby">โลตัส</p>
        </div>
        <p class="km mt-2">5 กิโลเมตร</p>
      </div>
      <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <div class="nearby-item">
          <p id="name-nearby">โรงพยาบาลมหาราช</p>
        </div>
        <p class="km mt-2">5 กิโลเมตร</p>
      </div>
      <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <div class="nearby-item">
          <p id="name-nearby">มหาวิทยาลัย</p>
        </div>
        <p class="km mt-2">5 กิโลเมตร</p>
      </div>
      <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <div class="nearby-item">
          <p id="name-nearby">โรงเรียน</p>
        </div>
        <p class="km mt-2">5 กิโลเมตร</p>
      </div>
      <div class="col-4 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nearby-item {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: rgb(221, 221, 221);
  margin: 0 auto;
}

#name-nearby {
  padding: 40% 0;
}

.title {
  font-size: 30px;
  color: #ff4d6d;
}

@media only screen and (max-width: 1180px) {
   .title {
    font-size: 26px;
    color: #ff4d6d;
  }
  .nearby-item {
    width: 110px;
    height: 110px;
    font-size: 14px;
  }

  .km {
    font-size: 12px;
  }
}

@media only screen and (max-width: 896px) {
  .title {
    font-size: 20px;
    color: #ff4d6d;
  }
  .nearby-item {
    width: 100px;
    height: 100px;
    font-size: 14px;
  }

  .km {
    font-size: 12px;
  }
}

@media only screen and (max-width: 414px) {
  .title {
    font-size: 16px;
    color: #ff4d6d;
  }
  .nearby-item {
    width: 70px;
    height: 70px;
    font-size: 10px;
  }

  .km {
    font-size: 12px;
  }
}
</style>
