<template>
  <MainStyle />
  <HeaderPage />
  <router-view />
  <FooterPage />
</template>

<script>
import FooterPage from './components/FooterPage.vue';
import HeaderPage from './components/HeaderPage.vue';
import MainStyle from './components/MainStyle.vue';



export default {
  name: 'App',
  components: {
    MainStyle,
    HeaderPage,
    FooterPage
  },

}
</script>

<style></style>
