<template>
  <div class="container mt-5">
    <div class="row">
      <p id="titlefrom">กรอกใบสมัครเบื้องต้น</p>
    </div>
    <div class="row mb-3">
      <div class="col-0 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"></div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <p id="labal">
          <b>เรียกตำแหน่งที่ต้องการสมัคร<span id="star">*</span> :</b>
        </p>
        <select class="form-select" aria-label="Default select example">
          <option selected>เลือกตำแหน่งงาน</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mt-3">
        <p id="labal">
          <b>ชื่อ<span id="star">*</span> :</b>
        </p>
        <input type="text" class="form-control" placeholder="ชื่อ" />
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mt-3">
        <p id="labal">
          <b>สกุล<span id="star">*</span> :</b>
        </p>
        <input type="text" class="form-control" placeholder="สกุล" />
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mt-3">
        <p id="labal">
          <b>เบอร์โทรศัพท์<span id="star">*</span> :</b>
        </p>
        <input type="number" class="form-control" placeholder="xxx-xxx-xxxx" />
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mt-3">
        <p id="labal">
          <b>email<span id="star">*</span> :</b>
        </p>
        <input
          type="email"
          class="form-control"
          placeholder="name@example.com"
        />
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mt-3">
        <p id="labal"><b>แนบ resume :</b></p>
        <input class="form-control" type="file" id="formFile" />
      </div>
      <div
        class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mt-3"
      ></div>
    </div>

    <div class="row mt-5">
      <div class="col text-center">
        <button type="button" class="btn btn-primary" style="width: 30%">
          ยื่นใบสมัคร
        </button>
      </div>

      <p id="note" class="text-center mt-3">
        <span id="star">*</span>หมายเหตุ :
        เมื่อส่งใบสมัครมาแล้วฝ่ายบุคคลจะพิจารณาและติดต่อกลับ
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#titlefrom {
  font-size: 24px;
  font-weight: bold;
  color: #ef476f;
  text-align: center;
}
#star {
  color: #ef476f;
}

#note {
  font-size: 14px;
}
.form-select {
  width: 65%;
}

.btn {
  color: rgb(0, 0, 0);
  background-color: #fff;
  border: 2px solid #ef476f;
}

.btn:hover {
  color: #fff;
  background-color: #ef476f;
  border: 2px solid #ef476f;
}

@media only screen and (max-width: 414px) {
  #titlefrom {
    font-size: 16px;
  }

  #note {
    font-size: 12px;
  }
  .form-select {
    width: 100%;
  }
  #labal {
    font-size: 14px;
    margin-bottom: 2px;
  }
}
</style>
