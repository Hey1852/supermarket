<template>
  <div>
    <h2>我是子组件111</h2>
    <slot name="name1">
      <div>
        <span>返回1</span>
      </div>
      <div>
        <span>主题1</span>
      </div>
      <div>
        <span>分享1</span>
      </div>
    </slot>

    <h2>我是子组件222</h2>
    <div>
      <slot name="name2">
        <div>
          <span>返回2</span>
        </div>
      </slot>
      <slot>
        <div>主题2</div>
      </slot>
      <slot>
        <div>分享2</div>
      </slot>
    </div>

    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>
