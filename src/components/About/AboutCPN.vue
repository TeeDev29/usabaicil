<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />

  <div class="container">
    <div class="row">
      <img
        src="@/assets/logo2.png"
      />
      <p id="urlweb" class="text-center mt-3">U-sabai.ac.th</p>
    </div>
    <div class="row mt-5">
      <div
        class="col-12 d-flex justify-content-center mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
      >
        <div class="contect d-inline-flex">
          <div class="icon-facebook">
            <i class="fa-brands fa-facebook fa-3x fa-2x"></i>
          </div>
          <div class="linkfacebook">
            <a href="https://www.facebook.com/usabaigroupkorat"
              >Usabai Group korat<br
            /></a>
            <a href="https://www.facebook.com/usabaihuathalaekorat/"
              >บ้านอยู่สบาย - หัวทะเลโคราช</a
            >
            <br />
            <a>Usabai korat</a>
          </div>
        </div>
      </div>
      <div
        class="col-12 d-flex justify-content-center mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
      >
        <div class="contect d-inline-flex">
          <div class="icon-youtube">
            <i class="fa-brands fa-youtube fa-3x"></i>
          </div>
          <a
            id="linkcontect"
            href="https://www.youtube.com/channel/UCeMNYzUaw7bpKlUCkJQBqyQ"
            >U-Sabai Group</a
          >
        </div>
      </div>

      <div
        class="col-12 d-flex justify-content-center mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
      >
        <div class="contect d-inline-flex">
          <div class="icon-IG">
            <i class="fa-brands fa-instagram fa-3x"></i>
          </div>
          <a id="linkcontect" href="https://www.instagram.com/u_sabai/"
            >u_sabai</a
          >
        </div>
      </div>
      <div
        class="col-12 d-flex justify-content-center mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
      >
        <div class="contect d-inline-flex">
          <div class="icon-tiktok">
            <i class="fa-brands fa-tiktok fa-3x"></i>
          </div>
          <a id="linkcontect" href="https://www.tiktok.com/@u_sabai">u_sabai</a>
        </div>
      </div>

      <div
        class="col-12 d-flex justify-content-center mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
      >
        <div class="contect d-inline-flex">
          <div class="icon-twitter">
            <i class="fa-brands fa-twitter fa-3x"></i>
          </div>
          <a
            id="linkcontect"
            href="https://twitter.com/UsabaiGroup?t=GeKUSwpOF-guMw7x6jGBxA&s=09&fbclid=IwAR1A-kfWaurz7z3saKtCGFL2IcwVXdBm2VTRxJh7zV57zNTFkp07td87X6A"
            >@UsabaiGroup</a
          >
        </div>
      </div>
      <div
        class="col-12 d-flex justify-content-center mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
      >
        <div class="contect d-inline-flex">
          <div class="icon-line"><i class="fa-brands fa-line fa-3x"></i></div>
          <a
            id="linkcontect"
            href="https://page.line.me/698wfedw?openQrModal=true"
            >@u_sabai</a
          >
        </div>
      </div>
    </div>

    <div class="row text-center mt-5">
      <div class="company">
        <p><b>สำนักงานใหญ่</b></p>
        <p><b>บริษัท โชควิวัฒน์ พรอพเพอร์ตี จำกัด</b></p>
        <p>777/708 หมู่ 8 หนองบัวศาลา เมืองนครราชสีมา นครราชสีมา 30000</p>
      </div>
    </div>

    <div class="row mt-5">
      <div
        class="col-12 text-center col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
      >
        <div class="numphone-zone">
          <p><b>โซนหัวทะเล</b></p>
          <p><b>สำนักงานขาย :</b> 099-246-2664</p>
        </div>
      </div>
      <div
        class="col-12 text-center col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
      >
        <div class="numphone-zone">
          <p><b>โซนจอหอ</b></p>
          <p><b>สำนักงานขาย :</b> 099-264-2446</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 220px;
  height: 200px;
  margin: 0 auto;
}
i {
  width: 55px;
  height: 55px;
}

.fa-facebook {
  color: #297bfe;
}
.fa-twitter {
  color: rgb(70, 165, 255);
}

.fa-line {
  color: #70e000;
}

.fa-youtube {
  color: #ef233c;
}

.fa-instagram {
  background: -webkit-linear-gradient(
    #fcaf45,
    #fd1d1d,
    #c13584,
    #5851d8,
    #405de6
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fa-tiktok {
  filter: drop-shadow(3px 3px 0px #ff0050) drop-shadow(-3px -3px 0px #00f2ea);
}

.contect {
  width: 60%;
}

a {
  padding-left: 20px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
a:hover {
  color: #ff54b5;
}

#urlweb {
  font-weight: bold;
  color: rgb(97, 97, 97);
}

@media only screen and (max-width: 896px) {
  a {
    font-size: 10px;
  }
}

@media only screen and (max-width: 414px) {
  .linkfacebook a {
    font-size: 12px;
  }
  #linkcontect {
    font-size: 12px;
  }
  .company {
    font-size: 14px;
  }
  .numphone-zone {
    font-size: 14px;
  }
}
</style>
