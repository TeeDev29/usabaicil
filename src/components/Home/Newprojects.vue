<template>
  <div class="container" >
    <div class="row">
      <p id="new-project">โครงการใหม่ที่น่าสนใจ</p>
      <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-0">
        <router-link to="/home/detail">
          <div class="cards">
            <img
              src="https://images.unsplash.com/photo-1593604340846-4fbe9763a8f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                at assumenda
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
          </div></router-link
        >
      </div>
      <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-0">
        <router-link to="/home/detail">
          <div class="cards">
            <img
              src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                at assumenda
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
        </router-link>
      </div>
      <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-0">
        <router-link to="/home/detail">
          <div class="cards">
            <img
              src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                at assumenda
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
        </router-link>
      </div>
    </div>
  </div>

  <router-view />
</template>

<script>
export default {
  name: "NewProjectCDN",
};
</script>

<style scoped>
.container{
margin-top: 60px;
}


#new-project {
  font-size: 26px;
  font-weight: bold;
  color: #ff4d6d;
  margin-bottom: 0;
}
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

@media only screen and (max-width: 1180px) {

  #new-project {
    font-size: 26px;
    margin-bottom: 0px;
  }

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
  #new-project {
    font-size: 20px;
    margin-bottom: 0px;
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

  .container{
margin-top: 80px;
}


  #new-project {
    font-size: 16px;
    margin-bottom: 0px;
  }
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
}
</style>
