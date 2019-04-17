<template>
  <div
    class="theme-container"
    :class="pageClasses"
  >
    <Header />
    <div
      v-if="$page.frontmatter.layout"
    >
      <component :is="layout"/>
    </div>
    <Footer />
  </div>
</template>

<script>
require('normalize.css');
require('./styles/global.scss');

import Vue from 'vue'
import Header from './components/global/Header.vue'
import Footer from './components/global/Footer.vue'
import Home from './layouts/Home.vue'

export default {
  components: { 
    Header,
    Footer,
    Home
  },

  data () {
    return {
      // isSidebarOpen: false,
      pageClasses: ''
    }
  },

  computed: {
    layout () {
      // const { path } = this.$page
      return this.$page.frontmatter.layout
    }
  },

  methods: {
    
  }
}
</script>
