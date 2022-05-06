<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <footer class="text-lg-start mt-5">
    <!-- Grid container -->
    <div class="container p-4">
      <!-- Section: Links -->
      <section class="">
        <!--Grid row-->
        <div class="row">
          <!-- Grid column -->
          <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-2 mx-auto mt-3">
            <p id="title" class="text-uppercase mb-3">โครงการ</p>
            <div class="project-item">
              <p>
                <a class="">the urbano</a>
              </p>
              <p>
                <a class="">u-12</a>
              </p>
              <p>
                <a class="">ultima</a>
              </p>
              <p>
                <a class="">symbolic</a>
              </p>
              <p>
                <a class="">aurora</a>
              </p>
              <p>
                <a class="">the absolute</a>
              </p>
              <p>
                <a class="">harmonize</a>
              </p>

              <p>
                <a class="">aspect</a>
              </p>

              <p>
                <a class="">the vela</a>
              </p>

              <p>
                <a class="">estella</a>
              </p>
            </div>
          </div>

          <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3 mx-auto mt-3">
            <p  id="title" class="text-uppercase mb-3 font-weight-bold">ทำเลโครงการ</p>
            <div class="typeproject">
              <p>
                <a class="">หัวทะเล</a>
              </p>
              <p>
                <a class="">จอหอ</a>
              </p>
            </div>
            <p id="title" class="mb-1 mt-4">
                 <!-- class="text-uppercase mt-5 mb-2 font-weight-bold"
              style="line-height: 30px" -->
              ติดต่อเรา <br />
              สำนักงานใหญ่
            </p>
            <p id="companyname">
              <b> บริษัท โชควิวัฒน์ พรอพเพอร์ตี จำกัด </b><br />
              777/708 หมู่ 8 หนองบัวศาลา เมือง นครราชสีมา นครราชสีมา 30000
            </p>
          </div>

          <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3 mx-auto mt-3">
            <p id="title" class="mb-1">โซนหัวทะเล</p>
<!-- class="text-uppercase mb-1 font-weight-bold" -->
            <p id="numphone"><b>สำนักงานขาย :</b> 099-246-2664</p>

            <p id="title" class="mb-1">
            <!--   class="text-uppercase mb-1 font-weight-bold"
              style="margin-top: 30px" -->
              โซนบึงทับช้าง
            </p>
            <p id="numphone"><b>สำนักงานขาย :</b> 099-264-2446</p>

            <p id="title" class="mt-2">
            <!--   class="text-uppercase mb-0 font-weight-bold"
              style="margin-top: 30px" -->
              ติดตาม U-sabai ได้ที่นี่
            </p>
            <p class="Social-item">
              <i class="fa-brands fa-facebook fa-xl"></i>
              <i class="fa-brands fa-instagram fa-xl"></i>
              <i class="fa-brands fa-twitter fa-xl"></i>
              <i class="fa-brands fa-youtube fa-xl"></i>
              <i class="fa-brands fa-tiktok fa-xl"></i>
              <i class="fa-brands fa-line fa-xl"></i>
            </p>

            <!-- <p class="Social-itemresponsive">
              <i class="fa-brands fa-facebook fa-xl"></i> 
              <i class="fa-brands fa-instagram fa-xl"></i>
              <i class="fa-brands fa-twitter fa-xl"></i>
              <i class="fa-brands fa-youtube fa-xl"></i>
              <i class="fa-brands fa-tiktok fa-xl"></i>
              <i class="fa-brands fa-line fa-xl"></i>
            </p> -->
          </div>

          <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-2 mx-auto mt-3">
            <img
              class="logocompany"
              src="@/assets/logo2.png"
             
              style="display: block; margin-left: auto; margin-right: auto"
            />
            <p id="website" class="text-center mt-4 fw-bold">WWW.U-sabai.co.th</p>
          </div>
          <!-- Grid column        width="100%"-->
        </div>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->
    </div>
    <!-- Grid container -->
  </footer>
</template>

<script>

export default {
  name: "FooterCPN",
  
};
</script>

<style scoped>

#title{
  font-size:20px;
  font-weight:bold;
}

 a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  cursor: pointer;
}

footer {
  background-color: #ffffff;
  color: black;
  width: 100%;
}

.project-item p {
  font-weight: bold;
  margin-bottom: 5px;
}

footer p {
  font-size: 15px;
}

.Social-item {
  margin-top: 22px;
}

.Social-item i {
  margin-left: 6px;
}

.typeproject p {
  margin-bottom: 10px;
  font-weight: bold;
}

.Social-itemresponsive {
  display: none;
}

.logocompany{
   /* width="100%" */
  width: 100%;

}

/*------------------- hover------------------- */

a:hover {
  color: #ff4d6d;
}

.fa-facebook:hover {
  color: #4255ff;
}
.fa-instagram:hover {
  color: #ff4262;

}

.fa-twitter:hover {
  color: #5eaeff;
}

.fa-youtube:hover {
  color: #ff0000;
}

.fa-tiktok:hover {
  color: #898989;
}

.fa-line:hover {
  color: #00b900;
}



@media only screen and (max-width: 1180px) {
.logocompany{
  width: 45%;
}
}

/*---------------------------------- media query-------------------------------- */
@media only screen and (max-width: 896px) {
.project-item p {
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 12px;
}

.typeproject p {
  margin-bottom: 8px;
  font-weight: bold;
  font-size:12px;
}

#companyname{
   font-size:10px;
}

#numphone{
  font-size:10px;
}
#title{
  font-size:16px;
}
.logocompany{
  width: 45%;
}
#website{
  font-size: 14px;
}
}


@media only screen and (max-width: 414px) {
  .project-item p {
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 12px;
}

.typeproject p {
  margin-bottom: 8px;
  font-weight: bold;
  font-size:12px;
}

#companyname{
   font-size:10px;
}

#numphone{
  font-size:10px;
}
#title{
  font-size:16px;
}
.logocompany{
  width: 80%;
}
#website{
  font-size: 10px;
}
}

</style>
