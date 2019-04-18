<template>
  <div
    class="container"
    :class="pageClasses"
  >
    <Header />
    <component v-if="$page.frontmatter.layout" :is="layout"/>
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

<style lang="scss">
@import './styles/colors';
@import './styles/layout';
@import './styles/spacing';

.container {
  display: block;
  max-width: 100vw;
}
</style>
