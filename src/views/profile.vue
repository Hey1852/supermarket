<template>
  <div>
    <nav-bar>
      <div slot="left">返回</div>
      <div slot="center">profile</div>
      <div slot="right">分享</div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "../components/navBar";
export default {
  data() {
    return {};
  },
  components: {
    navBar,
  },
};
</script>

<style>
</style>
