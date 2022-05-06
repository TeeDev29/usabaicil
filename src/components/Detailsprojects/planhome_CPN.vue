<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css"
  />

  <div class="container mt-5 mb-5">
    <div class="row">
      <p class="plan text-center fw-bold">แปลนบ้าน</p>
    </div>

    <div class="rowplan row">
      <div class="col p-1">
        <router-link to="/typehome">
          <div class="card">
            <img
              src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.6435-9/108192668_116538886795916_7556457964264020759_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeFvTFEJ4N2yWlQP7AK8EB3xUdWoCj_mXDdR1agKP-ZcN0Vgjc-zVNtBpTFR7MW080YvbhQnXdMRjPZjDzfaKqbT&_nc_ohc=5o4_iUpzQpsAX8FwF1I&_nc_ht=scontent.fbkk12-2.fna&oh=00_AT9P--Fne0Bk9s7IjJIqYdoANT5jLe9w2jlPFsSP8Dr2oA&oe=62978CDB"
              alt=""
            />
            <div class="name">
              <p>name</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col p-1">
        <router-link to="/typehome">
          <div class="card">
            <img
              src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/108950417_116525453463926_5544878786453734308_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeHiTkCcWUlSoUXhsPJo7YAZkaXe9RlRn3eRpd71GVGfd5AavJoYWUN5Zh3aAO4WhQQXLEMPpRqBOeMwr8nO-4-S&_nc_ohc=NHKQgLFr5zgAX_YDwUH&_nc_oc=AQnPWqmTUlAs9XO0DmQY4N_M6zmUOi1m72FIkAU_In3Kf94CqNM-ijqD70M3cVcbJ-M&_nc_ht=scontent.fbkk13-2.fna&oh=00_AT8JL9G2ujw2zmqRl-Ff6w7Ss0lm6yLBpOp9Piy1hiqj9Q&oe=62989330"
              alt=""
            />
            <div class="name">
              <p>name</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col p-1">
        <router-link to="/typehome">
          <div class="card">
            <img
              src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.6435-9/107317261_108923180890820_985639260903733393_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGJp5NMxwFIuN-YsAW-edKIhtcYIz9PD1iG1xgjP08PWDMrlgVH1M-0FosZIFwnkXBNGfVRuMaNRPXzu0RG2oZO&_nc_ohc=27Bxfbade88AX_1-DkG&_nc_ht=scontent.fbkk13-1.fna&oh=00_AT9Mi_2caBTeQ6GKxtb4-oxLFkZE9wGJaNj_LEk3yzgP9g&oe=629667AC"
              alt=""
            />
            <div class="name">
              <p>name</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <router-view />
</template>

<script>
export default {};
</script>

<style scoped>
.plan {
  font-size: 30px;
  color: #ff4d6d;
}

.card {
  box-sizing: border-box; /*paddingจะไม่คำนวณกับอันอืน*/
  height: 300px;
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
  cursor: pointer;
}

.name {
  position: absolute;
  z-index: 1; /*ย้ายวัตถุออกมาด้านหน้า*/
  font-size: 18px;
  /* left: 90%; */
  margin-top: 10px;
  /* transform: translateX(-50%); */
  font-weight: bold;
  margin-bottom: 0px;
  margin-left: 10px;
  color: #000;
  /* top: -25px; */
}

.name p {
  margin-bottom: 0px;
  background-color: #fff;
  padding: 0px 10px 0px 10px;
  border-radius: 3px;
}
img {
  width: 100%;
  height: 100%;
}

.card:hover {
  transition: 0.3s;
  transform: scale(1.01);
}

.btn-close {
  background-color: #f5f5f5;
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

.room p {
  margin-top: 10px;
}
.room {
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}
#room {
  width: 50px;
  height: 50px;
  background-color: rgb(239, 239, 239);
  border-radius: 50%;
  margin: auto;
}

@media only screen and (max-width: 1180px) {
  .plan {
    font-size: 26px;
  }

  .card {
    height: 200px;
  }
}

@media only screen and (max-width: 896px) {
  .plan {
    font-size: 20px;
  }

  .card {
    height: 150px;
  }

  .name {
    font-size: 14px;
  }

  .blogtital a {
    padding: 5px 2px 2px 2px;
    font-size: 10px;
  }
}

@media only screen and (max-width: 414px) {
  .plan {
    font-size: 16px;
  }

  .card {
    height: 100px;
  }

  .name {
    font-size: 10px;
    color: #000;
  }

  .blogtital a {
    /* padding: 5px 2px 2px 2px; */
    font-size: 8px;
  }

  .rowplan {
    margin-top:10px;
  }
}

/* img {
  height: 50%;
  width: 50%;
  margin: 0 auto;
} */

/* img {
    height: 65%;
    width: 65%;
  } */

/* img {
    height: 60%;
    width: 60%;
  } */
</style>
