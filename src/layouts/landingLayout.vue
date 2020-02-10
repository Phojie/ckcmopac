<template>
  <q-layout view="hhh lpR fff" >
    <q-header  elevated class="withBg1 text-white" >
      <q-toolbar class="q-px-md-lg">
        <!-- <q-btn
          class="xs"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        /> -->

        <div class="q-pa-sm" style="border-left:4px #fc3c02 solid">
          <div style="font-size:18px" class="text-truncate text-weight-bolder"> Online Public Access Catalog</div>
          <q-separator color="grey"></q-separator>
          <div class="text-caption"> ©Christ the King College de Maranding Inc.</div>
        </div>
        <q-space class="q-px-md"/>
        <div class="text-bold text-caption">
           <q-chip size="12px">
            <q-avatar icon="call" size="22px" color="indigo-7" text-color="white" />
            +63975-3317-875
          </q-chip>
        </div>
      </q-toolbar>
      <searchBar/>
    </q-header>

    <!-- <q-drawer
      behavior="mobile"
      v-model="leftDrawerOpen"
      bordered
      class="xs"
      content-class="bg-grey-1"
     >
      <q-list>
        <q-item-label header class="text-grey-8">Essential Links</q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-footer class="bg-white" bordered>
      <div class="text-center text-grey-8 q-py-lg">
        Copyright © 2020 <span class="text-bold">Online Public Access Catalog System</span>
        <br>
        ALLRIGHTS RESERVE
      </div>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink'
import searchBar from 'components/searchBar'
import { mapState } from 'vuex'
export default {
  name: 'MainLayout',
  components: {
    // EssentialLink,
    searchBar
  },
  computed: {
    ...mapState('catalog', ['searchQueryValue'])
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .withBg1 {
    /* background-image:  */
    background-image: linear-gradient(125deg,#3a3871 -10%,#13172e 100%);
    /* background-image: linear-gradient(125deg,#3f51b517 -10%,#1a237e 100%), url('/statics/bgPictures/bg1.PNG'); */
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
