<template>
    <div class="features">
        <h2 class="features__headline">{{header}}</h2>
        <ul
            class="features__list"
            :class="alternateClass"
        >
            <li v-for="feature in features">
                <h3>{{feature.header}}</h3>
                <p v-if="feature.summary">{{feature.summary}}</p>
                <ul
                    v-if="feature.list"
                    v-for="item in feature.list"
                >
                    <li>{{item}}</li>
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
