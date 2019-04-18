<template>
    <main class="layout">
        <!-- user links -->
        <template
        v-if="$page.frontmatter"
        v-for="section in $page.frontmatter.sections"
        >
            <Info
                v-if="section.type == 'info'"
                v-bind:info="section"
                v-bind:alternate="section.alternate"
            />
            <Interstitial
                v-if="section.type == 'interstitial'"
                v-bind:interstitial="section"
                v-bind:alternate="section.alternate"
            />
        </template>
    </main>
</template>

<script>
import Info from '../components/Info.vue'
import Interstitial from '../components/Interstitial.vue'

export default {
  components: { Info, Interstitial }
}
</script>

<style lang="scss">
.layout {
  grid-column: auto / auto;
}
</style>