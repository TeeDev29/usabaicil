<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-12 text-center mt-5 mb-4 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6">

         <div class="hrcontect">
          <p id="titlecompany">Human Resources contact</p>
          <p>บริษัท โชควิวัฒน์ พรอพเพอร์ตี้ จำกัด</p>
          <p>777/708 หมู่ 8 หนองบัวศาลา เมืองนครราชสีมา นครราชสีมา 30000</p>
          <p>อีเมล hr@u-sabai.com</p>
          <p>ฝ่ายบุคคล : 098-331-5990</p>
        </div>

        
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6">
       <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963.696449691579!2d102.16683878767792!3d14.949022514622003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55f7428d324164bc!2sThe%20Urbano%20By%20U-Sabai%20House!5e0!3m2!1sth!2sth!4v1650269272167!5m2!1sth!2sth"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#map {
  height: 400px;
  width: 100%;
}

#titlecompany {
  font-size: 30px;
  color: #ef476f;
}
.hrcontect{
    font-weight: bold;
}

@media only screen and (max-width: 414px) {
  #titlecompany {
  font-size: 14px;
}
 .hrcontect{
   font-size: 12px;
 }
}
</style>
