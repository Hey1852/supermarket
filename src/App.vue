<template>
  <div id="app">
    
    <router-view />
     <tab-control :titles="titles"></tab-control>
    <tab-bar>
      <tab-bar-item path='/home'>
        <img src="../src/assets/img/home.png" alt="" slot="name2">
        <img src="../src/assets/img/home-selected.png" alt="" slot="name3">
        <div slot="name1">Home</div>
      </tab-bar-item>

      <tab-bar-item path='/profile'>
       <img src="../src/assets/img/profile.png" alt="" slot="name2">
       <img src="../src/assets/img/profile-selected.png" alt="" slot="name3">
        <div slot="name1">Profile</div>
      </tab-bar-item> 
    </tab-bar>
  </div>
</template>
<script>
import tabControl from "./components/tabControl";
import TabBar from "./components/TabBar";
import TabBarItem from "./components/TabBarItem";

// import cpn from './components/cpn'
export default {
  data() {
    return {
      titles: ["新闻", "资讯", "热门"],
    };
  },
  methods: {

  },
  components: {
    tabControl,
    TabBar,
    TabBarItem
    
  },
};
</script>
<style>
  @import 'assets/css/normalize.css'
</style>
