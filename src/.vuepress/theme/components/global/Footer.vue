<template>
    <footer>
        <p>
            <Logo />
            Connecting the dots between insights and execution can be a daunting proposition.
            Let’s work together to bring realistic solutions to the table and look smart in the 
            process. <strong>Let’s talk soon!</strong>
        </p>
        <p>
          <Icon />
          Connect with me on <a href="#">LinkedIn</a> / Schedule a meeting on <a href="#">Calendly</a>
        </p>
        <p class="copyright">© Heya, LLC</p>
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