<template>
    <section class="info" id="services">
        <header
            class="info__intro"
            v-if="info.intro"
        >
            <h2>{{info.intro.label}}</h2>
            <h3>{{info.intro.heading}}</h3>
            <p v-if="info.intro.summary">{{info.intro.summary}}</p>
        </header>
        <div
            class="info__jump"
            v-if="info.jump"
        >
            <h3>{{info.jump.header}}</h3>
            <p><a :href="info.jump.link" :title="jumpTitle">{{info.jump.cta}}</a></p>
        </div>
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
    </section>
</template>

<script>
import Features from './Features.vue'
import Services from './Services.vue'

export default {
    components: { Features, Services },
    props: ['alternate', 'info',],
    computed: {
        jumpTitle() {
            return 'Jump to:' + this.info.intro.label
        }
    }
}
</script>
