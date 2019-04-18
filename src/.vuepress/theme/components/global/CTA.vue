<template>
    <p class="cta heya--type-button">
      <a class="cta__link" :href="link">{{text}}</a>
    </p>
</template>

<script>
export default {
  props: ['link', 'text',]
}
</script>

<style lang="scss">
@import '../../styles/colors';
@import '../../styles/layout';
@import '../../styles/spacing';

.cta__link {
  &:link,
  &:visited {
    text-decoration: none;
    color: $dingy-dungeon;
  }

  &:hover,
  &:active {
    text-decoration: underline;
  }

  &:after {
    position: relative;
    left: 1ex;
    top: 1ex;
    display: inline-block;
    width: 3.75ex;
    height: 3.75ex;
    background: url("../../styles/images/icon-cta.svg");
    background-size: cover;
    content: "";
  }
}

</style>