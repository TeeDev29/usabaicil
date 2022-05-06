<template>

  <headerBlogVue/>
  <allblog_CPN/>
  <allblogcsr_CPN/>
  
</template>

<script>
    import headerBlogVue from "@/components/Blogall/headerBlog.vue"
    import allblog_CPN from "@/components/Blogall/allblog_CPN.vue"
    import allblogcsr_CPN from "@/components/Blogall/allblogCSR_CPN.vue"
export default {
    components: {
        headerBlogVue,
        allblog_CPN,
        allblogcsr_CPN
    }
}
</script>

<style>

</style>