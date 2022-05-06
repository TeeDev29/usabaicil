<template>
  <div class="cover">
    <div class="header">
      <div class="namelogo text-center">
        <img
          id="logo"
          src="https://www.u-sabai.com/wp-content/uploads/2020/08/The-Absolute-logo-on-Shadow-1-294x300.jpg"
        />
        <div class="nameproject mt-2">
          <p class="mb-0">THE ABSOLUTE</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cover {
  height: 35vw;
  /* background-color:rgb(105, 165, 255); */
}
.header {
  height: 28vw;
  width: 100%;
  padding: 0 8%;
  position: relative;
  background-color: rgb(255, 105, 112);

  /* display: block; */
}
#logo {
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0px 10px 0px 10px;

  /* width: 200px;
        height: 250px;
        margin: 10px auto;
        display: block;*/
}

.namelogo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 65%);
}

.nameproject p {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

@media only screen and (max-width: 1180px) {
  .header {
    min-height: 260px;
  }
  .cover {
    min-height: 280px;
  }
  #logo {
    width: 120px;
    height: 120px;
    background-color: #ffffff;
    border-radius: 10px;
    /* padding: 0px 10px 0px 10px; */
  }

  .namelogo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 70%);
    /* background-color:#ffd; */
  }
  .nameproject p {
    font-size: 18px;
  }
}

@media only screen and (max-width: 896px) {
  .header {
    min-height: 220px;
  }
  .cover {
    min-height: 240px;
  }
  #logo {
    width: 90px;
    height: 90px;
    background-color: #ffffff;
    border-radius: 10px;
    /* padding: 0px 10px 0px 10px; */
  }

  .namelogo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 60%);
    /* background-color:#ffd; */
  }
  .nameproject p {
    font-size: 14px;
  }
}

@media only screen and (max-width: 414px) {
  .header {
    min-height: 200px;
  }
  .cover {
    min-height: 220px;
  }
  #logo {
    width: 80px;
    height: 80px;
    background-color: #ffffff;
    border-radius: 10px;
    /* padding: 0px 10px 0px 10px; */
  }

  .namelogo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    /* background-color:#ffd; */
  }
  .nameproject p {
    font-size: 14px;
  }
}
</style>
