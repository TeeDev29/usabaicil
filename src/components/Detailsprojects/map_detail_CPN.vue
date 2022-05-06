<template>
  <div class="container mt-5">
    <div class="row">
      <p class="title text-center fw-bold">สถานที่ตั้งบน Google Map</p>
    </div>
  </div>
  <div class="mapgoogle">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.601237455142!2d102.14762725791225!3d15.070156614728637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4cdc0e6e57cb6f8f!2sSymbolic%20By%20U-Sabai%20House!5e0!3m2!1sth!2sth!4v1650420732123!5m2!1sth!2sth"
      width="100%"
      height="360"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  font-size: 30px;

  color: #ff4d6d;
}

@media only screen and (max-width: 1180px) {
 .title {
    font-size: 26px;
  }
}


@media only screen and (max-width: 896px) {
    .title {
    font-size: 20px;
  }
}

@media only screen and (max-width: 414px) {
  .title {
    font-size: 16px;
  }
  
}


</style>
