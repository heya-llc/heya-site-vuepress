<template>
    <section class="interstitial">
        <h2 class="heya--type-h5">Feeling inspired to strike up a conversation?</h2>
        <p class="cta heya--type-button"><a href="#">Get something on the books.</a></p>
    </section>
</template>

<script>
export default {
  props: ['alternate', 'interstitial',]
}
</script>

<style lang="scss">
@import '../styles/colors';
@import '../styles/layout';
@import '../styles/spacing';

.interstitial {
  padding: $layout-md $spacing-md;
}
</style>