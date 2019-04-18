<template>
    <div class="features">
        <h2 class="features__header heya--type-h3">{{header}}</h2>
        <ul
            class="features__list"
            :class="alternateClass"
        >
            <li class="features__list-item" v-for="feature in features">
                <h3 class="features__list-header heya--type-h4">{{feature.header}}</h3>
                <p class="heya--type-body1" v-if="feature.summary">{{feature.summary}}</p>
                <ul
                    class="features__sub-list"
                    v-if="feature.list"
                    v-for="item in feature.list"
                >
                    <li class="features__sub-list-item heya--type-body2">{{item}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['alternate', 'header', 'features'],
  computed: {

    alternateClass () {
      return this.alternate === true ? 'features__list--alt' : ''
    },

  }
}
</script>

<style lang="scss">
@import '../styles/colors';
@import '../styles/layout';
@import '../styles/spacing';

.features {
    display: grid;
    grid-template-columns: [main] 1fr [intro] 8fr;
    grid-column-gap: 1rem;
}

.features__header {
    grid-column: main / end;

    @include breakpoint(bp--sm) {
        grid-column: intro / end;
    }
}

.features__list {
    margin: 0;
    padding: 0;
    grid-column: main / end;
    list-style: none;

    @include breakpoint(bp--sm) {
        column-count: 2;
        column-fill: balance;
    }
}

.features__list--alt {
    @include breakpoint(bp--sm) {
        column-count: 3;
    }
}

.features__list-item {
    display: inline-block;
    margin: 0;
    padding: 0;

    break-inside: avoid;
}

.features__list-header {
    margin: 1ex 0 .75ex;
}

.features__sub-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.features__sub-list-item {
    margin: 0 0 1.5em 0;
    padding: 0;
}
</style>
