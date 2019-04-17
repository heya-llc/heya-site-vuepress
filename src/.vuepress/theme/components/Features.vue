<template>
    <div class="features">
        <h2 class="features__headline heya--type-h3">{{header}}</h2>
        <ul
            class="features__list"
            :class="alternateClass"
        >
            <li v-for="feature in features">
                <h3 class="heya--type-h4">{{feature.header}}</h3>
                <p class="heya--type-body1" v-if="feature.summary">{{feature.summary}}</p>
                <ul
                    v-if="feature.list"
                    v-for="item in feature.list"
                >
                    <li class="heya--type-body2">{{item}}</li>
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
      return typeof this.alternate !== 'undefined' || this.alternate !== null ? 'features__list--alt' : ''
    },

  }
}
</script>

<style lang="scss">

</style>
