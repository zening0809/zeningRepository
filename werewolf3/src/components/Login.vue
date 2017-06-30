<template>
  <div id="login">
       <div class="button" @click="loginhandler">登录</div>
       <router-link tag="div" class="button" to="/register">注册</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {}
  },
  methods: {
      loginhandler(){
          console.log('恭喜你登录成功');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
