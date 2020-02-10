<template>
  <q-card square="" class="q-pb-xl q-pt-lg q-mb-lg bg-transparent text-white" flat>
    <q-card-section  class="q-gutter-y-md column content-center justify-center">
        <div class="text-center">
          <q-avatar size="170px">
            <q-img
              src="/statics/app-logo-128x128.png"
              spinner-color="white"
            />
          </q-avatar>
        </div>
        <div v-if="searchCatalog === ''">
          <div class="text-h6 text-center">
            Accelerating research discovery to shape a better future
          </div>
          <div class="text-weight-bolder text-h4 text-center">
            Today's research, tomorrow's innovation
          </div>
          <div style="font-size:18px" class="text-weight-medium q-mt-md text-center">
            Powered by <span class="text-weight-medium">Ckcm Tech v1.0</span>
          </div>
        </div>
    </q-card-section>
    <q-card-section class="row justify-center">
      <div class="col-md-7 col-sm-10 col-xs-12">
        <q-input
          outlined=""
          color="white"
          style="!important; border-radius:6px"
          class="bg-white shadow-4 full-width"
          input-class="text-subtitle1 text-weight-bold"
          autofocus
          v-model="searchCatalog"
          @input="searchQuery"
          :placeholder="label"
          >
          <template v-if="searchCatalog" v-slot:append>
            <q-icon name="close" @click.stop="searchCatalog = '';searchQuery(); " class="cursor-pointer" />
          </template>
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      searchCatalog: '',
      label: 'Search publications, articles, keywords, etc.'
    }
  },
  methods: {
    ...mapMutations('catalog', ['searchQueryMutation', 'loadingQueryMutation']),
    searchQuery () {
      if (this.searchCatalog !== '') {
        this.loadingQueryMutation(true)
      } else {
        this.loadingQueryMutation(false)
      }
      this.searchQueryMutation(this.searchCatalog)
    }
  }
}
</script>
