<template>
  <div class="home">

   <HeaderCPN/>
   <SearchCPN/>
    <NewProjectCDN/>
    <CaroselCPN/>
    <BlogCPN />
    <ReviewsCPN/>
    <PrivilegeCPN/>
    <BusinessCPN/>

     <!-- <button @click="showAlert">Hello world</button> -->
     
  </div>

 <!-- <ul v-if="posts && posts.length">
      <li v-for="post of posts" v-bind:key="post.id">
         <p>{{post.id}}</p>
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul> -->

</template>

<script>

import HeaderCPN from '@/components/Home/Header.vue'
import SearchCPN from '@/components/Home/Search.vue'
import NewProjectCDN from '@/components/Home/Newprojects.vue'
import CaroselCPN from '@/components/Home/Carousel.vue'
import BlogCPN from '@/components/Home/Blog.vue'
import ReviewsCPN from '@/components/Home/Reviews.vue'
import PrivilegeCPN from '@/components/Home/Privilege.vue'
import BusinessCPN from '@/components/Home/Business.vue'

// import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    HeaderCPN,
    SearchCPN,
    NewProjectCDN,
    CaroselCPN,
    BlogCPN,
    ReviewsCPN,
    PrivilegeCPN,
    BusinessCPN

  },
    methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
  },


//,
//   data() {
//     return {
//       posts: [],
//       errors: []
//     }
//   },
//   // Fetches posts when the component is created.
//   created() {
//     axios.get(`http://jsonplaceholder.typicode.com/posts`)
//     .then(response => {
//       // JSON responses are automatically parsed.
//       this.posts = response.data
//       console.log(response.data)
//     })
//     .catch(e => {
//       this.errors.push(e)
//     })
//   }
 } 

</script>

<style>

@font-face {
  font-family: "Usabai";
  src: local("Usabai"),
   url(@/assets/fonts/Usabai-Regular.ttf) format("truetype");
}


@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@200&display=swap");

* {
  margin: 0;
  padding: 0;
  /* font-family: "Prompt", sans-serif; */
  font-family: "Usabai", sans-serif;
  box-sizing: border-box;
}

</style>