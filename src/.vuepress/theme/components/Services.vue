<template>
    <ul class="services">
        <li v-for="service in services">
            <span
                class="service__icon"
                v-if="service.icon"
                :class="iconClass(service.icon)"
            >
            </span>
            <h2 class="heya--type-h3">{{service.header}}</h2>
            <p class="heya--type-body1">{{service.summary}}</p>
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
        return 'service__icon--' + icon
    },

  }
}
</script>

