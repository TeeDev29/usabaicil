<template>
  <div class="container ">
    <div class="row">
      <p id="titalbusiness">ธุรกิจในเครือบ้านอยู่สบาย</p>
    </div>

    <div class="all-card row">
      <div class="col">
        <a href="https://metapaht.com/">
          <div class="card-business">
            <img
              src="http://koratway.com/wp-content/uploads/2017/08/%E0%B9%80%E0%B8%A1%E0%B8%98%E0%B8%B2%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B9%8C4.jpg"
              class="feature-img"
            />
          </div>
        </a>
      </div>
      <div class="col">
        <a href="https://www.facebook.com/uvillekorat/">
          <div class="card-business">
            <img
              src="https://www.u-sabai.com/wp-content/uploads/2020/07/3.jpg"
              class="feature-img"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessCPN",
};
</script>

<style scoped>

.container{
  margin-top:80px;
}

#titalbusiness {
  font-size: 26px;
  font-weight: bold;
  color: #ff4d6d;
}

.all-card {
  margin-top: 10px;
}

.card-business {
  display: grid;
  /* width: 588px; */
  width: 100%;
  height: 300px;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  cursor: pointer;
  /* box-shadow: 0px 4px 4px rgba(10, 6, 6, 0.452); */
  border-radius: 5px 5px 5px 5px;
}

.card-business .feature-img {
  height: 100%;
  width: 100%;
  top: 0;
  left: 50;
  transform: scale(1.01);
}

@media only screen and (max-width: 1180px) {
  #titalbusiness {
    font-size: 26px;
  }
  .all-card {
    margin-top: 10px;
  }
  .card-business {
    width: 90%;
    height: 200px;
  }
}

@media only screen and (max-width: 896px) {
  #titalbusiness {
    font-size: 20px;
  }
  .all-card {
    margin-top: 10px;
  }
  .card-business {
    width: 100%;
    height: 150px;
  }
}

@media only screen and (max-width: 414px) {
  #titalbusiness {
    font-size: 16px;
  }
  .all-card {
    margin-top: 10px;
  }
  .card-business {
    width: 100%;
    height: 100px;
  }

  .container{
  margin-top:45px;
}

}
</style>
