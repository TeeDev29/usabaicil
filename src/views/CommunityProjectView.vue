<template>
  <HeaderPJC_CPN/>
  <RecommedPJC_CPN/>
  <AllcardPJC_CPN/>
</template>

<script>
import HeaderPJC_CPN from '@/components/Projectcommunity/HeaderPJC.vue'
import RecommedPJC_CPN from '@/components/Projectcommunity/RecommedPJC.vue'
import AllcardPJC_CPN from '@/components/Projectcommunity/AllcardPJC.vue'
export default {

  name: 'CommunityProject',
  components: {
    HeaderPJC_CPN,
    RecommedPJC_CPN,
    AllcardPJC_CPN
  }
}
</script>

<style>

</style>