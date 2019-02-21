<template>
  <v-layout>
    <v-flex text-xs-center>
      <logo/>
      <blockquote class="blockquote">&#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
