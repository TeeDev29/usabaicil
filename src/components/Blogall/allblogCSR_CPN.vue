<template>
  <div class="container mt-5">
    <div class="row">
      <div class="blogtital">
        <p id="blog">U-Sabai <span>CSR</span></p>
      </div>
    </div>

    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3">
        <div class="card text-end">
          <img
            src="https://images.unsplash.com/photo-1651053382263-ca0ff593e711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=946&q=80"
            alt=""
          />
          <div class="name">
            <p>name</p>
            <span class="typechr">type</span>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3">
        <div class="card text-end">
          <img
            src="https://images.unsplash.com/photo-1651044450619-5ce74d316987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div class="name">
            <p>name</p>
            <span class="typechr">type</span>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3">
        <div class="card text-end">
          <img
            src="https://images.unsplash.com/photo-1651010908325-5c96faf141a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div class="name">
            <p>name</p>
            <span class="typechr">type</span>
          </div>
        </div>
      </div>

      <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3">
        <div class="card text-end">
          <img
            src="https://images.unsplash.com/photo-1650765814753-d7b2140bffa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
          <div class="name">
            <p>name</p>
            <span class="typechr">type</span>
          </div>
        </div>
      </div>
      <div class="col-0 col-sm-0 col-md-0 col-lg-4 col-xl-4 col-xxl-4 mt-3">
        <div class="card active text-end">
          <img
            src="https://images.unsplash.com/photo-1650960865643-eeecde3203d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
          <div class="name">
            <p>name</p>
            <span class="typechr">type</span>
          </div>
        </div>
      </div>
      <div class="col-0 col-sm-0 col-md-0 col-lg-4 col-xl-4 col-xxl-4 mt-3">
        <div class="card active text-end">
          <img
            src="https://images.unsplash.com/photo-1650912220351-653b96e7ecd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div class="name">
            <p>name</p>
            <span class="typechr">type</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <button type="button" class="btn btn-primary mt-3">LODE MORE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  width: 30%;
  font-size: 16px;
  background-color: #fff;
  border: 3px solid #ff4d6d;
  color: #000;
  font-weight: bold;
}

.btn:hover {
  background-color: #ff4d6d;
  border: 3px solid #ff4d6d;
}

.blogtital {
  display: inline-flex;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 20px;
}

.blogtital span {
  color: #ff4d6d;
}

#blog {
  font-size: 26px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 50px;
}

.card {
  box-sizing: border-box; /*paddingจะไม่คำนวณกับอันอืน*/
  height: 300px;
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
  cursor: pointer;
}

.type {
  font-size: 12px;
  background-color: #4d56ff;
  padding: 7% 10%;
  color: rgb(255, 255, 255);
  border-radius: 5px;
}

.typechr {
  font-size: 12px;
  background-color: #ff4d6d;
  padding: 7% 10%;
  color: rgb(255, 255, 255);
  border-radius: 5px;
}

.name {
  position: absolute;
  z-index: 1; /*ย้ายวัตถุออกมาด้านหน้า*/
  font-size: 20px;
  left: 90%;
  margin-top: 10px;
  transform: translateX(-50%);
  font-weight: bold;
  margin-bottom: 0px;
  /* top: -25px; */
}

.name p {
  margin-bottom: 0px;
}
img {
  width: 100%;
  height: 100%;
}

.card:hover {
  transition: 0.3s;
  transform: scale(1.01);
}

@media only screen and (max-width: 896px) {
  .btn {
    font-size: 14px;
    width: 30%;
    padding: 2px 2px 2px 2px;
  }

  .active {
    display: none;
  }

  #blog {
    font-size: 20px;
  }

  .blogtital {
    margin-bottom: 10px;
  }

  .card {
    height: 250px;
  }
  .type {
    font-size: 10px;
  }
  .typechr {
    font-size: 10px;
  }

  .name {
    font-size: 16px;
    left: 85%;
  }

  .blogtital a {
    padding: 5px 2px 2px 2px;
    font-size: 10px;
  }
}

@media only screen and (max-width: 414px) {
  .btn {
    font-size: 10px;
    width: 30%;
    padding: 2px 2px 2px 2px;
  }

  #blog {
    font-size: 16px;
  }

  .blogtital {
    margin-bottom: 10px;
  }

  .card {
    height: 150px;
  }
  .type {
    font-size: 8px;
  }
  .typechr {
    font-size: 8px;
  }

  .name {
    font-size: 14px;
    left: 85%;
  }

  .blogtital a {
    padding: 5px 2px 2px 2px;
    font-size: 10px;
  }
}
</style>
