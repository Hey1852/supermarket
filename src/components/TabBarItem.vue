<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot v-if="!isActive" name="name2"></slot>
        <slot v-else name="name3"></slot>
        <div :class="{active:isActive}">
          <slot name="name1"></slot>
        </div> 
             
    </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      // isActive:true,  颜色的变化不能写死
    };
  },
  props: {
    path:{
      type:String,
      default(){
        return ''
      }
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods:{
    itemClick() {
      this.$router.replace(this.path)
    }
  }
};
</script>


<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  color: #8e8e8e;
}
.active {
  color: teal;
}
</style>