<template>
<div>
  <Header /> 
  <Section />
  <Footer />
</div>
</template>

<script>

import Footer from './components/Footer.vue'
import Section from './components/Section.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
  Header,
  Section,
  Footer,
  }
}
</script>

<style>

</style>
