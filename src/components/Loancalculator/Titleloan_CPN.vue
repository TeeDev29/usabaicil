<template>
  <div class="container">
    <div class="row text-center mt-5">
      <p id="title">คำนวณเงินกู้ คำนวณสินเชื่อบ้านเบื้องต้น</p>
      <p  id="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#title {
  font-size: 36px;
  color: #ff4d6d;
}
#description {
  color: rgb(0, 0, 0);
}

@media only screen and (max-width: 414px) {
  #title {
  font-size: 18px;
  color: #ff4d6d;
  font-weight: bold;
}

#description{
  font-size: 12px;
}
}
</style>
