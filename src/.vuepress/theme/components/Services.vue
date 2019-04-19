<template>
    <ul class="services" :class="alternateClass">
        <li class="services__item" v-for="service in services">
            <span
                class="services__icon"
                v-if="service.icon"
                :class="iconClass(service.icon)"
            >
            </span>
            <h2 class="services__header heya--type-h3">{{service.header}}</h2>
            <p class="services__summary heya--type-body1">{{service.summary}}</p>
        </li>
    </ul>
</template>

<script>
export default {
  props: ['alternate', 'services'],
  computed: {

    alternateClass () {
      return typeof this.alternate !== 'undefined' || this.alternate !== null ? 'services--alt' : ''
    },

  },
  methods: {

    iconClass (icon) {
        return 'services__icon--' + icon
    },

  }
}
</script>

<style lang="scss">
@import '../styles/colors';
@import '../styles/layout';
@import '../styles/spacing';

.services {
    margin: 0 0 $layout-lg;
    padding: 0;
    list-style: none;
}

.services__item {
    display: grid;
    grid-template-columns: [service-icon] 1fr [service-header] 3fr [service-summary] 5fr;
    grid-column-gap: 1rem;
    margin: 0;
    padding: 0;
}

.services__icon {
    display: block;
    margin: $spacing-lg 0 0 0;
    width: 68px;
    height: 68px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    content: "";

    grid-column: service-icon / end;

    @include breakpoint(bp--lg) {
        grid-column: service-icon / service-header;
    }
}

.services__icon--consulting {
    background-image: url("../styles/images/icon-consulting.svg");
}

.services__icon--ux {
    background-image: url("../styles/images/icon-ux.svg");
}

.services__icon--communication {
    background-image: url("../styles/images/icon-communication.svg");
}

.services__icon--coaching {
    background-image: url("../styles/images/icon-coaching.svg");
}

.services__header {
    margin-bottom: 0;
    grid-column: service-icon / end;

    @include breakpoint(bp--lg) {
        grid-column: service-header / service-summary;
    }
}

.services__summary {
    grid-column: service-icon / end;

    @include breakpoint(bp--lg) {
        grid-column: service-summary / end;
    }
}
</style>