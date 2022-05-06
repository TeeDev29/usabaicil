<template>
  <headerdetail/>
  <nameconceptdetail/>
  <plandetail/>
  <div class="d-none">
  <areadetail />
  <gallerydetail />
  </div>
  <facilitiesdetail/>
  <neabydetail/>
  <maptdetail/>
</template>

<script>
import headerdetail from '@/components/Detailsprojects/header_Detail_CPN.vue'
import nameconceptdetail from '@/components/Detailsprojects/name_concept_CPN.vue'
import plandetail from '@/components/Detailsprojects/planhome_CPN.vue'
import areadetail from '@/components/Detailsprojects/area_detail_CPN.vue'
import facilitiesdetail from '@/components/Detailsprojects/facilities_CPN.vue'
import neabydetail from '@/components/Detailsprojects/nearby_places_CPN.vue'
import maptdetail from '@/components/Detailsprojects/map_detail_CPN.vue'
import gallerydetail from '@/components/Detailsprojects/gallery_detail_CPN.vue'
export default {

    name: 'DetailView',
    components: {
      headerdetail,
      nameconceptdetail,
      plandetail,
      areadetail,
      facilitiesdetail,
      neabydetail,
      maptdetail,
      gallerydetail
    }

}
</script>

<style>

</style>