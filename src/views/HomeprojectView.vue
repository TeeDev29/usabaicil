<template>
  <HeaderPJH_CPN/>
  <RecommedPJH_CPN/>
  <AllcardHomePJH_CPN/>
</template>

<script>
  import HeaderPJH_CPN from '@/components/ProjectHome/HeaderPJH.vue'
  import RecommedPJH_CPN from '@/components/ProjectHome/RecommedPJH.vue'
  import AllcardHomePJH_CPN from '@/components/ProjectHome/AllcardhomePJH.vue'
export default {

      name: 'HomeProject',
      components:{
        HeaderPJH_CPN,
        RecommedPJH_CPN,
        AllcardHomePJH_CPN
      }

}
</script>

<style>

</style>