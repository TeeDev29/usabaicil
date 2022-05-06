<template>
  <div class="facilities mt-5">
    <div class="container">
      <div class="row">
        <p class="title text-center fw-bold">สิ่งอำนวยความสะดวก</p>
      </div>
      <div class="row mt-2">
        <!-- <div class="facilities-item">

        </div> -->
        <div class="col-0 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
        <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
          <div class="facilities-item">
            <img
              id="facilities-item"
              src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
            />
            <p>สวนสาธารณะ</p>
          </div>
        </div>
        <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><div class="facilities-item">
            <img
              id="facilities-item"
              src="https://images.unsplash.com/photo-1568312558382-63df480555f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
            />
            <p>สนามเด็กเล่น</p>
          </div></div>
        <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><div class="facilities-item">
            <img
              id="facilities-item"
              src="https://images.unsplash.com/photo-1495714096525-285e85481946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNlY3VyaXR5JTIwc3lzdGVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
            />
            <p>ระบบรักษาความปลอดภัย</p>
          </div></div>
        <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><div class="facilities-item">
            <img
              id="facilities-item"
              src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
            />
            <p>สระว่ายน้ำ</p>
          </div></div>
        <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><div class="facilities-item">
            <img
              id="facilities-item"
              src="https://images.unsplash.com/photo-1534531105712-130df666d2a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
            />
            <p>นิติบุคคล</p>
          </div></div>
        <div class="col-0 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>



.title{
    font-size: 30px;
    
    color:#FF4D6D;
}
.facilities-item p {
  margin-top: 10px;
}

.facilities-item {
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}

#facilities-item {
  width: 120px;
  height: 120px;
  background-color: rgb(239, 239, 239);
  border-radius: 50%;
  margin: auto;
}

#facilities-item:hover{
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.521);
  transition: 0.2s;
  transform: scale(1.20);
  border-radius: 50%;
}


@media only screen and (max-width: 1180px) {
  .title{
    font-size: 26px;
}

.facilities-item {
  font-size: 12px;
}

#facilities-item {
  width: 110px;
  height: 110px;
}
}

@media only screen and (max-width: 896px) {
.title{
    font-size: 20px;
}

.facilities-item {
  font-size: 12px;
}

#facilities-item {
  width: 100px;
  height: 100px;
}
}

@media only screen and (max-width: 414px) {
  
.title{
    font-size: 16px;
}

.facilities-item {
  font-size: 10px;
}

#facilities-item {
  width: 70px;
  height: 70px;
}
}

</style>
