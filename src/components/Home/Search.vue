<template>
  <div class="container mt-5" id="sec2">
    <div class="row">
      <div class="col-12 mb-2">
        <p class="title text-center fw-bold" style="color: #000000">
          สวัสดี ยินดีต้อนรับสู่โครงการ “ บ้านอยู่สบาย ”
        </p>
      </div>
      <div class="col-12 mb-5 text-center d-none">
        <div class="search d-inline-flex">
          <p class="fw-bold">ค้นหาโครงการ :</p>
          <input type="text" name="" />
        </div>
      </div>
      <div class="col-12">
        <div class="group-project">
         
              <button type="button" class="zone btn btn-danger">
                หัวทะเล
              </button>
     
              <button type="button" class="zone btn btn-danger">
                จอหอ
              </button>
      

              <button type="button" class="btn btn-danger">
                โครงการบ้านเดี่ยว
              </button>
       
        
              <button type="button" class="btn btn-danger">
                โครงการบ้านเดี่ยว 2 ชั้น
              </button>
           
           
              <button type="button" class="btn btn-danger">
                Comunity mall
              </button>
  
             
         
          <!-- <a href="http://" id="floor-one">โครงการบ้านเดี่ยว</a>
          <a href="http://" id="floor-two">โครงการบ้านเดี่ยว 2 ชั้น</a>
          <a href="http://" id="community">Comunity mall</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCPN",
};
</script>

<style scoped>

 .title {
    font-size: 26px;
  }


.search {
  display: inline;
}

.search input {
  margin: auto;
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: #c4c4c4;
}

.search p {
  margin: auto;
  padding: 5px;
  width: 50%;
  border-radius: 10px;
  font-size: 16px;
}

/* #floor-one,
#floor-two,
#community {
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  padding: 10px;
  border: 3px solid #ff4d6d;
  border-radius: 20px;
  margin-top: 30px;
  margin-left: 10px;
}

#floor-one:hover,
#floor-two:hover,
#community:hover {
  transition: 0.5s;
  color: #ffffff;
  box-shadow: inset 200px 0 0 0 #ff4d6d;
  /* background-color: #ff4d6d; 
} */
.btn{
  font-size: 16px;
  margin-left: 10px;
  background-color: #ffffff;
  color: #000000;
  border:2px solid #ff595e;
  font-weight: bold;
  border-radius: 10px;
}

.btn:hover{
  background-color: #ff595e;
   border:2px solid #ff595e;
}

.zone{
  border:2px solid #a2d2ff;
}

.zone:hover{
   background-color: #80c4ff;
     border:2px solid #80c4ff;
}

.group-project {
  display: block;
  height: 50px;
  margin-top: 15px;
  text-align: center;
}

@media only screen and (max-width: 1180px) {
}

@media only screen and (max-width: 896px) {
  .title {
    font-size: 16px;
  }

  .btn{
  font-size: 12px;
  margin: 5px 5px 5px 5px;
}
}

@media only screen and (max-width: 414px) {
  .title {
    font-size: 16px;
  }

  .btn{
  font-size: 12px;
  margin: 5px 5px 5px 5px;
}
}
</style>
