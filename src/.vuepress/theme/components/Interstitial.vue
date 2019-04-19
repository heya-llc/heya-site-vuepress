<template>
    <section class="interstitial">
        <h2 class="heya--type-h5">{{interstitial.header}}</h2>
        <CTA v-bind:link="interstitial.link" v-bind:text="interstitial.cta" />
    </section>
</template>

<script>
import CTA from './global/CTA.vue'

export default {
  components: {
    CTA
  },
  props: ['alternate', 'interstitial',]
}
</script>

<style lang="scss">
@import '../styles/colors';
@import '../styles/layout';
@import '../styles/spacing';

.interstitial {
  padding: $layout-md $spacing-xl;
  text-align: center;

    @include breakpoint(bp--xl) {
        padding-left: $layout-lg;
        padding-right: $layout-lg;
    }
}
</style>