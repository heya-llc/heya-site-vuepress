<template>
    <footer class="site-footer">
        <p class="site-footer__summary heya--type-body1">
          <Logo />
          Connecting the dots between insights and execution can be a daunting proposition.
          Let’s work together to bring realistic solutions to the table and look smart in the 
          process. <strong>Let’s talk soon!</strong>
        </p>
        <p class="site-footer__social heya--type-body1">
          <span class="site-footer__icon">
            <Icon />
          </span><br />
          Connect with me on <a href="https://www.linkedin.com/company/heyallc/about/">LinkedIn</a> / Schedule a meeting on <a href="https://calendly.com/heyallc">Calendly</a>
        </p>
        <p class="site-footer__copyright heya--type-body2">© Heya, LLC</p>
    </footer>
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
@import '../../styles/colors';
@import '../../styles/layout';
@import '../../styles/spacing';

.site-footer {
  display: grid;
  grid-template-columns: [left-gutter] 1fr [main] 4fr [secondary] 6fr [right-gutter] 1fr;
  grid-column-gap: 1rem;
  padding: $layout-md $spacing-md;

    @include breakpoint(bp--xl) {
        padding-left: $layout-lg;
        padding-right: $layout-lg;
    }

  .site-footer__social {
    text-align: right;
    grid-column: left-gutter / end;
    line-height: 1;

    @include breakpoint(bp--sm) {
        grid-column: secondary / right-gutter;
    }

    a {
      font-weight: bold;

      &:link,
      &:visited {
        text-decoration: none;
        color: $dingy-dungeon;
      }

      &:hover,
      &:active {
        text-decoration: underline;
      }
    }
  }
}

.site-footer__summary {
    grid-column: left-gutter / end;

  @include breakpoint(bp--sm) {
      grid-column: main / secondary;
  }
}

.site-footer__copyright {
  text-align: right;
  grid-column: left-gutter / end;

  @include breakpoint(bp--sm) {
      grid-column: secondary / right-gutter;
  }
}

.site-footer__icon {
  display: inline-block;
}
</style>