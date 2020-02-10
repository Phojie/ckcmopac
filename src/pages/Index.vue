<template>
  <q-page padding class="text-grey-10">
    <resultArea v-if="searchQueryValue !== ''"></resultArea>
    <libraryInformation v-else/>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PageIndex',
  components: {
    'resultArea': require('components/resultArea.vue').default,
    'libraryInformation': require('components/libraryInformation.vue').default
  },
  computed: {
    ...mapState('catalog', ['searchQueryValue'])
  }
}
</script>

<style scoped>
  .withBg1 {
    /* background-image:  */
    background-image: url('/statics/bgPictures/bg1.PNG');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
