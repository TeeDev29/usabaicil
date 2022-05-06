<template>
  <div class="container">
    <div class="row mt-5" style="margin-bottom: 100px">
      <div
        class="insert col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6"
      >
        <div class="inputloan">
          <div class="row">
            <p class="mb-0 mt-3"><b>วงเงินที่ต้องการขอกู้</b></p>
            <span class="money fw-bold"
              ><input
                type="text"
                name=""
                id=""
                placeholder="x,xxx,xxx"
              />&nbsp;บาท</span
            >
          </div>
          <div class="row">
            <p class="mb-0 mt-3"><b>ระยะเวลาที่ต้องการผ่อนชำระ</b></p>
            <span class="fw-bold"
              ><input
                type="text"
                name=""
                id=""
              />&nbsp;ปี</span
            >
            <p class="limityear mb-0 fw-bold">*สูงสุด 30 ปี</p>
          </div>
          <div class="row">
            <p class="mb-0 mt-3 mb-2"><b>อัตราดอกเบี้ยธนาคาร</b></p>
            <div class="d-inline-flex">
              <select
                class="bank form-select"
                aria-label="Default select example"
              >
                <option selected>เลือกธนาคาร</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="row">
            <p class="mb-0 mt-3 mb-2"><b>อัตราดอกเบี้ย</b></p>
            <div class="d-inline-flex">
              <select
                class="loan form-select"
                aria-label="Default select example"
              >
                <option selected>เลือกอัตราดอกเบี้ย</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <p id="persen">%</p>
            </div>
          </div>
        </div>
        <div class="row pb-3 mt-4 mb-3">
          <div class="col text-center">
            <button type="button" class="btn btn-primary">คำนวณเงินกู้</button>
          </div>
        </div>
      </div>

      <div
        class="answer col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6"
      >
        <div class="itemanswer">
          <div class="row">
            <p id="title">ผลการคำนวณเงินกู้</p>
          </div>
          <div class="row">
            <p id="answer">
              ยอดผ่อนชำระต่อเดือน <span>XX,XXX</span>&nbsp;&nbsp;&nbsp;&nbsp;บาท
            </p>
          </div>

          <div class="row">
            <p id="blog">ยื่นกู้ซื้อบ้าน <br />ต้องใช้เอกสารอะไรบ้าง ?</p>
            <a href="#">คลิกที่นี่</a>
          </div>

          <div class="row">
            <p id="note">
              *หมายเหตุ : Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Sit, rerum!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.answer {
  background-color: #ff4d6d;
  color: rgb(255, 255, 255);
}

input {
  width: 75%;
  outline: 0;
  border-width: 0 0 2px;
  border-color: rgb(118, 118, 118);
  background-color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
}

input:focus {
  border-color: #ff4d6d;
}

.limityear {
  color: rgb(169, 169, 169);
}
button {
  width: 40%;
  background-color: #ffffff;
  border: 3px solid #ff4d6d;
  color: #000;
  font-weight: bold;
}

button:hover {
  background-color: #ff4d6d;
  border: 3px solid #ff4d6d;
}

#title {
  font-size: 24px;
  padding: 28px 0px 0px 28px;
}
#answer {
  font-size: 16px;
  padding: 28px 0px 0px 50px;
}
#answer span {
  font-size: 36px;
  font-weight: bold;
  padding: 0px 0px 0px 60px;
}
#blog {
  font-size: 24px;
  margin-bottom: 0;
  padding: 28px 0px 0px 28px;
}

a {
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 28px;
  width: 15%;
}

a:hover {
  color: rgb(196, 196, 196);
}
#note {
  font-size: 14px;
  padding: 28px 0px 28px 28px;
  margin-bottom: 0;
}

.insert {
  background-color: #ffffff;
}
.inputloan {
  padding: 28px 0px 0px 100px;
}

#persen {
  padding: 10px 0px 0px 5px;
  margin-bottom: 0px;
  font-weight: bold;
}

.itemanswer {
  padding: 28px 0px 0px 60px;
}


.bank{
  width: 80%; 
  border: none;
  background-color: #fafafa;
}

.loan{
   width: 75%;
   border: none;
   background-color: #fafafa;
}


@media only screen and (max-width: 760px) {
  .inputloan {
    padding: 28px 0px 0px 10px;
  }
  .itemanswer {
    padding: 28px 0px 0px 10px;
  }
}

@media only screen and (max-width: 414px) {
  .inputloan {
    padding: 28px 0px 0px 10px;
  }
  .itemanswer {
    padding: 28px 0px 0px 0px;
  }

  .itemanswer #title {
    font-size: 16px;
  }

  #answer {
    font-size: 16px;
    padding: 28px 0px 0px 25px;
  }
  #answer span {
    font-size: 36px;
    font-weight: bold;
    padding: 0px 0px 0px 10px;
  }

  a {
  width: 20%;
}

input{
  width: 85%;
}

.bank{
  width: 90%; 
}

.loan{
   width: 85%;
}

}
</style>
