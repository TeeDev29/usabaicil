<template>
  <div class="container mt-5">
    <div class="row">
      <p id="area">
        พื้นที่ใช้สอย : <span id="numarea">157</span
        ><span id="unitarea">ตาราง.เมตร</span>
      </p>
    </div>

    <div class="iconroom row mt-3">
      <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <div class="room">
          <img
            id="room"
            src="https://cdn-icons-png.flaticon.com/512/489/489874.png"
          />
          <p>ห้องนอน : 3 ห้อง</p>
        </div>
      </div>
      <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <div class="room">
          <img
            id="room"
            src="https://cdn-icons-png.flaticon.com/512/489/489874.png"
          />
          <p>ห้องนอน : 3 ห้อง</p>
        </div>
      </div>
      <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <div class="room">
          <img
            id="room"
            src="https://cdn-icons-png.flaticon.com/512/489/489874.png"
          />
          <p>ห้องนอน : 3 ห้อง</p>
        </div>
      </div>

      <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <div class="room">
          <img
            id="room"
            src="https://cdn-icons-png.flaticon.com/512/489/489874.png"
          />
          <p>ห้องนอน : 3 ห้อง</p>
        </div>
      </div>

      <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <div class="room">
          <img
            id="room"
            src="https://cdn-icons-png.flaticon.com/512/489/489874.png"
          />
          <p>ห้องนอน : 3 ห้อง</p>
        </div>
      </div>

      <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <div class="room">
          <img
            id="room"
            src="https://cdn-icons-png.flaticon.com/512/489/489874.png"
          />
          <p>ห้องนอน : 3 ห้อง</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.iconroom {
  padding: 0px 100px 0px 100px;
}

.room p {
  margin-top: 10px;
}
.room {
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}
#room {
  width: 80px;
  height: 80px;
  background-color: rgb(239, 239, 239);
  border-radius: 10px;
  margin: auto;
}

#area {
  font-size: 24px;
  font-weight: bold;
}

#numarea {
  font-size: 36px;
  color: #ff4d6d;
}

#unitarea {
  font-size: 18px;
}

@media only screen and (max-width: 1180px) {
  
   #area {
    font-size: 24px;
  }
  #numarea {
    font-size: 26px;
  }

  #unitarea {
    font-size: 24px;
  }
  .iconroom {
  padding: 0px;
}
#room {
  width: 70px;
  height: 70px;
}
.room p {
 font-size:14px;
}

}

@media only screen and (max-width: 896px) {

   #area {
    font-size: 20px;
  }
  #numarea {
    font-size: 22px;
  }

  #unitarea {
    font-size: 20px;
  }
  .iconroom {
  padding: 0px;
}
#room {
  width: 70px;
  height: 70px;
}
.room p {
 font-size:12px;
}


}

@media only screen and (max-width: 414px) {
  #area {
    font-size: 16px;
    font-weight: bold;
  }
  #numarea {
    font-size: 18px;
  }

  #unitarea {
    font-size: 16px;
  }
  .iconroom {
  padding: 0px;
}
#room {
  width: 70px;
  height: 70px;
}
.room p {
 font-size:10px;
}
}
</style>
