<template>
    <header class="site-header">
      <p>Development in progress... Please excuse the ugly.</p>
        <Icon />
        <h1 class="heya--type-h1">
            <Logo />
            Let’s talk people, not problems.
        </h1>
        <h2 class="heya--type-h5">A digital practice bridging the gap between insights and execution for marketing, engineering and design teams at scale.</h2>
        <p class="cta heya--type-button"><a href="#">Get something on the books.</a></p>
    </header>
</template>
<script>
import Logo from './Logo.vue'
import Icon from './Icon.vue'

export default {
  components: {
    Logo,
    Icon
  }
}
</script>

<style lang="scss">
@import '../../styles/spacing';

.site-header {
  padding: 0 $spacing-md;
}
</style>
