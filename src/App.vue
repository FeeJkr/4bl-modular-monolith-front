<template>
  <div class="wrapper">
    <Aside/>

    <div class="content-wrapper" style="margin-left: 250px;">
      <router-view></router-view>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {Footer, Aside},
}
</script>
