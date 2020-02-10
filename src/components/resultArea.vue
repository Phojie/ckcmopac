<template>
  <div class="text-center q-py-md q-mb-xl" style="min-height:600px">
    <ais-instant-search :search-client="searchClient" index-name="ckcmopac">
      <ais-configure :query="searchQueryValue">
        <ais-hits >
          <div slot-scope="{ items }">
            <div v-if="items.length > 0">
              <div class="row justify-center">
                <q-toolbar class="text-left col-md-8 col-xs-12">
                  <q-toolbar-title class="text-body1">
                    <span v-if="items.length === 1">Result:</span>
                    <span v-else>Results:</span>
                  </q-toolbar-title>
                  <q-space></q-space>
                  <div class="text-body1">
                    {{items.length}}
                    <span v-if="items.length === 1">item</span>
                    <span v-else>items</span>
                    found
                  </div>
                </q-toolbar>
              </div>
              <div class="row justify-center" v-for="item in items" :key="item.objectID">
                <div class="col-md-8 col-xs-12">
                  <q-card flat>
                    <q-card-section class="text-left">
                      <q-toolbar class="q-px-none">
                        <q-toolbar-title class="cursor-pointer text-h5 text-capitalize text-bold text-indigo-9">
                          {{item.title}}
                          <q-badge class="cursor-pointer" align="top">Details</q-badge>
                        </q-toolbar-title>
                      </q-toolbar>
                      <div class="row">
                        <div class="text-body1">
                          <div class="text-capitalize">Author: {{item.author}}</div>
                          <div class="text-capitalize">Call #: {{item.callNumber}}</div>
                          <div >Sublocation: <span class="text-uppercase">{{item.sublocation}}</span></div>
                          <div>Published {{item.copyright}}</div>
                        </div>
                        <q-space></q-space>
                        <div>
                          <div class="text-right text-weight-bold text-body2">{{item.accessionNumber.length}} of {{item.accessionNumber.length}} available</div>
                          <div class="q-my-sm text-right">
                            <q-rating
                              :value="0"
                              size="1.2em"
                              color="indigo"
                              readonly
                            />
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                  <q-separator />
                </div>
              </div>
            </div>
            <div v-else>
              <div class="text-h5 ">
               Sorry, no results.
              </div>
            </div>
          </div>
        </ais-hits>
      </ais-configure>
    </ais-instant-search>

  </div>
</template>

<script>
import algoliasearch from 'algoliasearch'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('catalog', ['searchQueryValue', 'loadingQuery'])
  },
  data () {
    return {
      searchQuery: '',
      searchClient: algoliasearch(
        'P6F88GRT6N',
        '118d66611e43127a92573cb4a9ff88ca'
      )
    }
  },
  methods: {
    transformItems (items) {
      return items.map(item => ({
        ...item,
        title: `<span class="text-green">${item.title.toUpperCase()}</span>`
      }))
    }
  }
}
</script>

<style>
.MyCustomHighlight {
  background-color: white !important;
  color: #ff5722 !important;
}
</style>
