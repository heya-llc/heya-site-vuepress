<template>
    <section class="info" :class="alternateClass" :id="label">
        <header
            class="info__intro"
            v-if="info.intro"
        >
            <h2 class="info__label heya--type-overline">{{info.intro.label}}</h2>
            <h3 class="info__header heya--type-h2">{{info.intro.header}}</h3>
            <p class="info__summary heya--type-body1" v-if="info.intro.summary">{{info.intro.summary}}</p>
        </header>
        <div
            class="info__jump"
            v-if="info.jump"
        >
            <h3 class="info__jump-header heya--type-h6">{{info.jump.header}}</h3>
            <p class="info__jump-link heya--type-body2"><a :href="info.jump.link" :title="jumpTitle">{{info.jump.cta}}</a></p>
        </div>
        <div class="info__content">
            <Services 
                v-if="info.services"
                v-bind:services="info.services"
            />
            <Features
                v-if="info.features"
                v-bind:alternate="info.features.alternate"
                v-bind:header="info.features.header"
                v-bind:features="info.features.list"
            />
        </div>
    </section>
</template>

<script>
import Features from './Features.vue'
import Services from './Services.vue'

export default {
    components: { Features, Services },
    props: ['alternate', 'info',],
    computed: {

        alternateClass () {
            return this.alternate === true ? 'info--alt' : ''
        },

        jumpTitle() {
            return 'Jump to:' + this.info.intro.label
        },

        label() {
            return this.info.intro.label.toLowerCase()
        }
    }
}
</script>

<style lang="scss">
@import '../styles/colors';
@import '../styles/layout';
@import '../styles/spacing';

.info {
  display: grid;
  grid-template-columns: [left-gutter] 1fr [main] 1fr [intro] 8fr [right-gutter] 2fr;
  grid-column-gap: 1rem;
  padding: $layout-lg $spacing-xl;

    @include breakpoint(bp--xl) {
        padding-left: $layout-lg;
        padding-right: $layout-lg;
    }

    .info__header {
        color: $gold-foil;
    }
}

.info--alt {
    background-color: $dark-sienna;
    color: white;

    .info__header {
        color: $maximum-yellow-red;
    }
}

.info__intro {
    padding: 0 0 $layout-md 0;
    grid-column: left-gutter / end;

    @include breakpoint(bp--sm) {
        grid-column: intro / right-gutter;
    }
}

.info__jump {
    grid-column: intro / end;
    text-align: right;

    @include breakpoint(bp--sm) {
        grid-column: right-gutter / end;
    }
}

.info__jump-header {
    margin: 0;
}

.info__jump-link {
    margin: 0 0 $layout-md 0;

    & a:link,
    & a:visited {
        color: inherit;
    }

    & a:hover,
    & a:active {
        color: $dingy-dungeon;
    }
}

.info__content {
    grid-column: left-gutter / end;

    @include breakpoint(bp--sm) {
        grid-column: main / right-gutter;
    }
}

.info__label {
    display: block;
    margin: 0;
    padding-bottom: $spacing-md;
    max-width: 25%;
    border-bottom: 1px solid $dingy-dungeon;
}
</style>
