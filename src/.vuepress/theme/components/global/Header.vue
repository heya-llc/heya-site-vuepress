<template>
    <header class="site-header">
        <div class="site-header__icon">
          <Icon />
        </div>
        <div class="site-header__content">
          <p>Development in progress... Please excuse the ugly.</p>
          <h1 class="heya--type-h1">
              <Logo />
              Let’s talk people, not problems.
          </h1>
          <h2 class="heya--type-h5">A digital practice bridging the gap between insights and execution for marketing, engineering and design teams at scale.</h2>
          <CTA v-bind:link="'#'" v-bind:text="'Get something on the books.'" />
        </div>
    </header>
</template>
<script>
import Logo from './Logo.vue'
import Icon from './Icon.vue'
import CTA from './CTA.vue'

export default {
  components: {
    Logo,
    Icon,
    CTA
  }
}
</script>

<style lang="scss">
@import '../../styles/colors';
@import '../../styles/layout';
@import '../../styles/spacing';

.site-header {
  display: grid;
  grid-template-columns: [left-gutter] 1fr [main] 7fr [void] 2fr [right-gutter] 2fr;
  grid-column-gap: 1rem;
  padding: $layout-md $spacing-md;
}

.site-header__icon {
  grid-column: right-gutter;
  text-align: center;
}

.site-header__content {
  padding: 0 $spacing-md;
  grid-column: left-gutter / end;

    @include breakpoint(bp--sm) {
      grid-column: main / void;
    }
}
</style>
