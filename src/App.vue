<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="width: 100%">
    <div class="container" style="justify-content: space-between">
      <a class="navbar-brand" href="#" style="color: #ff4d6d; font-weight: bold"
        ><img
          src="@/assets/logo2.png"
          alt=""
          width="50"
          height="50"
          class="d-inline-block align-item-center"
        />อยู่สบาย</a
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">หน้าแรก</router-link>
          <!-- <a class="nav-link active" aria-current="page" href="#">หน้าแรก</a> -->

          <a
            class="btn dropdown-toggle text-start"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="transition-duration: 0.2s"
          >
            โครงการ
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" >
            <li >
              <router-link class="dropdown-item" to="/homeproject"
                >บ้านชั้นเดี่ยว</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" to="/home2floorproject"
                >บ้านเดี่ยว 2 ชั้น</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" to="/communityproject"
                >community mall</router-link
              >
            </li>
          </ul>

          <!-- aaa -->
          <a class="dropdowncom nav-link" href="#" id="linkproject"
            >โครงการ
            <div class="dropdown-content">
              <router-link class="nav-link" to="/homeproject"
                ><p>บ้านชั้นเดี่ยว</p></router-link
              >
              <router-link class="nav-link" to="/home2floorproject"
                ><p>บ้านเดี่ยว 2 ชั้น</p></router-link
              >
              <router-link class="nav-link" to="/communityproject"
                ><p>community mall</p></router-link
              >
            </div>
          </a>
          <!-- end -->

          <router-link class="nav-link" to="/blog">U-sabai Blog</router-link>
          <!-- <a class="nav-link" href="#">ร่วมงานกับเรา</a> -->
          <router-link class="nav-link" to="/loancalculator"
            >คำนวณเงินกู้</router-link
          >
          <router-link class="nav-link" to="/workwithus"
            >ร่วมงานกับเรา</router-link
          >
          <router-link class="nav-link" to="/about">ติดต่อเรา</router-link>
          <!-- <router-link class="nav-link" to="/home/detail">แมว</router-link> -->
          <!-- <a class="nav-link" href="#">ติดต่อเรา</a> -->
        </div>
      </div>
    </div>
  </nav>

  <router-view />

  <FooterCPN />
</template>

<script>
import FooterCPN from "@/components/Footer.vue";
export default {
  components: {
    FooterCPN,
  },
};
</script>

<style scoped>

/* background-color:#000; */





ul{
  border: 0px ;
}

.btn {
  display: none;
}

.dropdowncom {
  display: block;
}

.navbar-toggler {
  border: 0px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav router-link-exact-active {
  color: #42b983;
}

.item-menu button {
  text-align: left;
  font-size: 16px;
}

.nav-link {
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
}

.arrow-icon {
  transform: rotate(180deg);
}

.dropdown-content {
  display: none;
  /* margin-top: 20px; */
  position: absolute;
  background-color: #ececec;
  width: 250px;
  z-index: 1;
  margin-left: -80px;
}

.dropdown-content p {
  font-weight: bold;
  margin-left: 40px;
  margin-bottom: 10px;
  margin-top: 10px;
}

#linkproject:hover .dropdown-content {
  display: block;
}

@media only screen and (max-width: 990px) {
  .btn {
    display: block;
  }

  .dropdowncom {
    display: none;
  }
}
</style>
