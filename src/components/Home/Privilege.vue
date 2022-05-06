<template>
      <div class="privilege" >
      <div class="container">
        <div class="row">
          <p id="titalprivilege">สิทธิพิเศษของลูกบ้าน เครืออยู่สบาย</p>
        </div>
      </div>

      <div
        class="privilege-container"
       
      >
        <div class="container pt-3 pb-3 " >
          <div class="row" style="margin:0 auto;">
            <div class="col-6 col-sm-2 col-md-3 col-lg-3 col-xl-2 col-xxl-3 mt-2 mb-2">
              <div class="card-privilege">
                <img
                  src="https://scontent.fbkk9-3.fna.fbcdn.net/v/t39.30808-6/277309959_498707975245670_5660415276130944707_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeH8HXReKZc3-fKTh533cPRtApKc_ZIe2gwCkpz9kh7aDC5WA4ko6l_4Z8MdHHBEfPLTCpKovl9wPzM_XliJsIiM&_nc_ohc=jMsXKJUJ_LQAX9dSJ25&tn=JsX_8jn-HZmwWy53&_nc_ht=scontent.fbkk9-3.fna&oh=00_AT-u90-BBtXYUoxBPQt8bkrkPaQtdz95eH7b0FRo_-wI7A&oe=626FF6D8"
                  class="feature-img"
                  alt="Terrain"
                />
              </div>
            </div>

            <div class="col-6 col-sm-2 col-md-3 col-lg-3 col-xl-2 col-xxl-3 mt-2 mb-2">
              <div class="card-privilege">
                <img
                  src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/277768523_498708135245654_7777667395791824496_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHuWCAuauWjfx2omzUP6z5GbsIOvw5QkPxuwg6_DlCQ_OCD5tsicReE-mqwv8259a_oT_Z7Re-MIUBH5aCeGT7p&_nc_ohc=xguioxSD4ngAX-5nxMO&_nc_ht=scontent.fbkk12-4.fna&oh=00_AT_dGQ7X1xtbtL-LyAa-7IpV_ddnET0Wth_olxhi78sC9Q&oe=626FACF8"
                  class="feature-img"
                  alt="Terrain"
                />
              </div>
            </div>

            <div class="col-6 col-sm-2 col-md-3 col-lg-3 col-xl-2 col-xxl-3 mt-2 mb-2">
              <div class="card-privilege">
                <img
                  src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/277732651_498708225245645_3015054153842153703_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHhgT0VjmWuVvRYx3nwTB8_1j1adIfBIq3WPVp0h8EireQmsgcN-OO9KPUc2Vkvt5BYL32BcKdkBRm4tTNhAV6U&_nc_ohc=SNAAEXHpz-wAX84NJEj&_nc_ht=scontent.fbkk12-1.fna&oh=00_AT98V0S44u3sDHFan-0sbMmxuxxkdgaEm06bWfLkA6TpLw&oe=62702BCB"
                  class="feature-img"
                  alt="Terrain"
                />
              </div>
            </div>

            <div class="col-6 col-sm-2 col-md-3 col-lg-3 col-xl-2 col-xxl-3 mt-2 mb-2">
              <div class="card-privilege">
                <img
                  src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/277357144_498708365245631_6132477361912782335_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFFpGxu4kp94HPQdOwpaK1dkbMoMOQufqiRsygw5C5-qBBB_ZXX8ecrdxmHeVcW2mFGnxbTXY1EqnO4HsrLvlCP&_nc_ohc=1UZl-Apc0NUAX9iGRNf&_nc_ht=scontent.fbkk12-1.fna&oh=00_AT9fm2Bf_4veRI31lKFTIMjoqwJlZ6sM6JxNszZx2x_P9Q&oe=6270B768"
                  class="feature-img"
                  alt="Terrain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'PrivilegeCPN'
}
</script>

<style scoped>
.privilege{
  margin-top: 80px;
}

.privilege-container{

  width: 100%; 
  background-color: #fbfbfb; 
  margin-top:0px;
}

#titalprivilege{
    font-size: 26px;
    font-weight: bold;
    color: #ff4d6d;
}
 .container{
    margin-top:0px;
  }



.card-privilege{
    display: grid;
    /* width: 280px; */
    width: 100%;
    height: 200px;
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    border-radius: 5px;
    cursor: pointer;
}


.card-privilege .feature-img{
    height: 100%;
    width: 100%;
    top: 0; 
    left: 50; 
    transform: scale(1.3);
}

.card-privilege:hover{
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.521);
    transition: 0.3s;
    transform:scale(1.01);
}

@media only screen and (max-width: 1180px) {
  #titalprivilege {
    font-size: 26px;
  }
   .container{
    margin-top:0px;
  }

  .card-privilege{
    width: 100%;
    height: 160px;
}
}

@media only screen and (max-width: 896px) {
  #titalprivilege {
    font-size: 20px;
  }
   .container{
    margin-top:0px;
  }

  .card-privilege{
    width: 100%;
    height: 100px;
}
}

@media only screen and (max-width: 414px) {

  .privilege{
  margin-top: 45px;
}


  #titalprivilege {
    font-size: 16px;
  }

  .container{
    margin-top:0px;
  }

  .card-privilege{
    width: 100%;
    height: 100px;
}


}

</style>